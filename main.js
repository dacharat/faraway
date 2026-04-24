/* =========================================================
   Faraway — main.js
   Vanilla JS: month tabs, filters, card rendering, stats bar.
   Depends on: data.js (window.TRAVEL_DATA)
   ========================================================= */

(function () {
  'use strict';

  // ---- Constants ----------------------------------------------------------
  const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const TRAVEL_STYLES = [
    'beach', 'culture', 'history', 'adventure', 'nature', 'food',
    'nightlife', 'music', 'wildlife', 'skiing', 'wellness'
  ];

  // Country → flag emoji. Uses regional indicator pairs for countries;
  // uses Unicode tag sequences for England / Scotland (UK subdivisions).
  const COUNTRY_FLAGS = {
    'Argentina': '🇦🇷', 'Australia': '🇦🇺', 'Austria': '🇦🇹', 'Belgium': '🇧🇪',
    'Belize': '🇧🇿', 'Bhutan': '🇧🇹', 'Botswana': '🇧🇼', 'Brazil': '🇧🇷',
    'Cambodia': '🇰🇭', 'Canada': '🇨🇦', 'Chile': '🇨🇱', 'China': '🇨🇳',
    'Colombia': '🇨🇴', 'Costa Rica': '🇨🇷', 'Croatia': '🇭🇷', 'Cuba': '🇨🇺',
    'Czech Republic': '🇨🇿', 'Denmark': '🇩🇰', 'Egypt': '🇪🇬',
    'England': '🏴\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}',
    'Ethiopia': '🇪🇹', 'Finland': '🇫🇮', 'France': '🇫🇷', 'Georgia': '🇬🇪',
    'Germany': '🇩🇪', 'Greece': '🇬🇷', 'Hungary': '🇭🇺', 'Iceland': '🇮🇸',
    'India': '🇮🇳', 'Indonesia': '🇮🇩', 'Ireland': '🇮🇪', 'Italy': '🇮🇹',
    'Japan': '🇯🇵', 'Jordan': '🇯🇴', 'Kenya': '🇰🇪', 'Laos': '🇱🇦',
    'Maldives': '🇲🇻', 'Malta': '🇲🇹', 'Mexico': '🇲🇽', 'Mongolia': '🇲🇳',
    'Morocco': '🇲🇦', 'Myanmar': '🇲🇲', 'Namibia': '🇳🇦', 'Nepal': '🇳🇵',
    'Netherlands': '🇳🇱', 'New Zealand': '🇳🇿', 'Norway': '🇳🇴', 'Oman': '🇴🇲',
    'Peru': '🇵🇪', 'Philippines': '🇵🇭', 'Poland': '🇵🇱', 'Portugal': '🇵🇹',
    'Russia': '🇷🇺', 'Rwanda': '🇷🇼',
    'Scotland': '🏴\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}',
    'Slovenia': '🇸🇮', 'South Africa': '🇿🇦', 'South Korea': '🇰🇷',
    'Spain': '🇪🇸', 'Sri Lanka': '🇱🇰', 'Sweden': '🇸🇪', 'Switzerland': '🇨🇭',
    'Tanzania': '🇹🇿', 'Thailand': '🇹🇭', 'Turkey': '🇹🇷',
    'United Arab Emirates': '🇦🇪', 'United States': '🇺🇸', 'Vietnam': '🇻🇳'
  };

  function flagFor(country) {
    return COUNTRY_FLAGS[country] || '';
  }

  // City + country coordinates live in data.js (TRAVEL_DATA.city_coords /
  // TRAVEL_DATA.country_coords) so the dataset and its geo-lookups stay
  // together. Adding a new destination means editing only data.js.
  const CITY_COORDS = (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA.city_coords) || {};
  const COUNTRY_COORDS = (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA.country_coords) || {};


  // ---- App state ----------------------------------------------------------
  const state = {
    view: 'list',                          // 'list' | 'map' | 'search'
    month: MONTHS[new Date().getMonth()],  // default = current month
    budget: 'all',
    crowd: 'all',
    styles: new Set(), // multi-select
    searchQuery: '',
    selectedPlace: null                    // { type: 'country'|'city', name, country }
  };

  let mapInstance = null; // Leaflet map instance (lazy-initialized)
  let mapMarkersLayer = null;

  // Search index — built once after DOM ready
  let searchIndex = {
    countries: Object.create(null), // country → [{ month, entry }, ...]
    cities: Object.create(null),    // normalizedCity → [{ month, entry, country, displayCity }, ...]
    options: []                     // flat list for autocomplete: [{ type, name, country, count }]
  };
  let searchActiveIdx = -1; // highlighted suggestion (keyboard nav)

  // ---- DOM refs -----------------------------------------------------------
  const monthTabsEl = document.getElementById('monthTabs');
  const monthTabsNavEl = document.getElementById('monthTabsNav');
  const styleFilterEl = document.getElementById('styleFilter');
  const cardGridEl = document.getElementById('cardGrid');
  const emptyStateEl = document.getElementById('emptyState');
  const clearBtn = document.getElementById('clearFilters');

  const statCountEl = document.getElementById('statCount');
  const statCostEl = document.getElementById('statCost');
  const statSeasonEl = document.getElementById('statSeason');

  const mapWrapEl = document.getElementById('mapWrap');
  const viewListBtn = document.getElementById('viewListBtn');
  const viewMapBtn = document.getElementById('viewMapBtn');
  const viewSearchBtn = document.getElementById('viewSearchBtn');

  const searchPanelEl = document.getElementById('searchPanel');
  const searchInputEl = document.getElementById('searchInput');
  const searchDropdownEl = document.getElementById('searchDropdown');
  const searchClearBtnEl = document.getElementById('searchClearBtn');
  const searchSelectedEl = document.getElementById('searchSelected');

  const emptyEmojiEl = document.getElementById('emptyEmoji');
  const emptyTitleEl = document.getElementById('emptyTitle');
  const emptyMessageEl = document.getElementById('emptyMessage');

  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // ---- Init ---------------------------------------------------------------
  function init() {
    buildMonthTabs();
    buildStyleFilter();
    bindFilterPills();
    bindClearButton();
    bindViewToggle();
    bindThemeToggle();
    buildSearchIndex();
    bindSearch();
    render();
  }

  // ---- Theme toggle -------------------------------------------------------
  // Initial theme is applied pre-paint by an inline script in index.html
  // (reads localStorage 'faraway-theme', falls back to prefers-color-scheme).
  // This binds the toggle button + keeps the state in sync.
  function bindThemeToggle() {
    if (!themeToggleBtn) return;
    updateThemeToggleUi();
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('faraway-theme', next); } catch (_) { /* ignore */ }
      updateThemeToggleUi();
    });

    // Track OS preference changes for users who haven't explicitly chosen.
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql && mql.addEventListener) {
      mql.addEventListener('change', (e) => {
        if (localStorage.getItem('faraway-theme')) return; // user has an explicit pref
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        updateThemeToggleUi();
      });
    }
  }

  function updateThemeToggleUi() {
    if (!themeToggleBtn) return;
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const isDark = theme === 'dark';
    themeToggleBtn.setAttribute('aria-pressed', String(isDark));
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggleBtn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // ---- View toggle (List <-> Map <-> Search) ------------------------------
  function bindViewToggle() {
    viewListBtn.addEventListener('click', () => setView('list'));
    viewMapBtn.addEventListener('click', () => setView('map'));
    viewSearchBtn.addEventListener('click', () => setView('search'));
  }

  function setView(view) {
    state.view = view;
    viewListBtn.classList.toggle('active', view === 'list');
    viewMapBtn.classList.toggle('active', view === 'map');
    viewSearchBtn.classList.toggle('active', view === 'search');
    viewListBtn.setAttribute('aria-selected', view === 'list');
    viewMapBtn.setAttribute('aria-selected', view === 'map');
    viewSearchBtn.setAttribute('aria-selected', view === 'search');

    // Month tabs apply to list + map (map filters pins when a month is picked,
    // "All months" aggregates). Search ignores them.
    monthTabsNavEl.hidden = (view === 'search');
    searchPanelEl.hidden = (view !== 'search');

    if (view === 'search') {
      // Focus input on entry — keeps discovery zero-click.
      requestAnimationFrame(() => searchInputEl.focus());
    } else {
      closeSearchDropdown();
    }
    render();
  }

  // ---- Build month tab buttons -------------------------------------------
  function buildMonthTabs() {
    // "All" pill: List → every entry across all months; Map → aggregate pins.
    const allBtn = document.createElement('button');
    allBtn.className = 'month-tab' + (state.month === 'All' ? ' active' : '');
    allBtn.textContent = 'All months';
    allBtn.dataset.month = 'All';
    allBtn.addEventListener('click', () => selectMonth('All'));
    monthTabsEl.appendChild(allBtn);

    MONTHS.forEach(m => {
      const btn = document.createElement('button');
      btn.className = 'month-tab' + (m === state.month ? ' active' : '');
      btn.textContent = m;
      btn.dataset.month = m;
      btn.addEventListener('click', () => selectMonth(m));
      monthTabsEl.appendChild(btn);
    });
  }

  function selectMonth(m) {
    state.month = m;
    document.querySelectorAll('.month-tab').forEach(t => t.classList.toggle('active', t.dataset.month === m));
    render();
  }

  // ---- Build travel-style multi-select pills -----------------------------
  function buildStyleFilter() {
    TRAVEL_STYLES.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'pill';
      btn.textContent = s;
      btn.style.textTransform = 'capitalize';
      btn.dataset.value = s;
      btn.addEventListener('click', () => {
        if (state.styles.has(s)) {
          state.styles.delete(s);
          btn.classList.remove('active');
        } else {
          state.styles.add(s);
          btn.classList.add('active');
        }
        render();
      });
      styleFilterEl.appendChild(btn);
    });
  }

  // ---- Wire up the budget + crowd pill rows ------------------------------
  function bindFilterPills() {
    document.querySelectorAll('[data-filter="budget"] .pill, [data-filter="crowd"] .pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const row = pill.parentElement;
        const key = row.dataset.filter; // "budget" | "crowd"
        row.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state[key] = pill.dataset.value;
        render();
      });
    });
  }

  function bindClearButton() {
    clearBtn.addEventListener('click', () => {
      state.budget = 'all';
      state.crowd = 'all';
      state.styles.clear();
      // reset UI
      document.querySelectorAll('[data-filter="budget"] .pill, [data-filter="crowd"] .pill').forEach(p => {
        p.classList.toggle('active', p.dataset.value === 'all');
      });
      styleFilterEl.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      render();
    });
  }

  // ---- Filter engine ------------------------------------------------------
  // Core filter logic shared by list / map / search. Operates on raw entries.
  function applyFilters(entries) {
    return entries.filter(d => {
      if (state.budget !== 'all' && d.budget_category !== state.budget) return false;
      if (state.crowd !== 'all' && d.crowd_level !== state.crowd) return false;
      if (state.styles.size > 0) {
        const hasStyle = (d.travel_styles || []).some(s => state.styles.has(s));
        if (!hasStyle) return false;
      }
      return true;
    });
  }

  function getFilteredDestinations() {
    const source = state.month === 'All'
      ? MONTHS.flatMap(m => (TRAVEL_DATA.months && TRAVEL_DATA.months[m]) || [])
      : (TRAVEL_DATA.months && TRAVEL_DATA.months[state.month]) || [];
    return applyFilters(source);
  }

  // ---- Cost parsing helper -----------------------------------------------
  // "80-160" or "80–160" → { min: 80, max: 160 }
  function parseCostRange(str) {
    if (!str) return null;
    const match = String(str).match(/(\d+)\s*[–-]\s*(\d+)/);
    if (!match) {
      const single = String(str).match(/(\d+)/);
      if (single) return { min: +single[1], max: +single[1] };
      return null;
    }
    return { min: +match[1], max: +match[2] };
  }

  // ---- Stats bar update --------------------------------------------------
  function updateStats(items) {
    statCountEl.textContent = items.length;

    if (items.length === 0) {
      statCostEl.textContent = '—';
      statSeasonEl.textContent = '—';
      return;
    }

    let minSum = 0, maxSum = 0, n = 0;
    items.forEach(d => {
      const r = parseCostRange(d.estimated_daily_cost_usd);
      if (r) { minSum += r.min; maxSum += r.max; n++; }
    });
    if (n > 0) {
      statCostEl.textContent = `$${Math.round(minSum / n)}–$${Math.round(maxSum / n)}`;
    } else {
      statCostEl.textContent = '—';
    }

    const seasonCounts = { high: 0, shoulder: 0, low: 0 };
    items.forEach(d => {
      if (seasonCounts[d.season_type] !== undefined) seasonCounts[d.season_type]++;
    });
    statSeasonEl.textContent =
      `${seasonCounts.high} high · ${seasonCounts.shoulder} shoulder · ${seasonCounts.low} low`;
  }

  // ---- Render -------------------------------------------------------------
  function render() {
    if (state.view === 'map') {
      renderMap();
      return;
    }
    if (state.view === 'search') {
      renderSearch();
      return;
    }
    renderList();
  }

  // Generic card-grid renderer with fade-out/fade-in. `items` is a list of
  // { entry, month? } — month is only used in search mode to badge the card.
  function renderCards(items) {
    cardGridEl.hidden = false;
    mapWrapEl.hidden = true;

    const existing = cardGridEl.querySelectorAll('.card');
    existing.forEach(c => c.classList.add('hiding'));

    setTimeout(() => {
      cardGridEl.innerHTML = '';
      if (items.length === 0) {
        emptyStateEl.hidden = false;
      } else {
        emptyStateEl.hidden = true;
        items.forEach((it, i) => {
          const card = buildCard(it.entry, it.month);
          cardGridEl.appendChild(card);
          requestAnimationFrame(() => {
            setTimeout(() => card.classList.add('visible'), i * 30);
          });
        });
      }
    }, existing.length ? 200 : 0);
  }

  function renderList() {
    setEmptyState('🧭', 'No matches for these filters', 'Try a different month, widen the budget, or clear filters to start over.');
    const entries = getFilteredDestinations();
    updateStats(entries);
    renderCards(entries.map(e => ({ entry: e })));
  }

  function setEmptyState(emoji, title, message) {
    emptyEmojiEl.textContent = emoji;
    emptyTitleEl.textContent = title;
    emptyMessageEl.textContent = message;
  }

  // ---- Map view -----------------------------------------------------------
  // In map view, filters for budget/crowd/style still apply, but the
  // "month" tab is ignored — the map aggregates data across ALL months
  // so the user can see when each country is recommended.
  function renderMap() {
    cardGridEl.hidden = true;
    emptyStateEl.hidden = true;
    mapWrapEl.hidden = false;

    // Build per-city groups across all months (filters for budget/crowd/style still apply).
    // Month tab is ignored on the map — every pin summarises all relevant months for that city.
    const byCity = aggregateByCity();

    // Stats reflect all the destination-entries feeding the map.
    const allItems = Object.values(byCity).flatMap(g => g.entries.map(e => e.entry));
    updateStats(allItems);

    if (!mapInstance) initLeafletMap();

    mapMarkersLayer.clearLayers();
    Object.values(byCity).forEach(group => {
      const marker = L.circleMarker(group.coord, {
        radius: 5 + Math.min(group.entries.length * 2, 10),
        color: '#ea580c',
        weight: 1.5,
        fillColor: '#f97316',
        fillOpacity: 0.8
      });
      marker.bindTooltip(buildCityTooltip(group), { sticky: true, direction: 'top' });
      marker.bindPopup(buildCityPopup(group), { maxWidth: 340, minWidth: 260 });
      marker.addTo(mapMarkersLayer);
    });

    // Leaflet needs a kick if the container was hidden when created.
    setTimeout(() => mapInstance.invalidateSize(), 50);
  }

  // Normalize a raw city label into a lookup key + display name.
  // e.g. "Arenal/La Fortuna" → "La Fortuna", "Manaus (Amazon)" → "Manaus",
  //      "Jaipur & Rajasthan" → "Jaipur", "Antalya coast" → "Antalya".
  function normalizeCityName(raw) {
    if (!raw) return '';
    let s = String(raw).trim();
    // drop parenthetical
    s = s.replace(/\s*\([^)]*\)\s*/g, '').trim();
    // split on " / " or " & " — try each piece in the lookup, prefer a hit
    const parts = s.split(/\s*[\/&]\s*/);
    for (const p of parts) {
      if (CITY_COORDS[p]) return p;
    }
    // fall back to first part, trimmed
    return parts[0].replace(/\s+coast$/i, '').trim();
  }

  // Group entries by city. Each city gets one marker carrying every month it
  // appears in, with the parent entry so popups can show full context.
  function aggregateByCity() {
    const result = {};
    const monthsToScan = state.month === 'All' ? MONTHS : [state.month];
    monthsToScan.forEach(month => {
      const monthData = (TRAVEL_DATA.months && TRAVEL_DATA.months[month]) || [];
      monthData.forEach(d => {
        if (state.budget !== 'all' && d.budget_category !== state.budget) return;
        if (state.crowd !== 'all' && d.crowd_level !== state.crowd) return;
        if (state.styles.size > 0) {
          const hasStyle = (d.travel_styles || []).some(s => state.styles.has(s));
          if (!hasStyle) return;
        }
        (d.best_cities_or_regions || []).forEach(rawCity => {
          const key = normalizeCityName(rawCity);
          const coord = CITY_COORDS[key] || COUNTRY_COORDS[d.country];
          if (!coord) return;
          const id = key + '|' + d.country; // avoid collisions between same-named cities
          if (!result[id]) {
            result[id] = {
              city: key,
              displayCity: rawCity,
              country: d.country,
              coord: coord,
              entries: []
            };
          }
          result[id].entries.push({ month, entry: d });
        });
      });
    });
    return result;
  }

  function initLeafletMap() {
    mapInstance = L.map('mapEl', {
      center: [20, 10],
      zoom: 2,
      minZoom: 2,
      maxZoom: 8,
      worldCopyJump: true,
      scrollWheelZoom: true
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(mapInstance);
    mapMarkersLayer = L.layerGroup().addTo(mapInstance);
  }

  // Short hover tooltip — city, country, which months
  function buildCityTooltip(group) {
    const months = group.entries.map(e => e.month.slice(0, 3)).join(' · ');
    return `<strong>${escapeHtml(group.displayCity)}</strong>, ${flagFor(group.country)} ${escapeHtml(group.country)}<br>
            <span style="color:#64748b">Best: ${escapeHtml(months)}</span>`;
  }

  // Rich click popup — every month this city is recommended in
  function buildCityPopup(group) {
    const monthsHtml = group.entries.map(({ month, entry }) => `
      <div class="popup-month">
        <div class="popup-month-head">
          <button class="popup-month-badge" data-month="${escapeHtml(month)}">${escapeHtml(month)}</button>
          <span class="popup-month-cities">${flagFor(entry.country)} ${escapeHtml(entry.country)}</span>
        </div>
        <p class="popup-month-why">${escapeHtml(entry.why_visit || '')}</p>
        <div class="popup-meta">
          <span class="badge badge-${entry.budget_category}">${capitalize(entry.budget_category || '')} · $${escapeHtml(entry.estimated_daily_cost_usd || '?')}/day</span>
          <span class="badge badge-crowd-${entry.crowd_level}">${capitalize(entry.crowd_level || '')} crowds</span>
          <span class="badge badge-season-${entry.season_type}">${capitalize(entry.season_type || '')}</span>
        </div>
      </div>
    `).join('');

    return `
      <h3 class="popup-country">${escapeHtml(group.displayCity)}</h3>
      <div style="font-size:.82rem;color:#64748b;margin:-4px 0 8px">${flagFor(group.country)} ${escapeHtml(group.country)}</div>
      <div class="popup-months">${monthsHtml}</div>
    `;
  }

  // Delegate: click a month badge inside any popup → jump back to List view
  // for that month (and close the popup).
  document.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.popup-month-badge');
    if (!btn) return;
    const month = btn.dataset.month;
    if (!month) return;
    state.month = month;
    document.querySelectorAll('.month-tab').forEach(t => t.classList.toggle('active', t.dataset.month === month));
    setView('list');
  });

  // ---- Card builder ------------------------------------------------------
  // `month` is optional — when provided (search mode), a month badge is shown
  // at the top of the card so the user can see which month the recommendation
  // applies to.
  function buildCard(d, month) {
    const card = document.createElement('article');
    card.className = 'card';

    const climate = d.climate || {};
    const rainClass = `badge-rain-${climate.rainfall_level || 'low'}`;
    const monthBadge = month
      ? `<span class="card-month-badge">📅 ${escapeHtml(month)}</span>`
      : '';

    card.innerHTML = `
      ${monthBadge}
      <div class="card-header">
        <h2 class="card-country"><span class="flag" aria-hidden="true">${flagFor(d.country)}</span>${escapeHtml(d.country)}</h2>
        <div class="card-regions">
          ${(d.best_cities_or_regions || []).map(r => `<span class="region-tag">📍 ${escapeHtml(r)}</span>`).join('')}
        </div>
      </div>

      <p class="card-why">${escapeHtml(d.why_visit || '')}</p>

      <div class="climate-row">
        <span class="badge badge-temp">🌡️ ${escapeHtml(climate.avg_temp_c || '—')}°C</span>
        <span class="badge ${rainClass}">💧 ${escapeHtml(climate.rainfall_level || '—')} rain</span>
        <span class="badge badge-humidity">💨 ${escapeHtml(climate.humidity || '—')} humidity</span>
      </div>

      <div class="meta-row">
        <span class="badge badge-${d.budget_category}">💰 ${capitalize(d.budget_category || '')}</span>
        <span class="cost-text">$${escapeHtml(d.estimated_daily_cost_usd || '?')}/day</span>
        <span class="badge badge-crowd-${d.crowd_level}">👥 ${capitalize(d.crowd_level || '')} crowds</span>
        <span class="badge badge-season-${d.season_type}">📅 ${capitalize(d.season_type || '')} season</span>
      </div>

      ${d.key_events && d.key_events.length ? `
      <div>
        <h4 class="proscons-label" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;margin:0 0 6px;color:var(--text-muted)">🎉 Key events</h4>
        <div class="events-list">
          ${d.key_events.map(e => `<span class="event-pill">${escapeHtml(e)}</span>`).join('')}
        </div>
      </div>` : ''}

      <div class="styles-list">
        ${(d.travel_styles || []).map(s => `<span class="style-pill style-${s}">${escapeHtml(s)}</span>`).join('')}
      </div>

      <div class="proscons">
        <div class="pros">
          <h4>Pros</h4>
          <ul>${(d.pros || []).map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
        </div>
        <div class="cons">
          <h4>Cons</h4>
          <ul>${(d.cons || []).map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>
        </div>
      </div>
    `;

    return card;
  }

  // ---- Search mode --------------------------------------------------------
  // Build reverse indices from TRAVEL_DATA: country → entries, city → entries.
  // Rebuilding from the dataset at runtime means adding a new country/city in
  // data.js automatically appears in search — no main.js change needed.
  function buildSearchIndex() {
    const countries = Object.create(null);
    const cities = Object.create(null);      // normalized key → array
    const cityDisplay = Object.create(null); // normalized key → preferred display label

    MONTHS.forEach(month => {
      const monthData = (TRAVEL_DATA.months && TRAVEL_DATA.months[month]) || [];
      monthData.forEach(entry => {
        if (entry.country) {
          if (!countries[entry.country]) countries[entry.country] = [];
          countries[entry.country].push({ month, entry });
        }
        (entry.best_cities_or_regions || []).forEach(rawCity => {
          const key = normalizeCityName(rawCity);
          if (!key) return;
          if (!cities[key]) cities[key] = [];
          cities[key].push({ month, entry, country: entry.country, displayCity: rawCity });
          if (!cityDisplay[key]) cityDisplay[key] = key;
        });
      });
    });

    const options = [];
    Object.keys(countries).forEach(name => {
      options.push({ type: 'country', name, country: name, count: countries[name].length });
    });
    Object.keys(cities).forEach(key => {
      // Use the largest entry's parent country for display; cities can span countries in theory.
      const firstCountry = cities[key][0] && cities[key][0].country;
      options.push({ type: 'city', name: cityDisplay[key] || key, key, country: firstCountry, count: cities[key].length });
    });
    options.sort((a, b) => a.name.localeCompare(b.name));

    searchIndex = { countries, cities, options };
  }

  function bindSearch() {
    searchInputEl.addEventListener('input', () => {
      state.searchQuery = searchInputEl.value;
      searchClearBtnEl.hidden = !state.searchQuery;
      renderSearchDropdown();
    });
    searchInputEl.addEventListener('focus', renderSearchDropdown);
    searchInputEl.addEventListener('keydown', handleSearchKeydown);

    searchClearBtnEl.addEventListener('click', () => {
      searchInputEl.value = '';
      state.searchQuery = '';
      searchClearBtnEl.hidden = true;
      searchInputEl.focus();
      renderSearchDropdown();
    });

    // Click-outside to close dropdown
    document.addEventListener('click', (ev) => {
      if (!searchPanelEl.contains(ev.target)) closeSearchDropdown();
    });

    // Delegated click on suggestions
    searchDropdownEl.addEventListener('click', (ev) => {
      const row = ev.target.closest('.search-suggestion');
      if (!row) return;
      const idx = Number(row.dataset.idx);
      const suggestions = getSearchSuggestions();
      const pick = suggestions[idx];
      if (pick) selectSearchSuggestion(pick);
    });
  }

  function getSearchSuggestions() {
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) {
      // Default: show countries first (higher level), sorted alphabetically.
      return searchIndex.options
        .filter(o => o.type === 'country')
        .slice(0, 8);
    }
    const scored = searchIndex.options
      .map(o => {
        const name = o.name.toLowerCase();
        const country = (o.country || '').toLowerCase();
        let score = -1;
        if (name === q) score = 100;
        else if (name.startsWith(q)) score = 60;
        else if (name.includes(q)) score = 30;
        else if (country === q) score = 50;      // e.g. typing "japan" brings Japan's cities in
        else if (country.startsWith(q)) score = 25;
        else if (country.includes(q)) score = 10;
        if (score < 0) return null;
        if (o.type === 'country') score += 15;   // countries outrank same-strength cities
        return { o, score };
      })
      .filter(Boolean);

    scored.sort((a, b) => b.score - a.score || a.o.name.localeCompare(b.o.name));
    return scored.slice(0, 12).map(s => s.o);
  }

  function renderSearchDropdown() {
    const suggestions = getSearchSuggestions();
    searchActiveIdx = -1;

    if (suggestions.length === 0) {
      searchDropdownEl.innerHTML = `<li class="search-empty">No matching countries or cities</li>`;
      searchDropdownEl.hidden = false;
      return;
    }

    searchDropdownEl.innerHTML = suggestions.map((s, i) => {
      const icon = s.type === 'country'
        ? (flagFor(s.name) || '🌍')
        : '🏙️';
      const countryLabel = s.country ? `${flagFor(s.country)} ${escapeHtml(s.country)}`.trim() : '';
      const subtitle = s.type === 'country'
        ? `${s.count} month${s.count === 1 ? '' : 's'}`
        : `${countryLabel} · ${s.count} month${s.count === 1 ? '' : 's'}`;
      return `
        <li class="search-suggestion" role="option" data-idx="${i}">
          <span class="s-icon">${icon}</span>
          <span class="s-name">${escapeHtml(s.name)}</span>
          <span class="s-meta">${subtitle}</span>
        </li>
      `;
    }).join('');
    searchDropdownEl.hidden = false;
  }

  function handleSearchKeydown(ev) {
    const suggestions = getSearchSuggestions();
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      searchActiveIdx = Math.min(searchActiveIdx + 1, suggestions.length - 1);
      updateDropdownActive();
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      searchActiveIdx = Math.max(searchActiveIdx - 1, 0);
      updateDropdownActive();
    } else if (ev.key === 'Enter') {
      ev.preventDefault();
      const pick = suggestions[searchActiveIdx >= 0 ? searchActiveIdx : 0];
      if (pick) selectSearchSuggestion(pick);
    } else if (ev.key === 'Escape') {
      closeSearchDropdown();
      searchInputEl.blur();
    }
  }

  function updateDropdownActive() {
    searchDropdownEl.querySelectorAll('.search-suggestion').forEach((el, i) => {
      el.classList.toggle('active', i === searchActiveIdx);
    });
  }

  function closeSearchDropdown() {
    searchDropdownEl.hidden = true;
    searchActiveIdx = -1;
  }

  function selectSearchSuggestion(pick) {
    state.selectedPlace = pick.type === 'country'
      ? { type: 'country', name: pick.name, country: pick.name }
      : { type: 'city', name: pick.name, key: pick.key, country: pick.country };
    searchInputEl.value = pick.name;
    state.searchQuery = pick.name;
    searchClearBtnEl.hidden = false;
    closeSearchDropdown();
    render();
  }

  // Pull entries for the selected place from the search index.
  function getEntriesForSelectedPlace() {
    const p = state.selectedPlace;
    if (!p) return [];
    if (p.type === 'country') {
      return (searchIndex.countries[p.country] || []).map(x => ({ entry: x.entry, month: x.month }));
    }
    // city
    return (searchIndex.cities[p.key] || []).map(x => ({ entry: x.entry, month: x.month }));
  }

  function renderSearch() {
    // Update the "currently viewing" chip
    if (state.selectedPlace) {
      const p = state.selectedPlace;
      const icon = p.type === 'country' ? (flagFor(p.name) || '🌍') : '🏙️';
      const sub = p.type === 'city' && p.country ? ` <span>in ${flagFor(p.country)} ${escapeHtml(p.country)}</span>` : '';
      searchSelectedEl.innerHTML = `
        <span>Showing recommended months for</span>
        <span class="chip">${icon} ${escapeHtml(p.name)}</span>${sub}
      `;
      searchSelectedEl.hidden = false;
    } else {
      searchSelectedEl.hidden = true;
    }

    if (!state.selectedPlace) {
      setEmptyState('🔎', 'Search for a destination', 'Type a country or city above to see which months are best to visit.');
      cardGridEl.hidden = false;
      mapWrapEl.hidden = true;
      cardGridEl.innerHTML = '';
      emptyStateEl.hidden = false;
      updateStats([]);
      return;
    }
    setEmptyState('🧭', 'No matches for these filters', `${state.selectedPlace.name} has entries, but none match the current budget / crowd / style filters.`);

    // Sort by calendar order, then apply shared filters
    const monthIdx = Object.fromEntries(MONTHS.map((m, i) => [m, i]));
    const all = getEntriesForSelectedPlace().sort((a, b) => monthIdx[a.month] - monthIdx[b.month]);
    const items = all.filter(x => applyFilters([x.entry]).length > 0);

    updateStats(items.map(x => x.entry));
    renderCards(items);
  }

  // ---- Tiny utils ---------------------------------------------------------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  function capitalize(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // ---- Go -----------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', init);
})();
