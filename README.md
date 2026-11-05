# GAUCHE / DROITE 🥖🍷

> **"Est-ce de gauche ou de droite ?"**  
> Le jeu web multijoueur des clichés culturels et sociologiques français.

---

## 🏗️ Architecture & Fonctionnement

- **Frontend Autonome** : Application web statique dans `public/` (`index.html`, `styles.css`, `app.js`). Peut être ouverte directement en double-cliquant sur `public/index.html` (`file://`) sans serveur grâce aux données de base embarquées dans `app.js`.
- **Backend Serverless (Cloudflare Workers)** : Worker (`src/worker.js`) qui sert `/api/vote` (`src/vote.js`) et les fichiers statiques de `public/`.
- **Base de données SQL** : Cloudflare D1 (`votes` table dans SQLite distribué).
- **Fallback Automatique** : Si ouvert en local (`file://`) ou si D1 n'est pas encore configuré, les 700 mots et leurs votes initiaux prennent le relais automatiquement.

---

## 📦 Structure des Fichiers

```text
├── src/
│   ├── worker.js               # Point d'entrée du Worker (route /api/vote + fichiers statiques)
│   ├── seed-data.js            # Données de votes pré-calculées (700 mots) pour le Worker
│   └── vote.js                 # Handlers API (POST, GET, OPTIONS)
├── public/
│   ├── index.html              # Interface minimaliste (ouvrable directement en local)
│   ├── styles.css              # Design éditorial & animations
│   └── app.js                  # Moteur physique, logique de jeu & 700 mots embarqués
├── scripts/
│   ├── dev-server.mjs          # Serveur local Node sans dépendance (optionnel)
│   └── generate-seed.mjs       # Générateur déterministe (PRNG) des données
├── schema.sql                  # Schéma de la table SQLite D1
├── seed.sql                    # Requêtes INSERT SQL des votes initiaux
├── wrangler.toml               # Configuration Cloudflare Worker, assets & binding D1
└── package.json                # Scripts npm
```

---

## 🎲 Données & Génération des Mots

Le script `scripts/generate-seed.mjs` contient **700 mots courants et marques en France** équilibrés à **50 / 50** (**350 Gauche / 350 Droite**) :
- **Gauche franche (`left`)** : 66% à 88% Gauche (*Quinoa, Vélo cargo, Biocoop, Sarouel, Kombucha, Arte, Totebag, Ricard, SNCF...*)
- **Neutre tendance Gauche (`lean-left`)** : 52% à 58% Gauche (*Le Bon Coin, Boulangerie, Pâtes, Scrabble, Cantine...*)
- **Droite franche (`right`)** : 66% à 88% Droite (*SUV, Golf, Rolex, Chasse, Côte de bœuf, Mocassins, Le Figaro, Champagne, Saucisson...*)
- **Neutre tendance Droite (`lean-right`)** : 52% à 58% Droite (*Picard, Ikea, Raclette, Baguette, Astrologie, Tarot, Savon de Marseille...*)

> ⚠️ **Règle absolue** : Aucun nom de personnalité politique, célébrité, figure historique ou ville. Uniquement des mots courants, objets, aliments, concepts et marques.

Pour régénérer les fichiers après modification de la liste :
```bash
npm run generate-seed
```
Ce script met à jour simultanément :
1. `public/app.js` (`EMBEDDED_SEED_VOTES`) pour le fonctionnement autonome côté client.
2. `src/seed-data.js` pour le Worker Cloudflare.
3. `seed.sql` pour la base de données Cloudflare D1.

---

## ⚡ API Endpoints

### 1. Voter : `POST /api/vote`
Enregistre un vote et met à jour les scores atomiquement.

**Corps de la requête (JSON) :**
```json
{
  "word": "Quinoa",
  "side": "left"
}
```
*(où `side` vaut `"left"` ou `"right"`)*

**Réponse (JSON 200 OK) :**
```json
{
  "word": "Quinoa",
  "leftVotes": 46,
  "rightVotes": 21,
  "totalVotes": 67,
  "leftPercent": 69,
  "rightPercent": 31,
  "userSide": "left",
  "majoritySide": "left",
  "won": true
}
```

#### 💡 Upsert atomique et auto-seeding D1
Si un mot n'a pas encore de ligne dans la table `votes` de D1, la requête effectue un `INSERT` avec les votes de base de `SEED_VOTES` + le vote du joueur. S'il existe déjà, elle incrémente le compteur correspondant :
```sql
INSERT INTO votes (word, left_votes, right_votes, updated_at)
VALUES (?1, ?2, ?3, unixepoch())
ON CONFLICT(word) DO UPDATE SET
  left_votes = left_votes + ?4,
  right_votes = right_votes + ?5,
  updated_at = unixepoch()
RETURNING left_votes, right_votes;
```

---

### 2. Consulter les votes d'un mot : `GET /api/vote?word=...`

```bash
GET /api/vote?word=Biocoop
```

**Réponse (JSON 200 OK) :**
```json
{
  "word": "Biocoop",
  "leftVotes": 79,
  "rightVotes": 22,
  "totalVotes": 101,
  "leftPercent": 78,
  "rightPercent": 22,
  "majoritySide": "left"
}
```

---

## 💻 Développement Local

### Prérequis
- Node.js (version 18+)
- Wrangler CLI (`npm install`)

### 1. Lancer le serveur de développement Worker
```bash
npm run dev
```
Par défaut, le Worker fonctionne avec le fallback mémoire si D1 n'est pas configuré.

### 2. Initialiser D1 en local (Optionnel)
Pour tester avec une base SQLite D1 locale gérée par Wrangler :
```bash
# 1. Créer la table dans le D1 local
npm run d1:init

# 2. Injecter les votes initiaux
npm run d1:seed
```

---

## 🚀 Déploiement sur Cloudflare Workers & D1

### Étape 1 : Créer la base de données D1 sur Cloudflare
```bash
npx wrangler d1 create leftright-db
```
Wrangler affichera un bloc de configuration avec le `database_id` généré.

### Étape 2 : Mettre à jour `wrangler.toml`
Copiez le `database_id` obtenu dans `wrangler.toml` :
```toml
[[d1_databases]]
binding = "DB"
database_name = "leftright-db"
database_id = "<VOTRE_DATABASE_ID>"
```

### Étape 3 : Appliquer le schéma et le seed sur la base de production
```bash
npx wrangler d1 execute leftright-db --remote --file=./schema.sql
npx wrangler d1 execute leftright-db --remote --file=./seed.sql
```

### Étape 4 : Déployer l'application sur Cloudflare Workers
```bash
npm run deploy
```
*Note : le binding `DB` est déclaré dans `wrangler.toml` et appliqué automatiquement au déploiement. En déploiement Git (Workers Builds), la commande de déploiement est `npx wrangler deploy`.*
