# CV portfolio — Nicolas Delimauges

CV en ligne d'une seule page, style street / streetwear, en français et en anglais.

**Stack** : HTML, CSS et JavaScript purs. Pas de framework ni d'étape de build.

## Voir le site en local

Ouvrir le dossier dans VS Code, puis clic droit sur `index.html` → **Open with Live Server**.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | la page (contenu français par défaut) |
| `css/style.css` | styles écran |
| `css/print.css` | version imprimable A4 (2 pages) |
| `js/i18n.js` | traductions FR/EN et bouton de langue |
| `js/main.js` | formulaire de contact et bouton PDF |
| `assets/` | favicon et image de partage |

## Modifier le contenu

- **Texte** : modifier le français dans `index.html` **et** la même clé (`data-i18n`) dans les deux langues de `js/i18n.js`.
- **Formulaire** : l'identifiant Formspree se trouve dans l'attribut `action` du `<form>`.
- **PDF** : bouton « Télécharger le CV (PDF) » ou Ctrl+P → « Enregistrer au format PDF ».

## Confidentialité

Le dossier `sources/` (CV d'origine) est exclu par `.gitignore` et ne doit jamais être publié.

## Mise en ligne

Hébergé gratuitement sur GitHub Pages (branche `main`, dossier racine).
