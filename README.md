# StoneTroopers - Planning

Page de l'équipe de curling : https://pascalgir.github.io/stonetroopers/

## Utilisation

- Chacun choisit son nom dans **Je suis**, puis touche sa pastille pour répondre : vide → Oui → Incertain → Non.
- **L'administrateur** (liste `EDITEURS` dans `config.js`) peut en plus ajouter / modifier / supprimer les matchs (bouton « + Match » et ✏️), saisir les scores et les compositions, et voit les statistiques. Ces modifications demandent un **mot de passe**, saisi une fois par appareil (bouton 🔒 sinon).
- La page affiche le prochain match en grand, les matchs à venir, les matchs passés à compléter (pour l'administrateur) et les résultats en vue résumée (toucher une ligne pour le détail).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | La page |
| `config.js` | Réglages : adresse du script Google, sections affichées, éditeurs, composition habituelle |
| `Code.gs` | Script Google Apps Script relié au Google Sheet (copie de référence) |
| `data.js` | Données de secours si le Google Sheet ne répond pas |
| `StoneTroopers_Base.xlsx` | Modèle du Google Sheet d'origine |
| `CHANGELOG.md` | Historique des versions (version actuelle affichée en bas de la page) |
| `icon-180.png` | Icône du site sur l'écran d'accueil du téléphone |
| `nouveautes.js` | Liste des nouveautés affichée par le lien « nouveautés » : version publique et générique de `CHANGELOG.md` (sans détails de sécurité ni noms de personnes), à compléter à chaque version |

## Réglages courants (`config.js`)

- `AFFICHER_VACANCES`, `AFFICHER_EQUIPE`, `AFFICHER_STATS` : afficher ou masquer ces blocs.
- `EDITEURS` : joueurs qui peuvent gérer matchs, scores et compositions.
- `COMPO_HABITUELLE`, `SKIP_HABITUEL`, `COMPO_SI_ABSENT` : composition proposée par défaut.
- `DUREE_MATCH_MIN`, `RAPPELS_MIN`, `LIEU` : export calendrier (durée, rappels, adresse de la patinoire).

## Le Google Sheet « StoneTroopers »

Onglets **Matchs** (une colonne par joueur, puis Lanceur 1-4, Skip, Couleur notes), **Joueurs**, **Vacances**, et **Journal** (créé automatiquement : chaque changement de présence avec date, joueur, match, avant et après ; lisible sur la page seulement avec le mot de passe). On peut le modifier à la main en gardant les noms d'onglets et de colonnes.

Le mot de passe de l'administrateur est rangé dans Apps Script : **Paramètres du projet → Propriétés du script → `CODE_CAPITAINE`** (jamais dans un fichier public). Pour le changer, modifier cette valeur puis enregistrer (pas besoin de redéployer). Supprimer la propriété retire le mot de passe.

Le script garde les données en mémoire jusqu'à 1 h pour répondre plus vite ; cette mémoire est vidée à chaque enregistrement depuis la page et à chaque modification à la main dans le Sheet. La page, elle, affiche d'abord les dernières données reçues sur l'appareil puis se met à jour.

Après une modification de `Code.gs` : dans Apps Script, coller le nouveau code, enregistrer, puis **Déployer → Gérer les déploiements → ✏️ → Nouvelle version → Déployer** (l'adresse ne change pas).
