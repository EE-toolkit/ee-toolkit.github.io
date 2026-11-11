// Russian A and Kazakh A: the builder page in the language of the essay. The wording comes from ru.js and kz.js
// (EE_LANG[subject]); when such a subject is chosen, every known English phrase on the page is replaced, and choosing
// another subject brings the original text back.
(function () {
  if (typeof S === 'undefined' || !window.EE_LANG) return;
  var D = null; // the wording of the subject on screen, or null for English

  function sub(t) {
    var o = t;
    D.TK.forEach(function (k) { if (o.indexOf(k) >= 0) o = o.split(k).join(D.TASKS[k]); });
    D.SUB.forEach(function (r) { o = o.replace(r[0], r[1]); });
    return o;
  }
  function tr1(t) {
    if (Object.prototype.hasOwnProperty.call(D.X, t)) return D.X[t];
    var m = t.match(/^(\d+\.\s+)([^]+)$/);
    if (m) { var r = tr1(m[2]); if (r != null) return m[1] + r; }
    for (var i = 0; i < D.P.length; i++) if (t.indexOf(D.P[i][0]) === 0) return D.P[i][1] + t.slice(D.P[i][0].length);
    for (var j = 0; j < D.R.length; j++) if (D.R[j][0].test(t)) return sub(t.replace(D.R[j][0], D.R[j][1]));
    var o = sub(t);
    return o !== t ? o : null;
  }
  // translate one piece of text, keeping its surrounding spaces
  function T(s) {
    var t = String(s).trim();
    if (!D || !t) return s;
    var r = tr1(t);
    return r == null ? s : String(s).replace(t, r);
  }
  window.EE_T = { on: function () { return !!EE_LANG[sk]; }, t: function (s) { return EE_LANG[sk] ? (D = EE_LANG[sk], T(s)) : s; } };
  Object.keys(EE_LANG).forEach(function (k) { var d = EE_LANG[k]; d.TK = Object.keys(d.TASKS).sort(function (a, b) { return b.length - a.length; }); });

  var ATTR = ['placeholder', 'title', 'data-l', 'label'];
  var done = [];
  function doNode(n) {
    if (n.nodeType === 3) {
      if (n.__en != null || /^(SCRIPT|STYLE)$/.test(n.parentNode && n.parentNode.tagName)) return;
      var v = T(n.nodeValue);
      if (v !== n.nodeValue) { n.__en = n.nodeValue; n.nodeValue = v; done.push(n); }
      return;
    }
    if (n.nodeType !== 1) return;
    ATTR.forEach(function (a) {
      var v = n.getAttribute(a);
      if (!v || (n.__ena && n.__ena[a] != null)) return;
      var k = T(v);
      if (k !== v) { n.__ena = n.__ena || {}; n.__ena[a] = v; n.setAttribute(a, k); done.push(n); }
    });
    for (var c = n.firstChild; c; c = c.nextSibling) doNode(c);
  }
  function undo() {
    done.forEach(function (n) {
      if (n.nodeType === 3) { if (n.__en != null) { n.nodeValue = n.__en; n.__en = null; } }
      else if (n.__ena) { Object.keys(n.__ena).forEach(function (a) { if (n.__ena[a] != null) n.setAttribute(a, n.__ena[a]); }); n.__ena = null; }
    });
    done = [];
  }
  new MutationObserver(function (list) {
    if (!D) return;
    list.forEach(function (m) {
      if (m.type !== 'attributes') return m.addedNodes.forEach(doNode);
      // a hint changed after the page was drawn (e.g. ☆ / ★): translate the new text
      var n = m.target, a = m.attributeName, v = n.getAttribute(a), k = v && T(v);
      if (k && k !== v) { n.__ena = n.__ena || {}; n.__ena[a] = v; n.setAttribute(a, k); done.push(n); }
    });
  }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['title', 'placeholder'] });
  function sync() {
    undo();
    D = EE_LANG[sk] || null;
    document.documentElement.lang = D ? D.lang : 'en';
    if (D) doNode(document.body);
  }
  var sel = document.getElementById('sub'), old = sel.onchange;
  sel.onchange = function () { old.call(this); sync(); };
  if (EE_LANG[sk]) { fields(); sync(); }
})();
