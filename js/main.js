/* =========================================================
   Formulaire de contact : envoi à Formspree sans quitter la page
   ========================================================= */

/**
 * Renvoie un texte traduit dans la langue active de la page.
 * TRANSLATIONS vient de i18n.js (chargé avant ce fichier).
 * @param {string} key
 * @returns {string}
 */
function t(key) {
  const lang = document.documentElement.lang in TRANSLATIONS
    ? document.documentElement.lang
    : "fr";
  return TRANSLATIONS[lang][key];
}

/**
 * Affiche un message de confirmation ou d'erreur sous le formulaire.
 * @param {HTMLElement} status - zone de message
 * @param {"success"|"error"} type
 */
function showStatus(status, type) {
  status.textContent = t(`contact.form.${type}`);
  status.className = `form__status form__status--${type}`;
}

/**
 * Envoie le formulaire en arrière-plan (fetch) et affiche le résultat.
 * @param {SubmitEvent} event
 */
async function handleSubmit(event) {
  event.preventDefault(); // empêche le rechargement de la page
  const form = event.target;
  const button = form.querySelector("button[type=submit]");
  const status = form.querySelector(".form__status");

  button.disabled = true;
  button.textContent = t("contact.form.sending");

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" } // Formspree répond en JSON au lieu de rediriger
    });
    if (!response.ok) throw new Error(response.status);
    form.reset();
    showStatus(status, "success");
  } catch {
    showStatus(status, "error");
  } finally {
    button.disabled = false;
    button.textContent = t("contact.form.send");
  }
}

const contactForm = document.getElementById("contact-form");
if (contactForm) contactForm.addEventListener("submit", handleSubmit);

/* =========================================================
   Bouton « Télécharger le CV (PDF) »
   ========================================================= */

/**
 * Affiche le bouton PDF et ouvre la boîte d'impression au clic
 * (l'utilisateur choisit « Enregistrer au format PDF »).
 */
function initPrintButton() {
  const button = document.getElementById("print-button");
  if (!button) return;
  button.hidden = false;
  button.addEventListener("click", () => window.print());
}

initPrintButton();

/* =========================================================
   Apparition au défilement
   ========================================================= */

/**
 * Ajoute la classe is-visible aux éléments quand ils entrent à l'écran.
 * Le CSS s'occupe de l'animation (et l'ignore si les mouvements sont réduits).
 */
function initReveal() {
  const items = document.querySelectorAll(
    ".sticker, .drop, .job, .card, .form, .section__head"
  );

  // Navigateur trop ancien : on affiche tout directement
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  items.forEach((el) => el.style.setProperty("--delay", `${getStaggerDelay(el)}ms`));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // une seule apparition
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/**
 * Décalage selon la position parmi les frères : les éléments
 * d'une même liste apparaissent l'un après l'autre.
 * @param {HTMLElement} el
 * @returns {number} délai en millisecondes
 */
function getStaggerDelay(el) {
  const index = Array.from(el.parentElement.children).indexOf(el);
  const step = el.classList.contains("sticker") ? 70 : 110;
  return Math.min(index * step, 600);
}

initReveal();

/* =========================================================
   Navigation : sticker de la section en cours
   ========================================================= */

/**
 * Surligne dans la nav le lien de la section visible au milieu de l'écran.
 */
function initActiveNav() {
  const list = document.querySelector(".nav__list");
  if (!list || !("IntersectionObserver" in window)) return;

  const links = new Map(
    Array.from(list.querySelectorAll("a")).map((a) => [a.hash.slice(1), a])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(list, links, entry.target.id);
      });
    },
    // bande fine au milieu de l'écran : une seule section à la fois
    { rootMargin: "-45% 0px -50% 0px" }
  );

  links.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

/**
 * Marque le lien actif (aria-current) et le fait défiler
 * au centre de la nav sur mobile.
 * @param {HTMLElement} list - la liste de la nav
 * @param {Map<string, HTMLAnchorElement>} links
 * @param {string} id - id de la section visible
 */
function setActiveLink(list, links, id) {
  links.forEach((a, key) => {
    if (key === id) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });

  const link = links.get(id);
  if (!link) return;
  const offset = link.getBoundingClientRect().left - list.getBoundingClientRect().left;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  list.scrollTo({
    left: list.scrollLeft + offset - (list.clientWidth - link.offsetWidth) / 2,
    behavior: reduce ? "auto" : "smooth"
  });
}

initActiveNav();

/* =========================================================
   Bien-être : bouton « Pause » des animations
   ========================================================= */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

/**
 * Indique si les animations sont autorisées
 * (réglage du système + bouton Pause du site).
 * @returns {boolean}
 */
function motionAllowed() {
  return !reducedMotion.matches &&
    !document.documentElement.classList.contains("motion-paused");
}

/**
 * Affiche le bouton Pause, synchronise son état et mémorise le choix.
 * La classe motion-paused est posée dès le <head> pour éviter tout flash.
 */
function initMotionToggle() {
  const button = document.getElementById("motion-toggle");
  if (!button) return;
  const root = document.documentElement;

  button.hidden = false;
  button.setAttribute("aria-pressed", root.classList.contains("motion-paused"));

  button.addEventListener("click", () => {
    const paused = root.classList.toggle("motion-paused");
    button.setAttribute("aria-pressed", paused);
    if (paused) resetPointerEffects();
    try {
      localStorage.setItem("motion", paused ? "paused" : "on");
    } catch {
      /* stockage indisponible : le choix vaut pour cette visite */
    }
  });
}

/**
 * Remet à zéro les effets qui suivent la souris (inclinaison, aimant, parallaxe).
 */
function resetPointerEffects() {
  document.querySelectorAll(".card, .drop, .btn, .btn-lang, .hero").forEach((el) => {
    ["--rx", "--ry", "--mx", "--my", "--px", "--py"].forEach((v) => el.style.removeProperty(v));
  });
}

initMotionToggle();

/* =========================================================
   Intro de l'affiche : le nom apparaît lettre par lettre
   ========================================================= */

/**
 * Découpe chaque ligne du nom en lettres (<span class="char">)
 * avec un index --i qui sert à décaler leur apparition.
 */
function splitHeroLetters() {
  const name = document.querySelector(".hero__name");
  if (!name) return;
  let index = 0;

  name.querySelectorAll(".hero__line").forEach((line) => {
    const letters = line.textContent.trim().split("");
    line.textContent = "";
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = letter;
      span.style.setProperty("--i", index++);
      line.append(span);
    });
  });
  name.classList.add("is-split");
}

splitHeroLetters();

/* =========================================================
   Effets liés au défilement : progression, timeline, parallaxe
   ========================================================= */

/**
 * Met à jour, à chaque image, la barre de progression,
 * le remplissage de la timeline et la parallaxe des blobs.
 */
function initScrollEffects() {
  const progress = document.querySelector(".progress");
  const timeline = document.querySelector(".timeline");
  const hero = document.querySelector(".hero");
  let ticking = false;

  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.setProperty("--scroll", max > 0 ? window.scrollY / max : 0);
    if (timeline) timeline.style.setProperty("--fill", getTimelineFill(timeline));
    if (hero && motionAllowed() && window.scrollY < hero.offsetHeight) {
      hero.style.setProperty("--sy", Math.round(window.scrollY));
    }
  };

  // requestAnimationFrame : au plus un calcul par image affichée
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

/**
 * Part de la timeline déjà « parcourue » (0 à 1) :
 * elle se remplit quand son contenu passe aux 2/3 de l'écran.
 * @param {HTMLElement} timeline
 * @returns {string}
 */
function getTimelineFill(timeline) {
  if (!motionAllowed()) return "1";
  const rect = timeline.getBoundingClientRect();
  const fill = (window.innerHeight * 0.65 - rect.top) / rect.height;
  return Math.min(Math.max(fill, 0), 1).toFixed(3);
}

initScrollEffects();

/* =========================================================
   Effets qui suivent la souris (ordinateur uniquement)
   ========================================================= */

/**
 * Parallaxe des blobs de l'affiche selon la position de la souris.
 */
function initHeroParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  hero.addEventListener("pointermove", (event) => {
    if (!motionAllowed()) return;
    hero.style.setProperty("--px", (event.clientX / window.innerWidth - 0.5) * 2);
    hero.style.setProperty("--py", (event.clientY / window.innerHeight - 0.5) * 2);
  });
  hero.addEventListener("pointerleave", () => {
    hero.style.removeProperty("--px");
    hero.style.removeProperty("--py");
  });
}

/**
 * Inclinaison 3D légère des cartes vers le curseur.
 */
function initTilt() {
  document.querySelectorAll(".card, .drop").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (!motionAllowed()) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
    });
  });
}

/**
 * Boutons « magnétiques » : ils glissent légèrement vers le curseur.
 */
function initMagnetic() {
  document.querySelectorAll(".btn, .btn-lang").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      if (!motionAllowed()) return;
      const rect = button.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      button.style.setProperty("--mx", `${clamp(dx * 0.2, 8)}px`);
      button.style.setProperty("--my", `${clamp(dy * 0.3, 6)}px`);
    });
    button.addEventListener("pointerleave", () => {
      button.style.removeProperty("--mx");
      button.style.removeProperty("--my");
    });
  });
}

/**
 * Limite une valeur entre -limit et +limit.
 * @param {number} value
 * @param {number} limit
 * @returns {string}
 */
function clamp(value, limit) {
  return Math.min(Math.max(value, -limit), limit).toFixed(1);
}

if (finePointer.matches) {
  initHeroParallax();
  initTilt();
  initMagnetic();
}
