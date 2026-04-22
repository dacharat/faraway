# Faraway 🌍

A monthly compass for your next trip — a fully static travel recommendation site
covering **132 destinations across 12 months**, with sticky filters, a card
grid, and an interactive Leaflet world map of every recommended city.

🔗 **Live:** https://dacharat.github.io/faraway/

![tech](https://img.shields.io/badge/stack-vanilla%20HTML%2FCSS%2FJS-orange)
![data](https://img.shields.io/badge/destinations-132-f97316)
![map](https://img.shields.io/badge/map-Leaflet-3b82f6)

---

## Features

- **Month tabs** — Jan→Dec pill selector, defaults to the current month
- **Filter bar** — budget · crowd level · travel-style multi-select
- **Live stats** — destinations found, average daily cost range, season mix
- **Card grid** — climate badges, key events, pros/cons, responsive 1→2→3 cols
- **🗺️ Map view** — every recommended city plotted on a world map; hover for
  a quick tooltip, click for full month-by-month context, click a month badge
  in the popup to jump back into the list view filtered to that month
- **No build step** — open `index.html` and it works

## Tech

| Layer        | Choice                                                            |
| ------------ | ----------------------------------------------------------------- |
| Markup       | Hand-written semantic HTML                                        |
| Styles       | Plain CSS, mobile-first, CSS variables for the design tokens      |
| Behaviour    | Vanilla JavaScript (no framework, no bundler)                     |
| Map          | [Leaflet 1.9](https://leafletjs.com/) + CARTO light basemap (CDN) |
| Fonts        | Google Fonts: Fraunces (display), Inter (text)                    |
| Hosting      | GitHub Pages straight from `main`                                 |

## File structure

```
faraway/
├── index.html   # markup, font + Leaflet CDN tags, app shell
├── style.css    # all styles, design tokens, responsive grid
├── main.js      # state, filters, render, map, popup behaviour
└── data.js      # TRAVEL_DATA: months + city_coords + country_coords
```

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
   `TRAVEL_DATA.country_coords`.

That's it — no rebuild, just refresh.

## Adding a new travel style

1. Add the style key to `TRAVEL_STYLES` in `main.js` (this surfaces it as
   a filter pill).
2. Add a pastel + foreground token in `style.css`:
   ```css
   --s-newstyle: #...; --s-newstyle-fg: #...;
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

- **132 entries** spread evenly across the 12 months (11 / month)
- **57 countries** covered
- **413 city / region coordinate entries** for the map view
- Sourced from a curated travel dataset (`dataset_version: 2026.04`)
