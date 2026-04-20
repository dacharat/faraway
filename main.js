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

  // City coordinates [lat, lng] — keyed by the normalized city label found
  // in best_cities_or_regions. Any city missing here falls back to its
  // country centroid so we never lose a destination.
  const CITY_COORDS = {
    // Thailand
    'Bangkok': [13.76, 100.50], 'Chiang Mai': [18.79, 98.99], 'Krabi': [8.08, 98.91], 'Koh Lanta': [7.63, 99.08], 'Railay': [8.01, 98.84],
    // Argentina
    'Buenos Aires': [-34.61, -58.38], 'El Calafate': [-50.34, -72.26], 'El Chaltén': [-49.33, -72.89], 'Bariloche': [-41.13, -71.31],
    'Mendoza': [-32.89, -68.84], 'Península Valdés': [-42.50, -64.00], 'Salta': [-24.78, -65.41], 'Iguazú Falls': [-25.69, -54.44],
    // Japan
    'Niseko': [42.80, 140.69], 'Furano': [43.34, 142.38], 'Sapporo': [43.07, 141.35], 'Hakuba': [36.70, 137.85],
    'Tokyo': [35.68, 139.69], 'Kyoto': [35.01, 135.77], 'Osaka': [34.69, 135.50], 'Nara': [34.68, 135.80],
    'Hirosaki': [40.60, 140.46], 'Takayama': [36.14, 137.25], 'Aomori': [40.82, 140.74], 'Tokushima': [34.07, 134.55],
    'Nikko': [36.72, 139.70], 'Kamikochi': [36.25, 137.62], 'Hokkaido': [43.22, 142.86],
    // Costa Rica
    'Manuel Antonio': [9.39, -84.14], 'Monteverde': [10.30, -84.82], 'La Fortuna': [10.47, -84.64], 'Tamarindo': [10.30, -85.84],
    // New Zealand
    'Queenstown': [-45.03, 168.66], 'Wanaka': [-44.70, 169.14], 'Abel Tasman': [-40.99, 173.02], 'Rotorua': [-38.14, 176.25],
    'Milford Sound': [-44.67, 167.92], 'Bay of Islands': [-35.22, 174.08], 'Wellington': [-41.29, 174.78],
    // Tanzania
    'Ndutu': [-3.06, 34.85], 'Ngorongoro Crater': [-3.16, 35.55], 'Zanzibar': [-6.13, 39.31], 'Arusha': [-3.37, 36.68],
    'Northern Serengeti': [-1.89, 34.83], 'Grumeti Reserve': [-2.12, 34.24],
    // Mexico
    'Oaxaca': [17.06, -96.72], 'Mexico City': [19.43, -99.13], 'Yucatán': [20.71, -89.09], 'Baja California Sur': [26.04, -111.67],
    'Mérida': [20.97, -89.62], 'San Miguel de Allende': [20.91, -100.74],
    // Norway
    'Tromsø': [69.65, 18.96], 'Lofoten Islands': [68.15, 13.80], 'Alta': [69.97, 23.27], 'Senja': [69.35, 17.00],
    // Vietnam
    'Hoi An': [15.88, 108.33], 'Ho Chi Minh City': [10.82, 106.63], 'Mekong Delta': [10.02, 105.78], 'Phu Quoc': [10.22, 103.96],
    'Da Nang': [16.05, 108.21], 'Hanoi': [21.03, 105.85], 'Ha Long Bay': [20.91, 107.18], 'Sapa': [22.34, 103.84],
    // Brazil
    'Rio de Janeiro': [-22.91, -43.17], 'Salvador': [-12.97, -38.51], 'Olinda': [-8.01, -34.86], 'São Paulo': [-23.55, -46.63],
    'Manaus': [-3.12, -60.02], 'Pantanal': [-16.30, -56.60],
    // Australia
    'Sydney': [-33.87, 151.21], 'Tasmania': [-41.64, 146.32], 'Port Douglas': [-16.48, 145.47], 'Melbourne': [-37.81, 144.96],
    'Uluru': [-25.34, 131.04], 'Cairns': [-16.92, 145.77],
    // Jordan
    'Petra': [30.33, 35.44], 'Wadi Rum': [29.57, 35.42], 'Amman': [31.95, 35.93], 'Dead Sea': [31.56, 35.47],
    // South Africa
    'Cape Town': [-33.92, 18.42], 'Kruger National Park': [-24.00, 31.50], 'Stellenbosch': [-33.94, 18.88], 'Garden Route': [-33.97, 22.45],
    // Iceland
    'Reykjavík': [64.14, -21.89], 'South Coast': [63.43, -19.36], 'Snæfellsnes Peninsula': [64.82, -23.78], 'Jökulsárlón': [64.05, -16.18],
    'Westfjords': [65.93, -23.16], 'Akureyri': [65.68, -18.09], 'Highlands': [64.63, -18.30],
    // Sri Lanka
    'Kandy': [7.29, 80.64], 'Ella': [6.87, 81.05], 'Galle': [6.04, 80.22], 'Yala National Park': [6.36, 81.52],
    // Netherlands
    'Amsterdam': [52.37, 4.90], 'Keukenhof': [52.27, 4.55], 'Rotterdam': [51.92, 4.48], 'The Hague': [52.08, 4.31],
    // Peru
    'Cusco': [-13.53, -71.97], 'Machu Picchu': [-13.16, -72.55], 'Sacred Valley': [-13.32, -72.08], 'Arequipa': [-16.40, -71.54],
    'Colca Canyon': [-15.60, -71.80], 'Lake Titicaca': [-15.50, -69.75],
    // Bhutan
    'Paro': [27.43, 89.42], 'Thimphu': [27.47, 89.64], 'Punakha': [27.59, 89.86], 'Bumthang': [27.56, 90.75],
    // Italy
    'Rome': [41.90, 12.50], 'Amalfi Coast': [40.63, 14.60], 'Florence': [43.77, 11.25], 'Puglia': [40.79, 17.10],
    'Tuscany': [43.32, 11.33], 'Venice': [45.44, 12.32],
    // Botswana
    'Okavango Delta': [-19.28, 22.89], 'Chobe National Park': [-18.78, 24.66], 'Moremi Game Reserve': [-19.28, 23.57], 'Makgadikgadi Pans': [-20.80, 25.20],
    // France
    'Paris': [48.85, 2.35], 'French Riviera': [43.70, 7.27], 'Provence': [43.95, 4.80], 'Loire Valley': [47.47, 0.50],
    // Indonesia
    'Bali': [-8.34, 115.09], 'Yogyakarta': [-7.80, 110.36], 'Komodo': [-8.55, 119.49], 'Lombok': [-8.65, 116.32],
    'Nusa Penida': [-8.73, 115.54], 'Gili Islands': [-8.35, 116.04], 'Komodo National Park': [-8.55, 119.49],
    // Canada
    'Vancouver': [49.28, -123.12], 'Banff': [51.18, -115.57], 'Lake Louise': [51.43, -116.18], 'Quebec City': [46.81, -71.21],
    'Québec City': [46.81, -71.21], 'Niagara': [43.09, -79.08], 'Jasper': [52.87, -118.08], 'Montréal': [45.50, -73.57],
    // Kenya
    'Masai Mara': [-1.48, 35.14], 'Amboseli': [-2.65, 37.26], 'Samburu': [0.62, 37.54], 'Lamu': [-2.27, 40.90],
    // Slovenia
    'Ljubljana': [46.06, 14.51], 'Lake Bled': [46.37, 14.11], 'Soča Valley': [46.25, 13.73], 'Piran': [45.53, 13.57],
    // Mongolia
    'Ulaanbaatar': [47.89, 106.91], 'Gobi Desert': [42.80, 103.00], 'Terelj National Park': [47.98, 107.47],
    'Khövsgöl Lake': [50.50, 100.30], 'Kharkhorin': [47.20, 102.83],
    // Greece
    'Santorini': [36.39, 25.46], 'Crete': [35.24, 24.81], 'Milos': [36.75, 24.42], 'Athens': [37.98, 23.73],
    // Spain
    'Valencia': [39.47, -0.38], 'Buñol': [39.42, -0.79], 'San Sebastián': [43.32, -1.98], 'Mallorca': [39.70, 2.99], 'Barcelona': [41.39, 2.17],
    // Switzerland
    'Jungfrau Region': [46.54, 7.98], 'Zermatt': [46.02, 7.75], 'Lucerne': [47.05, 8.31], 'Engadine': [46.50, 9.84],
    // US
    'Denali National Park': [63.33, -150.50], 'Kenai Fjords': [59.88, -149.90], 'Katmai': [58.50, -155.00], 'Anchorage': [61.22, -149.90],
    'Vermont': [44.56, -72.58], 'White Mountains': [44.27, -71.30], 'Acadia': [44.35, -68.20], 'Upstate New York': [43.00, -75.00],
    // Turkey
    'Istanbul': [41.01, 28.98], 'Cappadocia': [38.65, 34.83], 'Ephesus': [37.94, 27.34], 'Antalya': [36.90, 30.69], 'Pamukkale': [37.92, 29.12],
    // Rwanda
    'Volcanoes National Park': [-1.48, 29.49], 'Kigali': [-1.94, 30.06], 'Nyungwe Forest': [-2.47, 29.15], 'Lake Kivu': [-2.04, 29.17],
    // Nepal
    'Kathmandu': [27.71, 85.32], 'Kathmandu Valley': [27.71, 85.32], 'Annapurna region': [28.60, 83.82],
    'Khumbu region': [27.95, 86.80], 'Upper Mustang': [29.18, 83.97], 'Pokhara': [28.21, 83.98],
    'Everest Base Camp': [28.00, 86.85], 'Annapurna Circuit': [28.60, 84.00],
    // Germany
    'Munich': [48.14, 11.58], 'Berlin': [52.52, 13.40], 'Romantic Road': [49.37, 10.18], 'Black Forest': [48.00, 8.25],
    'Nuremberg': [49.45, 11.08], 'Dresden': [51.05, 13.74], 'Cologne': [50.94, 6.96],
    // Namibia
    'Etosha National Park': [-18.85, 16.33], 'Sossusvlei': [-24.76, 15.29], 'Swakopmund': [-22.68, 14.53], 'Damaraland': [-20.50, 14.50],
    // Oman
    'Muscat': [23.59, 58.41], 'Wahiba Sands': [22.02, 58.88], 'Jebel Akhdar': [23.05, 57.66], 'Musandam Peninsula': [26.20, 56.25],
    // India
    'Jaipur': [26.92, 75.79], 'Rajasthan': [27.02, 74.22], 'Varanasi': [25.32, 83.01], 'Delhi': [28.61, 77.21], 'Kerala backwaters': [9.50, 76.34],
    // Finland
    'Rovaniemi': [66.50, 25.73], 'Levi': [67.80, 24.82], 'Helsinki': [60.17, 24.94], 'Saariselkä': [68.42, 27.43],
    // Ethiopia
    'Lalibela': [12.03, 39.04], 'Gondar': [12.60, 37.47], 'Simien Mountains': [13.18, 38.03], 'Addis Ababa': [9.03, 38.74]
  };

  // Country centroid fallback for cities we don't have in CITY_COORDS.
  const COUNTRY_COORDS = {
    'Thailand': [15.87, 100.99],
    'Argentina': [-38.42, -63.62],
    'Japan': [36.20, 138.25],
    'Costa Rica': [9.75, -83.75],
    'New Zealand': [-41.0, 174.0],
    'Tanzania': [-6.37, 34.89],
    'Mexico': [23.63, -102.55],
    'Norway': [60.47, 8.47],
    'Vietnam': [14.06, 108.28],
    'Brazil': [-14.24, -51.92],
    'Australia': [-25.27, 133.78],
    'Jordan': [30.59, 36.24],
    'South Africa': [-30.56, 22.94],
    'Iceland': [64.96, -19.02],
    'Sri Lanka': [7.87, 80.77],
    'Netherlands': [52.13, 5.29],
    'Peru': [-9.19, -75.02],
    'Bhutan': [27.51, 90.43],
    'Italy': [41.87, 12.57],
    'Botswana': [-22.33, 24.68],
    'France': [46.23, 2.21],
    'Indonesia': [-0.79, 113.92],
    'Canada': [56.13, -106.35],
    'Kenya': [-0.02, 37.91],
    'Slovenia': [46.15, 14.99],
    'Mongolia': [46.86, 103.85],
    'Greece': [39.07, 21.82],
    'Spain': [40.46, -3.75],
    'Switzerland': [46.82, 8.23],
    'United States': [39.83, -98.58],
    'Turkey': [38.96, 35.24],
    'Rwanda': [-1.94, 29.87],
    'Nepal': [28.39, 84.12],
    'Germany': [51.17, 10.45],
    'Namibia': [-22.96, 18.49],
    'Oman': [21.47, 55.98],
    'India': [20.59, 78.96],
    'Finland': [61.92, 25.75],
    'Ethiopia': [9.15, 40.49]
  };

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
