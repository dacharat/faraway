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
    'beach', 'culture', 'adventure', 'nature', 'food',
    'nightlife', 'wildlife', 'skiing', 'wellness'
  ];

  // City + country coordinates live in data.js (TRAVEL_DATA.city_coords /
  // TRAVEL_DATA.country_coords) so the dataset and its geo-lookups stay
  // together. Adding a new destination means editing only data.js.
  const CITY_COORDS = (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA.city_coords) || {};
  const COUNTRY_COORDS = (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA.country_coords) || {};


  // ---- App state ----------------------------------------------------------
  const state = {
    view: 'list',                          // 'list' | 'map'
    month: MONTHS[new Date().getMonth()],  // default = current month
    budget: 'all',
    crowd: 'all',
    styles: new Set() // multi-select
  };

  let mapInstance = null; // Leaflet map instance (lazy-initialized)
  let mapMarkersLayer = null;

  // ---- DOM refs -----------------------------------------------------------
  const monthTabsEl = document.getElementById('monthTabs');
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

  // ---- Init ---------------------------------------------------------------
  function init() {
    buildMonthTabs();
    buildStyleFilter();
    bindFilterPills();
    bindClearButton();
    bindViewToggle();
    render();
  }

  // ---- View toggle (List <-> Map) -----------------------------------------
  function bindViewToggle() {
    viewListBtn.addEventListener('click', () => setView('list'));
    viewMapBtn.addEventListener('click', () => setView('map'));
  }

  function setView(view) {
    state.view = view;
    viewListBtn.classList.toggle('active', view === 'list');
    viewMapBtn.classList.toggle('active', view === 'map');
    viewListBtn.setAttribute('aria-selected', view === 'list');
    viewMapBtn.setAttribute('aria-selected', view === 'map');
    render();
  }

  // ---- Build month tab buttons -------------------------------------------
  function buildMonthTabs() {
    MONTHS.forEach(m => {
      const btn = document.createElement('button');
      btn.className = 'month-tab' + (m === state.month ? ' active' : '');
      btn.textContent = m;
      btn.dataset.month = m;
      btn.addEventListener('click', () => {
        state.month = m;
        document.querySelectorAll('.month-tab').forEach(t => t.classList.toggle('active', t.dataset.month === m));
        render();
      });
      monthTabsEl.appendChild(btn);
    });
    // Scroll active month into view on load
    requestAnimationFrame(() => {
      const active = monthTabsEl.querySelector('.month-tab.active');
      if (active) active.scrollIntoView({ inline: 'center', block: 'nearest' });
    });
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
  function getFilteredDestinations() {
    const monthData = (TRAVEL_DATA.months && TRAVEL_DATA.months[state.month]) || [];
    return monthData.filter(d => {
      if (state.budget !== 'all' && d.budget_category !== state.budget) return false;
      if (state.crowd !== 'all' && d.crowd_level !== state.crowd) return false;
      if (state.styles.size > 0) {
        // match at least one selected style
        const hasStyle = (d.travel_styles || []).some(s => state.styles.has(s));
        if (!hasStyle) return false;
      }
      return true;
    });
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
    renderList();
  }

  function renderList() {
    // Show list, hide map
    cardGridEl.hidden = false;
    mapWrapEl.hidden = true;

    const items = getFilteredDestinations();
    updateStats(items);

    // Animate-out existing cards, then swap content
    const existing = cardGridEl.querySelectorAll('.card');
    existing.forEach(c => c.classList.add('hiding'));

    setTimeout(() => {
      cardGridEl.innerHTML = '';
      if (items.length === 0) {
        emptyStateEl.hidden = false;
      } else {
        emptyStateEl.hidden = true;
        items.forEach((d, i) => {
          const card = buildCard(d);
          cardGridEl.appendChild(card);
          requestAnimationFrame(() => {
            setTimeout(() => card.classList.add('visible'), i * 30);
          });
        });
      }
    }, existing.length ? 200 : 0);
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
    MONTHS.forEach(month => {
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
    return `<strong>${escapeHtml(group.displayCity)}</strong>, ${escapeHtml(group.country)}<br>
            <span style="color:#64748b">Best: ${escapeHtml(months)}</span>`;
  }

  // Rich click popup — every month this city is recommended in
  function buildCityPopup(group) {
    const monthsHtml = group.entries.map(({ month, entry }) => `
      <div class="popup-month">
        <div class="popup-month-head">
          <button class="popup-month-badge" data-month="${escapeHtml(month)}">${escapeHtml(month)}</button>
          <span class="popup-month-cities">${escapeHtml(entry.country)}</span>
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
      <div style="font-size:.82rem;color:#64748b;margin:-4px 0 8px">${escapeHtml(group.country)}</div>
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
  function buildCard(d) {
    const card = document.createElement('article');
    card.className = 'card';

    const climate = d.climate || {};
    const rainClass = `badge-rain-${climate.rainfall_level || 'low'}`;

    card.innerHTML = `
      <div class="card-header">
        <h2 class="card-country">${escapeHtml(d.country)}</h2>
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
