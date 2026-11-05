/**
 * GAUCHE / DROITE — Artsy Minimalist Editorial Web Experience
 * Pure Vanilla ES6 JavaScript
 */

(() => {
  'use strict';

  // ============================================================================
  // Curated Editorial French Word Bank & Seeded Votes (Embedded for file:// use)
  // ============================================================================
  // __SEED_VOTES_START__
  const EMBEDDED_SEED_VOTES = {
      "Quinoa": {
          "left": 93,
          "right": 26
      },
      "Vélo cargo": {
          "left": 157,
          "right": 48
      },
      "Biocoop": {
          "left": 133,
          "right": 23
      },
      "Sarouel": {
          "left": 73,
          "right": 16
      },
      "Kombucha": {
          "left": 115,
          "right": 35
      },
      "Arte": {
          "left": 149,
          "right": 76
      },
      "Totebag": {
          "left": 125,
          "right": 24
      },
      "Permaculture": {
          "left": 94,
          "right": 19
      },
      "Yoga": {
          "left": 83,
          "right": 12
      },
      "Tofu": {
          "left": 123,
          "right": 32
      },
      "Vin nature": {
          "left": 112,
          "right": 41
      },
      "Houmous": {
          "left": 126,
          "right": 63
      },
      "Chorale": {
          "left": 84,
          "right": 37
      },
      "Zad": {
          "left": 108,
          "right": 35
      },
      "Sociologie": {
          "left": 154,
          "right": 34
      },
      "Birkenstock": {
          "left": 56,
          "right": 28
      },
      "Compost": {
          "left": 117,
          "right": 59
      },
      "Coopérative": {
          "left": 191,
          "right": 39
      },
      "Grève": {
          "left": 83,
          "right": 26
      },
      "Manif": {
          "left": 198,
          "right": 37
      },
      "Piste cyclable": {
          "left": 148,
          "right": 60
      },
      "Menu végétarien": {
          "left": 73,
          "right": 16
      },
      "Librairie": {
          "left": 178,
          "right": 48
      },
      "Céramique": {
          "left": 83,
          "right": 41
      },
      "Véganisme": {
          "left": 172,
          "right": 68
      },
      "Friperie": {
          "left": 165,
          "right": 35
      },
      "Colocation": {
          "left": 164,
          "right": 45
      },
      "Méditation": {
          "left": 89,
          "right": 23
      },
      "Maté": {
          "left": 111,
          "right": 40
      },
      "Amap": {
          "left": 163,
          "right": 49
      },
      "Savon d'Alep": {
          "left": 106,
          "right": 17
      },
      "Cinéma d'auteur": {
          "left": 74,
          "right": 35
      },
      "France Inter": {
          "left": 130,
          "right": 35
      },
      "Télérama": {
          "left": 96,
          "right": 45
      },
      "Les Inrocks": {
          "left": 86,
          "right": 23
      },
      "Mediapart": {
          "left": 185,
          "right": 48
      },
      "Libération": {
          "left": 132,
          "right": 54
      },
      "L'Humanité": {
          "left": 77,
          "right": 12
      },
      "Lait d'avoine": {
          "left": 162,
          "right": 28
      },
      "Graines de chia": {
          "left": 123,
          "right": 32
      },
      "Seitan": {
          "left": 140,
          "right": 52
      },
      "Bière artisanale": {
          "left": 117,
          "right": 59
      },
      "Pain au levain": {
          "left": 156,
          "right": 37
      },
      "Spiruline": {
          "left": 92,
          "right": 25
      },
      "Kéfir": {
          "left": 184,
          "right": 46
      },
      "Matcha": {
          "left": 110,
          "right": 47
      },
      "Veja": {
          "left": 65,
          "right": 15
      },
      "Fjällräven": {
          "left": 133,
          "right": 30
      },
      "Henné": {
          "left": 67,
          "right": 17
      },
      "Décroissance": {
          "left": 130,
          "right": 57
      },
      "Zéro déchet": {
          "left": 107,
          "right": 31
      },
      "Ressourcerie": {
          "left": 137,
          "right": 36
      },
      "Biodynamie": {
          "left": 125,
          "right": 24
      },
      "Éolienne": {
          "left": 96,
          "right": 23
      },
      "Altermondialisme": {
          "left": 116,
          "right": 57
      },
      "Écriture inclusive": {
          "left": 104,
          "right": 47
      },
      "Éco-village": {
          "left": 95,
          "right": 27
      },
      "Consigne": {
          "left": 142,
          "right": 56
      },
      "Maraîchage": {
          "left": 158,
          "right": 79
      },
      "Végétalisation": {
          "left": 158,
          "right": 23
      },
      "Boîte à livres": {
          "left": 98,
          "right": 37
      },
      "Emmaüs": {
          "left": 73,
          "right": 11
      },
      "Naturalia": {
          "left": 173,
          "right": 48
      },
      "Café associatif": {
          "left": 69,
          "right": 19
      },
      "Tiers-lieu": {
          "left": 127,
          "right": 41
      },
      "Documentaire": {
          "left": 90,
          "right": 27
      },
      "Roman graphique": {
          "left": 76,
          "right": 26
      },
      "Intermittent": {
          "left": 92,
          "right": 27
      },
      "Art contemporain": {
          "left": 103,
          "right": 51
      },
      "Autogestion": {
          "left": 145,
          "right": 64
      },
      "Slam": {
          "left": 119,
          "right": 18
      },
      "Monnaie locale": {
          "left": 84,
          "right": 13
      },
      "Topinambour": {
          "left": 135,
          "right": 69
      },
      "Éco-cup": {
          "left": 145,
          "right": 64
      },
      "Slackline": {
          "left": 77,
          "right": 15
      },
      "Jardin partagé": {
          "left": 108,
          "right": 28
      },
      "Sophrologie": {
          "left": 140,
          "right": 59
      },
      "Syndicat": {
          "left": 87,
          "right": 18
      },
      "Yourte": {
          "left": 120,
          "right": 22
      },
      "Toilettes sèches": {
          "left": 74,
          "right": 29
      },
      "Mohair": {
          "left": 78,
          "right": 34
      },
      "Huile essentielle": {
          "left": 147,
          "right": 74
      },
      "Encens": {
          "left": 119,
          "right": 22
      },
      "Patchouli": {
          "left": 143,
          "right": 70
      },
      "Ukulélé": {
          "left": 90,
          "right": 15
      },
      "Macramé": {
          "left": 122,
          "right": 22
      },
      "Biodiversité": {
          "left": 123,
          "right": 20
      },
      "Sobriété": {
          "left": 73,
          "right": 37
      },
      "Éco-anxiété": {
          "left": 65,
          "right": 17
      },
      "Habitat participatif": {
          "left": 66,
          "right": 27
      },
      "Keffieh": {
          "left": 113,
          "right": 27
      },
      "Repair Café": {
          "left": 128,
          "right": 61
      },
      "Vrac": {
          "left": 150,
          "right": 48
      },
      "Low-tech": {
          "left": 87,
          "right": 19
      },
      "Service public": {
          "left": 144,
          "right": 37
      },
      "Carte Vitale": {
          "left": 82,
          "right": 21
      },
      "SNCF": {
          "left": 146,
          "right": 52
      },
      "Allocations": {
          "left": 88,
          "right": 28
      },
      "HLM": {
          "left": 145,
          "right": 30
      },
      "MJC": {
          "left": 74,
          "right": 13
      },
      "Restos du Cœur": {
          "left": 148,
          "right": 42
      },
      "Fête de la musique": {
          "left": 106,
          "right": 51
      },
      "Couscous": {
          "left": 144,
          "right": 40
      },
      "Falafel": {
          "left": 147,
          "right": 43
      },
      "Dreadlocks": {
          "left": 113,
          "right": 31
      },
      "Féminisme": {
          "left": 118,
          "right": 56
      },
      "Parité": {
          "left": 141,
          "right": 48
      },
      "Squat": {
          "left": 128,
          "right": 38
      },
      "Fanfare": {
          "left": 118,
          "right": 16
      },
      "Théâtre public": {
          "left": 78,
          "right": 19
      },
      "Sarrasin": {
          "left": 151,
          "right": 61
      },
      "Pois chiches": {
          "left": 83,
          "right": 34
      },
      "Gingembre": {
          "left": 159,
          "right": 39
      },
      "Curcuma": {
          "left": 77,
          "right": 29
      },
      "Ricard": {
          "left": 78,
          "right": 16
      },
      "Pétanque": {
          "left": 147,
          "right": 66
      },
      "Decathlon": {
          "left": 59,
          "right": 27
      },
      "Quechua": {
          "left": 165,
          "right": 62
      },
      "Vinted": {
          "left": 113,
          "right": 17
      },
      "TGV": {
          "left": 98,
          "right": 39
      },
      "Chocolatine": {
          "left": 129,
          "right": 36
      },
      "Jambon-beurre": {
          "left": 115,
          "right": 48
      },
      "Renault Clio": {
          "left": 167,
          "right": 71
      },
      "Peugeot 208": {
          "left": 113,
          "right": 33
      },
      "FNAC": {
          "left": 79,
          "right": 27
      },
      "Marathon": {
          "left": 131,
          "right": 35
      },
      "Tatouage": {
          "left": 148,
          "right": 37
      },
      "Télétravail": {
          "left": 144,
          "right": 53
      },
      "Brocante": {
          "left": 107,
          "right": 30
      },
      "Festival": {
          "left": 185,
          "right": 50
      },
      "Thé vert": {
          "left": 104,
          "right": 38
      },
      "Lin": {
          "left": 131,
          "right": 43
      },
      "Podcast": {
          "left": 166,
          "right": 45
      },
      "Plante verte": {
          "left": 199,
          "right": 30
      },
      "Café filtre": {
          "left": 201,
          "right": 35
      },
      "Bento": {
          "left": 133,
          "right": 22
      },
      "Moleskine": {
          "left": 109,
          "right": 22
      },
      "Bambou": {
          "left": 169,
          "right": 51
      },
      "Back Market": {
          "left": 74,
          "right": 16
      },
      "Covoiturage": {
          "left": 104,
          "right": 17
      },
      "Vinyle": {
          "left": 124,
          "right": 36
      },
      "Randonnée": {
          "left": 82,
          "right": 27
      },
      "Potager": {
          "left": 146,
          "right": 53
      },
      "Kebab": {
          "left": 181,
          "right": 27
      },
      "Mutuelle": {
          "left": 151,
          "right": 21
      },
      "La Poste": {
          "left": 111,
          "right": 31
      },
      "Poubelle de tri": {
          "left": 170,
          "right": 24
      },
      "Sieste": {
          "left": 146,
          "right": 48
      },
      "Crêpe": {
          "left": 80,
          "right": 12
      },
      "Cidre": {
          "left": 131,
          "right": 41
      },
      "Suze": {
          "left": 58,
          "right": 29
      },
      "Camping": {
          "left": 117,
          "right": 18
      },
      "Auberge de jeunesse": {
          "left": 161,
          "right": 33
      },
      "Interrail": {
          "left": 80,
          "right": 13
      },
      "Pique-nique": {
          "left": 125,
          "right": 44
      },
      "Guinguette": {
          "left": 155,
          "right": 41
      },
      "Belote": {
          "left": 166,
          "right": 34
      },
      "BlaBlaCar": {
          "left": 102,
          "right": 27
      },
      "Opinel": {
          "left": 139,
          "right": 62
      },
      "Duralex": {
          "left": 143,
          "right": 51
      },
      "Le Bon Coin": {
          "left": 110,
          "right": 86
      },
      "Boulangerie": {
          "left": 127,
          "right": 100
      },
      "Pâtes": {
          "left": 121,
          "right": 107
      },
      "Scrabble": {
          "left": 69,
          "right": 62
      },
      "Cantine": {
          "left": 120,
          "right": 105
      },
      "Crèche": {
          "left": 83,
          "right": 64
      },
      "Bibliothèque": {
          "left": 99,
          "right": 77
      },
      "Petit Bateau": {
          "left": 94,
          "right": 71
      },
      "Pizza": {
          "left": 131,
          "right": 101
      },
      "Frites": {
          "left": 90,
          "right": 83
      },
      "SUV": {
          "left": 57,
          "right": 168
      },
      "Golf": {
          "left": 26,
          "right": 54
      },
      "Rolex": {
          "left": 16,
          "right": 78
      },
      "Chasse": {
          "left": 17,
          "right": 109
      },
      "Côte de bœuf": {
          "left": 25,
          "right": 121
      },
      "Mocassins": {
          "left": 28,
          "right": 56
      },
      "Le Figaro": {
          "left": 30,
          "right": 91
      },
      "Croisière": {
          "left": 42,
          "right": 83
      },
      "Champagne": {
          "left": 28,
          "right": 139
      },
      "Viager": {
          "left": 44,
          "right": 97
      },
      "Tennis": {
          "left": 39,
          "right": 139
      },
      "Équitation": {
          "left": 56,
          "right": 121
      },
      "Yacht": {
          "left": 24,
          "right": 151
      },
      "Bourse": {
          "left": 28,
          "right": 140
      },
      "Cravate": {
          "left": 23,
          "right": 150
      },
      "Cigare": {
          "left": 42,
          "right": 158
      },
      "Résidence secondaire": {
          "left": 18,
          "right": 112
      },
      "Polo": {
          "left": 35,
          "right": 176
      },
      "Tondeuse": {
          "left": 12,
          "right": 79
      },
      "Haie de thuyas": {
          "left": 55,
          "right": 108
      },
      "Véranda": {
          "left": 45,
          "right": 88
      },
      "BMW": {
          "left": 41,
          "right": 114
      },
      "Mercedes": {
          "left": 17,
          "right": 95
      },
      "Tesla": {
          "left": 20,
          "right": 89
      },
      "Pièce d'or": {
          "left": 37,
          "right": 92
      },
      "Briquet Dupont": {
          "left": 63,
          "right": 145
      },
      "Serre-tête": {
          "left": 26,
          "right": 100
      },
      "Cabriolet": {
          "left": 30,
          "right": 88
      },
      "Rotary": {
          "left": 35,
          "right": 94
      },
      "Notaire": {
          "left": 67,
          "right": 142
      },
      "Costume trois-pièces": {
          "left": 34,
          "right": 152
      },
      "Chevalière": {
          "left": 41,
          "right": 115
      },
      "Assurance-vie": {
          "left": 22,
          "right": 96
      },
      "Whisky": {
          "left": 43,
          "right": 157
      },
      "Caviar": {
          "left": 36,
          "right": 199
      },
      "Pavillon": {
          "left": 24,
          "right": 138
      },
      "Autoroute": {
          "left": 39,
          "right": 200
      },
      "Péage": {
          "left": 38,
          "right": 112
      },
      "Cryptomonnaie": {
          "left": 26,
          "right": 69
      },
      "Startup": {
          "left": 47,
          "right": 129
      },
      "Padel": {
          "left": 61,
          "right": 145
      },
      "École de commerce": {
          "left": 27,
          "right": 64
      },
      "Dividendes": {
          "left": 32,
          "right": 178
      },
      "Private Equity": {
          "left": 13,
          "right": 95
      },
      "Héritage": {
          "left": 40,
          "right": 188
      },
      "Lingot": {
          "left": 55,
          "right": 153
      },
      "Coffre-fort": {
          "left": 13,
          "right": 69
      },
      "Banque privée": {
          "left": 21,
          "right": 132
      },
      "American Express": {
          "left": 31,
          "right": 143
      },
      "Défiscalisation": {
          "left": 42,
          "right": 165
      },
      "CAC 40": {
          "left": 64,
          "right": 152
      },
      "Barbour": {
          "left": 36,
          "right": 109
      },
      "Sur-mesure": {
          "left": 10,
          "right": 75
      },
      "Cachemire": {
          "left": 28,
          "right": 123
      },
      "Boutons de manchette": {
          "left": 44,
          "right": 97
      },
      "Velours côtelé": {
          "left": 15,
          "right": 105
      },
      "Doudoune sans manches": {
          "left": 23,
          "right": 135
      },
      "Loden": {
          "left": 36,
          "right": 97
      },
      "Blazer": {
          "left": 50,
          "right": 163
      },
      "Weston": {
          "left": 61,
          "right": 129
      },
      "Panama": {
          "left": 23,
          "right": 78
      },
      "Hermès": {
          "left": 34,
          "right": 90
      },
      "Ralph Lauren": {
          "left": 21,
          "right": 118
      },
      "Régate": {
          "left": 70,
          "right": 160
      },
      "Ball-trap": {
          "left": 58,
          "right": 140
      },
      "Gala": {
          "left": 24,
          "right": 60
      },
      "Bridge": {
          "left": 32,
          "right": 174
      },
      "Rallye": {
          "left": 56,
          "right": 144
      },
      "Grand cru": {
          "left": 44,
          "right": 151
      },
      "Enchères": {
          "left": 51,
          "right": 155
      },
      "Hippodrome": {
          "left": 34,
          "right": 76
      },
      "Verisure": {
          "left": 21,
          "right": 81
      },
      "Weber": {
          "left": 54,
          "right": 124
      },
      "Portail automatique": {
          "left": 38,
          "right": 154
      },
      "Climatisation": {
          "left": 35,
          "right": 142
      },
      "Kärcher": {
          "left": 23,
          "right": 101
      },
      "Ruinart": {
          "left": 24,
          "right": 113
      },
      "Homard": {
          "left": 47,
          "right": 153
      },
      "Foie gras": {
          "left": 48,
          "right": 114
      },
      "Tournedos": {
          "left": 39,
          "right": 120
      },
      "Cognac": {
          "left": 18,
          "right": 128
      },
      "Huîtres": {
          "left": 45,
          "right": 162
      },
      "Truffe": {
          "left": 37,
          "right": 113
      },
      "Valeurs Actuelles": {
          "left": 56,
          "right": 127
      },
      "CNews": {
          "left": 61,
          "right": 121
      },
      "BFM": {
          "left": 28,
          "right": 70
      },
      "Lions Club": {
          "left": 30,
          "right": 146
      },
      "Les Échos": {
          "left": 39,
          "right": 161
      },
      "HEC": {
          "left": 43,
          "right": 128
      },
      "Internat": {
          "left": 50,
          "right": 114
      },
      "Chéquier": {
          "left": 30,
          "right": 79
      },
      "Porsche": {
          "left": 23,
          "right": 63
      },
      "Audi": {
          "left": 46,
          "right": 170
      },
      "Bordeaux": {
          "left": 32,
          "right": 122
      },
      "Chanel": {
          "left": 20,
          "right": 90
      },
      "Manoir": {
          "left": 13,
          "right": 81
      },
      "Labrador": {
          "left": 11,
          "right": 69
      },
      "Aigle": {
          "left": 46,
          "right": 125
      },
      "Mi-bas": {
          "left": 27,
          "right": 60
      },
      "Haussmannien": {
          "left": 29,
          "right": 166
      },
      "Jacuzzi": {
          "left": 30,
          "right": 80
      },
      "Teck": {
          "left": 34,
          "right": 102
      },
      "Voiturier": {
          "left": 52,
          "right": 178
      },
      "Moncler": {
          "left": 36,
          "right": 83
      },
      "Lacoste": {
          "left": 48,
          "right": 147
      },
      "LVMH": {
          "left": 33,
          "right": 94
      },
      "TotalEnergies": {
          "left": 20,
          "right": 143
      },
      "TF1": {
          "left": 29,
          "right": 161
      },
      "Saucisson": {
          "left": 65,
          "right": 134
      },
      "Barbecue": {
          "left": 15,
          "right": 89
      },
      "Rillettes": {
          "left": 58,
          "right": 181
      },
      "Pâté en croûte": {
          "left": 45,
          "right": 180
      },
      "Beaujolais nouveau": {
          "left": 70,
          "right": 139
      },
      "Tmax": {
          "left": 77,
          "right": 152
      },
      "Gourmette": {
          "left": 33,
          "right": 114
      },
      "Eau de Cologne": {
          "left": 31,
          "right": 205
      },
      "Messe": {
          "left": 32,
          "right": 153
      },
      "Scoutisme": {
          "left": 35,
          "right": 82
      },
      "Uniforme": {
          "left": 41,
          "right": 178
      },
      "Gendarmerie": {
          "left": 37,
          "right": 87
      },
      "Légion d'honneur": {
          "left": 25,
          "right": 107
      },
      "Jet-ski": {
          "left": 49,
          "right": 105
      },
      "Quad": {
          "left": 40,
          "right": 152
      },
      "Bateaux Mouches": {
          "left": 43,
          "right": 169
      },
      "Cyrillus": {
          "left": 45,
          "right": 141
      },
      "Christofle": {
          "left": 31,
          "right": 92
      },
      "Camping-car": {
          "left": 24,
          "right": 87
      },
      "Monoprix": {
          "left": 55,
          "right": 172
      },
      "Trottinette": {
          "left": 27,
          "right": 133
      },
      "Pain au chocolat": {
          "left": 23,
          "right": 57
      },
      "PMU": {
          "left": 57,
          "right": 140
      },
      "Bar-tabac": {
          "left": 33,
          "right": 102
      },
      "Loto": {
          "left": 29,
          "right": 110
      },
      "Dacia Duster": {
          "left": 47,
          "right": 137
      },
      "Leclerc": {
          "left": 18,
          "right": 130
      },
      "Carrefour": {
          "left": 27,
          "right": 115
      },
      "Auchan": {
          "left": 69,
          "right": 136
      },
      "Darty": {
          "left": 52,
          "right": 102
      },
      "Leroy Merlin": {
          "left": 44,
          "right": 194
      },
      "Castorama": {
          "left": 66,
          "right": 136
      },
      "Sephora": {
          "left": 38,
          "right": 131
      },
      "Apéro": {
          "left": 28,
          "right": 206
      },
      "Thermomix": {
          "left": 23,
          "right": 128
      },
      "Nespresso": {
          "left": 34,
          "right": 172
      },
      "Air France": {
          "left": 51,
          "right": 100
      },
      "Cheminée": {
          "left": 18,
          "right": 66
      },
      "Poulet rôti": {
          "left": 44,
          "right": 108
      },
      "Charentaises": {
          "left": 43,
          "right": 180
      },
      "Jean brut": {
          "left": 45,
          "right": 121
      },
      "Tour de France": {
          "left": 47,
          "right": 132
      },
      "Mots fléchés": {
          "left": 33,
          "right": 89
      },
      "Monopoly": {
          "left": 31,
          "right": 146
      },
      "Bricolage": {
          "left": 19,
          "right": 124
      },
      "Lavage auto": {
          "left": 11,
          "right": 69
      },
      "Porte-monnaie": {
          "left": 20,
          "right": 96
      },
      "Picard": {
          "left": 52,
          "right": 59
      },
      "Ikea": {
          "left": 36,
          "right": 47
      },
      "Raclette": {
          "left": 40,
          "right": 49
      },
      "Baguette": {
          "left": 54,
          "right": 61
      },
      "Astrologie": {
          "left": 59,
          "right": 68
      },
      "Tarot": {
          "left": 92,
          "right": 124
      },
      "Savon de Marseille": {
          "left": 42,
          "right": 52
      },
      "Croissant": {
          "left": 59,
          "right": 70
      },
      "Camembert": {
          "left": 101,
          "right": 124
      },
      "Comté": {
          "left": 92,
          "right": 124
      },
      "Canapé d'angle": {
          "left": 89,
          "right": 100
      },
      "Airfryer": {
          "left": 36,
          "right": 48
      },
      "Pêche à la ligne": {
          "left": 38,
          "right": 42
      },
      "Fête foraine": {
          "left": 101,
          "right": 115
      },
      "Nutella": {
          "left": 72,
          "right": 85
      },
      "Escalade": {
          "left": 127,
          "right": 49
      },
      "Gravel": {
          "left": 120,
          "right": 28
      },
      "Tempeh": {
          "left": 131,
          "right": 20
      },
      "Ghee": {
          "left": 114,
          "right": 27
      },
      "Tahini": {
          "left": 89,
          "right": 29
      },
      "Miso": {
          "left": 108,
          "right": 17
      },
      "Kimchi": {
          "left": 156,
          "right": 33
      },
      "Dahl": {
          "left": 135,
          "right": 51
      },
      "Chai latte": {
          "left": 57,
          "right": 23
      },
      "Eau de bouleau": {
          "left": 90,
          "right": 16
      },
      "Lait de soja": {
          "left": 63,
          "right": 28
      },
      "Lait d'amande": {
          "left": 72,
          "right": 20
      },
      "Sucre de coco": {
          "left": 189,
          "right": 31
      },
      "Sirop d'agave": {
          "left": 108,
          "right": 19
      },
      "Levure maltée": {
          "left": 189,
          "right": 45
      },
      "Graines de courge": {
          "left": 110,
          "right": 51
      },
      "Graines de lin": {
          "left": 70,
          "right": 34
      },
      "Baies de goji": {
          "left": 177,
          "right": 55
      },
      "Açaï": {
          "left": 100,
          "right": 34
      },
      "Guarana": {
          "left": 72,
          "right": 23
      },
      "Ginseng": {
          "left": 101,
          "right": 41
      },
      "Rooibos": {
          "left": 160,
          "right": 25
      },
      "Tisane": {
          "left": 71,
          "right": 33
      },
      "Verveine": {
          "left": 134,
          "right": 56
      },
      "Camomille": {
          "left": 118,
          "right": 39
      },
      "Soupe d'ortie": {
          "left": 104,
          "right": 16
      },
      "Ail des ours": {
          "left": 96,
          "right": 43
      },
      "Panais": {
          "left": 160,
          "right": 34
      },
      "Rutabaga": {
          "left": 141,
          "right": 24
      },
      "Chou kale": {
          "left": 170,
          "right": 40
      },
      "Patate douce": {
          "left": 101,
          "right": 15
      },
      "Butternut": {
          "left": 136,
          "right": 53
      },
      "Potimarron": {
          "left": 113,
          "right": 29
      },
      "Betterave": {
          "left": 147,
          "right": 22
      },
      "Lentilles corail": {
          "left": 155,
          "right": 31
      },
      "Boulgour": {
          "left": 85,
          "right": 22
      },
      "Épeautre": {
          "left": 100,
          "right": 38
      },
      "Petit épeautre": {
          "left": 121,
          "right": 39
      },
      "Flocons d'avoine": {
          "left": 133,
          "right": 24
      },
      "Porridge": {
          "left": 191,
          "right": 31
      },
      "Granola": {
          "left": 136,
          "right": 33
      },
      "Muesli": {
          "left": 172,
          "right": 37
      },
      "Gomasio": {
          "left": 75,
          "right": 13
      },
      "Tamari": {
          "left": 171,
          "right": 69
      },
      "Fenugrec": {
          "left": 132,
          "right": 52
      },
      "Cardamome": {
          "left": 56,
          "right": 27
      },
      "Coriandre": {
          "left": 120,
          "right": 26
      },
      "Cumin": {
          "left": 170,
          "right": 36
      },
      "Zaatar": {
          "left": 96,
          "right": 18
      },
      "Sumac": {
          "left": 181,
          "right": 57
      },
      "Feta": {
          "left": 137,
          "right": 23
      },
      "Halloumi": {
          "left": 160,
          "right": 53
      },
      "Tzatziki": {
          "left": 126,
          "right": 52
      },
      "Caviar d'aubergine": {
          "left": 110,
          "right": 27
      },
      "Chakchouka": {
          "left": 147,
          "right": 25
      },
      "Ramen": {
          "left": 126,
          "right": 38
      },
      "Pho": {
          "left": 75,
          "right": 23
      },
      "Bo bun": {
          "left": 188,
          "right": 50
      },
      "Pad thaï": {
          "left": 103,
          "right": 44
      },
      "Banh mi": {
          "left": 73,
          "right": 23
      },
      "Samoussa": {
          "left": 141,
          "right": 57
      },
      "Naan": {
          "left": 64,
          "right": 17
      },
      "Pakora": {
          "left": 127,
          "right": 34
      },
      "Mafé": {
          "left": 81,
          "right": 31
      },
      "Yassa": {
          "left": 88,
          "right": 42
      },
      "Thiéboudienne": {
          "left": 148,
          "right": 59
      },
      "Accras": {
          "left": 130,
          "right": 34
      },
      "Ceviche": {
          "left": 122,
          "right": 52
      },
      "Guacamole": {
          "left": 140,
          "right": 35
      },
      "Gaspacho": {
          "left": 156,
          "right": 44
      },
      "Pesto": {
          "left": 130,
          "right": 31
      },
      "Focaccia": {
          "left": 59,
          "right": 25
      },
      "Houblon": {
          "left": 159,
          "right": 74
      },
      "IPA": {
          "left": 195,
          "right": 41
      },
      "Microbrasserie": {
          "left": 83,
          "right": 29
      },
      "Pétillant naturel": {
          "left": 165,
          "right": 43
      },
      "Vin orange": {
          "left": 88,
          "right": 17
      },
      "Génépi": {
          "left": 65,
          "right": 23
      },
      "Chartreuse": {
          "left": 130,
          "right": 61
      },
      "Pastis": {
          "left": 150,
          "right": 23
      },
      "Dr. Martens": {
          "left": 137,
          "right": 38
      },
      "Converse": {
          "left": 62,
          "right": 27
      },
      "Vans": {
          "left": 100,
          "right": 18
      },
      "Clarks": {
          "left": 97,
          "right": 44
      },
      "Blundstone": {
          "left": 82,
          "right": 31
      },
      "Salopette": {
          "left": 90,
          "right": 31
      },
      "Banane": {
          "left": 63,
          "right": 30
      },
      "Bob": {
          "left": 65,
          "right": 16
      },
      "Bonnet Docker": {
          "left": 130,
          "right": 33
      },
      "Mulet": {
          "left": 125,
          "right": 52
      },
      "Moustache": {
          "left": 161,
          "right": 75
      },
      "Piercing": {
          "left": 159,
          "right": 44
      },
      "Septum": {
          "left": 84,
          "right": 27
      },
      "Écarteur": {
          "left": 186,
          "right": 36
      },
      "Polaire": {
          "left": 106,
          "right": 27
      },
      "Patagonia": {
          "left": 70,
          "right": 26
      },
      "Carhartt": {
          "left": 167,
          "right": 43
      },
      "Freitag": {
          "left": 201,
          "right": 32
      },
      "Eastpak": {
          "left": 88,
          "right": 35
      },
      "K-Way": {
          "left": 162,
          "right": 71
      },
      "Marinière": {
          "left": 163,
          "right": 51
      },
      "Veste en jean": {
          "left": 179,
          "right": 40
      },
      "Cheveux bleus": {
          "left": 119,
          "right": 26
      },
      "Frange courte": {
          "left": 74,
          "right": 20
      },
      "Lunettes rondes": {
          "left": 101,
          "right": 47
      },
      "Chaussettes en laine": {
          "left": 58,
          "right": 26
      },
      "Tricot": {
          "left": 70,
          "right": 34
      },
      "Crochet": {
          "left": 87,
          "right": 14
      },
      "Machine à coudre": {
          "left": 124,
          "right": 32
      },
      "Sérigraphie": {
          "left": 81,
          "right": 13
      },
      "Linogravure": {
          "left": 81,
          "right": 16
      },
      "Argentique": {
          "left": 65,
          "right": 26
      },
      "Fanzine": {
          "left": 174,
          "right": 35
      },
      "Bande dessinée": {
          "left": 142,
          "right": 23
      },
      "Manga": {
          "left": 79,
          "right": 38
      },
      "Poésie": {
          "left": 69,
          "right": 14
      },
      "Philosophie": {
          "left": 158,
          "right": 79
      },
      "Anthropologie": {
          "left": 118,
          "right": 48
      },
      "Psychanalyse": {
          "left": 92,
          "right": 45
      },
      "Éducation populaire": {
          "left": 174,
          "right": 42
      },
      "BAFA": {
          "left": 89,
          "right": 38
      },
      "Colonie de vacances": {
          "left": 196,
          "right": 28
      },
      "Centre aéré": {
          "left": 69,
          "right": 30
      },
      "Périscolaire": {
          "left": 73,
          "right": 23
      },
      "ATSEM": {
          "left": 70,
          "right": 34
      },
      "Orthophoniste": {
          "left": 116,
          "right": 33
      },
      "Assistant social": {
          "left": 124,
          "right": 20
      },
      "Éducateur spécialisé": {
          "left": 111,
          "right": 41
      },
      "Infirmier": {
          "left": 117,
          "right": 39
      },
      "Sage-femme": {
          "left": 139,
          "right": 64
      },
      "Ostéopathe": {
          "left": 166,
          "right": 70
      },
      "Acupuncture": {
          "left": 170,
          "right": 64
      },
      "Naturopathie": {
          "left": 89,
          "right": 32
      },
      "Homéopathie": {
          "left": 145,
          "right": 42
      },
      "Herboristerie": {
          "left": 76,
          "right": 21
      },
      "Fleurs de Bach": {
          "left": 162,
          "right": 69
      },
      "Ayurvéda": {
          "left": 161,
          "right": 24
      },
      "Shiatsu": {
          "left": 80,
          "right": 17
      },
      "Reiki": {
          "left": 133,
          "right": 33
      },
      "Tai-chi": {
          "left": 125,
          "right": 51
      },
      "Qi gong": {
          "left": 108,
          "right": 50
      },
      "Pilates": {
          "left": 153,
          "right": 50
      },
      "Capoeira": {
          "left": 95,
          "right": 34
      },
      "Cirque": {
          "left": 143,
          "right": 62
      },
      "Jonglage": {
          "left": 120,
          "right": 47
      },
      "Diabolo": {
          "left": 116,
          "right": 50
      },
      "Monocycle": {
          "left": 90,
          "right": 17
      },
      "Roller": {
          "left": 119,
          "right": 21
      },
      "Skateboard": {
          "left": 179,
          "right": 37
      },
      "Longboard": {
          "left": 104,
          "right": 35
      },
      "Surf": {
          "left": 100,
          "right": 17
      },
      "Kayak": {
          "left": 182,
          "right": 30
      },
      "Canoë": {
          "left": 94,
          "right": 43
      },
      "Bivouac": {
          "left": 129,
          "right": 43
      },
      "Hamac": {
          "left": 175,
          "right": 39
      },
      "Tente": {
          "left": 107,
          "right": 16
      },
      "Duvet": {
          "left": 95,
          "right": 29
      },
      "Réchaud": {
          "left": 160,
          "right": 46
      },
      "Gourde": {
          "left": 161,
          "right": 29
      },
      "Thermos": {
          "left": 100,
          "right": 52
      },
      "Fromager": {
          "left": 111,
          "right": 92
      },
      "Caviste": {
          "left": 53,
          "right": 46
      },
      "Linux": {
          "left": 86,
          "right": 67
      },
      "Téléphone fixe": {
          "left": 102,
          "right": 91
      },
      "Jeûne intermittent": {
          "left": 103,
          "right": 90
      },
      "Marché couvert": {
          "left": 54,
          "right": 39
      },
      "Primeur": {
          "left": 68,
          "right": 51
      },
      "Herbes de Provence": {
          "left": 112,
          "right": 98
      },
      "Huile d'olive": {
          "left": 118,
          "right": 92
      },
      "Vinaigre balsamique": {
          "left": 107,
          "right": 86
      },
      "Moutarde": {
          "left": 77,
          "right": 57
      },
      "Cornichon": {
          "left": 73,
          "right": 62
      },
      "Ratatouille": {
          "left": 107,
          "right": 95
      },
      "Soupe": {
          "left": 58,
          "right": 53
      },
      "Quiche": {
          "left": 58,
          "right": 44
      },
      "Croque-monsieur": {
          "left": 131,
          "right": 108
      },
      "Galette des rois": {
          "left": 97,
          "right": 81
      },
      "Compote": {
          "left": 116,
          "right": 88
      },
      "Clafoutis": {
          "left": 83,
          "right": 75
      },
      "Mousse au chocolat": {
          "left": 97,
          "right": 87
      },
      "ChatGPT": {
          "left": 35,
          "right": 148
      },
      "LinkedIn": {
          "left": 39,
          "right": 132
      },
      "Business Angel": {
          "left": 40,
          "right": 81
      },
      "Incubateur": {
          "left": 40,
          "right": 132
      },
      "Coworking": {
          "left": 59,
          "right": 153
      },
      "Consulting": {
          "left": 24,
          "right": 112
      },
      "McKinsey": {
          "left": 42,
          "right": 101
      },
      "Audit": {
          "left": 19,
          "right": 124
      },
      "Expert-comptable": {
          "left": 67,
          "right": 137
      },
      "Huissier": {
          "left": 45,
          "right": 95
      },
      "Avocat d'affaires": {
          "left": 17,
          "right": 63
      },
      "Syndic": {
          "left": 26,
          "right": 154
      },
      "Copropriété": {
          "left": 22,
          "right": 125
      },
      "Multipropriété": {
          "left": 26,
          "right": 86
      },
      "SCI": {
          "left": 53,
          "right": 167
      },
      "Holding": {
          "left": 57,
          "right": 115
      },
      "Trust": {
          "left": 33,
          "right": 193
      },
      "Stock-options": {
          "left": 22,
          "right": 141
      },
      "PEA": {
          "left": 64,
          "right": 128
      },
      "Obligations": {
          "left": 38,
          "right": 187
      },
      "Nasdaq": {
          "left": 55,
          "right": 125
      },
      "Wall Street": {
          "left": 71,
          "right": 164
      },
      "Forex": {
          "left": 37,
          "right": 144
      },
      "Trading": {
          "left": 40,
          "right": 100
      },
      "Bitcoin": {
          "left": 54,
          "right": 130
      },
      "NFT": {
          "left": 39,
          "right": 187
      },
      "Blockchain": {
          "left": 26,
          "right": 99
      },
      "Fintech": {
          "left": 15,
          "right": 69
      },
      "Licorne": {
          "left": 78,
          "right": 156
      },
      "Levée de fonds": {
          "left": 64,
          "right": 136
      },
      "Pitch": {
          "left": 34,
          "right": 166
      },
      "Slide": {
          "left": 23,
          "right": 126
      },
      "PowerPoint": {
          "left": 30,
          "right": 163
      },
      "Excel": {
          "left": 45,
          "right": 163
      },
      "Team building": {
          "left": 38,
          "right": 145
      },
      "Afterwork": {
          "left": 38,
          "right": 108
      },
      "Open space": {
          "left": 11,
          "right": 82
      },
      "Badge": {
          "left": 30,
          "right": 61
      },
      "Attaché-case": {
          "left": 33,
          "right": 92
      },
      "Montblanc": {
          "left": 44,
          "right": 115
      },
      "Cartier": {
          "left": 26,
          "right": 129
      },
      "Vuitton": {
          "left": 72,
          "right": 151
      },
      "Dior": {
          "left": 62,
          "right": 168
      },
      "Gucci": {
          "left": 14,
          "right": 74
      },
      "Prada": {
          "left": 21,
          "right": 96
      },
      "Burberry": {
          "left": 19,
          "right": 120
      },
      "Balenciaga": {
          "left": 63,
          "right": 151
      },
      "Louboutin": {
          "left": 49,
          "right": 173
      },
      "Goyard": {
          "left": 28,
          "right": 136
      },
      "Berluti": {
          "left": 50,
          "right": 138
      },
      "Tod's": {
          "left": 49,
          "right": 149
      },
      "Bally": {
          "left": 57,
          "right": 157
      },
      "Church's": {
          "left": 17,
          "right": 119
      },
      "Paraboot": {
          "left": 25,
          "right": 115
      },
      "Hackett": {
          "left": 41,
          "right": 143
      },
      "Tommy Hilfiger": {
          "left": 34,
          "right": 164
      },
      "Gant": {
          "left": 29,
          "right": 121
      },
      "Eden Park": {
          "left": 32,
          "right": 114
      },
      "Serge Blanco": {
          "left": 37,
          "right": 132
      },
      "Vicart": {
          "left": 28,
          "right": 196
      },
      "Fursac": {
          "left": 27,
          "right": 93
      },
      "Father & Sons": {
          "left": 73,
          "right": 142
      },
      "Célio": {
          "left": 38,
          "right": 160
      },
      "Jules": {
          "left": 69,
          "right": 151
      },
      "Zara": {
          "left": 48,
          "right": 145
      },
      "Massimo Dutti": {
          "left": 39,
          "right": 90
      },
      "Sandro": {
          "left": 43,
          "right": 112
      },
      "Maje": {
          "left": 27,
          "right": 116
      },
      "Zadig & Voltaire": {
          "left": 22,
          "right": 104
      },
      "The Kooples": {
          "left": 19,
          "right": 73
      },
      "Sézane": {
          "left": 25,
          "right": 87
      },
      "Bonpoint": {
          "left": 37,
          "right": 145
      },
      "Jacadi": {
          "left": 22,
          "right": 70
      },
      "Tartine et Chocolat": {
          "left": 60,
          "right": 174
      },
      "Catimini": {
          "left": 45,
          "right": 170
      },
      "Guerlain": {
          "left": 20,
          "right": 93
      },
      "Lancôme": {
          "left": 51,
          "right": 134
      },
      "Nuxe": {
          "left": 43,
          "right": 85
      },
      "Caudalie": {
          "left": 32,
          "right": 96
      },
      "Clarins": {
          "left": 20,
          "right": 138
      },
      "L'Oréal": {
          "left": 28,
          "right": 106
      },
      "Estée Lauder": {
          "left": 38,
          "right": 109
      },
      "Ray-Ban": {
          "left": 18,
          "right": 74
      },
      "Persol": {
          "left": 35,
          "right": 146
      },
      "Omega": {
          "left": 38,
          "right": 137
      },
      "Breitling": {
          "left": 23,
          "right": 128
      },
      "Patek Philippe": {
          "left": 59,
          "right": 175
      },
      "Audemars Piguet": {
          "left": 72,
          "right": 145
      },
      "TAG Heuer": {
          "left": 31,
          "right": 118
      },
      "Tissot": {
          "left": 22,
          "right": 145
      },
      "Swarovski": {
          "left": 34,
          "right": 153
      },
      "Mauboussin": {
          "left": 25,
          "right": 67
      },
      "Van Cleef & Arpels": {
          "left": 26,
          "right": 141
      },
      "Chaumet": {
          "left": 20,
          "right": 93
      },
      "Boucheron": {
          "left": 43,
          "right": 90
      },
      "Baccarat": {
          "left": 63,
          "right": 158
      },
      "Lalique": {
          "left": 28,
          "right": 163
      },
      "Antiquaire": {
          "left": 28,
          "right": 110
      },
      "Commissaire-priseur": {
          "left": 38,
          "right": 193
      },
      "Mécénat": {
          "left": 56,
          "right": 182
      },
      "Fondation": {
          "left": 35,
          "right": 126
      },
      "Opéra": {
          "left": 54,
          "right": 110
      },
      "Ballet": {
          "left": 31,
          "right": 76
      },
      "Philharmonie": {
          "left": 34,
          "right": 175
      },
      "Clavecin": {
          "left": 32,
          "right": 165
      },
      "Violoncelle": {
          "left": 17,
          "right": 102
      },
      "Harpe": {
          "left": 39,
          "right": 144
      },
      "Orgue": {
          "left": 31,
          "right": 150
      },
      "Chœur": {
          "left": 24,
          "right": 121
      },
      "Catéchisme": {
          "left": 25,
          "right": 109
      },
      "Communion": {
          "left": 60,
          "right": 168
      },
      "Baptême": {
          "left": 41,
          "right": 185
      },
      "Confirmation": {
          "left": 45,
          "right": 156
      },
      "Pèlerinage": {
          "left": 38,
          "right": 102
      },
      "Chapelet": {
          "left": 61,
          "right": 153
      },
      "Médaille de baptême": {
          "left": 48,
          "right": 97
      },
      "École privée": {
          "left": 23,
          "right": 108
      },
      "Prépa": {
          "left": 20,
          "right": 75
      },
      "ESSEC": {
          "left": 57,
          "right": 113
      },
      "ESCP": {
          "left": 31,
          "right": 209
      },
      "EDHEC": {
          "left": 46,
          "right": 193
      },
      "INSEAD": {
          "left": 56,
          "right": 132
      },
      "MBA": {
          "left": 28,
          "right": 60
      },
      "Polytechnique": {
          "left": 32,
          "right": 183
      },
      "ENA": {
          "left": 44,
          "right": 148
      },
      "Corps d'État": {
          "left": 63,
          "right": 162
      },
      "Préfet": {
          "left": 33,
          "right": 97
      },
      "Ambassadeur": {
          "left": 18,
          "right": 116
      },
      "Consul": {
          "left": 51,
          "right": 102
      },
      "Sénat": {
          "left": 44,
          "right": 109
      },
      "Académie française": {
          "left": 19,
          "right": 101
      },
      "Jockey Club": {
          "left": 36,
          "right": 164
      },
      "Country Club": {
          "left": 37,
          "right": 88
      },
      "Polo Club": {
          "left": 52,
          "right": 167
      },
      "Yacht Club": {
          "left": 25,
          "right": 127
      },
      "Golf Club": {
          "left": 56,
          "right": 134
      },
      "Cercle de jeux": {
          "left": 65,
          "right": 154
      },
      "Casino": {
          "left": 14,
          "right": 96
      },
      "Roulette": {
          "left": 42,
          "right": 177
      },
      "Blackjack": {
          "left": 46,
          "right": 163
      },
      "Poker": {
          "left": 29,
          "right": 73
      },
      "Backgammon": {
          "left": 46,
          "right": 161
      },
      "Billard": {
          "left": 37,
          "right": 157
      },
      "Croquet": {
          "left": 31,
          "right": 60
      },
      "Escrime": {
          "left": 36,
          "right": 116
      },
      "Aviron": {
          "left": 52,
          "right": 152
      },
      "Voile": {
          "left": 34,
          "right": 105
      },
      "Catamaran": {
          "left": 47,
          "right": 134
      },
      "Voilier": {
          "left": 23,
          "right": 84
      },
      "Zodiac": {
          "left": 20,
          "right": 125
      },
      "Hors-bord": {
          "left": 71,
          "right": 147
      },
      "Ski nautique": {
          "left": 13,
          "right": 69
      },
      "Wakeboard": {
          "left": 30,
          "right": 117
      },
      "Kitesurf": {
          "left": 16,
          "right": 73
      },
      "Plongée": {
          "left": 22,
          "right": 108
      },
      "Parachutisme": {
          "left": 57,
          "right": 151
      },
      "Parapente": {
          "left": 37,
          "right": 77
      },
      "ULM": {
          "left": 49,
          "right": 163
      },
      "Ercuis": {
          "left": 50,
          "right": 144
      },
      "Puiforcat": {
          "left": 12,
          "right": 70
      },
      "CrossFit": {
          "left": 84,
          "right": 107
      },
      "Strava": {
          "left": 69,
          "right": 87
      },
      "Lidl": {
          "left": 80,
          "right": 89
      },
      "Action": {
          "left": 86,
          "right": 104
      },
      "Ryanair": {
          "left": 78,
          "right": 97
      },
      "Nucléaire": {
          "left": 111,
          "right": 129
      },
      "Gifi": {
          "left": 52,
          "right": 66
      },
      "Centrakor": {
          "left": 79,
          "right": 91
      },
      "Boulanger": {
          "left": 99,
          "right": 118
      },
      "But": {
          "left": 94,
          "right": 130
      },
      "Conforama": {
          "left": 54,
          "right": 70
      },
      "Maisons du Monde": {
          "left": 93,
          "right": 101
      },
      "Nature & Découvertes": {
          "left": 105,
          "right": 120
      },
      "Truffaut": {
          "left": 51,
          "right": 62
      },
      "Jardiland": {
          "left": 44,
          "right": 57
      },
      "Gamm Vert": {
          "left": 44,
          "right": 61
      },
      "Norauto": {
          "left": 37,
          "right": 46
      },
      "Feu Vert": {
          "left": 42,
          "right": 56
      },
      "Speedy": {
          "left": 83,
          "right": 104
      },
      "Carglass": {
          "left": 65,
          "right": 71
      }
  };
  // __SEED_VOTES_END__

  const WORD_LIST = Object.keys(EMBEDDED_SEED_VOTES);

  // ============================================================================
  // Constants & Game States
  // ============================================================================
  const ROUNDS_PER_SESSION = 10;
  const ADVANCE_GUARD_DELAY_MS = 200; // Guard against accidental instant advance

  const STATES = {
    INTRO: 'INTRO',
    VOTING: 'VOTING',
    REVEALING: 'REVEALING',
    REVEALED: 'REVEALED',
    SUMMARY: 'SUMMARY'
  };

  let currentState = STATES.INTRO;
  let voteDeltas = {};
  let currentWord = "";
  let revealTimestamp = 0;

  // Session State Object
  const session = {
    words: [],
    index: 0,
    history: [],
    lastSummary: null
  };

  // Player Career Stats Object
  let stats = {
    streak: 0,
    bestStreak: 0,
    totalPlayed: 0,
    totalWins: 0,
    seenWords: [],
    seriesCompleted: 0
  };

  // LocalStorage Persistence Keys
  const STORAGE_KEY_STATS = 'gd_game_stats_v1';
  const STORAGE_KEY_DELTAS = 'gd_vote_deltas_v1';

  // DOM Elements Cache
  const DOM = {
    body: document.body,
    viewport: document.getElementById('viewport'),
    panelLeft: document.getElementById('panel-left'),
    panelRight: document.getElementById('panel-right'),
    mainWord: document.getElementById('main-word'),
    metaIndex: document.getElementById('meta-index'),
    roundPips: document.getElementById('round-pips'),
    verdictPill: document.getElementById('verdict-pill'),
    verdictText: document.getElementById('verdict-text'),
    verdictIcon: document.getElementById('verdict-icon'),
    percentLeft: document.getElementById('percent-left'),
    percentRight: document.getElementById('percent-right'),
    votesLeft: document.getElementById('votes-left'),
    votesRight: document.getElementById('votes-right'),
    badgeLeft: document.getElementById('badge-left'),
    badgeRight: document.getElementById('badge-right'),
    btnContinue: document.getElementById('btn-continue'),
    continueLabelDesktop: document.getElementById('continue-label-desktop'),
    continueLabelTouch: document.getElementById('continue-label-touch'),
    statStreak: document.getElementById('stat-streak'),
    statBest: document.getElementById('stat-best'),
    statMajority: document.getElementById('stat-majority'),
    statWins: document.getElementById('stat-wins'),
    brandPill: document.querySelector('.brand-pill'),

    // Intro Screen Elements
    introOverlay: document.getElementById('intro-overlay'),
    introCareerBar: document.getElementById('intro-career-bar'),
    introCareerText: document.getElementById('intro-career-text'),
    btnStartSession: document.getElementById('btn-start-session'),

    // Summary Screen Elements
    summaryOverlay: document.getElementById('summary-overlay'),
    bilanTitle: document.getElementById('bilan-title'),
    bilanArchetypeTitle: document.getElementById('bilan-archetype-title'),
    bilanArchetypeDesc: document.getElementById('bilan-archetype-desc'),
    bilanFlairBadge: document.getElementById('bilan-flair-badge'),
    bilanMajorityScore: document.getElementById('bilan-majority-score'),
    bilanMajoritySub: document.getElementById('bilan-majority-sub'),
    bilanBiasBadge: document.getElementById('bilan-bias-badge'),
    bilanDivergenceHeadline: document.getElementById('bilan-divergence-headline'),
    bilanDivergenceFill: document.getElementById('bilan-divergence-fill'),
    bilanDivergenceMarker: document.getElementById('bilan-divergence-marker'),
    bilanCompassSub: document.getElementById('bilan-compass-sub'),
    bilanHottake: document.getElementById('bilan-hottake'),
    bilanHottakeLabel: document.getElementById('bilan-hottake-label'),
    bilanHottakeText: document.getElementById('bilan-hottake-text'),
    bilanHottakeBadge: document.getElementById('bilan-hottake-badge'),
    bilanWordsList: document.getElementById('bilan-words-list'),
    btnPlayAgain: document.getElementById('btn-play-again')
  };

  // ============================================================================
  // Magnetic Hover & Touch Drag Physics (Spring Lerp Loop)
  // ============================================================================
  const spring = {
    pullX: 0,
    pullY: 0,
    rot: 0,
    split: 50,
    targetPullX: 0,
    targetPullY: 0,
    targetRot: 0,
    targetSplit: 50
  };

  const touchState = {
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    startTime: 0,
    lastEndTime: 0
  };

  let lastRevealedLeftPct = 50;

  function canUseHoverPhysics() {
    if (touchState.active || Date.now() - touchState.lastEndTime < 1200) {
      return false;
    }
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  function resetSpringTargets() {
    spring.targetPullX = 0;
    spring.targetPullY = 0;
    spring.targetRot = 0;
    spring.targetSplit = 50;
  }

  function resetSpring() {
    spring.pullX = 0;
    spring.pullY = 0;
    spring.rot = 0;
    spring.targetPullX = 0;
    spring.targetPullY = 0;
    spring.targetRot = 0;
    document.documentElement.style.setProperty('--pull-x', '0px');
    document.documentElement.style.setProperty('--pull-y', '0px');
    document.documentElement.style.setProperty('--pull-rot', '0deg');
  }

  function onMouseMove(e) {
    if (currentState !== STATES.VOTING || !canUseHoverPhysics()) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const halfW = width / 2;

    if (e.clientX < halfW) {
      DOM.body.classList.add('hover-left');
      DOM.body.classList.remove('hover-right');

      const progress = Math.min(1, (halfW - e.clientX) / halfW);
      spring.targetPullX = -58 * Math.pow(progress, 0.85);
      spring.targetPullY = (e.clientY - height / 2) * 0.05;
      spring.targetRot = -2.2 * progress;
      spring.targetSplit = 50 + (3.6 * progress);
    } else {
      DOM.body.classList.add('hover-right');
      DOM.body.classList.remove('hover-left');

      const progress = Math.min(1, (e.clientX - halfW) / halfW);
      spring.targetPullX = 58 * Math.pow(progress, 0.85);
      spring.targetPullY = (e.clientY - height / 2) * 0.05;
      spring.targetRot = 2.2 * progress;
      spring.targetSplit = 50 - (3.6 * progress);
    }
  }

  function onMouseLeave() {
    DOM.body.classList.remove('hover-left', 'hover-right');
    if (currentState === STATES.VOTING) {
      resetSpringTargets();
    }
  }

  function onTouchStart(e) {
    if (currentState !== STATES.VOTING && currentState !== STATES.REVEALED) return;
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchState.active = true;
    touchState.moved = false;
    touchState.startX = touch.clientX;
    touchState.startY = touch.clientY;
    touchState.currentX = touch.clientX;
    touchState.currentY = touch.clientY;
    touchState.startTime = Date.now();
  }

  function onTouchMove(e) {
    if (!touchState.active || e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchState.currentX = touch.clientX;
    touchState.currentY = touch.clientY;

    const dx = touch.clientX - touchState.startX;
    const dy = touch.clientY - touchState.startY;

    if (Math.hypot(dx, dy) > 8) {
      touchState.moved = true;
    }

    if (currentState !== STATES.VOTING) return;

    const dragRange = Math.max(90, window.innerWidth * 0.34);
    const progress = Math.min(1, Math.abs(dx) / dragRange);

    if (dx < -6) {
      DOM.body.classList.add('hover-left');
      DOM.body.classList.remove('hover-right');

      spring.targetPullX = -46 * Math.pow(progress, 0.85);
      spring.targetPullY = Math.max(-18, Math.min(18, dy * 0.1));
      spring.targetRot = -2.4 * progress;
      spring.targetSplit = 50 + (6.5 * progress);
    } else if (dx > 6) {
      DOM.body.classList.add('hover-right');
      DOM.body.classList.remove('hover-left');

      spring.targetPullX = 46 * Math.pow(progress, 0.85);
      spring.targetPullY = Math.max(-18, Math.min(18, dy * 0.1));
      spring.targetRot = 2.4 * progress;
      spring.targetSplit = 50 - (6.5 * progress);
    } else {
      DOM.body.classList.remove('hover-left', 'hover-right');
      resetSpringTargets();
    }
  }

  function onTouchEnd() {
    if (!touchState.active) return;
    touchState.active = false;
    touchState.lastEndTime = Date.now();
    DOM.body.classList.remove('hover-left', 'hover-right');

    const dx = touchState.currentX - touchState.startX;
    const dt = Math.max(1, Date.now() - touchState.startTime);
    const velocityX = Math.abs(dx) / dt;

    if (currentState === STATES.VOTING && touchState.moved) {
      const isSwipeCommit = Math.abs(dx) > 44 || (Math.abs(dx) > 22 && velocityX > 0.42);
      if (isSwipeCommit) {
        handleVote(dx < 0 ? 'left' : 'right');
      } else {
        resetSpringTargets();
      }
    } else if (currentState === STATES.REVEALED && touchState.moved && Math.abs(dx) > 40) {
      advanceToNextWord();
    }
  }

  function onTouchCancel() {
    touchState.active = false;
    touchState.moved = false;
    touchState.lastEndTime = Date.now();
    DOM.body.classList.remove('hover-left', 'hover-right');
    if (currentState === STATES.VOTING) {
      resetSpringTargets();
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
  function loadState() {
    try {
      const rawStats = localStorage.getItem(STORAGE_KEY_STATS);
      if (rawStats) {
        const parsed = JSON.parse(rawStats);
        stats = {
          streak: parsed.streak || 0,
          bestStreak: parsed.bestStreak || 0,
          totalPlayed: parsed.totalPlayed || 0,
          totalWins: parsed.totalWins || 0,
          seenWords: Array.isArray(parsed.seenWords) ? parsed.seenWords : [],
          seriesCompleted: parsed.seriesCompleted || 0
        };
      }
      const rawDeltas = localStorage.getItem(STORAGE_KEY_DELTAS);
      if (rawDeltas) {
        voteDeltas = JSON.parse(rawDeltas) || {};
      }
    } catch (err) {
      console.warn('Could not read from localStorage', err);
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
    if (DOM.statStreak) DOM.statStreak.textContent = stats.streak;
    if (DOM.statBest) DOM.statBest.textContent = stats.bestStreak;
    if (DOM.statWins) DOM.statWins.textContent = `${stats.totalWins}/${stats.totalPlayed}`;
    if (DOM.statMajority) {
      DOM.statMajority.textContent = stats.totalPlayed > 0
        ? `${Math.round((stats.totalWins / stats.totalPlayed) * 100)}%`
        : '0%';
    }
  }

  // ============================================================================
  // Deck Generation & Round Pips UI
  // ============================================================================
  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function buildSessionDeck() {
    let available = WORD_LIST.filter(w => !stats.seenWords.includes(w));
    if (available.length < ROUNDS_PER_SESSION) {
      stats.seenWords = [];
      saveStats();
      available = [...WORD_LIST];
    }

    return shuffle(available).slice(0, ROUNDS_PER_SESSION);
  }

  function renderRoundPips() {
    if (!DOM.roundPips) return;
    DOM.roundPips.innerHTML = '';

    for (let i = 0; i < ROUNDS_PER_SESSION; i++) {
      const pip = document.createElement('span');
      pip.className = 'round-pip';

      if (i < session.history.length) {
        const h = session.history[i];
        pip.classList.add(h.userSide === 'left' ? 'voted-left' : 'voted-right');
        if (!h.won) {
          pip.classList.add('is-loss');
        }
        pip.title = `${h.word} (${h.userSide === 'left' ? 'Gauche' : 'Droite'})`;
      } else if (i === session.index && session.history.length === session.index) {
        pip.classList.add('is-current');
      }

      DOM.roundPips.appendChild(pip);
    }
  }

  // ============================================================================
  // Intro Screen & Session Lifecycle
  // ============================================================================
  function showIntroScreen() {
    currentState = STATES.INTRO;
    DOM.body.classList.remove('is-summary', 'revealed', 'revealing', 'resetting', 'hover-left', 'hover-right');
    DOM.body.classList.add('is-intro');

    if (DOM.introOverlay) DOM.introOverlay.setAttribute('aria-hidden', 'false');
    if (DOM.summaryOverlay) DOM.summaryOverlay.setAttribute('aria-hidden', 'true');

    document.documentElement.style.setProperty('--split-pos', '50%');
    spring.split = 50;
    spring.targetSplit = 50;
    resetSpring();

    if (DOM.introCareerBar) {
      if (stats.totalPlayed > 0) {
        DOM.introCareerBar.hidden = false;
        DOM.introCareerBar.removeAttribute('hidden');
        const seriesCount = stats.seriesCompleted || 0;
        const s = seriesCount > 1 ? 's' : '';
        const winRate = Math.round((stats.totalWins / stats.totalPlayed) * 100);
        if (DOM.introCareerText) {
          DOM.introCareerText.textContent = `${seriesCount} série${s} terminée${s} · Record : ${stats.bestStreak} · Majorité : ${winRate}%`;
        }
      } else {
        DOM.introCareerBar.hidden = true;
        DOM.introCareerBar.setAttribute('hidden', '');
      }
    }
  }

  function startNewSession() {
    session.words = buildSessionDeck();
    session.index = 0;
    session.history = [];
    session.lastSummary = null;

    DOM.body.classList.remove('is-intro', 'is-summary', 'revealed', 'revealing', 'resetting', 'hover-left', 'hover-right');
    if (DOM.introOverlay) DOM.introOverlay.setAttribute('aria-hidden', 'true');
    if (DOM.summaryOverlay) DOM.summaryOverlay.setAttribute('aria-hidden', 'true');

    document.documentElement.style.setProperty('--split-pos', '50%');
    spring.split = 50;
    spring.targetSplit = 50;
    resetSpring();

    currentWord = session.words[0] || "Quinoa";
    DOM.mainWord.textContent = currentWord;
    DOM.metaIndex.textContent = `N° 1 / ${ROUNDS_PER_SESSION}`;

    DOM.percentLeft.textContent = "0";
    DOM.percentRight.textContent = "0";
    DOM.badgeLeft.classList.remove('is-selected');
    DOM.badgeRight.classList.remove('is-selected');

    if (DOM.continueLabelDesktop) DOM.continueLabelDesktop.textContent = "Cliquer pour continuer";
    if (DOM.continueLabelTouch) DOM.continueLabelTouch.textContent = "Toucher pour continuer";

    renderRoundPips();
    currentState = STATES.VOTING;
  }

  // ============================================================================
  // Voting & Community Results Reveal Logic
  // ============================================================================
  async function handleVote(side) {
    if (currentState !== STATES.VOTING) return;

    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }

    currentState = STATES.REVEALING;
    revealTimestamp = Date.now();
    DOM.body.classList.remove('hover-left', 'hover-right');
    DOM.body.classList.add('revealing');

    // Smoothly zero center word offsets and spring physics
    resetSpring();

    // Highlight user selection badge
    DOM.badgeLeft.classList.toggle('is-selected', side === 'left');
    DOM.badgeRight.classList.toggle('is-selected', side === 'right');

    // Call POST /api/vote when hosted, or use embedded seed votes when opened as local file://
    let voteResult;
    if (window.location.protocol === 'file:') {
      voteResult = computeLocalVote(currentWord, side);
    } else {
      try {
        const response = await fetch('/api/vote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ word: currentWord, side })
        });
        voteResult = response.ok ? await response.json() : computeLocalVote(currentWord, side);
      } catch (_) {
        voteResult = computeLocalVote(currentWord, side);
      }
    }

    processVerdictAndReveal(voteResult);
  }

  function computeLocalVote(word, side) {
    const base = EMBEDDED_SEED_VOTES[word] || { left: 50, right: 50 };
    const delta = voteDeltas[word] || { left: 0, right: 0 };

    if (side === 'left') delta.left += 1;
    else delta.right += 1;

    voteDeltas[word] = delta;
    try {
      localStorage.setItem(STORAGE_KEY_DELTAS, JSON.stringify(voteDeltas));
    } catch (_) {}

    const leftVotes = base.left + delta.left;
    const rightVotes = base.right + delta.right;
    const totalVotes = leftVotes + rightVotes;
    const leftPercent = Math.round((leftVotes / totalVotes) * 100);
    const rightPercent = 100 - leftPercent;
    const majoritySide = leftVotes === rightVotes ? 'tie' : (leftVotes > rightVotes ? 'left' : 'right');
    const won = (side === 'left' && leftVotes >= rightVotes) || (side === 'right' && rightVotes >= leftVotes);

    return {
      word,
      leftVotes,
      rightVotes,
      totalVotes,
      leftPercent,
      rightPercent,
      userSide: side,
      majoritySide,
      won
    };
  }

  function applyRevealedSplit(leftPct) {
    const minClamp = window.innerWidth < 480 ? 28 : (window.innerWidth < 768 ? 24 : 18);
    const clampedSplit = Math.max(minClamp, Math.min(100 - minClamp, leftPct));
    document.documentElement.style.setProperty('--split-pos', `${clampedSplit}%`);
  }

  function processVerdictAndReveal(data) {
    const leftPct = data.leftPercent;
    const rightPct = data.rightPercent;
    const isWinner = Boolean(data.won);
    lastRevealedLeftPct = leftPct;

    const userAgreePercent = data.userSide === 'left' ? data.leftPercent : data.rightPercent;
    const majorityPercent = Math.max(data.leftPercent, data.rightPercent);
    const gapFromMajority = isWinner ? 0 : (majorityPercent - userAgreePercent);

    let roundDivergence = 0;
    if (!isWinner) {
      if (data.userSide === 'left') {
        roundDivergence = -data.rightPercent;
      } else {
        roundDivergence = data.leftPercent;
      }
    }

    session.history.push({
      word: data.word,
      userSide: data.userSide,
      leftVotes: data.leftVotes,
      rightVotes: data.rightVotes,
      leftPercent: data.leftPercent,
      rightPercent: data.rightPercent,
      userAgreePercent,
      majorityPercent,
      gapFromMajority,
      roundDivergence,
      won: isWinner
    });

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

    // Re-render round pips so current pip immediately lights up
    renderRoundPips();

    // If round 10, update continue button labels to "Voir les résultats"
    if (session.history.length >= ROUNDS_PER_SESSION) {
      if (DOM.continueLabelDesktop) DOM.continueLabelDesktop.textContent = "Voir les résultats";
      if (DOM.continueLabelTouch) DOM.continueLabelTouch.textContent = "Voir les résultats";
    } else {
      if (DOM.continueLabelDesktop) DOM.continueLabelDesktop.textContent = "Cliquer pour continuer";
      if (DOM.continueLabelTouch) DOM.continueLabelTouch.textContent = "Toucher pour continuer";
    }

    // Clamp split boundary visually so both side numbers remain readable
    applyRevealedSplit(leftPct);

    // Configure Verdict Banner
    DOM.verdictPill.classList.toggle('is-winner', isWinner);
    DOM.verdictPill.classList.toggle('is-minority', !isWinner);
    DOM.verdictText.textContent = isWinner ? "DANS LA MAJORITÉ" : "EN MINORITÉ";
    DOM.verdictIcon.textContent = isWinner ? "✦" : "—";

    // Set vote counts text
    DOM.votesLeft.textContent = `${data.leftVotes.toLocaleString('fr-FR')} votes`;
    DOM.votesRight.textContent = `${data.rightVotes.toLocaleString('fr-FR')} votes`;

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
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(start + (end - start) * eased);
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
    if (Date.now() - revealTimestamp < ADVANCE_GUARD_DELAY_MS) return;

    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }

    if (session.history.length >= ROUNDS_PER_SESSION) {
      showSessionSummary();
      return;
    }

    session.index++;
    currentState = STATES.REVEALING;
    touchState.active = false;
    touchState.moved = false;

    // Reset split smoothly back to 50% and zero all word physics offsets
    DOM.body.classList.remove('revealed', 'hover-left', 'hover-right');
    DOM.body.classList.add('resetting');
    document.documentElement.style.setProperty('--split-pos', '50%');
    spring.split = 50;
    spring.targetSplit = 50;
    resetSpring();

    // Animate word exit
    DOM.mainWord.classList.add('word-exit-up');

    // Deselect badges
    DOM.badgeLeft.classList.remove('is-selected');
    DOM.badgeRight.classList.remove('is-selected');

    setTimeout(() => {
      currentWord = session.words[session.index] || "Quinoa";
      DOM.mainWord.textContent = currentWord;
      DOM.metaIndex.textContent = `N° ${session.index + 1} / ${ROUNDS_PER_SESSION}`;
      renderRoundPips();

      DOM.mainWord.classList.remove('word-exit-up');
      DOM.mainWord.classList.add('word-enter-down');

      DOM.percentLeft.textContent = "0";
      DOM.percentRight.textContent = "0";

      requestAnimationFrame(() => {
        DOM.mainWord.classList.add('word-enter-active');
        DOM.mainWord.classList.remove('word-enter-down');

        setTimeout(() => {
          DOM.mainWord.classList.remove('word-enter-active');
          DOM.body.classList.remove('resetting', 'hover-left', 'hover-right');
          resetSpring();
          touchState.active = false;
          touchState.moved = false;
          currentState = STATES.VOTING;
        }, 340);
      });
    }, 320);
  }

  // ============================================================================
  // Satirical French Archetype Engine & End-of-Run Summary
  // ============================================================================
  function computeArchetype(winsCount, falseLeftCount, falseRightCount, avgAgreePct) {
    if (winsCount === 10) {
      return {
        title: "Le Baromètre de la République",
        desc: "10 sur 10 : aucun cliché hexagonal ne vous échappe. Vous lisez dans l'inconscient collectif français comme dans un livre ouvert."
      };
    }

    if (winsCount >= 8) {
      if (falseLeftCount > falseRightCount) {
        return {
          title: "L'Observateur au Prisme Rouge",
          desc: `Une lecture quasi parfaite de l'opinion (${avgAgreePct}% d'accord moyen), avec une légère tendance à voir de la gauche là où la France voit la droite.`
        };
      } else if (falseRightCount > falseLeftCount) {
        return {
          title: "L'Observateur au Prisme Bleu",
          desc: `Une lecture quasi parfaite de l'opinion (${avgAgreePct}% d'accord moyen), avec une légère tendance à ranger à droite ce que la foule juge de gauche.`
        };
      } else {
        return {
          title: "Le Sociologue de Comptoir",
          desc: `Vous captez l'air du temps avec une précision chirurgicale (${avgAgreePct}% d'accord moyen), sans jamais pencher d'un côté plus que de l'autre.`
        };
      }
    }

    if (winsCount >= 5) {
      if (falseLeftCount > falseRightCount) {
        return {
          title: "Le Révisionniste de Gauche",
          desc: "Vous connaissez les grands classiques, mais dès qu'un mot fait débat, vous refusez de le laisser à la droite."
        };
      } else if (falseRightCount > falseLeftCount) {
        return {
          title: "Le Révisionniste de Droite",
          desc: "Vous validez les évidences, mais face aux mots ambigus, vous voyez systématiquement la patte de la droite."
        };
      } else {
        return {
          title: "L'Esprit Libre du Kiosque",
          desc: "Moitié dans le consensus, moitié franc-tireur : vos désaccords avec les Français se répartissent équitablement des deux côtés."
        };
      }
    }

    // winsCount < 5 (Contrarian / À Contre-Courant)
    if (falseLeftCount > falseRightCount) {
      return {
        title: "L'Insurgé du Dictionnaire",
        desc: "À rebours de la majorité nationale, vous rebaptisez à gauche même les symboles que les Français classent à droite."
      };
    } else if (falseRightCount > falseLeftCount) {
      return {
        title: "Le Frondeur Réactionnaire",
        desc: "Contre l'avis général, vous voyez des marqueurs de droite jusque dans les totems préférés de la gauche."
      };
    } else {
      return {
        title: "L'Anticonformiste Intégral",
        desc: `Seulement ${avgAgreePct}% d'accord moyen avec le pays : vous semblez vivre dans une France parallèle où tous les clichés sont inversés.`
      };
    }
  }

  function showSessionSummary() {
    stats.seriesCompleted = (stats.seriesCompleted || 0) + 1;
    saveStats();

    currentState = STATES.SUMMARY;

    const winsCount = session.history.filter(h => h.won).length;
    const lossesCount = ROUNDS_PER_SESSION - winsCount;
    const avgAgreePct = Math.round(session.history.reduce((acc, h) => acc + h.userAgreePercent, 0) / ROUNDS_PER_SESSION);
    const falseLeftCount = session.history.filter(h => !h.won && h.userSide === 'left').length;
    const falseRightCount = session.history.filter(h => !h.won && h.userSide === 'right').length;

    const netDivergenceSum = session.history.reduce((acc, h) => acc + (h.roundDivergence || 0), 0);
    const divergenceIndex = Math.round(netDivergenceSum / ROUNDS_PER_SESSION);
    const markerPct = Math.max(8, Math.min(92, 50 + divergenceIndex));

    const wordsNoun = winsCount <= 1 ? 'mot' : 'mots';
    if (DOM.bilanArchetypeDesc) {
      DOM.bilanArchetypeDesc.textContent = `Vous avez voté comme la majorité sur ${winsCount} ${wordsNoun} sur 10 (${avgAgreePct}% d'accord moyen).`;
    }

    // Update Metric 1: Accord Majoritaire
    const majorityPct = Math.round((winsCount / ROUNDS_PER_SESSION) * 100);
    if (DOM.bilanMajorityScore) DOM.bilanMajorityScore.textContent = `${winsCount}`;
    if (DOM.bilanMajoritySub) DOM.bilanMajoritySub.textContent = `En phase avec ${avgAgreePct}% des votants en moyenne`;
    if (DOM.bilanFlairBadge) DOM.bilanFlairBadge.textContent = `${majorityPct}%`;

    // Update Metric 2: Écart vs Majorité
    if (DOM.bilanDivergenceMarker) {
      DOM.bilanDivergenceMarker.style.left = `${markerPct}%`;
    }

    if (DOM.bilanDivergenceFill) {
      if (markerPct < 48) {
        DOM.bilanDivergenceFill.className = 'divergence-fill is-left';
        DOM.bilanDivergenceFill.style.left = `${markerPct}%`;
        DOM.bilanDivergenceFill.style.width = `${50 - markerPct}%`;
      } else if (markerPct > 52) {
        DOM.bilanDivergenceFill.className = 'divergence-fill is-right';
        DOM.bilanDivergenceFill.style.left = '50%';
        DOM.bilanDivergenceFill.style.width = `${markerPct - 50}%`;
      } else {
        DOM.bilanDivergenceFill.className = 'divergence-fill';
        DOM.bilanDivergenceFill.style.left = '50%';
        DOM.bilanDivergenceFill.style.width = '0%';
      }
    }

    let biasBadge = "Aligné";
    let divergenceHeadline = "Aucun écart";
    let compassSub = "0 vote à contre-courant";

    if (lossesCount === 0) {
      biasBadge = "Aligné";
      divergenceHeadline = "Aucun écart";
      compassSub = "0 vote à contre-courant";
    } else if (falseLeftCount > falseRightCount) {
      biasBadge = "Prisme Gauche";
      divergenceHeadline = "Tendance Gauche";
      compassSub = `${falseLeftCount} désaccord${falseLeftCount > 1 ? 's' : ''} vers la Gauche · ${falseRightCount} vers la Droite`;
    } else if (falseRightCount > falseLeftCount) {
      biasBadge = "Prisme Droite";
      divergenceHeadline = "Tendance Droite";
      compassSub = `${falseRightCount} désaccord${falseRightCount > 1 ? 's' : ''} vers la Droite · ${falseLeftCount} vers la Gauche`;
    } else {
      biasBadge = "Équilibré";
      divergenceHeadline = "Écarts équilibrés";
      compassSub = `${falseLeftCount} désaccord${falseLeftCount > 1 ? 's' : ''} vers la Gauche · ${falseRightCount} vers la Droite`;
    }

    if (DOM.bilanBiasBadge) DOM.bilanBiasBadge.textContent = biasBadge;
    if (DOM.bilanDivergenceHeadline) DOM.bilanDivergenceHeadline.textContent = divergenceHeadline;
    if (DOM.bilanCompassSub) DOM.bilanCompassSub.textContent = compassSub;

    // Find Lowest userAgreePercent (Notable Vote)
    let minItem = session.history[0];
    for (const item of session.history) {
      if (item.userAgreePercent < minItem.userAgreePercent) {
        minItem = item;
      }
    }

    if (minItem.userAgreePercent < 50) {
      if (DOM.bilanHottakeLabel) DOM.bilanHottakeLabel.textContent = "VOTE LE PLUS À CONTRE-COURANT";
      if (DOM.bilanHottakeText) {
        DOM.bilanHottakeText.textContent = `Voter « ${minItem.word} » à ${minItem.userSide === 'left' ? 'Gauche' : 'Droite'} — seuls ${minItem.userAgreePercent}% des joueurs sont d'accord avec vous.`;
      }
      if (DOM.bilanHottakeBadge) DOM.bilanHottakeBadge.textContent = `${minItem.userAgreePercent}%`;
    } else {
      if (DOM.bilanHottakeLabel) DOM.bilanHottakeLabel.textContent = "VOTE LE PLUS SERRÉ";
      if (DOM.bilanHottakeText) {
        DOM.bilanHottakeText.textContent = `« ${minItem.word} » à ${minItem.userSide === 'left' ? 'Gauche' : 'Droite'} (${minItem.userAgreePercent}% de majorité) — un sans-faute sur toute la ligne !`;
      }
      if (DOM.bilanHottakeBadge) DOM.bilanHottakeBadge.textContent = `${minItem.userAgreePercent}%`;
    }

    // 10-Word Recap Grid
    if (DOM.bilanWordsList) {
      DOM.bilanWordsList.innerHTML = '';
      session.history.forEach(item => {
        const chip = document.createElement('div');
        chip.className = `word-recap-chip ${item.userSide === 'left' ? 'is-left' : 'is-right'} ${item.won ? 'is-win' : 'is-loss'}`;
        chip.innerHTML = `
          <div class="chip-left">
            <span class="chip-side">${item.userSide === 'left' ? 'G' : 'D'}</span>
            <span class="chip-word" title="${item.word}">${item.word}</span>
          </div>
          <div class="chip-right">
            <span class="chip-pct">${item.userAgreePercent}%</span>
            <span class="chip-verdict">${item.won ? '✦' : '—'}</span>
          </div>
        `;
        DOM.bilanWordsList.appendChild(chip);
      });
    }

    const summarySplitPct = 100 - markerPct;
    session.lastSummary = {
      summarySplitPct
    };

    // Viewport background split animation reflecting divergence
    applyRevealedSplit(summarySplitPct);

    // Toggle Overlay classes & accessibility
    DOM.body.classList.remove('revealed', 'revealing', 'resetting', 'hover-left', 'hover-right', 'is-intro');
    DOM.body.classList.add('is-summary');
    if (DOM.introOverlay) DOM.introOverlay.setAttribute('aria-hidden', 'true');
    if (DOM.summaryOverlay) DOM.summaryOverlay.setAttribute('aria-hidden', 'false');
  }

  // ============================================================================
  // Event Listeners (Mouse, Keyboard, Touch, Window)
  // ============================================================================
  function setupEventListeners() {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });

    if (DOM.viewport) {
      DOM.viewport.addEventListener('touchstart', onTouchStart, { passive: true });
      DOM.viewport.addEventListener('touchmove', onTouchMove, { passive: true });
      DOM.viewport.addEventListener('touchend', onTouchEnd, { passive: true });
      DOM.viewport.addEventListener('touchcancel', onTouchCancel, { passive: true });
    }

    window.addEventListener('resize', () => {
      if (currentState === STATES.REVEALED) {
        applyRevealedSplit(lastRevealedLeftPct);
      } else if (currentState === STATES.SUMMARY && session.lastSummary) {
        applyRevealedSplit(session.lastSummary.summarySplitPct);
      }
    }, { passive: true });

    if (DOM.panelLeft) {
      DOM.panelLeft.addEventListener('click', (e) => {
        if (touchState.moved && Date.now() - touchState.lastEndTime < 450) return;
        if (currentState === STATES.VOTING) {
          e.preventDefault();
          handleVote('left');
        }
      });
    }

    if (DOM.panelRight) {
      DOM.panelRight.addEventListener('click', (e) => {
        if (touchState.moved && Date.now() - touchState.lastEndTime < 450) return;
        if (currentState === STATES.VOTING) {
          e.preventDefault();
          handleVote('right');
        }
      });
    }

    if (DOM.btnContinue) {
      DOM.btnContinue.addEventListener('click', (e) => {
        e.stopPropagation();
        advanceToNextWord();
      });
    }

    if (DOM.btnStartSession) {
      DOM.btnStartSession.addEventListener('click', (e) => {
        e.stopPropagation();
        startNewSession();
      });
    }

    if (DOM.btnPlayAgain) {
      DOM.btnPlayAgain.addEventListener('click', (e) => {
        e.stopPropagation();
        startNewSession();
      });
    }

    if (DOM.brandPill) {
      DOM.brandPill.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentState === STATES.SUMMARY || currentState === STATES.VOTING) {
          showIntroScreen();
        }
      });
    }

    window.addEventListener('click', () => {
      if (touchState.moved && Date.now() - touchState.lastEndTime < 450) return;
      if (currentState === STATES.REVEALED) {
        advanceToNextWord();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (currentState === STATES.INTRO) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startNewSession();
        }
      } else if (currentState === STATES.VOTING) {
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
      } else if (currentState === STATES.SUMMARY) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startNewSession();
        }
      }
    });
  }

  // ============================================================================
  // Initialization
  // ============================================================================
  function init() {
    loadState();
    setupEventListeners();
    physicsLoop();
    showIntroScreen();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
