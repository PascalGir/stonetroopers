# StoneTroopers - Planning

Page de l'équipe de curling : https://pascalgir.github.io/stonetroopers/

## Utilisation

- Chacun choisit son nom dans **Je suis**, puis touche sa pastille pour répondre : vide → Oui → Incertain → Non.
- **Pascal** (liste `EDITEURS` dans `config.js`) peut en plus ajouter / modifier / supprimer les matchs (bouton « + Match » et ✏️), saisir les scores et les compositions, et voit les statistiques.
- La page affiche le prochain match en grand, les matchs à venir, les matchs passés à compléter (pour Pascal) et les résultats en vue résumée (toucher une ligne pour le détail).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | La page |
| `config.js` | Réglages : adresse du script Google, sections affichées, éditeurs, composition habituelle |
| `Code.gs` | Script Google Apps Script relié au Google Sheet (copie de référence) |
| `data.js` | Données de secours si le Google Sheet ne répond pas |
| `StoneTroopers_Base.xlsx` | Modèle du Google Sheet d'origine |

## Réglages courants (`config.js`)

- `AFFICHER_VACANCES`, `AFFICHER_EQUIPE`, `AFFICHER_STATS` : afficher ou masquer ces blocs.
- `EDITEURS` : joueurs qui peuvent gérer matchs, scores et compositions.
- `COMPO_HABITUELLE`, `SKIP_HABITUEL`, `COMPO_SI_ABSENT` : composition proposée par défaut.

## Le Google Sheet « StoneTroopers »

Onglets **Matchs** (une colonne par joueur, puis Lanceur 1-4, Skip, Couleur notes), **Joueurs**, **Vacances**. On peut le modifier à la main en gardant les noms d'onglets et de colonnes.

Après une modification de `Code.gs` : dans Apps Script, coller le nouveau code, enregistrer, puis **Déployer → Gérer les déploiements → ✏️ → Nouvelle version → Déployer** (l'adresse ne change pas).
