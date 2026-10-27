# Historique des versions — StoneTroopers - Planning

Site : https://pascalgir.github.io/stonetroopers/
Version actuelle : **3.1** (27 octobre 2026)

Numérotation : le premier chiffre change lors d'une refonte importante, le second pour chaque série d'améliorations.

---

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
