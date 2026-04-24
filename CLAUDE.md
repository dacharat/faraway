# CLAUDE.md

Guidance for Claude Code (and other AI agents) when working in this repo.

## Project in one paragraph

**Faraway** is a static, build-free travel recommendation site. `index.html`
loads `data.js` (one giant `const TRAVEL_DATA = {...}`) and `main.js` (vanilla
JS app logic), then Leaflet renders an optional world map. There is **no
bundler, no package manager, no framework**. Open `index.html` and it works.

## File map

```
faraway/
├── index.html   # app shell, inline theme-bootstrapping script, CDN tags
├── style.css    # all styles; CSS variables + [data-theme="dark"] overrides
├── main.js      # state, filters, render, map, search, theme toggle (IIFE)
└── data.js      # TRAVEL_DATA — months, city_coords, country_coords
```

There is no build, no test runner, no linter config. Edits are live on refresh.

## Data model (`data.js`)

`TRAVEL_DATA` shape — keep new entries consistent with this:

```js
{
  dataset_version, total_entries, currency,
  city_coords:    { "<City>": [lat, lng], ... },
  country_coords: { "<Country>": [lat, lng], ... },     // centroid fallback
  months: {
    "January": [ <entry>, ... ],
    ...
    "December": [ <entry>, ... ]
  }
}
```

Each `<entry>`:

```js
{
  month, country,
  best_cities_or_regions: [...],
  why_visit,
  climate: { avg_temp_c, rainfall_level, humidity },
  budget_category,            // "budget" | "mid-range" | "luxury"
  estimated_daily_cost_usd,   // e.g. "80–160"
  season_type,                // "high" | "shoulder" | "low"
  crowd_level,                // "low" | "medium" | "high"
  key_events: [...],
  travel_styles: [...],       // keys must exist in TRAVEL_STYLES in main.js
  pros: [...],
  cons: [...]
}
```

**Important invariants**
- `entry.month` must match the month key it's filed under.
- Any city referenced in `best_cities_or_regions` should have an entry in
  `city_coords` — otherwise the map silently falls back to `country_coords`.
- `TRAVEL_DATA.total_entries` should equal the sum of `months[*].length`.
  Recompute after bulk changes (see "Merging datasets" below).
- `travel_styles` values must exist in the `TRAVEL_STYLES` array in `main.js`,
  and each needs matching `--s-<style>` / `--s-<style>-fg` tokens in
  `style.css` (both light and dark blocks).

## Adding a single destination

1. Push an entry into `TRAVEL_DATA.months["<Month>"]`.
2. Add new cities to `city_coords`; add new countries to `country_coords`.
3. Bump `total_entries`.
4. **If the country is new**, also add it to two lookup maps at the top of
   `main.js`:
   - `COUNTRY_FLAGS` — `"<Country>": "🇫🇱"` (used in card headers, map
     tooltips/popups, search dropdown, and the selected-place chip)
   - `COUNTRY_CONTINENT` — `"<Country>": "Asia"` (one of
     `Asia | Europe | Africa | North America | South America | Oceania`).
     Transcontinental countries follow the most travel-relevant bucket
     (Russia → Europe, Turkey/Georgia → Asia).
   Missing entries in either map mean the country silently drops out of the
   continent filter and renders without a flag.

No rebuild — refresh the browser.

## Merging datasets (the common recurring task)

The repo has received several bulk data drops (e.g. `korea_russia_thailand_data.js`,
`eu_uk_data.js`). These files define a sibling constant with the same shape as
`TRAVEL_DATA` and include merge instructions in their header comment.

**Established merge policy** (confirmed by the user across multiple sessions):

- `city_coords` + `country_coords`: `Object.assign` — new values win on conflict.
- `months[*]`: for each `{month, country}` pair in the new dataset:
  - If no existing entry for that `(month, country)` → **push** as-is.
  - If an entry already exists → **smart-merge**, never drop data:
    - **Arrays** (`best_cities_or_regions`, `key_events`, `travel_styles`,
      `pros`, `cons`) → union + dedupe (case-insensitive on trimmed strings).
    - **Scalars** (`why_visit`, `budget_category`, `estimated_daily_cost_usd`)
      → pick the **longer / more informative** value.
    - **`climate`** → merge field-by-field; prefer the longer `avg_temp_c`
      range, fill in any missing `rainfall_level` / `humidity`.
    - **`season_type`, `crowd_level`** → keep existing if present, else take new.
    - **`month`, `country`** → keep existing (they're the join keys).
  - Always recompute `total_entries` after the merge.

Practical recipe: write a one-off Node script (`_merge.js`) that loads both
files with `new Function(src + '; return VARNAME;')()`, applies the rules,
serializes with `JSON.stringify(obj, null, 2)`, prepends the existing
`/* TRAVEL_DATA — ... */` header comment, and writes back to `data.js`.
Delete the script when done. Print a summary (`merged=X added=Y total=Z`) so
the user can eyeball the result.

Do **not** just `.push(...entries)` verbatim — that will create duplicate
`(month, country)` pairs (the "Bangkok case" the user has flagged before).

## Filters

Four filter groups live in the sticky filter bar, applied additively by
`applyFilters()` in `main.js`:

| Filter    | Type         | State field       | Source of options                     |
| --------- | ------------ | ----------------- | ------------------------------------- |
| Continent | single-pill  | `state.continent` | `CONTINENTS` (fixed 6)                |
| Budget    | single-pill  | `state.budget`    | `budget_category` on entries          |
| Crowd     | single-pill  | `state.crowd`     | `crowd_level` on entries              |
| Style     | multi-select | `state.styles`    | `TRAVEL_STYLES` (fixed array in JS)   |

Any pill row that uses `data-filter="<key>"` is auto-wired by `bindFilterPills()`
for single-select behavior — to add a new single-select filter, just drop a
`<div class="pill-row" data-filter="newkey">` in the HTML and initialize
`state.newkey` alongside the others. Multi-select (like Style) is built
imperatively in `buildStyleFilter()`.

**Clear button** resets every filter group — keep `bindClearButton()` in sync
when adding a new filter.

**Active-count badge** on the mobile filter toggle is computed in
`updateFilterCountBadge()` — also add any new filter there.

## Views

Three views, switched via the hero tablist (`setView()` in `main.js`):

- **List** — default. Month tabs + filter bar visible.
- **Map** — Leaflet world map. Month tabs + filter bar visible; filters also
  apply to pin aggregation in `aggregateByCity()`.
- **Search** — a country/city autocomplete answers "when should I visit X?".
  Month tabs **and** the filter bar are hidden (by design — the query is
  the sole filter). Filter state is preserved, so switching back to List
  restores the user's last selection.

## Mobile UX specifics

- **Month tabs** (`≤ 639px`): single horizontal scroll row (`flex-wrap: nowrap`,
  `scroll-snap-type: x proximity`, hidden scrollbar) instead of wrapping to
  4 rows. Desktop keeps the wrap + centered layout.
- **Filter bar** (`≤ 639px`): collapsed by default behind a `⚙️ Filters` button
  with an active-count badge. Toggling adds/removes `.open` on the section.
  Desktop (`≥ 640px`): button hidden, panel always visible.
- **Filter grid on desktop**: 2 rows — Continent spans full width on top,
  Budget/Crowd/Style/Clear share the bottom row (grid-template-areas). This
  keeps the wider continent pills from squeezing the other columns.
- `align-items: start` on `.filters-inner` so filter labels line up at the top
  instead of floating in empty space above short pill rows.

## Dark mode

Dark mode is live. Key pieces:

- **Bootstrapping** (no FOUC): an inline `<script>` in `<head>` of
  `index.html` sets `document.documentElement.dataset.theme` before paint,
  reading `localStorage['faraway-theme']` and falling back to
  `prefers-color-scheme`. Keep this script in sync with the JS in main.js
  if you change the logic.
- **Styling**: `style.css` defines light tokens under `:root`, then overrides
  them under `[data-theme="dark"]` at the bottom of the file, plus
  selector-specific overrides for any place that used a hard-coded hex
  (card/stat-chip/pill/month-tab backgrounds, soft-badge foreground colors,
  event pill, Leaflet popup, etc.). When adding new styles with hard-coded
  colors, **also add a `[data-theme="dark"]` override** in that same file.
- **Hero gradient is always dark** — `.hero` uses hardcoded hex values
  (`#1e293b → #0f172a`) instead of `var(--navy)` because `--navy` is flipped
  in dark mode for the filter pill active state. Don't re-introduce
  `var(--navy)` in the hero background or you'll re-break dark mode there.
- **Toggle**: `#themeToggleBtn` in the hero; `bindThemeToggle()` in `main.js`
  flips the attribute, persists to localStorage, and listens for OS theme
  changes (only auto-applies them if the user hasn't explicitly chosen).

## Travel styles (adding a new one)

1. Append the key to `TRAVEL_STYLES` in `main.js`.
2. In `style.css`, add both light and dark tokens:
   ```css
   :root                { --s-xyz: #...; --s-xyz-fg: #...; }
   [data-theme="dark"]  { --s-xyz: #...; --s-xyz-fg: #...; }
   .style-xyz { background: var(--s-xyz); color: var(--s-xyz-fg); }
   ```

## Running locally

No tooling. Open `index.html` directly, or `python -m http.server` if you want
a proper origin (handy for iframing / preview servers).

## Things to avoid

- Don't add a bundler / package.json / framework. The project's identity is
  "one HTML, one CSS, one JS, one data file".
- Don't split `data.js` into multiple files without updating `index.html`'s
  `<script>` tag and verifying ordering (data must load before `main.js`).
- Don't introduce build steps that gate live editing.
- Don't commit helper merge scripts — delete them after running.
- Don't bypass the smart-merge rules and blindly append when integrating new
  data drops (creates visible duplicate cards).
