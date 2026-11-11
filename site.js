// Shared parts of the three pages: the top bar (links between the pages, save, light/dark switch; on the builder
// also a row that jumps to its sections), the "back to top" button, and the footer (saving the student's work —
// everything is kept only in this browser — and the notes about the content).
(function () {
  var KEYS = ['ee_ans_v1', 'ee_custom_v1', 'apa7_tool_v1'];
  var page = location.pathname.split('/').pop() || 'index.html';
  var root = document.documentElement;
  var links = [['index.html', '🔬', 'EE Builder', 'Builder'], ['subject-chooser.html', '🧭', 'Which subject?', 'Subject'], ['apa7.html', '📚', 'APA 7 references', 'APA 7']];
  // the builder's sections (its cards, in order) and their short names
  var SECTIONS = ['Subject', 'Question', 'Variables', 'Sources', 'Blueprint', 'Time left', 'Citations', 'Examples', 'Diary'];

  var css = document.createElement('style');
  css.textContent =
    '.ee-top{position:sticky;top:0;z-index:50;background:var(--card,#fff);border-bottom:1px solid var(--line,#e3e5ea);box-shadow:0 1px 6px rgba(0,0,0,.05)}' +
    '.ee-bar{max-width:1000px;margin:0 auto;padding:8px 16px;display:flex;align-items:center;gap:6px}' +
    '.ee-brand{font-weight:700;color:var(--tx);text-decoration:none;margin-right:10px;white-space:nowrap}' +
    '.ee-pages{display:flex;gap:4px;flex:1;min-width:0}' +
    '.ee-pages a{padding:6px 10px;border-radius:8px;color:var(--tx);text-decoration:none;font-size:14px;font-weight:600;white-space:nowrap}' +
    '.ee-pages a:hover{background:var(--bg)}' +
    '.ee-pages a[aria-current]{background:var(--ac,#2563eb);color:#fff}' +
    '.ee-ic{font:inherit;font-size:16px;line-height:1;padding:7px 9px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--tx);cursor:pointer}' +
    '.ee-secs{max-width:1000px;margin:0 auto;padding:0 16px 8px;display:flex;gap:6px;overflow-x:auto;scrollbar-width:none}' +
    '.ee-secs::-webkit-scrollbar{display:none}' +
    '.ee-secs a{flex:none;font-size:13px;padding:4px 10px;border:1px solid var(--line);border-radius:999px;color:var(--mut);text-decoration:none;white-space:nowrap}' +
    '.ee-secs a.on{border-color:var(--ac);color:var(--ac);font-weight:600}' +
    '.ee-up{position:fixed;right:16px;bottom:16px;z-index:50;width:42px;height:42px;border-radius:50%;border:1px solid var(--line);background:var(--card);color:var(--tx);font-size:18px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.15);display:none}' +
    '.ee-up.show{display:block}' +
    '.ee-short{display:none}' +
    '@media (max-width:560px){.ee-brand{display:none}.ee-long{display:none}.ee-short{display:inline}.ee-pages a{padding:6px 8px}}' +
    '.site-foot{max-width:980px;margin:32px auto 0;padding:20px 16px 72px;border-top:1px solid var(--line,#ddd);color:var(--mut,#667085);font-size:14px;line-height:1.5}' +
    '.site-foot .save{background:var(--card,#fff);border:1px solid var(--line,#ddd);border-radius:10px;padding:12px 14px;margin-bottom:14px;scroll-margin-top:120px}' +
    '.site-foot .save b{color:var(--tx,#1d2330)}' +
    '.site-foot button,.site-foot label.btn{font:inherit;font-size:14px;margin:8px 8px 0 0;padding:6px 12px;border:1px solid var(--line,#ccc);border-radius:8px;background:var(--bg,#f7f7f5);color:var(--tx,#1d2330);cursor:pointer;display:inline-block}' +
    '.site-foot p{margin:6px 0}';
  document.head.appendChild(css);

  // --- top bar
  var top = document.createElement('header');
  top.className = 'ee-top';
  top.innerHTML = '<div class="ee-bar"><a class="ee-brand" href="index.html">EE Toolkit</a><nav class="ee-pages">' +
    links.map(function (l) { return '<a href="' + l[0] + '"' + (l[0] === page ? ' aria-current="page"' : '') + '>' + l[1] + ' <span class="ee-long">' + l[2] + '</span><span class="ee-short">' + l[3] + '</span></a>'; }).join('') +
    '</nav><button type="button" class="ee-ic" id="ee-save" title="Save my work to a file" aria-label="Save my work">💾</button>' +
    '<button type="button" class="ee-ic" id="ee-theme" aria-label="Light or dark theme"></button></div>';
  document.body.insertBefore(top, document.body.firstChild);

  var themeBtn = document.getElementById('ee-theme');
  function showTheme() {
    var dark = root.dataset.theme === 'dark';
    themeBtn.textContent = dark ? '☀️' : '🌙';
    themeBtn.title = dark ? 'Light theme' : 'Dark theme';
  }
  themeBtn.onclick = function () {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('ee_theme', root.dataset.theme); } catch (e) {}
    showTheme();
  };
  showTheme();

  // --- the builder: jump to a section
  var cards = [].slice.call(document.querySelectorAll('main > .card')).filter(function (c) { return c.id !== 'tp'; });
  if (page === 'index.html' && cards.length >= SECTIONS.length) {
    var secs = document.createElement('nav');
    secs.className = 'ee-secs';
    secs.setAttribute('aria-label', 'Sections');
    secs.innerHTML = SECTIONS.map(function (n, i) { return '<a href="#s' + (i + 1) + '">' + (i + 1) + '. ' + n + '</a>'; }).join('');
    top.appendChild(secs);
    var chips = secs.querySelectorAll('a');
    cards.slice(0, SECTIONS.length).forEach(function (c, i) { c.id = c.id || 's' + (i + 1); c.style.scrollMarginTop = '110px'; });
    // the section being read is marked in the row
    var mark = function () {
      var y = top.offsetHeight + 40, cur = 0;
      cards.slice(0, SECTIONS.length).forEach(function (c, i) { if (c.getBoundingClientRect().top <= y) cur = i; });
      chips.forEach(function (a, i) {
        var on = i === cur;
        if (on !== a.classList.contains('on')) { a.classList.toggle('on', on); if (on) secs.scrollLeft = a.offsetLeft - 16; }
      });
    };
    addEventListener('scroll', mark, { passive: true });
    mark();
  }

  // --- back to top
  var up = document.createElement('button');
  up.className = 'ee-up';
  up.type = 'button';
  up.title = 'Back to top';
  up.setAttribute('aria-label', 'Back to top');
  up.textContent = '↑';
  up.onclick = function () { scrollTo({ top: 0, behavior: 'smooth' }); };
  document.body.appendChild(up);
  addEventListener('scroll', function () { up.classList.toggle('show', scrollY > 800); }, { passive: true });

  // --- footer: save / load and the notes
  var f = document.createElement('footer');
  f.className = 'site-foot';
  f.innerHTML =
    '<div class="save" id="ee-savebox"><b>Your work is saved only in this browser.</b> If you clear the browser or use another device, it will not be there. ' +
    'Download a copy regularly. · Работа хранится только в этом браузере — регулярно скачивайте копию.<br>' +
    '<button type="button" id="sf-down">Download my work</button>' +
    '<label class="btn">Load my work from a file<input type="file" id="sf-up" accept=".json,application/json" hidden></label>' +
    '<span id="sf-msg"></span></div>' +
    '<p>The research directions, variables, section questions and plans were compiled with AI (Claude) from books on the Extended Essay, public examples and general IB practice. ' +
    'Check them with your supervisor. Kazakh wording was generated and should be checked by a Kazakh A teacher. Weeks and hours are estimates.</p>' +
    '<p>Made by teachers for IB Extended Essay students. Not affiliated with or endorsed by the International Baccalaureate.</p>';
  document.body.appendChild(f);

  document.getElementById('ee-save').onclick = function () { document.getElementById('ee-savebox').scrollIntoView({ behavior: 'smooth' }); };
  var msg = function (t) { document.getElementById('sf-msg').textContent = ' ' + t; };
  document.getElementById('sf-down').onclick = function () {
    var data = { app: 'ee-toolkit', saved: new Date().toISOString(), data: {} };
    KEYS.forEach(function (k) { try { var v = localStorage.getItem(k); if (v) data.data[k] = JSON.parse(v); } catch (e) {} });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' }));
    a.download = 'my-ee-work-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    msg('Saved ✓');
  };
  document.getElementById('sf-up').onchange = function (e) {
    var file = e.target.files[0];
    if (!file) return;
    file.text().then(function (t) {
      var d = JSON.parse(t);
      if (!d || d.app !== 'ee-toolkit' || !d.data) throw new Error('not ours');
      if (!confirm('Replace the work in this browser with the work from the file?')) return;
      KEYS.forEach(function (k) { if (d.data[k]) localStorage.setItem(k, JSON.stringify(d.data[k])); });
      location.reload();
    }).catch(function () { msg('This is not a file saved from this site.'); });
  };
})();
