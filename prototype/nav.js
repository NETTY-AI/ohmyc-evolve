// ohmyc-evolve 공통 햄버거 네비게이션
// 모든 페이지에서 <script src="/nav.js"> 또는 상대경로로 include
(function() {
  // 현재 경로에서 루트(prototype/)까지의 상대 경로 계산
  var path = window.location.pathname;
  var base = '';
  if (path.includes('/versions/')) {
    base = '../../';
  } else if (path.includes('/current/') || path.includes('/reports/')) {
    base = '../';
  } else {
    base = '';
  }

  var style = document.createElement('style');
  style.textContent = [
    '.evolve-hamburger{position:fixed;top:12px;left:12px;z-index:99999;width:36px;height:36px;border-radius:10px;',
    'background:rgba(255,255,255,0.9);border:1px solid rgba(60,60,67,0.12);display:flex;align-items:center;',
    'justify-content:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.08);backdrop-filter:blur(20px);',
    '-webkit-backdrop-filter:blur(20px);transition:transform 0.15s}',
    '.evolve-hamburger:active{transform:scale(0.9)}',
    '.evolve-hamburger svg{width:16px;height:16px;color:#1D1D1F}',
    '@media(prefers-color-scheme:dark){',
    '.evolve-hamburger{background:rgba(44,44,46,0.9);border-color:rgba(84,84,88,0.36)}',
    '.evolve-hamburger svg{color:#F5F5F7}',
    '.evolve-side-nav{background:#1C1C1E!important;color:#F5F5F7!important}',
    '.evolve-side-nav a{color:#F5F5F7!important}',
    '.evolve-side-nav a:hover{background:rgba(255,133,82,0.15)!important}',
    '.evolve-nav-title{color:rgba(235,235,245,0.3)!important}',
    '}',
    '.evolve-side-overlay{position:fixed;top:0;left:0;z-index:99998;width:100%;height:100%;',
    'background:rgba(0,0,0,0.3);display:none}',
    '.evolve-side-overlay.show{display:block}',
    '.evolve-side-nav{position:fixed;top:0;left:-300px;z-index:99999;width:260px;height:100vh;',
    'background:#fff;box-shadow:4px 0 24px rgba(0,0,0,0.12);transition:left 0.25s cubic-bezier(.22,1,.36,1);',
    'padding:60px 16px 40px;overflow-y:auto;font-family:Inter,-apple-system,system-ui,sans-serif}',
    '.evolve-side-nav.open{left:0}',
    '.evolve-nav-title{font-size:10px;font-weight:700;color:rgba(60,60,67,0.3);text-transform:uppercase;',
    'letter-spacing:0.08em;margin:16px 0 6px;padding-left:8px}',
    '.evolve-nav-title:first-child{margin-top:0}',
    '.evolve-side-nav a{display:flex;align-items:center;gap:8px;padding:9px 10px;border-radius:8px;',
    'font-size:14px;font-weight:500;color:#1D1D1F;text-decoration:none;transition:background 0.1s}',
    '.evolve-side-nav a:hover{background:rgba(255,133,82,0.1);color:#FF8552}',
    '.evolve-nav-icon{font-size:16px;width:22px;text-align:center}',
    '.evolve-nav-logo{font-family:"Plus Jakarta Sans",system-ui;font-size:18px;font-weight:800;',
    'letter-spacing:-0.04em;margin-bottom:16px;padding-left:8px}',
    '.evolve-nav-logo span{color:#FF8552}',
  ].join('');
  document.head.appendChild(style);

  // Hamburger button
  var btn = document.createElement('button');
  btn.className = 'evolve-hamburger';
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>';

  // Overlay
  var overlay = document.createElement('div');
  overlay.className = 'evolve-side-overlay';

  // Side nav
  var nav = document.createElement('nav');
  nav.className = 'evolve-side-nav';
  nav.innerHTML = [
    '<div class="evolve-nav-logo">ohmy<span>c</span>-evolve</div>',
    '<div class="evolve-nav-title">Navigation</div>',
    '<a href="' + base + '"><span class="evolve-nav-icon">🏠</span> Home</a>',
    '<a href="' + base + 'review.html"><span class="evolve-nav-icon">📊</span> Review Portal</a>',
    '<a href="' + base + 'reports/"><span class="evolve-nav-icon">📋</span> Cycle Reports</a>',
    '<div class="evolve-nav-title">Prototypes</div>',
    '<a href="' + base + 'current/"><span class="evolve-nav-icon">👤</span> User Flow (Latest)</a>',
    '<a href="' + base + 'current/creator.html"><span class="evolve-nav-icon">🎨</span> Creator Flow (Latest)</a>',
    '<div class="evolve-nav-title" id="evolve-nav-versions">Versions</div>',
    '<div class="evolve-nav-title">SSOT Docs</div>',
    '<a href="https://github.com/NETTY-AI/ohmyc-evolve/blob/main/docs/IDENTITY.md" target="_blank"><span class="evolve-nav-icon">📋</span> IDENTITY</a>',
    '<a href="https://github.com/NETTY-AI/ohmyc-evolve/blob/main/docs/UX.md" target="_blank"><span class="evolve-nav-icon">🎯</span> UX</a>',
    '<a href="https://github.com/NETTY-AI/ohmyc-evolve/blob/main/docs/CHARACTER-AGENT-SPEC.md" target="_blank"><span class="evolve-nav-icon">🧠</span> SPEC</a>',
    '<a href="https://github.com/NETTY-AI/ohmyc-evolve/blob/main/docs/VI.md" target="_blank"><span class="evolve-nav-icon">🎨</span> VI</a>',
    '<div class="evolve-nav-title">Links</div>',
    '<a href="https://github.com/NETTY-AI/ohmyc-evolve" target="_blank"><span class="evolve-nav-icon">🔗</span> GitHub</a>',
  ].join('');

  function toggle() {
    nav.classList.toggle('open');
    overlay.classList.toggle('show');
  }

  btn.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);

  document.body.appendChild(btn);
  document.body.appendChild(overlay);
  document.body.appendChild(nav);

  // Dynamically load versions into sidebar from manifest
  fetch(base + 'versions-manifest.json')
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(manifest){
      if (!manifest) return;
      var anchor = document.getElementById('evolve-nav-versions');
      if (!anchor) return;
      manifest.versions.forEach(function(v){
        v.files.forEach(function(file){
          var a = document.createElement('a');
          a.href = base + 'versions/' + v.version + '/' + (file === 'index.html' ? '' : file);
          var flowName = file === 'index.html' ? 'User' : file.replace('.html','').replace(/^\w/, function(c){return c.toUpperCase()});
          a.innerHTML = '<span class="evolve-nav-icon">📁</span> ' + v.version + ' ' + flowName;
          anchor.parentNode.insertBefore(a, anchor.nextSibling);
          // Insert after the title, but we want newest first so we keep inserting after title
        });
      });
    })
    .catch(function(){});
})();
