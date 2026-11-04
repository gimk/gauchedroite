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
      }
  };
  // __SEED_VOTES_END__

  const WORD_LIST = Object.keys(EMBEDDED_SEED_VOTES);

  // ============================================================================
  // LocalStorage Persistence Keys
  // ============================================================================
  const STORAGE_KEY_STATS = 'gd_game_stats_v1';
  const STORAGE_KEY_DELTAS = 'gd_vote_deltas_v1';

  // ============================================================================
  // Game States
  // ============================================================================
  const STATES = {
    VOTING: 'VOTING',
    REVEALING: 'REVEALING',
    REVEALED: 'REVEALED'
  };

  let currentState = STATES.VOTING;
  let voteDeltas = {};
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
    panelLeft: document.getElementById('panel-left'),
    panelRight: document.getElementById('panel-right'),
    mainWord: document.getElementById('main-word'),
    metaIndex: document.getElementById('meta-index'),
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
    statStreak: document.getElementById('stat-streak'),
    statBest: document.getElementById('stat-best'),
    statMajority: document.getElementById('stat-majority'),
    statWins: document.getElementById('stat-wins')
  };

  // ============================================================================
  // Magnetic Hover Physics (Spring Lerp Loop)
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

  function onMouseMove(e) {
    if (currentState !== STATES.VOTING) return;

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
          seenWords: Array.isArray(parsed.seenWords) ? parsed.seenWords : []
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
    DOM.statStreak.textContent = stats.streak;
    DOM.statBest.textContent = stats.bestStreak;
    DOM.statWins.textContent = `${stats.totalWins}/${stats.totalPlayed}`;
    DOM.statMajority.textContent = stats.totalPlayed > 0
      ? `${Math.round((stats.totalWins / stats.totalPlayed) * 100)}%`
      : '0%';
  }

  // ============================================================================
  // Word Selection & Randomization
  // ============================================================================
  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getAvailableWords() {
    const unseen = WORD_LIST.filter(w => !stats.seenWords.includes(w));
    if (unseen.length === 0) {
      stats.seenWords = [];
      saveStats();
      return WORD_LIST;
    }
    return unseen;
  }

  function prepareNextWord() {
    const shuffled = shuffle(getAvailableWords());
    currentWord = shuffled[0] || "Quinoa";
    wordIndex = stats.totalPlayed + 1;
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

  /**
   * Computes vote results locally from EMBEDDED_SEED_VOTES + user vote deltas
   * when opened directly via file:// or when the Worker API is offline.
   */
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

  function processVerdictAndReveal(data) {
    const leftPct = data.leftPercent;
    const rightPct = data.rightPercent;
    const isWinner = Boolean(data.won);

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
    const minClamp = window.innerWidth < 640 ? 24 : 18;
    const clampedSplit = Math.max(minClamp, Math.min(100 - minClamp, leftPct));
    document.documentElement.style.setProperty('--split-pos', `${clampedSplit}%`);

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
      prepareNextWord();

      DOM.mainWord.classList.remove('word-exit-up');
      DOM.mainWord.classList.add('word-enter-down');

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
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });

    DOM.panelLeft.addEventListener('click', (e) => {
      if (currentState === STATES.VOTING) {
        e.preventDefault();
        handleVote('left');
      }
    });

    DOM.panelRight.addEventListener('click', (e) => {
      if (currentState === STATES.VOTING) {
        e.preventDefault();
        handleVote('right');
      }
    });

    DOM.btnContinue.addEventListener('click', (e) => {
      e.stopPropagation();
      advanceToNextWord();
    });

    window.addEventListener('click', () => {
      if (currentState === STATES.REVEALED) {
        advanceToNextWord();
      }
    });

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
    loadState();
    setupEventListeners();
    physicsLoop();
    prepareNextWord();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
