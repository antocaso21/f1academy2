# Muretto Academy — optimized GitHub Pages build

This is the deployable, bilingual production build of **Muretto**, the Formula 1 strategy academy and race simulator.

## Deployment

1. Open the GitHub repository that publishes `https://antocaso21.github.io/f1academy2/`.
2. Replace the current published files with **the contents of this folder**. Do not upload the parent folder itself.
3. Keep `.nojekyll` in the repository root.
4. Commit and push, then confirm that GitHub Pages deploys from the intended branch and root folder.
5. After deployment, hard-refresh the site once. The service worker will cache the application shell for later offline use.

The build has no package-manager or compilation step: it is plain HTML, CSS and JavaScript and can be published directly.

## Clean URL structure

### Main sections

- `/f1academy2/` — home and game rules
- `/f1academy2/academy/` — Academy, filters, glossary and 24 dossiers
- `/f1academy2/career/driver/` — driver-profile selection
- `/f1academy2/career/calendar/` — career calendar

### Per-Grand-Prix routes

The slug changes for each of the 24 Grands Prix. Examples:

- `/f1academy2/academy/gp/australia/` — Academy dossier
- `/f1academy2/career/gp/australia/` — race briefing and setup
- `/f1academy2/career/gp/australia/dossier/` — dossier opened from the career flow
- `/f1academy2/race/australia/` — live-race route
- `/f1academy2/results/australia/` — stored result route

Equivalent physical route pages are included for all 24 GP slugs, so direct links and browser refreshes work on GitHub Pages. `404.html` is retained as a fallback for malformed or future routes.

## Product improvements included

- URL routing with browser Back/Forward support and route-specific canonical links
- four driver archetypes that affect tyre use, energy, attack, consistency, errors and radio feedback
- realistic battery SOC, recharge/deployment and Detection Line–based Overtake logic
- real-speed starts, with faster simulation modes available only after lights out
- automatic local career saving, resume card and progress reset
- Academy and career search/filter tools
- Academy glossary and contextual strategy assistant
- decision log, skills matrix and printable/PDF-ready debrief
- keyboard controls for live races
- bilingual Italian/English interface and persisted preferences
- accessibility improvements: skip link, visible focus, reduced motion, high contrast and live regions
- responsive/mobile layout and sticky race information
- PWA manifest, icons, offline application shell and service worker
- SEO metadata, canonical routes, `robots.txt` and `sitemap.xml`
- externalized shared CSS and JavaScript for browser caching across all routes

## Important behaviour

Career progress, settings and the latest generated result are stored locally in the browser. A race that is currently running can be resumed while the same page session remains open; after a full reload, the user is returned to that GP's briefing because the complete live simulation state is intentionally not serialized.
