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
`eu_uk_data.js`, `asia_extended_data.js`). These files define a sibling constant with the same shape as
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

Four filter groups, applied additively by `applyFilters()` in `main.js`:

| Filter    | Type         | State field       | Source of options                     |
| --------- | ------------ | ----------------- | ------------------------------------- |
| Continent | single-pill  | `state.continent` | `CONTINENTS` (fixed 6)                |
| Budget    | single-pill  | `state.budget`    | `budget_category` on entries          |
| Crowd     | single-pill  | `state.crowd`     | `crowd_level` on entries              |
| Style     | multi-select | `state.styles`    | `TRAVEL_STYLES` (fixed array in JS)   |

The "source of truth" for these is the legacy filter section in
`#filtersSection` — its `data-filter="<key>"` pill rows are auto-wired by
`bindFilterPills()`. The mobile filter sheet (A4) and desktop popover
dropdowns (B2) are **alternate UIs** that mutate the same state and sync the
underlying pills. To add a new single-select filter: add the pill row, init
`state.newkey`, and update both popover wiring in `bindDesktopToolbar()` and
the mobile sheet rendering. Multi-select (Style) is built in `buildStyleFilter()`.

**Clear / chip-remove** must reset every filter group — keep
`bindClearButton()`, the toolbar's `dt-clear-all` handler, and
`renderActiveChips()` in sync.

**Active-count badge**: `updateFilterCountBadge()` updates both the mobile
topbar badge (`#mtFilterCountBadge`) and the legacy `#filterCountBadge`.

## Views

Four views, routed by `setView()` in `main.js`:

- **List / Browse** — default. Cards rendered by month + filters.
- **Map** — Leaflet world map. Filters apply to pin aggregation
  (`aggregateByCity()`); month tab is ignored on map (each pin summarises
  every month it appears in).
- **Search** — country/city autocomplete answering "when should I visit X?".
  Month tabs and the filter sheet are hidden. Filter state is preserved.
- **Saved** — pulls every entry whose id (`month|country`) lives in
  `state.saved` (persisted to `localStorage['faraway-saved']`). Filters still
  apply on top.

Card region pins (`.region-tag` — Kyoto, Hirosaki, Takayama on the Japan
card) are **clickable buttons**. Clicking one sets
`state.mapFocus = { country, city }` (one-shot, the city goes through
`normalizeCityName()`), switches to map view, and `renderMap()` `panTo`s +
`openPopup`s the matching marker after layout. If the city has no marker
under current filters, it falls back to any marker in the same country, then
finally to the country centroid in `COUNTRY_COORDS`.

## Layout shells

The site has two distinct shells; switch happens at `640px`.

### Mobile (`≤ 639px`)
- **`#mobileTopbar`** sticky top: logo, theme toggle, month-picker button,
  Filters button (with count badge). Hero is hidden.
- **Month picker**: dialog `#monthPicker` with 3-col grid of All + 12 months.
  Replaces the horizontal-scroll month-tab strip.
- **Filter sheet**: the same `#filtersSection` becomes a bottom sheet
  (`position: fixed; transform: translateY(100%)`, slides in on `.open`),
  with a drag handle, header, and "Show {N} destinations" sticky CTA
  (`#filterSheetCount`). Backdrop dim is `#filterBackdrop`.
- **`#bottomNav`** fixed at bottom with Browse / Map / Search / Saved
  (`aria-current="page"` on active). `Saved` shows a count badge.

### Desktop (`≥ 640px`)
- **`#desktopToolbar`** sticky 56px row: logo · view tabs (Browse / Map /
  Search / Saved) · spacer · popover triggers for Month / Continent /
  Budget / Styles · theme toggle. Filter pills are stacked **vertically**
  inside the popover (with `max-height: 360px` overflow).
- **`#activeChips`** below toolbar: `<n> destinations · avg $X/day · season
  mix` summary + removable filter chips + Clear all. Replaces the standalone
  `.stats-bar` (which is hidden on desktop).
- The legacy `.hero`, `.month-tabs`, and `.filters` sections all become
  `display: none` on desktop — kept in DOM as the source of truth that the
  new UIs mutate.

## Persistence

| What             | Storage key             | Format                          |
| ---------------- | ----------------------- | ------------------------------- |
| Theme            | `faraway-theme`         | `"light" \| "dark"`             |
| Saved trips      | `faraway-saved`         | `string[]` of `month\|country` |
| Recent searches  | `faraway-recent`        | `string[]` (last 5 picks)       |

URL state (`view / month / continent / budget / crowd / styles / q`) is
synced via `history.replaceState` in `syncUrlState()`. Read on init in
`readUrlState()`. `?continent=Asia&styles=culture,food` is shareable.

## Accessibility

- Tap targets ≥ 44px on mobile (buttons, pills, month-tabs).
- `:focus-visible { outline: 2px solid var(--accent) }` is global.
- `prefers-reduced-motion` disables transitions/animations site-wide.
- Filter sheet and month picker are `role="dialog"` with `aria-modal="true"`;
  open returns focus to the sheet's close button, close restores focus to
  the trigger (`_sheetReturnFocus`).
- Bottom nav uses `aria-current="page"` on the active button.
- Card "See details" toggle uses `aria-expanded` + label flip.

When adding new dialogs/popovers, follow the same pattern: capture
`document.activeElement` on open, restore on close.

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
  *(Note: the hero is `display: none` on desktop now — replaced by
  `#desktopToolbar` — but kept in DOM and used as the source of truth for
  the legacy view-tabs / theme-toggle handlers.)*
- **Toggle**: there are now THREE theme buttons (`#themeToggleBtn` in hero,
  `#mtThemeToggleBtn` in mobile topbar, `#dtThemeToggleBtn` in desktop
  toolbar) — they all flip `data-theme` and persist to `localStorage`.
  `bindThemeToggle()` wires the legacy hero one; `bindMobileTopbar()` and
  `bindDesktopToolbar()` wire their respective buttons. Keep all three in
  sync if you change the toggle behaviour.

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
