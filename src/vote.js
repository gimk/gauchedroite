// functions/api/vote.js
import { SEED_VOTES } from './seed-data.js';

// In-memory fallback map initialized from SEED_VOTES
// Used when context.env.DB is not bound (e.g. quick preview, local testing without D1)
const memoryVotes = new Map();
for (const [word, counts] of Object.entries(SEED_VOTES)) {
  memoryVotes.set(word, { left: counts.left, right: counts.right });
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8',
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: CORS_HEADERS,
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
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

/**
 * Handle POST /api/vote
 * Body: { word: string, side: "left" | "right" }
 */
export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  const word = typeof body?.word === 'string' ? body.word.trim() : '';
  const side = body?.side;

  if (!word) {
    return jsonResponse({ error: "Field 'word' is required" }, 400);
  }
  if (side !== 'left' && side !== 'right') {
    return jsonResponse({ error: "Field 'side' must be 'left' or 'right'" }, 400);
  }

  const seedLeft = SEED_VOTES[word]?.left ?? 25;
  const seedRight = SEED_VOTES[word]?.right ?? 25;

  let leftVotes;
  let rightVotes;

  // 1. Try Cloudflare D1 if bound
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

  // 2. Fallback to in-memory store if DB was not bound or failed
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
  });
}

/**
 * Handle GET /api/vote?word=...
 */
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const word = url.searchParams.get('word')?.trim();

  if (!word) {
    return jsonResponse({
      status: "ok",
      name: "Gauche / Droite Voting API",
      message: "Pass ?word=<word> to inspect current votes.",
      totalWordsSeeded: Object.keys(SEED_VOTES).length
    });
  }

  const seedLeft = SEED_VOTES[word]?.left ?? 25;
  const seedRight = SEED_VOTES[word]?.right ?? 25;

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
  });
}
