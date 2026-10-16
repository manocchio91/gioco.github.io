// Dev tool: runs every game/story with auto-answers and collects every spoken line.
const __mc = new MessageChannel(), __q = [];
let __posted = false;
const __drain = () => { __posted = false; const batch = __q.splice(0); for (const f of batch) { try { f(); } catch (e) { console.warn('harvest', e); } } if (__q.length && !__posted) { __posted = true; __mc.port2.postMessage(0); } };
__mc.port1.onmessage = __drain;
setInterval(() => { if (__q.length) __drain(); }, 500);
const tick = f => { __q.push(f); if (!__posted) { __posted = true; __mc.port2.postMessage(0); } };
window.harvest = async function (runsPer) {
  runsPer = runsPer || 25;
  const find = v => { if (!v) return null; if (v.__c && v.__c.startGame) return v.__c; for (const k of (v.__k || [])) { const r = find(k); if (r) return r; } return null; };
  const C = find(document.getElementById('app').__k);
  const lines = window.__lines = new Map(); window.__prog = [];
  const add = p => { if (p[0] === 'en' || p[0] === 'it') lines.set(p[0] + '|' + p[1], p); };
  C.speak = parts => { parts.forEach(add); return Promise.resolve(); };
  C.speakTTS = parts => { parts.forEach(add); return Promise.resolve(); };
  C.playClip = () => Promise.resolve();
  C.tone = () => {}; C.save = () => {};
  C.store.usage.ms = 0; C.store.usage.extra = 999;
  C.sleep = function () { const g = this.gen, self = this; return new Promise((res, rej) => tick(() => g === self.gen ? res() : rej({ cancelled: true }))); };
  C.run = function (fn) { this.stopFlow(); const self = this, g = this.gen; self.__idle = false; fn.call(this, g).catch(() => {}).finally(() => { if (g === self.gen) self.__idle = true; }); };
  let asks = 0;
  C.ask = function (opts) {
    opts = opts || {}; asks++;
    const self = this, g = this.gen;
    return new Promise((res, rej) => tick(() => {
      if (g !== self.gen || asks > 60) return rej({ cancelled: true });
      const r = Math.random(), taps = opts.taps || [], chips = opts.chips || [];
      if (opts.voice && r < 0.25) {
        const words = ['ball','cat','dog','red','blue','sock','apple','hat','duck','lion','pig','fish','frog','cow','bla','si','no','pink','green','yellow','white','teddy bear','balloon','present','sofa','box','one','two','three','four','five','chocolate','strawberry','cioccolato','fragola'];
        return res({ type: 'voice', alts: [words[Math.floor(Math.random() * words.length)]] });
      }
      if (opts.timeout && r < 0.4) return res({ type: 'timeout' });
      if (taps.length && (r < 0.75 || !chips.length)) return res({ type: 'tap', id: taps[Math.floor(Math.random() * taps.length)] });
      if (chips.length) { const c = chips.filter(c => c.id !== 'home'); const pickc = (c.length ? c : chips)[Math.floor(Math.random() * (c.length || chips.length))]; return res({ type: 'chip', id: pickc.id }); }
      if (opts.timeout) return res({ type: 'timeout' });
      rej({ cancelled: true });
    }));
  };
  let steps = 0; const _sleep = C.sleep; C.sleep = function () { steps++; return _sleep.apply(this, arguments); };
  const runOne = (start) => new Promise(done => {
    asks = 0; steps = 0; C.__idle = false; start();
    const g = C.gen;
    let spins = 0; const chk = () => { if (C.__idle || asks > 60 || steps > 3000 || ++spins > 50000) { window.__prog.push((C.__idle ? 'ok' : 'cap') + ' ' + asks + '/' + steps); C.stopFlow(); tick(done); return; } tick(chk); };
    tick(chk);
  });
  const games = window.__GAMES || ['where', 'dove', 'sounds', 'touch', 'peek', 'mission', 'mystery', 'story', 'dance'];
  const profs = window.__PROFS || ['stella', 'soleil', 'insieme'];
  const stories = (window.__STORY_IDS || []);
  for (const prof of profs) {
    C.profile = prof;
    for (let i = 0; i < 3; i++) { C.hello().forEach(add); }
    for (const id of games) for (let i = 0; i < runsPer; i++) await runOne(() => C.startGame(id));
    for (const id of stories) for (let i = 0; i < runsPer; i++) await runOne(() => C.startStory(id));
    await runOne(() => C.goNight());
  }
  return [...lines.values()];
};
