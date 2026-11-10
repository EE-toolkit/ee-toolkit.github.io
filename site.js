// Shared footer for the three pages: links between them, saving the student's work to a file
// (everything is kept only in this browser), and the notes about the content.
(function () {
  var KEYS = ['ee_ans_v1', 'ee_custom_v1', 'apa7_tool_v1'];
  var page = location.pathname.split('/').pop() || 'index.html';
  var links = [['index.html', 'EE Builder'], ['subject-chooser.html', 'Which subject?'], ['apa7.html', 'APA 7 references']];

  var css = document.createElement('style');
  css.textContent =
    '.site-foot{max-width:980px;margin:32px auto 0;padding:20px 16px 40px;border-top:1px solid var(--line,#ddd);color:var(--mut,#667085);font-size:14px;line-height:1.5}' +
    '.site-foot nav{display:flex;flex-wrap:wrap;gap:8px 18px;margin-bottom:14px}' +
    '.site-foot nav a{color:var(--tx,#1d2330);font-weight:600;text-decoration:none}' +
    '.site-foot nav a[aria-current]{text-decoration:underline}' +
    '.site-foot .save{background:var(--card,#fff);border:1px solid var(--line,#ddd);border-radius:10px;padding:12px 14px;margin-bottom:14px}' +
    '.site-foot .save b{color:var(--tx,#1d2330)}' +
    '.site-foot button,.site-foot label.btn{font:inherit;font-size:14px;margin:8px 8px 0 0;padding:6px 12px;border:1px solid var(--line,#ccc);border-radius:8px;background:var(--bg,#f7f7f5);color:var(--tx,#1d2330);cursor:pointer;display:inline-block}' +
    '.site-foot p{margin:6px 0}';
  document.head.appendChild(css);

  var f = document.createElement('footer');
  f.className = 'site-foot';
  f.innerHTML =
    '<nav>' + links.map(function (l) { return '<a href="' + l[0] + '"' + (l[0] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>'; }).join('') + '</nav>' +
    '<div class="save"><b>Your work is saved only in this browser.</b> If you clear the browser or use another device, it will not be there. ' +
    'Download a copy regularly. · Работа хранится только в этом браузере — регулярно скачивайте копию.<br>' +
    '<button type="button" id="sf-down">Download my work</button>' +
    '<label class="btn">Load my work from a file<input type="file" id="sf-up" accept=".json,application/json" hidden></label>' +
    '<span id="sf-msg"></span></div>' +
    '<p>The research directions, variables, section questions and plans were compiled with AI (Claude) from books on the Extended Essay, public examples and general IB practice. ' +
    'Check them with your supervisor. Kazakh wording was generated and should be checked by a Kazakh A teacher. Weeks and hours are estimates.</p>' +
    '<p>Made by teachers for IB Extended Essay students. Not affiliated with or endorsed by the International Baccalaureate.</p>';
  document.body.appendChild(f);

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
