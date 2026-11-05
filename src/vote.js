// functions/api/vote.js
import { SEED_VOTES } from './seed-data.js';

// Pre-computed O(1) whitelist of valid words
const VALID_WORDS = new Set(Object.keys(SEED_VOTES));

// In-memory fallback map initialized from SEED_VOTES
// Used when context.env.DB is not bound (e.g. quick preview, local testing without D1)
const memoryVotes = new Map();
for (const [word, counts] of Object.entries(SEED_VOTES)) {
  memoryVotes.set(word, { left: counts.left, right: counts.right });
}

// ============================================================================
// Anti-Spam, Rate-Limiting & Per-Word Vote Deduplication
// ============================================================================
const RATE_LIMIT_WINDOW_MS = 60_000;      // 1 minute sliding window
const RATE_LIMIT_MAX_VOTES = 45;          // Max 45 votes per minute per IP
const MIN_VOTE_INTERVAL_MS = 350;         // Min 350ms between two votes from same IP
const WORD_COOLDOWN_MS = 24 * 3600_000;   // 24h cooldown before same IP can re-vote same word
const MAX_TRACKED_IPS = 10_000;           // Bound isolate memory usage

// ip -> { windowStart: number, count: number, lastVoteAt: number }
const ipRateLimits = new Map();
// `${ip}:${word}` -> timestamp
const recentWordVotes = new Map();

function getClientIp(request) {
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    'local-client'
  );
}

function isCrossSiteRequest(request) {
  const reqUrl = new URL(request.url);
  const origin = request.headers.get('Origin');
  if (origin && origin !== 'null') {
    try {
      const originUrl = new URL(origin);
      if (originUrl.host !== reqUrl.host) {
        return true;
      }
    } catch {
      return true;
    }
  }
  const secFetchSite = request.headers.get('Sec-Fetch-Site');
  if (secFetchSite && secFetchSite !== 'same-origin' && secFetchSite !== 'none') {
    return true;
  }
  return false;
}

function checkRateLimitAndDuplicate(ip, word) {
  const now = Date.now();

  // Evict oldest entries if maps grow too large
  if (ipRateLimits.size > MAX_TRACKED_IPS) {
    ipRateLimits.clear();
  }
  if (recentWordVotes.size > MAX_TRACKED_IPS * 5) {
    recentWordVotes.clear();
  }

  // 1. Check burst speed & per-minute rate limit
  let record = ipRateLimits.get(ip);
  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    record = { windowStart: now, count: 0, lastVoteAt: 0 };
    ipRateLimits.set(ip, record);
  }

  if (now - record.lastVoteAt < MIN_VOTE_INTERVAL_MS) {
    return { allowed: false, reason: 'too_fast' };
  }

  if (record.count >= RATE_LIMIT_MAX_VOTES) {
    return { allowed: false, reason: 'rate_limit' };
  }

  // 2. Check if this IP already voted for this specific word recently
  const wordKey = `${ip}:${word}`;
  const lastVotedWordAt = recentWordVotes.get(wordKey);
  if (lastVotedWordAt && now - lastVotedWordAt < WORD_COOLDOWN_MS) {
    return { allowed: false, reason: 'duplicate_word' };
  }

  // Record valid vote attempt
  record.count += 1;
  record.lastVoteAt = now;
  recentWordVotes.set(wordKey, now);

  return { allowed: true };
}

async function hasVotedInCache(request, ip, word) {
  if (typeof caches === 'undefined' || !caches.default) return false;
  try {
    const cacheKey = new Request(`https://vote-lock.internal/${encodeURIComponent(ip)}/${encodeURIComponent(word)}`);
    const match = await caches.default.match(cacheKey);
    return Boolean(match);
  } catch {
    return false;
  }
}

async function markVotedInCache(ip, word) {
  if (typeof caches === 'undefined' || !caches.default) return;
  try {
    const cacheKey = new Request(`https://vote-lock.internal/${encodeURIComponent(ip)}/${encodeURIComponent(word)}`);
    const res = new Response('1', {
      headers: { 'Cache-Control': 'public, max-age=86400' }
    });
    await caches.default.put(cacheKey, res);
  } catch {
    // Ignore cache errors in environments where Cache API is unavailable
  }
}

function getCorsHeaders(request) {
  const origin = request?.headers?.get('Origin');
  const reqHost = request ? new URL(request.url).origin : '*';
  const allowedOrigin = (!origin || origin === reqHost) ? (origin || reqHost) : reqHost;
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
    'Vary': 'Origin',
  };
}

function jsonResponse(data, status = 200, request = null) {
  return new Response(JSON.stringify(data), {
    status,
    headers: getCorsHeaders(request),
  });
}

/**
 * Executes atomic upsert in Cloudflare D1
 */
async function executeVoteD1(db, word, seedLeft, seedRight, side) {
  const isLeft = side === 'left' ? 1 : 0;
  const isRight = side === 'right' ? 1 : 0;

  const initialLeft = seedLeft + isLeft;
  const initialRight = seedRight + isRight;

  return await db.prepare(`
    INSERT INTO votes (word, left_votes, right_votes, updated_at)
    VALUES (?1, ?2, ?3, unixepoch())
    ON CONFLICT(word) DO UPDATE SET
      left_votes = left_votes + ?4,
      right_votes = right_votes + ?5,
      updated_at = unixepoch()
    RETURNING left_votes, right_votes;
  `).bind(word, initialLeft, initialRight, isLeft, isRight).first();
}

/**
 * Handle OPTIONS /api/vote (CORS preflight)
 */
export async function onRequestOptions(context) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(context?.request),
  });
}

/**
 * Handle POST /api/vote
 * Body: { word: string, side: "left" | "right" }
 */
export async function onRequestPost(context) {
  const { request } = context;

  // 1. Block cross-site POST requests
  if (isCrossSiteRequest(request)) {
    return jsonResponse({ error: "Cross-origin voting is not allowed" }, 403, request);
  }

  // 2. Reject oversized payloads (> 1KB)
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 1024) {
    return jsonResponse({ error: "Payload too large" }, 413, request);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400, request);
  }

  const word = typeof body?.word === 'string' ? body.word.trim() : '';
  const side = body?.side;

  if (!word) {
    return jsonResponse({ error: "Field 'word' is required" }, 400, request);
  }
  if (!VALID_WORDS.has(word)) {
    return jsonResponse({ error: "Unknown word" }, 400, request);
  }
  if (side !== 'left' && side !== 'right') {
    return jsonResponse({ error: "Field 'side' must be 'left' or 'right'" }, 400, request);
  }

  // 3. Enforce per-IP rate limiting & per-word vote deduplication
  const clientIp = getClientIp(request);
  const rateCheck = checkRateLimitAndDuplicate(clientIp, word);
  if (!rateCheck.allowed) {
    const status = rateCheck.reason === 'duplicate_word' ? 409 : 429;
    return jsonResponse(
      { error: "Vote rate limit or duplicate vote detected", reason: rateCheck.reason },
      status,
      request
    );
  }

  if (await hasVotedInCache(request, clientIp, word)) {
    return jsonResponse(
      { error: "Already voted for this word recently", reason: "duplicate_word" },
      409,
      request
    );
  }

  const seedLeft = SEED_VOTES[word].left;
  const seedRight = SEED_VOTES[word].right;

  let leftVotes;
  let rightVotes;

  // 4. Try Cloudflare D1 if bound
  if (context.env?.DB) {
    try {
      const result = await executeVoteD1(context.env.DB, word, seedLeft, seedRight, side);
      if (result) {
        leftVotes = Number(result.left_votes);
        rightVotes = Number(result.right_votes);
      }
    } catch (err) {
      // Auto-create table if not initialized yet and retry once
      const errMsg = String(err?.message || '');
      if (errMsg.includes('no such table')) {
        try {
          await context.env.DB.prepare(`
            CREATE TABLE IF NOT EXISTS votes (
              word TEXT PRIMARY KEY,
              left_votes INTEGER NOT NULL DEFAULT 0,
              right_votes INTEGER NOT NULL DEFAULT 0,
              updated_at INTEGER NOT NULL DEFAULT (unixepoch())
            );
          `).run();
          const retryResult = await executeVoteD1(context.env.DB, word, seedLeft, seedRight, side);
          if (retryResult) {
            leftVotes = Number(retryResult.left_votes);
            rightVotes = Number(retryResult.right_votes);
          }
        } catch (retryErr) {
          console.error("D1 auto-create table / retry failed:", retryErr);
        }
      } else {
        console.error("D1 vote execution error:", err);
      }
    }
  }

  // 5. Fallback to in-memory store if DB was not bound or failed
  if (leftVotes === undefined || rightVotes === undefined) {
    let current = memoryVotes.get(word);
    if (!current) {
      current = { left: seedLeft, right: seedRight };
      memoryVotes.set(word, current);
    }
    if (side === 'left') {
      current.left += 1;
    } else {
      current.right += 1;
    }
    leftVotes = current.left;
    rightVotes = current.right;
  }

  // Record the vote lock in Cloudflare Cache API (24h TTL across edge requests)
  await markVotedInCache(clientIp, word);

  const totalVotes = leftVotes + rightVotes;
  const leftPercent = totalVotes > 0 ? Math.round((leftVotes / totalVotes) * 100) : 50;
  const rightPercent = 100 - leftPercent;
  const majoritySide = leftVotes === rightVotes ? "tie" : (leftVotes > rightVotes ? "left" : "right");
  const won = (side === "left" && leftVotes >= rightVotes) || (side === "right" && rightVotes >= leftVotes);

  return jsonResponse({
    word,
    leftVotes,
    rightVotes,
    totalVotes,
    leftPercent,
    rightPercent,
    userSide: side,
    majoritySide,
    won
  }, 200, request);
}

/**
 * Handle GET /api/vote?word=...
 */
export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const word = url.searchParams.get('word')?.trim();

  if (!word) {
    return jsonResponse({
      status: "ok",
      name: "Gauche / Droite Voting API",
      message: "Pass ?word=<word> to inspect current votes.",
      totalWordsSeeded: VALID_WORDS.size
    }, 200, request);
  }

  if (!VALID_WORDS.has(word)) {
    return jsonResponse({ error: "Unknown word" }, 404, request);
  }

  const seedLeft = SEED_VOTES[word].left;
  const seedRight = SEED_VOTES[word].right;

  let leftVotes;
  let rightVotes;

  if (context.env?.DB) {
    try {
      const row = await context.env.DB.prepare(
        `SELECT left_votes, right_votes FROM votes WHERE word = ?1`
      ).bind(word).first();

      if (row) {
        leftVotes = Number(row.left_votes);
        rightVotes = Number(row.right_votes);
      }
    } catch (err) {
      console.error("D1 GET query failed:", err);
    }
  }

  if (leftVotes === undefined || rightVotes === undefined) {
    const current = memoryVotes.get(word);
    if (current) {
      leftVotes = current.left;
      rightVotes = current.right;
    } else {
      leftVotes = seedLeft;
      rightVotes = seedRight;
    }
  }

  const totalVotes = leftVotes + rightVotes;
  const leftPercent = totalVotes > 0 ? Math.round((leftVotes / totalVotes) * 100) : 50;
  const rightPercent = 100 - leftPercent;
  const majoritySide = leftVotes === rightVotes ? "tie" : (leftVotes > rightVotes ? "left" : "right");

  return jsonResponse({
    word,
    leftVotes,
    rightVotes,
    totalVotes,
    leftPercent,
    rightPercent,
    majoritySide
  }, 200, request);
}
