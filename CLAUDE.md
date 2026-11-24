# CLAUDE.md — CV portfolio web

## Le projet

Mon CV sous forme de **site portfolio** d'une seule page, dans un style **street / streetwear** inspiré du graffiti.
Il sert d'abord à **mettre en avant mes projets**, et reprend aussi mon parcours (expériences, formation, compétences).

- Langues : **français (par défaut) et anglais**, avec un bouton pour passer de l'une à l'autre
- Hébergement : **GitHub Pages** (gratuit)
- Formulaire de contact : **Formspree** (aucun serveur à gérer)
- Version imprimable : le CV doit **s'imprimer proprement en A4** et pouvoir s'enregistrer en PDF

## Mon niveau et comment m'aider

J'ai **quelques bases** en HTML/CSS. Je veux progresser en construisant ce site.

- Explique brièvement ce que tu fais et pourquoi, surtout pour le JavaScript, Git et le déploiement
- Commente le code là où il n'est pas évident, en français
- Avance par **petites étapes vérifiables** : après chaque étape, dis-moi comment voir le résultat (ouvrir `index.html` ou lancer l'extension Live Server de VS Code)
- Avant une action difficile à annuler (push Git, suppression de fichiers, création de dépôt), demande-moi d'abord
- Réponds-moi en français

## Stack technique

- **HTML, CSS et JavaScript purs**. Pas de framework, pas de Node.js, pas d'étape de build
- Pas de bibliothèque externe sauf si vraiment nécessaire (et demande-moi avant)
- Polices : Google Fonts autorisées (2 familles maximum)
- Le site doit fonctionner **sans JavaScript** (contenu en français visible) ; le JS ajoute la traduction, les animations légères et l'envoi du formulaire

## Structure des fichiers

```
/
├── index.html          # la page unique, contenu FR par défaut
├── css/
│   ├── style.css       # styles écran
│   └── print.css       # styles d'impression A4 (@media print)
├── js/
│   ├── i18n.js         # textes FR/EN + logique de changement de langue
│   └── main.js         # menu, animations, formulaire
├── assets/
│   ├── img/            # photo, visuels de projets (optimisés, < 300 Ko chacun)
│   └── favicon.svg
├── sources/            # mon CV d'origine (PDF/Word) — NE PAS PUBLIER
├── .gitignore          # doit contenir sources/
├── CLAUDE.md
└── README.md
```

## Direction artistique : street / streetwear

L'idée : mon CV se présente comme **la sortie d'une collection streetwear** — je suis la marque, mes projets sont les « drops ». Style moderne, jeune, inspiré du graffiti.

- **Hero (l'affiche)** : mon nom en tag géant, sticker « DROP 01 — 2026 », sous-titre « CV Ingénieur Informatique » (provisoire), boutons FR/EN et PDF. Pas de photo pour l'instant
- **Navigation** : barre de stickers numérotés (01, 02, 03…)
- **01 — Les Drops (projets)** : cartes façon étiquette de vêtement (visuel, outils, résultat, liens démo/code)
- **02 — Le Parcours** : timeline sur bande de scotch ; le stage pâtisserie à Dublin en sticker « Side quest »
- **03 — Formation**
- **04 — Skills** : mur de stickers (langages, outils, domaines, langues, permis)
- **05 — Off the clock** : sport et voyages
- **06 — Hit me up (contact)** : formulaire, ville, liens LinkedIn/GitHub

Règles de style :
- Polices : **Rubik Spray Paint** (grands titres uniquement) + **Space Grotesk** (texte, interface)
- Néo-brutalisme : contours noirs épais, ombres pleines décalées, blocs de couleur francs
- Effets graffiti : soulignés au marqueur, coulures SVG, stickers légèrement inclinés, scotch, grain léger en CSS
- Palette en **60 / 30 / 10** : gris clair `#E5E7EB` (fond, + `#D9DCE2` alterné, `#F3F4F6` cartes), **bleu marine** `#1F2A44` (texte, contours 2 px, nav, section Skills, footer), **cuivre** `#B87333` (blobs, ombres, grands numéros, timeline, ruban, marqueur) + cuivre pâle `#EAD8C6` (fonds doux, étiquettes, boutons secondaires)
- Contraste : jamais de petit texte sur le cuivre plein (3:1 seulement) ; petit texte cuivre = `#8A5222` sur clair, `#D9A273` sur marine
- Les variables CSS portent des noms de rôle (`--bg`, `--ink`, `--accent`…) : changer de palette = modifier le bloc `:root`
- Contraste : texte noir sur orange ou vert, jamais l'inverse ; texte orange sur blanc seulement en `#C2410C`
- Animations douces, pensées pour le bien-être : intro du nom lettre par lettre, blobs qui respirent avec parallaxe, apparition au défilement, barre de progression, timeline qui se remplit, soulignés qui se tracent, cartes inclinables et boutons magnétiques (souris uniquement), badge rotatif et ruban défilant (pause au survol)
- Bouton **« Pause »** des animations dans la nav (mémorisé) ; tout est coupé si `prefers-reduced-motion` ; contenu visible sans JS
- **Responsive** : les grilles se replient en une seule colonne sur mobile
- Version imprimée sobre (Space Grotesk, pas d'effets graffiti)

## Règles techniques

### Bilingue FR / EN
- Le texte français est écrit directement dans le HTML
- Chaque élément traduisible porte un attribut `data-i18n="cle.du.texte"`
- `js/i18n.js` contient un objet `{ fr: {...}, en: {...} }` avec les mêmes clés
- Le choix de langue est mémorisé (`localStorage`, dans un `try/catch`) et met à jour `<html lang="...">`
- Toute nouvelle phrase ajoutée au site doit être ajoutée **dans les deux langues**

### Formulaire de contact
- Formspree : `<form action="https://formspree.io/f/XXXXXXX" method="POST">`, l'identifiant `XXXXXXX` est à remplacer par le mien
- Envoi en JavaScript (`fetch`) avec message de confirmation ou d'erreur, sans quitter la page
- Champs : nom, e-mail, message ; validation HTML (`required`, `type="email"`) ; champ anti-spam caché `_gotcha`

### Impression / PDF
- Un bouton « Télécharger le CV (PDF) » appelle `window.print()`
- `print.css` : format A4, marges propres, fond blanc, masque navigation, formulaire, boutons et animations
- La version imprimée tient idéalement sur **2 pages maximum** et reste lisible (texte ≥ 10 pt)
- Les liens imprimés affichent leur URL

### Qualité
- HTML sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Accessibilité : textes alternatifs sur les images, contraste suffisant, navigation au clavier, focus visible
- Balises `<meta>` description et Open Graph (titre, description, image de partage)
- Pas de console d'erreur dans le navigateur

## Données personnelles

- Le dossier `sources/` (mon CV d'origine) **ne doit jamais être commité** ni publié
- Sur le site public : **pas d'adresse postale ni de numéro de téléphone** ; ville + formulaire de contact + liens (LinkedIn, GitHub) suffisent
- En cas de doute sur une info personnelle à publier, demande-moi

## Déploiement (GitHub Pages)

1. Initialiser Git, vérifier que `.gitignore` exclut `sources/`
2. Créer un dépôt GitHub (par exemple `<mon-pseudo>.github.io` pour une adresse courte)
3. Pousser la branche `main`, activer Pages dans *Settings → Pages*
4. Vérifier le site en ligne, le formulaire et l'impression

Explique-moi chaque commande Git la première fois qu'on l'utilise.
