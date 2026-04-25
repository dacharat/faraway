# Faraway 🌍

A monthly compass for your next trip — a fully static travel recommendation
site covering **211 destinations across 12 months in 71 countries**, with
sticky filters, a card grid, a 🌗 dark mode, and an interactive Leaflet world
map of every recommended city.

🔗 **Live:** https://dacharat.github.io/faraway/

![tech](https://img.shields.io/badge/stack-vanilla%20HTML%2FCSS%2FJS-orange)
![data](https://img.shields.io/badge/destinations-211-f97316)
![countries](https://img.shields.io/badge/countries-71-22c55e)
![map](https://img.shields.io/badge/map-Leaflet-3b82f6)

---

## Features

- **Month tabs** — Jan→Dec pill selector, defaults to the current month
  (horizontal-scroll single row on mobile, wrap on desktop)
- **Filter bar** — continent · budget · crowd level · travel-style multi-select,
  with a live count badge; collapsible behind a toggle on mobile
- **🔎 Search mode** — type a country or city for instant autocomplete,
  returns every month that place is recommended
- **🏳️ Flag emojis** — every country in the grid, tooltip, popup, and search
  dropdown is labelled with its flag
- **Live stats** — destinations found, average daily cost range, season mix
- **Card grid** — climate badges, key events, pros/cons, responsive 1→2→3 cols
- **🗺️ Map view** — every recommended city plotted on a world map; hover for
  a quick tooltip, click for full month-by-month context, click a month badge
  in the popup to jump back into the list view filtered to that month
- **🌗 Dark mode** — auto-follows system preference, toggle in the hero to
  override, choice persists in `localStorage`
- **No build step** — open `index.html` and it works

## Tech

| Layer        | Choice                                                            |
| ------------ | ----------------------------------------------------------------- |
| Markup       | Hand-written semantic HTML                                        |
| Styles       | Plain CSS, mobile-first, CSS variables + `[data-theme="dark"]`    |
| Behaviour    | Vanilla JavaScript (no framework, no bundler)                     |
| Map          | [Leaflet 1.9](https://leafletjs.com/) + CARTO light basemap (CDN) |
| Fonts        | Google Fonts: Fraunces (display), Inter (text)                    |
| Hosting      | GitHub Pages straight from `main`                                 |

## File structure

```
faraway/
├── index.html   # markup, inline theme bootstrap, font + Leaflet CDN tags
├── style.css    # all styles, design tokens, light + dark themes
├── main.js      # state, filters, render, map, search, theme toggle
├── data.js      # TRAVEL_DATA: months + city_coords + country_coords
├── CLAUDE.md    # guidance for AI agents editing this repo
└── README.md    # this file
```

## Dark mode

Dark mode uses a single `data-theme` attribute on `<html>`:

- An inline `<script>` in `<head>` applies the theme **before paint** (no
  flash), reading `localStorage['faraway-theme']` and falling back to the
  OS preference (`prefers-color-scheme`).
- The hero's 🌗 toggle flips the attribute and persists the choice.
- If the user hasn't made an explicit choice yet, the page follows OS theme
  changes live.

Color tokens are declared under `:root`, then overridden inside a
`[data-theme="dark"]` block at the end of `style.css`, along with
selector-specific overrides for anything hard-coded (card surfaces, badge
foregrounds, Leaflet popups, etc.). Add matching overrides there if you
introduce new hard-coded colors anywhere in the stylesheet.

## Adding a destination

Everything that's "data" — destinations *and* their map coordinates — lives
in **`data.js`** so the site stays dynamic by data alone.

1. Push a new entry into `TRAVEL_DATA.months["<Month>"]`:
   ```js
   {
     month: "March",
     country: "Portugal",
     best_cities_or_regions: ["Lisbon", "Porto"],
     why_visit: "...",
     climate: { avg_temp_c: "12–20", rainfall_level: "medium", humidity: "medium" },
     budget_category: "mid-range",          // budget | mid-range | luxury
     estimated_daily_cost_usd: "80–160",
     season_type: "shoulder",               // high | shoulder | low
     crowd_level: "low",                    // low | medium | high
     key_events: ["..."],
     travel_styles: ["culture", "food"],    // see TRAVEL_STYLES in main.js
     pros: ["..."],
     cons: ["..."]
   }
   ```
2. If the entry references a **new city**, add `[lat, lng]` to
   `TRAVEL_DATA.city_coords`. Missing cities silently fall back to the
   country centroid in `country_coords` (so they always appear *somewhere*
   on the map).
3. If the entry references a **new country**, add it to
   `TRAVEL_DATA.country_coords`, and also to the two lookup maps at the top
   of `main.js`:
   - `COUNTRY_FLAGS` — `"<Country>": "🇫🇱"` (flag emoji)
   - `COUNTRY_CONTINENT` — `"<Country>": "Asia"` (one of Asia · Europe ·
     Africa · North America · South America · Oceania)
4. Bump `TRAVEL_DATA.total_entries`.

That's it — no rebuild, just refresh.

## Merging a bulk dataset

Drop-in dataset files (e.g. `korea_russia_thailand_data.js`, `eu_uk_data.js`)
share the `TRAVEL_DATA` shape. Don't blindly `.push(...entries)` — that
creates duplicate `(month, country)` pairs. Instead, smart-merge:

- Arrays (cities, events, travel_styles, pros, cons) → **union + dedupe**
- Scalars (`why_visit`, cost, budget) → **pick the longer / more informative**
- `climate` → merge field by field
- Recompute `total_entries` after

See **[CLAUDE.md](./CLAUDE.md)** for the full merge recipe and invariants.

## Adding a new travel style

1. Add the style key to `TRAVEL_STYLES` in `main.js` (this surfaces it as
   a filter pill).
2. Add pastel + foreground tokens to **both** theme blocks in `style.css`:
   ```css
   :root                { --s-newstyle: #...; --s-newstyle-fg: #...; }
   [data-theme="dark"]  { --s-newstyle: #...; --s-newstyle-fg: #...; }
   .style-newstyle { background: var(--s-newstyle); color: var(--s-newstyle-fg); }
   ```

## Local development

No tooling required. Either:
- Double-click `index.html`, **or**
- Serve from any static file server (e.g. `python -m http.server`) if you
  want to test relative paths cleanly.

## Deploy

Pushing to `main` redeploys GitHub Pages automatically (Settings → Pages →
Source: `main` / `/ (root)`).

## Dataset

- **211 entries** across the 12 months (≈17–18 / month)
- **71 countries** covered, from Argentina to Vietnam — including the full
  EU/UK cluster, the Nordics, East Asia, Russia / South Korea, and recently
  Taiwan, Malaysia, the Philippines, Myanmar, Georgia (Caucasus), and
  Kyrgyzstan
- **651 city / region coordinates** backing the map view
- Sourced from curated travel datasets (`dataset_version: 2026.04`)
