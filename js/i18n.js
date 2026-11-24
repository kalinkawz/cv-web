/* =========================================================
   Traduction FR / EN
   - Le français est écrit dans le HTML (fonctionne sans JS)
   - Chaque élément traduisible porte data-i18n="cle"
   - Ce fichier remplace les textes et mémorise le choix
   ========================================================= */

const TRANSLATIONS = {
  fr: {
    "meta.title": "Nicolas Delimauges — CV Ingénieur Informatique",
    "meta.description": "CV et portfolio de Nicolas Delimauges, élève ingénieur en réseaux informatiques et objets connectés à Amiens.",
    "skip": "Aller au contenu",
    "lang.button": "EN",
    "lang.label": "Switch to English",
    "lang.target": "en",

    "hero.cv": "CV",
    "hero.role": "Ingénieur Informatique",
    "hero.tag.network": "Réseaux & IoT",
    "hero.tag.data": "Data & RGPD",
    "hero.cta.path": "Voir le parcours",
    "hero.cta.contact": "Me contacter",
    "hero.cta.pdf": "Télécharger le CV (PDF)",

    "nav.label": "Sections du CV",
    "nav.path": "Parcours",
    "nav.education": "Formation",

    "drops.title": "Les Drops",
    "drops.intro": "Mes projets, sortis un par un. D'autres drops arrivent bientôt.",
    "drops.tools": "Outils",
    "drops.game.stamp": "Proto",
    "drops.game.desc": "Point & click narratif en huis clos, programmé avec l'aide de l'IA.",
    "drops.web.stamp": "2 sites",
    "drops.web.title": "Sites de tournée",
    "drops.web.desc": "Sites de présentation de tournées d'artistes, réalisés avec l'aide de l'IA.",
    "drops.web.r1": "Deux sites : The Weeknd et PLK",
    "drops.web.r2": "Développement assisté par IA (Claude Code, Copilot)",
    "drops.web.r3": "Mise en ligne prévue prochainement",
    "drops.game.r1": "Prototype jouable en cours de développement",
    "drops.game.r2": "Prise en main de Godot et du GDScript",
    "drops.game.r3": "Pilotage de Claude Code (CLAUDE.md, prompts)",
    "drops.game.r4": "Workflow Git : commit, push, pull, branches",
    "drops.soon": "Bientôt dispo",
    "drops.wip": "Projet en cours de préparation.",

    "path.title": "Le Parcours",
    "path.dpo.date": "Nov. 2024 — Aujourd'hui",
    "path.dpo.title": "Apprenti Data Protection Officer",
    "path.dpo.task1": "Lecture et analyse des réglementations (RGPD, IA Act, notes de service internes)",
    "path.dpo.task2": "Gestion du registre des traitements",
    "path.dpo.task3": "Réponses aux demandes d'exercice des droits RGPD",
    "path.dpo.task4": "Analyse des risques métiers orientée RGPD",
    "path.pastry.date": "Oct. 2026 · 1 mois",
    "path.pastry.title": "Stage en pâtisserie",
    "path.pastry.place": "KC Peaches, Pearse St · Dublin, Irlande",
    "path.pastry.task1": "Immersion en cuisine professionnelle, 100 % en anglais",
    "path.pastry.task2": "Rigueur, rythme et travail d'équipe en conditions réelles",
    "path.tech.date": "Janv. 2023 — Août 2024",
    "path.tech.title": "Technicien informatique en alternance",
    "path.tech.place": "Ministère de l'Intérieur, Police aux Frontières · Paris",
    "path.tech.task1": "Assistance utilisateur",
    "path.tech.task2": "Dépannage réseau et logiciel, maintenance informatique",
    "path.tech.task3": "Mise en place de solutions (serveur d'impression, équipements de contrôle frontaliers)",
    "path.tech.task4": "Missions à l'étranger (Londres)",

    "edu.title": "Formation",
    "edu.eng.title": "Cycle ingénieur Réseaux Informatiques et Objets Connectés",
    "edu.ef.date": "Août 2026 · 1 mois",
    "edu.ef.title": "Séjour linguistique en espagnol",
    "edu.ef.place": "EF Barcelona · Espagne",
    "edu.bts.title": "BTS Systèmes Numériques, Informatique et Réseaux",
    "edu.bac.title": "Baccalauréat technologique STI2D",

    "skills.net.title": "Réseau & data",
    "skills.net.network": "Gestion réseaux",
    "skills.net.maintenance": "Maintenance & dépannage",
    "skills.net.gdpr": "RGPD",
    "skills.net.aiact": "IA Act",
    "skills.tools.title": "Outils",
    "skills.tools.office": "Suite Office",
    "skills.lang.title": "Langues",
    "skills.lang.fr": "Français · natif",
    "skills.lang.en": "Anglais · B2 (TOEIC 915)",
    "skills.lang.es": "Espagnol · A2+",
    "skills.mind.project": "Gestion de projet",
    "skills.mind.team": "Travail d'équipe",
    "skills.mind.autonomy": "Autonomie",
    "skills.mind.licence": "Permis B · véhiculé",

    "off.sport.title": "Sport",
    "off.sport.text": "Boxe, renforcement physique, course.",
    "off.travel.title": "Voyages",
    "off.travel.text": "Angleterre, Espagne, Irlande, Belgique, Pays-Bas.",

    "band.skills": "RÉSEAUX ★ IOT ★ DATA ★ RGPD ★ CODE ★ RÉSEAUX ★ IOT ★ DATA ★ RGPD ★ CODE ★ ",
    "motion.label": "Mettre les animations en pause",
    "drops.stamp": "Bientôt",

    "contact.intro": "Un stage, une alternance, un projet ? Laisse-moi un message.",
    "contact.form.name": "Nom",
    "contact.form.email": "E-mail",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer",
    "contact.form.sending": "Envoi en cours…",
    "contact.form.success": "Merci ! Ton message est bien parti, je te réponds vite.",
    "contact.form.error": "Oups, l'envoi a échoué. Réessaie dans un instant.",

    "footer.text": "© 2026 Nicolas Delimauges — fait main en HTML, CSS & JS."
  },

  en: {
    "meta.title": "Nicolas Delimauges — Computer Engineering CV",
    "meta.description": "CV and portfolio of Nicolas Delimauges, engineering student in computer networks and connected objects (IoT), based in Amiens, France.",
    "skip": "Skip to content",
    "lang.button": "FR",
    "lang.label": "Passer en français",
    "lang.target": "fr",

    "hero.cv": "CV",
    "hero.role": "Computer Engineer",
    "hero.tag.network": "Networks & IoT",
    "hero.tag.data": "Data & GDPR",
    "hero.cta.path": "See my journey",
    "hero.cta.contact": "Contact me",
    "hero.cta.pdf": "Download CV (PDF)",

    "nav.label": "CV sections",
    "nav.path": "Journey",
    "nav.education": "Education",

    "drops.title": "The Drops",
    "drops.intro": "My projects, released one by one. More drops coming soon.",
    "drops.tools": "Tools",
    "drops.game.stamp": "Proto",
    "drops.game.desc": "A single-location narrative point & click, built with the help of AI.",
    "drops.web.stamp": "2 sites",
    "drops.web.title": "Tour websites",
    "drops.web.desc": "Websites showcasing artists' tours, built with the help of AI.",
    "drops.web.r1": "Two sites: The Weeknd and PLK",
    "drops.web.r2": "AI-assisted development (Claude Code, Copilot)",
    "drops.web.r3": "Going live soon",
    "drops.game.r1": "Playable prototype in development",
    "drops.game.r2": "Learning Godot and GDScript",
    "drops.game.r3": "Driving Claude Code (CLAUDE.md, prompts)",
    "drops.game.r4": "Git workflow: commit, push, pull, branches",
    "drops.soon": "Coming soon",
    "drops.wip": "Project in the works.",

    "path.title": "The Journey",
    "path.dpo.date": "Nov 2024 — Present",
    "path.dpo.title": "Apprentice Data Protection Officer",
    "path.dpo.task1": "Reading and analysing regulations (GDPR, AI Act, internal memos)",
    "path.dpo.task2": "Maintaining the record of processing activities",
    "path.dpo.task3": "Handling GDPR data subject rights requests",
    "path.dpo.task4": "Business risk analysis with a GDPR focus",
    "path.pastry.date": "Oct 2026 · 1 month",
    "path.pastry.title": "Pastry internship",
    "path.pastry.place": "KC Peaches, Pearse St · Dublin, Ireland",
    "path.pastry.task1": "Full immersion in a professional kitchen, 100% in English",
    "path.pastry.task2": "Precision, pace and teamwork in real working conditions",
    "path.tech.date": "Jan 2023 — Aug 2024",
    "path.tech.title": "IT technician (work-study)",
    "path.tech.place": "French Ministry of the Interior, Border Police · Paris",
    "path.tech.task1": "User support",
    "path.tech.task2": "Network and software troubleshooting, IT maintenance",
    "path.tech.task3": "Deploying solutions (print server, border control equipment)",
    "path.tech.task4": "Missions abroad (London)",

    "edu.title": "Education",
    "edu.eng.title": "Engineering degree in Computer Networks and Connected Objects (IoT)",
    "edu.ef.date": "Aug 2026 · 1 month",
    "edu.ef.title": "Spanish language course",
    "edu.ef.place": "EF Barcelona · Spain",
    "edu.bts.title": "BTS (2-year technical degree) in Digital Systems, Computing and Networks",
    "edu.bac.title": "French technological baccalaureate (STI2D)",

    "skills.net.title": "Networks & data",
    "skills.net.network": "Network management",
    "skills.net.maintenance": "Maintenance & troubleshooting",
    "skills.net.gdpr": "GDPR",
    "skills.net.aiact": "AI Act",
    "skills.tools.title": "Tools",
    "skills.tools.office": "Microsoft Office",
    "skills.lang.title": "Languages",
    "skills.lang.fr": "French · native",
    "skills.lang.en": "English · B2 (TOEIC 915)",
    "skills.lang.es": "Spanish · A2+",
    "skills.mind.project": "Project management",
    "skills.mind.team": "Teamwork",
    "skills.mind.autonomy": "Self-starter",
    "skills.mind.licence": "Driving licence · own car",

    "off.sport.title": "Sports",
    "off.sport.text": "Boxing, strength training, running.",
    "off.travel.title": "Travel",
    "off.travel.text": "England, Spain, Ireland, Belgium, the Netherlands.",

    "band.skills": "NETWORKS ★ IOT ★ DATA ★ GDPR ★ CODE ★ NETWORKS ★ IOT ★ DATA ★ GDPR ★ CODE ★ ",
    "motion.label": "Pause animations",
    "drops.stamp": "Coming soon",

    "contact.intro": "An internship, a work-study role, a project? Drop me a message.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send",
    "contact.form.sending": "Sending…",
    "contact.form.success": "Thanks! Your message is on its way, I'll get back to you soon.",
    "contact.form.error": "Oops, sending failed. Please try again in a moment.",

    "footer.text": "© 2026 Nicolas Delimauges — handmade with HTML, CSS & JS."
  }
};

const STORAGE_KEY = "lang";
const DEFAULT_LANG = "fr";

/**
 * Lit la langue mémorisée. localStorage peut être bloqué
 * (navigation privée), d'où le try/catch.
 * @returns {string} "fr" ou "en"
 */
function getSavedLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved in TRANSLATIONS ? saved : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

/**
 * Mémorise la langue choisie (sans planter si le stockage est bloqué).
 * @param {string} lang
 */
function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* stockage indisponible : le choix ne sera simplement pas retenu */
  }
}

/**
 * Remplace tous les textes de la page par ceux de la langue demandée.
 * @param {string} lang
 */
function applyLang(lang) {
  const dict = TRANSLATIONS[lang];

  // Textes visibles
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });

  // Attributs aria-label et content (balise meta)
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", dict[el.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    el.setAttribute("content", dict[el.dataset.i18nContent]);
  });

  document.documentElement.lang = lang;
  updateToggle(dict);
}

/**
 * Met à jour le bouton : il affiche la langue vers laquelle on bascule.
 * @param {object} dict - dictionnaire de la langue active
 */
function updateToggle(dict) {
  const button = document.getElementById("lang-toggle");
  if (!button) return;
  button.textContent = dict["lang.button"];
  button.setAttribute("aria-label", dict["lang.label"]);
  button.lang = dict["lang.target"];
}

/**
 * Initialise la traduction : affiche le bouton, applique la langue
 * mémorisée et gère le clic.
 */
function initI18n() {
  const button = document.getElementById("lang-toggle");
  if (!button) return;

  button.hidden = false;
  let current = getSavedLang();
  if (current !== DEFAULT_LANG) applyLang(current);

  button.addEventListener("click", () => {
    current = current === "fr" ? "en" : "fr";
    applyLang(current);
    saveLang(current);
  });
}

initI18n();
