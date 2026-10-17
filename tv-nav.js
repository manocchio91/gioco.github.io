/* Mimì e Pepe - navigazione con telecomando (Smart TV) e tastiera.
   Causa del problema: il gioco non gestiva il focus. All'avvio nessun elemento era selezionato e,
   quando un pulsante spariva (scelte, domande), il focus tornava al <body>: le frecce venivano quindi
   lasciate al browser, che scorreva la pagina o portava il focus sulla barra degli indirizzi.
   Questo modulo: tiene il focus sempre dentro il gioco, sposta il focus con le frecce verso
   l'elemento più vicino nella direzione premuta, lo rende visibile scorrendo, gestisce OK e Indietro.
   Non tocca la logica del gioco. */
(function () {
  var KEY = { 37: 'left', 38: 'up', 39: 'right', 40: 'down' };
  var NAMES = { ArrowLeft: 'left', ArrowUp: 'up', ArrowRight: 'right', ArrowDown: 'down', Left: 'left', Up: 'up', Right: 'right', Down: 'down' };
  /* Indietro: Escape (tastiera), Backspace, BrowserBack, LG webOS 461, Samsung Tizen 10009 */
  function isBack(e) { return e.key === 'Escape' || e.key === 'Backspace' || e.key === 'BrowserBack' || e.key === 'GoBack' || e.keyCode === 461 || e.keyCode === 10009 || e.keyCode === 27; }
  function isOk(e) { return e.key === 'Enter' || e.key === 'Accept' || e.key === 'Select' || e.keyCode === 13 || e.keyCode === 23; }
  var app = null, usingKeys = false;
  /* modalità scelta nella prima schermata ("Telefono / tablet" o "TV con telecomando") */
  function phoneMode() { return document.documentElement.classList.contains('dev-phone'); }

  function root() { return app || (app = document.getElementById('app')); }
  function screen() { var r = root() && root().querySelector('[data-screen]'); return r ? r.getAttribute('data-screen') : ''; }
  function visible(el) {
    if (el.disabled || el.getAttribute('aria-hidden') === 'true') return false;
    var st = getComputedStyle(el);
    if (st.visibility === 'hidden' || st.display === 'none' || parseFloat(st.opacity) === 0 || st.pointerEvents === 'none') return false;
    var r = el.getBoundingClientRect();
    return r.width > 2 && r.height > 2;
  }
  function candidates() {
    var r = root(); if (!r) return [];
    return Array.prototype.filter.call(r.querySelectorAll('button, a[href], summary, [tabindex]:not([tabindex="-1"])'), visible);
  }
  function inApp(el) { return !!(el && root() && root().contains(el) && el !== root()); }
  function rect(el) { var b = el.getBoundingClientRect(); return { l: b.left, r: b.right, t: b.top, b: b.bottom, cx: (b.left + b.right) / 2, cy: (b.top + b.bottom) / 2 }; }

  /* Elemento più vicino nella direzione: favorisce chi è allineato sull'asse della freccia. */
  function best(from, dir, list) {
    var a = rect(from), win = null, score = Infinity;
    /* Destra/sinistra restano sulla stessa riga: al bordo il focus non salta su elementi lontani (es. intestazione). */
    var horiz = dir === 'left' || dir === 'right';
    /* l'intestazione (casa, profilo, tempo, genitori) si raggiunge solo con su/giù, mai di lato dal gioco */
    if (horiz) { var hd = !!from.closest('header'); list = list.filter(function (el) { return !!el.closest('header') === hd; }); }
    var lane = list.filter(function (el) {
      if (el === from) return false;
      var b = rect(el);
      return horiz ? (b.b > a.t + 4 && b.t < a.b - 4) : (b.r > a.l + 4 && b.l < a.r - 4);
    });
    var inDir = function (el) { var b = rect(el); return dir === 'right' ? b.cx > a.cx + 4 : dir === 'left' ? b.cx < a.cx - 4 : dir === 'down' ? b.cy > a.cy + 4 : b.cy < a.cy - 4; };
    if (lane.some(inDir)) list = lane;
    else if (horiz) list = list.filter(function (el) { var b = rect(el); return Math.abs(b.cy - a.cy) <= Math.abs(b.cx - a.cx) * 0.7; });
    list.forEach(function (el) {
      if (el === from) return;
      var b = rect(el), primary, ortho;
      if (dir === 'right') { primary = b.l - a.r; ortho = Math.max(0, Math.max(a.t, b.t) - Math.min(a.b, b.b)) ? Math.abs(b.cy - a.cy) : 0; if (b.cx <= a.cx + 4) return; }
      if (dir === 'left') { primary = a.l - b.r; ortho = Math.max(0, Math.max(a.t, b.t) - Math.min(a.b, b.b)) ? Math.abs(b.cy - a.cy) : 0; if (b.cx >= a.cx - 4) return; }
      if (dir === 'down') { primary = b.t - a.b; ortho = Math.max(0, Math.max(a.l, b.l) - Math.min(a.r, b.r)) ? Math.abs(b.cx - a.cx) : 0; if (b.cy <= a.cy + 4) return; }
      if (dir === 'up') { primary = a.t - b.b; ortho = Math.max(0, Math.max(a.l, b.l) - Math.min(a.r, b.r)) ? Math.abs(b.cx - a.cx) : 0; if (b.cy >= a.cy - 4) return; }
      var s = Math.max(0, primary) + ortho * 2.2;
      if (s < score) { score = s; win = el; }
    });
    return win;
  }
  function preferred(list) {
    var order = ['button.chip.go', 'button.chip', 'button.item.tap', 'button.who', 'button.card', 'button[aria-label="Ripeti"]', '.pill'];
    for (var i = 0; i < order.length; i++) {
      var m = list.filter(function (el) { return el.matches(order[i]); });
      if (m.length) return m[0];
    }
    return list[0] || null;
  }
  function show(el) {
    try { el.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' }); } catch (e) { el.scrollIntoView(false); }
  }
  function focusEl(el) {
    if (!el) return;
    try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); }
    show(el);
  }
  /* Se il focus è fuori dal gioco (o su un pulsante sparito/disattivato) lo riporta su un elemento sensato. */
  function ensure() {
    var a = document.activeElement;
    if (inApp(a) && visible(a)) return;
    var list = candidates();
    if (list.length) focusEl(preferred(list));
  }

  function back() {
    var map = { play: 'home', home: 'start', gate: 'cancel', parents: 'exit' };
    var target = map[screen()];
    if (!target) return false;
    var btn = root().querySelector('[data-back="' + target + '"]');
    if (!btn) return false;
    btn.click();
    return true;
  }

  window.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return; /* scorciatoie del browser/sistema: non toccarle */
    var dir = NAMES[e.key] || KEY[e.keyCode];
    var t = e.target;
    var typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
    if (typing) return;
    if (dir) {
      usingKeys = true; document.documentElement.classList.add('tv-keys');
      var list = candidates();
      if (!list.length) return; /* niente da selezionare: lascia lo scorrimento al browser */
      var cur = document.activeElement;
      if (!inApp(cur) || !visible(cur)) { e.preventDefault(); focusEl(preferred(list)); return; }
      var next = best(cur, dir, list);
      e.preventDefault(); /* la freccia è gestita dal gioco: niente scorrimento né barra degli indirizzi */
      if (next) { focusEl(next); return; }
      /* Bordo: se la pagina può ancora scorrere in quella direzione, scorre un poco; altrimenti il focus resta dov'è. */
      var step = Math.round(window.innerHeight * 0.4);
      if (dir === 'up' && window.scrollY > 0) window.scrollBy({ top: -step, behavior: 'smooth' });
      if (dir === 'down' && window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 2) window.scrollBy({ top: step, behavior: 'smooth' });
      return;
    }
    if (isOk(e)) {
      var el = document.activeElement;
      if (!inApp(el)) { var l = candidates(); if (l.length) { e.preventDefault(); focusEl(preferred(l)); } return; }
      /* i <button> rispondono già a Invio; per gli altri elementi simuliamo il clic */
      if (el.tagName !== 'BUTTON' && el.tagName !== 'A' && el.tagName !== 'SUMMARY') { e.preventDefault(); el.click(); }
      return;
    }
    if (isBack(e)) {
      if (back()) { e.preventDefault(); setTimeout(ensure, 120); }
      /* nella schermata iniziale e nella buonanotte Indietro resta al browser/TV (uscita dall'app) */
    }
  }, true);

  /* Tasto Indietro dei browser TV che navigano nella cronologia: una voce di cronologia "interna". */
  var armed = false;
  function arm() { if (!armed && screen() && screen() !== 'start') { try { history.pushState({ mimi: 1 }, ''); armed = true; } catch (e) {} } }
  window.addEventListener('popstate', function () {
    if (!armed) return;
    armed = false;
    if (back()) setTimeout(function () { arm(); ensure(); }, 150);
  });

  /* Dopo ogni cambio di schermata o di domanda il focus viene rimesso su un elemento visibile. */
  var pending = false, hadTargets = false;
  function onChange() {
    if (pending) return; pending = true;
    requestAnimationFrame(function () {
      pending = false; arm();
      /* Quando nel gioco compare una nuova domanda (scelte o oggetti da toccare), il focus va sulle risposte. */
      var targets = root() ? Array.prototype.filter.call(root().querySelectorAll('button.chip, button.item.tap'), visible) : [];
      var has = targets.length > 0;
      /* Telefono/tablet: le risposte possono essere sotto lo schermo -> le portiamo in vista (senza selezionarle). */
      if (has && !hadTargets && !usingKeys && phoneMode()) {
        var box = targets[targets.length - 1].closest('div') || targets[targets.length - 1];
        show(box);
      }
      /* ...e dopo la scelta torniamo a mostrare il palco (personaggi che ballano, storia). */
      if (!has && hadTargets && !usingKeys && phoneMode()) {
        var stage = root().querySelector('.stagebox');
        if (stage) show(stage);
      }
      if (has && !hadTargets && (usingKeys || !phoneMode())) {
        var cur = document.activeElement;
        if (!(inApp(cur) && cur.matches('button.chip, button.item.tap') && visible(cur))) focusEl(preferred(targets));
      }
      hadTargets = has;
      if (usingKeys || (!phoneMode() && !inApp(document.activeElement))) ensure();
    });
  }
  function start() {
    if (!root()) return setTimeout(start, 100);
    new MutationObserver(onChange).observe(root(), { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled', 'class'] });
    /* su telefono/tablet (scelto nella prima schermata) non selezioniamo nulla: si usa il tocco */
    if (!phoneMode()) onChange(); else arm();
  }
  document.addEventListener('mousedown', function () { usingKeys = false; document.documentElement.classList.remove('tv-keys'); }, true);
  document.addEventListener('touchstart', function () { usingKeys = false; document.documentElement.classList.remove('tv-keys'); }, { capture: true, passive: true });
  start();
})();
