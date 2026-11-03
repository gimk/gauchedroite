/**
 * GAUCHE / DROITE — Artsy Minimalist Editorial Web Experience
 * Pure Vanilla ES6 JavaScript
 */

(() => {
  'use strict';

  // ============================================================================
  // Curated Editorial French Word Bank (Sparking lively debates)
  // ============================================================================
  const FALLBACK_WORDS = [
    "Quinoa",
    "Barbecue",
    "Trottinette",
    "Randonnée",
    "Astrologie",
    "Kombucha",
    "Saucisson",
    "Decathlon",
    "Camping-car",
    "Rolex",
    "Télétravail",
    "Biocoop",
    "Cachemire",
    "Birkenstock",
    "Pain au chocolat",
    "Chocolatine",
    "Sarouel",
    "Loto",
    "Tatouage",
    "Brocante",
    "Vin nature",
    "Thermomix",
    "Ricard",
    "Régate",
    "Bordeaux",
    "Arte",
    "Cravate",
    "Vélo cargo",
    "Camembert",
    "Totebag",
    "Panama",
    "Houmous",
    "Pétanque",
    "Veja",
    "SUV",
    "Monoprix",
    "Sieste",
    "Podcast",
    "Bricolage",
    "Yoga",
    "Chasse",
    "Mocassins",
    "Viager",
    "Vinted",
    "Horoscope",
    "Scrabble",
    "Permaculture",
    "Raclette",
    "Champagne"
  ];

  // ============================================================================
  // LocalStorage Persistence Keys
  // ============================================================================
  const STORAGE_KEY_STATS = 'gd_game_stats_v1';

  // ============================================================================
  // Game States
  // ============================================================================
  const STATES = {
    VOTING: 'VOTING',
    REVEALING: 'REVEALING',
    REVEALED: 'REVEALED'
  };

  let currentState = STATES.VOTING;
  let wordList = [];
  let currentWord = "";
  let wordIndex = 1;
  let revealTimestamp = 0;
  const ADVANCE_GUARD_DELAY_MS = 200; // Guard against accidental instant advance

  // Player Stats Object
  let stats = {
    streak: 0,
    bestStreak: 0,
    totalPlayed: 0,
    totalWins: 0,
    seenWords: []
  };

  // DOM Elements Cache
  const DOM = {
    body: document.body,
    viewport: document.getElementById('viewport'),
    panelLeft: document.getElementById('panel-left'),
    panelRight: document.getElementById('panel-right'),
    splitDivider: document.getElementById('split-divider'),
    wordCard: document.getElementById('word-card'),
    mainWord: document.getElementById('main-word'),
    metaIndex: document.getElementById('meta-index'),
    verdictBanner: document.getElementById('verdict-banner'),
    verdictPill: document.getElementById('verdict-pill'),
    verdictText: document.getElementById('verdict-text'),
    verdictIcon: document.getElementById('verdict-icon'),
    percentLeft: document.getElementById('percent-left'),
    percentRight: document.getElementById('percent-right'),
    votesLeft: document.getElementById('votes-left'),
    votesRight: document.getElementById('votes-right'),
    badgeLeft: document.getElementById('badge-left'),
    badgeRight: document.getElementById('badge-right'),
    promptVote: document.getElementById('prompt-vote'),
    promptContinue: document.getElementById('prompt-continue'),
    btnContinue: document.getElementById('btn-continue'),
    statStreak: document.getElementById('stat-streak'),
    statBest: document.getElementById('stat-best'),
    statMajority: document.getElementById('stat-majority'),
    statWins: document.getElementById('stat-wins')
  };

  // ============================================================================
  // Magnetic Hover Physics (Spring Lerp Loop)
  // ============================================================================
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, inside: false };
  let spring = {
    pullX: 0,
    pullY: 0,
    rot: 0,
    split: 50,
    targetPullX: 0,
    targetPullY: 0,
    targetRot: 0,
    targetSplit: 50
  };

  function onMouseMove(e) {
    if (currentState !== STATES.VOTING) return;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.inside = true;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const halfW = width / 2;

    if (e.clientX < halfW) {
      // Hovering Left (Gauche)
      DOM.body.classList.add('hover-left');
      DOM.body.classList.remove('hover-right');

      const progress = Math.min(1, (halfW - e.clientX) / halfW);
      spring.targetPullX = -58 * Math.pow(progress, 0.85);
      spring.targetPullY = (e.clientY - height / 2) * 0.05;
      spring.targetRot = -2.2 * progress;
      spring.targetSplit = 50 + (3.6 * progress); // Left expands slightly into Blue
    } else {
      // Hovering Right (Droite)
      DOM.body.classList.add('hover-right');
      DOM.body.classList.remove('hover-left');

      const progress = Math.min(1, (e.clientX - halfW) / halfW);
      spring.targetPullX = 58 * Math.pow(progress, 0.85);
      spring.targetPullY = (e.clientY - height / 2) * 0.05;
      spring.targetRot = 2.2 * progress;
      spring.targetSplit = 50 - (3.6 * progress); // Right expands slightly into Red
    }
  }

  function onMouseLeave() {
    mouse.inside = false;
    DOM.body.classList.remove('hover-left', 'hover-right');
    if (currentState === STATES.VOTING) {
      spring.targetPullX = 0;
      spring.targetPullY = 0;
      spring.targetRot = 0;
      spring.targetSplit = 50;
    }
  }

  function physicsLoop() {
    if (currentState === STATES.VOTING) {
      const lerpFactor = 0.12;
      spring.pullX += (spring.targetPullX - spring.pullX) * lerpFactor;
      spring.pullY += (spring.targetPullY - spring.pullY) * lerpFactor;
      spring.rot += (spring.targetRot - spring.rot) * lerpFactor;
      spring.split += (spring.targetSplit - spring.split) * 0.09;

      document.documentElement.style.setProperty('--pull-x', `${spring.pullX.toFixed(2)}px`);
      document.documentElement.style.setProperty('--pull-y', `${spring.pullY.toFixed(2)}px`);
      document.documentElement.style.setProperty('--pull-rot', `${spring.rot.toFixed(2)}deg`);
      document.documentElement.style.setProperty('--split-pos', `${spring.split.toFixed(2)}%`);
    }

    requestAnimationFrame(physicsLoop);
  }

  // ============================================================================
  // Stats & LocalStorage Handling
  // ============================================================================
  function loadStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_STATS);
      if (raw) {
        const parsed = JSON.parse(raw);
        stats = {
          streak: parsed.streak || 0,
          bestStreak: parsed.bestStreak || 0,
          totalPlayed: parsed.totalPlayed || 0,
          totalWins: parsed.totalWins || 0,
          seenWords: Array.isArray(parsed.seenWords) ? parsed.seenWords : []
        };
      }
    } catch (err) {
      console.warn('Could not read stats from localStorage', err);
    }
    updateStatsUI();
  }

  function saveStats() {
    try {
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
    } catch (err) {
      console.warn('Could not save stats to localStorage', err);
    }
    updateStatsUI();
  }

  function updateStatsUI() {
    DOM.statStreak.textContent = stats.streak;
    DOM.statBest.textContent = stats.bestStreak;
    DOM.statWins.textContent = `${stats.totalWins}/${stats.totalPlayed}`;

    if (stats.totalPlayed > 0) {
      const pct = Math.round((stats.totalWins / stats.totalPlayed) * 100);
      DOM.statMajority.textContent = `${pct}%`;
    } else {
      DOM.statMajority.textContent = `0%`;
    }
  }

  // ============================================================================
  // Word Bank Loading & Randomization
  // ============================================================================
  async function loadWordBank() {
    try {
      const res = await fetch('/words.json');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // Supports both array of strings or array of objects with .word / .title
          wordList = data.map(item => (typeof item === 'string' ? item : (item.word || item.title || String(item))));
        } else {
          wordList = [...FALLBACK_WORDS];
        }
      } else {
        wordList = [...FALLBACK_WORDS];
      }
    } catch (e) {
      console.info('Using curated internal word bank:', e.message);
      wordList = [...FALLBACK_WORDS];
    }

    prepareNextWord();
  }

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getAvailableWords() {
    const unseen = wordList.filter(w => !stats.seenWords.includes(w));
    if (unseen.length === 0) {
      // All words seen: reset cycle cleanly
      stats.seenWords = [];
      saveStats();
      return wordList;
    }
    return unseen;
  }

  function prepareNextWord() {
    const available = getAvailableWords();
    const shuffled = shuffle(available);
    currentWord = shuffled[0] || "Quinoa";
    wordIndex = stats.totalPlayed + 1;
    displayCurrentWord();
  }

  function displayCurrentWord() {
    DOM.mainWord.textContent = currentWord;
    DOM.metaIndex.textContent = `N° ${wordIndex}`;
  }

  // ============================================================================
  // Voting & Community Results Reveal Logic
  // ============================================================================
  async function handleVote(side) {
    if (currentState !== STATES.VOTING) return;

    currentState = STATES.REVEALING;
    revealTimestamp = Date.now();
    DOM.body.classList.remove('hover-left', 'hover-right');
    DOM.body.classList.add('revealing');

    // Smoothly return center word offsets to 0
    spring.targetPullX = 0;
    spring.targetPullY = 0;
    spring.targetRot = 0;
    document.documentElement.style.setProperty('--pull-x', '0px');
    document.documentElement.style.setProperty('--pull-y', '0px');
    document.documentElement.style.setProperty('--pull-rot', '0deg');

    // Highlight user selection badge
    if (side === 'left') {
      DOM.badgeLeft.classList.add('is-selected');
      DOM.badgeRight.classList.remove('is-selected');
    } else {
      DOM.badgeRight.classList.add('is-selected');
      DOM.badgeLeft.classList.remove('is-selected');
    }

    // Call POST /api/vote with resilient fallback
    let voteResult;
    try {
      const response = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: currentWord, side })
      });

      if (response.ok) {
        voteResult = await response.json();
      } else {
        voteResult = generateFallbackVote(currentWord, side);
      }
    } catch (err) {
      console.warn('Backend vote API unavailable, using graceful fallback', err);
      voteResult = generateFallbackVote(currentWord, side);
    }

    processVerdictAndReveal(voteResult, side);
  }

  /**
   * Generates a deterministic, realistic community distribution
   * based on the word characters if the backend is temporarily offline.
   */
  function generateFallbackVote(word, side) {
    let hash = 0;
    for (let i = 0; i < word.length; i++) {
      hash = (hash << 5) - hash + word.charCodeAt(i);
      hash |= 0;
    }
    const absHash = Math.abs(hash);
    const totalVotes = 140 + (absHash % 260);
    // Range between 25% and 75%
    const leftPercent = 25 + (absHash % 51);
    const rightPercent = 100 - leftPercent;
    const leftVotes = Math.round((totalVotes * leftPercent) / 100);
    const rightVotes = totalVotes - leftVotes;

    let majoritySide = 'left';
    if (rightVotes > leftVotes) majoritySide = 'right';
    else if (rightVotes === leftVotes) majoritySide = side;

    return {
      word,
      leftVotes,
      rightVotes,
      totalVotes,
      leftPercent,
      rightPercent,
      userSide: side,
      majoritySide,
      won: side === majoritySide
    };
  }

  function processVerdictAndReveal(data, userSide) {
    const leftPct = typeof data.leftPercent === 'number' 
      ? data.leftPercent 
      : Math.round((data.leftVotes / ((data.leftVotes + data.rightVotes) || 1)) * 100);
    const rightPct = typeof data.rightPercent === 'number' 
      ? data.rightPercent 
      : (100 - leftPct);

    const isWinner = data.won === true || (data.userSide && data.userSide === data.majoritySide) || (data.majoritySide === userSide);

    // Update Player Stats
    stats.totalPlayed++;
    if (!stats.seenWords.includes(data.word)) {
      stats.seenWords.push(data.word);
    }

    if (isWinner) {
      stats.streak++;
      stats.totalWins++;
      if (stats.streak > stats.bestStreak) {
        stats.bestStreak = stats.streak;
      }
    } else {
      stats.streak = 0;
    }

    saveStats();

    // Clamp split boundary visually so both side numbers remain readable
    // On small screens clamp to 24%-76%, on desktop clamp to 18%-82%
    const minClamp = window.innerWidth < 640 ? 24 : 18;
    const maxClamp = 100 - minClamp;
    const clampedSplit = Math.max(minClamp, Math.min(maxClamp, leftPct));
    document.documentElement.style.setProperty('--split-pos', `${clampedSplit}%`);

    // Configure Verdict Banner
    DOM.verdictPill.classList.remove('is-winner', 'is-minority');
    if (isWinner) {
      DOM.verdictPill.classList.add('is-winner');
      DOM.verdictText.textContent = "DANS LA MAJORITÉ";
      DOM.verdictIcon.textContent = "✦";
    } else {
      DOM.verdictPill.classList.add('is-minority');
      DOM.verdictText.textContent = "EN MINORITÉ";
      DOM.verdictIcon.textContent = "—";
    }

    // Set vote counts text
    const lVotes = typeof data.leftVotes === 'number' ? data.leftVotes : Math.round((data.totalVotes || 100) * (leftPct / 100));
    const rVotes = typeof data.rightVotes === 'number' ? data.rightVotes : Math.round((data.totalVotes || 100) * (rightPct / 100));
    DOM.votesLeft.textContent = `${lVotes.toLocaleString('fr-FR')} votes`;
    DOM.votesRight.textContent = `${rVotes.toLocaleString('fr-FR')} votes`;

    // Architectural count-up animation for percentages
    animateCounter(DOM.percentLeft, 0, leftPct, 850);
    animateCounter(DOM.percentRight, 0, rightPct, 850);

    // Transition body state to revealed
    setTimeout(() => {
      DOM.body.classList.remove('revealing');
      DOM.body.classList.add('revealed');
      currentState = STATES.REVEALED;
    }, 180);
  }

  function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      element.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  // ============================================================================
  // Advance to Next Word Sequence
  // ============================================================================
  function advanceToNextWord() {
    if (currentState !== STATES.REVEALED) return;
    
    // Guard against immediate accidental click
    if (Date.now() - revealTimestamp < ADVANCE_GUARD_DELAY_MS) {
      return;
    }

    currentState = STATES.REVEALING;

    // Reset split smoothly back to 50%
    DOM.body.classList.remove('revealed');
    DOM.body.classList.add('resetting');
    document.documentElement.style.setProperty('--split-pos', '50%');
    spring.split = 50;
    spring.targetSplit = 50;

    // Animate word exit
    DOM.mainWord.classList.add('word-exit-up');

    // Deselect badges
    DOM.badgeLeft.classList.remove('is-selected');
    DOM.badgeRight.classList.remove('is-selected');

    setTimeout(() => {
      // Pick next word
      prepareNextWord();

      // Reset word animation classes
      DOM.mainWord.classList.remove('word-exit-up');
      DOM.mainWord.classList.add('word-enter-down');

      // Zero out percentage counters
      DOM.percentLeft.textContent = "0";
      DOM.percentRight.textContent = "0";

      requestAnimationFrame(() => {
        DOM.mainWord.classList.add('word-enter-active');
        DOM.mainWord.classList.remove('word-enter-down');

        setTimeout(() => {
          DOM.mainWord.classList.remove('word-enter-active');
          DOM.body.classList.remove('resetting');
          currentState = STATES.VOTING;
        }, 340);
      });
    }, 320);
  }

  // ============================================================================
  // Event Listeners (Mouse, Keyboard, Touch, Window)
  // ============================================================================
  function setupEventListeners() {
    // Mouse hover tracking
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });

    // Panel Clicks for Voting or Advancing
    DOM.panelLeft.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentState === STATES.VOTING) {
        handleVote('left');
      } else if (currentState === STATES.REVEALED) {
        advanceToNextWord();
      }
    });

    DOM.panelRight.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentState === STATES.VOTING) {
        handleVote('right');
      } else if (currentState === STATES.REVEALED) {
        advanceToNextWord();
      }
    });

    // Advance button click
    DOM.btnContinue.addEventListener('click', (e) => {
      e.stopPropagation();
      advanceToNextWord();
    });

    // Global click during revealed state advances to next
    window.addEventListener('click', () => {
      if (currentState === STATES.REVEALED) {
        advanceToNextWord();
      }
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (currentState === STATES.VOTING) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handleVote('left');
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleVote('right');
        }
      } else if (currentState === STATES.REVEALED) {
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          advanceToNextWord();
        }
      }
    });
  }

  // ============================================================================
  // Initialization
  // ============================================================================
  function init() {
    loadStats();
    setupEventListeners();
    physicsLoop();
    loadWordBank();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
