# Historique des versions — StoneTroopers - Planning

Site : https://pascalgir.github.io/stonetroopers/
Version actuelle : **3.14** (28 octobre 2026)

Numérotation : le premier chiffre change lors d'une refonte importante, le second pour chaque série d'améliorations.

---

## 3.14 — 28 octobre 2026
- Journal des présences en **texte simple, regroupé par match** (le match en titre, puis « date · joueur : avant → après »).

## 3.13 — 28 octobre 2026 · Journal des présences
- **Journal des présences** : chaque changement de réponse est enregistré (date et heure, joueur, match, avant → après) dans un nouvel onglet **Journal** du Google Sheet.
- Bloc « Journal des présences » en bas de la page, visible **seulement par Pascal avec le mot de passe** ; le script refuse de le transmettre sans le mot de passe. Les 500 dernières modifications, les plus récentes en premier.
- Une réponse identique à la précédente n'est pas enregistrée en double.

## 3.12 — 28 octobre 2026
- Compteur des présences : « potentiel » ne compte plus que les joueurs **Incertain** (les confirmés ne sont plus comptés dedans) et n'apparaît que s'il y en a. Exemple : « 2 confirmés · 1 potentiel ».

## 3.11 — 28 octobre 2026 · Affichage plus rapide
- **Affichage immédiat** : la page montre tout de suite les dernières données reçues sur l'appareil, puis se met à jour en arrière-plan (« Mise à jour… » puis « À jour · heure »). Les cartes grisées ne s'affichent plus qu'à la première visite.
- Le script Google **garde les données en mémoire** (1 h au plus) au lieu de relire le Sheet à chaque visite ; la mémoire est vidée à chaque enregistrement depuis la page et à chaque modification à la main dans le Sheet.

## 3.10 — 28 octobre 2026
- Couleurs **pastel** pour les capsules (Présent, Incertain, Absent) : fond clair teinté, texte coloré, rond de l'icône en couleur vive.
- Badges « Demain » et « À toi de répondre » dans le même style, plus doux.

## 3.9 — 28 octobre 2026 · Bannière Glace
- Nouvelle **bannière « Glace »** : fond bleu glace strié, ligne rouge et cible de curling (version bleu nuit en mode sombre).
- Badge **« À toi de répondre »** sur les matchs où la personne choisie n'a pas encore répondu.
- **Jauge de réponses** sur chaque match à venir (ex. 3/5 ont répondu).
- **Séparateurs par mois** dans « À venir ».
- **Forme de l'équipe** : 5 derniers résultats en pastilles V / D / N au-dessus des Résultats.
- Petit **rebond** de la capsule quand on change sa réponse (désactivé si le téléphone réduit les animations).
- **Icône** pour l'écran d'accueil du téléphone (`icon-180.png`) et barre du navigateur aux couleurs de la bannière.
- Barre **« Je suis »** qui reste en haut de l'écran quand on fait défiler.
- **Cartes grisées** pendant le chargement au lieu d'anciennes données.
- Chaque amélioration peut être désactivée dans `index.html` (`const GRAPH`).

## 3.8 — 27 octobre 2026
- Réponse **Absent** affichée en **rouge** (vert / jaune / rouge), bien distincte de « Pas de réponse ».
- Libellé **« Pas de réponse »** utilisé partout (aide en haut et légende en bas, au lieu de « vide »).

## 3.7 — 27 octobre 2026
- Liste des nouveautés affichée sur le site rendue **générique** : plus de détails de sécurité ni de noms de personnes (ce fichier garde l'historique détaillé).

## 3.6 — 27 octobre 2026
- Lien **« nouveautés »** en bas de page : la liste des nouveautés par version s'ouvre directement sur la page, sans passer par GitHub (fonctionne aussi hors connexion, dernière version ouverte en premier).
- Nouveau fichier `nouveautes.js` (liste tirée du fichier CHANGELOG.md).

## 3.5 — 27 octobre 2026
- Légende et aide : **Présent** à la place de « Oui », **Absent** à la place de « Non » (les valeurs du Google Sheet ne changent pas).

## 3.4 — 27 octobre 2026
- Aide « Touche ta capsule… » : les réponses vide → Oui → Incertain → Non s'affichent avec les mêmes pastilles que la légende.
- Bouton renommé « 📅 Exporter les matchs », aligné à droite ; sur téléphone il tient sur la même ligne que « Je suis ».

## 3.3 — 27 octobre 2026
- **Mot de passe** pour les modifications de Pascal (matchs, scores, compositions) : demandé une fois par appareil, bouton 🔒 « Mot de passe pour modifier » si on choisit « Plus tard ».
- Le mot de passe est vérifié par le script Google et rangé dans ses propriétés (il n'est écrit dans aucun fichier sur GitHub).
- Les disponibilités restent modifiables par chacun sans mot de passe.

## 3.2 — 27 octobre 2026
- **Export calendrier rétabli** : il avait été effacé par erreur lors de la refonte 3.0 (bouton 📅 sur chaque match et « 📅 Exporter tous les matchs »).
- Correction : les points-virgules dans les titres et descriptions sont maintenant bien pris en compte dans le fichier calendrier.

## 3.1 — 27 octobre 2026
- Joueurs affichés dans des **capsules avec le prénom complet** (au lieu des initiales).
- Icône **…** pour « Incertain » (au lieu de « ? »), légende mise à jour.
- Mode sombre : icône ✕ de « Non » rendue lisible.

## 3.0 — 27 octobre 2026 · Refonte graphique
- Nouvel **en-tête** : bandeau bleu marine, liseré rouge, cible de curling en décor.
- **Prochain match** mis en avant en haut de page, avec compte à rebours (« Demain », « Dans 2 jours »…).
- Réponses des joueurs en **pastilles de couleur** avec icône (✓ / ? / ✕), légende ajoutée.
- **Résultats** : matchs terminés en vue résumée (date, adversaire, score, V/D/N), dépliables.
- Bloc **« À compléter »** (Pascal) pour les matchs passés sans score ou sans composition.
- Bouton « À venir / Tous » retiré (les matchs passés sont toujours visibles dans « Résultats »).
- **Mode sombre** revu.
- **Enregistrement instantané** : score, composition, modification et suppression de match s'affichent tout de suite, l'envoi au Google Sheet se fait en arrière-plan.
- Nettoyage : Google Sheet renommé **StoneTroopers**, script **StoneTroopers API**, README à jour.

## 2.5 — 23 octobre 2026 · Export calendrier
- Bouton **📅** sur chaque match : ajoute le match à son agenda (fichier .ics, compatible iPhone, Google, Outlook).
- Bouton **« 📅 Exporter tous les matchs »** : tous les matchs en un seul fichier.
- Titre de l'événement : « 🥌 StoneTroopers vs adversaire - Piste X », avec un message d'équipe dans la description.
- Lieu par défaut : Patinoire des Eaux-Minérales, Avenue Henry-Warnery 8, 1110 Morges (compatible Outlook).
- **Rappels** 1 jour et 2 h avant le match.
- Réglages dans `config.js` : `DUREE_MATCH_MIN`, `RAPPELS_MIN`, `LIEU`.

## 2.4 — 22 octobre 2026
- **Notes de match en couleur** : noir ou rouge (colonne « Couleur notes » dans le Sheet).
- Titre de l'onglet du navigateur : « StoneTroopers - Planning ».

## 2.3 — 22 octobre 2026
- **Composition d'équipe** sur les matchs terminés : ordre de lancer (1 à 4) et skip (©), réservée à Pascal.
- Composition proposée par défaut : 1 Suettania · 2 Pascal · 3 Océane · 4 Adélie (skip Suettania) ; si Suettania est absente : 1 Pascal · 2 remplaçant · 3 Océane · 4 Adélie (skip Océane).
- Bloc **Statistiques** (bilan V/D, matchs joués, skip, victoires par joueur), visible seulement par Pascal.
- **Saisie et modification des scores réservées à Pascal**.
- Titre de la page : « StoneTroopers - Planning ».

## 2.2 — 22 octobre 2026
- Ajout, modification et suppression des matchs **réservés à Pascal** (liste `EDITEURS` dans `config.js`).
- Blocs **Vacances** et **Équipe** masqués (réactivables dans `config.js`).
- Ligne « En congé » retirée de la légende.

## 2.1 — 21 octobre 2026
- Bouton **« + Match »** et crayon ✏️ pour gérer les matchs depuis la page.
- **Score** des matchs (Nous – Eux, Victoire / Défaite / Égalité).
- Déclaration des **vacances** (réponses passées automatiquement à « Non »).
- Ajout / retrait de **joueurs**.
- Tableau « Présences confirmées » retiré.

## 2.0 — 21 octobre 2026 · Google Sheet
- La page est reliée à un **Google Sheet** (via un script Google Apps Script).
- Chaque joueur choisit son nom dans **« Je suis »** et clique sur sa case pour répondre (vide → Oui → Incertain → Non).
- Liste des joueurs lue dans le Sheet, actualisation automatique chaque minute.

## 1.0 — 21 octobre 2026 · Première mise en ligne
- Page publiée sur GitHub Pages, en lecture seule, à partir du fichier Excel de l'équipe.
- Liste des matchs avec statut (Complet, Jouable, À confirmer, Incomplet, Surplus) et légende.
