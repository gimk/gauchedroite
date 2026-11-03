# GAUCHE / DROITE 🥖🍷

> **"Est-ce de gauche ou de droite ?"**  
> Le jeu web multijoueur des clichés culturels et sociologiques français.

---

## 🏗️ Architecture & Fonctionnement

- **Frontend** : Application web statique servie depuis le dossier `public/` (`index.html`, `styles.css`, `app.js`, `words.json`).
- **Backend Serverless** : Cloudflare Pages Functions (`functions/api/vote.js`).
- **Base de données SQL** : Cloudflare D1 (`votes` table dans SQLite distribué).
- **Fallback In-Memory** : Si D1 n'est pas encore configuré ou en mode prévisualisation locale sans D1, un cache mémoire initialisé depuis `functions/api/seed-data.js` prend le relais automatiquement.

---

## 📦 Structure des Fichiers

```text
├── functions/
│   └── api/
│       ├── seed-data.js        # Données de votes pré-calculées (379 mots)
│       └── vote.js             # Pages Function API (POST, GET, OPTIONS)
├── public/
│   └── words.json              # Liste JSON de tous les 379 mots français
├── scripts/
│   └── generate-seed.mjs       # Générateur déterministe (PRNG) des données
├── schema.sql                  # Schéma de la table SQLite D1
├── seed.sql                    # Requêtes INSERT SQL des votes initiaux
├── wrangler.toml               # Configuration Cloudflare Pages & binding D1
└── package.json                # Scripts npm
```

---

## 🎲 Données & Génération des Mots

Le script `scripts/generate-seed.mjs` contient **379 mots, concepts, objets du quotidien et marques courantes en France** classés selon trois tendances initiales :
- **Gauche** : ~125 mots (*Quinoa, Vélo cargo, Biocoop, Sarouel, Kombucha, Arte, Totebag, Permaculture, Grève, Manif...*)
- **Droite** : ~125 mots (*SUV, Golf, Rolex, Chasse, Côte de bœuf, Mocassins, Figaro, Croisière, Champagne, Bourse...*)
- **Neutre / Populaire** : ~129 mots (*Saucisson, Ricard, Decathlon, Baguette, Raclette, Pétanque, Picard, SNCF, Kebab...*)

> ⚠️ **Règle absolue** : Aucun nom de personnalité politique, célébrité ou figure historique. Uniquement des objets, aliments, marques et concepts culturels.

Pour régénérer les fichiers à tout moment :
```bash
npm run generate-seed
```
Ce script crée :
1. `public/words.json` : Le tableau de tous les mots pour le tirage au sort côté frontend.
2. `seed.sql` : Les requêtes SQL prêtes pour initialiser D1.
3. `functions/api/seed-data.js` : L'objet exporté pour le fallback automatique du backend.

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

### 1. Lancer le serveur de développement Pages
```bash
npm run dev
```
Par défaut, Pages Functions fonctionne avec le fallback mémoire si D1 n'est pas configuré.

### 2. Initialiser D1 en local (Optionnel)
Pour tester avec une base SQLite D1 locale gérée par Wrangler :
```bash
# 1. Créer la table dans le D1 local
npm run d1:init

# 2. Injecter les votes initiaux
npm run d1:seed
```

---

## 🚀 Déploiement sur Cloudflare Pages & D1

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

### Étape 4 : Déployer l'application sur Cloudflare Pages
```bash
npm run deploy
```
*Note : Dans le tableau de bord Cloudflare Pages > Paramètres > Fonctions > Liaisons de base de données D1, assurez-vous que la variable `DB` est bien liée à `leftright-db`.*
