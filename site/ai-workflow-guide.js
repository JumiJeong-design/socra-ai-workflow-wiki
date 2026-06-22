// ─── Theme ───────────────────────────────────────────────
const MOON = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M13.5 9.5A6 6 0 016.5 2.5a6.5 6.5 0 100 11 6 6 0 007-4z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SUN  = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.innerHTML = theme === 'dark' ? SUN : MOON;
    btn.setAttribute('aria-label', theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
  });
}

function makeToggleBtn() {
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  const theme = getTheme();
  btn.innerHTML = theme === 'dark' ? SUN : MOON;
  btn.setAttribute('aria-label', theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
  btn.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
  return btn;
}

// Inject toggle into mobile topbar
const topbar = document.querySelector('.mobile-topbar');
if (topbar) topbar.appendChild(makeToggleBtn());

// ─── Mobile sidebar toggle ────────────────────────────────
const hamburger = document.getElementById('hamburger');
const sidebarEl  = document.getElementById('sidebar');
const overlay    = document.getElementById('sidebar-overlay');

function openSidebar() {
  sidebarEl.classList.add('open');
  overlay.classList.add('visible');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-label', '메뉴 닫기');
}

function closeSidebar() {
  sidebarEl.classList.remove('open');
  overlay.classList.remove('visible');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-label', '메뉴 열기');
}

hamburger.addEventListener('click', () => {
  sidebarEl.classList.contains('open') ? closeSidebar() : openSidebar();
});

overlay.addEventListener('click', closeSidebar);

// ─── Copy buttons ─────────────────────────────────────────
document.querySelectorAll('.code-label').forEach(label => {
  const pre = label.nextElementSibling;
  if (!pre || pre.tagName !== 'PRE') return;
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = '복사';
  btn.setAttribute('aria-label', '코드 복사');
  label.appendChild(btn);
  btn.addEventListener('click', () => {
    const text = pre.querySelector('code')?.innerText || pre.innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '✓ 복사됨';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = '복사'; btn.classList.remove('copied'); }, 1800);
    });
  });
});

// ─── Sidebar (shared, fetched) ────────────────────────────
fetch('sidebar.html?v=0.18-storybook-harness')
  .then(res => res.text())
  .then(html => {
    sidebarEl.innerHTML = html;
    initSidebarInteractions();
    initSiteSearch();
    markActivePage();
  });

function markActivePage() {
  const currentFile = location.pathname.split('/').pop() || 'index.html';

  // 그룹 active 표시
  sidebarEl.querySelectorAll('.nav-section').forEach(section => {
    const hasCurrentPage = [...section.querySelectorAll('a.nav-item')].some(a =>
      (a.getAttribute('href') || '').split('#')[0] === currentFile
    );
    if (hasCurrentPage) section.classList.add('active-group');
  });

  // 섹션 scrollspy
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  function setActiveLink(id) {
    sidebarEl.querySelectorAll('a.nav-item').forEach(a => a.classList.remove('active'));
    const target = sidebarEl.querySelector(`a.nav-item[href*="#${id}"]`);
    if (target) target.classList.add('active');
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveLink(entry.target.id);
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

const SEARCH_PAGES = [
  { path: 'index.html',             label: '홈' },
  { path: 'guide-basics.html',      label: '기본 이해' },
  { path: 'guide-setup.html',       label: '연결 / 환경 설정' },
  { path: 'guide-build.html',       label: '문서 구축 가이드' },
  { path: 'guide-ops.html',         label: '실무 운영' },
  { path: 'guide-extensions.html',  label: '제품 유형별 확장' },
  { path: 'guide-wiki.html',        label: '실무 가이드' },
  { path: 'guide-playbooks.html',   label: '플레이북' },
  { path: 'harness-review.html',    label: '문서 역할맵' },
  { path: 'changelog.html',         label: 'Changelog' },
];

let searchIndexPromise;

function normalizeText(text) {
  return (text || '').replace(/\s+/g, ' ').trim();
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function getPageBasePath() {
  const parts = location.pathname.split('/');
  parts.pop();
  return parts.join('/') + '/';
}

function buildEntriesFromDocument(doc, page) {
  const entries = [];
  const pageTitle = normalizeText(doc.querySelector('h1')?.textContent) || page.label;
  const targets = [
    ...doc.querySelectorAll('section[id]'),
    ...doc.querySelectorAll('h3[id]'),
    ...doc.querySelectorAll('[id^="trap-"]')
  ];
  const seen = new Set();

  targets.forEach(target => {
    const id = target.id;
    if (!id || seen.has(id)) return;
    seen.add(id);

    const title = normalizeText(
      target.querySelector?.('h2, h3, strong, .home-group-title, .card-title')?.textContent ||
      target.textContent.split('\n')[0]
    );
    const text = normalizeText(target.textContent);
    if (!title || text.length < 12) return;

    entries.push({
      title,
      page: page.label,
      href: `${page.path}#${id}`,
      text: `${pageTitle} ${title} ${text}`.toLowerCase(),
      snippet: text.length > 110 ? `${text.slice(0, 110)}...` : text
    });
  });

  return entries;
}

function getSearchIndex() {
  if (searchIndexPromise) return searchIndexPromise;
  const parser = new DOMParser();
  searchIndexPromise = Promise.all(SEARCH_PAGES.map(page =>
    fetch(page.path)
      .then(res => res.text())
      .then(html => buildEntriesFromDocument(parser.parseFromString(html, 'text/html'), page))
      .catch(() => [])
  )).then(groups => groups.flat());
  return searchIndexPromise;
}

function renderSearchResults(resultsEl, results, query) {
  if (!query) {
    resultsEl.hidden = true;
    resultsEl.innerHTML = '';
    return;
  }

  resultsEl.hidden = false;
  if (results.length === 0) {
    resultsEl.innerHTML = `<div class="sidebar-search-empty">검색 결과가 없습니다.</div>`;
    return;
  }

  const highlight = (text, q) => {
    const escaped = escapeHtml(text);
    if (!q) return escaped;
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escaped.replace(regex, '<mark>$1</mark>');
  };

  resultsEl.innerHTML = results.slice(0, 7).map(result => {
    const [path, hash = ''] = result.href.split('#');
    const href = `${path}?q=${encodeURIComponent(query)}${hash ? `#${hash}` : ''}`;
    return `
    <a class="sidebar-search-result" href="${href}">
      <div class="sidebar-search-result-title">${highlight(result.title, query)}</div>
      <div class="sidebar-search-result-meta">${escapeHtml(result.page)}</div>
      <div class="sidebar-search-result-snippet">${highlight(result.snippet, query)}</div>
    </a>
  `;
  }).join('');

  resultsEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeSidebar();
      const targetUrl = new URL(link.href);
      if (targetUrl.pathname === location.pathname && targetUrl.hash) {
        setTimeout(() => highlightTargetFromHash(targetUrl.hash), 80);
      }
    });
  });
}

function highlightTargetFromHash(hash = location.hash) {
  const id = decodeURIComponent((hash || '').replace('#', ''));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.remove('search-hit');
  void target.offsetWidth;
  target.classList.add('search-hit');
  setTimeout(() => target.classList.remove('search-hit'), 2600);
}

// ─── In-page search highlight ─────────────────────────────
(function initInPageSearch() {
  const q = new URLSearchParams(location.search).get('q');
  if (!q || q.length < 2) return;

  const main = document.querySelector('.main');
  if (!main) return;

  const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: n => {
      const tag = n.parentElement?.tagName;
      if (['SCRIPT','STYLE','CODE','PRE'].includes(tag)) return NodeFilter.FILTER_REJECT;
      return regex.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    regex.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0, m;
    while ((m = regex.exec(node.nodeValue)) !== null) {
      if (m.index > last) frag.appendChild(document.createTextNode(node.nodeValue.slice(last, m.index)));
      const mark = document.createElement('mark');
      mark.className = 'search-inline-hit';
      mark.textContent = m[0];
      frag.appendChild(mark);
      last = m.index + m[0].length;
    }
    if (last < node.nodeValue.length) frag.appendChild(document.createTextNode(node.nodeValue.slice(last)));
    node.parentNode.replaceChild(frag, node);
  });

  const hits = [...document.querySelectorAll('.search-inline-hit')];
  if (!hits.length) return;

  let cur = 0;

  const bar = document.createElement('div');
  bar.className = 'search-nav-bar';
  bar.innerHTML = `
    <span class="search-nav-query">"${q}"</span>
    <span class="search-nav-count"></span>
    <button class="search-nav-btn" id="snav-prev">↑</button>
    <button class="search-nav-btn" id="snav-next">↓</button>
    <button class="search-nav-close">✕</button>
  `;
  document.body.appendChild(bar);

  const countEl = bar.querySelector('.search-nav-count');

  function goTo(i) {
    hits[cur]?.classList.remove('search-inline-hit--active');
    cur = (i + hits.length) % hits.length;
    hits[cur].classList.add('search-inline-hit--active');
    hits[cur].scrollIntoView({ behavior: 'smooth', block: 'center' });
    countEl.textContent = `${cur + 1} / ${hits.length}`;
  }

  bar.querySelector('#snav-prev').addEventListener('click', () => goTo(cur - 1));
  bar.querySelector('#snav-next').addEventListener('click', () => goTo(cur + 1));
  bar.querySelector('.search-nav-close').addEventListener('click', () => {
    hits.forEach(h => { h.outerHTML = h.textContent; });
    bar.remove();
    const url = new URL(location.href);
    url.searchParams.delete('q');
    history.replaceState(null, '', url);
  });

  goTo(0);
})();

function initSiteSearch() {
  const input = sidebarEl.querySelector('#site-search-input');
  const resultsEl = sidebarEl.querySelector('#site-search-results');
  if (!input || !resultsEl) return;

  input.addEventListener('input', () => {
    const query = normalizeText(input.value).toLowerCase();
    if (query.length < 2) {
      renderSearchResults(resultsEl, [], '');
      return;
    }

    getSearchIndex().then(index => {
      const terms = query.split(' ').filter(Boolean);
      const results = index
        .map(entry => {
          const title = entry.title.toLowerCase();
          const score = terms.reduce((total, term) => {
            if (title.includes(term)) return total + 4;
            if (entry.text.includes(term)) return total + 1;
            return total;
          }, 0);
          return { ...entry, score };
        })
        .filter(entry => entry.score > 0)
        .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'ko'));
      renderSearchResults(resultsEl, results, query);
    });
  });

  input.addEventListener('keydown', event => {
    if (event.key !== 'Enter') return;
    const first = resultsEl.querySelector('a');
    if (first) first.click();
  });
}

window.addEventListener('hashchange', () => {
  if (new URLSearchParams(location.search).has('q')) highlightTargetFromHash();
});

window.addEventListener('DOMContentLoaded', () => {
  if (new URLSearchParams(location.search).has('q')) {
    setTimeout(() => highlightTargetFromHash(), 350);
  }
});

function initSidebarInteractions() {
  // Sidebar theme toggle
  const sidebarToggle = sidebarEl.querySelector('.theme-toggle');
  if (sidebarToggle) {
    const t = getTheme();
    sidebarToggle.innerHTML = t === 'dark' ? SUN : MOON;
    sidebarToggle.setAttribute('aria-label', t === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
    sidebarToggle.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
  }

  // Page-level active item
  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') {
    sidebarEl.querySelector('[data-nav="home"]')?.classList.add('active');
  } else if (page === 'changelog.html') {
    sidebarEl.querySelector('[data-nav="changelog"]')?.classList.add('active');
  }

  // Close on nav click (mobile)
  sidebarEl.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => { if (window.innerWidth <= 900) closeSidebar(); });
  });

  // Scroll-spy (guide page only)
  const sections = document.querySelectorAll('section[id], div.hero');
  if (sections.length === 0) return;

  const navItems = sidebarEl.querySelectorAll('.nav-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navItems.forEach(item => { item.classList.remove('active'); item.removeAttribute('aria-current'); });
      const id = entry.target.id;
      const active = sidebarEl.querySelector(`.nav-item[href="ai-workflow-guide.html#${id}"]`)
                  || sidebarEl.querySelector(`.nav-item[href="#${id}"]`);
      if (active) { active.classList.add('active'); active.setAttribute('aria-current', 'true'); }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));
}
