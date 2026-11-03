// scripts/generate-seed.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Curated list of French common words, concepts, objects, and brands.
// CRITICAL: Absolutely NO personalities, politicians, celebrities, or historical figures.
const WORDS_METADATA = [
  // --- LEANING: LEFT (~125 words) ---
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
  { word: "Brocante", leaning: "left" },
  { word: "Chorale", leaning: "left" },
  { word: "Télétravail", leaning: "left" },
  { word: "Zad", leaning: "left" },
  { word: "Sociologie", leaning: "left" },
  { word: "Festival", leaning: "left" },
  { word: "Thé vert", leaning: "left" },
  { word: "Birks", leaning: "left" },
  { word: "Compost", leaning: "left" },
  { word: "Coopérative", leaning: "left" },
  { word: "Grève", leaning: "left" },
  { word: "Manif", leaning: "left" },
  { word: "Piste cyclable", leaning: "left" },
  { word: "Lin", leaning: "left" },
  { word: "Menu végétarien", leaning: "left" },
  { word: "Podcast", leaning: "left" },
  { word: "Librairie", leaning: "left" },
  { word: "Céramique", leaning: "left" },
  { word: "Véganisme", leaning: "left" },
  { word: "Friperie", leaning: "left" },
  { word: "Vinted", leaning: "left" },
  { word: "Colocation", leaning: "left" },
  { word: "Méditation", leaning: "left" },
  { word: "Tatouage", leaning: "left" },
  { word: "T-shirt blanc", leaning: "left" },
  { word: "Maté", leaning: "left" },
  { word: "Amap", leaning: "left" },
  { word: "Savon d'Alep", leaning: "left" },
  { word: "Plante verte", leaning: "left" },
  { word: "Cinéma d'auteur", leaning: "left" },
  { word: "France Inter", leaning: "left" },
  { word: "Télérama", leaning: "left" },
  { word: "Les Inrocks", leaning: "left" },
  { word: "Mediapart", leaning: "left" },
  { word: "Le Monde diplomatique", leaning: "left" },
  { word: "Lait d'avoine", leaning: "left" },
  { word: "Graines de chia", leaning: "left" },
  { word: "Seitan", leaning: "left" },
  { word: "Granola maison", leaning: "left" },
  { word: "Bière artisanale", leaning: "left" },
  { word: "Pain au levain", leaning: "left" },
  { word: "Légumes oubliés", leaning: "left" },
  { word: "Pesto maison", leaning: "left" },
  { word: "Spiruline", leaning: "left" },
  { word: "Café filtre", leaning: "left" },
  { word: "Kéfir", leaning: "left" },
  { word: "Épeautre", leaning: "left" },
  { word: "Tisane ayurvédique", leaning: "left" },
  { word: "Matcha", leaning: "left" },
  { word: "Tartinade bio", leaning: "left" },
  { word: "Bento", leaning: "left" },
  { word: "Gourde en inox", leaning: "left" },
  { word: "Veja", leaning: "left" },
  { word: "Fjällräven", leaning: "left" },
  { word: "Fripes", leaning: "left" },
  { word: "Moleskine", leaning: "left" },
  { word: "Henné", leaning: "left" },
  { word: "Bambou", leaning: "left" },
  { word: "Décroissance", leaning: "left" },
  { word: "Zéro déchet", leaning: "left" },
  { word: "Recyclerie", leaning: "left" },
  { word: "Biodynamie", leaning: "left" },
  { word: "Éolienne", leaning: "left" },
  { word: "Altermondialisme", leaning: "left" },
  { word: "Écriture inclusive", leaning: "left" },
  { word: "Éco-village", leaning: "left" },
  { word: "Consigne", leaning: "left" },
  { word: "Maraîchage", leaning: "left" },
  { word: "Végétalisation", leaning: "left" },
  { word: "Boîte à livres", leaning: "left" },
  { word: "Ressourcerie", leaning: "left" },
  { word: "Emmaüs", leaning: "left" },
  { word: "Naturalia", leaning: "left" },
  { word: "Back Market", leaning: "left" },
  { word: "Café associatif", leaning: "left" },
  { word: "Tiers-lieu", leaning: "left" },
  { word: "Documentaire", leaning: "left" },
  { word: "Roman graphique", leaning: "left" },
  { word: "Intermittent", leaning: "left" },
  { word: "Art contemporain", leaning: "left" },
  { word: "Autogestion", leaning: "left" },
  { word: "Slam", leaning: "left" },
  { word: "Birkenstock", leaning: "left" },
  { word: "Monnaie locale", leaning: "left" },
  { word: "Topinambour", leaning: "left" },
  { word: "Éco-cup", leaning: "left" },
  { word: "Libération", leaning: "left" },
  { word: "L'Humanité", leaning: "left" },
  { word: "Bicyclette", leaning: "left" },
  { word: "Slackline", leaning: "left" },
  { word: "Jardin partagé", leaning: "left" },
  { word: "Graines germées", leaning: "left" },
  { word: "Sophrologie", leaning: "left" },
  { word: "Covoiturage", leaning: "left" },
  { word: "Syndicat", leaning: "left" },
  { word: "Yourte", leaning: "left" },
  { word: "Toilettes sèches", leaning: "left" },
  { word: "Mohair", leaning: "left" },
  { word: "Huile essentielle", leaning: "left" },
  { word: "Encens", leaning: "left" },
  { word: "Patchouli", leaning: "left" },
  { word: "Vinyle", leaning: "left" },
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
  { word: "Cortège", leaning: "left" },

  // --- LEANING: RIGHT (~125 words) ---
  { word: "SUV", leaning: "right" },
  { word: "Golf", leaning: "right" },
  { word: "Rolex", leaning: "right" },
  { word: "Chasse", leaning: "right" },
  { word: "Côte de bœuf", leaning: "right" },
  { word: "Mocassins", leaning: "right" },
  { word: "Figaro", leaning: "right" },
  { word: "Croisière", leaning: "right" },
  { word: "Champagne", leaning: "right" },
  { word: "Pull sur les épaules", leaning: "right" },
  { word: "Viager", leaning: "right" },
  { word: "Tennis", leaning: "right" },
  { word: "Équitation", leaning: "right" },
  { word: "Yacht", leaning: "right" },
  { word: "Bourse", leaning: "right" },
  { word: "Cravate", leaning: "right" },
  { word: "Cigare", leaning: "right" },
  { word: "Propriété", leaning: "right" },
  { word: "Résidence secondaire", leaning: "right" },
  { word: "Sologne", leaning: "right" },
  { word: "Polo", leaning: "right" },
  { word: "Lavage auto", leaning: "right" },
  { word: "Tondeuse", leaning: "right" },
  { word: "Haie de thuyas", leaning: "right" },
  { word: "Véranda", leaning: "right" },
  { word: "Porte-monnaie", leaning: "right" },
  { word: "Golf GTI", leaning: "right" },
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
  { word: "Breitling", leaning: "right" },
  { word: "Loden", leaning: "right" },
  { word: "Blazer", leaning: "right" },
  { word: "Weston", leaning: "right" },
  { word: "Panama", leaning: "right" },
  { word: "Hermès", leaning: "right" },
  { word: "Ralph Lauren", leaning: "right" },
  { word: "Régate", leaning: "right" },
  { word: "Ball-trap", leaning: "right" },
  { word: "Gala", leaning: "right" },
  { word: "Courchevel", leaning: "right" },
  { word: "Bridge", leaning: "right" },
  { word: "Rallye", leaning: "right" },
  { word: "Grand cru", leaning: "right" },
  { word: "Deauville", leaning: "right" },
  { word: "Enchères", leaning: "right" },
  { word: "Hippodrome", leaning: "right" },
  { word: "Thermique", leaning: "right" },
  { word: "Verisure", leaning: "right" },
  { word: "Weber", leaning: "right" },
  { word: "Portail automatique", leaning: "right" },
  { word: "Climatisation", leaning: "right" },
  { word: "Kärcher", leaning: "right" },
  { word: "Gravier", leaning: "right" },
  { word: "Ruinart", leaning: "right" },
  { word: "Havane", leaning: "right" },
  { word: "Single malt", leaning: "right" },
  { word: "Homard", leaning: "right" },
  { word: "Foie gras", leaning: "right" },
  { word: "Tournedos", leaning: "right" },
  { word: "Cognac", leaning: "right" },
  { word: "Huîtres", leaning: "right" },
  { word: "Saint-Émilion", leaning: "right" },
  { word: "Truffe", leaning: "right" },
  { word: "Valeurs Actuelles", leaning: "right" },
  { word: "CNews", leaning: "right" },
  { word: "Lions Club", leaning: "right" },
  { word: "Les Échos", leaning: "right" },
  { word: "HEC", leaning: "right" },
  { word: "Internat", leaning: "right" },
  { word: "Chéquier", leaning: "right" },
  { word: "Catamaran", leaning: "right" },
  { word: "Cave à cigares", leaning: "right" },
  { word: "Porsche", leaning: "right" },
  { word: "Audi", leaning: "right" },
  { word: "Bordeaux", leaning: "right" },
  { word: "Île de Ré", leaning: "right" },
  { word: "Stand de tir", leaning: "right" },
  { word: "Chanel", leaning: "right" },
  { word: "Manoir", leaning: "right" },
  { word: "Gentilhommière", leaning: "right" },
  { word: "Vènerie", leaning: "right" },
  { word: "Épagneul", leaning: "right" },
  { word: "Labrador", leaning: "right" },
  { word: "Aigle", leaning: "right" },
  { word: "Mi-bas", leaning: "right" },
  { word: "Mansarde", leaning: "right" },
  { word: "Haussmannien", leaning: "right" },
  { word: "Jacuzzi", leaning: "right" },
  { word: "Teck", leaning: "right" },
  { word: "Voiturier", leaning: "right" },
  { word: "Vignoble", leaning: "right" },
  { word: "Moncler", leaning: "right" },
  { word: "Patek Philippe", leaning: "right" },

  // --- LEANING: NEUTRAL (~130 words) ---
  { word: "Saucisson", leaning: "neutral" },
  { word: "Ricard", leaning: "neutral" },
  { word: "Decathlon", leaning: "neutral" },
  { word: "Baguette", leaning: "neutral" },
  { word: "Raclette", leaning: "neutral" },
  { word: "Pétanque", leaning: "neutral" },
  { word: "Picard", leaning: "neutral" },
  { word: "Leclerc", leaning: "neutral" },
  { word: "SNCF", leaning: "neutral" },
  { word: "Kebab", leaning: "neutral" },
  { word: "Croissant", leaning: "neutral" },
  { word: "Apéro", leaning: "neutral" },
  { word: "Bricolage", leaning: "neutral" },
  { word: "Camping-car", leaning: "neutral" },
  { word: "Barbecue", leaning: "neutral" },
  { word: "Camembert", leaning: "neutral" },
  { word: "Crêpe", leaning: "neutral" },
  { word: "Scrabble", leaning: "neutral" },
  { word: "Randonnée", leaning: "neutral" },
  { word: "Sieste", leaning: "neutral" },
  { word: "Thermomix", leaning: "neutral" },
  { word: "Le Bon Coin", leaning: "neutral" },
  { word: "Ikea", leaning: "neutral" },
  { word: "Nespresso", leaning: "neutral" },
  { word: "Trottinette", leaning: "neutral" },
  { word: "Marathon", leaning: "neutral" },
  { word: "Potager", leaning: "neutral" },
  { word: "Cheminée", leaning: "neutral" },
  { word: "Plage", leaning: "neutral" },
  { word: "Montagne", leaning: "neutral" },
  { word: "Fromage", leaning: "neutral" },
  { word: "Café", leaning: "neutral" },
  { word: "Parapluie", leaning: "neutral" },
  { word: "Chaussettes", leaning: "neutral" },
  { word: "Télévision", leaning: "neutral" },
  { word: "Supermarché", leaning: "neutral" },
  { word: "Boulangerie", leaning: "neutral" },
  { word: "Pharmacie", leaning: "neutral" },
  { word: "Météo", leaning: "neutral" },
  { word: "Vacances", leaning: "neutral" },
  { word: "Pâtes", leaning: "neutral" },
  { word: "Pizza", leaning: "neutral" },
  { word: "Frites", leaning: "neutral" },
  { word: "Chocolatine", leaning: "neutral" },
  { word: "Pain au chocolat", leaning: "neutral" },
  { word: "TGV", leaning: "neutral" },
  { word: "Carte Vitale", leaning: "neutral" },
  { word: "Mutuelle", leaning: "neutral" },
  { word: "Belote", leaning: "neutral" },
  { word: "Tarot", leaning: "neutral" },
  { word: "Monopoly", leaning: "neutral" },
  { word: "Mots fléchés", leaning: "neutral" },
  { word: "Tour de France", leaning: "neutral" },
  { word: "Fête foraine", leaning: "neutral" },
  { word: "Pique-nique", leaning: "neutral" },
  { word: "Pêche à la ligne", leaning: "neutral" },
  { word: "Canapé d'angle", leaning: "neutral" },
  { word: "Lave-vaisselle", leaning: "neutral" },
  { word: "Friteuse sans huile", leaning: "neutral" },
  { word: "Micro-ondes", leaning: "neutral" },
  { word: "Grille-pain", leaning: "neutral" },
  { word: "Congélateur", leaning: "neutral" },
  { word: "Pyjama", leaning: "neutral" },
  { word: "Pantoufles", leaning: "neutral" },
  { word: "Charentaises", leaning: "neutral" },
  { word: "Doudoune", leaning: "neutral" },
  { word: "Jean brut", leaning: "neutral" },
  { word: "Baskets blanches", leaning: "neutral" },
  { word: "Casquette", leaning: "neutral" },
  { word: "Maillot de bain", leaning: "neutral" },
  { word: "Tongs", leaning: "neutral" },
  { word: "Valise à roulettes", leaning: "neutral" },
  { word: "Clés de maison", leaning: "neutral" },
  { word: "Carte bancaire", leaning: "neutral" },
  { word: "Ticket de caisse", leaning: "neutral" },
  { word: "Téléphone portable", leaning: "neutral" },
  { word: "Écouteurs sans fil", leaning: "neutral" },
  { word: "Câble USB", leaning: "neutral" },
  { word: "Télécommande", leaning: "neutral" },
  { word: "Réveil-matin", leaning: "neutral" },
  { word: "Poubelle de tri", leaning: "neutral" },
  { word: "Boîte aux lettres", leaning: "neutral" },
  { word: "Voisins de palier", leaning: "neutral" },
  { word: "Marché du dimanche", leaning: "neutral" },
  { word: "Foire aux vins", leaning: "neutral" },
  { word: "Bar-tabac", leaning: "neutral" },
  { word: "PMU", leaning: "neutral" },
  { word: "Chips", leaning: "neutral" },
  { word: "Poulet rôti", leaning: "neutral" },
  { word: "Rillettes", leaning: "neutral" },
  { word: "Jambon-beurre", leaning: "neutral" },
  { word: "Flan pâtissier", leaning: "neutral" },
  { word: "Éclair au chocolat", leaning: "neutral" },
  { word: "Tarte aux pommes", leaning: "neutral" },
  { word: "Mousse au chocolat", leaning: "neutral" },
  { word: "Salade de tomates", leaning: "neutral" },
  { word: "Omelette", leaning: "neutral" },
  { word: "Soupe de légumes", leaning: "neutral" },
  { word: "Purée mousline", leaning: "neutral" },
  { word: "Yaourt nature", leaning: "neutral" },
  { word: "Confiture de fraises", leaning: "neutral" },
  { word: "Nutella", leaning: "neutral" },
  { word: "Haribo", leaning: "neutral" },
  { word: "Coca-Cola", leaning: "neutral" },
  { word: "Eau gazeuse", leaning: "neutral" },
  { word: "Bière blonde", leaning: "neutral" },
  { word: "Sirop de menthe", leaning: "neutral" },
  { word: "Chocolat chaud", leaning: "neutral" },
  { word: "Carrefour", leaning: "neutral" },
  { word: "Auchan", leaning: "neutral" },
  { word: "Castorama", leaning: "neutral" },
  { word: "Leroy Merlin", leaning: "neutral" },
  { word: "FNAC", leaning: "neutral" },
  { word: "Darty", leaning: "neutral" },
  { word: "Sephora", leaning: "neutral" },
  { word: "Monoprix", leaning: "neutral" },
  { word: "TotalEnergies", leaning: "neutral" },
  { word: "La Poste", leaning: "neutral" },
  { word: "Renault Clio", leaning: "neutral" },
  { word: "Peugeot 208", leaning: "neutral" },
  { word: "Dacia Duster", leaning: "neutral" },
  { word: "Air France", leaning: "neutral" },
  { word: "Bic", leaning: "neutral" },
  { word: "Post-it", leaning: "neutral" },
  { word: "Lunettes de soleil", leaning: "neutral" },
  { word: "Mouchoirs en papier", leaning: "neutral" },
  { word: "Savon de Marseille", leaning: "neutral" },
  { word: "Dentifrice", leaning: "neutral" },
  { word: "Shampoing", leaning: "neutral" },
  { word: "Brosse à cheveux", leaning: "neutral" }
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
  const prng = mulberry32(424242);

  // Validate uniqueness
  const seen = new Set();
  const duplicates = [];
  for (const item of WORDS_METADATA) {
    const key = item.word.toLowerCase();
    if (seen.has(key)) {
      duplicates.push(item.word);
    }
    seen.add(key);
  }

  if (duplicates.length > 0) {
    console.error("Duplicate words detected:", duplicates);
    process.exit(1);
  }

  console.log(`Loaded ${WORDS_METADATA.length} unique French words/concepts.`);

  // Prepare directories
  const publicDir = path.join(rootDir, 'public');
  const functionsApiDir = path.join(rootDir, 'functions', 'api');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.mkdirSync(functionsApiDir, { recursive: true });

  const wordList = [];
  const seedVotesMap = {};
  const sqlStatements = [
    `-- Generated seed data for Gauche / Droite`,
    `-- Table: votes (word, left_votes, right_votes, updated_at)`
  ];

  for (const item of WORDS_METADATA) {
    const word = item.word.trim();
    wordList.push(word);

    // Total votes between 45 and 210
    const totalVotes = Math.floor(prng() * (210 - 45 + 1)) + 45;
    let leftVotes;
    let rightVotes;

    if (item.leaning === 'left') {
      // 62% to 89% left
      const fraction = 0.62 + prng() * (0.89 - 0.62);
      leftVotes = Math.max(1, Math.min(totalVotes - 1, Math.round(totalVotes * fraction)));
      rightVotes = totalVotes - leftVotes;
    } else if (item.leaning === 'right') {
      // 62% to 89% right
      const fraction = 0.62 + prng() * (0.89 - 0.62);
      rightVotes = Math.max(1, Math.min(totalVotes - 1, Math.round(totalVotes * fraction)));
      leftVotes = totalVotes - rightVotes;
    } else {
      // neutral: 42% to 58% left
      const fraction = 0.42 + prng() * (0.58 - 0.42);
      leftVotes = Math.max(1, Math.min(totalVotes - 1, Math.round(totalVotes * fraction)));
      rightVotes = totalVotes - leftVotes;
    }

    seedVotesMap[word] = { left: leftVotes, right: rightVotes };

    sqlStatements.push(
      `INSERT OR REPLACE INTO votes (word, left_votes, right_votes) VALUES ('${escapeSql(word)}', ${leftVotes}, ${rightVotes});`
    );
  }

  // 1. Write public/words.json
  const wordsJsonPath = path.join(publicDir, 'words.json');
  fs.writeFileSync(wordsJsonPath, JSON.stringify(wordList, null, 2), 'utf-8');
  console.log(`Wrote ${wordList.length} words to ${wordsJsonPath}`);

  // 2. Write seed.sql
  const seedSqlPath = path.join(rootDir, 'seed.sql');
  fs.writeFileSync(seedSqlPath, sqlStatements.join('\n') + '\n', 'utf-8');
  console.log(`Wrote ${sqlStatements.length - 2} SQL insert statements to ${seedSqlPath}`);

  // 3. Write functions/api/seed-data.js
  const seedDataJsPath = path.join(functionsApiDir, 'seed-data.js');
  const seedDataContent = `// Automatically generated by scripts/generate-seed.mjs\n` +
    `// Pre-seeded votes map used by Cloudflare Pages Function fallback and initial baseline\n` +
    `export const SEED_VOTES = ${JSON.stringify(seedVotesMap, null, 2)};\n`;
  fs.writeFileSync(seedDataJsPath, seedDataContent, 'utf-8');
  console.log(`Wrote SEED_VOTES object to ${seedDataJsPath}`);
}

main();
