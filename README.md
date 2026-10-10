# Aniruddha Bora — Scientific AI

A responsive academic website based on the uploaded GitHub Pages repository.

## Structure
- `dist/`: complete publishable website (plain HTML, CSS, JavaScript; no npm or Ruby required).
- `build.py`: standard-library Python generator for HTML pages.
- `data/content.json`: publication, research, talk, and teaching records extracted from the supplied site.
- `dist/assets/style.css`: shared responsive visual design.
- `dist/assets/main.js`: publication search/filter, mobile navigation, motion toggle, CV printing.

Run `python3 build.py` after editing content, then `python3 check.py` to validate local links.

## Design
Dark graphite, mint/cyan accents, warm highlights, custom animated SVG field, editorial typography, real research figures, and team photography. No third-party fonts, scripts, analytics, or dependencies are loaded. Motion respects the operating system reduced-motion preference.

## Content notes
Content is synchronized with the user-supplied latest CV on October 10, 2026. See `CV_INTEGRATION_NOTES.md` for additions, classification decisions, and two student-name discrepancies awaiting confirmation. `data/profile.json` stores appointments, education, mentoring, funding, honors, patent applications, service, teaching, and training. The full uploaded PDF is included unchanged in `dist/files/Aniruddha_Bora_CV.pdf`.

The website preserves scholarly links from the supplied sources. No new publisher DOI or grant status was inferred. Submitted work and work in preparation are separately labeled. The old course syllabus is explicitly archived.

Browser visual QA was unavailable. Static links, markup, JavaScript syntax, publication-filter behavior, and CV content checks passed.

## GitHub Pages
For an existing `aniruddhabora.github.io` repository, commit the contents of `dist/` to the repository root, including `.nojekyll`. Use a branch for review first. Old Jekyll directories may remain but will no longer be rendered when `.nojekyll` is present. If GitHub Pages currently uses a custom Jekyll workflow, change it to publish the static root (or branch-based publishing). The download package includes a ready-to-upload static root and editable source under `source/`.

This project provides a separate private review site; it does not change the original GitHub repository or public domain.

## SPARKS Lab animation
The original amber/cyan infinity-network logo is restored on the home, About, and lab pages. The original SVG remains at `dist/images/sparks_logo.svg`; the refined display asset is `dist/images/sparks-logo-enhanced.svg`. It has a single 4.5-second entrance sequence, on-scroll activation, replay control, and a static reduced-motion/no-JavaScript fallback. Styles and behavior are in the shared CSS and JavaScript. Automated control-state checks passed. Live visual animation review remains unavailable.

## Ready-to-upload package
Upload this folder’s contents to the root of your GitHub Pages repository, including `.nojekyll`. Edit records in `source/data/content.json` and `source/data/profile.json`, then run `python3 source/build.py` and `python3 source/check.py`. Layout and page copy are in `source/build.py`; styles are in `assets/style.css`. The refined logo is in `images/sparks-logo-enhanced.svg`; the original is preserved in `images/sparks_logo.svg`. Run `python3 -m http.server 8000` from this folder for a local preview.
