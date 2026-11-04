// scripts/generate-seed.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

/**
 * Curated list of 300 unique French common words and brands (150 Gauche / 150 Droite).
 * Rules:
 * - Zero personalities, politicians, celebrities, or historical figures.
 * - Zero geographic city/region names (only common words, everyday objects, foods, concepts, and brands).
 * - Zero semantic duplicates or near-synonyms.
 *
 * Leanings:
 * - "left"       : Clearly Gauche (66% - 88% Gauche)
 * - "lean-left"  : Neutral, leaning Gauche — slight difference (52% - 58% Gauche)
 * - "right"      : Clearly Droite (66% - 88% Droite)
 * - "lean-right" : Neutral, leaning Droite — slight difference (52% - 58% Droite)
 */
const WORDS_METADATA = [
  // ===========================================================================
  // CLEARLY GAUCHE ("left" : 66% - 88% Gauche) — 140 words
  // ===========================================================================
  { word: "Quinoa", leaning: "left" },
  { word: "Vélo cargo", leaning: "left" },
  { word: "Biocoop", leaning: "left" },
  { word: "Sarouel", leaning: "left" },
  { word: "Kombucha", leaning: "left" },
  { word: "Arte", leaning: "left" },
  { word: "Totebag", leaning: "left" },
  { word: "Permaculture", leaning: "left" },
  { word: "Yoga", leaning: "left" },
  { word: "Tofu", leaning: "left" },
  { word: "Vin nature", leaning: "left" },
  { word: "Houmous", leaning: "left" },
  { word: "Chorale", leaning: "left" },
  { word: "Zad", leaning: "left" },
  { word: "Sociologie", leaning: "left" },
  { word: "Birkenstock", leaning: "left" },
  { word: "Compost", leaning: "left" },
  { word: "Coopérative", leaning: "left" },
  { word: "Grève", leaning: "left" },
  { word: "Manif", leaning: "left" },
  { word: "Piste cyclable", leaning: "left" },
  { word: "Menu végétarien", leaning: "left" },
  { word: "Librairie", leaning: "left" },
  { word: "Céramique", leaning: "left" },
  { word: "Véganisme", leaning: "left" },
  { word: "Friperie", leaning: "left" },
  { word: "Colocation", leaning: "left" },
  { word: "Méditation", leaning: "left" },
  { word: "Maté", leaning: "left" },
  { word: "Amap", leaning: "left" },
  { word: "Savon d'Alep", leaning: "left" },
  { word: "Cinéma d'auteur", leaning: "left" },
  { word: "France Inter", leaning: "left" },
  { word: "Télérama", leaning: "left" },
  { word: "Les Inrocks", leaning: "left" },
  { word: "Mediapart", leaning: "left" },
  { word: "Libération", leaning: "left" },
  { word: "L'Humanité", leaning: "left" },
  { word: "Lait d'avoine", leaning: "left" },
  { word: "Graines de chia", leaning: "left" },
  { word: "Seitan", leaning: "left" },
  { word: "Bière artisanale", leaning: "left" },
  { word: "Pain au levain", leaning: "left" },
  { word: "Spiruline", leaning: "left" },
  { word: "Kéfir", leaning: "left" },
  { word: "Matcha", leaning: "left" },
  { word: "Veja", leaning: "left" },
  { word: "Fjällräven", leaning: "left" },
  { word: "Henné", leaning: "left" },
  { word: "Décroissance", leaning: "left" },
  { word: "Zéro déchet", leaning: "left" },
  { word: "Ressourcerie", leaning: "left" },
  { word: "Biodynamie", leaning: "left" },
  { word: "Éolienne", leaning: "left" },
  { word: "Altermondialisme", leaning: "left" },
  { word: "Écriture inclusive", leaning: "left" },
  { word: "Éco-village", leaning: "left" },
  { word: "Consigne", leaning: "left" },
  { word: "Maraîchage", leaning: "left" },
  { word: "Végétalisation", leaning: "left" },
  { word: "Boîte à livres", leaning: "left" },
  { word: "Emmaüs", leaning: "left" },
  { word: "Naturalia", leaning: "left" },
  { word: "Café associatif", leaning: "left" },
  { word: "Tiers-lieu", leaning: "left" },
  { word: "Documentaire", leaning: "left" },
  { word: "Roman graphique", leaning: "left" },
  { word: "Intermittent", leaning: "left" },
  { word: "Art contemporain", leaning: "left" },
  { word: "Autogestion", leaning: "left" },
  { word: "Slam", leaning: "left" },
  { word: "Monnaie locale", leaning: "left" },
  { word: "Topinambour", leaning: "left" },
  { word: "Éco-cup", leaning: "left" },
  { word: "Slackline", leaning: "left" },
  { word: "Jardin partagé", leaning: "left" },
  { word: "Sophrologie", leaning: "left" },
  { word: "Syndicat", leaning: "left" },
  { word: "Yourte", leaning: "left" },
  { word: "Toilettes sèches", leaning: "left" },
  { word: "Mohair", leaning: "left" },
  { word: "Huile essentielle", leaning: "left" },
  { word: "Encens", leaning: "left" },
  { word: "Patchouli", leaning: "left" },
  { word: "Ukulélé", leaning: "left" },
  { word: "Macramé", leaning: "left" },
  { word: "Biodiversité", leaning: "left" },
  { word: "Sobriété", leaning: "left" },
  { word: "Éco-anxiété", leaning: "left" },
  { word: "Habitat participatif", leaning: "left" },
  { word: "Keffieh", leaning: "left" },
  { word: "Repair Café", leaning: "left" },
  { word: "Vrac", leaning: "left" },
  { word: "Low-tech", leaning: "left" },
  { word: "Service public", leaning: "left" },
  { word: "Carte Vitale", leaning: "left" },
  { word: "SNCF", leaning: "left" },
  { word: "Allocations", leaning: "left" },
  { word: "HLM", leaning: "left" },
  { word: "MJC", leaning: "left" },
  { word: "Restos du Cœur", leaning: "left" },
  { word: "Fête de la musique", leaning: "left" },
  { word: "Couscous", leaning: "left" },
  { word: "Falafel", leaning: "left" },
  { word: "Dreadlocks", leaning: "left" },
  { word: "Féminisme", leaning: "left" },
  { word: "Parité", leaning: "left" },
  { word: "Squat", leaning: "left" },
  { word: "Fanfare", leaning: "left" },
  { word: "Théâtre public", leaning: "left" },
  { word: "Sarrasin", leaning: "left" },
  { word: "Pois chiches", leaning: "left" },
  { word: "Gingembre", leaning: "left" },
  { word: "Curcuma", leaning: "left" },
  { word: "Ricard", leaning: "left" },
  { word: "Pétanque", leaning: "left" },
  { word: "Decathlon", leaning: "left" },
  { word: "Quechua", leaning: "left" },
  { word: "Vinted", leaning: "left" },
  { word: "TGV", leaning: "left" },
  { word: "Chocolatine", leaning: "left" },
  { word: "Jambon-beurre", leaning: "left" },
  { word: "Renault Clio", leaning: "left" },
  { word: "Peugeot 208", leaning: "left" },
  { word: "FNAC", leaning: "left" },
  { word: "Marathon", leaning: "left" },
  { word: "Tatouage", leaning: "left" },
  { word: "Télétravail", leaning: "left" },
  { word: "Brocante", leaning: "left" },
  { word: "Festival", leaning: "left" },
  { word: "Thé vert", leaning: "left" },
  { word: "Lin", leaning: "left" },
  { word: "Podcast", leaning: "left" },
  { word: "Plante verte", leaning: "left" },
  { word: "Café filtre", leaning: "left" },
  { word: "Bento", leaning: "left" },
  { word: "Moleskine", leaning: "left" },
  { word: "Bambou", leaning: "left" },
  { word: "Back Market", leaning: "left" },
  { word: "Covoiturage", leaning: "left" },
  { word: "Vinyle", leaning: "left" },
  { word: "Randonnée", leaning: "left" },
  { word: "Potager", leaning: "left" },
  { word: "Kebab", leaning: "left" },
  { word: "Mutuelle", leaning: "left" },
  { word: "La Poste", leaning: "left" },
  { word: "Poubelle de tri", leaning: "left" },
  { word: "Sieste", leaning: "left" },
  { word: "Crêpe", leaning: "left" },
  { word: "Cidre", leaning: "left" },
  { word: "Suze", leaning: "left" },
  { word: "Camping", leaning: "left" },
  { word: "Auberge de jeunesse", leaning: "left" },
  { word: "Interrail", leaning: "left" },
  { word: "Pique-nique", leaning: "left" },
  { word: "Guinguette", leaning: "left" },
  { word: "Belote", leaning: "left" },
  { word: "BlaBlaCar", leaning: "left" },
  { word: "Opinel", leaning: "left" },
  { word: "Duralex", leaning: "left" },

  // ===========================================================================
  // NEUTRAL, LEANING GAUCHE ("lean-left" : 52% - 58% Gauche) — 10 words
  // ===========================================================================
  { word: "Le Bon Coin", leaning: "lean-left" },
  { word: "Boulangerie", leaning: "lean-left" },
  { word: "Pâtes", leaning: "lean-left" },
  { word: "Scrabble", leaning: "lean-left" },
  { word: "Cantine", leaning: "lean-left" },
  { word: "Crèche", leaning: "lean-left" },
  { word: "Bibliothèque", leaning: "lean-left" },
  { word: "Petit Bateau", leaning: "lean-left" },
  { word: "Pizza", leaning: "lean-left" },
  { word: "Frites", leaning: "lean-left" },

  // ===========================================================================
  // CLEARLY DROITE ("right" : 66% - 88% Droite) — 135 words
  // ===========================================================================
  { word: "SUV", leaning: "right" },
  { word: "Golf", leaning: "right" },
  { word: "Rolex", leaning: "right" },
  { word: "Chasse", leaning: "right" },
  { word: "Côte de bœuf", leaning: "right" },
  { word: "Mocassins", leaning: "right" },
  { word: "Le Figaro", leaning: "right" },
  { word: "Croisière", leaning: "right" },
  { word: "Champagne", leaning: "right" },
  { word: "Viager", leaning: "right" },
  { word: "Tennis", leaning: "right" },
  { word: "Équitation", leaning: "right" },
  { word: "Yacht", leaning: "right" },
  { word: "Bourse", leaning: "right" },
  { word: "Cravate", leaning: "right" },
  { word: "Cigare", leaning: "right" },
  { word: "Résidence secondaire", leaning: "right" },
  { word: "Polo", leaning: "right" },
  { word: "Tondeuse", leaning: "right" },
  { word: "Haie de thuyas", leaning: "right" },
  { word: "Véranda", leaning: "right" },
  { word: "BMW", leaning: "right" },
  { word: "Mercedes", leaning: "right" },
  { word: "Tesla", leaning: "right" },
  { word: "Pièce d'or", leaning: "right" },
  { word: "Briquet Dupont", leaning: "right" },
  { word: "Serre-tête", leaning: "right" },
  { word: "Cabriolet", leaning: "right" },
  { word: "Rotary", leaning: "right" },
  { word: "Notaire", leaning: "right" },
  { word: "Costume trois-pièces", leaning: "right" },
  { word: "Chevalière", leaning: "right" },
  { word: "Assurance-vie", leaning: "right" },
  { word: "Whisky", leaning: "right" },
  { word: "Caviar", leaning: "right" },
  { word: "Pavillon", leaning: "right" },
  { word: "Autoroute", leaning: "right" },
  { word: "Péage", leaning: "right" },
  { word: "Cryptomonnaie", leaning: "right" },
  { word: "Startup", leaning: "right" },
  { word: "Padel", leaning: "right" },
  { word: "École de commerce", leaning: "right" },
  { word: "Dividendes", leaning: "right" },
  { word: "Private Equity", leaning: "right" },
  { word: "Héritage", leaning: "right" },
  { word: "Lingot", leaning: "right" },
  { word: "Coffre-fort", leaning: "right" },
  { word: "Banque privée", leaning: "right" },
  { word: "American Express", leaning: "right" },
  { word: "Défiscalisation", leaning: "right" },
  { word: "CAC 40", leaning: "right" },
  { word: "Barbour", leaning: "right" },
  { word: "Sur-mesure", leaning: "right" },
  { word: "Cachemire", leaning: "right" },
  { word: "Boutons de manchette", leaning: "right" },
  { word: "Velours côtelé", leaning: "right" },
  { word: "Doudoune sans manches", leaning: "right" },
  { word: "Loden", leaning: "right" },
  { word: "Blazer", leaning: "right" },
  { word: "Weston", leaning: "right" },
  { word: "Panama", leaning: "right" },
  { word: "Hermès", leaning: "right" },
  { word: "Ralph Lauren", leaning: "right" },
  { word: "Régate", leaning: "right" },
  { word: "Ball-trap", leaning: "right" },
  { word: "Gala", leaning: "right" },
  { word: "Bridge", leaning: "right" },
  { word: "Rallye", leaning: "right" },
  { word: "Grand cru", leaning: "right" },
  { word: "Enchères", leaning: "right" },
  { word: "Hippodrome", leaning: "right" },
  { word: "Verisure", leaning: "right" },
  { word: "Weber", leaning: "right" },
  { word: "Portail automatique", leaning: "right" },
  { word: "Climatisation", leaning: "right" },
  { word: "Kärcher", leaning: "right" },
  { word: "Ruinart", leaning: "right" },
  { word: "Homard", leaning: "right" },
  { word: "Foie gras", leaning: "right" },
  { word: "Tournedos", leaning: "right" },
  { word: "Cognac", leaning: "right" },
  { word: "Huîtres", leaning: "right" },
  { word: "Truffe", leaning: "right" },
  { word: "Valeurs Actuelles", leaning: "right" },
  { word: "CNews", leaning: "right" },
  { word: "BFM", leaning: "right" },
  { word: "Lions Club", leaning: "right" },
  { word: "Les Échos", leaning: "right" },
  { word: "HEC", leaning: "right" },
  { word: "Internat", leaning: "right" },
  { word: "Chéquier", leaning: "right" },
  { word: "Porsche", leaning: "right" },
  { word: "Audi", leaning: "right" },
  { word: "Bordeaux", leaning: "right" },
  { word: "Chanel", leaning: "right" },
  { word: "Manoir", leaning: "right" },
  { word: "Labrador", leaning: "right" },
  { word: "Aigle", leaning: "right" },
  { word: "Mi-bas", leaning: "right" },
  { word: "Haussmannien", leaning: "right" },
  { word: "Jacuzzi", leaning: "right" },
  { word: "Teck", leaning: "right" },
  { word: "Voiturier", leaning: "right" },
  { word: "Moncler", leaning: "right" },
  { word: "Lacoste", leaning: "right" },
  { word: "LVMH", leaning: "right" },
  { word: "TotalEnergies", leaning: "right" },
  { word: "TF1", leaning: "right" },
  { word: "Saucisson", leaning: "right" },
  { word: "Barbecue", leaning: "right" },
  { word: "Rillettes", leaning: "right" },
  { word: "Pâté en croûte", leaning: "right" },
  { word: "Beaujolais nouveau", leaning: "right" },
  { word: "Tmax", leaning: "right" },
  { word: "Gourmette", leaning: "right" },
  { word: "Eau de Cologne", leaning: "right" },
  { word: "Messe", leaning: "right" },
  { word: "Scoutisme", leaning: "right" },
  { word: "Uniforme", leaning: "right" },
  { word: "Gendarmerie", leaning: "right" },
  { word: "Légion d'honneur", leaning: "right" },
  { word: "Jet-ski", leaning: "right" },
  { word: "Quad", leaning: "right" },
  { word: "Bateaux Mouches", leaning: "right" },
  { word: "Cyrillus", leaning: "right" },
  { word: "Christofle", leaning: "right" },
  { word: "Camping-car", leaning: "right" },
  { word: "Monoprix", leaning: "right" },
  { word: "Trottinette", leaning: "right" },
  { word: "Pain au chocolat", leaning: "right" },
  { word: "PMU", leaning: "right" },
  { word: "Bar-tabac", leaning: "right" },
  { word: "Loto", leaning: "right" },
  { word: "Dacia Duster", leaning: "right" },
  { word: "Leclerc", leaning: "right" },
  { word: "Carrefour", leaning: "right" },
  { word: "Auchan", leaning: "right" },
  { word: "Darty", leaning: "right" },
  { word: "Leroy Merlin", leaning: "right" },
  { word: "Castorama", leaning: "right" },
  { word: "Sephora", leaning: "right" },
  { word: "Apéro", leaning: "right" },
  { word: "Thermomix", leaning: "right" },
  { word: "Nespresso", leaning: "right" },
  { word: "Air France", leaning: "right" },
  { word: "Cheminée", leaning: "right" },
  { word: "Poulet rôti", leaning: "right" },
  { word: "Charentaises", leaning: "right" },
  { word: "Jean brut", leaning: "right" },
  { word: "Tour de France", leaning: "right" },
  { word: "Mots fléchés", leaning: "right" },
  { word: "Monopoly", leaning: "right" },
  { word: "Bricolage", leaning: "right" },
  { word: "Lavage auto", leaning: "right" },
  { word: "Porte-monnaie", leaning: "right" },

  // ===========================================================================
  // NEUTRAL, LEANING DROITE ("lean-right" : 52% - 58% Droite) — 15 words
  // ===========================================================================
  { word: "Picard", leaning: "lean-right" },
  { word: "Ikea", leaning: "lean-right" },
  { word: "Raclette", leaning: "lean-right" },
  { word: "Baguette", leaning: "lean-right" },
  { word: "Astrologie", leaning: "lean-right" },
  { word: "Tarot", leaning: "lean-right" },
  { word: "Savon de Marseille", leaning: "lean-right" },
  { word: "Croissant", leaning: "lean-right" },
  { word: "Camembert", leaning: "lean-right" },
  { word: "Comté", leaning: "lean-right" },
  { word: "Canapé d'angle", leaning: "lean-right" },
  { word: "Airfryer", leaning: "lean-right" },
  { word: "Pêche à la ligne", leaning: "lean-right" },
  { word: "Fête foraine", leaning: "lean-right" },
  { word: "Nutella", leaning: "lean-right" }
];

// Mulberry32 deterministic pseudo-random number generator
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function escapeSql(str) {
  return str.replace(/'/g, "''");
}

function main() {
  const prng = mulberry32(20261103);

  // Validate uniqueness (fail loudly if any duplicate exists in source)
  const seen = new Set();
  const cleanWords = [];
  for (const item of WORDS_METADATA) {
    const w = item.word.trim();
    const formatted = w.charAt(0).toUpperCase() + w.slice(1);
    const key = formatted.toLowerCase();
    if (seen.has(key)) {
      throw new Error(`Duplicate word in WORDS_METADATA: ${formatted}`);
    }
    seen.add(key);
    cleanWords.push({ word: formatted, leaning: item.leaning });
  }

  const leftCount = cleanWords.filter(w => w.leaning === 'left' || w.leaning === 'lean-left').length;
  const rightCount = cleanWords.filter(w => w.leaning === 'right' || w.leaning === 'lean-right').length;
  console.log(`Loaded ${cleanWords.length} unique French words (${leftCount} Gauche / ${rightCount} Droite).`);

  const publicDir = path.join(rootDir, 'public');
  const functionsApiDir = path.join(rootDir, 'functions', 'api');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.mkdirSync(functionsApiDir, { recursive: true });

  const seedVotesMap = {};
  const sqlStatements = [
    `-- Generated seed data for Gauche / Droite`,
    `-- Table: votes (word, left_votes, right_votes, updated_at)`
  ];

  for (const item of cleanWords) {
    const word = item.word;

    // Total votes between 80 and 240
    const totalVotes = Math.floor(prng() * (240 - 80 + 1)) + 80;
    let leftVotes;
    let rightVotes;

    if (item.leaning === 'left') {
      // Clearly Gauche: 66% to 88% Gauche
      const fraction = 0.66 + prng() * (0.88 - 0.66);
      leftVotes = Math.round(totalVotes * fraction);
      rightVotes = totalVotes - leftVotes;
    } else if (item.leaning === 'lean-left') {
      // Neutral, leaning Gauche (slight edge): 52% to 58% Gauche
      const fraction = 0.52 + prng() * (0.58 - 0.52);
      leftVotes = Math.max(Math.floor(totalVotes / 2) + 2, Math.round(totalVotes * fraction));
      rightVotes = totalVotes - leftVotes;
    } else if (item.leaning === 'right') {
      // Clearly Droite: 66% to 88% Droite
      const fraction = 0.66 + prng() * (0.88 - 0.66);
      rightVotes = Math.round(totalVotes * fraction);
      leftVotes = totalVotes - rightVotes;
    } else if (item.leaning === 'lean-right') {
      // Neutral, leaning Droite (slight edge): 52% to 58% Droite
      const fraction = 0.52 + prng() * (0.58 - 0.52);
      rightVotes = Math.max(Math.floor(totalVotes / 2) + 2, Math.round(totalVotes * fraction));
      leftVotes = totalVotes - rightVotes;
    }

    seedVotesMap[word] = { left: leftVotes, right: rightVotes };

    sqlStatements.push(
      `INSERT OR IGNORE INTO votes (word, left_votes, right_votes) VALUES ('${escapeSql(word)}', ${leftVotes}, ${rightVotes});`
    );
  }

  // 1. Write seed.sql (for Cloudflare D1 initialization)
  const seedSqlPath = path.join(rootDir, 'seed.sql');
  fs.writeFileSync(seedSqlPath, sqlStatements.join('\n') + '\n', 'utf-8');
  console.log(`Wrote ${sqlStatements.length - 2} SQL insert statements to ${seedSqlPath}`);

  // 2. Write functions/api/seed-data.js (for Cloudflare Worker API)
  const seedDataJsPath = path.join(functionsApiDir, 'seed-data.js');
  const seedDataContent = `// Automatically generated by scripts/generate-seed.mjs\n` +
    `export const SEED_VOTES = ${JSON.stringify(seedVotesMap, null, 2)};\n`;
  fs.writeFileSync(seedDataJsPath, seedDataContent, 'utf-8');
  console.log(`Wrote SEED_VOTES object to ${seedDataJsPath}`);

  // 3. Inject EMBEDDED_SEED_VOTES directly into public/app.js
  const appJsPath = path.join(publicDir, 'app.js');
  if (fs.existsSync(appJsPath)) {
    const appJs = fs.readFileSync(appJsPath, 'utf-8');
    const startMarker = '// __SEED_VOTES_START__';
    const endMarker = '// __SEED_VOTES_END__';
    if (appJs.includes(startMarker) && appJs.includes(endMarker)) {
      const startIdx = appJs.indexOf(startMarker) + startMarker.length;
      const endIdx = appJs.indexOf(endMarker);
      const injected = `\n  const EMBEDDED_SEED_VOTES = ${JSON.stringify(seedVotesMap, null, 4).replace(/\n/g, '\n  ')};\n  `;
      const updatedAppJs = appJs.slice(0, startIdx) + injected + appJs.slice(endIdx);
      fs.writeFileSync(appJsPath, updatedAppJs, 'utf-8');
      console.log(`Embedded ${cleanWords.length} words & votes directly into ${appJsPath}`);
    }
  }
}

main();
