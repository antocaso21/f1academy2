# MURETTO — F1 Strategy Academy

Deployable bilingual GitHub Pages build of the MURETTO strategy academy and race simulator.

## Deployment with GitHub Desktop

1. Extract this package.
2. In GitHub Desktop open the `f1academy2` repository and choose **Repository → Show in Explorer**.
3. Copy **all files and folders inside this package** into the repository folder. Do not copy the ZIP itself or an extra parent folder.
4. Choose **Replace the files in the destination** when prompted.
5. Commit with `Add Pit Wall Radio conversations` and push to origin.
6. Wait for GitHub Pages deployment, then perform one hard refresh with `Ctrl + F5`.

The project is plain HTML, CSS and JavaScript and requires no build command.

## Pit Wall Radio

The live race now contains a two-way strategist–driver conversation system.

- the driver asks context-sensitive questions about weather, tyres, battery, traffic, pit windows, damage, Safety Car, VSC and red flags;
- questions and reactions change with the selected driver profile;
- the strategist can answer with quick calls or free text in Italian or English;
- understood commands alter the real simulator state: pace, energy mode, pit compound, staying out and Overtake;
- vague, contradictory, delayed or strategically poor calls affect Trust, Clarity, Accuracy and Composure;
- the strategist can request driver reports on grip, stint extension, balance, track wetness, damage and traffic;
- the final result includes a communication debrief.

The default **Local Intelligence** mode works immediately on GitHub Pages without accounts, servers or API keys. It is deterministic and keeps the simulator as the sole source of telemetry and race consequences.

## Optional generative-AI mode

A secure optional backend is included in `backend/cloudflare-worker.js`. It can produce more varied driver reactions and evaluate free-text radio calls while the local simulator still validates and applies every operational action.

Setup instructions are in `AI-BACKEND-SETUP.md`. Never place an API key in `radio-config.js`, HTML, or any public browser JavaScript.

## Clean URL structure

- `/f1academy2/` — home and rules
- `/f1academy2/academy/` — Academy, glossary and GP dossiers
- `/f1academy2/career/driver/` — driver profile selection
- `/f1academy2/career/calendar/` — career calendar
- `/f1academy2/academy/gp/australia/` — Academy GP dossier
- `/f1academy2/career/gp/australia/` — race briefing
- `/f1academy2/race/australia/` — live race
- `/f1academy2/results/australia/` — saved result

Equivalent physical pages are included for all 24 GP slugs, so direct links and refreshes work on GitHub Pages.

## Main game systems

- procedural cockpit and steering-wheel views reacting to weather and race state;
- dynamic weather radar and pit rejoin forecast;
- tyre wear plus surface/core temperature;
- battery SOC, recharge/deployment and Detection Line Overtake logic;
- four driver archetypes affecting behaviour and radio tone;
- automatic local career saving and stored result routes;
- decision log, skill matrix and printable debrief;
- Italian/English interface, accessibility options and keyboard controls;
- PWA manifest, offline shell, canonical routes, sitemap and responsive layout.

## Files added for this release

- `assets/pitwall-radio.js`
- `assets/pitwall-radio.css`
- `assets/radio-config.js`
- `backend/cloudflare-worker.js`
- `backend/wrangler.toml.example`
- `AI-BACKEND-SETUP.md`
- `sw-v9.js`

Shared game assets are now `assets/app-v9.js` and `assets/app-v9.css`.
