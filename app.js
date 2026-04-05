// ═══════════════════════════════════════════════════════════
// LYRA MENU — Rendering & Interaction
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  let currentLang = 'mk';
  let currentCategory = 'food';

  const ALLERGEN_LABELS = {
    G: { mk: 'Глутен', en: 'Gluten' },
    D: { mk: 'Млеко', en: 'Dairy' },
    E: { mk: 'Јајца', en: 'Eggs' },
    N: { mk: 'Јаткасти плодови', en: 'Nuts' },
    F: { mk: 'Риба', en: 'Fish' },
  };

  const CATEGORY_LABELS = {
    food: { mk: 'Храна', en: 'Food' },
    drinks: { mk: 'Пијалоци', en: 'Drinks' },
  };

  // ── RENDER MENU ──────────────────────────────────────────

  function renderAllergens(list) {
    if (!list || !list.length) return '';
    return '<span class="allergens">' +
      list.map(a =>
        `<span class="a-badge a-${a}" data-tip="${ALLERGEN_LABELS[a]?.[currentLang] || a}">${a}</span>`
      ).join('') +
      '</span>';
  }

  function renderItem(item) {
    const name = item[currentLang] || item.mk;
    const weight = item.weight ? `<span class="item-weight">(${item.weight})</span>` : '';
    const allergens = renderAllergens(item.allergens);
    const desc = item.desc
      ? `<span class="item-desc">${item.desc[currentLang] || item.desc.mk}</span>`
      : '';
    const currency = currentLang === 'mk' ? 'ден' : 'MKD';
    const price = `${item.price} ${currency}`;

    return `<div class="item">
      <span class="item-info">
        <span class="item-name">${name}${weight}${allergens}</span>
        ${desc}
      </span>
      <span class="item-price">${price}</span>
    </div>`;
  }

  function renderSection(section) {
    const title = section.name[currentLang] || section.name.mk;
    const note = section.note
      ? `<p class="section-note">${section.note[currentLang] || section.note.mk}</p>`
      : '';
    const items = section.items.map(renderItem).join('');

    return `<section class="menu-section" id="${section.id}">
      <h2>${title}</h2>
      ${note}
      <div class="section-card">
        ${items}
      </div>
    </section>`;
  }

  function renderMenu() {
    const main = document.getElementById('menu-content');
    const allSections = [...MENU_DATA.food, ...MENU_DATA.drinks];
    main.innerHTML = allSections.map(renderSection).join('');
    updateVisibility();
    setupObserver();
  }

  // ── NAVIGATION ───────────────────────────────────────────

  function renderNav() {
    const navFood = document.getElementById('nav-food');
    const navDrinks = document.getElementById('nav-drinks');

    navFood.innerHTML = MENU_DATA.food.map(s =>
      `<a href="#${s.id}" data-section="${s.id}">${s.name[currentLang] || s.name.mk}</a>`
    ).join('');

    navDrinks.innerHTML = MENU_DATA.drinks.map(s =>
      `<a href="#${s.id}" data-section="${s.id}">${s.name[currentLang] || s.name.mk}</a>`
    ).join('');

    // Update category button labels
    document.getElementById('cat-food').textContent = CATEGORY_LABELS.food[currentLang];
    document.getElementById('cat-drinks').textContent = CATEGORY_LABELS.drinks[currentLang];
  }

  function renderAllergenLegend() {
    const legend = document.getElementById('allergen-legend');
    legend.innerHTML = Object.entries(ALLERGEN_LABELS).map(([key, labels]) =>
      `<div class="legend-item">
        <span class="a-badge a-${key}">${key}</span>
        <span>${labels[currentLang]}</span>
      </div>`
    ).join('');
  }

  // ── CATEGORY SWITCHING ───────────────────────────────────

  const foodIds = () => MENU_DATA.food.map(s => s.id);
  const drinkIds = () => MENU_DATA.drinks.map(s => s.id);

  function setCategory(cat) {
    currentCategory = cat;

    document.getElementById('cat-food').classList.toggle('active', cat === 'food');
    document.getElementById('cat-drinks').classList.toggle('active', cat === 'drinks');

    document.getElementById('nav-food').style.display = cat === 'food' ? 'flex' : 'none';
    document.getElementById('nav-drinks').style.display = cat === 'drinks' ? 'flex' : 'none';

    const legend = document.getElementById('allergen-legend');
    legend.style.display = cat === 'food' ? '' : 'none';

    updateVisibility();
  }

  function updateVisibility() {
    const showFood = currentCategory === 'food';
    foodIds().forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = showFood ? '' : 'none';
    });
    drinkIds().forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = showFood ? 'none' : '';
    });
  }

  // ── LANGUAGE ─────────────────────────────────────────────

  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.getElementById('btn-mk').classList.toggle('active', lang === 'mk');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.querySelector('.lang-toggle').classList.toggle('lang-en', lang === 'en');

    renderMenu();
    renderNav();
    renderAllergenLegend();

    // Update footer
    document.getElementById('footer-name').textContent = lang === 'mk'
      ? 'Ресторан Лира'
      : 'Restaurant Lyra';
    document.getElementById('footer-sub').innerHTML = lang === 'mk'
      ? 'Скопје \u00B7 Основан 1996'
      : 'Skopje \u00B7 Est. 1996';
  }

  // ── SCROLL OBSERVER ──────────────────────────────────────

  let observer = null;

  function setupObserver() {
    if (observer) observer.disconnect();

    const sections = document.querySelectorAll('.menu-section');
    const visibleSections = new Set();

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      if (visibleSections.size === 0) {
        document.querySelectorAll('.nav-scroll a').forEach(a => a.classList.remove('active'));
        return;
      }

      // Use the last intersecting entry that is visible
      const currentId = [...visibleSections].pop();

      if (foodIds().includes(currentId) && currentCategory !== 'food') {
        setCategory('food');
      }
      if (drinkIds().includes(currentId) && currentCategory !== 'drinks') {
        setCategory('drinks');
      }

      document.querySelectorAll('.nav-scroll a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-section') === currentId);
      });

      const activeLink = document.querySelector('.nav-scroll a.active');
      if (activeLink) {
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, { rootMargin: '-35% 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // ── BACK TO TOP ──────────────────────────────────────────

  function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── INIT ─────────────────────────────────────────────────

  function init() {
    document.getElementById('cat-food').addEventListener('click', () => {
      setCategory('food');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.getElementById('cat-drinks').addEventListener('click', () => {
      setCategory('drinks');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('btn-mk').addEventListener('click', () => setLang('mk'));
    document.getElementById('btn-en').addEventListener('click', () => setLang('en'));

    renderMenu();
    renderNav();
    renderAllergenLegend();
    setCategory('food');
    setupBackToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
