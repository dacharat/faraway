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
    'Japan': '🇯🇵', 'Jordan': '🇯🇴', 'Kenya': '🇰🇪', 'Kyrgyzstan': '🇰🇬',
    'Laos': '🇱🇦', 'Malaysia': '🇲🇾',
    'Maldives': '🇲🇻', 'Malta': '🇲🇹', 'Mexico': '🇲🇽', 'Mongolia': '🇲🇳',
    'Morocco': '🇲🇦', 'Myanmar': '🇲🇲', 'Namibia': '🇳🇦', 'Nepal': '🇳🇵',
    'Netherlands': '🇳🇱', 'New Zealand': '🇳🇿', 'Norway': '🇳🇴', 'Oman': '🇴🇲',
    'Peru': '🇵🇪', 'Philippines': '🇵🇭', 'Poland': '🇵🇱', 'Portugal': '🇵🇹',
    'Russia': '🇷🇺', 'Rwanda': '🇷🇼',
    'Scotland': '🏴\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}',
    'Slovenia': '🇸🇮', 'South Africa': '🇿🇦', 'South Korea': '🇰🇷',
    'Spain': '🇪🇸', 'Sri Lanka': '🇱🇰', 'Sweden': '🇸🇪', 'Switzerland': '🇨🇭',
    'Taiwan': '🇹🇼', 'Tanzania': '🇹🇿', 'Thailand': '🇹🇭', 'Turkey': '🇹🇷',
    'United Arab Emirates': '🇦🇪', 'United States': '🇺🇸', 'Vietnam': '🇻🇳'
  };

  function flagFor(country) {
    return COUNTRY_FLAGS[country] || '';
  }

  // Country → continent. Transcontinental countries (Russia, Turkey, Georgia)
  // are bucketed into the continent travellers most commonly associate them
  // with — Russia → Europe (most tourist-relevant regions are European);
  // Turkey & Georgia → Asia.
  const COUNTRY_CONTINENT = {
    'Argentina': 'South America', 'Australia': 'Oceania', 'Austria': 'Europe',
    'Belgium': 'Europe', 'Belize': 'North America', 'Bhutan': 'Asia',
    'Botswana': 'Africa', 'Brazil': 'South America', 'Cambodia': 'Asia',
    'Canada': 'North America', 'Chile': 'South America', 'China': 'Asia',
    'Colombia': 'South America', 'Costa Rica': 'North America',
    'Croatia': 'Europe', 'Cuba': 'North America', 'Czech Republic': 'Europe',
    'Denmark': 'Europe', 'Egypt': 'Africa', 'England': 'Europe',
    'Ethiopia': 'Africa', 'Finland': 'Europe', 'France': 'Europe',
    'Georgia': 'Asia', 'Germany': 'Europe', 'Greece': 'Europe',
    'Hungary': 'Europe', 'Iceland': 'Europe', 'India': 'Asia',
    'Indonesia': 'Asia', 'Ireland': 'Europe', 'Italy': 'Europe',
    'Japan': 'Asia', 'Jordan': 'Asia', 'Kenya': 'Africa',
    'Kyrgyzstan': 'Asia', 'Laos': 'Asia', 'Malaysia': 'Asia',
    'Maldives': 'Asia', 'Malta': 'Europe', 'Mexico': 'North America',
    'Mongolia': 'Asia', 'Morocco': 'Africa', 'Myanmar': 'Asia',
    'Namibia': 'Africa', 'Nepal': 'Asia', 'Netherlands': 'Europe',
    'New Zealand': 'Oceania', 'Norway': 'Europe', 'Oman': 'Asia',
    'Peru': 'South America', 'Philippines': 'Asia', 'Poland': 'Europe',
    'Portugal': 'Europe', 'Russia': 'Europe', 'Rwanda': 'Africa',
    'Scotland': 'Europe', 'Slovenia': 'Europe', 'South Africa': 'Africa',
    'South Korea': 'Asia', 'Spain': 'Europe', 'Sri Lanka': 'Asia',
    'Sweden': 'Europe', 'Switzerland': 'Europe', 'Taiwan': 'Asia',
    'Tanzania': 'Africa', 'Thailand': 'Asia', 'Turkey': 'Asia',
    'United Arab Emirates': 'Asia', 'United States': 'North America',
    'Vietnam': 'Asia'
  };
  const CONTINENTS = ['Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania'];
  function continentOf(country) {
    return COUNTRY_CONTINENT[country] || null;
  }

  // City + country coordinates live in data.js (TRAVEL_DATA.city_coords /
  // TRAVEL_DATA.country_coords) so the dataset and its geo-lookups stay
  // together. Adding a new destination means editing only data.js.
  const CITY_COORDS = (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA.city_coords) || {};
  const COUNTRY_COORDS = (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA.country_coords) || {};


  // ---- App state ----------------------------------------------------------
  const state = {
    view: 'list',                          // 'list' | 'map' | 'search' | 'saved'
    month: MONTHS[new Date().getMonth()],  // default = current month
    continent: 'all',
    budget: 'all',
    crowd: 'all',
    styles: new Set(), // multi-select
    searchQuery: '',
    selectedPlace: null,                   // { type: 'country'|'city', name, country }
    expanded: new Set(),                   // card ids that are expanded (per session)
    saved: new Set()                       // saved entry ids, persisted to localStorage
  };

  // Stable id for an entry — month + country uniquely identifies it given the
  // smart-merge invariant that {month, country} pairs are unique in TRAVEL_DATA.
  function entryId(entry, month) {
    return (month || entry.month || '') + '|' + (entry.country || '');
  }

  // ---- Saved trips (localStorage) ---------------------------------------
  const SAVED_KEY = 'faraway-saved';
  function loadSaved() {
    try {
      const raw = localStorage.getItem(SAVED_KEY);
      if (!raw) return;
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) state.saved = new Set(arr);
    } catch (_) { /* ignore */ }
  }
  function persistSaved() {
    try { localStorage.setItem(SAVED_KEY, JSON.stringify(Array.from(state.saved))); }
    catch (_) { /* ignore */ }
  }
  function toggleSaved(id) {
    if (state.saved.has(id)) state.saved.delete(id);
    else state.saved.add(id);
    persistSaved();
    updateSavedBadge();
  }
  function updateSavedBadge() {
    const el = document.getElementById('bnSavedCount');
    if (!el) return;
    if (state.saved.size > 0) {
      el.textContent = String(state.saved.size);
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  }

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

  const filtersSectionEl = document.getElementById('filtersSection');
  const filterToggleBtn = document.getElementById('filterToggleBtn');
  const filterCountBadgeEl = document.getElementById('filterCountBadge');

  // ---- URL state sync ----------------------------------------------------
  // Read state from URLSearchParams on init; write on every render via
  // history.replaceState so refreshing/sharing the URL preserves filters.
  let _suppressUrlWrite = false;
  function readUrlState() {
    _suppressUrlWrite = true;
    try {
      const u = new URLSearchParams(window.location.search);
      const view = u.get('view');
      if (view && ['list','map','search','saved'].includes(view)) state.view = view;
      const month = u.get('month');
      if (month && (month === 'All' || MONTHS.includes(month))) state.month = month;
      const cont = u.get('continent');
      if (cont) state.continent = cont;
      const bud = u.get('budget');
      if (bud) state.budget = bud;
      const crowd = u.get('crowd');
      if (crowd) state.crowd = crowd;
      const styles = u.get('styles');
      if (styles) styles.split(',').forEach(s => { if (s) state.styles.add(s); });
      const q = u.get('q');
      if (q) state.searchQuery = q;
    } finally {
      _suppressUrlWrite = false;
    }
  }
  function syncUrlState() {
    if (_suppressUrlWrite) return;
    const u = new URLSearchParams();
    if (state.view !== 'list') u.set('view', state.view);
    if (state.month !== MONTHS[new Date().getMonth()]) u.set('month', state.month);
    if (state.continent !== 'all') u.set('continent', state.continent);
    if (state.budget !== 'all') u.set('budget', state.budget);
    if (state.crowd !== 'all') u.set('crowd', state.crowd);
    if (state.styles.size > 0) u.set('styles', Array.from(state.styles).join(','));
    if (state.view === 'search' && state.searchQuery) u.set('q', state.searchQuery);
    const qs = u.toString();
    const url = qs ? '?' + qs : window.location.pathname;
    try { history.replaceState(null, '', url); } catch (_) {}
  }
  function applyUrlStateToUi() {
    // Sync existing pill rows to whatever was loaded
    document.querySelectorAll('[data-filter="continent"] .pill').forEach(p =>
      p.classList.toggle('active', p.dataset.value === state.continent));
    document.querySelectorAll('[data-filter="budget"] .pill').forEach(p =>
      p.classList.toggle('active', p.dataset.value === state.budget));
    document.querySelectorAll('[data-filter="crowd"] .pill').forEach(p =>
      p.classList.toggle('active', p.dataset.value === state.crowd));
    document.querySelectorAll('#styleFilter .pill').forEach(p =>
      p.classList.toggle('active', state.styles.has(p.dataset.value)));
  }

  // ---- Init ---------------------------------------------------------------
  function init() {
    readUrlState();
    loadSaved();
    buildMonthTabs();
    buildStyleFilter();
    bindFilterPills();
    bindClearButton();
    bindViewToggle();
    bindThemeToggle();
    bindFilterToggle();
    bindMobileTopbar();
    bindMonthPicker();
    bindBottomNav();
    bindFilterSheet();
    bindDesktopToolbar();
    buildSearchIndex();
    bindSearch();
    applyUrlStateToUi();
    updateMobileMonthLabel();
    updateSavedBadge();
    if (state.view !== 'list') {
      // Use setView to mirror the default initialisation flow for non-list views
      setView(state.view);
    } else {
      render();
    }
  }

  // ---- Mobile topbar ------------------------------------------------------
  function bindMobileTopbar() {
    const mtTheme = document.getElementById('mtThemeToggleBtn');
    if (mtTheme) {
      mtTheme.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('faraway-theme', next); } catch (_) {}
        updateThemeToggleUi();
      });
    }
    const mtMonth = document.getElementById('mtMonthBtn');
    if (mtMonth) mtMonth.addEventListener('click', openMonthPicker);
    const mtFilters = document.getElementById('mtFiltersBtn');
    if (mtFilters) mtFilters.addEventListener('click', openFilterSheet);
  }

  function updateMobileMonthLabel() {
    const lbl = document.getElementById('mtMonthLabel');
    if (!lbl) return;
    lbl.textContent = state.month === 'All' ? 'All months' : state.month;
  }

  // ---- Month picker (mobile) ---------------------------------------------
  function bindMonthPicker() {
    const picker = document.getElementById('monthPicker');
    if (!picker) return;
    const grid = document.getElementById('monthPickerGrid');
    const buildBtn = (label, value) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.dataset.month = value;
      if (value === state.month) b.classList.add('active');
      b.addEventListener('click', () => {
        selectMonth(value);
        updateMobileMonthLabel();
        closeMonthPicker();
      });
      return b;
    };
    grid.appendChild(buildBtn('All', 'All'));
    MONTHS.forEach(m => grid.appendChild(buildBtn(m.slice(0, 3), m)));
    picker.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener('click', closeMonthPicker);
    });
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && !picker.hidden) closeMonthPicker();
    });
  }
  function openMonthPicker() {
    const picker = document.getElementById('monthPicker');
    if (!picker) return;
    picker.hidden = false;
    const grid = document.getElementById('monthPickerGrid');
    grid.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.dataset.month === state.month);
    });
    document.getElementById('mtMonthBtn').setAttribute('aria-expanded', 'true');
  }
  function closeMonthPicker() {
    const picker = document.getElementById('monthPicker');
    if (!picker) return;
    picker.hidden = true;
    document.getElementById('mtMonthBtn').setAttribute('aria-expanded', 'false');
  }

  // ---- Bottom nav --------------------------------------------------------
  function bindBottomNav() {
    const nav = document.getElementById('bottomNav');
    if (!nav) return;
    nav.querySelectorAll('.bn-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.view;
        if (v) setView(v);
      });
    });
  }
  function updateBottomNav(view) {
    const nav = document.getElementById('bottomNav');
    if (!nav) return;
    nav.querySelectorAll('.bn-btn').forEach(btn => {
      const active = btn.dataset.view === view;
      if (active) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    });
  }

  // ---- Desktop toolbar (≥640px) ------------------------------------------
  let activePopover = null;

  function bindDesktopToolbar() {
    // View tabs
    document.querySelectorAll('.dt-view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.view;
        if (v) setView(v);
      });
    });
    // Theme toggle (desktop toolbar variant)
    const dtTheme = document.getElementById('dtThemeToggleBtn');
    if (dtTheme) {
      dtTheme.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('faraway-theme', next); } catch (_) {}
        updateThemeToggleUi();
      });
    }
    // Popover triggers
    document.querySelectorAll('.dt-pop-btn').forEach(btn => {
      btn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const kind = btn.dataset.pop;
        if (activePopover && activePopover.kind === kind) closePopover();
        else openPopover(kind, btn);
      });
    });
    // Clear-all chip
    const clearAll = document.getElementById('dtClearAll');
    if (clearAll) clearAll.addEventListener('click', () => {
      state.continent = 'all'; state.budget = 'all'; state.crowd = 'all';
      state.styles.clear();
      // Sync original pill rows so legacy filter section stays consistent
      document.querySelectorAll(
        '[data-filter="continent"] .pill, [data-filter="budget"] .pill, [data-filter="crowd"] .pill'
      ).forEach(p => p.classList.toggle('active', p.dataset.value === 'all'));
      document.querySelectorAll('#styleFilter .pill').forEach(p => p.classList.remove('active'));
      render();
    });
    // Outside click + Esc close
    document.addEventListener('click', (ev) => {
      if (!activePopover) return;
      if (ev.target.closest('.dt-popover')) return;
      if (ev.target.closest('.dt-pop-btn')) return;
      closePopover();
    });
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && activePopover) closePopover();
    });
  }

  function openPopover(kind, anchorBtn) {
    closePopover();
    const pop = document.createElement('div');
    pop.className = 'dt-popover';
    pop.dataset.kind = kind;
    let inner = '';
    if (kind === 'month') {
      inner = `<h4 class="dt-popover-title">Month</h4><div class="month-grid" id="dtMonthGrid"></div>`;
    } else if (kind === 'continent') {
      inner = `<h4 class="dt-popover-title">Continent</h4><div class="pill-row" id="dtContinentPills"></div>`;
    } else if (kind === 'budget') {
      inner = `<h4 class="dt-popover-title">Budget</h4><div class="pill-row" id="dtBudgetPills"></div>`;
    } else if (kind === 'styles') {
      inner = `<h4 class="dt-popover-title">Travel style (pick any)</h4><div class="pill-row" id="dtStylesPills"></div>`;
    }
    pop.innerHTML = inner;
    document.body.appendChild(pop);
    // Position below anchor
    const r = anchorBtn.getBoundingClientRect();
    pop.style.left = Math.min(r.left, window.innerWidth - 280) + 'px';
    pop.style.top = (r.bottom + window.scrollY + 6) + 'px';
    populatePopover(kind, pop);
    anchorBtn.setAttribute('aria-expanded', 'true');
    activePopover = { kind, el: pop, anchor: anchorBtn };
  }

  function closePopover() {
    if (!activePopover) return;
    activePopover.anchor.setAttribute('aria-expanded', 'false');
    activePopover.el.remove();
    activePopover = null;
  }

  function populatePopover(kind, pop) {
    if (kind === 'month') {
      const grid = pop.querySelector('#dtMonthGrid');
      const mkBtn = (label, value) => {
        const b = document.createElement('button');
        b.type = 'button'; b.textContent = label; b.dataset.month = value;
        if (value === state.month) b.classList.add('active');
        b.addEventListener('click', () => { selectMonth(value); closePopover(); });
        return b;
      };
      grid.appendChild(mkBtn('All', 'All'));
      MONTHS.forEach(m => grid.appendChild(mkBtn(m.slice(0, 3), m)));
    } else if (kind === 'continent') {
      const row = pop.querySelector('#dtContinentPills');
      [['all','All'], ['Asia','🌏 Asia'], ['Europe','🏰 Europe'], ['Africa','🦁 Africa'],
       ['North America','🌎 N. America'], ['South America','🗿 S. America'], ['Oceania','🏝️ Oceania']
      ].forEach(([v,l]) => {
        const b = document.createElement('button');
        b.className = 'pill' + (state.continent === v ? ' active' : '');
        b.textContent = l;
        b.addEventListener('click', () => {
          state.continent = v;
          // Sync the legacy pill row in #continentFilter
          document.querySelectorAll('[data-filter="continent"] .pill').forEach(p => {
            p.classList.toggle('active', p.dataset.value === v);
          });
          render(); closePopover();
        });
        row.appendChild(b);
      });
    } else if (kind === 'budget') {
      const row = pop.querySelector('#dtBudgetPills');
      [['all','All'], ['budget','Budget · $0–80'], ['mid-range','Mid-range · $80–200'], ['luxury','Luxury · $200+']]
        .forEach(([v,l]) => {
          const b = document.createElement('button');
          b.className = 'pill' + (state.budget === v ? ' active' : '');
          b.textContent = l;
          b.addEventListener('click', () => {
            state.budget = v;
            document.querySelectorAll('[data-filter="budget"] .pill').forEach(p => {
              p.classList.toggle('active', p.dataset.value === v);
            });
            render(); closePopover();
          });
          row.appendChild(b);
        });
    } else if (kind === 'styles') {
      const row = pop.querySelector('#dtStylesPills');
      TRAVEL_STYLES.forEach(s => {
        const b = document.createElement('button');
        b.className = 'pill' + (state.styles.has(s) ? ' active' : '');
        b.textContent = s;
        b.style.textTransform = 'capitalize';
        b.addEventListener('click', () => {
          if (state.styles.has(s)) state.styles.delete(s); else state.styles.add(s);
          b.classList.toggle('active');
          // Sync legacy style pills
          document.querySelectorAll('#styleFilter .pill').forEach(p => {
            p.classList.toggle('active', state.styles.has(p.dataset.value));
          });
          render();
        });
        row.appendChild(b);
      });
    }
  }

  function updateDesktopToolbar() {
    // Labels
    const mLbl = document.getElementById('dtMonthLabel');
    if (mLbl) mLbl.textContent = state.month === 'All' ? 'All months' : state.month;
    const cLbl = document.getElementById('dtContinentLabel');
    if (cLbl) cLbl.textContent = state.continent === 'all' ? 'Continent' : state.continent;
    const bLbl = document.getElementById('dtBudgetLabel');
    if (bLbl) bLbl.textContent = state.budget === 'all' ? 'Budget' : capitalize(state.budget);
    const sCount = document.getElementById('dtStylesCount');
    if (sCount) {
      if (state.styles.size > 0) { sCount.textContent = String(state.styles.size); sCount.hidden = false; }
      else sCount.hidden = true;
    }
    // has-value styling
    document.querySelectorAll('.dt-pop-btn').forEach(btn => {
      const k = btn.dataset.pop;
      let active = false;
      if (k === 'continent') active = state.continent !== 'all';
      else if (k === 'budget') active = state.budget !== 'all';
      else if (k === 'styles') active = state.styles.size > 0;
      else if (k === 'month') active = state.month !== MONTHS[new Date().getMonth()] && state.month !== 'All';
      btn.classList.toggle('has-value', active);
    });
    // View tabs
    document.querySelectorAll('.dt-view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === state.view);
      btn.setAttribute('aria-selected', btn.dataset.view === state.view);
    });
    // Saved count
    const sc = document.getElementById('dtSavedCount');
    if (sc) {
      if (state.saved.size > 0) { sc.textContent = String(state.saved.size); sc.hidden = false; }
      else sc.hidden = true;
    }
  }

  function renderActiveChips(items) {
    const row = document.getElementById('activeChips');
    const summary = document.getElementById('dtSummary');
    const chipsEl = document.getElementById('dtActiveChips');
    const clearBtn2 = document.getElementById('dtClearAll');
    if (!row || !chipsEl) return;

    const chips = [];
    if (state.continent !== 'all')
      chips.push({ label: state.continent, clear: () => { state.continent='all';
        document.querySelectorAll('[data-filter="continent"] .pill').forEach(p => p.classList.toggle('active', p.dataset.value === 'all')); render(); } });
    if (state.budget !== 'all')
      chips.push({ label: capitalize(state.budget), clear: () => { state.budget='all';
        document.querySelectorAll('[data-filter="budget"] .pill').forEach(p => p.classList.toggle('active', p.dataset.value === 'all')); render(); } });
    if (state.crowd !== 'all')
      chips.push({ label: capitalize(state.crowd) + ' crowds', clear: () => { state.crowd='all';
        document.querySelectorAll('[data-filter="crowd"] .pill').forEach(p => p.classList.toggle('active', p.dataset.value === 'all')); render(); } });
    state.styles.forEach(s => chips.push({ label: capitalize(s), clear: () => {
      state.styles.delete(s);
      document.querySelectorAll('#styleFilter .pill').forEach(p => p.classList.toggle('active', state.styles.has(p.dataset.value))); render();
    }}));

    chipsEl.innerHTML = '';
    chips.forEach(c => {
      const b = document.createElement('button');
      b.className = 'dt-active-chip';
      b.type = 'button';
      b.innerHTML = `${escapeHtml(c.label)} <span aria-hidden="true">✕</span>`;
      b.addEventListener('click', c.clear);
      chipsEl.appendChild(b);
    });

    // Summary text
    const items_ = items || [];
    const seasonCounts = { high: 0, shoulder: 0, low: 0 };
    items_.forEach(d => { if (seasonCounts[d.season_type] !== undefined) seasonCounts[d.season_type]++; });
    const cost = (() => {
      let minSum=0, maxSum=0, n=0;
      items_.forEach(d => { const r = parseCostRange(d.estimated_daily_cost_usd); if (r) { minSum+=r.min; maxSum+=r.max; n++; }});
      return n ? `$${Math.round(minSum/n)}–$${Math.round(maxSum/n)}/day` : '—';
    })();
    if (summary) summary.innerHTML = `<strong>${items_.length}</strong> destinations · avg <strong>${cost}</strong> · ${seasonCounts.high} high · ${seasonCounts.shoulder} shoulder · ${seasonCounts.low} low season`;

    if (clearBtn2) clearBtn2.hidden = chips.length === 0;
    row.hidden = false;
  }

  // ---- Filter sheet (mobile) ---------------------------------------------
  function bindFilterSheet() {
    const closeBtn = document.getElementById('filterSheetCloseBtn');
    const applyBtn = document.getElementById('filterSheetApplyBtn');
    const backdrop = document.getElementById('filterBackdrop');
    if (closeBtn) closeBtn.addEventListener('click', closeFilterSheet);
    if (applyBtn) applyBtn.addEventListener('click', closeFilterSheet);
    if (backdrop) backdrop.addEventListener('click', closeFilterSheet);
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && filtersSectionEl && filtersSectionEl.classList.contains('open')) {
        closeFilterSheet();
      }
    });
  }
  let _sheetReturnFocus = null;
  function openFilterSheet() {
    if (!filtersSectionEl) return;
    _sheetReturnFocus = document.activeElement;
    filtersSectionEl.classList.add('open');
    const bd = document.getElementById('filterBackdrop');
    if (bd) bd.classList.add('open');
    const btn = document.getElementById('mtFiltersBtn');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    // Move focus into the sheet for screen readers
    const close = document.getElementById('filterSheetCloseBtn');
    if (close) close.focus();
  }
  function closeFilterSheet() {
    if (!filtersSectionEl) return;
    filtersSectionEl.classList.remove('open');
    const bd = document.getElementById('filterBackdrop');
    if (bd) bd.classList.remove('open');
    const btn = document.getElementById('mtFiltersBtn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (_sheetReturnFocus && typeof _sheetReturnFocus.focus === 'function') {
      _sheetReturnFocus.focus();
    }
    _sheetReturnFocus = null;
  }

  // ---- Filter panel collapse (mobile) ------------------------------------
  // On narrow viewports the filter bar is collapsed behind a "Filters" button
  // with an active-count badge. On desktop the button is hidden and the full
  // panel renders inline (see CSS @media query).
  function bindFilterToggle() {
    if (!filterToggleBtn || !filtersSectionEl) return;
    filterToggleBtn.addEventListener('click', () => {
      const open = filtersSectionEl.classList.toggle('open');
      filterToggleBtn.setAttribute('aria-expanded', String(open));
    });
    updateFilterCountBadge();
  }

  function updateFilterCountBadge() {
    let n = 0;
    if (state.continent !== 'all') n++;
    if (state.budget !== 'all') n++;
    if (state.crowd !== 'all') n++;
    n += state.styles.size;
    const setBadge = (el) => {
      if (!el) return;
      if (n > 0) { el.textContent = String(n); el.hidden = false; }
      else el.hidden = true;
    };
    setBadge(filterCountBadgeEl);
    setBadge(document.getElementById('mtFilterCountBadge'));
  }
  function updateFilterSheetCount(n) {
    const el = document.getElementById('filterSheetCount');
    if (el) el.textContent = String(n);
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
    const isList = view === 'list' || view === 'saved';
    viewListBtn.classList.toggle('active', isList);
    viewMapBtn.classList.toggle('active', view === 'map');
    viewSearchBtn.classList.toggle('active', view === 'search');
    viewListBtn.setAttribute('aria-selected', isList);
    viewMapBtn.setAttribute('aria-selected', view === 'map');
    viewSearchBtn.setAttribute('aria-selected', view === 'search');
    updateBottomNav(view);

    // Month tabs apply to list/map/saved; Search has its own input.
    monthTabsNavEl.hidden = (view === 'search');
    searchPanelEl.hidden = (view !== 'search');
    // Search uses the query as its sole filter — hide the filter bar to
    // keep the view focused. Saved view keeps filters visible to let user
    // narrow their saved list.
    if (filtersSectionEl) filtersSectionEl.hidden = (view === 'search');

    // Mobile topbar (logo / month / filters) is irrelevant in search view —
    // the sticky search panel takes its slot.
    const mt = document.getElementById('mobileTopbar');
    if (mt) mt.hidden = (view === 'search');

    if (view === 'search') {
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
    updateMobileMonthLabel();
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

  // ---- Wire up single-select pill rows (continent + budget + crowd) ------
  function bindFilterPills() {
    document.querySelectorAll(
      '[data-filter="continent"] .pill, [data-filter="budget"] .pill, [data-filter="crowd"] .pill'
    ).forEach(pill => {
      pill.addEventListener('click', () => {
        const row = pill.parentElement;
        const key = row.dataset.filter; // "continent" | "budget" | "crowd"
        row.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state[key] = pill.dataset.value;
        render();
      });
    });
  }

  function bindClearButton() {
    clearBtn.addEventListener('click', () => {
      state.continent = 'all';
      state.budget = 'all';
      state.crowd = 'all';
      state.styles.clear();
      // reset UI
      document.querySelectorAll(
        '[data-filter="continent"] .pill, [data-filter="budget"] .pill, [data-filter="crowd"] .pill'
      ).forEach(p => {
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
      if (state.continent !== 'all' && continentOf(d.country) !== state.continent) return false;
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
    updateFilterCountBadge();
    updateDesktopToolbar();
    syncUrlState();
    if (state.view === 'map') {
      renderMap();
      return;
    }
    if (state.view === 'search') {
      // Hide active chips on search view
      const chipsRow = document.getElementById('activeChips');
      if (chipsRow) chipsRow.hidden = true;
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
    if (state.view === 'saved') {
      renderSaved();
      return;
    }
    setEmptyState('🧭', 'No matches for these filters', 'Try a different month, widen the budget, or clear filters to start over.');
    const entries = getFilteredDestinations();
    updateStats(entries);
    updateFilterSheetCount(entries.length);
    renderActiveChips(entries);
    renderCards(entries.map(e => ({ entry: e, month: state.month === 'All' ? e.month : null })));
  }

  function renderSaved() {
    setEmptyState('♥', 'No saved trips yet',
      'Tap the heart on any destination card to save it here for later.');
    const allMonthsEntries = MONTHS.flatMap(m =>
      ((TRAVEL_DATA.months && TRAVEL_DATA.months[m]) || []).map(e => ({ entry: e, month: m })));
    const saved = allMonthsEntries.filter(x => state.saved.has(entryId(x.entry, x.month)));
    const items = saved.filter(x => applyFilters([x.entry]).length > 0);
    updateStats(items.map(x => x.entry));
    updateFilterSheetCount(items.length);
    renderActiveChips(items.map(x => x.entry));
    renderCards(items);
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
    const isMobile = window.innerWidth <= 639;
    Object.values(byCity).forEach(group => {
      const marker = L.circleMarker(group.coord, {
        radius: (isMobile ? 9 : 5) + Math.min(group.entries.length * 2, 10),
        color: '#ea580c',
        weight: 2,
        fillColor: '#f97316',
        fillOpacity: 0.85
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
        if (state.continent !== 'all' && continentOf(d.country) !== state.continent) return;
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

  // First sentence of why_visit, for the one-line card summary.
  function summarize(text) {
    if (!text) return '';
    const s = String(text).trim();
    // Prefer split on em/en dash, then sentence-end, fall back to first 140 chars.
    const dash = s.split(/\s[—–]\s/)[0];
    if (dash && dash.length < s.length) return dash.trim();
    const sentence = s.split(/(?<=[.!?])\s/)[0];
    if (sentence && sentence.length <= 160) return sentence.trim();
    return s.slice(0, 140).trim() + (s.length > 140 ? '…' : '');
  }

  // ---- Card builder ------------------------------------------------------
  // Two-tier card. Top: country, summary, price, 3 essential tags + Save +
  // Expand. Expanded panel: climate, events, pros/cons, travel styles.
  function buildCard(d, month) {
    const card = document.createElement('article');
    card.className = 'card';

    const eid = entryId(d, month);
    const isSaved = state.saved.has(eid);
    const isExpanded = state.expanded.has(eid);
    if (isExpanded) card.classList.add('expanded');
    card.dataset.eid = eid;

    const climate = d.climate || {};
    const rainClass = `badge-rain-${climate.rainfall_level || 'low'}`;
    const monthBadge = month
      ? `<span class="card-month-badge">📅 ${escapeHtml(month)}</span>`
      : '';

    const summary = summarize(d.why_visit);

    card.innerHTML = `
      ${monthBadge}
      <div class="card-header">
        <div class="card-top">
          <h2 class="card-country"><span class="flag" aria-hidden="true">${flagFor(d.country)}</span>${escapeHtml(d.country)}</h2>
          <span class="card-cost-save">
            <span class="card-cost">$${escapeHtml(d.estimated_daily_cost_usd || '?')}<span class="per">/day</span></span>
            <button class="card-save-btn ${isSaved ? 'saved' : ''}" type="button"
                    aria-label="${isSaved ? 'Remove from saved' : 'Save trip'}"
                    aria-pressed="${isSaved}">♥</button>
          </span>
        </div>
        <div class="card-regions">
          ${(d.best_cities_or_regions || []).slice(0, 3).map(r => `<span class="region-tag">📍 ${escapeHtml(r)}</span>`).join('')}
        </div>
      </div>

      <p class="card-summary">${escapeHtml(summary)}</p>

      <div class="card-essentials">
        <span class="badge badge-${d.budget_category}">💰 ${capitalize(d.budget_category || '')}</span>
        <span class="badge badge-crowd-${d.crowd_level}">👥 ${capitalize(d.crowd_level || '')} crowds</span>
        <span class="badge badge-season-${d.season_type}">📅 ${capitalize(d.season_type || '')} season</span>
      </div>

      <button class="card-toggle" type="button" aria-expanded="${isExpanded}">
        <span class="card-toggle-label">${isExpanded ? 'Hide details' : 'See details'}</span>
        <span class="chev" aria-hidden="true">▾</span>
      </button>

      <div class="card-details">
        <div>
          <h4 class="card-section-label">Climate</h4>
          <div class="climate-row">
            <span class="badge badge-temp">🌡️ ${escapeHtml(climate.avg_temp_c || '—')}°C</span>
            <span class="badge ${rainClass}">💧 ${escapeHtml(climate.rainfall_level || '—')} rain</span>
            <span class="badge badge-humidity">💨 ${escapeHtml(climate.humidity || '—')} humidity</span>
          </div>
        </div>
        <p class="card-why" style="display:${d.why_visit && d.why_visit.length > summary.length ? 'block' : 'none'}">${escapeHtml(d.why_visit || '')}</p>
        ${d.key_events && d.key_events.length ? `
        <div>
          <h4 class="card-section-label">🎉 Key events</h4>
          <div class="events-list">
            ${d.key_events.map(e => `<span class="event-pill">${escapeHtml(e)}</span>`).join('')}
          </div>
        </div>` : ''}
        <div>
          <h4 class="card-section-label">Travel styles</h4>
          <div class="styles-list">
            ${(d.travel_styles || []).map(s => `<span class="style-pill style-${s}">${escapeHtml(s)}</span>`).join('')}
          </div>
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
      </div>
    `;

    // Toggle expand
    const toggle = card.querySelector('.card-toggle');
    toggle.addEventListener('click', () => {
      const nowExpanded = !card.classList.toggle('expanded') ? false : true;
      // toggle returns the new presence, but classList.toggle in some browsers
      // isn't readable that way — recompute from class list:
      const ex = card.classList.contains('expanded');
      if (ex) state.expanded.add(eid); else state.expanded.delete(eid);
      toggle.setAttribute('aria-expanded', String(ex));
      toggle.querySelector('.card-toggle-label').textContent = ex ? 'Hide details' : 'See details';
    });

    // Save toggle
    const saveBtn = card.querySelector('.card-save-btn');
    saveBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      toggleSaved(eid);
      const nowSaved = state.saved.has(eid);
      saveBtn.classList.toggle('saved', nowSaved);
      saveBtn.setAttribute('aria-pressed', String(nowSaved));
      saveBtn.setAttribute('aria-label', nowSaved ? 'Remove from saved' : 'Save trip');
      // If we're on the saved view and the item was unsaved, re-render so it disappears.
      if (state.view === 'saved' && !nowSaved) render();
    });

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

  const RECENT_KEY = 'faraway-recent';
  function loadRecentSearches() {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (_) { return []; }
  }
  function pushRecentSearch(name) {
    if (!name) return;
    let list = loadRecentSearches().filter(n => n !== name);
    list.unshift(name);
    list = list.slice(0, 5);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(list)); } catch (_) {}
  }

  // Simple Levenshtein for fuzzy matching (≤ 2 distance, length-bounded)
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 99;
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    const dp = new Array(n+1);
    for (let j = 0; j <= n; j++) dp[j] = j;
    for (let i = 1; i <= m; i++) {
      let prev = dp[0]; dp[0] = i;
      for (let j = 1; j <= n; j++) {
        const tmp = dp[j];
        dp[j] = a[i-1] === b[j-1] ? prev : 1 + Math.min(prev, dp[j], dp[j-1]);
        prev = tmp;
      }
    }
    return dp[n];
  }

  function getSearchSuggestions() {
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) {
      // Empty: show trending for current month (top entries) + recent searches.
      const monthKey = state.month && state.month !== 'All' ? state.month : MONTHS[new Date().getMonth()];
      const monthData = (TRAVEL_DATA.months && TRAVEL_DATA.months[monthKey]) || [];
      const trending = monthData.slice(0, 6).map(e => {
        const opt = searchIndex.options.find(o => o.type === 'country' && o.name === e.country);
        return opt || { type: 'country', name: e.country, country: e.country, count: 1, _trending: true };
      });
      const recents = loadRecentSearches()
        .map(name => searchIndex.options.find(o => o.name === name))
        .filter(Boolean);
      // De-dupe trending + recents
      const seen = new Set();
      const out = [];
      [...recents, ...trending].forEach(o => {
        const k = o.type + '|' + o.name;
        if (seen.has(k)) return;
        seen.add(k);
        out.push(o);
      });
      return out.slice(0, 8);
    }
    const scored = searchIndex.options
      .map(o => {
        const name = o.name.toLowerCase();
        const country = (o.country || '').toLowerCase();
        let score = -1;
        if (name === q) score = 100;
        else if (name.startsWith(q)) score = 60;
        else if (name.includes(q)) score = 30;
        else if (country === q) score = 50;
        else if (country.startsWith(q)) score = 25;
        else if (country.includes(q)) score = 10;
        // Fuzzy fallback: typo tolerance up to edit distance 2
        if (score < 0 && q.length >= 4) {
          const d = lev(q, name.slice(0, q.length + 2));
          if (d <= 2) score = 8 - d * 2;
        }
        if (score < 0) return null;
        if (o.type === 'country') score += 15;
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
    pushRecentSearch(pick.name);
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
