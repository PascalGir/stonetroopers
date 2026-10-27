// Liste des nouveautés affichée sur la page (générée à partir de CHANGELOG.md)
window.NOUVEAUTES = [
 {
  "v": "3.6",
  "date": "27 octobre 2026",
  "titre": "",
  "items": [
   "Lien <b>« nouveautés »</b> en bas de page : la liste des nouveautés par version s'ouvre directement sur la page, sans passer par GitHub (fonctionne aussi hors connexion, dernière version ouverte en premier).",
   "Nouveau fichier <code>nouveautes.js</code> (liste tirée du fichier CHANGELOG.md)."
  ]
 },
 {
  "v": "3.5",
  "date": "27 octobre 2026",
  "titre": "",
  "items": [
   "Légende et aide : <b>Présent</b> à la place de « Oui », <b>Absent</b> à la place de « Non » (les valeurs du Google Sheet ne changent pas)."
  ]
 },
 {
  "v": "3.4",
  "date": "27 octobre 2026",
  "titre": "",
  "items": [
   "Aide « Touche ta capsule… » : les réponses vide → Oui → Incertain → Non s'affichent avec les mêmes pastilles que la légende.",
   "Bouton renommé « 📅 Exporter les matchs », aligné à droite ; sur téléphone il tient sur la même ligne que « Je suis »."
  ]
 },
 {
  "v": "3.3",
  "date": "27 octobre 2026",
  "titre": "",
  "items": [
   "<b>Mot de passe</b> pour les modifications de Pascal (matchs, scores, compositions) : demandé une fois par appareil, bouton 🔒 « Mot de passe pour modifier » si on choisit « Plus tard ».",
   "Le mot de passe est vérifié par le script Google et rangé dans ses propriétés (il n'est écrit dans aucun fichier sur GitHub).",
   "Les disponibilités restent modifiables par chacun sans mot de passe."
  ]
 },
 {
  "v": "3.2",
  "date": "27 octobre 2026",
  "titre": "",
  "items": [
   "<b>Export calendrier rétabli</b> : il avait été effacé par erreur lors de la refonte 3.0 (bouton 📅 sur chaque match et « 📅 Exporter tous les matchs »).",
   "Correction : les points-virgules dans les titres et descriptions sont maintenant bien pris en compte dans le fichier calendrier."
  ]
 },
 {
  "v": "3.1",
  "date": "27 octobre 2026",
  "titre": "",
  "items": [
   "Joueurs affichés dans des <b>capsules avec le prénom complet</b> (au lieu des initiales).",
   "Icône <b>…</b> pour « Incertain » (au lieu de « ? »), légende mise à jour.",
   "Mode sombre : icône ✕ de « Non » rendue lisible."
  ]
 },
 {
  "v": "3.0",
  "date": "27 octobre 2026",
  "titre": "Refonte graphique",
  "items": [
   "Nouvel <b>en-tête</b> : bandeau bleu marine, liseré rouge, cible de curling en décor.",
   "<b>Prochain match</b> mis en avant en haut de page, avec compte à rebours (« Demain », « Dans 2 jours »…).",
   "Réponses des joueurs en <b>pastilles de couleur</b> avec icône (✓ / ? / ✕), légende ajoutée.",
   "<b>Résultats</b> : matchs terminés en vue résumée (date, adversaire, score, V/D/N), dépliables.",
   "Bloc <b>« À compléter »</b> (Pascal) pour les matchs passés sans score ou sans composition.",
   "Bouton « À venir / Tous » retiré (les matchs passés sont toujours visibles dans « Résultats »).",
   "<b>Mode sombre</b> revu.",
   "<b>Enregistrement instantané</b> : score, composition, modification et suppression de match s'affichent tout de suite, l'envoi au Google Sheet se fait en arrière-plan.",
   "Nettoyage : Google Sheet renommé <b>StoneTroopers</b>, script <b>StoneTroopers API</b>, README à jour."
  ]
 },
 {
  "v": "2.5",
  "date": "23 octobre 2026",
  "titre": "Export calendrier",
  "items": [
   "Bouton <b>📅</b> sur chaque match : ajoute le match à son agenda (fichier .ics, compatible iPhone, Google, Outlook).",
   "Bouton <b>« 📅 Exporter tous les matchs »</b> : tous les matchs en un seul fichier.",
   "Titre de l'événement : « 🥌 StoneTroopers vs adversaire - Piste X », avec un message d'équipe dans la description.",
   "Lieu par défaut : Patinoire des Eaux-Minérales, Avenue Henry-Warnery 8, 1110 Morges (compatible Outlook).",
   "<b>Rappels</b> 1 jour et 2 h avant le match.",
   "Réglages dans <code>config.js</code> : <code>DUREE_MATCH_MIN</code>, <code>RAPPELS_MIN</code>, <code>LIEU</code>."
  ]
 },
 {
  "v": "2.4",
  "date": "22 octobre 2026",
  "titre": "",
  "items": [
   "<b>Notes de match en couleur</b> : noir ou rouge (colonne « Couleur notes » dans le Sheet).",
   "Titre de l'onglet du navigateur : « StoneTroopers - Planning »."
  ]
 },
 {
  "v": "2.3",
  "date": "22 octobre 2026",
  "titre": "",
  "items": [
   "<b>Composition d'équipe</b> sur les matchs terminés : ordre de lancer (1 à 4) et skip (©), réservée à Pascal.",
   "Composition proposée par défaut : 1 Suettania · 2 Pascal · 3 Océane · 4 Adélie (skip Suettania) ; si Suettania est absente : 1 Pascal · 2 remplaçant · 3 Océane · 4 Adélie (skip Océane).",
   "Bloc <b>Statistiques</b> (bilan V/D, matchs joués, skip, victoires par joueur), visible seulement par Pascal.",
   "<b>Saisie et modification des scores réservées à Pascal</b>.",
   "Titre de la page : « StoneTroopers - Planning »."
  ]
 },
 {
  "v": "2.2",
  "date": "22 octobre 2026",
  "titre": "",
  "items": [
   "Ajout, modification et suppression des matchs <b>réservés à Pascal</b> (liste <code>EDITEURS</code> dans <code>config.js</code>).",
   "Blocs <b>Vacances</b> et <b>Équipe</b> masqués (réactivables dans <code>config.js</code>).",
   "Ligne « En congé » retirée de la légende."
  ]
 },
 {
  "v": "2.1",
  "date": "21 octobre 2026",
  "titre": "",
  "items": [
   "Bouton <b>« + Match »</b> et crayon ✏️ pour gérer les matchs depuis la page.",
   "<b>Score</b> des matchs (Nous – Eux, Victoire / Défaite / Égalité).",
   "Déclaration des <b>vacances</b> (réponses passées automatiquement à « Non »).",
   "Ajout / retrait de <b>joueurs</b>.",
   "Tableau « Présences confirmées » retiré."
  ]
 },
 {
  "v": "2.0",
  "date": "21 octobre 2026",
  "titre": "Google Sheet",
  "items": [
   "La page est reliée à un <b>Google Sheet</b> (via un script Google Apps Script).",
   "Chaque joueur choisit son nom dans <b>« Je suis »</b> et clique sur sa case pour répondre (vide → Oui → Incertain → Non).",
   "Liste des joueurs lue dans le Sheet, actualisation automatique chaque minute."
  ]
 },
 {
  "v": "1.0",
  "date": "21 octobre 2026",
  "titre": "Première mise en ligne",
  "items": [
   "Page publiée sur GitHub Pages, en lecture seule, à partir du fichier Excel de l'équipe.",
   "Liste des matchs avec statut (Complet, Jouable, À confirmer, Incomplet, Surplus) et légende."
  ]
 }
];
