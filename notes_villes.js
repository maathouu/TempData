// ============================================================================
// NOTES ÉCRITES À LA MAIN (ce fichier est le seul à modifier pour ajouter du texte sur le site)
//
//   1. NOTES_VILLES    : une fiche par ville, affichée au-dessus de la liste des logements.
//                        Clé = nom du fichier data/villes/<clé>.js (ex. "malia-grece").
//   2. NOTES_LOGEMENTS : des indications par logement (cartes, fiche, tableau de comparaison).
//                        Clé = identifiant du logement, visible sur sa fiche ("Identifiant : ...").
// ============================================================================

window.NOTES_VILLES = {

  "sunny-beach-bulgarie": {
    resume: "Grosse station festive de la mer Noire, la plus abordable de la liste, pensée pour les groupes de jeunes.",
    scores: {"Fête": 4, "Journée": 3, "Budget": 5},
    infos: [
      ["Bars", "Très nombreux, surtout autour de Flower Street"],
      ["Clubs", "Grands clubs, discothèques en plein air, soirées DJ"],
      ["Événements", "Pool parties, beach parties, boat parties"],
      ["Journée", "Grande plage, jet-ski, parcs aquatiques, excursions"],
    ],
    plus: [
      "Meilleur rapport fête / prix",
      "Énormément de bars et de clubs",
      "Public jeune et international",
      "Bien adaptée à un groupe de 10",
    ],
    moins: [
      "Zones très touristiques et commerciales",
      "Qualité des établissements inégale",
      "Répétitive si on reste dans la rue principale",
      "Aéroport de Bourgas à environ 35 km",
    ],
    avis: "La meilleure option pour multiplier les soirées en gardant le budget sous contrôle, surtout avec un groupe nombreux.",
  },

  "alanya-turquie": {
    resume: "Grande station polyvalente : plage, activités et sorties, mais moins intense côté fête.",
    scores: {"Fête": 3, "Journée": 5, "Budget": 4},
    infos: [
      ["Bars", "Centre-ville et autour du port"],
      ["Clubs", "Plusieurs clubs, soirées jusqu'au petit matin"],
      ["Événements", "Boat parties, beach parties, pool parties"],
      ["Journée", "Plages, bateau, jet-ski, excursions, sorties en groupe"],
    ],
    plus: [
      "Beaucoup d'activités en journée",
      "Vie nocturne variée",
      "Coût de la vie intéressant",
      "Adaptée aux groupes",
    ],
    moins: [
      "Fête moins concentrée : il faut se déplacer",
      "Public mixte, souvent familial selon le quartier",
      "Aéroport d'Antalya à environ 2 h de route",
    ],
    avis: "Un bon compromis entre vacances, activités et soirées, mais pas la destination la plus intense pour sortir tous les soirs.",
  },

  "ayia-napa-chypre": {
    resume: "La référence festive de la liste : très jeune, beach clubs et grosses soirées, le tout accessible à pied.",
    scores: {"Fête": 5, "Journée": 4, "Budget": 2},
    infos: [
      ["Bars", "Très nombreux dans le centre, rues animées"],
      ["Clubs", "DJ, house, électro, musique commerciale, soirées à thème"],
      ["Événements", "Pool parties, boat parties, beach parties"],
      ["Journée", "Nissi Beach, beach clubs, bateau, sports nautiques"],
    ],
    plus: [
      "Vie nocturne très concentrée, tout se fait à pied",
      "Vraie culture des vacances festives",
      "Plages magnifiques",
      "Facile de rencontrer d'autres groupes",
    ],
    moins: [
      "Prix qui montent en haute saison",
      "Très fréquentée en juillet et août",
      "Certains établissements très commerciaux",
    ],
    avis: "Probablement la meilleure option si la fête est la priorité n°1 : on sort tous les soirs sans organiser de déplacements.",
  },

  "laganas-grece": {
    resume: "Petite station de l'île de Zante, très jeune et très festive, centrée sur une grande rue de bars et de clubs.",
    scores: {"Fête": 4, "Journée": 3, "Budget": 4},
    infos: [
      ["Bars", "Une grande rue remplie de bars et de pubs"],
      ["Clubs", "Musique commerciale, soirées DJ, événements"],
      ["Événements", "Boat parties, pub crawls, pool parties"],
      ["Journée", "Plage, excursions en bateau, quad, sports nautiques"],
    ],
    plus: [
      "Vie nocturne très concentrée",
      "Beaucoup de jeunes, contacts faciles",
      "Ambiance décontractée et déjantée",
      "Budget généralement maîtrisé",
    ],
    moins: [
      "Ville petite, peu d'activités culturelles",
      "La rue festive devient répétitive après plusieurs soirées",
      "Public très orienté fête britannique",
    ],
    avis: "Un excellent choix pour 10 jeunes qui veulent faire la fête et rencontrer du monde, sans rechercher le luxe.",
  },

  "malia-grece": {
    resume: "Station crétoise ultra-festive, centrée sur le « Strip » : bars, clubs et public très jeune, le tout à pied.",
    scores: {"Fête": 5, "Journée": 3, "Budget": 4},
    infos: [
      ["Bars", "Concentrés sur le Strip, la grande rue animée de la ville"],
      ["Clubs", "Plusieurs grands clubs, dont des open-air, soirées DJ jusqu'au petit matin"],
      ["Événements", "Pub crawls, boat parties, pool parties, beach parties"],
      ["Journée", "Plages de la côte nord, parcs aquatiques à Hersonissos, bateau, excursions (Knossos, Spinalonga)"],
    ],
    plus: [
      "Vie nocturne très concentrée, tout se fait à pied",
      "Public jeune et international, contacts faciles",
      "Budget de sortie raisonnable pour une grande station festive",
      "Aéroport d'Héraklion à environ 35 km",
    ],
    moins: [
      "Strip bruyant et agité tard dans la nuit, à éviter si on loge trop près",
      "Ville peu attirante de jour, tout tourne autour de la nuit",
      "Plage de la ville correcte sans plus : les plus belles sont à quelques km",
      "Excursions sur l'île : prévoir voiture ou transferts",
    ],
    avis: "Le grand rival d'Ayia Napa côté fête, avec un budget plus doux : idéal pour sortir tous les soirs, moins pour remplir les journées.",
  },

  "lagos-portugal": {
    resume: "Station de l'Algarve plus équilibrée : falaises et plages superbes le jour, sorties dans le centre historique le soir.",
    scores: {"Fête": 3, "Journée": 5, "Budget": 3},
    infos: [
      ["Bars", "Centre historique, autour de la Rua 25 de Abril"],
      ["Clubs", "Quelques clubs et bars dansants, ambiance plus pub que grosse discothèque"],
      ["Événements", "Pub crawls, boat parties, soirées en bord de plage en été"],
      ["Journée", "Plages sous les falaises, Ponta da Piedade, bateau et kayak, surf à proximité"],
    ],
    plus: [
      "Plages et falaises parmi les plus belles de la liste",
      "Beaucoup d'activités nautiques et d'excursions en bateau",
      "Centre historique agréable, bars et restaurants à pied",
      "Ambiance plus détendue, simple à gérer avec un grand groupe",
    ],
    moins: [
      "Vie nocturne moins intense que dans les stations festives",
      "Sorties et restaurants plus chers qu'en Bulgarie, Turquie ou Grèce",
      "Océan Atlantique : eau plus fraîche que la Méditerranée",
      "Aéroport de Faro à environ 1 h de route",
    ],
    avis: "Le choix le plus équilibré si le groupe veut autant de plages et d'activités que de soirées, mais pas la destination pour enchaîner les nuits blanches.",
  },

};

// ============================================================================
// INDICATIONS PAR LOGEMENT
//
// Clé = identifiant du logement (affiché sur sa fiche, à côté de « Données relevées le »).
// TOUJOURS entre guillemets : ces nombres sont trop grands pour JavaScript sans guillemets.
//
// Chaque valeur peut être :
//   - un texte                       -> "Attention : ..."              (encadré orange)
//   - plusieurs textes               -> ["Texte 1", "Texte 2"]
//   - un type précis                 -> {type: "info", texte: "..."}
//       type : "attention" (orange, par défaut) · "info" (bleu) · "ok" (vert)
//   - un mélange dans une liste      -> ["Texte simple", {type: "ok", texte: "..."}]
//
// Les indications apparaissent sur la carte du logement, sur sa fiche et dans le tableau de comparaison.
// Pour retirer une indication, supprime sa ligne (ou mets // devant).
// ============================================================================
window.NOTES_LOGEMENTS = {

  // "ID_DU_LOGEMENT": "Attention : la 10e personne dormira dans le salon, pas assez de place.",

  // "ID_DU_LOGEMENT": [
  //   "Attention : seulement 8 vrais lits pour 10 voyageurs.",
  //   {type: "info", texte: "Piscine partagée avec les autres logements de la résidence."},
  //   {type: "ok", texte: "Annulation gratuite jusqu'à 30 jours avant."},
  // ],

};