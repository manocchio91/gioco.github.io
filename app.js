(() => {
  // site/preact-htm.js
  var e;
  var n;
  var _;
  var t;
  var o;
  var r;
  var u;
  var l = {};
  var i = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(e2, n2) {
    for (var _2 in n2)
      e2[_2] = n2[_2];
    return e2;
  }
  function f(e2) {
    var n2 = e2.parentNode;
    n2 && n2.removeChild(e2);
  }
  function a(n2, _2, t2) {
    var o2, r2, u2, l2 = {};
    for (u2 in _2)
      "key" == u2 ? o2 = _2[u2] : "ref" == u2 ? r2 = _2[u2] : l2[u2] = _2[u2];
    if (arguments.length > 2 && (l2.children = arguments.length > 3 ? e.call(arguments, 2) : t2), "function" == typeof n2 && null != n2.defaultProps)
      for (u2 in n2.defaultProps)
        void 0 === l2[u2] && (l2[u2] = n2.defaultProps[u2]);
    return p(n2, l2, o2, r2, null);
  }
  function p(e2, t2, o2, r2, u2) {
    var l2 = { type: e2, props: t2, key: o2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == u2 ? ++_ : u2 };
    return null != n.vnode && n.vnode(l2), l2;
  }
  function h(e2) {
    return e2.children;
  }
  function d(e2, n2) {
    this.props = e2, this.context = n2;
  }
  function v(e2, n2) {
    if (null == n2)
      return e2.__ ? v(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
    for (var _2; n2 < e2.__k.length; n2++)
      if (null != (_2 = e2.__k[n2]) && null != _2.__e)
        return _2.__e;
    return "function" == typeof e2.type ? v(e2) : null;
  }
  function y(e2) {
    var n2, _2;
    if (null != (e2 = e2.__) && null != e2.__c) {
      for (e2.__e = e2.__c.base = null, n2 = 0; n2 < e2.__k.length; n2++)
        if (null != (_2 = e2.__k[n2]) && null != _2.__e) {
          e2.__e = e2.__c.base = _2.__e;
          break;
        }
      return y(e2);
    }
  }
  function m(e2) {
    (!e2.__d && (e2.__d = true) && t.push(e2) && !g.__r++ || r !== n.debounceRendering) && ((r = n.debounceRendering) || o)(g);
  }
  function g() {
    for (var e2; g.__r = t.length; )
      e2 = t.sort(function(e3, n2) {
        return e3.__v.__b - n2.__v.__b;
      }), t = [], e2.some(function(e3) {
        var n2, _2, t2, o2, r2, u2;
        e3.__d && (r2 = (o2 = (n2 = e3).__v).__e, (u2 = n2.__P) && (_2 = [], (t2 = s({}, o2)).__v = o2.__v + 1, P(u2, o2, t2, n2.__n, void 0 !== u2.ownerSVGElement, null != o2.__h ? [r2] : null, _2, null == r2 ? v(o2) : r2, o2.__h), D(_2, o2), o2.__e != r2 && y(o2)));
      });
  }
  function k(e2, n2, _2, t2, o2, r2, u2, c2, s2, f2) {
    var a2, d2, y2, m2, g2, k2, x2, H2 = t2 && t2.__k || i, E2 = H2.length;
    for (_2.__k = [], a2 = 0; a2 < n2.length; a2++)
      if (null != (m2 = _2.__k[a2] = null == (m2 = n2[a2]) || "boolean" == typeof m2 ? null : "string" == typeof m2 || "number" == typeof m2 || "bigint" == typeof m2 ? p(null, m2, null, null, m2) : Array.isArray(m2) ? p(h, { children: m2 }, null, null, null) : m2.__b > 0 ? p(m2.type, m2.props, m2.key, null, m2.__v) : m2)) {
        if (m2.__ = _2, m2.__b = _2.__b + 1, null === (y2 = H2[a2]) || y2 && m2.key == y2.key && m2.type === y2.type)
          H2[a2] = void 0;
        else
          for (d2 = 0; d2 < E2; d2++) {
            if ((y2 = H2[d2]) && m2.key == y2.key && m2.type === y2.type) {
              H2[d2] = void 0;
              break;
            }
            y2 = null;
          }
        P(e2, m2, y2 = y2 || l, o2, r2, u2, c2, s2, f2), g2 = m2.__e, (d2 = m2.ref) && y2.ref != d2 && (x2 || (x2 = []), y2.ref && x2.push(y2.ref, null, m2), x2.push(d2, m2.__c || g2, m2)), null != g2 ? (null == k2 && (k2 = g2), "function" == typeof m2.type && null != m2.__k && m2.__k === y2.__k ? m2.__d = s2 = b(m2, s2, e2) : s2 = C(e2, m2, y2, H2, g2, s2), f2 || "option" !== _2.type ? "function" == typeof _2.type && (_2.__d = s2) : e2.value = "") : s2 && y2.__e == s2 && s2.parentNode != e2 && (s2 = v(y2));
      }
    for (_2.__e = k2, a2 = E2; a2--; )
      null != H2[a2] && ("function" == typeof _2.type && null != H2[a2].__e && H2[a2].__e == _2.__d && (_2.__d = v(t2, a2 + 1)), U(H2[a2], H2[a2]));
    if (x2)
      for (a2 = 0; a2 < x2.length; a2++)
        T(x2[a2], x2[++a2], x2[++a2]);
  }
  function b(e2, n2, _2) {
    var t2, o2;
    for (t2 = 0; t2 < e2.__k.length; t2++)
      (o2 = e2.__k[t2]) && (o2.__ = e2, n2 = "function" == typeof o2.type ? b(o2, n2, _2) : C(_2, o2, o2, e2.__k, o2.__e, n2));
    return n2;
  }
  function C(e2, n2, _2, t2, o2, r2) {
    var u2, l2, i2;
    if (void 0 !== n2.__d)
      u2 = n2.__d, n2.__d = void 0;
    else if (null == _2 || o2 != r2 || null == o2.parentNode)
      e:
        if (null == r2 || r2.parentNode !== e2)
          e2.appendChild(o2), u2 = null;
        else {
          for (l2 = r2, i2 = 0; (l2 = l2.nextSibling) && i2 < t2.length; i2 += 2)
            if (l2 == o2)
              break e;
          e2.insertBefore(o2, r2), u2 = r2;
        }
    return void 0 !== u2 ? u2 : o2.nextSibling;
  }
  function x(e2, n2, _2) {
    "-" === n2[0] ? e2.setProperty(n2, _2) : e2[n2] = null == _2 ? "" : "number" != typeof _2 || c.test(n2) ? _2 : _2 + "px";
  }
  function H(e2, n2, _2, t2, o2) {
    var r2;
    e:
      if ("style" === n2)
        if ("string" == typeof _2)
          e2.style.cssText = _2;
        else {
          if ("string" == typeof t2 && (e2.style.cssText = t2 = ""), t2)
            for (n2 in t2)
              _2 && n2 in _2 || x(e2.style, n2, "");
          if (_2)
            for (n2 in _2)
              t2 && _2[n2] === t2[n2] || x(e2.style, n2, _2[n2]);
        }
      else if ("o" === n2[0] && "n" === n2[1])
        r2 = n2 !== (n2 = n2.replace(/Capture$/, "")), n2 = n2.toLowerCase() in e2 ? n2.toLowerCase().slice(2) : n2.slice(2), e2.l || (e2.l = {}), e2.l[n2 + r2] = _2, _2 ? t2 || e2.addEventListener(n2, r2 ? S : E, r2) : e2.removeEventListener(n2, r2 ? S : E, r2);
      else if ("dangerouslySetInnerHTML" !== n2) {
        if (o2)
          n2 = n2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== n2 && "list" !== n2 && "form" !== n2 && "tabIndex" !== n2 && "download" !== n2 && n2 in e2)
          try {
            e2[n2] = null == _2 ? "" : _2;
            break e;
          } catch (e3) {
          }
        "function" == typeof _2 || (null != _2 && (false !== _2 || "a" === n2[0] && "r" === n2[1]) ? e2.setAttribute(n2, _2) : e2.removeAttribute(n2));
      }
  }
  function E(e2) {
    this.l[e2.type + false](n.event ? n.event(e2) : e2);
  }
  function S(e2) {
    this.l[e2.type + true](n.event ? n.event(e2) : e2);
  }
  function P(e2, _2, t2, o2, r2, u2, l2, i2, c2) {
    var f2, a2, p2, v2, y2, m2, g2, b2, C2, x2, H2, E2 = _2.type;
    if (void 0 !== _2.constructor)
      return null;
    null != t2.__h && (c2 = t2.__h, i2 = _2.__e = t2.__e, _2.__h = null, u2 = [i2]), (f2 = n.__b) && f2(_2);
    try {
      e:
        if ("function" == typeof E2) {
          if (b2 = _2.props, C2 = (f2 = E2.contextType) && o2[f2.__c], x2 = f2 ? C2 ? C2.props.value : f2.__ : o2, t2.__c ? g2 = (a2 = _2.__c = t2.__c).__ = a2.__E : ("prototype" in E2 && E2.prototype.render ? _2.__c = a2 = new E2(b2, x2) : (_2.__c = a2 = new d(b2, x2), a2.constructor = E2, a2.render = A), C2 && C2.sub(a2), a2.props = b2, a2.state || (a2.state = {}), a2.context = x2, a2.__n = o2, p2 = a2.__d = true, a2.__h = []), null == a2.__s && (a2.__s = a2.state), null != E2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = s({}, a2.__s)), s(a2.__s, E2.getDerivedStateFromProps(b2, a2.__s))), v2 = a2.props, y2 = a2.state, p2)
            null == E2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
          else {
            if (null == E2.getDerivedStateFromProps && b2 !== v2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(b2, x2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(b2, a2.__s, x2) || _2.__v === t2.__v) {
              a2.props = b2, a2.state = a2.__s, _2.__v !== t2.__v && (a2.__d = false), a2.__v = _2, _2.__e = t2.__e, _2.__k = t2.__k, _2.__k.forEach(function(e3) {
                e3 && (e3.__ = _2);
              }), a2.__h.length && l2.push(a2);
              break e;
            }
            null != a2.componentWillUpdate && a2.componentWillUpdate(b2, a2.__s, x2), null != a2.componentDidUpdate && a2.__h.push(function() {
              a2.componentDidUpdate(v2, y2, m2);
            });
          }
          a2.context = x2, a2.props = b2, a2.state = a2.__s, (f2 = n.__r) && f2(_2), a2.__d = false, a2.__v = _2, a2.__P = e2, f2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s, null != a2.getChildContext && (o2 = s(s({}, o2), a2.getChildContext())), p2 || null == a2.getSnapshotBeforeUpdate || (m2 = a2.getSnapshotBeforeUpdate(v2, y2)), H2 = null != f2 && f2.type === h && null == f2.key ? f2.props.children : f2, k(e2, Array.isArray(H2) ? H2 : [H2], _2, t2, o2, r2, u2, l2, i2, c2), a2.base = _2.__e, _2.__h = null, a2.__h.length && l2.push(a2), g2 && (a2.__E = a2.__ = null), a2.__e = false;
        } else
          null == u2 && _2.__v === t2.__v ? (_2.__k = t2.__k, _2.__e = t2.__e) : _2.__e = w(t2.__e, _2, t2, o2, r2, u2, l2, c2);
      (f2 = n.diffed) && f2(_2);
    } catch (e3) {
      _2.__v = null, (c2 || null != u2) && (_2.__e = i2, _2.__h = !!c2, u2[u2.indexOf(i2)] = null), n.__e(e3, _2, t2);
    }
  }
  function D(e2, _2) {
    n.__c && n.__c(_2, e2), e2.some(function(_3) {
      try {
        e2 = _3.__h, _3.__h = [], e2.some(function(e3) {
          e3.call(_3);
        });
      } catch (e3) {
        n.__e(e3, _3.__v);
      }
    });
  }
  function w(n2, _2, t2, o2, r2, u2, i2, c2) {
    var s2, a2, p2, h2 = t2.props, d2 = _2.props, y2 = _2.type, m2 = 0;
    if ("svg" === y2 && (r2 = true), null != u2) {
      for (; m2 < u2.length; m2++)
        if ((s2 = u2[m2]) && (s2 === n2 || (y2 ? s2.localName == y2 : 3 == s2.nodeType))) {
          n2 = s2, u2[m2] = null;
          break;
        }
    }
    if (null == n2) {
      if (null === y2)
        return document.createTextNode(d2);
      n2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", y2) : document.createElement(y2, d2.is && d2), u2 = null, c2 = false;
    }
    if (null === y2)
      h2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
    else {
      if (u2 = u2 && e.call(n2.childNodes), a2 = (h2 = t2.props || l).dangerouslySetInnerHTML, p2 = d2.dangerouslySetInnerHTML, !c2) {
        if (null != u2)
          for (h2 = {}, m2 = 0; m2 < n2.attributes.length; m2++)
            h2[n2.attributes[m2].name] = n2.attributes[m2].value;
        (p2 || a2) && (p2 && (a2 && p2.__html == a2.__html || p2.__html === n2.innerHTML) || (n2.innerHTML = p2 && p2.__html || ""));
      }
      if (function(e2, n3, _3, t3, o3) {
        var r3;
        for (r3 in _3)
          "children" === r3 || "key" === r3 || r3 in n3 || H(e2, r3, null, _3[r3], t3);
        for (r3 in n3)
          o3 && "function" != typeof n3[r3] || "children" === r3 || "key" === r3 || "value" === r3 || "checked" === r3 || _3[r3] === n3[r3] || H(e2, r3, n3[r3], _3[r3], t3);
      }(n2, d2, h2, r2, c2), p2)
        _2.__k = [];
      else if (m2 = _2.props.children, k(n2, Array.isArray(m2) ? m2 : [m2], _2, t2, o2, r2 && "foreignObject" !== y2, u2, i2, u2 ? u2[0] : t2.__k && v(t2, 0), c2), null != u2)
        for (m2 = u2.length; m2--; )
          null != u2[m2] && f(u2[m2]);
      c2 || ("value" in d2 && void 0 !== (m2 = d2.value) && (m2 !== n2.value || "progress" === y2 && !m2) && H(n2, "value", m2, h2.value, false), "checked" in d2 && void 0 !== (m2 = d2.checked) && m2 !== n2.checked && H(n2, "checked", m2, h2.checked, false));
    }
    return n2;
  }
  function T(e2, _2, t2) {
    try {
      "function" == typeof e2 ? e2(_2) : e2.current = _2;
    } catch (e3) {
      n.__e(e3, t2);
    }
  }
  function U(e2, _2, t2) {
    var o2, r2;
    if (n.unmount && n.unmount(e2), (o2 = e2.ref) && (o2.current && o2.current !== e2.__e || T(o2, null, _2)), null != (o2 = e2.__c)) {
      if (o2.componentWillUnmount)
        try {
          o2.componentWillUnmount();
        } catch (e3) {
          n.__e(e3, _2);
        }
      o2.base = o2.__P = null;
    }
    if (o2 = e2.__k)
      for (r2 = 0; r2 < o2.length; r2++)
        o2[r2] && U(o2[r2], _2, "function" != typeof e2.type);
    t2 || null == e2.__e || f(e2.__e), e2.__e = e2.__d = void 0;
  }
  function A(e2, n2, _2) {
    return this.constructor(e2, _2);
  }
  function M(_2, t2, o2) {
    var r2, u2, i2;
    n.__ && n.__(_2, t2), u2 = (r2 = "function" == typeof o2) ? null : o2 && o2.__k || t2.__k, i2 = [], P(t2, _2 = (!r2 && o2 || t2).__k = a(h, null, [_2]), u2 || l, l, void 0 !== t2.ownerSVGElement, !r2 && o2 ? [o2] : u2 ? null : t2.firstChild ? e.call(t2.childNodes) : null, i2, !r2 && o2 ? o2 : u2 ? u2.__e : t2.firstChild, r2), D(i2, _2);
  }
  e = i.slice, n = { __e: function(e2, n2) {
    for (var _2, t2, o2; n2 = n2.__; )
      if ((_2 = n2.__c) && !_2.__)
        try {
          if ((t2 = _2.constructor) && null != t2.getDerivedStateFromError && (_2.setState(t2.getDerivedStateFromError(e2)), o2 = _2.__d), null != _2.componentDidCatch && (_2.componentDidCatch(e2), o2 = _2.__d), o2)
            return _2.__E = _2;
        } catch (n3) {
          e2 = n3;
        }
    throw e2;
  } }, _ = 0, d.prototype.setState = function(e2, n2) {
    var _2;
    _2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof e2 && (e2 = e2(s({}, _2), this.props)), e2 && s(_2, e2), null != e2 && this.__v && (n2 && this.__h.push(n2), m(this));
  }, d.prototype.forceUpdate = function(e2) {
    this.__v && (this.__e = true, e2 && this.__h.push(e2), m(this));
  }, d.prototype.render = h, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, u = 0;
  var L;
  var N;
  var W;
  var I = [];
  var O = n.__b;
  var V = n.__r;
  var q = n.diffed;
  var B = n.__c;
  var $ = n.unmount;
  function te() {
    I.forEach(function(e2) {
      if (e2.__P)
        try {
          e2.__H.__h.forEach(re), e2.__H.__h.forEach(ue), e2.__H.__h = [];
        } catch (_2) {
          e2.__H.__h = [], n.__e(_2, e2.__v);
        }
    }), I = [];
  }
  n.__b = function(e2) {
    N = null, O && O(e2);
  }, n.__r = function(e2) {
    V && V(e2), L = 0;
    var n2 = (N = e2.__c).__H;
    n2 && (n2.__h.forEach(re), n2.__h.forEach(ue), n2.__h = []);
  }, n.diffed = function(e2) {
    q && q(e2);
    var _2 = e2.__c;
    _2 && _2.__H && _2.__H.__h.length && (1 !== I.push(_2) && W === n.requestAnimationFrame || ((W = n.requestAnimationFrame) || function(e3) {
      var n2, _3 = function() {
        clearTimeout(t2), oe && cancelAnimationFrame(n2), setTimeout(e3);
      }, t2 = setTimeout(_3, 100);
      oe && (n2 = requestAnimationFrame(_3));
    })(te)), N = void 0;
  }, n.__c = function(e2, _2) {
    _2.some(function(e3) {
      try {
        e3.__h.forEach(re), e3.__h = e3.__h.filter(function(e4) {
          return !e4.__ || ue(e4);
        });
      } catch (t2) {
        _2.some(function(e4) {
          e4.__h && (e4.__h = []);
        }), _2 = [], n.__e(t2, e3.__v);
      }
    }), B && B(e2, _2);
  }, n.unmount = function(e2) {
    $ && $(e2);
    var _2 = e2.__c;
    if (_2 && _2.__H)
      try {
        _2.__H.__.forEach(re);
      } catch (e3) {
        n.__e(e3, _2.__v);
      }
  };
  var oe = "function" == typeof requestAnimationFrame;
  function re(e2) {
    var n2 = N;
    "function" == typeof e2.__c && e2.__c(), N = n2;
  }
  function ue(e2) {
    var n2 = N;
    e2.__c = e2.__(), N = n2;
  }
  var ce = function(e2, n2, _2, t2) {
    var o2;
    n2[0] = 0;
    for (var r2 = 1; r2 < n2.length; r2++) {
      var u2 = n2[r2++], l2 = n2[r2] ? (n2[0] |= u2 ? 1 : 2, _2[n2[r2++]]) : n2[++r2];
      3 === u2 ? t2[0] = l2 : 4 === u2 ? t2[1] = Object.assign(t2[1] || {}, l2) : 5 === u2 ? (t2[1] = t2[1] || {})[n2[++r2]] = l2 : 6 === u2 ? t2[1][n2[++r2]] += l2 + "" : u2 ? (o2 = e2.apply(l2, ce(e2, l2, _2, ["", null])), t2.push(o2), l2[0] ? n2[0] |= 2 : (n2[r2 - 2] = 0, n2[r2] = o2)) : t2.push(l2);
    }
    return t2;
  };
  var se = /* @__PURE__ */ new Map();
  var fe = function(e2) {
    var n2 = se.get(this);
    return n2 || (n2 = /* @__PURE__ */ new Map(), se.set(this, n2)), (n2 = ce(this, n2.get(e2) || (n2.set(e2, n2 = function(e3) {
      for (var n3, _2, t2 = 1, o2 = "", r2 = "", u2 = [0], l2 = function(e4) {
        1 === t2 && (e4 || (o2 = o2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? u2.push(0, e4, o2) : 3 === t2 && (e4 || o2) ? (u2.push(3, e4, o2), t2 = 2) : 2 === t2 && "..." === o2 && e4 ? u2.push(4, e4, 0) : 2 === t2 && o2 && !e4 ? u2.push(5, 0, true, o2) : t2 >= 5 && ((o2 || !e4 && 5 === t2) && (u2.push(t2, 0, o2, _2), t2 = 6), e4 && (u2.push(t2, e4, 0, _2), t2 = 6)), o2 = "";
      }, i2 = 0; i2 < e3.length; i2++) {
        i2 && (1 === t2 && l2(), l2(i2));
        for (var c2 = 0; c2 < e3[i2].length; c2++)
          n3 = e3[i2][c2], 1 === t2 ? "<" === n3 ? (l2(), u2 = [u2], t2 = 3) : o2 += n3 : 4 === t2 ? "--" === o2 && ">" === n3 ? (t2 = 1, o2 = "") : o2 = n3 + o2[0] : r2 ? n3 === r2 ? r2 = "" : o2 += n3 : '"' === n3 || "'" === n3 ? r2 = n3 : ">" === n3 ? (l2(), t2 = 1) : t2 && ("=" === n3 ? (t2 = 5, _2 = o2, o2 = "") : "/" === n3 && (t2 < 5 || ">" === e3[i2][c2 + 1]) ? (l2(), 3 === t2 && (u2 = u2[0]), t2 = u2, (u2 = u2[0]).push(2, 0, t2), t2 = 0) : " " === n3 || "	" === n3 || "\n" === n3 || "\r" === n3 ? (l2(), t2 = 2) : o2 += n3), 3 === t2 && "!--" === o2 && (t2 = 4, u2 = u2[0]);
      }
      return l2(), u2;
    }(e2)), n2), arguments, [])).length > 1 ? n2 : n2[0];
  }.bind(a);

  // site/app.js
  var DCLogic = class extends d {
    render() {
      var v2 = this.renderVals();
      return TEMPLATE.call(this, v2);
    }
  };
  function TEMPLATE(v2) {
    return fe`<div data-screen=${v2.screenName} style="min-height: 100vh; box-sizing: border-box; display: flex; flex-direction: column; background: #FFF6EA; color: #3A2418; font-family: 'Baloo 2', 'Trebuchet MS', sans-serif">

${v2.showHeader ? fe`
<header style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px; padding: 12px clamp(12px, 3vw, 32px)">
<button class="pill" onClick=${v2.goHome} aria-label="Casa di Mimì">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>
</button>
<div style="flex: 1 1 180px; min-width: 0; font-size: clamp(28px, 3.6vw, 40px); font-weight: 800; line-height: 1; color: #C41E30">Mimì <span style="color: #3A2418; font-weight: 600">e</span> <span style="color: #D9741A">Pepe</span></div>
<button class="pill" data-back="start" onClick=${v2.goStart} aria-label="Cambia chi gioca">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" /><circle cx="17.5" cy="9" r="2.6" /><path d="M17 14.2c2.6.2 4.2 2 4.6 4.8" /></svg>
${v2.profileLabel}
</button>
<span class="pill" style="box-shadow: none; background: #FBE7CF">
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2" /><path d="M9 2h6" /></svg>
${v2.timeLeft}
</span>
<button class="pill" onClick=${v2.goGate} aria-label="Area genitori">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2.5" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
</button>
</header>
` : null}

${v2.isStart ? fe`
<section style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: clamp(14px, 2.4vw, 26px); padding: clamp(12px, 2.5vw, 28px) clamp(12px, 3vw, 32px) 32px">
<div class="bg-wide" style="position: relative; width: 100%; max-width: 1180px; aspect-ratio: 16 / 7; min-height: 240px; border-radius: 36px; overflow: hidden; box-shadow: 0 10px 0 rgba(58,36,24,.12)">
<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,246,234,0) 40%, rgba(255,246,234,.35) 100%)"></div>
<img src="a/hero_mimi.webp" alt="Mimì" class="a-idle" style="position: absolute; left: 4%; bottom: 2%; height: 92%; width: auto" />
<img src="a/hero_pepe.webp" alt="Pepe" class="a-float" style="position: absolute; right: 4%; bottom: 4%; height: 62%; width: auto" />
<div style="position: absolute; left: 50%; top: 9%; transform: translateX(-50%); text-align: center; width: 46%">
<div style="font-size: clamp(42px, 7.4vw, 104px); font-weight: 800; line-height: .95; color: #C41E30; text-shadow: 0 4px 0 #FFFFFF, 0 8px 18px rgba(58,36,24,.25)">Mimì <span style="color: #FFFFFF; text-shadow: 0 3px 10px rgba(58,36,24,.4)">e</span> <span style="color: #D9741A">Pepe</span></div>
<div lang="en" style="margin-top: 6px; display: inline-block; background: rgba(255,255,255,.88); border-radius: 999px; padding: 4px 18px; font-size: clamp(15px, 1.8vw, 22px); font-weight: 700">Let's play in English!</div>
</div>
</div>
<div class="devtabs" role="radiogroup" aria-label="Dove giochi?">
<span class="devq">Dove giochi?</span>
<button class=${"devtab " + v2.devPhoneCls} role="radio" aria-checked=${v2.devPhoneOn} onClick=${v2.setDevPhone}>
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></svg>
Telefono / tablet
</button>
<button class=${"devtab " + v2.devTvCls} role="radio" aria-checked=${v2.devTvOn} onClick=${v2.setDevTv}>
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4" width="19" height="12.5" rx="2" /><path d="M8 20.5h8" /><path d="M12 16.5v4" /></svg>
TV con telecomando
</button>
</div>
<h1 style="margin: 0; font-size: clamp(30px, 4vw, 48px); font-weight: 800; line-height: 1; text-align: center">Chi gioca oggi?</h1>
<div style="width: 100%; max-width: 1100px; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(14px, 2vw, 24px)">
<button class="who" onClick=${v2.pickStella} style="background: #FFE7EE">
<img src="a/star.svg" alt="" style="width: 96px; height: 96px" />
<span style="font-size: clamp(34px, 4vw, 48px); font-weight: 800; line-height: 1">Stella</span>
<span style="font-size: 18px; color: #6B4A3A">2 anni · ascolta, tocca e balla</span>
</button>
<button class="who" onClick=${v2.pickSoleil} style="background: #FFF0C2">
<svg width="96" height="96" viewBox="0 0 100 100" aria-hidden="true"><g stroke="#F2A01E" stroke-width="7" stroke-linecap="round"><path d="M50 6v12" /><path d="M50 82v12" /><path d="M6 50h12" /><path d="M82 50h12" /><path d="M19 19l8 8" /><path d="M73 73l8 8" /><path d="M19 81l8-8" /><path d="M73 27l8-8" /></g><circle cx="50" cy="50" r="24" fill="#FFC93C" stroke="#F2A01E" stroke-width="4" /><circle cx="42" cy="46" r="3.5" fill="#6B3A12" /><circle cx="58" cy="46" r="3.5" fill="#6B3A12" /><path d="M41 57q9 8 18 0" stroke="#6B3A12" stroke-width="3.5" fill="none" stroke-linecap="round" /></svg>
<span style="font-size: clamp(34px, 4vw, 48px); font-weight: 800; line-height: 1">Soleil</span>
<span style="font-size: 18px; color: #6B4A3A">5 anni · parla, cerca e risolve</span>
</button>
<button class="who" onClick=${v2.pickInsieme} style="background: #DFF1FF">
<div style="display: flex; align-items: center; gap: 4px">
<img src="a/star.svg" alt="" style="width: 70px; height: 70px" />
<svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true"><g stroke="#F2A01E" stroke-width="7" stroke-linecap="round"><path d="M50 6v12" /><path d="M50 82v12" /><path d="M6 50h12" /><path d="M82 50h12" /><path d="M19 19l8 8" /><path d="M73 73l8 8" /><path d="M19 81l8-8" /><path d="M73 27l8-8" /></g><circle cx="50" cy="50" r="24" fill="#FFC93C" stroke="#F2A01E" stroke-width="4" /></svg>
</div>
<span style="font-size: clamp(30px, 3.6vw, 44px); font-weight: 800; line-height: 1">Soleil e Stella</span>
<span style="font-size: 18px; color: #6B4A3A">insieme · a turni, in squadra</span>
</button>
</div>
<button onClick=${v2.goGate} style="border: 0; background: transparent; font-size: 17px; font-weight: 700; color: #6B4A3A; text-decoration: underline; min-height: 44px">Area genitori</button>
</section>
` : null}

${v2.isHome ? fe`
<section style="flex: 1; display: flex; flex-direction: column; gap: 18px; padding: 0 clamp(12px, 3vw, 32px) 36px; width: 100%; max-width: 1240px; margin: 0 auto; box-sizing: border-box">
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 14px; background: #FFFFFF; border-radius: 28px; padding: 12px 16px; box-shadow: 0 5px 0 rgba(58,36,24,.1)">
<img src=${v2.capFace} alt="Mimì" style="width: 84px; height: 84px; border-radius: 50%; object-fit: cover; border: 4px solid #D7263D; flex: none" />
<div aria-live="polite" style="flex: 1 1 240px; min-width: 0">
<div lang="en" style="font-size: clamp(22px, 2.6vw, 32px); font-weight: 800; line-height: 1.1">${v2.subEn}</div>
<div lang="it" style="font-size: clamp(16px, 1.8vw, 21px); color: #6B4A3A; line-height: 1.25">${v2.subIt}</div>
</div>
<button class="pill" onClick=${v2.repeatLast} aria-label="Ripeti">
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z" /><path d="M16.5 8.5a5 5 0 0 1 0 7" /></svg>
</button>
</div>

<h2 style="margin: 6px 0 0; font-size: clamp(28px, 3.2vw, 38px); font-weight: 800; line-height: 1">Giochi</h2>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: clamp(12px, 1.8vw, 20px)">
${(v2.games || []).map(function(g2) {
      return fe`
<button class="card" onClick=${g2.play} style="background: ${g2.bg}">
<img src=${g2.img} alt="" style="height: 130px; width: 100%; object-fit: contain" />
<span lang="en" style="font-size: clamp(22px, 2.3vw, 28px); font-weight: 800; line-height: 1.05">${g2.title}</span>
<span lang="it" style="font-size: 16px; color: #6B4A3A; line-height: 1.2">${g2.sub}</span>
${g2.hasTag ? fe`<span style="margin-top: 4px; font-size: 14px; font-weight: 800; border-radius: 999px; padding: 2px 10px; background: #3A2418; color: #FFFFFF">${g2.tag}</span>` : null}
</button>
`;
    })}
</div>

<h2 style="margin: 10px 0 0; font-size: clamp(28px, 3.2vw, 38px); font-weight: 800; line-height: 1">Storie</h2>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: clamp(12px, 1.8vw, 20px)">
${(v2.stories || []).map(function(st) {
      return fe`
<button class="card" onClick=${st.play} style="background: ${st.bg}; flex-direction: row; text-align: left; gap: 14px; padding: 14px 18px">
<img src=${st.img} alt="" style="width: 96px; height: 96px; object-fit: contain; flex: none" />
<span style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px; min-width: 0">
<span style="font-size: 13px; font-weight: 800; border-radius: 999px; padding: 1px 10px; background: #3A2418; color: #FFFFFF">${st.tag}</span>
<span lang="it" style="font-size: clamp(20px, 2.1vw, 25px); font-weight: 800; line-height: 1.08">${st.title}</span>
<span lang="en" style="font-size: 15px; color: #6B4A3A; line-height: 1.2">${st.en}</span>
</span>
</button>
`;
    })}
<button class="card" onClick=${v2.playStory} style="background: #F3E8FF; flex-direction: row; text-align: left; gap: 14px; padding: 14px 18px">
<img src="a/cake_choco.svg" alt="" style="width: 110px; height: 100px; object-fit: contain; flex: none" />
<span style="display: flex; flex-direction: column; gap: 2px">
<span lang="en" style="font-size: clamp(22px, 2.3vw, 28px); font-weight: 800; line-height: 1.05">Pepe's Birthday Party</span>
<span lang="it" style="font-size: 16px; color: #6B4A3A; line-height: 1.25">La festa di Pepe: palloncini nascosti, una torta da scegliere e un gatto che ruba il cappello!</span>
</span>
</button>
</div>

<h2 style="margin: 10px 0 0; font-size: clamp(28px, 3.2vw, 38px); font-weight: 800; line-height: 1">Mondi</h2>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: clamp(12px, 1.8vw, 20px)">
${(v2.worlds || []).map(function(w2) {
      return fe`
<div style="background: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 5px 0 rgba(58,36,24,.1); opacity: ${w2.op}">
<img src=${w2.img} alt="" style="display: block; width: 100%; height: 110px; object-fit: cover" />
<div style="padding: 8px 14px 12px">
<div lang="en" style="font-size: 22px; font-weight: 800; line-height: 1.05">${w2.name}</div>
<div lang="it" style="font-size: 15px; color: #6B4A3A">${w2.sub}</div>
<div style="margin-top: 4px; display: inline-block; font-size: 13px; font-weight: 800; border-radius: 999px; padding: 1px 10px; background: ${w2.chipBg}; color: ${w2.chipFg}">${w2.status}</div>
</div>
</div>
`;
    })}
</div>

<details style="background: #FFFFFF; border-radius: 24px; padding: 14px 20px; box-shadow: 0 4px 0 rgba(58,36,24,.08)">
<summary style="font-size: 20px; font-weight: 800; cursor: pointer">Catalogo completo delle 20 attività (per i grandi)</summary>
<p style="margin: 8px 0; font-size: 16px; color: #6B4A3A">"Gioca" = già giocabile qui. "Previsto" = definito nel Masterplan, da costruire. "Proposta" = idea nuova da approvare.</p>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 8px">
${(v2.catalog || []).map(function(c2) {
      return fe`
<div style="display: flex; align-items: center; gap: 10px; border-radius: 14px; background: #FFF6EA; padding: 8px 12px">
<span style="flex: 1; min-width: 0"><strong style="font-size: 17px">${c2.name}</strong><br /><span style="font-size: 14px; color: #6B4A3A">${c2.who} · ${c2.cat}</span></span>
<span style="font-size: 13px; font-weight: 800; border-radius: 999px; padding: 2px 10px; background: ${c2.bg}; color: ${c2.fg}">${c2.status}</span>
</div>
`;
    })}
</div>
</details>
</section>
` : null}

${v2.isPlay ? fe`
<section style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 0 clamp(8px, 2vw, 28px) 24px">
<div style="width: 100%; max-width: min(1400px, calc((100vh - 250px) * 1.7778)); min-width: min(100%, 320px)">
<div class="stagebox ${v2.stageCls}" style="position: relative; width: 100%; aspect-ratio: 16 / 9; border-radius: clamp(16px, 2.4vw, 30px); overflow: hidden; background: #E9CBA0; box-shadow: 0 8px 0 rgba(58,36,24,.14)">
<div class=${v2.wallCls} style="position: absolute; left: 0; right: 0; top: 0; height: 66%; filter: ${v2.wallFilter}"></div>
<div class=${v2.floorCls} style="position: absolute; left: 0; right: 0; bottom: 0; height: 38%; filter: ${v2.wallFilter}"></div>
${v2.showRug ? fe`<div style="position: absolute; left: 8%; right: 8%; bottom: 3%; height: 27%; border-radius: 50%; background: repeating-radial-gradient(ellipse at center, #F6D8A8 0 6%, #E98A8A 6% 9%, #F6D8A8 9% 15%, #8FC6E8 15% 18%, #F6D8A8 18% 24%, #F2C14A 24% 27%); opacity: .85; filter: ${v2.wallFilter}"></div>` : null}
<div style="position: absolute; left: 0; right: 0; top: 62%; height: 5%; background: linear-gradient(180deg, rgba(58,36,24,.25), rgba(58,36,24,0))"></div>

${(v2.items || []).map(function(it) {
      return fe`
<button class="item ${it.cls}" onClick=${it.tap} disabled=${it.off} aria-label=${it.label} style="left: ${it.x}%; top: ${it.y}%; width: ${it.w}%; z-index: ${it.z}; transition: left ${it.ms}ms ease-in-out, top ${it.ms}ms ease-in-out, width ${it.ms}ms ease-in-out, opacity .35s">
<img class=${it.anim} src=${it.src} alt="" />
</button>
`;
    })}

<div class="actor" style="left: ${v2.pepe.x}%; top: ${v2.pepe.y}%; height: ${v2.pepe.h}%; z-index: ${v2.pepe.z}; opacity: ${v2.pepe.op}; transition: left ${v2.pepe.ms}ms linear, top ${v2.pepe.ms}ms linear, height ${v2.pepe.ms}ms linear, opacity .4s">
<img class=${v2.pepe.anim} src=${v2.pepe.src} alt="Pepe" style="transform: scaleX(${v2.pepe.flip})" />
</div>
<div class="actor" style="left: ${v2.mimi.x}%; top: ${v2.mimi.y}%; height: ${v2.mimi.h}%; z-index: ${v2.mimi.z}; transition: left ${v2.mimi.ms}ms linear, top ${v2.mimi.ms}ms linear, height ${v2.mimi.ms}ms linear">
<img class=${v2.mimi.anim} src=${v2.mimi.src} alt="Mimì" style="transform: scaleX(${v2.mimi.flip})" />
</div>

${v2.is3d ? fe`<canvas data-mimi3d="1" ref=${v2.setCanvas} style="position: absolute; inset: 0; left: 0; top: 0; width: 100%; height: 100%; z-index: 50; display: block"></canvas>` : null}
${v2.hasCount ? fe`<div aria-live="polite" style="position: absolute; left: 50%; top: 9%; transform: translateX(-50%); z-index: 410; font-size: clamp(48px, 9vw, 120px); font-weight: 800; line-height: 1; color: #FFFFFF; text-shadow: 0 5px 0 #C41E30, 0 10px 20px rgba(58,36,24,.35)">${v2.countText}</div>` : null}
${v2.hasStep ? fe`<div style="position: absolute; left: 50%; bottom: 4%; transform: translateX(-50%); z-index: 410; background: rgba(255,255,255,.94); border-radius: 999px; padding: 6px 26px; text-align: center; box-shadow: 0 5px 0 rgba(58,36,24,.15)"><div lang="en" style="font-size: clamp(20px, 2.8vw, 36px); font-weight: 800; line-height: 1.05">${v2.stepLabel}</div><div lang="it" style="font-size: clamp(14px, 1.6vw, 19px); color: #6B4A3A">${v2.stepSub}</div></div>` : null}
${(v2.bursts || []).map(function(b2) {
      return fe`
<img class="burst" src="a/star.svg" alt="" style="left: ${b2.x}%; top: ${b2.y}%; animation-delay: ${b2.d}ms; z-index: 300" />
`;
    })}

<div style="position: absolute; left: 1.4%; top: 2.4%; z-index: 400; display: flex; flex-wrap: wrap; gap: 6px">
<span style="background: rgba(255,255,255,.92); border-radius: 999px; padding: 3px 14px; font-size: clamp(13px, 1.5vw, 19px); font-weight: 800">${v2.playTitle}</span>
${v2.hasTurn ? fe`<span style="background: ${v2.turnBg}; color: #FFFFFF; border-radius: 999px; padding: 3px 14px; font-size: clamp(13px, 1.5vw, 19px); font-weight: 800">${v2.turnLabel}</span>` : null}
</div>
${v2.hasStars ? fe`
<div style="position: absolute; right: 1.4%; top: 2.4%; z-index: 400; display: flex; align-items: center; gap: 4px; background: rgba(255,255,255,.92); border-radius: 999px; padding: 3px 14px; font-size: clamp(14px, 1.6vw, 20px); font-weight: 800">
<img src="a/star.svg" alt="" style="width: 1.3em; height: 1.3em" />${v2.starsNow}
</div>
` : null}
</div>
</div>

<div style="width: 100%; max-width: min(1400px, calc((100vh - 250px) * 1.7778)); min-width: min(100%, 320px); box-sizing: border-box; display: flex; flex-wrap: wrap; align-items: center; gap: 12px; background: #FFFFFF; border-radius: 24px; padding: 10px 14px; box-shadow: 0 5px 0 rgba(58,36,24,.1)">
<img src=${v2.capFace} alt=${v2.capWho} style="width: 68px; height: 68px; border-radius: 50%; object-fit: cover; border: 4px solid ${v2.capRing}; flex: none" />
<div aria-live="polite" style="flex: 1 1 220px; min-width: 0">
<div lang="en" style="font-size: clamp(20px, 2.4vw, 30px); font-weight: 800; line-height: 1.1">${v2.subEn}</div>
<div lang="it" style="font-size: clamp(15px, 1.7vw, 20px); color: #6B4A3A; line-height: 1.25">${v2.subIt}</div>
${v2.hasMicMsg ? fe`<div style="font-size: 15px; font-weight: 700; color: #2F5DA8">${v2.micMsg}</div>` : null}
</div>
<button class="pill" onClick=${v2.repeatLast} aria-label="Ripeti">
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z" /><path d="M16.5 8.5a5 5 0 0 1 0 7" /></svg>
</button>
${v2.canMic ? fe`
<button class="pill" onClick=${v2.listen} style="background: #2F5DA8; color: #FFFFFF; min-height: 56px; padding: 6px 22px">
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /></svg>
${v2.micLabel}
</button>
` : null}
</div>

${v2.hasChips ? fe`
<div style="width: 100%; max-width: 1400px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px">
${(v2.chips || []).map(function(c2) {
      return fe`
<button class="chip ${c2.cls}" onClick=${c2.tap}>
${c2.hasImg ? fe`<img src=${c2.img} alt="" style="width: 44px; height: 44px; object-fit: contain" />` : null}
${c2.hasSwatch ? fe`<span style="width: 40px; height: 40px; border-radius: 50%; background: ${c2.swatch}; box-shadow: inset 0 -5px 0 rgba(0,0,0,.15)"></span>` : null}
<span style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.05"><span lang="en">${c2.label}</span>${c2.hasSub ? fe`<span lang="it" style="font-size: 15px; font-weight: 600; opacity: .8">${c2.sub}</span>` : null}</span>
</button>
`;
    })}
</div>
` : null}

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px">
<button class="pill" data-back="home" onClick=${v2.goHome}>
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
Torna a casa
</button>
</div>
</section>
` : null}

${v2.isGate ? fe`
<section style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 24px 16px">
<div style="width: 100%; max-width: 440px; background: #FFFFFF; border-radius: 30px; padding: 24px; box-shadow: 0 8px 0 rgba(58,36,24,.12); display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center">
<h1 style="margin: 0; font-size: 32px; font-weight: 800">Solo per i grandi</h1>
<p style="margin: 0; font-size: 18px; color: #6B4A3A">Quanto fa ${v2.gateA} + ${v2.gateB}?</p>
<div aria-live="polite" style="min-width: 140px; min-height: 64px; border-radius: 18px; background: #FFF6EA; font-size: 40px; font-weight: 800; display: flex; align-items: center; justify-content: center">${v2.gateEntry}</div>
${v2.gateWrong ? fe`<p style="margin: 0; color: #B3202F; font-weight: 700">Non è giusto, riprova.</p>` : null}
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; width: 100%">
${(v2.keys || []).map(function(k2) {
      return fe`
<button class="pill" onClick=${k2.tap} style="min-height: 60px; font-size: 26px; background: ${k2.bg}; color: ${k2.fg}">${k2.label}</button>
`;
    })}
</div>
<button data-back="cancel" onClick=${v2.gateCancel} style="border: 0; background: transparent; font-size: 18px; font-weight: 700; color: #6B4A3A; text-decoration: underline; min-height: 44px">Annulla</button>
</div>
</section>
` : null}

${v2.isParents ? fe`
<section style="flex: 1; width: 100%; max-width: 1100px; margin: 0 auto; box-sizing: border-box; padding: 4px clamp(12px, 3vw, 32px) 40px; display: flex; flex-direction: column; gap: 16px">
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
<h1 style="margin: 0; flex: 1 1 260px; font-size: clamp(30px, 3.6vw, 42px); font-weight: 800; line-height: 1">Area genitori</h1>
<button class="pill" data-back="exit" onClick=${v2.leaveParents}>Esci</button>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px">
<div style="background: #FFFFFF; border-radius: 24px; padding: 16px 20px; box-shadow: 0 4px 0 rgba(58,36,24,.08); display: flex; flex-direction: column; gap: 10px">
<h2 style="margin: 0; font-size: 24px; font-weight: 800">Tempo di gioco di oggi</h2>
<p style="margin: 0; font-size: 17px">Usati <strong>${v2.usedMin} min</strong> su ${v2.limitMin} min${v2.extraNote}.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
${(v2.limits || []).map(function(l2) {
      return fe`
<button class="pill" onClick=${l2.tap} style="background: ${l2.bg}; color: ${l2.fg}">${l2.label}</button>
`;
    })}
</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px"><button class="pill" onClick=${v2.addTen} style="background: #2E8B57; color: #FFFFFF">+10 minuti per oggi</button><button class="pill" onClick=${v2.resetToday} style="background: #FFF6EA">Azzera il tempo di oggi</button></div>
</div>

<div style="background: #FFFFFF; border-radius: 24px; padding: 16px 20px; box-shadow: 0 4px 0 rgba(58,36,24,.08); display: flex; flex-direction: column; gap: 10px">
<h2 style="margin: 0; font-size: 24px; font-weight: 800">Voce di Mimì</h2>
<p style="margin: 0; font-size: 16px; color: #6B4A3A">Le frasi sono registrate con ElevenLabs e salvate nel gioco. Scegliete quanto parla piano.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
${(v2.speeds || []).map(function(sp) {
      return fe`
<button class="pill" onClick=${sp.tap} style="background: ${sp.bg}; color: ${sp.fg}">${sp.label}</button>
`;
    })}
</div>
<h2 style="margin: 8px 0 0; font-size: 24px; font-weight: 800">Microfono</h2>
<p style="margin: 0; font-size: 16px; color: #6B4A3A">Spento di serie. Se lo accendete, Soleil può rispondere a voce. Nei browser come Chrome la trascrizione della voce passa dai server del browser (per esempio Google): nessuna registrazione viene salvata dal gioco.</p>
<button class="pill" onClick=${v2.toggleMic} style="align-self: flex-start; background: ${v2.micBtnBg}; color: ${v2.micBtnFg}">${v2.micToggleLabel}</button>
<p style="margin: 0; font-size: 15px; color: #6B4A3A">${v2.micSupportText}</p>
</div>

<div style="background: #FFFFFF; border-radius: 24px; padding: 16px 20px; box-shadow: 0 4px 0 rgba(58,36,24,.08); display: flex; flex-direction: column; gap: 10px">
<h2 style="margin: 0; font-size: 24px; font-weight: 800">Livello di Soleil</h2>
<p style="margin: 0; font-size: 16px; color: #6B4A3A">Livello attuale: <strong>${v2.soleilLevel}</strong> di 5 (${v2.soleilLevelMode}). Sale dopo 3 risposte giuste di fila senza aiuto, scende dopo 2 round con aiuto.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
${(v2.levelBtns || []).map(function(l2) {
      return fe`
<button class="pill" onClick=${l2.tap} style="background: ${l2.bg}; color: ${l2.fg}">${l2.label}</button>
`;
    })}
</div>
</div>
</div>

${(v2.reports || []).map(function(r2) {
      return fe`
<div style="background: #FFFFFF; border-radius: 24px; padding: 16px 20px; box-shadow: 0 4px 0 rgba(58,36,24,.08); display: flex; flex-direction: column; gap: 10px">
<h2 style="margin: 0; font-size: 24px; font-weight: 800">Parole di ${r2.name}</h2>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px">
<div style="background: #FFF6EA; border-radius: 16px; padding: 8px 12px"><div style="font-size: 30px; font-weight: 800; line-height: 1">${r2.met}</div><div style="font-size: 15px">incontrate</div></div>
<div style="background: #FFF6EA; border-radius: 16px; padding: 8px 12px"><div style="font-size: 30px; font-weight: 800; line-height: 1">${r2.rec}</div><div style="font-size: 15px">riconosciute</div></div>
<div style="background: #FFF6EA; border-radius: 16px; padding: 8px 12px"><div style="font-size: 30px; font-weight: 800; line-height: 1">${r2.said}</div><div style="font-size: 15px">dette in inglese</div></div>
<div style="background: #FFF6EA; border-radius: 16px; padding: 8px 12px"><div style="font-size: 30px; font-weight: 800; line-height: 1">${r2.ver}</div><div style="font-size: 15px">verificate in giorni diversi</div></div>
</div>
<p style="margin: 0; font-size: 15px; color: #6B4A3A">Stelle: ${r2.stars}. "Riconosciuta" = toccata giusta quando Mimì la chiedeva. "Detta" = pronunciata in inglese con il microfono acceso. "Verificata" = riconosciuta in almeno 2 giorni diversi.</p>
<div style="display: flex; flex-wrap: wrap; gap: 6px">
${(r2.words || []).map(function(w2) {
        return fe`
<span lang="en" style="border-radius: 999px; padding: 3px 12px; font-size: 16px; font-weight: 700; background: ${w2.bg}; color: ${w2.fg}">${w2.label}</span>
`;
      })}
</div>
</div>
`;
    })}

<div style="background: #FFFFFF; border-radius: 24px; padding: 16px 20px; box-shadow: 0 4px 0 rgba(58,36,24,.08); display: flex; flex-direction: column; gap: 8px">
<h2 style="margin: 0; font-size: 24px; font-weight: 800">Stato del progetto</h2>
<ul style="margin: 0; padding-left: 20px; font-size: 16px; line-height: 1.5">
<li>Giocabili qui: 8 giochi, la Scuola di ballo 3D e 17 storie (geografia d'Italia, natura, scienze, corpo, buone maniere e storie con le principesse Soleil e Stella).</li>
<li>Grafica: nei giochi e nelle storie Mimì e Pepe sono ritagliati dalla vostra tavola ufficiale; nella Scuola di ballo sono personaggi 3D semplificati, costruiti nel gioco, che eseguono davvero i passi.</li>
<li>Voce: 465 frasi registrate con ElevenLabs e salvate nel gioco (Mimì con risate ed emozioni, Pepe con la sua voce). Le frasi lunghe delle storie usano ancora la voce del dispositivo finché non si registrano con altri crediti ElevenLabs.</li>
<li>Progressi salvati solo su questo dispositivo. Nessuna pubblicità, nessuna classifica.</li>
</ul>
<button class="pill" onClick=${v2.resetProgress} style="align-self: flex-start; background: #FBE7CF">${v2.resetLabel}</button>
</div>
</section>
` : null}

${v2.isNight ? fe`
<section style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 16px clamp(12px, 3vw, 32px) 32px; background: #1E1B3A; color: #FFF6EA">
<div class="bg-wide" style="position: relative; width: 100%; max-width: 1100px; aspect-ratio: 16 / 8; min-height: 240px; border-radius: 36px; overflow: hidden">
<div style="position: absolute; inset: 0; background: rgba(20,18,60,.68)"></div>
<img src="a/moon.svg" alt="" class="a-float" style="position: absolute; right: 8%; top: 8%; width: 12%" />
<img src="a/m_front.webp" alt="Mimì" class="a-sleep" style="position: absolute; left: 28%; bottom: 6%; height: 74%; width: auto; filter: brightness(.82)" />
<img src="a/p_stira.webp" alt="Pepe" class="a-sleep" style="position: absolute; left: 52%; bottom: 6%; height: 38%; width: auto; filter: brightness(.82)" />
</div>
<div aria-live="polite" style="text-align: center; max-width: 900px">
<div lang="en" style="font-size: clamp(30px, 4vw, 52px); font-weight: 800; line-height: 1.05">${v2.nightEn}</div>
<div lang="it" style="font-size: clamp(18px, 2.2vw, 26px); opacity: .85">${v2.nightIt}</div>
</div>
<button class="pill" onClick=${v2.goGate} style="background: #FFC93C; color: #3A2418">Per i grandi: aggiungi tempo</button>
</section>
` : null}

</div>`;
  }
  var IMG = {
    m_side: "a/m_side.webp",
    m_front: "a/m_front.webp",
    m_cammina: "a/m_cammina.webp",
    m_corre: "a/m_corre.webp",
    m_raccoglie: "a/m_raccoglie.webp",
    m_balla: "a/m_balla.webp",
    m_hero: "a/hero_mimi.webp",
    p_front: "a/p_front.webp",
    p_side: "a/p_side.webp",
    p_salta: "a/p_salta.webp",
    p_gioca: "a/p_gioca.webp",
    p_insegue: "a/p_insegue.webp",
    p_stira: "a/p_stira.webp",
    p_hero: "a/hero_pepe.webp",
    p_box: "a/p_nasconde.webp",
    ball: "a/ball.webp",
    apple: "a/apple.svg",
    teddy: "a/teddy.svg",
    sock: "a/sock.svg",
    hat: "a/hat.svg",
    gift: "a/gift.svg",
    mystery: "a/mystery.svg",
    star: "a/star.svg",
    moon: "a/moon.svg",
    box: "a/box.svg",
    table: "a/table.svg",
    sofa: "a/sofa.svg",
    curtain: "a/curtain.svg",
    chest: "a/chest.svg",
    balloon_red: "a/balloon_red.svg",
    balloon_blue: "a/balloon_blue.svg",
    balloon_yellow: "a/balloon_yellow.svg",
    balloon_green: "a/balloon_green.svg",
    cake_choco: "a/cake_choco.svg",
    cake_straw: "a/cake_straw.svg",
    candle_off: "a/candle_off.svg",
    candle_on: "a/candle_on.svg",
    dog: "a/dog.svg",
    cow: "a/cow.svg",
    duck: "a/duck.svg",
    pig: "a/pig.svg",
    frog: "a/frog.svg",
    lion: "a/lion.svg",
    fish: "a/fish.svg",
    w_forest: "a/w_forest.svg",
    w_ocean: "a/w_ocean.svg",
    w_town: "a/w_town.svg",
    w_sky: "a/w_sky.svg"
  };
  var FACE = {
    felice: "a/m_felice.webp",
    sorpresa: "a/m_sorpresa.webp",
    curiosa: "a/m_curiosa.webp",
    pensa: "a/m_pensa.webp",
    ride: "a/m_ride.webp",
    confusa: "a/m_confusa.webp",
    contento: "a/p_contento.webp",
    curioso: "a/p_curioso.webp",
    birichino: "a/p_birichino.webp",
    sorpreso: "a/p_sorpreso.webp",
    triste: "a/p_triste.webp"
  };
  var POSE = {
    m_side: { f: -1, k: 1 },
    m_front: { f: 0, k: 1 },
    m_cammina: { f: 0, k: 1 },
    m_corre: { f: -1, k: 0.96 },
    m_raccoglie: { f: 1, k: 0.74 },
    m_balla: { f: 0, k: 1 },
    m_hero: { f: 1, k: 0.82 },
    p_front: { f: 0, k: 1 },
    p_side: { f: 1, k: 1 },
    p_salta: { f: 1, k: 0.62 },
    p_gioca: { f: 1, k: 0.78 },
    p_insegue: { f: 1, k: 0.6 },
    p_stira: { f: 1, k: 0.86 },
    p_hero: { f: -1, k: 0.74 }
  };
  var CANCEL = { cancelled: true };
  var KIDNAME = { stella: "Stella", soleil: "Soleil" };
  var PROPS = {
    chest: { src: IMG.chest, x: 50.5, y: 45, w: 13, z: 8 },
    curtain: { src: IMG.curtain, x: 91, y: 47, w: 12, z: 9 },
    sofa: { src: IMG.sofa, x: 71, y: 67, w: 25, z: 22 },
    table: { src: IMG.table, x: 40, y: 85, w: 22, z: 30 },
    box: { src: IMG.box, x: 14, y: 88, w: 17, z: 34 }
  };
  var SPOTS = {
    box: { id: "box", en: "in the box", it: "nella scatola", noun: "box", hide: { x: 14, y: 74, w: 7 }, stand: { x: 25, y: 93 }, kw: { en: ["box", "boxes"], it: ["scatola", "scatolone", "cartone"] }, prep: { en: ["in", "inside"], it: ["dentro", "nella", "in"] }, prepId: "in" },
    table: { id: "table", en: "under the table", it: "sotto il tavolo", noun: "table", hide: { x: 40, y: 84, w: 7 }, stand: { x: 53, y: 94 }, kw: { en: ["table"], it: ["tavolo", "tavolino"] }, prep: { en: ["under", "underneath", "below"], it: ["sotto"] }, prepId: "under" },
    sofa: { id: "sofa", en: "on the sofa", it: "sul divano", noun: "sofa", hide: { x: 71, y: 52, w: 6 }, stand: { x: 60, y: 80 }, kw: { en: ["sofa", "couch", "cushion", "pillow"], it: ["divano", "cuscino", "poltrona"] }, prep: { en: ["on", "onto"], it: ["sopra", "sul", "su"] }, prepId: "on" },
    curtain: { id: "curtain", en: "behind the curtain", it: "dietro la tenda", noun: "curtain", hide: { x: 93, y: 49, w: 5.5 }, stand: { x: 83, y: 76 }, kw: { en: ["curtain", "curtains", "window"], it: ["tenda", "tende", "finestra"] }, prep: { en: ["behind"], it: ["dietro"] }, prepId: "behind" },
    chest: { id: "chest", en: "in the chest", it: "nel baule", noun: "chest", hide: { x: 50.5, y: 37, w: 5 }, stand: { x: 60, y: 56 }, kw: { en: ["chest", "trunk", "treasure"], it: ["baule", "cassa", "forziere", "tesoro"] }, prep: { en: ["in", "inside"], it: ["dentro", "nel", "in"] }, prepId: "in" }
  };
  var SPOT_ORDER = ["box", "table", "sofa", "curtain", "chest"];
  var OBJECTS = {
    ball: { id: "ball", en: "ball", it: "la palla", src: IMG.ball, w: 6 },
    teddy: { id: "teddy", en: "teddy bear", it: "l'orsetto", src: IMG.teddy, w: 7 },
    apple: { id: "apple", en: "apple", it: "la mela", src: IMG.apple, w: 5.5 },
    hat: { id: "hat", en: "hat", it: "il cappello", src: IMG.hat, w: 6.5 }
  };
  var HOME_M = { x: 56, y: 97 };
  var HOME_P = { x: 84, y: 98 };
  var ANIMALS = [
    { id: "cat", en: "cat", it: "il gatto", two: "gatti", says: "meow", silly: "woof", src: IMG.p_front, w: 9 },
    { id: "dog", en: "dog", it: "il cane", says: "woof woof", silly: "quack", src: IMG.dog, w: 11 },
    { id: "cow", en: "cow", it: "la mucca", says: "moo", silly: "meow", src: IMG.cow, w: 11 },
    { id: "duck", en: "duck", it: "l'anatra", says: "quack quack", silly: "moo", src: IMG.duck, w: 10 },
    { id: "pig", en: "pig", it: "il maiale", says: "oink oink", silly: "ribbit", src: IMG.pig, w: 10 },
    { id: "frog", en: "frog", it: "la rana", says: "ribbit", silly: "roar", src: IMG.frog, w: 10 },
    { id: "lion", en: "lion", it: "il leone", says: "roar", silly: "oink", src: IMG.lion, w: 11 },
    { id: "fish", en: "fish", it: "il pesce", says: "blub blub", silly: "moo", src: IMG.fish, w: 10 }
  ];
  var ANIMAL_BY = {};
  ANIMALS.forEach(function(a2) {
    ANIMAL_BY[a2.id] = a2;
  });
  var COLORS = [
    { id: "red", en: "red", it: "rosso", hex: "#E63946" },
    { id: "blue", en: "blue", it: "blu", hex: "#2F7DE1" },
    { id: "yellow", en: "yellow", it: "giallo", hex: "#FFD23F" },
    { id: "green", en: "green", it: "verde", hex: "#2BB673" },
    { id: "pink", en: "pink", it: "rosa", hex: "#F27BB4" },
    { id: "white", en: "white", it: "bianco", hex: "#FFFFFF" },
    { id: "orange", en: "orange", it: "arancione", hex: "#F4842A" },
    { id: "brown", en: "brown", it: "marrone", hex: "#8B5A2B" }
  ];
  var COLOR_BY = {};
  COLORS.forEach(function(c2) {
    COLOR_BY[c2.id] = c2;
  });
  var SHAPES = [
    { id: "round", en: "something round", it: "qualcosa di rotondo" },
    { id: "soft", en: "something soft", it: "qualcosa di morbido" },
    { id: "big", en: "something big", it: "qualcosa di grande" },
    { id: "small", en: "something small", it: "qualcosa di piccolo" }
  ];
  var MOVES = [
    { id: "jump", en: "Jump!", it: "Saltiamo!", mPose: "m_balla", mAnim: "a-hop", pPose: "p_salta", pAnim: "a-hop" },
    { id: "clap", en: "Clap your hands!", it: "Battiamo le mani!", mPose: "m_front", mAnim: "a-shake", pPose: "p_front", pAnim: "a-shake" },
    { id: "spin", en: "Turn around!", it: "Giriamo!", mPose: "m_balla", mAnim: "a-spin", pPose: "p_side", pAnim: "a-spin" },
    { id: "wave", en: "Wave hello!", it: "Salutiamo con la mano!", mPose: "m_side", mAnim: "a-wiggle", pPose: "p_gioca", pAnim: "a-wiggle" },
    { id: "stretch", en: "Reach up high!", it: "Braccia in alto!", mPose: "m_front", mAnim: "a-stretch", pPose: "p_stira", pAnim: "a-stretch" },
    { id: "dance", en: "Dance, dance!", it: "Balliamo!", mPose: "m_balla", mAnim: "a-dance", pPose: "p_salta", pAnim: "a-dance" }
  ];
  var GAMES = {
    where: { title: "Where is it?", sub: "Pepe nasconde le cose: dove sono?", img: IMG.p_box, bg: "#FFE9D6" },
    dove: { title: "Find the animal", sub: "Dov'\xE8? Tocca l'animale giusto", img: IMG.duck, bg: "#FFF3C4" },
    sounds: { title: "Animal Sounds", sub: "Mim\xEC fa i versi (a volte sbaglia!)", img: IMG.cow, bg: "#E3F4FF" },
    touch: { title: "Touch and listen", sub: "Tocca e ascolta le parole", img: IMG.teddy, bg: "#FDE6EE" },
    peek: { title: "Peekaboo Pepe", sub: "Pepe si nasconde: trovalo!", img: IMG.p_insegue, bg: "#FFE2C4" },
    dance: { title: "Dance School", sub: "Impara i passi di ballo in 3D!", img: IMG.m_balla, bg: "#EDE4FF" },
    mission: { title: "Home Mission", sub: "Missione in casa: cerca un colore", img: IMG.m_corre, bg: "#E2F6E6" },
    mystery: { title: "Mystery Box", sub: "Cosa c'\xE8 nella scatola?", img: IMG.mystery, bg: "#FFE4E0" }
  };
  var ORDER = {
    stella: ["dove", "touch", "sounds", "peek", "dance", "where", "mystery", "mission"],
    soleil: ["where", "mystery", "peek", "sounds", "mission", "dove", "dance", "touch"],
    insieme: ["where", "peek", "dance", "mission", "mystery", "dove", "sounds", "touch"]
  };
  var CATALOG = [
    ["Dov'\xE8? (Find the animal)", "Stella", "Riconoscimento", "gioca"],
    ["Tocca e ascolta", "Stella", "Animal Friends", "gioca"],
    ["Animal Sounds", "Stella", "Animal Friends", "gioca"],
    ["Peekaboo Pepe (Pepe si nasconde)", "Stella", "Movimento", "gioca"],
    ["Colour Magic", "Stella", "Colori", "proposta"],
    ["Canta con Mim\xEC", "Stella", "Musicale", "proposta"],
    ["Where is it? (Hide and Seek)", "Soleil", "Dialoghi guidati", "gioca"],
    ["Mystery Box", "Soleil", "Riconoscimento", "gioca"],
    ["Dress Up Mim\xEC", "Soleil", "Vestiti e colori", "previsto"],
    ["Crazy Kitchen", "Soleil", "Cibo e numeri", "previsto"],
    ["Memory degli animali", "Soleil", "Memory", "proposta"],
    ["Puzzle della cameretta", "Soleil", "Piccoli puzzle", "proposta"],
    ["Hello Mim\xEC! (conversazioni)", "Soleil", "Dialoghi guidati", "proposta"],
    ["Caccia alle forme", "Soleil", "Forme", "proposta"],
    ["Dance School 3D + Freeze", "Insieme", "Movimento e passi di ballo", "gioca"],
    ["Missione in casa", "Insieme", "Missioni", "gioca"],
    ["Where is it? in squadra", "Insieme", "Missioni cooperative", "gioca"],
    ["Silly Dance (Pepe sbaglia i passi)", "Insieme", "Movimento", "gioca"],
    ["Pepe's Birthday Party (storia)", "Insieme", "Storie con scelte", "gioca"],
    ["Caccia ai colori in squadra", "Insieme", "Colori", "proposta"]
  ];
  var WORLDS = [
    { name: "Mim\xEC\u2019s Room", sub: "La cameretta, punto di partenza", img: IMG.p_hero, status: "Qui giochiamo", on: true },
    { name: "Magic Forest", sub: "Foresta magica", img: IMG.w_forest, status: "In arrivo" },
    { name: "Ocean Adventure", sub: "Avventura nell'oceano", img: IMG.w_ocean, status: "In arrivo" },
    { name: "Happy Town", sub: "Citt\xE0 allegra", img: IMG.w_town, status: "In arrivo" },
    { name: "Dreamy Sky", sub: "Cielo dei sogni", img: IMG.w_sky, status: "In arrivo" }
  ];
  function IT(t2) {
    return ["it", t2];
  }
  function EN(t2) {
    return ["en", t2];
  }
  function cap(s2) {
    return s2.charAt(0).toUpperCase() + s2.slice(1);
  }
  function shuffle(a2) {
    a2 = a2.slice();
    for (var i2 = a2.length - 1; i2 > 0; i2--) {
      var j = Math.floor(Math.random() * (i2 + 1));
      var t2 = a2[i2];
      a2[i2] = a2[j];
      a2[j] = t2;
    }
    return a2;
  }
  function pick(a2) {
    return a2[Math.floor(Math.random() * a2.length)];
  }
  function today() {
    var d2 = /* @__PURE__ */ new Date();
    return d2.getFullYear() + "-" + (d2.getMonth() + 1) + "-" + d2.getDate();
  }
  function norm(s2) {
    return (" " + String(s2 || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9']+/g, " ") + " ").replace(/'/g, " ");
  }
  function has(t2, w2) {
    return t2.indexOf(" " + w2 + " ") >= 0;
  }
  var NUM_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, uno: 1, due: 2, tre: 3, quattro: 4, cinque: 5 };
  function parseSpot(alts, allowed) {
    var amb = null;
    for (var a2 = 0; a2 < alts.length; a2++) {
      var t2 = norm(alts[a2]);
      for (var i2 = 0; i2 < allowed.length; i2++) {
        var s2 = SPOTS[allowed[i2]];
        var langs = ["en", "it"];
        for (var l2 = 0; l2 < 2; l2++)
          for (var k2 = 0; k2 < s2.kw[langs[l2]].length; k2++)
            if (has(t2, s2.kw[langs[l2]][k2]))
              return { spot: s2.id, lang: langs[l2], heard: alts[a2], full: true };
      }
      var hits = [];
      allowed.forEach(function(id) {
        var s3 = SPOTS[id];
        ["en", "it"].forEach(function(lang) {
          s3.prep[lang].forEach(function(p2) {
            if (has(t2, p2) && !hits.some(function(h2) {
              return h2.spot === id;
            }))
              hits.push({ spot: id, lang });
          });
        });
      });
      if (hits.length === 1)
        return { spot: hits[0].spot, lang: hits[0].lang, heard: alts[a2], full: false };
      if (hits.length > 1 && !amb)
        amb = { ambiguous: hits.map(function(h2) {
          return h2.spot;
        }), heard: alts[a2] };
    }
    return amb;
  }
  function parseWord(alts, cands) {
    for (var a2 = 0; a2 < alts.length; a2++) {
      var t2 = norm(alts[a2]);
      for (var i2 = 0; i2 < cands.length; i2++) {
        var c2 = cands[i2];
        for (var k2 = 0; k2 < c2.en.length; k2++)
          if (has(t2, c2.en[k2]))
            return { id: c2.id, lang: "en", heard: alts[a2] };
        for (var j = 0; j < c2.it.length; j++)
          if (has(t2, c2.it[j]))
            return { id: c2.id, lang: "it", heard: alts[a2] };
      }
    }
    return null;
  }
  var STORE = "mimi-pepe-v6";
  function blankKid() {
    return { words: {}, stars: 0, level: 1, streak: 0, helpStreak: 0 };
  }
  function loadStore() {
    var d2 = null;
    try {
      var raw = window.localStorage.getItem(STORE);
      d2 = raw ? JSON.parse(raw) : null;
    } catch (e2) {
      d2 = null;
    }
    d2 = d2 && typeof d2 === "object" ? d2 : {};
    d2.kids = d2.kids || {};
    ["stella", "soleil"].forEach(function(k2) {
      d2.kids[k2] = Object.assign(blankKid(), d2.kids[k2] || {});
    });
    d2.settings = Object.assign({ limit: 30, mic: false, soleilLevel: null, voiceSpeed: 0.88 }, d2.settings || {});
    if (!d2.usage || d2.usage.date !== today())
      d2.usage = { date: today(), ms: 0, extra: 0 };
    return d2;
  }
  var IT_VOICES = [/alice/i, /federica/i, /elsa/i, /isabella/i, /paola/i, /emma/i, /google italiano/i, /female/i];
  var EN_VOICES = [/samantha/i, /google uk english female/i, /aria/i, /jenny/i, /libby/i, /sonia/i, /ava/i, /allison/i, /zira/i, /karen/i, /moira/i, /tessa/i, /serena/i, /fiona/i, /female/i, /google us english/i];
  Object.assign(IMG, {
    italy: "a/italy.svg",
    pin: "a/pin.svg",
    bee: "a/bee.svg",
    bowl_pasta: "a/bowl_pasta.svg",
    butterfly: "a/butterfly.svg",
    castle: "a/castle.svg",
    cloud: "a/cloud.svg",
    colosseum: "a/colosseum.svg",
    crown: "a/crown.svg",
    door: "a/door.svg",
    dragon: "a/dragon.svg",
    ear: "a/ear.svg",
    earth: "a/earth.svg",
    egg: "a/egg.svg",
    eye: "a/eye.svg",
    flower: "a/flower.svg",
    foot: "a/foot.svg",
    gondola: "a/gondola.svg",
    hand: "a/hand.svg",
    heart: "a/heart.svg",
    hen: "a/hen.svg",
    honey: "a/honey.svg",
    key: "a/key.svg",
    leaf: "a/leaf.svg",
    lemon: "a/lemon.svg",
    milk: "a/milk.svg",
    mountain: "a/mountain.svg",
    mouth: "a/mouth.svg",
    mushroom: "a/mushroom.svg",
    nose: "a/nose.svg",
    owl: "a/owl.svg",
    palette: "a/palette.svg",
    pizza: "a/pizza.svg",
    princess_soleil: "a/princess_soleil.svg",
    princess_stella: "a/princess_stella.svg",
    rabbit: "a/rabbit.svg",
    rainbow: "a/rainbow.svg",
    raincloud: "a/raincloud.svg",
    rocket: "a/rocket.svg",
    ship: "a/ship.svg",
    snowflake: "a/snowflake.svg",
    snowman: "a/snowman.svg",
    sun: "a/sun.svg",
    toothbrush: "a/toothbrush.svg",
    tree_autumn: "a/tree_autumn.svg",
    tree_spring: "a/tree_spring.svg",
    tree_summer: "a/tree_summer.svg",
    tree_winter: "a/tree_winter.svg",
    umbrella: "a/umbrella.svg",
    volcano: "a/volcano.svg",
    wand: "a/wand.svg"
  });
  var REGION = {
    piemonte: "a/reg_piemonte.svg",
    valledaosta: "a/reg_valledaosta.svg",
    lombardia: "a/reg_lombardia.svg",
    trentino: "a/reg_trentino.svg",
    veneto: "a/reg_veneto.svg",
    friuli: "a/reg_friuli.svg",
    liguria: "a/reg_liguria.svg",
    emilia: "a/reg_emilia.svg",
    toscana: "a/reg_toscana.svg",
    umbria: "a/reg_umbria.svg",
    marche: "a/reg_marche.svg",
    lazio: "a/reg_lazio.svg",
    abruzzo: "a/reg_abruzzo.svg",
    molise: "a/reg_molise.svg",
    campania: "a/reg_campania.svg",
    puglia: "a/reg_puglia.svg",
    basilicata: "a/reg_basilicata.svg",
    calabria: "a/reg_calabria.svg",
    sicilia: "a/reg_sicilia.svg",
    sardegna: "a/reg_sardegna.svg"
  };
  var CITY = { "Roma": [49.15, 44.89], "Milano": [22.05, 14.71], "Napoli": [63.67, 53.79], "Torino": [9.73, 18.05], "Venezia": [47.67, 14.91], "Firenze": [38.98, 29.07], "Bologna": [39.69, 22.92], "Genova": [20.05, 23.68], "Palermo": [56.24, 76.98], "Cagliari": [21.49, 67.59], "Bari": [85.02, 51.54], "Trento": [37.88, 9.53], "Aosta": [6.68, 12.39], "Trieste": [59.65, 13.14], "Pisa": [31.98, 29.46], "Etna": [69.63, 80.07], "Vesuvio": [64.97, 54.05], "Monte Bianco": [2.99, 11.58], "Catania": [70.39, 82.13] };
  var MAP = { x: 70, y: 97, w: 30, ratio: 781 / 600 };
  var THEMES = {
    room: { wall: "bg-room", floor: "fl-room", rug: true },
    map: { wall: "th-map", floor: "fl-map" },
    sky: { wall: "th-sky", floor: "fl-grass" },
    night: { wall: "th-night", floor: "fl-night" },
    castle: { wall: "th-castle", floor: "fl-grass" },
    forest: { wall: "th-forest", floor: "fl-grass" },
    sea: { wall: "th-sea", floor: "fl-sand" },
    snow: { wall: "th-snow", floor: "fl-snow" },
    garden: { wall: "th-sky", floor: "fl-grass" }
  };
  function PARSE(str) {
    var out = [], re2 = /\[([^\]]+)\]/g, last = 0, m2;
    while (m2 = re2.exec(str)) {
      var before = str.slice(last, m2.index).trim();
      if (before)
        out.push(IT(before));
      out.push(EN(m2[1].trim()));
      last = re2.lastIndex;
    }
    var rest = str.slice(last).trim();
    if (rest)
      out.push(IT(rest));
    return out.reduce(function(acc, p2) {
      if (/^[\s.,!?…:;]+$/.test(p2[1]) && acc.length) {
        acc[acc.length - 1] = [acc[acc.length - 1][0], acc[acc.length - 1][1] + p2[1].trim()];
      } else
        acc.push(p2);
      return acc;
    }, []);
  }
  var STEPS = {
    clap: { en: "Clap your hands!", it: "Battiamo le mani!" },
    jump: { en: "Jump!", it: "Saltiamo!" },
    arms_up: { en: "Arms up!", it: "Braccia in alto!" },
    turn: { en: "Turn around!", it: "Giriamo su noi stesse!" },
    step_right: { en: "Step to the right!", it: "Un passo a destra!" },
    step_left: { en: "Step to the left!", it: "Un passo a sinistra!" },
    point: { en: "Point up, point down!", it: "Dito in su, dito in gi\xF9!" },
    twist: { en: "Twist!", it: "Ruotiamo i fianchi!" },
    march: { en: "March!", it: "Marciamo come soldatini!" },
    wiggle: { en: "Wiggle, wiggle!", it: "Muoviamo il sederino!" },
    hands_hips: { en: "Hands on your hips!", it: "Mani sui fianchi!" },
    skip: { en: "Skip, skip, skip!", it: "Saltelliamo!" },
    clap_high: { en: "Clap up high!", it: "Battiamo le mani in alto!" },
    wave: { en: "Wave your arms!", it: "Agitiamo le braccia!" }
  };
  var LESSONS = {
    baby: { title: "Baby Dance", it: "Il primo ballo", bpm: 96, steps: ["clap", "jump", "arms_up", "turn"], melody: [523, 659, 784, 659, 587, 523, 587, 659] },
    disco: { title: "Disco Mim\xEC", it: "Ballo disco", bpm: 110, steps: ["step_right", "step_left", "point", "twist"], melody: [440, 523, 659, 523, 494, 587, 698, 587] },
    tarantella: { title: "Tarantella!", it: "Il ballo del Sud Italia", bpm: 126, steps: ["skip", "clap_high", "turn", "wave"], melody: [440, 494, 523, 587, 659, 587, 523, 494] },
    party: { title: "Party Dance", it: "Il ballo della festa", bpm: 104, steps: ["march", "wiggle", "hands_hips", "jump"], melody: [392, 494, 587, 784, 698, 587, 494, 440] }
  };
  function ease(x2) {
    return 0.5 - 0.5 * Math.cos(Math.PI * Math.max(0, Math.min(1, x2)));
  }
  function dancePose(step, b2, frozen) {
    var P2 = {
      hy: 0,
      hx: 0,
      ry: 0,
      tz: 0,
      ty: 0,
      hz: 0,
      hn: 0,
      aL: { z: 0.18, x: 0, e: 0.15 },
      aR: { z: -0.18, x: 0, e: 0.15 },
      lL: { x: 0, k: 0, z: 0 },
      lR: { x: 0, k: 0, z: 0 },
      tail: 1
    };
    var s2 = Math.sin(Math.PI * 2 * b2), s22 = Math.sin(Math.PI * b2), c2 = Math.cos(Math.PI * 2 * b2), beat = b2 % 1, bounce = Math.abs(Math.sin(Math.PI * b2));
    switch (step) {
      case "idle":
        P2.hy = 0.01 * s2;
        P2.hn = 0.05 * Math.sin(b2);
        P2.aL.z = 0.2 + 0.03 * s2;
        P2.aR.z = -0.2 - 0.03 * s2;
        break;
      case "clap": {
        var cl = Math.pow(Math.abs(Math.cos(Math.PI * b2)), 3);
        P2.aL = { x: -1.35, z: 0.55 - 0.5 * cl, e: 0.35 };
        P2.aR = { x: -1.35, z: -0.55 + 0.5 * cl, e: 0.35 };
        P2.hy = -0.03 * bounce;
        P2.lL.k = P2.lR.k = 0.15 * bounce;
        P2.hn = 0.1 * s2;
        break;
      }
      case "jump": {
        var j = Math.max(0, Math.sin(Math.PI * 2 * (b2 % 1)));
        var crouch = Math.max(0, -Math.sin(Math.PI * 2 * (b2 % 1)));
        P2.hy = 0.28 * j - 0.08 * crouch;
        P2.lL.k = P2.lR.k = 0.9 * crouch + 0.2 * j;
        P2.lL.x = P2.lR.x = -0.4 * crouch;
        P2.aL = { z: 0.3 + 2.2 * j, x: 0, e: 0.1 };
        P2.aR = { z: -0.3 - 2.2 * j, x: 0, e: 0.1 };
        break;
      }
      case "arms_up":
        P2.aL = { z: 2.7 + 0.15 * s2, x: 0, e: 0.1 };
        P2.aR = { z: -2.7 + 0.15 * s2, x: 0, e: 0.1 };
        P2.tz = 0.12 * s2;
        P2.hx = 0.05 * s2;
        P2.hy = -0.02 * bounce;
        break;
      case "turn":
        P2.ry = Math.PI * 2 * ease(b2 % 4 / 4);
        P2.aL = { z: 1.3, x: 0, e: 0.2 };
        P2.aR = { z: -1.3, x: 0, e: 0.2 };
        P2.hy = 0.04 * bounce;
        break;
      case "step_right":
      case "step_left": {
        var dir = step === "step_right" ? 1 : -1;
        var ph = b2 % 2;
        var out = ph < 1 ? ease(ph) : 1 - ease(ph - 1);
        P2.hx = dir * 0.28 * out;
        var lift = Math.sin(Math.PI * (ph % 1));
        if (ph < 1) {
          if (dir > 0) {
            P2.lR.x = -0.3 * lift;
            P2.lR.k = 0.6 * lift;
            P2.lR.z = -0.25 * out;
          } else {
            P2.lL.x = -0.3 * lift;
            P2.lL.k = 0.6 * lift;
            P2.lL.z = 0.25 * out;
          }
        } else {
          if (dir > 0) {
            P2.lL.x = -0.3 * lift;
            P2.lL.k = 0.6 * lift;
          } else {
            P2.lR.x = -0.3 * lift;
            P2.lR.k = 0.6 * lift;
          }
        }
        P2.aL = { z: 0.5 + 0.4 * out, x: -0.3, e: 0.9 };
        P2.aR = { z: -0.5 - 0.4 * out, x: -0.3, e: 0.9 };
        P2.tz = -dir * 0.1 * out;
        P2.hy = -0.03 * lift;
        break;
      }
      case "point": {
        var up = Math.floor(b2) % 2 === 0;
        var k2 = ease(beat * 3);
        P2.aR = up ? { z: -2.4 * k2 - 0.2, x: 0, e: 0 } : { z: -0.5, x: 0.4 * k2, e: 0 };
        P2.aL = { z: 0.9, x: 0, e: 1.7 };
        P2.hx = (up ? -0.06 : 0.06) * k2;
        P2.tz = (up ? 0.12 : -0.08) * k2;
        P2.lL.k = P2.lR.k = 0.25 * bounce;
        P2.hy = -0.04 * bounce;
        break;
      }
      case "twist":
        P2.ty = 0.6 * s2;
        P2.lL.k = P2.lR.k = 0.35;
        P2.hy = -0.07;
        P2.aL = { z: 0.7, x: -0.6, e: 1.4 };
        P2.aR = { z: -0.7, x: -0.6, e: 1.4 };
        P2.hn = -0.3 * s2;
        break;
      case "march": {
        var a2 = Math.max(0, Math.sin(Math.PI * b2)), d2 = Math.max(0, -Math.sin(Math.PI * b2));
        P2.lL.x = -1.1 * a2;
        P2.lL.k = 1.4 * a2;
        P2.lR.x = -1.1 * d2;
        P2.lR.k = 1.4 * d2;
        P2.aL = { z: 0.15, x: 0.8 * d2 - 0.6 * a2, e: 0.6 };
        P2.aR = { z: -0.15, x: 0.8 * a2 - 0.6 * d2, e: 0.6 };
        P2.hy = 0.03 * Math.abs(Math.sin(Math.PI * b2));
        break;
      }
      case "wiggle":
        P2.hx = 0.1 * Math.sin(Math.PI * 4 * b2 / 2);
        P2.tz = -0.14 * Math.sin(Math.PI * 2 * b2);
        P2.lL.k = P2.lR.k = 0.3;
        P2.hy = -0.06;
        P2.aL = { z: 0.9, x: 0, e: 1.8 };
        P2.aR = { z: -0.9, x: 0, e: 1.8 };
        P2.hz = 0.15 * s2;
        break;
      case "hands_hips":
        P2.aL = { z: 0.95, x: 0, e: 1.9 };
        P2.aR = { z: -0.95, x: 0, e: 1.9 };
        P2.hz = 0.3 * Math.sin(Math.PI * b2);
        P2.tz = 0.08 * Math.sin(Math.PI * b2);
        P2.hy = -0.03 * bounce;
        P2.lL.k = P2.lR.k = 0.15 * bounce;
        break;
      case "skip": {
        var side = Math.floor(b2) % 2 === 0 ? 1 : -1;
        var h2 = Math.sin(Math.PI * beat);
        P2.hy = 0.16 * h2;
        if (side > 0) {
          P2.lL.x = -0.9 * h2;
          P2.lL.k = 1.3 * h2;
        } else {
          P2.lR.x = -0.9 * h2;
          P2.lR.k = 1.3 * h2;
        }
        P2.aL = side > 0 ? { z: 2.6, x: 0, e: 0.2 } : { z: 0.5, x: 0, e: 0.6 };
        P2.aR = side < 0 ? { z: -2.6, x: 0, e: 0.2 } : { z: -0.5, x: 0, e: 0.6 };
        P2.hx = 0.12 * side * h2;
        break;
      }
      case "clap_high": {
        var cl2 = Math.pow(Math.abs(Math.cos(Math.PI * b2)), 3);
        P2.aL = { z: 2.7 - 0.25 * (1 - cl2), x: -0.2, e: 0.2 };
        P2.aR = { z: -2.7 + 0.25 * (1 - cl2), x: -0.2, e: 0.2 };
        P2.hy = 0.05 * bounce;
        P2.tz = 0.06 * s2;
        break;
      }
      case "wave":
        P2.aL = { z: 2.2 + 0.5 * s2, x: 0, e: 0.3 * c2 };
        P2.aR = { z: -2.2 + 0.5 * s2, x: 0, e: -0.3 * c2 };
        P2.tz = 0.15 * s2;
        P2.hx = 0.08 * s2;
        break;
      case "bow": {
        var k22 = ease(b2 / 2);
        P2.tz = 0;
        P2.aL = { z: 0.3, x: -0.4 * k22, e: 0.5 };
        P2.aR = { z: -0.3, x: -0.4 * k22, e: 0.5 };
        P2.bow = 0.5 * k22;
        break;
      }
    }
    return P2;
  }
  function build3D(T2, canvas) {
    var renderer = new T2.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.MP_DEV === "tv" ? 1 : Math.min(2, window.devicePixelRatio || 1));
    var scene = new T2.Scene();
    var camera = new T2.PerspectiveCamera(32, 16 / 9, 0.1, 50);
    camera.position.set(0, 1.08, 5.1);
    camera.lookAt(0, 0.92, 0);
    scene.add(new T2.HemisphereLight(16774374, 9071189, 1));
    var key = new T2.DirectionalLight(16777215, 0.9);
    key.position.set(2.5, 4, 5);
    scene.add(key);
    var rim = new T2.DirectionalLight(16766632, 0.35);
    rim.position.set(-3, 2, -2);
    scene.add(rim);
    function M2(color, opts) {
      return new T2.MeshStandardMaterial(Object.assign({ color, roughness: 0.75, metalness: 0 }, opts || {}));
    }
    var mat = {
      skin: M2(16768194),
      white: M2(16513008, { roughness: 0.9 }),
      red: M2(14100029, { roughness: 0.6 }),
      black: M2(2300438, { roughness: 0.4 }),
      hair: M2(5911584, { roughness: 0.65 }),
      eye: M2(4860436, { roughness: 0.2 }),
      shine: M2(16777215, { roughness: 0.1, emissive: 6710886 }),
      cheek: M2(16751278, { roughness: 1, transparent: true, opacity: 0.55 }),
      mouth: M2(11546686, { roughness: 0.5 }),
      orange: M2(15899194),
      orangeD: M2(13791262),
      belly: M2(16773598),
      pink: M2(16754616),
      green: M2(4173402, { roughness: 0.2 }),
      gold: M2(15909194, { metalness: 0.5, roughness: 0.3 }),
      floor: M2(15321504, { roughness: 1 }),
      rug: M2(16177320, { roughness: 1 }),
      rugR: M2(15305354, { roughness: 1 }),
      rugB: M2(9422568, { roughness: 1 })
    };
    try {
      var cv = document.createElement("canvas");
      cv.width = 128;
      cv.height = 128;
      var g2 = cv.getContext("2d");
      g2.fillStyle = "#F29A3A";
      g2.fillRect(0, 0, 128, 128);
      g2.fillStyle = "#D2701E";
      for (var i2 = 0; i2 < 6; i2++) {
        g2.beginPath();
        g2.ellipse(64, 10 + i2 * 22, 70, 5, 0, 0, Math.PI * 2);
        g2.fill();
      }
      var tex = new T2.CanvasTexture(cv);
      mat.stripes = M2(16777215, { map: tex });
    } catch (e2) {
      mat.stripes = mat.orange;
    }
    function sph(r2, m2, x2, y2, z, sx, sy, sz) {
      var o2 = new T2.Mesh(new T2.SphereGeometry(r2, 28, 20), m2);
      o2.position.set(x2 || 0, y2 || 0, z || 0);
      o2.scale.set(sx || 1, sy || 1, sz || 1);
      return o2;
    }
    function cyl(r1, r2, h2, m2, y2) {
      var o2 = new T2.Mesh(new T2.CylinderGeometry(r1, r2, h2, 20), m2);
      o2.position.y = y2 || 0;
      return o2;
    }
    function grp(x2, y2, z, parent) {
      var o2 = new T2.Group();
      o2.position.set(x2 || 0, y2 || 0, z || 0);
      if (parent)
        parent.add(o2);
      return o2;
    }
    function rig(o2) {
      var r2 = { root: grp(o2.x, 0, 0, scene) };
      r2.hips = grp(0, o2.hipY, 0, r2.root);
      r2.torso = grp(0, 0, 0, r2.hips);
      r2.head = grp(0, o2.neckY, 0, r2.torso);
      function arm(side) {
        var sh = grp(side * o2.shX, o2.shY, 0, r2.torso);
        sh.add(sph(o2.armR * 1.25, o2.sleeve, 0, -0.02, 0));
        var up = cyl(o2.armR, o2.armR * 0.9, o2.upper, o2.sleeve, -o2.upper / 2);
        sh.add(up);
        var el = grp(0, -o2.upper, 0, sh);
        el.add(sph(o2.armR * 0.92, o2.sleeve));
        el.add(cyl(o2.armR * 0.85, o2.armR * 0.75, o2.lower, o2.forearm, -o2.lower / 2));
        if (o2.cuff) {
          var cf = new T2.Mesh(new T2.TorusGeometry(o2.armR * 0.95, o2.armR * 0.35, 10, 20), o2.cuff);
          cf.rotation.x = Math.PI / 2;
          cf.position.y = -o2.lower * 0.82;
          el.add(cf);
        }
        el.add(sph(o2.handR, o2.hand, 0, -o2.lower - o2.handR * 0.6, 0));
        return { sh, el };
      }
      function leg(side) {
        var hp = grp(side * o2.legX, 0, 0, r2.hips);
        hp.add(cyl(o2.legR, o2.legR * 0.9, o2.thigh, o2.leg, -o2.thigh / 2));
        var kn = grp(0, -o2.thigh, 0, hp);
        kn.add(sph(o2.legR * 0.9, o2.leg));
        kn.add(cyl(o2.legR * 0.85, o2.legR * 0.75, o2.shin, o2.shinMat || o2.leg, -o2.shin / 2));
        var shoe = sph(o2.footR, o2.foot, 0, -o2.shin - o2.footR * 0.4, o2.footR * 0.45, 1, 0.65, 1.5);
        kn.add(shoe);
        if (o2.pom)
          kn.add(sph(o2.footR * 0.4, o2.pom, 0, -o2.shin + o2.footR * 0.1, o2.footR * 1.4));
        return { hp, kn };
      }
      r2.aL = arm(1);
      r2.aR = arm(-1);
      r2.lL = leg(1);
      r2.lR = leg(-1);
      return r2;
    }
    var mimi = rig({
      x: -0.85,
      hipY: 0.72,
      neckY: 0.56,
      shX: 0.2,
      shY: 0.42,
      armR: 0.055,
      upper: 0.25,
      lower: 0.23,
      handR: 0.055,
      legX: 0.1,
      legR: 0.065,
      thigh: 0.33,
      shin: 0.31,
      footR: 0.075,
      sleeve: mat.white,
      forearm: mat.white,
      cuff: mat.red,
      hand: mat.skin,
      leg: mat.white,
      foot: mat.black,
      pom: mat.red
    });
    var dress = new T2.Mesh(new T2.LatheGeometry([new T2.Vector2(1e-3, 0.5), new T2.Vector2(0.15, 0.5), new T2.Vector2(0.19, 0.38), new T2.Vector2(0.2, 0.2), new T2.Vector2(0.27, 0), new T2.Vector2(0.36, -0.18), new T2.Vector2(1e-3, -0.18)], 32), mat.white);
    mimi.torso.add(dress);
    var hem = new T2.Mesh(new T2.TorusGeometry(0.355, 0.03, 10, 40), mat.red);
    hem.rotation.x = Math.PI / 2;
    hem.position.y = -0.17;
    mimi.torso.add(hem);
    var belt = new T2.Mesh(new T2.TorusGeometry(0.2, 0.028, 10, 32), mat.red);
    belt.rotation.x = Math.PI / 2;
    belt.position.y = 0.2;
    mimi.torso.add(belt);
    mimi.torso.add(sph(0.045, mat.red, -0.06, 0.2, 0.2, 1.2, 0.8, 0.6));
    mimi.torso.add(sph(0.045, mat.red, 0.06, 0.2, 0.2, 1.2, 0.8, 0.6));
    [0.33, 0.06, -0.08].forEach(function(y2) {
      mimi.torso.add(sph(0.036, mat.red, 0, y2, y2 > 0.2 ? 0.185 : 0.25));
    });
    var collar = new T2.Mesh(new T2.TorusGeometry(0.15, 0.06, 12, 24), mat.white);
    collar.rotation.x = Math.PI / 2;
    collar.position.y = 0.5;
    mimi.torso.add(collar);
    var collarR = new T2.Mesh(new T2.TorusGeometry(0.2, 0.012, 8, 30), mat.red);
    collarR.rotation.x = Math.PI / 2;
    collarR.position.y = 0.48;
    mimi.torso.add(collarR);
    var H2 = mimi.head;
    H2.add(cyl(0.05, 0.06, 0.08, mat.skin, 0.02));
    H2.add(sph(0.27, mat.skin, 0, 0.26, 0));
    var hairTop = new T2.Mesh(new T2.SphereGeometry(0.285, 28, 20, 0, Math.PI * 2, 0, Math.PI * 0.55), mat.hair);
    hairTop.position.set(0, 0.28, -0.02);
    hairTop.rotation.x = -0.35;
    H2.add(hairTop);
    H2.add(sph(0.27, mat.hair, 0, 0.24, -0.05, 1.03, 1, 0.95));
    [-1, 1].forEach(function(s2) {
      H2.add(sph(0.068, mat.eye, s2 * 0.095, 0.27, 0.235, 1, 1.15, 0.45));
      H2.add(sph(0.022, mat.shine, s2 * 0.095 - 0.02, 0.3, 0.262));
      H2.add(sph(0.045, mat.cheek, s2 * 0.16, 0.18, 0.21, 1, 0.6, 0.3));
      var brow = new T2.Mesh(new T2.TorusGeometry(0.045, 8e-3, 6, 12, Math.PI * 0.7), mat.hair);
      brow.position.set(s2 * 0.095, 0.36, 0.245);
      brow.rotation.z = Math.PI * 0.15;
      H2.add(brow);
      for (var k2 = 0; k2 < 4; k2++)
        H2.add(sph(0.045 - k2 * 4e-3, mat.hair, s2 * (0.25 + k2 * 0.01), 0.17 - k2 * 0.075, -0.02));
      var bow1 = new T2.Mesh(new T2.ConeGeometry(0.04, 0.08, 10), mat.red);
      bow1.position.set(s2 * 0.29, -0.08, 0);
      bow1.rotation.z = Math.PI / 2;
      H2.add(bow1);
      var bow2 = new T2.Mesh(new T2.ConeGeometry(0.04, 0.08, 10), mat.red);
      bow2.position.set(s2 * 0.21, -0.08, 0);
      bow2.rotation.z = -Math.PI / 2;
      H2.add(bow2);
    });
    H2.add(sph(0.02, mat.skin, 0, 0.21, 0.27));
    var smile = new T2.Mesh(new T2.TorusGeometry(0.05, 0.012, 8, 16, Math.PI), mat.mouth);
    smile.position.set(0, 0.15, 0.255);
    smile.rotation.z = Math.PI;
    H2.add(smile);
    var hat = new T2.Group();
    hat.position.set(0.02, 0.47, -0.02);
    hat.rotation.z = -0.12;
    H2.add(hat);
    hat.add(new T2.Mesh(new T2.ConeGeometry(0.22, 0.46, 28), mat.white));
    hat.children[0].position.y = 0.2;
    var band = new T2.Mesh(new T2.TorusGeometry(0.205, 0.025, 10, 30), mat.red);
    band.rotation.x = Math.PI / 2;
    band.position.y = 0;
    hat.add(band);
    hat.add(sph(0.06, mat.red, 0, 0.44, 0));
    var pepe = rig({
      x: 0.95,
      hipY: 0.36,
      neckY: 0.36,
      shX: 0.17,
      shY: 0.26,
      armR: 0.05,
      upper: 0.15,
      lower: 0.13,
      handR: 0.06,
      legX: 0.09,
      legR: 0.065,
      thigh: 0.17,
      shin: 0.14,
      footR: 0.075,
      sleeve: mat.stripes,
      forearm: mat.orange,
      hand: mat.belly,
      leg: mat.stripes,
      foot: mat.belly
    });
    pepe.torso.add(sph(0.22, mat.stripes, 0, 0.13, 0, 1, 1.15, 0.9));
    pepe.torso.add(sph(0.15, mat.belly, 0, 0.1, 0.09, 1, 1.2, 0.7));
    var collarP = new T2.Mesh(new T2.TorusGeometry(0.12, 0.025, 10, 24), mat.red);
    collarP.rotation.x = Math.PI / 2;
    collarP.position.y = 0.33;
    pepe.torso.add(collarP);
    pepe.torso.add(sph(0.035, mat.gold, 0, 0.3, 0.13));
    var PH = pepe.head;
    PH.add(sph(0.24, mat.stripes, 0, 0.16, 0, 1.12, 0.95, 1));
    PH.add(sph(0.11, mat.belly, 0, 0.09, 0.17, 1.2, 0.8, 0.7));
    [-1, 1].forEach(function(s2) {
      var ear = new T2.Mesh(new T2.ConeGeometry(0.08, 0.16, 12), mat.orange);
      ear.position.set(s2 * 0.15, 0.37, 0);
      ear.rotation.z = -s2 * 0.35;
      PH.add(ear);
      var earIn = new T2.Mesh(new T2.ConeGeometry(0.045, 0.1, 10), mat.pink);
      earIn.position.set(s2 * 0.148, 0.355, 0.035);
      earIn.rotation.z = -s2 * 0.35;
      PH.add(earIn);
      PH.add(sph(0.058, mat.green, s2 * 0.09, 0.2, 0.2, 1, 1.15, 0.5));
      PH.add(sph(0.03, mat.black, s2 * 0.09, 0.2, 0.225, 0.7, 1.2, 0.5));
      PH.add(sph(0.016, mat.shine, s2 * 0.09 - 0.015, 0.225, 0.235));
      for (var w2 = 0; w2 < 2; w2++) {
        var wh = cyl(3e-3, 3e-3, 0.16, mat.black);
        wh.rotation.z = Math.PI / 2 + s2 * (0.1 + w2 * 0.15);
        wh.position.set(s2 * 0.14, 0.08 - w2 * 0.03, 0.2);
        PH.add(wh);
      }
    });
    PH.add(sph(0.025, mat.pink, 0, 0.12, 0.25, 1.2, 0.8, 0.8));
    var tail = [];
    var tp = pepe.hips;
    for (var t2 = 0; t2 < 7; t2++) {
      var seg = grp(0, t2 === 0 ? 0.05 : 0.07, t2 === 0 ? -0.18 : 0, tp);
      seg.add(sph(0.045 - t2 * 2e-3, t2 === 6 ? mat.belly : mat.stripes));
      tail.push(seg);
      tp = seg;
    }
    pepe.tail = tail;
    var floor = new T2.Mesh(new T2.CircleGeometry(4, 48), mat.floor);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -5e-3;
    scene.add(floor);
    [[1.9, mat.rug], [1.6, mat.rugR], [1.45, mat.rug], [1.1, mat.rugB], [0.95, mat.rug]].forEach(function(rr, i3) {
      var d2 = new T2.Mesh(new T2.CircleGeometry(rr[0], 48), rr[1]);
      d2.rotation.x = -Math.PI / 2;
      d2.position.y = 1e-3 + i3 * 1e-3;
      d2.scale.set(1.3, 1, 0.75);
      scene.add(d2);
    });
    [mimi, pepe].forEach(function(c2) {
      var sh = new T2.Mesh(new T2.CircleGeometry(0.32, 24), new T2.MeshBasicMaterial({ color: 3810328, transparent: true, opacity: 0.22 }));
      sh.rotation.x = -Math.PI / 2;
      sh.position.set(c2.root.position.x, 8e-3, 0);
      scene.add(sh);
      c2.shadow = sh;
    });
    function apply(r2, P2, sc) {
      r2.hips.position.y = r2.baseY + P2.hy * sc;
      r2.root.position.x = r2.baseX + P2.hx * sc;
      r2.root.rotation.y = P2.ry;
      r2.torso.rotation.set(P2.bow || 0, P2.ty, P2.tz);
      r2.head.rotation.set(P2.hn * 0.5, P2.hn, P2.hz);
      r2.aL.sh.rotation.set(P2.aL.x, 0, P2.aL.z);
      r2.aL.el.rotation.set(-P2.aL.e, 0, 0);
      r2.aR.sh.rotation.set(P2.aR.x, 0, P2.aR.z);
      r2.aR.el.rotation.set(-P2.aR.e, 0, 0);
      r2.lL.hp.rotation.set(P2.lL.x, 0, P2.lL.z);
      r2.lL.kn.rotation.set(P2.lL.k, 0, 0);
      r2.lR.hp.rotation.set(P2.lR.x, 0, P2.lR.z);
      r2.lR.kn.rotation.set(P2.lR.k, 0, 0);
      if (r2.shadow) {
        r2.shadow.position.x = r2.root.position.x;
        var s2 = 1 - Math.min(0.5, P2.hy * 1.5);
        r2.shadow.scale.set(s2, s2, s2);
      }
    }
    mimi.baseY = mimi.hips.position.y;
    mimi.baseX = mimi.root.position.x;
    pepe.baseY = pepe.hips.position.y;
    pepe.baseX = pepe.root.position.x;
    return {
      renderer,
      scene,
      camera,
      mimi,
      pepe,
      frame: function(Pm, Pp, time) {
        var w2 = canvas.clientWidth || 640, h2 = canvas.clientHeight || 360;
        if (canvas.width !== Math.floor(w2 * renderer.getPixelRatio()) || canvas.height !== Math.floor(h2 * renderer.getPixelRatio())) {
          renderer.setSize(w2, h2, false);
          camera.aspect = w2 / h2;
          camera.updateProjectionMatrix();
        }
        apply(mimi, Pm, 1);
        apply(pepe, Pp, 0.6);
        pepe.tail.forEach(function(sg, i3) {
          sg.rotation.set(i3 === 0 ? -0.9 : -0.25, 0, Math.sin(time * 6 * (Pp.tail || 1) + i3 * 0.7) * 0.25);
        });
        renderer.render(scene, camera);
      },
      dispose: function() {
        try {
          renderer.dispose();
        } catch (e2) {
        }
      }
    };
  }
  var STORIES = [
    { id: "italia", title: "Il grande viaggio in Italia", en: "A trip around Italy", tag: "Geografia", cover: "italy", bg: "map", steps: [
      ["mimi", 16, 97],
      ["pepe", 30, 98],
      ["map", null, []],
      ["m", "Ciao {name}! Guarda questa mappa: \xE8 l'Italia! [Italy!] Sapete a cosa somiglia? A uno stivale! [A boot!]", "felice"],
      ["p", "meow", "curioso"],
      ["m", "Intorno all'Italia c'\xE8 tanta acqua blu: \xE8 il mare. [The sea!] L'Italia ha il mare su tre lati: a destra, a sinistra e in basso.", "curiosa"],
      ["m", "In Italia ci sono venti regioni, come venti pezzi di un puzzle, e tantissime citt\xE0. La citt\xE0 pi\xF9 importante si chiama capitale: \xE8 Roma! [Rome!]", "felice"],
      ["map", "lazio", ["Roma"]],
      ["m", "Roma \xE8 nella regione Lazio, proprio al centro dell'Italia. A Roma c'\xE8 il Colosseo: tanto, tanto tempo fa l\xEC si facevano grandi spettacoli. [The Colosseum!]", "curiosa"],
      ["show", "col", "colosseum", 40, 93, 16],
      ["pin", "{kid}, dov'\xE8 Roma? [Where is Rome?] Tocca la citt\xE0!", ["Roma", "Milano", "Palermo"], "Roma", "Rome", "[Yes! Rome!] Bravissima! Roma \xE8 la capitale d'Italia.", "Quella \xE8 {choice}. Roma \xE8 qui, al centro!"],
      ["hide", "col"],
      ["map", null, ["Milano", "Napoli"]],
      ["m", "In alto c'\xE8 il Nord: [North!] l\xEC fa pi\xF9 freddo e ci sono le montagne. In basso c'\xE8 il Sud: [South!] l\xEC fa pi\xF9 caldo e c'\xE8 tanto sole.", "pensa"],
      ["m", "Milano \xE8 al Nord. [North.] Napoli \xE8 al Sud. [South.] Napoli \xE8 la citt\xE0 di Pulcinella, come il mio vestito!", "ride"],
      ["pick", "{kid}, dove fa pi\xF9 caldo? Al Nord o al Sud? [North or south?]", [["north", "North", "Nord"], ["south", "South", "Sud"]], "south", "south", "[Yes! The south!] Al Sud fa pi\xF9 caldo!", "Al Nord fa pi\xF9 freddo. Fa pi\xF9 caldo al Sud: [south]!"],
      ["map", "sicilia", ["Palermo"]],
      ["m", "E poi ci sono due isole grandi: la Sicilia [Sicily] e la Sardegna. [Sardinia.] Un'isola \xE8 una terra con il mare tutto intorno. [An island!]", "curiosa"],
      ["map", "sardegna", ["Cagliari"]],
      ["pick", "{kid}, un'isola ha intorno\u2026 [The sea or the mountains?]", [["sea", "The sea", "il mare"], ["mountains", "Mountains", "le montagne"]], "sea", "island", "[Yes! The sea!] Un'isola ha il mare tutto intorno!", "Un'isola ha intorno il mare: [the sea]!"],
      ["fx"],
      ["learn", ["Italy", "boot", "sea", "Rome", "north", "south", "island"]]
    ] },
    { id: "napoli", title: "Pepe a Napoli", en: "Pepe in Naples", tag: "Geografia", cover: "pizza", bg: "map", steps: [
      ["mimi", 16, 97],
      ["pepe", 30, 98],
      ["map", "campania", ["Napoli"]],
      ["m", "Oggi Pepe vuole andare a Napoli, una grande citt\xE0 del Sud, nella regione Campania. [Naples!]", "felice"],
      ["p", "purr", "contento"],
      ["m", "Napoli \xE8 vicina al mare e ha un vulcano gigante: il Vesuvio! [A volcano!] Un vulcano \xE8 una montagna che dentro ha il fuoco. Oggi dorme tranquillo.", "sorpresa"],
      ["map", "campania", ["Napoli", "Vesuvio"]],
      ["show", "vol", "volcano", 42, 93, 18],
      ["tap", "{kid}, tocca il vulcano! [Touch the volcano!]", ["vol"], "vol", "volcano", "[Volcano!] Bravissima! Il Vesuvio!", ""],
      ["hide", "vol"],
      ["m", "A Napoli \xE8 nata la pizza! [Pizza!] La pizza Margherita ha tre colori: il rosso del pomodoro, il bianco della mozzarella e il verde del basilico.", "ride"],
      ["show", "piz", "pizza", 44, 92, 17],
      ["m", "Rosso, bianco e verde\u2026 sono i colori della bandiera italiana! [Red, white and green!]", "felice"],
      ["pick", "{kid}, di che colore \xE8 il pomodoro? [What colour is the tomato?]", [["red", "Red", "rosso", null, "#E63946"], ["green", "Green", "verde", null, "#2BB673"], ["white", "White", "bianco", null, "#FFFFFF"]], "red", "red", "[Red! The tomato is red!]", "Il pomodoro \xE8 rosso: [red]!"],
      ["p", "meow", "birichino"],
      ["m", "Pepe ha fame! Vuole tre pizze! [Three pizzas!] Contiamo insieme: [one, two, three!]", "ride"],
      ["count", "{kid}, tocca le pizze e conta con me!", "pizza", 3, "three", "pizza"],
      ["m", "E sapete chi viene da Napoli? Pulcinella! Il personaggio con il vestito bianco e la maschera nera. Proprio come me! [Like me!]", "ride"],
      ["fx"],
      ["learn", ["Naples", "volcano", "pizza", "red", "white", "green", "three"]]
    ] },
    { id: "venezia", title: "Venezia, la citt\xE0 sull'acqua", en: "Venice, the city on the water", tag: "Geografia", cover: "gondola", bg: "map", steps: [
      ["mimi", 16, 97],
      ["pepe", 30, 98],
      ["map", "veneto", ["Venezia"]],
      ["m", "Andiamo a Venezia, nella regione Veneto, al Nord. [Venice!] Venezia \xE8 una citt\xE0 magica: \xE8 costruita sull'acqua!", "sorpresa"],
      ["m", "A Venezia non ci sono le macchine. Le strade sono di acqua: si chiamano canali. [Canals!] Per andare in giro si usa la barca! [A boat!]", "curiosa"],
      ["pick", "{kid}, a Venezia come si va in giro? [A car or a boat?]", [["car", "A car", "la macchina"], ["boat", "A boat", "la barca"]], "boat", "boat", "[Yes! A boat!] A Venezia si va in barca!", "Niente macchine a Venezia! Si va in barca: [a boat]!"],
      ["show", "gon", "gondola", 44, 94, 22],
      ["m", "Questa barca lunga e nera si chiama gondola. [Gondola!] Il signore che la guida si chiama gondoliere e ha la maglia a righe.", "felice"],
      ["tap", "{kid}, tocca la gondola! [Touch the gondola!]", ["gon"], "gon", "gondola", "[Gondola!] Brava!", ""],
      ["m", "A Venezia ci sono pi\xF9 di quattrocento ponti per attraversare i canali! [Bridges!] E ogni inverno c'\xE8 il Carnevale, con tante maschere colorate. [Masks!]", "ride"],
      ["p", "meow", "sorpreso"],
      ["m", "Pepe ha paura dell'acqua! Ma sulla gondola \xE8 al sicuro. [Don't worry, Pepe!]", "ride"],
      ["pin", "{kid}, dov'\xE8 Venezia? [Where is Venice?]", ["Venezia", "Napoli", "Roma"], "Venezia", "Venice", "[Yes! Venice!] Venezia \xE8 al Nord, sul mare.", "Quella \xE8 {choice}. Venezia \xE8 in alto, a destra!"],
      ["fx"],
      ["learn", ["Venice", "water", "boat", "gondola", "bridge", "mask"]]
    ] },
    { id: "alpi", title: "Sulle Alpi con la neve", en: "Snow in the Alps", tag: "Geografia", cover: "mountain", bg: "snow", steps: [
      ["mimi", 16, 97],
      ["pepe", 30, 98],
      ["map", "valledaosta", ["Monte Bianco"]],
      ["m", "Brrr! Oggi saliamo in alto, sulle montagne! [Mountains!] Al Nord dell'Italia ci sono le Alpi, le montagne pi\xF9 alte.", "sorpresa"],
      ["m", "La montagna pi\xF9 alta di tutte si chiama Monte Bianco, in Valle d'Aosta. \xC8 alta quasi cinquemila metri! \xC8 bianca perch\xE9 c'\xE8 sempre la neve. [Snow!]", "curiosa"],
      ["hidemap"],
      ["show", "mnt", "mountain", 56, 82, 30],
      ["show", "sn1", "snowflake", 44, 40, 4, "a-float"],
      ["show", "sn2", "snowflake", 70, 30, 3.5, "a-float"],
      ["show", "sn3", "snowflake", 84, 46, 4, "a-float"],
      ["pick", "{kid}, in montagna fa caldo o freddo? [Hot or cold?]", [["hot", "Hot", "caldo"], ["cold", "Cold", "freddo"]], "cold", "cold", "[Cold! Brrr!] In montagna fa freddo!", "In montagna fa freddo: [cold]! Brrr!"],
      ["act", "Facciamo finta di avere freddo! [Shiver! Brrr!] Tremate come Mim\xEC!", "Brrr!"],
      ["m", "Quando fa freddo mettiamo il cappello, [a hat] la sciarpa [a scarf] e i guanti. [gloves!]", "felice"],
      ["count", "{kid}, contiamo i fiocchi di neve! Toccali!", "snowflake", 3, "three", "snowflake"],
      ["show", "man", "snowman", 30, 95, 10],
      ["m", "E con la neve facciamo\u2026 un pupazzo di neve! [A snowman!]", "ride"],
      ["p", "meow", "contento"],
      ["fx"],
      ["learn", ["mountain", "snow", "cold", "hat", "snowman"]]
    ] },
    { id: "isole", title: "Il sole delle isole", en: "The sunny islands", tag: "Geografia", cover: "lemon", bg: "sea", steps: [
      ["mimi", 16, 97],
      ["pepe", 30, 98],
      ["map", "sicilia", ["Palermo", "Etna"]],
      ["m", "Prendiamo la nave e andiamo in Sicilia, l'isola pi\xF9 grande d'Italia! [Sicily!]", "felice"],
      ["m", "In Sicilia c'\xE8 l'Etna, il vulcano attivo pi\xF9 alto d'Europa! [A big volcano!] A volte fa uscire fumo e fuoco, ma gli scienziati lo controllano sempre.", "sorpresa"],
      ["pin", "{kid}, dov'\xE8 il vulcano Etna? Tocca!", ["Etna", "Palermo"], "Etna", "volcano", "[Yes! Etna!] Bravissima!", "Quella \xE8 {choice}. L'Etna \xE8 qui, vicino al mare!"],
      ["m", "In Sicilia crescono tanti limoni gialli e arance! [Lemons and oranges!]", "ride"],
      ["hidemap"],
      ["show", "lem", "lemon", 50, 90, 12],
      ["pick", "{kid}, di che colore \xE8 il limone? [What colour is the lemon?]", [["yellow", "Yellow", "giallo", null, "#FFD23F"], ["blue", "Blue", "blu", null, "#2F7DE1"]], "yellow", "yellow", "[Yellow! A yellow lemon!]", "Il limone \xE8 giallo: [yellow]!"],
      ["hide", "lem"],
      ["map", "sardegna", ["Cagliari"]],
      ["m", "L'altra grande isola \xE8 la Sardegna. [Sardinia.] Ha un mare azzurro e trasparente, dove nuotano tanti pesci. [Fish!]", "curiosa"],
      ["hidemap"],
      ["count", "{kid}, conta i pesci! Toccali!", "fish", 4, "four", "fish"],
      ["m", "Il sole scalda, il mare luccica\u2026 [Sun and sea!] Ricordiamoci il cappellino e la crema per il sole!", "felice"],
      ["fx"],
      ["learn", ["Sicily", "volcano", "lemon", "yellow", "fish", "four", "sun"]]
    ] },
    { id: "firenze", title: "Firenze e i colori magici", en: "Florence and magic colours", tag: "Arte e scienza", cover: "palette", bg: "map", steps: [
      ["mimi", 16, 97],
      ["pepe", 30, 98],
      ["map", "toscana", ["Firenze", "Pisa"]],
      ["m", "Questa \xE8 la Toscana, al centro dell'Italia. Qui c'\xE8 Firenze, [Florence!] la citt\xE0 dei grandi pittori: tanto tempo fa dipingevano quadri bellissimi.", "curiosa"],
      ["m", "E qui vicino c'\xE8 Pisa, con la torre storta, la torre pendente! Sembra che stia per cadere, ma \xE8 l\xEC da pi\xF9 di ottocento anni! [The leaning tower!]", "ride"],
      ["hidemap"],
      ["show", "pal", "palette", 50, 90, 16],
      ["m", "Facciamo i pittori anche noi! [Let's paint!] Vi insegno una magia dei colori.", "felice"],
      ["m", "Se mescolo il rosso [red] e il giallo [yellow] viene fuori\u2026 l'arancione! [Orange!]", "sorpresa"],
      ["pick", "{kid}, il blu e il giallo insieme fanno\u2026 [Blue and yellow make\u2026]", [["green", "Green", "verde", null, "#2BB673"], ["pink", "Pink", "rosa", null, "#F27BB4"]], "green", "green", "[Green! Blue and yellow make green!] Magia!", "Il blu e il giallo fanno il verde: [green]!"],
      ["pick", "E il rosso e il bianco? [Red and white make\u2026]", [["pink", "Pink", "rosa", null, "#F27BB4"], ["black", "Black", "nero", null, "#2B2B2B"]], "pink", "pink", "[Pink!] Il rosa! Come il naso di Pepe!", "Il rosso e il bianco fanno il rosa: [pink]!"],
      ["p", "laugh", "birichino"],
      ["m", "Oh no! Pepe ha messo la zampa nel colore e ha lasciato le impronte arancioni dappertutto! [Silly cat!]", "ride"],
      ["fx"],
      ["learn", ["Florence", "paint", "orange", "green", "pink"]]
    ] },
    { id: "stagioni", title: "Le quattro stagioni", en: "The four seasons", tag: "Natura", cover: "tree_autumn", bg: "garden", steps: [
      ["mimi", 14, 97],
      ["pepe", 28, 98],
      ["m", "Lo sapete che l'anno ha quattro stagioni? [Four seasons!] Guardiamo come cambia il nostro albero.", "curiosa"],
      ["show", "tr", "tree_spring", 58, 94, 22],
      ["m", "Primavera: [spring!] sull'albero spuntano i fiori, gli uccellini cantano e le giornate si allungano.", "felice"],
      ["show", "fl", "flower", 82, 96, 7],
      ["swap", "tr", "tree_summer"],
      ["hide", "fl"],
      ["show", "su", "sun", 84, 40, 10, "a-float"],
      ["m", "Estate: [summer!] fa caldo, c'\xE8 tanto sole e sull'albero ci sono i frutti. Si va al mare!", "ride"],
      ["swap", "tr", "tree_autumn"],
      ["hide", "su"],
      ["show", "lf", "leaf", 82, 96, 6],
      ["m", "Autunno: [autumn!] le foglie diventano gialle, arancioni e rosse e cadono a terra. Si torna a scuola!", "curiosa"],
      ["swap", "tr", "tree_winter"],
      ["hide", "lf"],
      ["show", "snm", "snowman", 84, 96, 9],
      ["m", "Inverno: [winter!] fa freddo, l'albero non ha foglie e a volte nevica. Arriva il Natale!", "sorpresa"],
      ["hide", "snm"],
      ["pick", "{kid}, quando nevica? [When does it snow?]", [["summer", "Summer", "estate", "sun"], ["winter", "Winter", "inverno", "snowflake"]], "winter", "winter", "[Winter!] D'inverno nevica!", "Nevica d'inverno: [winter]!"],
      ["swap", "tr", "tree_spring"],
      ["pick", "E quando sbocciano i fiori? [Flowers! When?]", [["spring", "Spring", "primavera", "flower"], ["autumn", "Autumn", "autunno", "leaf"]], "spring", "spring", "[Spring!] In primavera sbocciano i fiori!", "I fiori sbocciano in primavera: [spring]!"],
      ["m", "Primavera, estate, autunno, inverno\u2026 e poi si ricomincia, come un girotondo! [Spring, summer, autumn, winter!]", "ride"],
      ["fx"],
      ["learn", ["spring", "summer", "autumn", "winter", "tree", "flower"]]
    ] },
    { id: "meteo", title: "Che tempo fa?", en: "What's the weather like?", tag: "Natura", cover: "rainbow", bg: "sky", steps: [
      ["mimi", 14, 97],
      ["pepe", 28, 98],
      ["m", "Guardiamo fuori dalla finestra: che tempo fa? [What's the weather like?]", "curiosa"],
      ["show", "sun", "sun", 60, 44, 12, "a-float"],
      ["m", "C'\xE8 il sole! [It's sunny!] Il sole scalda l'acqua del mare, e l'acqua sale piano piano in cielo, invisibile.", "felice"],
      ["show", "cl", "cloud", 74, 34, 14, "a-float"],
      ["m", "In cielo l'acqua diventa una nuvola. [A cloud!] Le nuvole sono fatte di goccioline piccolissime!", "curiosa"],
      ["swap", "cl", "raincloud"],
      ["hide", "sun"],
      ["m", "Quando la nuvola \xE8 piena di goccioline\u2026 piove! [It's raining!] E l'acqua torna gi\xF9, nel mare e nei fiumi. \xC8 il viaggio dell'acqua!", "sorpresa"],
      ["p", "sad", "triste"],
      ["pick", "Piove! {kid}, cosa ci serve? [What do we need?]", [["umbrella", "An umbrella", "l'ombrello", "umbrella"], ["ball", "A ball", "la palla", "ball"]], "umbrella", "umbrella", "[An umbrella!] Cos\xEC non ci bagniamo!", "Con la pioggia ci serve l'ombrello: [an umbrella]!"],
      ["show", "umb", "umbrella", 32, 86, 9],
      ["show", "sun2", "sun", 52, 36, 10, "a-float"],
      ["show", "rb", "rainbow", 66, 70, 22],
      ["m", "Guardate! Sole e pioggia insieme fanno\u2026 l'arcobaleno! [A rainbow!] Ha sette colori.", "ride"],
      ["tap", "{kid}, tocca l'arcobaleno! [Touch the rainbow!]", ["rb"], "rb", "rainbow", "[Rainbow!] Che bello!", ""],
      ["p", "purr", "contento"],
      ["fx"],
      ["learn", ["sun", "cloud", "rain", "umbrella", "rainbow"]]
    ] },
    { id: "corpo", title: "Il mio corpo", en: "My body", tag: "Corpo e salute", cover: "hand", bg: "room", steps: [
      ["mimi", 22, 97],
      ["pepe", 36, 98],
      ["m", "Oggi giochiamo con il nostro corpo! [My body!] Fate quello che faccio io!", "felice"],
      ["act", "Toccate la testa! [Touch your head!]", "Head!"],
      ["act", "Toccate il naso! [Touch your nose!]", "Nose!"],
      ["act", "Battete le mani! [Clap your hands!]", "Hands!"],
      ["act", "Pestate i piedi! [Stamp your feet!]", "Feet!"],
      ["show", "eye", "eye", 52, 60, 10],
      ["show", "nose", "nose", 66, 62, 7],
      ["show", "mouth", "mouth", 80, 60, 10],
      ["tap", "{kid}, con cosa guardiamo? Tocca gli occhi! [Where are the eyes?]", ["eye", "nose", "mouth"], "eye", "eyes", "[Eyes!] Con gli occhi guardiamo!", "Quello \xE8 {choice}. Gli occhi sono qui: [eyes]!"],
      ["tap", "Con cosa sentiamo i profumi? [Where is the nose?]", ["eye", "nose", "mouth"], "nose", "nose", "[Nose!] Con il naso annusiamo i fiori!", "Quello \xE8 {choice}. Il naso \xE8 qui: [nose]!"],
      ["hide", "eye"],
      ["hide", "nose"],
      ["m", "Con la bocca mangiamo e parliamo. Dentro ci sono i dentini, [teeth] e i dentini vanno lavati!", "pensa"],
      ["show", "tb", "toothbrush", 60, 70, 14],
      ["m", "Ci laviamo i denti la mattina e la sera, prima di dormire. [Brush your teeth!] Su e gi\xF9, su e gi\xF9!", "ride"],
      ["act", "Facciamo finta di lavare i denti! [Brush, brush, brush!]", "Brush!"],
      ["hide", "tb"],
      ["hide", "mouth"],
      ["show", "hd", "hand", 62, 82, 10],
      ["m", "E prima di mangiare? Si lavano le mani con l'acqua e il sapone! [Wash your hands!]", "felice"],
      ["p", "meow", "birichino"],
      ["m", "Pepe si lava con la lingua\u2026 ma noi usiamo il sapone! [Silly Pepe!]", "ride"],
      ["fx"],
      ["learn", ["head", "nose", "eyes", "hands", "feet", "teeth"]]
    ] },
    { id: "maniere", title: "Le parole magiche", en: "The magic words", tag: "Buone maniere", cover: "heart", bg: "room", steps: [
      ["mimi", 22, 97],
      ["pepe", 66, 98],
      ["m", "Sapete che esistono delle parole magiche? Fanno felici le persone! [Magic words!]", "curiosa"],
      ["m", "Quando incontriamo qualcuno diciamo: ciao! [Hello!] E quando andiamo via: arrivederci! [Goodbye!]", "felice"],
      ["show", "ball", "ball", 50, 96, 6],
      ["p", "meow", "birichino"],
      ["m", "Oh! Pepe vuole la palla! Ma per chiedere una cosa, quale parola magica si dice?", "pensa"],
      ["pick", "{kid}, aiuta Pepe! [Help Pepe!]", [["please", "Please", "per favore"], ["goodbye", "Goodbye", "arrivederci"]], "please", "please", "[Please!] Per favore! Brava! Tieni, Pepe!", "Per chiedere si dice per favore: [please]!"],
      ["move", "ball", 62, 97],
      ["p", "purr", "contento"],
      ["pick", "E adesso Pepe cosa deve dire? [What does Pepe say now?]", [["thanks", "Thank you", "grazie"], ["hello", "Hello", "ciao"]], "thanks", "thank you", "[Thank you!] Grazie! Bravissima!", "Quando ci danno qualcosa si dice grazie: [thank you]!"],
      ["m", "Ops! Pepe ha fatto cadere il vaso! Quando facciamo un pasticcio diciamo: scusa! [Sorry!]", "sorpresa"],
      ["p", "sad", "triste"],
      ["act", "Diciamolo tutti insieme a Pepe: [Sorry, Pepe! It's okay!]", "Sorry!"],
      ["show", "hrt", "heart", 50, 70, 10, "a-float"],
      ["m", "Ciao, per favore, grazie, scusa: le parole magiche! [Hello, please, thank you, sorry!] Le usiamo ogni giorno, con tutti.", "ride"],
      ["fx"],
      ["learn", ["hello", "goodbye", "please", "thank you", "sorry"]]
    ] },
    { id: "fattoria", title: "Dalla fattoria alla tavola", en: "From the farm to the table", tag: "Natura", cover: "hen", bg: "garden", steps: [
      ["mimi", 14, 97],
      ["pepe", 28, 98],
      ["m", "Sapete da dove vengono le cose buone che mangiamo? Andiamo in fattoria! [The farm!]", "curiosa"],
      ["show", "cow", "cow", 50, 95, 14],
      ["m", "La mucca fa muu! [Moo!] E ci d\xE0 il latte, [milk] che beviamo a colazione.", "felice"],
      ["show", "hen", "hen", 76, 95, 12],
      ["m", "La gallina fa coccod\xE8! [Cluck cluck!] E ci d\xE0 le uova. [Eggs!]", "ride"],
      ["show", "milk", "milk", 40, 70, 6],
      ["show", "egg", "egg", 62, 70, 5],
      ["tap", "{kid}, cosa ci d\xE0 la mucca? Tocca! [What does the cow give us?]", ["milk", "egg"], "milk", "milk", "[Milk!] Il latte della mucca!", "Quello \xE8 {choice}. La mucca ci d\xE0 il latte: [milk]!"],
      ["tap", "E la gallina? [What does the hen give us?]", ["milk", "egg"], "egg", "egg", "[Eggs!] Le uova della gallina!", "Quello \xE8 {choice}. La gallina ci d\xE0 le uova: [eggs]!"],
      ["hide", "milk"],
      ["hide", "egg"],
      ["hide", "cow"],
      ["hide", "hen"],
      ["show", "fl", "flower", 54, 96, 8],
      ["show", "bee", "bee", 66, 70, 8, "a-float"],
      ["m", "Ssst! Sentite? Bzzz! \xC8 l'ape! [A bee!] L'ape vola sui fiori e con il loro nettare fa il miele, dolcissimo! [Honey!]", "sorpresa"],
      ["show", "hon", "honey", 80, 96, 8],
      ["m", "Le api sono importantissime: aiutano i fiori e le piante a fare i frutti. Non dobbiamo disturbarle!", "pensa"],
      ["pick", "{kid}, chi fa il miele? [Who makes honey?]", [["bee", "The bee", "l'ape", "bee"], ["cow", "The cow", "la mucca", "cow"]], "bee", "bee", "[The bee!] Bzzz! Bravissima!", "Il miele lo fa l'ape: [the bee]!"],
      ["p", "meow", "curioso"],
      ["fx"],
      ["learn", ["farm", "cow", "milk", "hen", "egg", "bee", "honey"]]
    ] },
    { id: "spazio", title: "Il viaggio nello spazio", en: "A trip to space", tag: "Scienze", cover: "rocket", bg: "night", steps: [
      ["mimi", 14, 97],
      ["pepe", 28, 98],
      ["m", "Saliamo sul razzo e andiamo nello spazio! [Space!] Contiamo alla rovescia!", "felice"],
      ["show", "rk", "rocket", 60, 96, 12],
      ["m", "[Five, four, three, two, one\u2026 blast off!] Via!", "ride"],
      ["move", "rk", 60, 30],
      ["show", "earth", "earth", 52, 70, 14, "a-float"],
      ["m", "Guardate gi\xF9: quella palla blu e verde \xE8 la Terra, [the Earth] la nostra casa! Il blu \xE8 il mare, il verde sono i prati e i boschi.", "sorpresa"],
      ["show", "sun", "sun", 82, 50, 14, "a-float"],
      ["m", "Questo \xE8 il Sole. [The Sun!] Lo sapete? Il Sole \xE8 una stella, una stella gigante e vicina! La Terra gli gira intorno, e per fare un giro intero ci mette un anno.", "curiosa"],
      ["show", "moon", "moon", 34, 36, 8, "a-float"],
      ["m", "E questa \xE8 la Luna! [The Moon!] Gira intorno alla Terra e di notte ci fa luce.", "felice"],
      ["pick", "{kid}, il Sole \xE8\u2026 [The Sun is\u2026]", [["star", "A star", "una stella", "star"], ["moon", "A moon", "una luna", "moon"]], "star", "star", "[A star!] Il Sole \xE8 una stella!", "Il Sole \xE8 una stella: [a star]!"],
      ["m", "E sapete come si dice stella in inglese? [Star!] Stella, il tuo nome vuol dire star!", "ride"],
      ["count", "{kid}, conta le stelle! Toccale!", "star", 5, "five", "star"],
      ["m", "Quando da noi \xE8 giorno c'\xE8 il Sole, [day] quando \xE8 notte vediamo la Luna e le stelle. [night!]", "pensa"],
      ["p", "purr", "contento"],
      ["fx"],
      ["learn", ["space", "Earth", "Sun", "Moon", "star", "day", "night"]]
    ] },
    { id: "drago", title: "La principessa Soleil e il drago gentile", en: "Princess Soleil and the kind dragon", tag: "Principesse", cover: "princess_soleil", bg: "castle", steps: [
      ["mimi", 12, 97],
      ["pepe", 24, 98],
      ["show", "cas", "castle", 82, 86, 18],
      ["m", "C'era una volta, in un castello rosa, una principessa coraggiosa e gentile. Il suo nome era\u2026 Soleil! [Princess Soleil!]", "felice"],
      ["show", "sol", "princess_soleil", 50, 96, 9],
      ["m", "La principessa Soleil aveva una corona d'oro che brillava come il sole. [A golden crown!]", "ride"],
      ["show", "drg", "dragon", 70, 97, 14],
      ["m", "Un giorno, vicino al castello, arriv\xF2 un drago verde. [A green dragon!] Tutti scapparono\u2026 ma Soleil vide che il drago piangeva.", "sorpresa"],
      ["m", "Soleil si avvicin\xF2 e chiese: [How are you, dragon?] Come stai, drago?", "curiosa"],
      ["pick", "{kid}, il drago piange. Come si sente? [Happy or sad?]", [["happy", "Happy", "felice", "sun"], ["sad", "Sad", "triste", "raincloud"]], "sad", "sad", "[Sad.] S\xEC, il drago \xE8 triste.", "Quando si piange si \xE8 tristi: [sad]."],
      ["m", "Il drago disse: \xABSono triste perch\xE9 nessuno vuole giocare con me. Non ho amici.\xBB [I have no friends.]", "pensa"],
      ["m", "Allora Soleil sorrise e disse: \xABIo sar\xF2 tua amica!\xBB [I will be your friend!]", "ride"],
      ["show", "ste", "princess_stella", 34, 97, 7],
      ["m", "Arriv\xF2 anche la sorellina, la piccola principessa Stella, con un fiore in mano! [Princess Stella!]", "felice"],
      ["show", "fl", "flower", 40, 86, 5],
      ["tap", "{kid}, tocca il fiore per regalarlo al drago! [Give the flower!]", ["fl"], "fl", "flower", "[A flower for you!] Il drago \xE8 felicissimo!", ""],
      ["move", "fl", 66, 76],
      ["m", "Il drago smise di piangere e fece un grande sorriso. Adesso era felice! [Happy!]", "ride"],
      ["pick", "{kid}, e adesso il drago come si sente? [How does he feel now?]", [["happy", "Happy", "felice", "sun"], ["sad", "Sad", "triste", "raincloud"]], "happy", "happy", "[Happy!] Felice! Grazie a Soleil e Stella!", "Adesso il drago \xE8 felice: [happy]!"],
      ["m", "Da quel giorno il drago gentile portava le principesse a volare sopra le nuvole. E vissero tutti felici e contenti. [The end!]", "felice"],
      ["m", "Ricordate: essere gentili con chi \xE8 solo \xE8 la magia pi\xF9 grande. [Be kind!]", "pensa"],
      ["fx"],
      ["learn", ["princess", "crown", "dragon", "happy", "sad", "friend", "kind"]]
    ] },
    { id: "stellina", title: "La piccola Stella che cercava la luce", en: "Little Stella finds her light", tag: "Principesse", cover: "star", bg: "night", who: "stella", steps: [
      ["mimi", 14, 97],
      ["pepe", 28, 98],
      ["show", "moon", "moon", 80, 38, 9, "a-float"],
      ["m", "Questa \xE8 la storia di Stella, una piccola stellina del cielo. [A little star!]", "felice"],
      ["show", "ste", "princess_stella", 54, 94, 8],
      ["m", "Una notte Stella non brillava pi\xF9. Era triste. La sua luce era caduta gi\xF9, in tre pezzettini luccicanti!", "confusa"],
      ["show", "s1", "star", 32, 60, 4, "a-float"],
      ["show", "s2", "star", 68, 74, 4, "a-float"],
      ["show", "s3", "star", 88, 86, 4, "a-float"],
      ["m", "Aiutiamo Stella a ritrovare la sua luce! [Let's help Stella!]", "curiosa"],
      ["tap", "{kid}, tocca una stellina! [Touch a star!]", ["s1"], "s1", "star", "[One!] Una!", ""],
      ["hide", "s1"],
      ["tap", "Un'altra! [Another star!]", ["s2"], "s2", "star", "[Two!] Due!", ""],
      ["hide", "s2"],
      ["tap", "L'ultima! [The last one!]", ["s3"], "s3", "star", "[Three!] Tre!", ""],
      ["hide", "s3"],
      ["m", "Uno, due, tre! [One, two, three!] La luce \xE8 tornata! Stella brilla di nuovo!", "ride"],
      ["show", "big", "star", 54, 62, 9, "a-float"],
      ["m", "La Luna disse: \xABGrazie, piccola amica!\xBB [Thank you!] E Stella torn\xF2 in cielo a brillare, insieme alla sua sorella Soleil, il sole del giorno!", "felice"],
      ["m", "[Twinkle, twinkle, little star!] Brilla brilla, stellina!", "ride"],
      ["p", "purr", "contento"],
      ["fx"],
      ["learn", ["star", "moon", "one", "two", "three", "thank you"]]
    ] },
    { id: "castello", title: "Il castello delle parole magiche", en: "The castle of magic words", tag: "Principesse", cover: "castle", bg: "castle", steps: [
      ["mimi", 12, 97],
      ["pepe", 24, 98],
      ["show", "sol", "princess_soleil", 40, 96, 8],
      ["show", "ste", "princess_stella", 52, 97, 6.5],
      ["m", "Le principesse Soleil e Stella hanno trovato un castello misterioso! [A magic castle!]", "sorpresa"],
      ["show", "door", "door", 76, 92, 14],
      ["m", "Ma la porta \xE8 chiusa! Sulla porta c'\xE8 scritto: \xABMi apro solo con le parole magiche\xBB. [Magic words!]", "curiosa"],
      ["pick", "{kid}, per entrare in un posto si chiede\u2026 [What do we say?]", [["please", "Please", "per favore"], ["no", "No!", "no!"]], "please", "please", "[Please!] Per favore! La porta si apre!", "Si dice per favore: [please]! Ecco, la porta si apre!"],
      ["hide", "door"],
      ["show", "key", "key", 72, 80, 8],
      ["m", "Dentro c'\xE8 una chiave d'oro! [A golden key!] E una seconda porta, con una forma disegnata.", "curiosa"],
      ["pick", "{kid}, la porta ha la forma di un cerchio. Quale \xE8 il cerchio? [Which one is a circle?]", [["circle", "Circle", "cerchio", "ball"], ["triangle", "Triangle", "triangolo", "hat"]], "circle", "circle", "[A circle! Round like a ball!]", "Il cerchio \xE8 rotondo come una palla: [circle]!"],
      ["hide", "key"],
      ["show", "crown", "crown", 70, 70, 10, "a-float"],
      ["m", "Nell'ultima stanza c'\xE8 una corona magica! [A magic crown!] Ma \xE8 una sola\u2026 e le principesse sono due!", "pensa"],
      ["pick", "{kid}, cosa fanno le sorelle? [What do they do?]", [["share", "Share it", "la condividono", "heart"], ["fight", "Fight", "litigano", "raincloud"]], "share", "share", "[They share!] Se la prestano: un po' Soleil e un po' Stella!", "Le sorelle se la prestano: [share]! Litigare non \xE8 bello."],
      ["m", "La corona brill\xF2 fortissimo: era la magia della condivisione! [Sharing is magic!]", "ride"],
      ["m", "E le principesse dissero: [Thank you, castle!] Grazie, castello! Vissero felici e contenti.", "felice"],
      ["fx"],
      ["learn", ["castle", "door", "key", "please", "circle", "share", "crown"]]
    ] },
    { id: "foresta", title: "Le esploratrici nella foresta", en: "Explorers in the forest", tag: "Natura", cover: "owl", bg: "forest", steps: [
      ["mimi", 12, 97],
      ["pepe", 24, 98],
      ["show", "t1", "tree_summer", 60, 88, 16],
      ["show", "t2", "tree_summer", 88, 90, 18],
      ["show", "sol", "princess_soleil", 38, 96, 7.5],
      ["show", "ste", "princess_stella", 48, 97, 6],
      ["m", "Soleil e Stella oggi sono due esploratrici! Entrano nella foresta. [The forest!]", "felice"],
      ["show", "but", "butterfly", 70, 50, 7, "a-float"],
      ["m", "Guardate! Una farfalla! [A butterfly!] Lo sapete? Prima era un bruco, poi si \xE8 chiusa in un bozzolo\u2026 e si \xE8 trasformata!", "sorpresa"],
      ["tap", "{kid}, tocca la farfalla! [Touch the butterfly!]", ["but"], "but", "butterfly", "[Butterfly!] Che colori!", ""],
      ["show", "rab", "rabbit", 74, 97, 8],
      ["m", "Chi salta tra l'erba? Il coniglio! [A rabbit!] Il coniglio ha le orecchie lunghe lunghe e mangia le carote.", "ride"],
      ["show", "mush", "mushroom", 56, 97, 6],
      ["m", "Questo \xE8 un fungo. [A mushroom!] Attenzione: i funghi del bosco non si toccano e non si mangiano mai! Alcuni sono velenosi. [Don't touch!]", "pensa"],
      ["pick", "{kid}, i funghi del bosco si mangiano? [Can we eat them?]", [["no", "No!", "no"], ["yes", "Yes", "s\xEC"]], "no", "no", "[No!] Bravissima! Mai mangiare i funghi del bosco!", "No! I funghi del bosco possono essere velenosi: [no]!"],
      ["dim", true],
      ["show", "owl", "owl", 86, 54, 8],
      ["m", "Si fa sera\u2026 Chi c'\xE8 sull'albero? Uh-uh! \xC8 il gufo! [An owl!] Il gufo dorme di giorno e sta sveglio di notte.", "curiosa"],
      ["pick", "{kid}, il gufo quando \xE8 sveglio? [Day or night?]", [["day", "Day", "giorno", "sun"], ["night", "Night", "notte", "moon"]], "night", "night", "[At night!] Il gufo \xE8 sveglio di notte!", "Il gufo \xE8 sveglio di notte: [night]!"],
      ["m", "Le esploratrici tornano a casa con tante scoperte. [Good job, explorers!]", "felice"],
      ["dim", false],
      ["fx"],
      ["learn", ["forest", "butterfly", "rabbit", "mushroom", "owl", "night"]]
    ] }
  ];
  /* Dispositivo: telefono/tablet (tocco) o TV (telecomando). Scelto nella prima schermata e ricordato. */
  /* Un solo contesto audio, sbloccato al primo tasto del telecomando, clic o tocco. */
  var MPAC = null;
  function mpAudio() {
    if (!MPAC) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC)
        return null;
      try {
        MPAC = new AC();
      } catch (e2) {
        return null;
      }
    }
    if (MPAC.state === "suspended") {
      try {
        MPAC.resume();
      } catch (e2) {
      }
    }
    return MPAC;
  }
  function mpUnlock() {
    var ac = mpAudio();
    if (!ac || mpUnlock.done)
      return;
    try {
      var b2 = ac.createBuffer(1, 1, 22050), src = ac.createBufferSource();
      src.buffer = b2;
      src.connect(ac.destination);
      if (src.start)
        src.start(0);
      else
        src.noteOn(0);
    } catch (e2) {
    }
    mpUnlock.done = ac.state === "running";
  }
  ["keydown", "click", "touchend"].forEach(function(ev) {
    document.addEventListener(ev, mpUnlock, true);
  });
  function getDevice() {
    if (window.MP_DEV)
      return window.MP_DEV;
    var d2 = "";
    try {
      d2 = localStorage.getItem("mp_device") || "";
    } catch (e2) {
    }
    if (d2 !== "tv" && d2 !== "phone")
      d2 = window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches ? "phone" : "tv";
    applyDevice(d2);
    return d2;
  }
  function applyDevice(d2) {
    window.MP_DEV = d2;
    var c2 = document.documentElement.classList;
    c2.toggle("dev-tv", d2 === "tv");
    c2.toggle("dev-phone", d2 === "phone");
  }
  function setDevice(d2) {
    applyDevice(d2);
    try {
      localStorage.setItem("mp_device", d2);
    } catch (e2) {
    }
  }
  var VOICE = { files: ["a/voce_0.mp4", "a/voce_1.mp4", "a/voce_2.mp4", "a/voce_3.mp4", "a/voce_4.mp4"], clips: { "en|Blow!": [0, 0, 836], "it|Soffia!": [0, 836, 967], "en|More?": [0, 1802, 731], "en|Meow!": [0, 2534, 653], "en|Hat!": [0, 3187, 679], "en|Duck!": [0, 3866, 784], "en|Ball!": [0, 4650, 679], "it|Tocca la scatola!": [0, 5329, 1384], "en|A ball!": [0, 6713, 914], "en|A hat!": [0, 7628, 914], "en|Dog!": [0, 8542, 679], "en|Let's look!": [3, 79987, 993], "en|Cat!": [0, 10136, 784], "en|A duck!": [0, 10919, 862], "en|Moo!": [0, 11781, 784], "en|Apple!": [0, 12565, 731], "en|A cat!": [0, 13296, 914], "en|A dog!": [0, 14211, 914], "en|A sofa!": [0, 15125, 914], "it|Che brava!": [3, 33802, 1959], "en|Sofa!": [0, 17058, 784], "en|Great job!": [3, 16327, 1724], "en|Woof woof!": [0, 18913, 914], "en|An apple!": [0, 19827, 914], "it|Missione compiuta!": [3, 80980, 2429], "en|Not here!": [3, 45375, 1411], "en|Quack quack!": [0, 23040, 1019], "en|Red!": [0, 24059, 679], "en|Pig!": [0, 24738, 679], "it|La mela!": [0, 25417, 967], "it|Il cane!": [0, 26384, 914], "it|La palla!": [0, 27298, 1019], "en|A balloon!": [0, 28317, 914], "en|Freeze!": [3, 53786, 1411], "it|L'anatra!": [0, 30093, 1019], "en|A present!": [0, 31112, 967], "en|Roar!": [0, 32078, 784], "en|A teddy bear!": [0, 32862, 1097], "en|Fish!": [0, 33959, 679], "en|Stella, open the box!": [0, 34638, 1567], "en|Lion!": [0, 36206, 784], "en|Blue!": [0, 36989, 836], "it|Il gatto!": [0, 37825, 1071], "en|Frog!": [0, 38896, 836], "en|Balloon!": [0, 39732, 967], "en|The pig!": [0, 40699, 914], "en|The cat!": [0, 41613, 836], "en|Teddy bear!": [0, 42449, 967], "it|L'orsetto!": [0, 43416, 1071], "en|Present!": [0, 44487, 862], "en|The dog!": [0, 45349, 914], "en|The cow!": [0, 46263, 967], "en|One, two, three, four!": [0, 47229, 1437], "en|Soleil, what is it?": [0, 48666, 1384], "en|One\u2026 two\u2026 three\u2026 four\u2026 five!": [0, 50051, 2586], "en|One!": [0, 52637, 679], "it|Guarda qui!": [0, 53316, 1019], "en|Look! Here!": [3, 90305, 1489], "en|Two!": [0, 55249, 784], "en|Pink!": [0, 56033, 836], "en|Where is Pepe?": [0, 56869, 1097], "en|The fish!": [0, 57966, 967], "en|The frog!": [0, 58932, 914], "en|Soleil, open the box!": [0, 59847, 1698], "en|The duck!": [0, 61544, 914], "en|Close your eyes!": [3, 76147, 2351], "en|Yellow!": [0, 63321, 862], "en|Ready? Close your eyes!": [0, 64183, 1332], "en|The lion!": [0, 65515, 914], "en|Sock!": [0, 66429, 836], "it|Il regalo!": [0, 67265, 1019], "it|Il divano!": [0, 68284, 1071], "en|White!": [0, 69355, 679], "en|Jump!": [0, 70034, 784], "en|Ribbit!": [0, 70818, 836], "en|Where is it?": [3, 78498, 1489], "it|Fermi tutti!": [0, 72568, 1149], "it|Adesso tutti insieme!": [0, 73718, 1567], "en|Peekaboo! Found you!": [3, 35762, 3004], "en|That's the fish!": [0, 76722, 1149], "en|Green!": [0, 77871, 836], "en|Three!": [0, 78707, 784], "en|That's the lion!": [0, 79491, 967], "it|Il cappello!": [0, 80457, 1254], "it|Cerca qualcosa di rosa!": [0, 81711, 1672], "en|That's the cat!": [0, 83383, 1071], "en|That's the cow!": [0, 84454, 914], 'it|Toccate "Ancora" per continuare.': [0, 85368, 2168], "en|A sock?!": [3, 38766, 1646], "it|Il palloncino!": [0, 88451, 1280], "en|That's the pig!": [0, 89731, 862], "en|That's the duck!": [0, 90593, 1019], "it|Questo \xE8 il pesce.": [0, 91611, 1280], "en|Now with music! Together!": [0, 92891, 1567], "it|Questo \xE8 il leone.": [0, 94459, 1202], "it|Che bel gioco! Facciamo una pausa?": [0, 95660, 2220], "it|Cerca qualcosa di blu!": [0, 97881, 1437], "en|That's the dog!": [0, 99318, 967], "it|Cerca qualcosa di rosso!": [0, 100284, 1698], "it|Cerca qualcosa di bianco!": [0, 101982, 1672], "it|Cos'\xE8? Dillo in inglese, se lo sai!": [0, 103654, 2403], "en|That's the frog!": [0, 106057, 1019], "it|Questo \xE8 l'anatra.": [0, 107076, 1254], "it|Cerca qualcosa di giallo!": [0, 108330, 1698], "it|Chi fa moo?": [0, 110028, 1019], "en|Ready or not, here I come!": [3, 51749, 2038], "it|Questo \xE8 il gatto.": [0, 112744, 1280], "it|Questo \xE8 la mucca.": [0, 114024, 1280], "it|Questo \xE8 la rana.": [0, 115304, 1202], "en|Blub blub!": [0, 116506, 1097], "it|Questo \xE8 il cane.": [0, 117603, 1280], "it|Cerca qualcosa di verde!": [0, 118883, 1620], "it|Trovato! Bravissima Stella!": [0, 120503, 2116], "en|Another dance?": [0, 122619, 1149], "it|Dov'\xE8 Pepe? Toccalo, Stella!": [0, 123768, 1802], "en|Fantastic, Stella!": [3, 21029, 1802], "it|Questo \xE8 il maiale.": [0, 127007, 1280], "it|Una mela!": [0, 128287, 914], "it|Un leone!": [0, 129202, 1019], "it|Una rana!": [0, 130220, 1019], "en|The end!": [3, 88111, 2194], "it|Un pesce!": [0, 132153, 1019], "it|Un altro ballo?": [0, 133172, 1254], "it|Pepe porta un calzino\u2026 ma \xE8 il colore giusto? Cercate voi!": [0, 134426, 3892], "en|Well done, Stella!": [3, 18051, 1567], "en|Oink oink!": [0, 139468, 914], "en|Who says moo?": [0, 140382, 1149], "it|Bravissima, Soleil!": [3, 31295, 2508], "it|Qui non c'\xE8.": [0, 143099, 1019], "en|Well done, Soleil!": [3, 19618, 1411], "it|Una palla!": [0, 145319, 967], "it|Chi fa meow?": [0, 146286, 967], "it|Un'anatra!": [0, 147252, 1149], "en|Fantastic, Soleil!": [3, 22831, 1802], "en|Where is the pig?": [0, 149734, 1019], "en|Yes! Super, Soleil!": [3, 27063, 2351], "it|Chi fa roar?": [0, 152137, 1071], "en|Where is the cat?": [0, 153208, 1097], "en|Where is the dog?": [0, 154305, 1019], "en|Where is the fish?": [0, 155324, 1202], "en|Yes! Super, Stella!": [3, 24633, 2429], "it|Bravissima, Stella!": [3, 29414, 1881], "en|Nothing here!": [3, 43886, 1489], "en|A pig!": [0, 160522, 836], "en|Silly cat!": [3, 49476, 2273], "en|Where is the cow?": [0, 162220, 1149], "it|Un orsetto!": [0, 163370, 1202], "it|Un calzino!": [0, 164571, 1097], "en|Where is the duck?": [0, 165669, 1202], "it|Brava Stella!": [3, 91794, 1567], "it|Stella, guarda!": [0, 167967, 1332], "en|Where is the frog?": [0, 169300, 1019], "it|Uh? No, no, ho sbagliato!": [0, 170318, 1933], "en|Who says meow?": [0, 172251, 1202], "it|Qui non c'\xE8\u2026 ascolta il campanellino!": [0, 173453, 2351], "en|Who says roar?": [0, 175804, 1149], "it|Un maialino!": [0, 176953, 1254], "it|Un cappello!": [0, 178207, 1202], "en|Stop, Pepe!": [3, 84820, 1489], "en|The ball!": [0, 180663, 914], "en|Where is the lion?": [0, 181577, 1280], "en|Pepe likes the ball!": [0, 182857, 1149], "en|A frog!": [0, 184007, 967], "en|A lion!": [0, 184973, 967], "it|Il pesce!": [0, 185940, 1071], "en|March!": [0, 187011, 836], "en|Cow!": [0, 187847, 784], "en|A fish!": [0, 188630, 967], "en|Arms up!": [0, 189597, 967], "it|Chi fa ribbit?": [0, 190563, 1071], "it|Chi fa blub blub?": [0, 191634, 1097], "en|Pepe! My hat!": [3, 46785, 2691], "en|Turn around!": [0, 193985, 1071], "it|Chiudi gli occhi!": [0, 195056, 1280], "it|La mucca!": [0, 196336, 1071], "en|The apple!": [0, 197407, 914], "en|Now, the cake!": [0, 198322, 1097], "it|Chi fa quack quack?": [0, 199419, 967], "en|Look!": [0, 200385, 679], "it|Il leone!": [0, 201064, 1019], "en|Who says blub blub?": [0, 202083, 1384], "en|Who says ribbit?": [0, 203468, 1097], "it|Chi fa oink oink?": [0, 204565, 1254], "en|Listen! Ding ding!": [0, 205819, 1515], "en|Soleil, where was Pepe?": [0, 207334, 1620], "it|Chi fa woof woof?": [0, 208953, 1202], "en|Who says quack quack?": [0, 210155, 1019], "en|Twist!": [0, 211174, 914], "it|La rana!": [0, 212088, 1019], "en|Woof!": [0, 213107, 731], "it|Il maiale!": [0, 213838, 1149], "en|Ready?": [0, 214988, 731], "en|Find something pink!": [0, 215719, 1019], "en|The whole dance! Ready?": [0, 216738, 1254], "en|Thank you, Pepe!": [3, 83409, 1411], "en|Who says oink oink?": [1, 0, 2508], "en|Stella, touch a balloon!": [1, 2508, 1332], "en|Find something red!": [1, 3840, 1202], "en|All the balloons!": [1, 5042, 1280], "en|Find something white!": [1, 6322, 1254], "en|Who says woof woof?": [1, 7576, 1254], "it|Un calzino! Che buffo!": [3, 40411, 3474], "en|Oink!": [1, 10580, 731], "en|Yes! The ball!": [1, 11311, 1254], "en|Faster, Pepe!": [1, 12565, 1202], "en|Find something yellow!": [1, 13767, 1254], "it|Pepe vuole giocare con la palla!": [1, 15020, 1855], "en|Yes! The pig!": [1, 16875, 1097], "en|Yes! The cow!": [1, 17972, 1280], "it|Facciamo una festa!": [1, 19252, 1384], "en|Let's have a party!": [3, 68989, 1802], "en|Pepe! Freeze!": [3, 55197, 2508], "it|Stella, dov'\xE8 il pesce?": [1, 23171, 1672], "en|The teddy bear!": [1, 24842, 1071], "it|Stella, dov'\xE8 il cane?": [1, 25913, 1698], "en|Find something blue!": [1, 27611, 1280], "it|Stella, dov'\xE8 il leone?": [1, 28891, 1698], "en|Say it with me: hat!": [1, 30589, 1280], "en|Say it with me: cat!": [1, 31869, 1149], "en|Yes! The dog!": [1, 33019, 1202], "en|Yes! The fish!": [1, 34220, 1332], "it|Tocca a te, Stella!": [1, 35553, 1437], "it|Tocca a te, Soleil!": [1, 36989, 1384], "en|Yes! The cat!": [1, 38374, 1332], "it|Stella, dov'\xE8 la mucca?": [1, 39706, 1750], "en|Yes! The duck!": [1, 41456, 1097], "en|It's Pepe's birthday!": [1, 42553, 1149], "en|Bravo! You are great dancers!": [3, 65515, 3474], "en|Find something green!": [1, 45688, 1332], "en|Soleil, what colour is it?": [1, 47020, 1515], "en|Hello Soleil! Hello Stella!": [3, 73561, 2586], "en|Yes! The apple!": [1, 50469, 1254], "it|Stella, dov'\xE8 il gatto?": [1, 51722, 1698], "en|Say it with me: duck!": [1, 53420, 1332], "en|Say it with me: dog!": [1, 54753, 1071], "en|Say it with me: sofa!": [1, 55824, 1384], "en|Where is blue?": [1, 57208, 1097], "en|Give it back, please!": [3, 86309, 1802], "en|Soleil, find something red!": [1, 59585, 1515], "en|Where is the ball?": [1, 61100, 1097], "en|Say it with me: ball!": [1, 62198, 1097], "en|Happy birthday, Pepe!": [3, 63556, 1959], "it|Pepe si nasconde! Io conto fino a 10.": [1, 64731, 2873], "it|Dove sono i palloncini?": [1, 67605, 1567], "en|That's red.": [1, 69172, 914], "en|Stella, find something pink!": [1, 70087, 1489], "en|It's a hat!": [1, 71576, 836], "it|Ridammelo, per favore!": [1, 72411, 1489], "en|Moo! Who says moo?": [1, 73900, 1384], "en|Yes! The lion!": [1, 75285, 1384], "en|Yes! The frog!": [1, 76669, 1097], "en|Quack!": [1, 77767, 836], "it|Brava Stella! Soleil, dov'era Pepe?": [1, 78602, 2508], "en|Stella, find something white!": [1, 81110, 1489], "en|It's a lion!": [1, 82599, 1071], "en|Soleil, find something blue!": [1, 83670, 1384], "en|It's a pig!": [1, 85055, 967], "en|Soleil, find something pink!": [1, 86021, 1489], "it|Cantiamo tutti insieme!": [1, 87510, 1620], "en|Say it with me: balloon!": [1, 89130, 1332], "it|Pepe si nasconde! Io conto fino a 5.": [1, 90462, 3370], "en|It's a fish!": [1, 93832, 1097], "en|It's a ball!": [1, 94929, 1019], "it|Soleil, dov'\xE8 la rana?": [1, 95948, 1802], "it|Che festa meravigliosa!": [1, 97750, 1515], "it|Che squadra!": [1, 99265, 1071], "en|It's a sock!": [1, 100336, 1071], "it|Stella, dov'\xE8 il maiale?": [1, 101407, 1855], "en|That's yellow.": [1, 103262, 1097], "it|Stella, dov'\xE8 l'anatra?": [1, 104359, 1672], "en|A sock?! Pepe!": [1, 106031, 1489], "en|Let's light the candles!": [1, 107520, 1437], "it|Pepe! Li hai nascosti tu?": [1, 108957, 1855], "en|Say it with me: apple!": [1, 110811, 1437], "en|It's a duck!": [1, 112248, 862], "en|Yes! The teddy bear!": [1, 113110, 1489], "en|Stella, find something red!": [1, 114599, 1489], "en|Say it with me: present!": [1, 116088, 1384], "it|Tre candeline!": [1, 117473, 1202], "en|It's a frog!": [1, 118674, 967], "en|Touch a candle!": [1, 119641, 1149], "en|Stella, find something yellow!": [1, 120790, 1698], "en|Soleil, find something white!": [1, 122488, 1567], "en|Oops, Pepe! Get up!": [3, 57704, 2691], "it|Stella, dov'\xE8 la rana?": [1, 125257, 1672], "en|That's green.": [1, 126929, 731], "en|Meow! Who says meow?": [1, 127660, 1489], "en|Stella, find something blue!": [1, 129149, 1802], "it|Quello \xE8 giallo.": [1, 130952, 1097], "it|Ascolta\u2026 il campanellino di Pepe!": [1, 132049, 2403], "en|Soleil, find something green!": [1, 134452, 1672], "it|Stella, dov'\xE8 la palla?": [1, 136124, 1515], "en|Wiggle, wiggle!": [1, 137639, 1280], "it|\xC8 blu!": [1, 138919, 836], "en|Soleil, find something yellow!": [1, 139755, 1620], "en|Stella, find something green!": [1, 141375, 1567], "en|Where is red?": [1, 142942, 1071], "en|Clap your hands!": [1, 144013, 967], "en|Roar! Who says roar?": [1, 144980, 1332], "it|Soleil, dov'\xE8 l'anatra?": [1, 146312, 1907], "it|Brava Stella! Adesso Soleil:": [1, 148219, 2090], "it|Soleil, dov'\xE8 il maiale?": [1, 150309, 1567], "en|Oh no! Where are the balloons?": [3, 70792, 2769], "en|Where is the apple?": [1, 153966, 1280], "en|The other way, Pepe!": [1, 155246, 1384], "en|Ready or not, here I come! Soleil, where is Pepe?": [1, 156630, 3422], "en|Not the ball!": [1, 160052, 1071], "en|It's an apple!": [1, 161123, 1097], "it|Quello \xE8 rosso.": [1, 162220, 1202], "en|Say it with me: teddy bear!": [1, 163422, 1437], "it|Ahahah! Pepe \xE8 caduto!": [3, 60395, 3161], "it|Stella, dov'\xE8 l'orsetto?": [1, 166557, 1750], "en|Where is the teddy bear?": [1, 168307, 1384], "en|Stella, your turn! With music!": [1, 169691, 1855], "en|Soleil, your turn! With music!": [1, 171546, 1985], "it|Pepe, ti muovi ancora!": [1, 173531, 1515], "it|Quello \xE8 verde.": [1, 175047, 1097], "en|Skip, skip, skip!": [1, 176144, 1280], "it|Siete delle ballerine fantastiche! Un inchino!": [1, 177424, 3109], "it|Soleil, dov'\xE8 il gatto?": [1, 180532, 1567], "en|Yes! The cow says moo!": [1, 182100, 1698], "it|Stella, dov'\xE8 la mela?": [1, 183798, 1620], "it|Stella, giochiamo a nascondino con Pepe! Io conto, Pepe si nasconde!": [1, 185417, 5042], "it|Tocca una candelina!": [1, 190459, 1489], "en|That's blue.": [1, 191948, 1019], "en|A red balloon!": [1, 192967, 1071], "it|Soleil, dov'\xE8 il pesce?": [1, 194038, 1698], "it|Soleil, dov'\xE8 il cane?": [1, 195736, 1515], "en|Soleil, where is the ball?": [1, 197251, 1280], "en|One\u2026 two\u2026 three\u2026 four\u2026 five\u2026 six\u2026 seven\u2026 eight\u2026 nine\u2026 ten!": [1, 198531, 6269], "en|Not the apple!": [1, 204800, 1097], "it|\xC8 rosso!": [1, 205897, 967], "it|Mi aiutate a trovarli?": [1, 206864, 1384], "en|Yes! The cat says meow!": [1, 208248, 1855], "it|Tutti i palloncini! Che bella festa!": [1, 210103, 2273], "en|Soleil, where is the apple?": [1, 212376, 1672], "en|It's a teddy bear!": [1, 214047, 1097], "en|A blue balloon!": [1, 215144, 1202], "en|One, two, three! Three candles!": [1, 216346, 1698], "it|Quello \xE8 blu.": [1, 218044, 1071], "it|Soleil, dov'\xE8 la mucca?": [2, 0, 1855], "it|\xC8 verde!": [2, 1855, 1071], "en|Clap up high!": [2, 2926, 1097], "fx|laugh": [3, 0, 2429], "fx|giggle": [3, 2429, 2194], "fx|yay": [3, 4624, 1567], "fx|evviva": [3, 6191, 1802], "fx|gasp": [3, 7993, 1724], "fx|hmm": [3, 9718, 1228], "fx|ohoh": [3, 10945, 1228], "fx|uffa": [3, 12173, 2273], "fx|wow": [3, 14446, 1881], "en|Well done!": [3, 93362, 1802], "it|Ciao Stella! Guarda chi c'\xE8!": [3, 95164, 2194], "en|It's Pepe! Hello, Stella!": [3, 97358, 2691], "en|Hello Soleil! How are you today?": [3, 100049, 2926], "it|Ciao Soleil! Scegli un gioco o una storia.": [3, 102975, 3709], "it|Ciao bimbe! Oggi giochiamo insieme!": [3, 106684, 3161], "it|Buonanotte!": [3, 109845, 2116], "pepe|meow": [3, 111961, 1149], "pepe|meow2": [3, 113110, 1802], "pepe|laugh": [3, 114913, 1959], "pepe|laugh2": [3, 116872, 2769], "pepe|purr": [3, 119641, 1881], "pepe|sad": [3, 121522, 1646], "en|Blub blub! Who says blub blub?": [4, 0, 3318], "it|Contiamo insieme:": [4, 3318, 1881], "it|Grazie Pepe! Sei un gattino birichino!": [4, 5198, 3004], "en|Ribbit! Who says ribbit?": [4, 8202, 2273], "en|Where is green?": [4, 10475, 1228], "it|Guarda! Lass\xF9!": [4, 11703, 2038], "en|Chocolate cake! Yummy!": [4, 13740, 2351], "en|Soleil, where is the teddy bear?": [4, 16091, 2508], "en|Where is yellow?": [4, 18599, 1071], "en|Yes! The lion says roar!": [4, 19670, 3474], "en|Great freezing!": [4, 23144, 1411], "it|Dov'\xE8 l'orsetto? Dimmelo o tocca!": [4, 24555, 3474], "it|E adesso\u2026 tutti i passi insieme, uno dopo l'altro! Pronte?": [4, 28029, 4127], "it|Pepe arriva sempre in ritardo!": [4, 32157, 2116], "en|A yellow balloon!": [4, 34273, 1567], "en|Step one: March!": [4, 35840, 1959], "it|Dov'\xE8 la mela? Dimmelo o tocca!": [4, 37799, 2508], "en|Can you help me find them?": [4, 40307, 1306], "en|Step two: Jump!": [4, 41613, 1881], "en|Yes! The fish says blub blub!": [4, 43494, 2926], "en|Woof woof! Who says woof woof?": [4, 46420, 3004], "it|\xC8 giallo!": [4, 49424, 1567], "en|Step four: Jump!": [4, 50991, 1959], "it|Dov'\xE8 la palla? Dimmelo o tocca!": [4, 52950, 2586], "en|Soleil, how many candles?": [4, 55536, 1489], "en|Oink oink! Who says oink oink?": [4, 57025, 2769], "en|Step four: Twist!": [4, 59794, 1881], "en|Not the teddy bear!": [4, 61675, 1567], "en|Step to the left!": [4, 63242, 1228], "it|Un palloncino blu!": [4, 64470, 1959], "en|Yes! The dog says woof woof!": [4, 66429, 2769], "en|Stella, can you find the apple?": [4, 69198, 1881], "it|Stella, trovi la mela? Toccala!": [4, 71079, 2769], "en|Thank you, Stella!": [4, 73848, 1411], "it|Stella, trovi l'orsetto? Toccala!": [4, 75259, 3161], "en|Quack quack! Who says quack quack?": [4, 78420, 2847], "it|Torta al cioccolato o alla fragola? Scegli tu!": [4, 81267, 3474], "en|Touch the balloons!": [4, 84741, 1306], "en|Step to the right!": [4, 86047, 1646], "en|Stella, can you find the ball?": [4, 87693, 1567], "en|Yes! The pig says oink oink!": [4, 89260, 2926], "it|Il mio cappello! Aiutatemi! Dite tutti insieme:": [4, 92186, 5146], "it|Saltiamo! Guardate me, piano piano.": [4, 97332, 3866], "it|Pepe, giri dalla parte sbagliata!": [4, 101198, 2273], "it|Un palloncino rosso!": [4, 103471, 1724], "en|Wave your arms!": [4, 105195, 1411], "en|Stella, can you find the teddy bear?": [4, 106606, 1959], "it|Stella, trovi la palla? Toccala!": [4, 108565, 3004], "en|Yes! The duck says quack quack!": [4, 111569, 2847], "en|Yes! The frog says ribbit!": [4, 114416, 2508], "it|Un palloncino giallo!": [4, 116924, 1646], "en|Hands on your hips!": [4, 118570, 1881], "en|Strawberry cake! Yummy!": [4, 120451, 2351], "en|Say it with me: in the box!": [4, 122802, 3082], "en|Say it with me: on the sofa!": [4, 125884, 2769], "en|Say it: red!": [4, 128653, 2194], "en|Soleil, where is the pig?": [4, 130847, 2586], "en|Soleil, chocolate or strawberry?": [4, 133433, 2273], "en|Point up, point down!": [4, 135706, 1802], "it|Accendiamo le candeline! Tocca le candeline e contiamo!": [4, 137509, 4127], "it|Soleil, dov'\xE8 il leone?": [4, 141636, 2116], "it|Torta al cioccolato! Che buona!": [4, 143752, 3318], "it|Adesso soffiamo sulle candeline! Toccale per spegnerle!": [4, 147069, 3396], "en|Step three: Arms up!": [4, 150465, 2038], "en|Wow! Something pink! Thank you, Stella!": [4, 152503, 3318], "en|Look! Look there!": [4, 155820, 1489], "en|Soleil, where is the cow?": [4, 157309, 1959], "it|Che statue bravissime!": [4, 159269, 2116], "en|Say it: blue!": [4, 161384, 1959], "en|Soleil, where is the cat?": [4, 163344, 2038], "en|Wow! Something pink! Thank you, Soleil!": [4, 165381, 3788], "en|Wow! Something white! Thank you, Stella!": [4, 169169, 3396], "en|Wow! Something red! Thank you, Soleil!": [4, 172565, 3553], "en|Wow! Something yellow! Thank you, Stella!": [4, 176118, 3788], "it|Era nel baule!": [4, 179905, 1149], "en|Soleil, where is the frog?": [4, 181055, 1802], "en|Step four: Turn around!": [4, 182857, 2116], "en|Soleil, where is the duck?": [4, 184973, 2194], "en|Soleil, where is the dog?": [4, 187167, 2038], "en|Step two: Wiggle, wiggle!": [4, 189205, 2038], "en|Say it with me: behind the curtain!": [4, 191242, 3082], "en|Say it: green!": [4, 194325, 1802], "en|Peekaboo! Pepe is in the chest!": [4, 196127, 2429], "en|Thank you, Soleil!": [4, 198557, 1228], "en|Soleil, where is the fish?": [4, 199784, 2691], "en|Wow! Something red! Thank you, Stella!": [4, 202475, 3396], "en|Wow! Something blue! Thank you, Soleil!": [4, 205871, 3553], "en|Step two: Step to the left!": [4, 209424, 2351], "en|Step one: Step to the right!": [4, 211775, 2429], "en|Say it: yellow!": [4, 214204, 2273], "en|Wow! Something blue! Thank you, Stella!": [4, 216477, 3788], "en|Here it is!": [4, 220264, 1411], "it|Giriamo su noi stesse! Guardate me, piano piano.": [4, 221675, 4833], "it|Era nella scatola!": [4, 226508, 1489], "en|Wow! Something white! Thank you, Soleil!": [4, 227997, 3971], "en|Yes! The red balloon!": [4, 231967, 1881], "en|Step two: Clap up high!": [4, 233848, 1959], "en|Step one: Clap your hands!": [4, 235807, 2586], "en|Wow! Something green! Thank you, Stella!": [4, 238393, 3396], "en|Wow! Something green! Thank you, Soleil!": [4, 241789, 3318] } };
  /* Frasi aggiuntive registrate (a/v/index.js): un file mp3 per frase. */
  (function() {
    var extra = window.VOICE_EXTRA || {};
    Object.keys(extra).forEach(function(k2) {
      if (VOICE.clips[k2])
        return;
      VOICE.clips[k2] = [VOICE.files.length, 0, extra[k2][1]];
      VOICE.files.push(extra[k2][0]);
    });
  })();
  var Component = class extends DCLogic {
    constructor(...args) {
      super(...args);
      this.store = loadStore();
      this.gen = 0;
      this.waiter = null;
      this.state = { v: 0 };
      this.s = this.freshScene();
      this.s.screen = "start";
      this.gate = { a: 0, b: 0, entry: "", wrong: false, next: "parents" };
      this.resetArmed = false;
    }
    freshScene() {
      return {
        screen: "play",
        game: null,
        playTitle: "",
        turn: null,
        stars: 0,
        mimi: { x: HOME_M.x, y: HOME_M.y, pose: "m_side", face: "felice", dir: -1, anim: "a-idle", ms: 0, size: 36 },
        pepe: { x: HOME_P.x, y: HOME_P.y, pose: "p_front", face: "contento", dir: -1, anim: "a-idle", ms: 0, size: 19, hidden: false },
        items: [],
        chips: [],
        bursts: [],
        frozen: false,
        dim: false,
        sub: { en: "", it: "" },
        speaker: "mimi",
        input: false,
        micMsg: "",
        listening: false,
        lastParts: null,
        wallCls: "bg-room",
        floorCls: "fl-room",
        rug: true,
        is3d: false,
        countText: "",
        stepLabel: "",
        stepSub: ""
      };
    }
    componentDidMount() {
      var self = this;
      this.mounted = true;
      this.tick = setInterval(function() {
        self.onTick();
      }, 5e3);
      try {
        if (window.speechSynthesis)
          window.speechSynthesis.onvoiceschanged = function() {
          };
      } catch (e2) {
      }
    }
    componentWillUnmount() {
      this.mounted = false;
      clearInterval(this.tick);
      this.stopFlow();
    }
    bump() {
      if (this.mounted !== false)
        this.setState({ v: this.state.v + 1 });
    }
    save() {
      try {
        window.localStorage.setItem(STORE, JSON.stringify(this.store));
      } catch (e2) {
      }
    }
    /* ---------- tempo di gioco ---------- */
    limitMs() {
      return (this.store.settings.limit + this.store.usage.extra) * 6e4;
    }
    onTick() {
      var sc = this.s.screen;
      if (this.store.usage.date !== today())
        this.store.usage = { date: today(), ms: 0, extra: 0 };
      var visible = true;
      try {
        visible = document.visibilityState !== "hidden";
      } catch (e2) {
      }
      if ((sc === "home" || sc === "play") && visible && Date.now() - (this.lastAct || 0) < 6e4) {
        this.store.usage.ms += 5e3;
        this.save();
        if (this.store.usage.ms >= this.limitMs()) {
          if (sc === "home")
            this.goNight();
          else if (!this.endingSince)
            this.endingSince = Date.now();
          else if (Date.now() - this.endingSince > 9e4)
            this.goNight();
        }
        this.bump();
      }
    }
    timeUp() {
      return this.store.usage.ms >= this.limitMs();
    }
    /* ---------- flussi annullabili ---------- */
    stopFlow() {
      this.gen++;
      if (this.waiter) {
        var w2 = this.waiter;
        this.waiter = null;
        clearTimeout(w2.timer);
        w2.reject(CANCEL);
      }
      try {
        if (this.rec)
          this.rec.abort();
      } catch (e2) {
      }
      this.stopVoice();
      this.stopMusic();
    }
    run(fn) {
      this.stopFlow();
      var self = this, g2 = this.gen;
      fn.call(this, g2).catch(function(e2) {
        if (e2 !== CANCEL) {
          self.s.micMsg = "Ops: " + (e2 && e2.message ? e2.message : e2);
          self.bump();
        }
      });
    }
    check(g2) {
      if (g2 !== this.gen)
        throw CANCEL;
    }
    sleep(ms) {
      var self = this, g2 = this.gen;
      return new Promise(function(res, rej) {
        setTimeout(function() {
          if (g2 === self.gen)
            res();
          else
            rej(CANCEL);
        }, ms);
      });
    }
    /* ---------- voce ---------- */
    pickVoice(lang) {
      var all = window.speechSynthesis.getVoices();
      var re2 = lang === "it" ? /^it[-_]/i : /^en[-_]/i;
      var vs = all.filter(function(v2) {
        return re2.test(v2.lang);
      });
      var prefs = lang === "it" ? IT_VOICES : EN_VOICES;
      for (var i2 = 0; i2 < prefs.length; i2++) {
        var h2 = vs.find(function(v2) {
          return prefs[i2].test(v2.name);
        });
        if (h2)
          return h2;
      }
      return vs[0] || null;
    }
    /* Un solo canale voce: ogni nuova frase ferma quella in corso (clip o TTS). */
    stopVoice() {
      this.speakGen = (this.speakGen || 0) + 1;
      try {
        var s2 = window.speechSynthesis;
        if (s2 && (s2.speaking || s2.pending))
          s2.cancel();
      } catch (e2) {
      }
      if (this.stopClip) {
        var sc = this.stopClip;
        this.stopClip = null;
        sc();
      }
    }
    speak(parts, pitch) {
      var self = this;
      this.stopVoice();
      if (pitch || !VOICE.files.length)
        return this.speakTTS(parts, pitch);
      var g2 = this.speakGen;
      return async function() {
        var batch = [];
        for (var i2 = 0; i2 < parts.length; i2++) {
          if (parts[i2][0] === "fx") {
            var fc = VOICE.clips["fx|" + parts[i2][1]];
            if (fc) {
              if (batch.length) {
                await self.speakTTS(batch);
                batch = [];
              }
              if (self.speakGen !== g2)
                return;
              await self.playClip(fc);
              if (self.speakGen !== g2)
                return;
            }
            continue;
          }
          var c2 = self.clipFor(parts[i2]);
          if (c2) {
            if (batch.length) {
              await self.speakTTS(batch);
              batch = [];
            }
            if (self.speakGen !== g2)
              return;
            await self.playClip(c2);
          } else
            batch.push(parts[i2]);
          if (self.speakGen !== g2)
            return;
        }
        if (batch.length && self.speakGen === g2)
          await self.speakTTS(batch);
      }();
    }
    speakTTS(parts, pitch) {
      var self = this;
      if (!pitch)
        parts.forEach(function(p2) {
          var k2 = p2[0] + "|" + p2[1], m2 = window.__missingVoice = window.__missingVoice || {};
          if (!m2[k2]) {
            m2[k2] = 1;
            console.warn("Frase senza voce registrata:", k2);
          }
        });
      var chars = parts.reduce(function(n2, p2) {
        return n2 + p2[1].length;
      }, 0);
      var est = chars * 70 + parts.length * 300 + 500;
      var g2 = this.speakGen, t0 = Date.now();
      return new Promise(function(resolve) {
        var done = false;
        function fin() {
          if (!done) {
            done = true;
            resolve();
          }
        }
        function guard() {
          if (done)
            return;
          try {
            if (self.speakGen === g2 && window.speechSynthesis && window.speechSynthesis.speaking && Date.now() - t0 < est * 4 + 8e3)
              return setTimeout(guard, 250);
          } catch (e2) {
          }
          fin();
        }
        setTimeout(guard, est * 1.7 + 1500);
        try {
          var s2 = window.speechSynthesis;
          if (!s2 || typeof SpeechSynthesisUtterance === "undefined") {
            setTimeout(fin, est);
            return;
          }
          if (s2.paused)
            s2.resume();
          var rate = (self.props.voiceRate ?? 0.9) * (self.voiceSpeed() / 0.95);
          self.utts = parts.map(function(p2, i2) {
            var u2 = new SpeechSynthesisUtterance(p2[1]);
            var v2 = self.pickVoice(p2[0]);
            u2.lang = v2 ? v2.lang : p2[0] === "it" ? "it-IT" : "en-GB";
            if (v2)
              u2.voice = v2;
            u2.rate = p2[0] === "en" ? rate * 0.9 : rate;
            u2.pitch = pitch || 1.25;
            if (i2 === parts.length - 1) {
              u2.onend = fin;
              u2.onerror = fin;
            }
            return u2;
          });
          self.utts.forEach(function(u2) {
            s2.speak(u2);
          });
        } catch (e2) {
          setTimeout(fin, est);
        }
      });
    }
    /* Mimì parla: sottotitoli, espressione, piccola animazione di parlato. */
    async say(parts, face) {
      var g2 = this.gen, s2 = this.s;
      s2.speaker = "mimi";
      if (face)
        s2.mimi.face = face;
      s2.sub = { en: parts.filter(function(p2) {
        return p2[0] === "en";
      }).map(function(p2) {
        return p2[1];
      }).join(" "), it: parts.filter(function(p2) {
        return p2[0] === "it";
      }).map(function(p2) {
        return p2[1];
      }).join(" ") };
      s2.lastParts = parts.filter(function(p2) {
        return p2[0] !== "fx";
      });
      var wasIdle = s2.mimi.anim === "a-idle";
      if (wasIdle)
        s2.mimi.anim = "a-talk";
      this.bump();
      await this.speak(parts);
      this.check(g2);
      if (wasIdle && s2.mimi.anim === "a-talk") {
        s2.mimi.anim = "a-idle";
        this.bump();
      }
    }
    /* Pepe non parla: miagola, ride, fa versi. */
    async pepe(kind, face) {
      var g2 = this.gen, s2 = this.s;
      s2.speaker = "pepe";
      if (face)
        s2.pepe.face = face;
      var txt = kind === "laugh" ? "Mi-hi-hi!" : kind === "purr" ? "Rrrrr\u2026 miao!" : kind === "sad" ? "Miao\u2026" : "Miao!";
      s2.sub = { en: txt, it: "" };
      this.bump();
      this.stopVoice();
      this.jingle();
      var opts = { meow: ["pepe|meow", "pepe|meow2"], laugh: ["pepe|laugh", "pepe|laugh2"], purr: ["pepe|purr"], sad: ["pepe|sad"] }[kind] || ["pepe|meow"];
      var pc = VOICE.clips[pick(opts)];
      if (pc)
        await this.playClip(pc);
      else
        await this.speak([IT(txt)], 1.9);
      this.check(g2);
    }
    repeatLast() {
      var s2 = this.s;
      if (s2.lastParts)
        this.speak(s2.lastParts);
    }
    /* ---------- suoni ---------- */
    audio() {
      this.ac = mpAudio();
      return this.ac;
    }
    /* Musica registrata (a/musica_*.mp4) suonata con un elemento audio: funziona anche sulle TV
       dove gli effetti sintetizzati (Web Audio) restano muti. Se non parte, si usa il sintetizzatore. */
    playTrack(name, fallback) {
      var self = this;
      try {
        var el = this.musicEl;
        if (!el || el.mpName !== name) {
          if (el)
            el.pause();
          el = new Audio("a/musica_" + name + ".mp4");
          el.loop = true;
          el.preload = "auto";
          el.mpName = name;
          this.musicEl = el;
        }
        el.volume = getDevice() === "tv" ? 0.6 : 0.45;
        try {
          el.currentTime = 0;
        } catch (e2) {
        }
        this.musicWant = name;
        var gen = this.musicGen = (this.musicGen || 0) + 1;
        var fb = function() {
          if (self.musicGen === gen && self.musicWant === name && self.musicEl === el && !self.musicT) {
            try {
              el.pause();
            } catch (e3) {
            }
            fallback();
          }
        };
        el.onerror = fb;
        var pr = el.play();
        if (pr && pr.catch)
          pr.catch(fb);
        /* se dopo 3 secondi la musica non sta avanzando, usa il sintetizzatore */
        setTimeout(function() {
          if (!(el.currentTime > 0.2))
            fb();
        }, 3e3);
        return true;
      } catch (e2) {
        return false;
      }
    }
    tone(f2, dur, type, delay, vol) {
      var ac = this.audio();
      if (!ac)
        return;
      var t2 = ac.currentTime + (delay || 0), o2 = ac.createOscillator(), gn = ac.createGain();
      o2.type = type || "triangle";
      o2.frequency.setValueAtTime(f2, t2);
      gn.gain.setValueAtTime(1e-4, t2);
      gn.gain.exponentialRampToValueAtTime(vol || 0.2, t2 + 0.02);
      gn.gain.exponentialRampToValueAtTime(1e-4, t2 + (dur || 0.3));
      o2.connect(gn);
      gn.connect(ac.destination);
      o2.start(t2);
      o2.stop(t2 + (dur || 0.3) + 0.05);
    }
    cheer() {
      var self = this;
      [523.25, 659.25, 783.99, 1046.5].forEach(function(f2, i2) {
        self.tone(f2, 0.25, "triangle", i2 * 0.09, 0.18);
      });
    }
    jingle() {
      var self = this;
      [1568, 1976, 1568, 1976].forEach(function(f2, i2) {
        self.tone(f2, 0.12, "sine", i2 * 0.06, 0.06);
      });
    }
    boop() {
      this.tone(392, 0.18, "sine", 0, 0.12);
      this.tone(330, 0.24, "sine", 0.14, 0.12);
    }
    pop() {
      this.tone(880, 0.08, "square", 0, 0.06);
      this.tone(1320, 0.12, "triangle", 0.05, 0.1);
    }
    startMusic() {
      this.stopMusic();
      var self = this, seq = [523, 659, 784, 659, 587, 698, 880, 698, 523, 659, 784, 1046, 988, 784, 659, 587], i2 = 0;
      var synth = function() {
        self.musicT = setInterval(function() {
          self.tone(seq[i2 % seq.length], 0.18, "triangle", 0, 0.12);
          if (i2 % 2 === 0)
            self.tone(seq[i2 % seq.length] / 2, 0.22, "sine", 0, 0.1);
          i2++;
        }, 230);
      };
      if (!this.playTrack("festa", synth))
        synth();
    }
    stopMusic() {
      this.musicWant = null;
      if (this.musicEl) {
        try {
          this.musicEl.pause();
        } catch (e2) {
        }
      }
      if (this.musicT) {
        clearInterval(this.musicT);
        this.musicT = null;
      }
    }
    burst(x2, y2) {
      var s2 = this.s, self = this;
      s2.bursts = [0, 1, 2, 3, 4].map(function(i2) {
        return { x: x2 + (i2 - 2) * 3, y: y2, d: i2 * 90 };
      });
      this.cheer();
      this.bump();
      setTimeout(function() {
        s2.bursts = [];
        self.bump();
      }, 1700);
    }
    /* ---------- personaggi ---------- */
    pose(who, pose, anim, face) {
      var a2 = this.s[who];
      if (pose)
        a2.pose = pose;
      if (anim)
        a2.anim = anim;
      if (face)
        a2.face = face;
      this.bump();
    }
    async walk(who, to, opts) {
      opts = opts || {};
      var a2 = this.s[who], dx = to.x - a2.x, dy = to.y - a2.y, dist = Math.sqrt(dx * dx + dy * dy);
      if (Math.abs(dx) > 0.5)
        a2.dir = dx > 0 ? 1 : -1;
      if (dist < 0.5)
        return;
      var speed = (who === "mimi" ? 16 : 24) * (opts.run ? 1.6 : 1);
      var ms = Math.max(350, dist / speed * 1e3);
      a2.pose = opts.pose || (who === "mimi" ? opts.run ? "m_corre" : "m_cammina" : opts.run ? "p_insegue" : "p_salta");
      a2.anim = opts.run ? "a-run" : "a-walk";
      a2.ms = Math.round(ms);
      a2.x = to.x;
      a2.y = to.y;
      if (opts.carry) {
        var it = this.item(opts.carry);
        if (it) {
          it.ms = a2.ms;
          it.x = to.x + (opts.cdx || 0);
          it.y = to.y - (opts.cdy || 6);
        }
      }
      this.bump();
      await this.sleep(ms);
      a2.ms = 0;
      if (opts.carry) {
        var it2 = this.item(opts.carry);
        if (it2)
          it2.ms = 0;
      }
      a2.pose = opts.end || (who === "mimi" ? "m_side" : "p_front");
      a2.anim = "a-idle";
      this.bump();
    }
    face(who, x2) {
      var a2 = this.s[who];
      if (Math.abs(x2 - a2.x) > 0.5)
        a2.dir = x2 > a2.x ? 1 : -1;
      this.bump();
    }
    /* ---------- oggetti in scena ---------- */
    item(id) {
      return this.s.items.find(function(i2) {
        return i2.id === id;
      });
    }
    addItem(o2) {
      this.s.items.push(Object.assign({ ms: 0, cls: "", anim: "", hidden: false, tapId: null, hint: false, label: "" }, o2));
      this.bump();
    }
    setItem(id, patch) {
      var it = this.item(id);
      if (it)
        Object.assign(it, patch);
      this.bump();
    }
    removeItem(id) {
      this.s.items = this.s.items.filter(function(i2) {
        return i2.id !== id;
      });
      this.bump();
    }
    room(list) {
      var self = this;
      (list || SPOT_ORDER).forEach(function(id) {
        var p2 = PROPS[id];
        self.addItem({ id, src: p2.src, x: p2.x, y: p2.y, w: p2.w, z: p2.z, tapId: id, label: SPOTS[id].noun });
      });
    }
    /* ---------- attesa delle risposte (tocco, scelte, voce) ---------- */
    ask(opts) {
      var self = this, s2 = this.s;
      opts = opts || {};
      if (this.waiter) {
        clearTimeout(this.waiter.timer);
        this.waiter.reject(CANCEL);
      }
      s2.input = true;
      s2.taps = opts.taps || [];
      s2.micMsg = "";
      if (opts.chips)
        s2.chips = opts.chips;
      else if (!opts.keepChips)
        s2.chips = [];
      s2.voiceOk = !!opts.voice;
      this.bump();
      return new Promise(function(resolve, reject) {
        var w2 = { resolve, reject, timer: null };
        if (opts.timeout)
          w2.timer = setTimeout(function() {
            if (self.waiter === w2)
              self.answer({ type: "timeout" });
          }, opts.timeout);
        self.waiter = w2;
      });
    }
    answer(a2) {
      var w2 = this.waiter;
      if (!w2)
        return;
      this.waiter = null;
      clearTimeout(w2.timer);
      var s2 = this.s;
      s2.input = false;
      s2.taps = [];
      s2.voiceOk = false;
      if (a2.type !== "chip" || !a2.keep)
        s2.chips = [];
      this.bump();
      w2.resolve(a2);
    }
    touch() {
      this.lastAct = Date.now();
    }
    onTap(id) {
      this.touch();
      if (this.s.input && this.s.taps && this.s.taps.indexOf(id) >= 0) {
        this.pop();
        this.answer({ type: "tap", id });
      }
    }
    onChip(id) {
      this.touch();
      if (this.s.input)
        this.answer({ type: "chip", id });
    }
    micAllowed() {
      return !!this.store.settings.mic && !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    }
    listen() {
      var SR = window.SpeechRecognition || window.webkitSpeechRecognition, self = this, s2 = this.s;
      if (!SR || !s2.input)
        return;
      try {
        var rec = new SR();
        this.rec = rec;
        rec.lang = "it-IT";
        rec.interimResults = false;
        rec.maxAlternatives = 5;
        rec.onresult = function(e2) {
          var alts = [];
          for (var i2 = 0; i2 < e2.results[0].length; i2++)
            alts.push(e2.results[0][i2].transcript);
          s2.micMsg = "Ho sentito: \u201C" + alts[0] + "\u201D";
          s2.listening = false;
          self.bump();
          if (s2.input && s2.voiceOk)
            self.answer({ type: "voice", alts });
        };
        rec.onerror = function(e2) {
          s2.micMsg = e2.error === "not-allowed" || e2.error === "service-not-allowed" ? "Il microfono \xE8 bloccato: serve il permesso del browser. Si pu\xF2 rispondere toccando." : e2.error === "no-speech" ? "Non ho sentito niente. Riprova o tocca." : "Microfono: " + e2.error;
          s2.listening = false;
          self.bump();
        };
        rec.onend = function() {
          s2.listening = false;
          self.bump();
        };
        rec.start();
        s2.listening = true;
        s2.micMsg = "Ti ascolto\u2026";
        this.bump();
      } catch (e2) {
        s2.micMsg = "Microfono non disponibile: " + e2.message;
        s2.listening = false;
        this.bump();
      }
    }
    /* ---------- progressi ---------- */
    kidList() {
      return this.profile === "insieme" ? ["stella", "soleil"] : [this.profile];
    }
    word(kid, w2, lvl) {
      var k2 = this.store.kids[kid];
      if (!k2)
        return;
      var r2 = k2.words[w2] || (k2.words[w2] = { met: 0, rec: 0, said: 0, days: [] });
      r2.met++;
      if (lvl === "rec" || lvl === "said") {
        r2.rec++;
        if (r2.days.indexOf(today()) < 0)
          r2.days.push(today());
      }
      if (lvl === "said")
        r2.said++;
      this.save();
    }
    meet(w2) {
      var self = this;
      this.kidList().forEach(function(k2) {
        self.word(k2, w2, "met");
      });
    }
    star(kid, n2) {
      this.store.kids[kid].stars += n2 || 1;
      this.s.stars += n2 || 1;
      this.save();
      this.bump();
    }
    known(kid, w2) {
      var r2 = this.store.kids[kid] && this.store.kids[kid].words[w2];
      return !!r2 && r2.days.length >= 2 && r2.rec >= 3;
    }
    level() {
      var st = this.store.settings;
      return st.soleilLevel || this.store.kids.soleil.level;
    }
    /* Supporto in italiano: sempre per Stella; per Soleil solo finché la parola non è verificata o dal livello 4 in su. */
    needIt(kid, w2) {
      if (kid === "stella")
        return true;
      if (this.level() >= 4)
        return false;
      return !this.known(kid, w2);
    }
    praise(kid) {
      var K = KIDNAME[kid];
      var fx = Math.random() < 0.6 ? [["fx", pick(["yay", "giggle", "evviva", "wow"])]] : [];
      return fx.concat(pick([[IT("Bravissima, " + K + "!"), EN("Great job!")], [EN("Well done, " + K + "!")], [EN("Fantastic, " + K + "!"), IT("Che brava!")], [EN("Yes! Super, " + K + "!")]]));
    }
    hello() {
      if (this.profile === "stella")
        return [IT("Ciao Stella! Guarda chi c'\xE8!"), EN("It's Pepe! Hello, Stella!")];
      if (this.profile === "soleil")
        return [EN("Hello Soleil! How are you today?"), IT("Ciao Soleil! Scegli un gioco o una storia.")];
      return [EN("Hello Soleil! Hello Stella!"), IT("Ciao bimbe! Oggi giochiamo insieme!")];
    }
    /* ================= NAVIGAZIONE ================= */
    setProfile(p2) {
      this.touch();
      this.profile = p2;
      this.goHome();
    }
    goStart() {
      this.stopFlow();
      this.s = this.freshScene();
      this.s.screen = "start";
      this.bump();
    }
    goHome() {
      if (!this.profile) {
        this.goStart();
        return;
      }
      if (this.timeUp()) {
        this.goNight();
        return;
      }
      this.stopFlow();
      this.s = this.freshScene();
      this.s.screen = "home";
      this.s.mimi.face = "felice";
      this.bump();
      var self = this;
      this.run(async function() {
        await self.say(self.hello(), "felice");
      });
    }
    goGate(next) {
      this.stopFlow();
      this.gate = { a: 3 + Math.floor(Math.random() * 7), b: 4 + Math.floor(Math.random() * 6), entry: "", wrong: false, from: this.s.screen === "night" ? "night" : null };
      this.s.screen = "gate";
      this.bump();
    }
    gateKey(k2) {
      var g2 = this.gate;
      if (k2 === "del")
        g2.entry = g2.entry.slice(0, -1);
      else if (k2 === "ok") {
        if (parseInt(g2.entry, 10) === g2.a + g2.b) {
          this.s.screen = "parents";
          this.resetArmed = false;
        } else {
          g2.wrong = true;
          g2.entry = "";
        }
      } else if (g2.entry.length < 3) {
        g2.entry += k2;
        g2.wrong = false;
      }
      this.bump();
    }
    leaveParents() {
      if (this.profile && !this.timeUp())
        this.goHome();
      else if (this.timeUp() && this.profile)
        this.goNight();
      else
        this.goStart();
    }
    goNight() {
      this.stopFlow();
      this.endingSince = null;
      this.s = this.freshScene();
      this.s.screen = "night";
      var names = this.profile === "insieme" || !this.profile ? "Soleil! Good night, Stella!" : KIDNAME[this.profile] + "!";
      this.s.nightEn = "Good night, " + names;
      this.s.nightIt = "Per oggi basta: Pepe ha sonno e Mim\xEC va a nanna. Ci vediamo domani!";
      this.bump();
      var self = this;
      this.run(async function() {
        await self.speak([IT("Che bella giornata! Abbiamo imparato tante parole. Pepe ha sonno\u2026"), EN(self.s.nightEn), IT("Buonanotte!")]);
      });
    }
    startGame(id) {
      this.touch();
      if (this.timeUp()) {
        this.goNight();
        return;
      }
      this.stopFlow();
      this.s = this.freshScene();
      this.s.game = id;
      this.s.playTitle = GAMES[id] ? GAMES[id].title : "Pepe's Birthday Party";
      this.bump();
      var self = this;
      var flows = { where: this.gWhere, dove: this.gDove, sounds: this.gSounds, touch: this.gTouch, peek: this.gPeek, dance: this.gDance, mission: this.gMission, mystery: this.gMystery, story: this.sParty };
      this.run(async function(g2) {
        await flows[id].call(self, g2);
      });
    }
    turnOf(round) {
      return this.profile === "insieme" ? round % 2 === 0 ? "stella" : "soleil" : this.profile;
    }
    setTurn(kid) {
      this.s.turn = this.profile === "insieme" ? kid : null;
      this.bump();
    }
    /* Fine sessione naturale: tra un round e l'altro, se il tempo è finito, Mimì chiude. */
    async maybeEnd() {
      if (!this.timeUp())
        return false;
      await this.say([IT("Abbiamo giocato tanto! Pepe sbadiglia\u2026"), EN("It's time to sleep!")], "felice");
      this.goNight();
      throw CANCEL;
    }
    async breakTime(round) {
      if (round > 0 && round % 6 === 0) {
        await this.say([IT("Che bel gioco! Facciamo una pausa?"), EN("More?"), IT('Toccate "Ancora" per continuare.')], "felice");
        var a2 = await this.ask({ chips: [{ id: "more", label: "More!", sub: "Ancora", cls: "go" }, { id: "home", label: "Bye bye!", sub: "Torna a casa" }] });
        if (a2.id === "home") {
          this.goHome();
          throw CANCEL;
        }
      }
    }
    /* ================= A. WHERE IS IT? ================= */
    async gWhere(g2) {
      var s2 = this.s, self = this;
      this.room();
      s2.mimi.x = HOME_M.x;
      s2.mimi.y = HOME_M.y;
      s2.pepe.x = HOME_P.x;
      s2.pepe.y = HOME_P.y;
      this.bump();
      var lastObj = null;
      for (var round = 0; ; round++) {
        this.check(g2);
        await this.maybeEnd();
        await this.breakTime(round);
        var kid = this.profile === "insieme" ? "stella" : this.profile;
        var lv = kid === "stella" ? 1 : this.level();
        var nSpots = kid === "stella" ? 2 : [2, 3, 4, 5, 5][lv - 1];
        var pool = kid === "stella" ? shuffle(["box", "table", "sofa"]).slice(0, 2) : shuffle(SPOT_ORDER).slice(0, nSpots);
        if (this.profile === "insieme")
          pool = shuffle(["box", "table", "sofa", "curtain"]).slice(0, 3);
        var visible = SPOT_ORDER.filter(function(id) {
          return pool.indexOf(id) >= 0;
        });
        s2.items.forEach(function(it) {
          if (SPOTS[it.id]) {
            it.hidden = visible.indexOf(it.id) < 0;
            it.hint = false;
          }
        });
        var obj = OBJECTS[pick(["ball", "teddy", "apple"].filter(function(o2) {
          return o2 !== lastObj;
        }))];
        lastObj = obj.id;
        var hideAt = pick(visible);
        this.removeItem("obj");
        this.removeItem("sock");
        this.addItem({ id: "obj", src: obj.src, x: 76, y: 97, w: obj.w, z: 60, anim: "a-pop", label: obj.en });
        s2.mimi.x = HOME_M.x;
        s2.mimi.y = HOME_M.y;
        s2.mimi.dir = -1;
        s2.pepe.x = HOME_P.x;
        s2.pepe.y = HOME_P.y;
        s2.pepe.hidden = false;
        this.pose("mimi", "m_side", "a-idle", "felice");
        this.pose("pepe", "p_front", "a-idle", "contento");
        this.setTurn(kid);
        this.meet(obj.en);
        if (this.profile === "insieme")
          await this.say([EN("Hello Soleil! Hello Stella!"), IT("Pepe vuole nascondere " + obj.it + ". Chiudete gli occhi!"), EN("Close your eyes!")], "felice");
        else if (kid === "stella")
          await this.say([IT("Stella, guarda!"), EN((/^[aeiou]/.test(obj.en) ? "An " : "A ") + obj.en + "!"), IT(cap(obj.it) + "! Pepe vuole fare uno scherzo. Chiudi gli occhi!"), EN("Close your eyes!")], "felice");
        else
          await this.say(lv >= 4 ? [EN("Soleil! Pepe wants to hide the " + obj.en + ". Close your eyes!")] : [EN("Hello Soleil! Pepe wants to hide the " + obj.en + "!"), IT("Chiudi gli occhi!"), EN("Close your eyes!")], "felice");
        s2.mimi.dir = 1;
        this.pose("mimi", "m_side", "a-idle", "pensa");
        var counting = this.say([EN("One\u2026 two\u2026 three\u2026 four\u2026 five!")], "pensa");
        counting.catch(function() {
        });
        await this.pepe("meow", "birichino");
        await this.walk("pepe", { x: 76, y: 97 }, { end: "p_gioca" });
        var sp = SPOTS[hideAt];
        await this.walk("pepe", { x: sp.hide.x + (sp.hide.x > 50 ? -4 : 4), y: Math.min(97, sp.hide.y + 8) }, { carry: "obj", cdy: 2, run: true });
        this.setItem("obj", { hidden: true, x: sp.hide.x, y: sp.hide.y, w: obj.w * 0.9, anim: "" });
        await this.sleep(500);
        await counting;
        await this.walk("pepe", HOME_P, { run: true, end: "p_gioca" });
        this.pose("pepe", "p_gioca", "a-wiggle", "birichino");
        var laugh = this.pepe("laugh", "birichino");
        laugh.catch(function() {
        });
        s2.mimi.dir = -1;
        this.pose("mimi", "m_front", "a-idle", "confusa");
        await laugh;
        this.pose("pepe", "p_front", "a-idle");
        var finder = kid;
        var helped = false, attempts = 0, timeouts = 0, found = false;
        var question = function(withIt) {
          if (finder === "stella")
            return self.profile === "insieme" ? [EN("Stella, can you find the " + obj.en + "?"), IT("Stella, trovi " + obj.it + "? Toccala!")] : [EN("Where is the " + obj.en + "?"), IT("Stella, dov'\xE8 " + obj.it + "?"), EN("Where is it?")];
          return withIt || self.needIt("soleil", sp.en) ? [EN("Soleil, where is the " + obj.en + "?"), IT("Dov'\xE8 " + obj.it + "? Dimmelo o tocca!")] : [EN("Soleil, where is the " + obj.en + "?")];
        };
        await this.say(question(false), "confusa");
        while (!found) {
          this.check(g2);
          var openSpots = visible.filter(function(id) {
            var it = self.item(id);
            return it && !it.checked;
          });
          var a2 = await this.ask({ taps: openSpots, timeout: 14e3, voice: finder === "soleil" });
          var choice = null, lang = null;
          if (a2.type === "tap")
            choice = a2.id;
          else if (a2.type === "voice") {
            var r2 = parseSpot(a2.alts, openSpots);
            if (r2 && r2.spot) {
              choice = r2.spot;
              lang = r2.lang;
            } else if (r2 && r2.ambiguous) {
              await this.say([IT("Scusa Soleil, " + r2.ambiguous.map(function(id) {
                return SPOTS[id].it;
              }).join(" o ") + "?"), EN("Can you show me?")], "pensa");
              continue;
            } else {
              await this.say([IT("Scusa Soleil, non ho capito bene."), EN("Can you show me?"), IT("Toccalo tu!")], "confusa");
              continue;
            }
          }
          if (a2.type === "timeout") {
            timeouts++;
            var h2 = attempts + timeouts;
            if (h2 === 1) {
              await this.say(question(true), "curiosa");
              continue;
            }
            if (h2 === 2) {
              this.setItem(hideAt, { hint: true });
              await this.say([IT("Guarda bene\u2026 vedo qualcosa che brilla!"), EN("Look! Look there!")], "curiosa");
              continue;
            }
            if (h2 === 3) {
              await this.say([IT(cap(obj.it) + " \xE8 " + sp.it + "!"), EN("The " + obj.en + " is " + sp.en + "!")], "pensa");
              continue;
            }
            choice = hideAt;
            helped = true;
          }
          var spot = SPOTS[choice];
          if (lang === "it")
            await this.say([IT("Hai detto " + spot.it + "! In inglese:"), EN(spot.en + "!"), EN("Let's look!")], "curiosa");
          else if (lang === "en") {
            this.word("soleil", spot.en, "said");
            await this.say([EN(cap(spot.en) + "! Let's look!")], "curiosa");
          } else
            await this.say([EN("Let's look!")], "curiosa");
          await this.walk("mimi", spot.stand);
          this.face("mimi", PROPS[choice].x);
          this.pose("mimi", "m_raccoglie", "a-wiggle", "curiosa");
          await this.sleep(900);
          if (choice === hideAt) {
            found = true;
            this.setItem(hideAt, { hint: false });
            this.setItem("obj", { hidden: false, anim: "a-pop" });
            this.pose("mimi", "m_raccoglie", "a-idle", "sorpresa");
            await this.sleep(500);
            this.setItem("obj", { ms: 500, x: s2.mimi.x + (s2.mimi.dir > 0 ? 3 : -3), y: s2.mimi.y - s2.mimi.size * 0.45, w: obj.w, z: 90 });
            this.pose("mimi", "m_balla", "a-hop", "ride");
            this.pose("pepe", "p_salta", "a-hop", "contento");
            this.burst(s2.mimi.x, s2.mimi.y - 30);
            if (attempts === 0 && timeouts === 0)
              this.word(finder, obj.en, "rec");
            if (finder === "stella")
              await this.say([EN("Yes! The " + obj.en + "!"), IT(cap(obj.it) + "!"), EN("The " + obj.en + "!")], "ride");
            else
              await this.say([EN("Yes! The " + obj.en + " is " + spot.en + "!")], "ride");
          } else {
            attempts++;
            this.setItem(choice, { checked: true });
            var funny = Math.random() < 0.45;
            if (funny) {
              this.addItem({ id: "sock", src: IMG.sock, x: SPOTS[choice].hide.x, y: SPOTS[choice].hide.y, w: 5, z: 95, anim: "a-pop", label: "sock" });
              this.pose("mimi", "m_front", "a-shake", "sorpresa");
              this.meet("sock");
              var lp = this.pepe("laugh", "birichino");
              lp.catch(function() {
              });
              await this.say([["fx", "gasp"], EN("A sock?!"), IT("Un calzino! Che buffo!"), ["fx", "laugh"], EN("Not the " + obj.en + "!")], "sorpresa");
              await lp;
              this.removeItem("sock");
            } else {
              this.pose("mimi", "m_front", "a-idle", "confusa");
              var lp2 = this.pepe("laugh", "birichino");
              lp2.catch(function() {
              });
              await this.say([["fx", "ohoh"], EN("Nothing here!"), IT("Qui non c'\xE8.")], "confusa");
              await lp2;
            }
            this.pose("pepe", "p_front", "a-idle", "contento");
            var hh = attempts + timeouts;
            if (hh >= 2)
              this.setItem(hideAt, { hint: true });
            if (hh >= 3) {
              await this.say([IT("Ti aiuto io: " + obj.it + " \xE8 " + sp.it + "!"), EN("The " + obj.en + " is " + sp.en + "!")], "pensa");
              helped = true;
              await this.walk("mimi", sp.stand);
              this.face("mimi", PROPS[hideAt].x);
              this.pose("mimi", "m_raccoglie", "a-wiggle", "curiosa");
              await this.sleep(700);
              found = true;
              this.setItem(hideAt, { hint: false });
              this.setItem("obj", { hidden: false, anim: "a-pop" });
              await this.sleep(400);
              this.setItem("obj", { ms: 500, x: s2.mimi.x + 3, y: s2.mimi.y - s2.mimi.size * 0.45, z: 90 });
              this.pose("mimi", "m_balla", "a-hop", "ride");
              this.burst(s2.mimi.x, s2.mimi.y - 30);
              await this.say([EN("Here it is!"), IT("Eccola! Insieme ce l'abbiamo fatta!")], "ride");
            } else {
              await this.walk("mimi", HOME_M, { end: "m_front" });
              this.pose("mimi", "m_front", "a-idle", "pensa");
              await this.say(question(true), "pensa");
            }
          }
        }
        if (this.profile === "insieme") {
          this.setTurn("soleil");
          this.star("stella");
          var opts = shuffle(visible).map(function(id) {
            return { id, label: SPOTS[id].en, sub: SPOTS[id].it };
          });
          await this.say([IT("Brava Stella! Adesso Soleil:"), EN("Soleil, where was the " + obj.en + "?")], "felice");
          var ok = false;
          for (var tries = 0; tries < 2 && !ok; tries++) {
            var b2 = await this.ask({ chips: opts, voice: true, timeout: 16e3 });
            var said = null, sl = null;
            if (b2.type === "chip")
              said = b2.id;
            if (b2.type === "voice") {
              var rv = parseSpot(b2.alts, visible);
              if (rv && rv.spot) {
                said = rv.spot;
                sl = rv.lang;
              }
            }
            if (said === hideAt) {
              ok = true;
              this.word("soleil", sp.en, sl === "en" ? "said" : "rec");
              if (sl === "it")
                await this.say([IT("S\xEC! " + sp.it + ", in inglese:"), EN(sp.en + "!")], "ride");
              else
                await this.say([EN("Yes! The " + obj.en + " was " + sp.en + "!"), IT("Che squadra!")], "ride");
              this.star("soleil");
              this.burst(50, 40);
            } else if (b2.type === "voice" && !said) {
              await this.say([IT("Scusa Soleil, non ho capito."), EN("Can you show me?")], "confusa");
            } else {
              await this.say([IT("Guarda dov'era: " + sp.it + "."), EN("Say it with me: " + sp.en + "!")], "pensa");
              ok = tries >= 1;
            }
          }
        } else {
          this.finishWhere(kid, helped, attempts, timeouts);
          await this.say(this.praise(kid), "ride");
        }
        this.pose("pepe", "p_front", "a-idle", "contento");
        s2.items.forEach(function(it) {
          it.checked = false;
          it.hint = false;
        });
        await this.sleep(900);
        this.check(g2);
      }
    }
    finishWhere(kid, helped, attempts, timeouts) {
      var k2 = this.store.kids[kid];
      this.star(kid, helped ? 1 : 2);
      if (kid !== "soleil" || this.store.settings.soleilLevel) {
        this.save();
        return;
      }
      if (!helped && attempts === 0 && timeouts === 0) {
        k2.streak++;
        k2.helpStreak = 0;
      } else if (helped) {
        k2.helpStreak++;
        k2.streak = 0;
      } else
        k2.streak = 0;
      if (k2.streak >= 3 && k2.level < 5) {
        k2.level++;
        k2.streak = 0;
      }
      if (k2.helpStreak >= 2 && k2.level > 1) {
        k2.level--;
        k2.helpStreak = 0;
      }
      this.save();
    }
    /* ================= B. DOV'È? / I. ANIMAL SOUNDS ================= */
    floorSpots(n2) {
      var xs = n2 <= 2 ? [32, 68] : n2 === 3 ? [22, 50, 78] : n2 === 4 ? [16, 39, 61, 84] : n2 === 5 ? [12, 31, 50, 69, 88] : [12, 28, 44, 60, 76, 92];
      return xs.map(function(x2, i2) {
        return { x: x2, y: i2 % 2 ? 90 : 97 };
      });
    }
    async animalsBoard(g2, mode) {
      var s2 = this.s, self = this, last = null;
      s2.mimi.x = 50;
      s2.mimi.y = 70;
      s2.mimi.size = 30;
      s2.pepe.hidden = true;
      this.pose("mimi", "m_side", "a-idle", "felice");
      if (mode === "dove")
        await this.say(this.profile === "stella" ? [IT("Stella, guarda quanti animali!"), EN("Let's find the animals!")] : this.profile === "soleil" ? [EN("Soleil, listen carefully!"), IT("Io dico un animale in inglese, tu lo tocchi.")] : [EN("Soleil and Stella, find the animals!"), IT("Una alla volta!")], "felice");
      else
        await this.say([IT("Io faccio il verso di un animale\u2026 voi indovinate chi \xE8!"), EN("Listen!")], "felice");
      for (var round = 0; ; round++) {
        this.check(g2);
        await this.maybeEnd();
        await this.breakTime(round);
        var kid = this.turnOf(round);
        this.setTurn(kid);
        var n2 = kid === "stella" ? round < 3 ? 2 : 3 : Math.min(6, 3 + Math.floor(this.level() / 2));
        var pool = shuffle(ANIMALS).slice(0, n2);
        var target = pick(pool.filter(function(a3) {
          return a3.id !== last;
        }));
        last = target.id;
        s2.items = [];
        this.floorSpots(n2).forEach(function(p2, i2) {
          var a3 = pool[i2];
          self.addItem({ id: a3.id, src: a3.src, x: p2.x, y: p2.y, w: a3.w, z: Math.round(p2.y), anim: "a-pop", tapId: a3.id, label: a3.en });
        });
        pool.forEach(function(a3) {
          self.meet(a3.en);
        });
        var Q;
        if (mode === "dove")
          Q = function(it) {
            return kid === "stella" || it ? [EN("Where is the " + target.en + "?"), IT(KIDNAME[kid] + ", dov'\xE8 " + target.it + "?"), EN("The " + target.en + "!")] : [EN(KIDNAME[kid] + ", where is the " + target.en + "?")];
          };
        else
          Q = function(it) {
            return it ? [EN(cap(target.says) + "!"), IT("Chi fa " + target.says + "?"), EN("Who says " + target.says + "?")] : [EN(cap(target.says) + "! Who says " + target.says + "?")];
          };
        if (mode === "sounds" && Math.random() < 0.4) {
          this.pose("mimi", "m_balla", "a-shake", "pensa");
          await this.say([EN(cap(target.silly) + "!"), IT("Uh? No, no, ho sbagliato!")], "confusa");
          this.s.pepe.hidden = false;
          s2.pepe.x = 92;
          s2.pepe.y = 74;
          s2.pepe.size = 14;
          this.pose("pepe", "p_gioca", "a-wiggle", "birichino");
          await this.pepe("laugh", "birichino");
          s2.pepe.hidden = true;
          this.bump();
        }
        this.pose("mimi", "m_side", "a-talk", "felice");
        await this.say(Q(false), "curiosa");
        var tries = 0, done = false;
        while (!done) {
          var a2 = await this.ask({ taps: pool.map(function(x2) {
            return x2.id;
          }), timeout: 13e3, voice: kid === "soleil" && mode === "dove" });
          var id = a2.id;
          if (a2.type === "voice") {
            var r2 = parseWord(a2.alts, pool.map(function(x2) {
              return { id: x2.id, en: [x2.en], it: [x2.it.replace(/^(il |la |l')/, "")] };
            }));
            if (!r2) {
              await this.say([IT("Scusa, non ho capito."), EN("Can you show me?")], "confusa");
              continue;
            }
            id = r2.id;
            if (r2.lang === "en")
              this.word("soleil", ANIMAL_BY[id].en, "said");
          }
          if (a2.type === "timeout") {
            tries++;
            if (tries === 1) {
              await this.say(Q(true), "curiosa");
              continue;
            }
            this.setItem(target.id, { hint: true });
            await this.say([EN("Look! Here!"), IT("Guarda qui!"), EN("The " + target.en + "!")], "curiosa");
            if (tries >= 3) {
              done = true;
              await this.sleep(500);
            }
            continue;
          }
          var chosen = ANIMAL_BY[id];
          if (id === target.id) {
            done = true;
            this.setItem(id, { hint: false, anim: "a-hop" });
            if (tries === 0)
              this.word(kid, target.en, "rec");
            this.star(kid);
            this.pose("mimi", "m_balla", "a-hop", "ride");
            this.burst(this.item(id).x, 70);
            await this.say(mode === "sounds" ? [EN("Yes! The " + target.en + " says " + target.says + "!")].concat(kid === "stella" ? [IT(cap(target.it) + "!")] : []) : [EN("Yes! The " + target.en + "!")].concat(kid === "stella" ? [IT(cap(target.it) + "!"), EN(cap(target.en) + "!")] : []), "ride");
            await this.say(this.praise(kid), "ride");
          } else {
            tries++;
            this.setItem(id, { anim: "a-wiggle" });
            this.boop();
            await this.say([EN("That's the " + chosen.en + "!"), IT("Questo \xE8 " + chosen.it + ".")], "pensa");
            this.setItem(id, { anim: "" });
            if (tries >= 2)
              this.setItem(target.id, { hint: true });
            await this.say(Q(true), "curiosa");
          }
        }
        this.pose("mimi", "m_side", "a-idle", "felice");
        await this.sleep(700);
      }
    }
    async gDove(g2) {
      await this.animalsBoard(g2, "dove");
    }
    async gSounds(g2) {
      await this.animalsBoard(g2, "sounds");
    }
    /* ================= C. TOCCA E ASCOLTA ================= */
    async gTouch(g2) {
      var s2 = this.s, self = this;
      var things = [
        { id: "cat", en: "cat", it: "il gatto", src: IMG.p_front, x: 84, y: 97, w: 9, extra: "Meow!" },
        { id: "dog", en: "dog", it: "il cane", src: IMG.dog, x: 12, y: 96, w: 11, extra: "Woof woof!" },
        { id: "ball", en: "ball", it: "la palla", src: IMG.ball, x: 30, y: 94, w: 7 },
        { id: "teddy", en: "teddy bear", it: "l'orsetto", src: IMG.teddy, x: 68, y: 92, w: 8 },
        { id: "apple", en: "apple", it: "la mela", src: IMG.apple, x: 46, y: 97, w: 6 },
        { id: "duck", en: "duck", it: "l'anatra", src: IMG.duck, x: 22, y: 82, w: 8, extra: "Quack quack!" },
        { id: "gift", en: "present", it: "il regalo", src: IMG.gift, x: 58, y: 80, w: 8 },
        { id: "balloon", en: "balloon", it: "il palloncino", src: IMG.balloon_red, x: 90, y: 60, w: 6, anim: "a-float" },
        { id: "hat", en: "hat", it: "il cappello", src: IMG.hat, x: 76, y: 80, w: 6 },
        { id: "sofa", en: "sofa", it: "il divano", src: IMG.sofa, x: 40, y: 70, w: 22, z: 10 }
      ];
      s2.items = [];
      things.forEach(function(t3) {
        self.addItem({ id: t3.id, src: t3.src, x: t3.x, y: t3.y, w: t3.w, z: t3.z || Math.round(t3.y), anim: t3.anim || "a-pop", tapId: t3.id, label: t3.en });
      });
      s2.mimi.x = 50;
      s2.mimi.y = 74;
      s2.mimi.size = 30;
      s2.pepe.hidden = true;
      this.pose("mimi", "m_side", "a-idle", "felice");
      var kidName = this.profile === "insieme" ? "Soleil e Stella" : KIDNAME[this.profile];
      await this.say([IT(kidName + ", tocca quello che vuoi: ti dico come si chiama in inglese!"), EN("Touch and listen!")], "felice");
      var touched = {};
      for (; ; ) {
        this.check(g2);
        if (this.timeUp())
          await this.maybeEnd();
        var a2 = await this.ask({ taps: things.map(function(t3) {
          return t3.id;
        }) });
        var t2 = things.find(function(x2) {
          return x2.id === a2.id;
        });
        touched[t2.id] = (touched[t2.id] || 0) + 1;
        this.setItem(t2.id, { anim: "a-hop" });
        this.meet(t2.en);
        this.face("mimi", t2.x);
        var art = /^[aeiou]/.test(t2.en) ? "An " : "A ";
        var kid = this.profile === "insieme" ? "stella" : this.profile;
        var parts = kid === "stella" || touched[t2.id] === 1 ? [EN(art + t2.en + "!"), IT(cap(t2.it) + "!"), EN(cap(t2.en) + "!")] : [EN(art + t2.en + "!"), EN("Say it with me: " + t2.en + "!")];
        if (t2.extra)
          parts.push(EN(t2.extra));
        this.pose("mimi", "m_balla", "a-talk", touched[t2.id] > 1 ? "ride" : "felice");
        await this.say(parts);
        if (t2.id === "ball" && Math.random() < 0.6) {
          s2.pepe.hidden = false;
          s2.pepe.x = 100;
          s2.pepe.y = 96;
          s2.pepe.size = 18;
          this.bump();
          await this.walk("pepe", { x: 34, y: 96 }, { run: true, end: "p_gioca" });
          this.pose("pepe", "p_gioca", "a-wiggle", "birichino");
          await this.pepe("meow", "birichino");
          await this.say([IT("Pepe vuole giocare con la palla!"), EN("Pepe likes the ball!")], "ride");
          await this.walk("pepe", { x: 104, y: 96 }, { run: true });
          s2.pepe.hidden = true;
          this.bump();
        }
        this.setItem(t2.id, { anim: "" });
        this.pose("mimi", "m_side", "a-idle", "felice");
      }
    }
    /* ================= F. PEEKABOO PEPE ================= */
    async gPeek(g2) {
      var s2 = this.s, self = this;
      var spots = ["box", "sofa", "curtain", "chest"];
      this.room(spots);
      s2.mimi.x = HOME_M.x;
      s2.mimi.y = HOME_M.y;
      for (var round = 0; ; round++) {
        this.check(g2);
        await this.maybeEnd();
        await this.breakTime(round);
        var kid = this.profile === "insieme" ? "stella" : this.profile;
        this.setTurn(kid);
        var vis = kid === "stella" ? shuffle(spots).slice(0, 2) : shuffle(spots).slice(0, Math.min(4, 2 + Math.ceil(this.level() / 2)));
        s2.items.forEach(function(it) {
          it.hidden = vis.indexOf(it.id) < 0;
          it.anim = "";
          it.hint = false;
          it.checked = false;
        });
        var at = pick(vis), sp = SPOTS[at];
        s2.pepe.hidden = false;
        s2.pepe.x = HOME_P.x;
        s2.pepe.y = HOME_P.y;
        s2.pepe.size = 19;
        s2.mimi.x = HOME_M.x;
        s2.mimi.y = HOME_M.y;
        s2.mimi.dir = -1;
        this.pose("pepe", "p_front", "a-idle", "birichino");
        this.pose("mimi", "m_side", "a-idle", "felice");
        var n2 = kid === "stella" ? 5 : 10;
        await this.say([IT(kid === "stella" && this.profile !== "insieme" ? "Stella, giochiamo a nascondino con Pepe! Io conto, Pepe si nasconde!" : "Pepe si nasconde! Io conto fino a " + n2 + "."), EN("Ready? Close your eyes!")], "felice");
        s2.mimi.dir = 1;
        this.pose("mimi", "m_side", "a-idle", "pensa");
        var nums = ["One", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"].slice(0, n2).join("\u2026 ") + "!";
        this.meet("count to " + n2);
        var c2 = this.say([EN(nums)], "pensa");
        c2.catch(function() {
        });
        await this.walk("pepe", { x: PROPS[at].x + (at === "curtain" ? 2 : 0), y: Math.min(98, PROPS[at].y - (at === "box" ? 8 : 4)) }, { run: true });
        s2.pepe.hidden = true;
        this.bump();
        this.setItem(at, { anim: "a-wiggle" });
        await c2;
        s2.mimi.dir = -1;
        this.pose("mimi", "m_front", "a-idle", "curiosa");
        await this.say(kid === "stella" ? [EN("Ready or not, here I come!"), IT("Dov'\xE8 Pepe? Toccalo, Stella!"), EN("Where is Pepe?")] : [EN("Ready or not, here I come! Soleil, where is Pepe?")], "curiosa");
        var tries = 0, found = false;
        while (!found) {
          var open = vis.filter(function(id) {
            return !self.item(id).checked;
          });
          var a2 = await this.ask({ taps: open, timeout: 13e3, voice: kid === "soleil" });
          var ch = a2.id, lang = null;
          if (a2.type === "voice") {
            var r2 = parseSpot(a2.alts, open);
            if (r2 && r2.spot) {
              ch = r2.spot;
              lang = r2.lang;
            } else {
              await this.say([IT("Scusa, non ho capito."), EN("Can you show me?")], "confusa");
              continue;
            }
          }
          if (a2.type === "timeout") {
            tries++;
            this.jingle();
            this.setItem(at, { hint: tries >= 2 });
            await this.say([IT("Ascolta\u2026 il campanellino di Pepe!"), EN("Listen! Ding ding!")], "curiosa");
            if (tries < 3)
              continue;
            ch = at;
          }
          await this.walk("mimi", SPOTS[ch].stand);
          this.face("mimi", PROPS[ch].x);
          if (ch === at) {
            found = true;
            this.setItem(at, { anim: "", hint: false });
            s2.pepe.hidden = false;
            s2.pepe.x = SPOTS[at].stand.x + (PROPS[at].x > s2.mimi.x ? 7 : -7);
            s2.pepe.y = Math.min(98, SPOTS[at].stand.y + 1);
            this.pose("pepe", "p_salta", "a-hop", "contento");
            this.pose("mimi", "m_balla", "a-hop", "ride");
            this.burst(s2.pepe.x, s2.pepe.y - 20);
            if (lang === "en")
              this.word("soleil", SPOTS[at].en, "said");
            if (tries === 0)
              this.word(kid, "Pepe is " + SPOTS[at].en, "rec");
            await this.say(kid === "stella" ? [EN("Peekaboo! Found you!"), IT("Trovato! Bravissima Stella!")] : [EN("Peekaboo! Pepe is " + SPOTS[at].en + "!")], "ride");
            await this.pepe("purr", "contento");
            this.star(kid);
          } else {
            tries++;
            this.setItem(ch, { checked: true });
            this.pose("mimi", "m_front", "a-idle", "confusa");
            this.jingle();
            await this.say([["fx", "ohoh"], EN("Not here!"), IT("Qui non c'\xE8\u2026 ascolta il campanellino!")], "confusa");
            if (tries >= 2)
              this.setItem(at, { hint: true });
            await this.walk("mimi", HOME_M, { end: "m_front" });
          }
        }
        if (this.profile === "insieme") {
          this.setTurn("soleil");
          var b2 = await async function() {
            await self.say([IT("Brava Stella! Soleil, dov'era Pepe?"), EN("Soleil, where was Pepe?")], "felice");
            return self.ask({ chips: vis.map(function(id) {
              return { id, label: SPOTS[id].en, sub: SPOTS[id].it };
            }), voice: true, timeout: 16e3 });
          }();
          var said = b2.type === "chip" ? b2.id : null, sl = null;
          if (b2.type === "voice") {
            var rv = parseSpot(b2.alts, vis);
            if (rv && rv.spot) {
              said = rv.spot;
              sl = rv.lang;
            }
          }
          if (said === at) {
            this.word("soleil", "Pepe is " + SPOTS[at].en, sl === "en" ? "said" : "rec");
            this.star("soleil");
            await this.say([EN("Yes! Pepe was " + SPOTS[at].en + "!")], "ride");
          } else
            await this.say([IT("Era " + SPOTS[at].it + "!"), EN("Say it with me: " + SPOTS[at].en + "!")], "pensa");
        }
        await this.sleep(800);
      }
    }
    /* ================= D. DANCE & FREEZE ================= */
    async gDance2D(g2) {
      var s2 = this.s, self = this;
      s2.mimi.x = 40;
      s2.mimi.y = 92;
      s2.mimi.size = 40;
      s2.pepe.x = 64;
      s2.pepe.y = 94;
      s2.pepe.size = 21;
      this.pose("mimi", "m_balla", "a-idle", "felice");
      this.pose("pepe", "p_front", "a-idle", "contento");
      var names = this.profile === "insieme" ? "Soleil, Stella" : KIDNAME[this.profile];
      await this.say([EN("Let's dance, " + names + "!"), IT('Fate le mosse che dico io. Quando dico "Freeze!", tutti fermi come statue!')], "felice");
      for (var round = 0; ; round++) {
        this.check(g2);
        if (round > 0 && round % 4 === 0) {
          this.stopMusic();
          s2.frozen = false;
          this.pose("mimi", "m_side", "a-idle", "felice");
          this.pose("pepe", "p_front", "a-idle");
          await this.maybeEnd();
          await this.say([EN("More dancing?"), IT("Ancora?")], "felice");
          var c2 = await this.ask({ chips: [{ id: "more", label: "More!", sub: "Ancora", cls: "go" }, { id: "home", label: "Bye bye!", sub: "Basta" }] });
          if (c2.id === "home") {
            this.goHome();
            return;
          }
        }
        var mv = pick(MOVES);
        var kid = this.turnOf(round);
        this.meet(mv.en.replace("!", "").toLowerCase());
        this.setTurn(kid);
        this.pose("mimi", mv.mPose, mv.mAnim, "ride");
        this.pose("pepe", mv.pPose, mv.pAnim, "contento");
        s2.frozen = false;
        this.bump();
        this.startMusic();
        await this.say(this.profile === "insieme" ? [EN(KIDNAME[kid] + ", " + mv.en.toLowerCase()), IT(mv.it)] : [EN(mv.en), IT(mv.it), EN(mv.en)]);
        await this.sleep(3e3 + Math.random() * 3500);
        this.stopMusic();
        s2.frozen = true;
        this.bump();
        this.tone(220, 0.35, "square", 0, 0.08);
        var silly = Math.random() < 0.35;
        if (silly)
          this.pose("pepe", "p_salta", "a-hop", "birichino");
        await this.say([EN("Freeze!"), IT("Fermi tutti!")], "sorpresa");
        if (silly) {
          await this.say([EN("Pepe! Freeze!"), IT("Pepe, tu ti muovi ancora!")], "ride");
          this.pose("pepe", "p_front", "a-idle", "sorpreso");
          await this.pepe("meow", "sorpreso");
        }
        await this.sleep(1600);
        s2.frozen = false;
        this.bump();
        await this.say([EN("And\u2026 go!")], "felice");
      }
    }
    /* ================= E. MISSIONE IN CASA ================= */
    async gMission(g2) {
      var s2 = this.s, self = this;
      s2.mimi.x = 36;
      s2.mimi.y = 94;
      s2.mimi.size = 40;
      s2.pepe.x = 70;
      s2.pepe.y = 95;
      s2.pepe.size = 20;
      this.pose("mimi", "m_side", "a-idle", "felice");
      this.pose("pepe", "p_front", "a-idle", "curioso");
      await this.say([IT('Missione speciale! Io dico un colore, voi cercate in casa una cosa di quel colore e la portate qui. Un grande tocca "Trovato!".'), EN("Ready? Go!")], "felice");
      var lastC = null;
      for (var round = 0; ; round++) {
        this.check(g2);
        await this.maybeEnd();
        var kid = this.turnOf(round);
        this.setTurn(kid);
        var useShape = kid === "soleil" && this.level() >= 3 && Math.random() < 0.35;
        var target, swatch = null;
        if (useShape)
          target = pick(SHAPES);
        else {
          var cc = pick(COLORS.slice(0, 6).filter(function(c2) {
            return c2.id !== lastC;
          }));
          lastC = cc.id;
          target = { id: cc.id, en: "something " + cc.en, it: "qualcosa di " + cc.it, word: cc.en };
          swatch = cc.hex;
        }
        s2.items = [];
        if (swatch)
          this.addItem({ id: "swatch", src: IMG["balloon_" + (["red", "blue", "yellow", "green"].indexOf(target.id) >= 0 ? target.id : "red")], x: 52, y: 70, w: 7, z: 5, anim: "a-float", label: target.en, hidden: ["red", "blue", "yellow", "green"].indexOf(target.id) < 0 });
        this.meet(target.word || target.en);
        this.pose("mimi", "m_corre", "a-talk", "felice");
        await this.say(kid === "stella" ? [EN(KIDNAME[kid] + ", find " + target.en + "!"), IT("Cerca " + target.it + "!"), EN(cap(target.word || target.en) + "!")] : this.needIt("soleil", target.en) ? [EN("Soleil, find " + target.en + "!"), IT("Cerca " + target.it + "!")] : [EN("Soleil, find " + target.en + "!")], "felice");
        if (Math.random() < 0.5) {
          this.addItem({ id: "sock", src: IMG.sock, x: 76, y: 82, w: 5, z: 99, anim: "a-pop", label: "sock" });
          this.pose("pepe", "p_gioca", "a-wiggle", "birichino");
          await this.pepe("meow", "birichino");
          await this.say([IT("Pepe porta un calzino\u2026 ma \xE8 il colore giusto? Cercate voi!")], "ride");
          this.removeItem("sock");
          this.pose("pepe", "p_front", "a-idle", "curioso");
        }
        var chips = [{ id: "found", label: "Found it!", sub: "Trovato!", cls: "ok", hasSwatch: !!swatch, swatch }, { id: "again", label: "Say it again", sub: "Ripeti" }, { id: "other", label: "Another one", sub: "Un altro" }];
        for (; ; ) {
          var a2 = await this.ask({ chips });
          if (a2.id === "again") {
            await this.say([EN("Find " + target.en + "!"), IT("Cerca " + target.it + "!")], "felice");
            continue;
          }
          if (a2.id === "other")
            break;
          this.word(kid, target.word || target.en, "rec");
          this.star(kid);
          this.pose("mimi", "m_balla", "a-hop", "ride");
          this.pose("pepe", "p_salta", "a-hop", "contento");
          this.burst(50, 50);
          await this.say([EN("Wow! " + cap(target.en) + "! Thank you, " + KIDNAME[kid] + "!"), IT("Missione compiuta!")], "ride");
          break;
        }
        this.pose("mimi", "m_side", "a-idle", "felice");
        this.pose("pepe", "p_front", "a-idle", "curioso");
        await this.sleep(500);
      }
    }
    /* ================= K. MYSTERY BOX ================= */
    async gMystery(g2) {
      var s2 = this.s, self = this;
      var pool = [
        { id: "duck", en: "duck", it: "un'anatra", src: IMG.duck, w: 11 },
        { id: "apple", en: "apple", it: "una mela", src: IMG.apple, w: 8 },
        { id: "teddy", en: "teddy bear", it: "un orsetto", src: IMG.teddy, w: 10 },
        { id: "frog", en: "frog", it: "una rana", src: IMG.frog, w: 11 },
        { id: "ball", en: "ball", it: "una palla", src: IMG.ball, w: 9 },
        { id: "pig", en: "pig", it: "un maialino", src: IMG.pig, w: 11 },
        { id: "sock", en: "sock", it: "un calzino", src: IMG.sock, w: 7, funny: true },
        { id: "fish", en: "fish", it: "un pesce", src: IMG.fish, w: 11 },
        { id: "hat", en: "hat", it: "un cappello", src: IMG.hat, w: 9 },
        { id: "lion", en: "lion", it: "un leone", src: IMG.lion, w: 12 }
      ];
      s2.mimi.x = 24;
      s2.mimi.y = 94;
      s2.mimi.size = 38;
      s2.pepe.x = 80;
      s2.pepe.y = 95;
      s2.pepe.size = 19;
      this.pose("mimi", "m_side", "a-idle", "curiosa");
      this.pose("pepe", "p_front", "a-idle", "curioso");
      s2.mimi.dir = 1;
      await this.say([IT("Guardate! Una scatola misteriosa! Chiss\xE0 cosa c'\xE8 dentro\u2026"), EN("What's in the box?")], "curiosa");
      var bag = shuffle(pool);
      for (var round = 0; ; round++) {
        this.check(g2);
        await this.maybeEnd();
        await this.breakTime(round);
        var kid = this.turnOf(round);
        this.setTurn(kid);
        if (!bag.length)
          bag = shuffle(pool);
        var o2 = bag.pop();
        s2.items = [];
        this.addItem({ id: "mbox", src: IMG.mystery, x: 52, y: 94, w: 20, z: 40, tapId: "mbox", label: "mystery box" });
        await this.say([EN(KIDNAME[kid] + ", open the box!"), IT("Tocca la scatola!")], "curiosa");
        await this.ask({ taps: ["mbox"] });
        this.setItem("mbox", { anim: "a-shake" });
        this.tone(330, 0.1, "square", 0, 0.05);
        this.tone(392, 0.1, "square", 0.12, 0.05);
        this.tone(523, 0.2, "triangle", 0.26, 0.1);
        await this.sleep(900);
        this.addItem({ id: "thing", src: o2.src, x: 52, y: 76, w: o2.w, z: 50, anim: "a-pop", label: o2.en });
        this.setItem("mbox", { anim: "" });
        this.meet(o2.en);
        this.pose("mimi", "m_front", "a-idle", "sorpresa");
        if (kid === "soleil") {
          await this.say([EN("Soleil, what is it?")].concat(this.needIt("soleil", o2.en) ? [IT("Cos'\xE8? Dillo in inglese, se lo sai!")] : []), "curiosa");
          var chips = [{ id: "know", label: "I know!", sub: "Lo so! Lo dico ad alta voce", cls: "go" }, { id: "help", label: "Help!", sub: "Aiutami, Mim\xEC" }];
          var a2 = await this.ask({ chips, voice: true, timeout: 15e3 });
          if (a2.type === "voice") {
            var r2 = parseWord(a2.alts, [{ id: o2.id, en: o2.en.split(" "), it: [o2.it.split(" ").pop()] }]);
            if (r2 && r2.lang === "en") {
              this.word("soleil", o2.en, "said");
              this.star("soleil", 2);
              this.burst(52, 60);
              await this.say([EN("Yes! It's a" + (/^[aeiou]/.test(o2.en) ? "n " : " ") + o2.en + "!"), IT("L'hai detto in inglese!")], "ride");
            } else if (r2) {
              this.word("soleil", o2.en, "rec");
              await this.say([IT("S\xEC, " + o2.it + "! In inglese:"), EN(o2.en + "! Say it with me: " + o2.en + "!")], "felice");
            } else
              await this.say([IT("Uhm, non ho capito bene. \xC8\u2026"), EN("a" + (/^[aeiou]/.test(o2.en) ? "n " : " ") + o2.en + "!")], "pensa");
          } else {
            await this.say([EN("It's a" + (/^[aeiou]/.test(o2.en) ? "n " : " ") + o2.en + "!"), IT(cap(o2.it) + "!"), EN(cap(o2.en) + "!")], "ride");
            if (a2.id === "know")
              this.star("soleil");
          }
        } else {
          await this.say([EN(o2.funny ? "A sock?! Pepe!" : (/^[aeiou]/.test(o2.en) ? "An " : "A ") + o2.en + "!"), IT(cap(o2.it) + "!"), EN(cap(o2.en) + "!")], "ride");
          this.star(kid);
        }
        if (o2.funny) {
          this.pose("pepe", "p_gioca", "a-wiggle", "birichino");
          await this.pepe("laugh", "birichino");
          this.pose("pepe", "p_front", "a-idle", "curioso");
        }
        this.pose("mimi", "m_balla", "a-hop", "felice");
        await this.sleep(1200);
        this.pose("mimi", "m_side", "a-idle", "curiosa");
      }
    }
    /* ================= STORIA: PEPE'S BIRTHDAY PARTY ================= */
    async sParty(g2) {
      var s2 = this.s, self = this, P2 = this.profile;
      var names = P2 === "insieme" ? "Soleil e Stella" : KIDNAME[P2];
      s2.playTitle = "Pepe's Birthday Party";
      this.room(["sofa", "curtain", "box", "table"]);
      s2.items.forEach(function(it) {
        it.tapId = null;
      });
      s2.mimi.x = 50;
      s2.mimi.y = 97;
      s2.pepe.x = 72;
      s2.pepe.y = 97;
      this.pose("mimi", "m_balla", "a-hop", "felice");
      this.pose("pepe", "p_front", "a-idle", "contento");
      await this.say([IT("Ciao " + names + "! Sapete che giorno \xE8 oggi? \xC8 il compleanno di Pepe!"), EN("It's Pepe's birthday!"), EN("Let's have a party!"), IT("Facciamo una festa!")], "felice");
      this.pose("pepe", "p_salta", "a-hop", "contento");
      await this.pepe("purr", "contento");
      this.meet("birthday");
      this.meet("party");
      this.pose("mimi", "m_front", "a-idle", "confusa");
      this.pose("pepe", "p_front", "a-idle", "birichino");
      await this.say([EN("Oh no! Where are the balloons?"), IT("Dove sono i palloncini?")], "confusa");
      var lp = this.pepe("laugh", "birichino");
      lp.catch(function() {
      });
      await this.say([IT("Pepe! Li hai nascosti tu?"), EN("Silly cat!")], "sorpresa");
      await lp;
      var balloons = [
        { id: "red", src: IMG.balloon_red, x: 66, y: 44, place: "sofa" },
        { id: "blue", src: IMG.balloon_blue, x: 95, y: 34, place: "curtain" },
        { id: "yellow", src: IMG.balloon_yellow, x: 12, y: 66, place: "box" }
      ];
      if (P2 !== "stella")
        balloons.push({ id: "green", src: IMG.balloon_green, x: 33, y: 62, place: "table" });
      balloons.forEach(function(b3, i2) {
        self.addItem({ id: "b_" + b3.id, src: b3.src, x: b3.x, y: b3.y, w: 5.5, z: 25 + i2, anim: "a-float", tapId: "b_" + b3.id, label: b3.id + " balloon" });
      });
      await this.say(P2 === "stella" ? [IT("Stella, aiutami! Tocca i palloncini!"), EN("Touch the balloons!")] : [EN("Can you help me find them?"), IT("Mi aiutate a trovarli?")], "curiosa");
      var left = balloons.slice(), garland = 0;
      var round = 0;
      while (left.length) {
        this.check(g2);
        var kid = P2 === "insieme" ? round % 2 === 0 ? "stella" : "soleil" : P2;
        this.setTurn(kid);
        var b2;
        if (kid === "stella") {
          if (P2 === "insieme")
            await this.say([EN("Stella, touch a balloon!")], "curiosa");
          var a2 = await this.ask({ taps: left.map(function(x2) {
            return "b_" + x2.id;
          }), timeout: 15e3 });
          if (a2.type === "timeout") {
            this.setItem("b_" + left[0].id, { hint: true });
            await this.say([IT("Guarda! Lass\xF9!"), EN("Look!")], "curiosa");
            continue;
          }
          b2 = left.find(function(x2) {
            return "b_" + x2.id === a2.id;
          });
          this.word("stella", "balloon", "rec");
        } else {
          var target = pick(left);
          await this.say([EN("Soleil, find the " + target.id + " balloon!")].concat(this.needIt("soleil", target.id) ? [IT("Trova il palloncino " + COLOR_BY[target.id].it + "!")] : []), "curiosa");
          var tries = 0;
          for (; ; ) {
            var a22 = await this.ask({ taps: left.map(function(x2) {
              return "b_" + x2.id;
            }), timeout: 15e3 });
            if (a22.type === "timeout") {
              tries++;
              this.setItem("b_" + target.id, { hint: true });
              await this.say([EN("The " + target.id + " balloon!"), IT("Il palloncino " + COLOR_BY[target.id].it + "!")], "curiosa");
              continue;
            }
            if (a22.id === "b_" + target.id) {
              b2 = target;
              if (tries === 0)
                this.word("soleil", target.id, "rec");
              break;
            }
            tries++;
            var wrongC = a22.id.slice(2);
            this.boop();
            await this.say([EN("That's " + wrongC + "."), IT("Quello \xE8 " + COLOR_BY[wrongC].it + "."), EN("Where is " + target.id + "?")], "pensa");
          }
        }
        this.setItem("b_" + b2.id, { hint: false });
        await this.walk("mimi", { x: Math.max(8, Math.min(92, b2.x + (b2.x > 50 ? -8 : 8))), y: 92 }, { run: true });
        this.setItem("b_" + b2.id, { ms: 900, x: 30 + garland * 13, y: 22, w: 5, z: 200 });
        garland++;
        this.pose("mimi", "m_balla", "a-hop", "ride");
        this.cheer();
        this.meet(b2.id + " balloon");
        if (P2 === "insieme" && kid === "stella") {
          this.setTurn("soleil");
          await this.say([IT("Brava Stella!"), EN("Soleil, what colour is it?")], "felice");
          var cols = shuffle(balloons.map(function(x2) {
            return x2.id;
          })).slice(0, 3);
          if (cols.indexOf(b2.id) < 0)
            cols[0] = b2.id;
          var c2 = await this.ask({ chips: shuffle(cols).map(function(id) {
            return { id, label: id, sub: COLOR_BY[id].it, hasSwatch: true, swatch: COLOR_BY[id].hex };
          }), voice: true, timeout: 15e3 });
          var cid = c2.type === "chip" ? c2.id : null, cl = null;
          if (c2.type === "voice") {
            var rw = parseWord(c2.alts, COLORS.slice(0, 4).map(function(x2) {
              return { id: x2.id, en: [x2.en], it: [x2.it] };
            }));
            if (rw) {
              cid = rw.id;
              cl = rw.lang;
            }
          }
          if (cid === b2.id) {
            this.word("soleil", b2.id, cl === "en" ? "said" : "rec");
            this.star("soleil");
            await this.say([EN("Yes! " + cap(b2.id) + "! A " + b2.id + " balloon!")], "ride");
          } else
            await this.say([IT("\xC8 " + COLOR_BY[b2.id].it + "!"), EN("Say it: " + b2.id + "!")], "pensa");
          round++;
        } else {
          await this.say(kid === "stella" ? [EN("A " + b2.id + " balloon!"), IT("Un palloncino " + COLOR_BY[b2.id].it + "!"), EN(cap(b2.id) + "!")] : [EN("Yes! The " + b2.id + " balloon!")], "ride");
        }
        left = left.filter(function(x2) {
          return x2.id !== b2.id;
        });
        round++;
      }
      this.star(P2 === "insieme" ? "stella" : P2);
      await this.walk("mimi", { x: 50, y: 97 });
      await this.say([EN("All the balloons!"), IT("Tutti i palloncini! Che bella festa!")], "ride");
      var chooser = P2 === "insieme" ? "soleil" : P2;
      this.setTurn(chooser);
      this.addItem({ id: "cake_choco", src: IMG.cake_choco, x: 34, y: 80, w: 15, z: 70, anim: "a-pop", tapId: "cake_choco", label: "chocolate cake" });
      this.addItem({ id: "cake_straw", src: IMG.cake_straw, x: 66, y: 80, w: 15, z: 70, anim: "a-pop", tapId: "cake_straw", label: "strawberry cake" });
      this.meet("cake");
      this.meet("chocolate");
      this.meet("strawberry");
      await this.say([EN("Now, the cake!"), EN((chooser === "stella" ? "Stella" : "Soleil") + ", chocolate or strawberry?"), IT("Torta al cioccolato o alla fragola? Scegli tu!")], "curiosa");
      var cc = await this.ask({ taps: ["cake_choco", "cake_straw"], voice: chooser === "soleil", timeout: 2e4 });
      var cake = cc.id;
      if (cc.type === "voice") {
        var rc = parseWord(cc.alts, [{ id: "cake_choco", en: ["chocolate"], it: ["cioccolato", "cioccolata"] }, { id: "cake_straw", en: ["strawberry"], it: ["fragola", "fragole"] }]);
        cake = rc ? rc.id : "cake_choco";
        if (rc && rc.lang === "en")
          this.word("soleil", rc.id === "cake_choco" ? "chocolate" : "strawberry", "said");
      }
      if (cc.type === "timeout")
        cake = "cake_choco";
      var other = cake === "cake_choco" ? "cake_straw" : "cake_choco";
      this.removeItem(other);
      this.setItem(cake, { ms: 800, x: 40, y: 59, w: 13, z: 40 });
      var choco = cake === "cake_choco";
      this.word(chooser, choco ? "chocolate" : "strawberry", "rec");
      this.pose("pepe", "p_side", "a-wiggle", "sorpreso");
      await this.say([EN(choco ? "Chocolate cake! Yummy!" : "Strawberry cake! Yummy!"), IT(choco ? "Torta al cioccolato! Che buona!" : "Torta alla fragola, rosa come il naso di Pepe!")], "ride");
      await this.pepe("meow", "contento");
      var lighter = P2 === "insieme" ? "stella" : P2;
      this.setTurn(lighter);
      [0, 1, 2].forEach(function(i2) {
        self.addItem({ id: "c" + i2, src: IMG.candle_off, x: 36 + i2 * 4, y: 51, w: 2.4, z: 45, anim: "a-pop", tapId: "c" + i2, label: "candle" });
      });
      this.meet("candles");
      await this.say([EN("Let's light the candles!"), IT("Accendiamo le candeline! Tocca le candeline e contiamo!")], "felice");
      var lit = 0, numW = ["One!", "Two!", "Three!"];
      while (lit < 3) {
        var cl2 = await this.ask({ taps: ["c0", "c1", "c2"].filter(function(id) {
          return self.item(id).src === IMG.candle_off;
        }), timeout: 15e3 });
        if (cl2.type === "timeout") {
          await this.say([IT("Tocca una candelina!"), EN("Touch a candle!")], "curiosa");
          continue;
        }
        this.setItem(cl2.id, { src: IMG.candle_on, anim: "a-pop" });
        this.tone(660 + lit * 120, 0.2, "triangle", 0, 0.12);
        await this.say([EN(numW[lit])], "felice");
        lit++;
      }
      this.meet("three");
      var counter = P2 === "insieme" ? "soleil" : P2;
      if (counter === "soleil") {
        this.setTurn("soleil");
        await this.say([EN("Soleil, how many candles?")], "curiosa");
        var hn = await this.ask({ chips: [2, 3, 4].map(function(n2) {
          return { id: String(n2), label: ["", "one", "two", "three", "four"][n2], sub: String(n2) };
        }), voice: true, timeout: 15e3 });
        var num = hn.type === "chip" ? parseInt(hn.id, 10) : null, nl = null;
        if (hn.type === "voice") {
          var t2 = norm(hn.alts.join(" "));
          Object.keys(NUM_WORDS).forEach(function(w2) {
            if (num == null && has(t2, w2)) {
              num = NUM_WORDS[w2];
              nl = ["one", "two", "three", "four", "five"].indexOf(w2) >= 0 ? "en" : "it";
            }
          });
          if (num == null && has(t2, "3"))
            num = 3;
        }
        if (num === 3) {
          this.word("soleil", "three", nl === "en" ? "said" : "rec");
          this.star("soleil");
          await this.say([EN("Yes! Three candles!"), IT("Tre candeline!")], "ride");
        } else
          await this.say([IT("Contiamo insieme:"), EN("One, two, three! Three candles!")], "pensa");
      } else
        await this.say([EN("One, two, three! Three candles!"), IT("Tre candeline!")], "ride");
      this.setTurn(null);
      this.pose("pepe", "p_salta", "a-hop", "birichino");
      this.addItem({ id: "hat", src: IMG.hat, x: s2.mimi.x, y: s2.mimi.y - s2.mimi.size * 0.92, w: 5, z: 120, anim: "" });
      await this.walk("pepe", { x: s2.mimi.x + 4, y: 98 }, { run: true, end: "p_salta" });
      this.setItem("hat", { ms: 300, x: s2.pepe.x, y: s2.pepe.y - 12 });
      await this.sleep(300);
      this.pose("mimi", "m_front", "a-shake", "sorpresa");
      await this.walk("pepe", { x: 86, y: 90 }, { run: true, carry: "hat", cdy: 12, end: "p_gioca" });
      this.pose("pepe", "p_gioca", "a-wiggle", "birichino");
      this.meet("hat");
      this.meet("stop");
      await this.say([EN("Pepe! My hat!"), IT("Il mio cappello! Aiutatemi! Dite tutti insieme:"), EN("Stop, Pepe!")], "sorpresa");
      var st = await this.ask({ chips: [{ id: "stop", label: "Stop, Pepe!", sub: "Fermati, Pepe!", cls: "go" }], voice: true, timeout: 2e4 });
      if (st.type === "voice") {
        var t22 = norm(st.alts.join(" "));
        if (has(t22, "stop"))
          this.kidList().forEach(function(k2) {
            if (k2 === "soleil")
              self.word("soleil", "stop", "said");
          });
      }
      this.kidList().forEach(function(k2) {
        self.word(k2, "stop", "rec");
      });
      this.pose("pepe", "p_front", "a-idle", "triste");
      await this.pepe("sad", "triste");
      this.meet("please");
      this.meet("thank you");
      await this.say([EN("Give it back, please!"), IT("Ridammelo, per favore!")], "pensa");
      await this.walk("pepe", { x: s2.mimi.x + 8, y: 98 }, { carry: "hat", cdy: 12, end: "p_front" });
      this.setItem("hat", { ms: 400, x: s2.mimi.x, y: s2.mimi.y - s2.mimi.size * 0.92 });
      await this.sleep(450);
      this.removeItem("hat");
      this.pose("mimi", "m_balla", "a-hop", "ride");
      await this.say([EN("Thank you, Pepe!"), IT("Grazie Pepe! Sei un gattino birichino!")], "ride");
      this.pose("pepe", "p_salta", "a-dance", "contento");
      this.pose("mimi", "m_balla", "a-dance", "ride");
      await this.say([IT("Cantiamo tutti insieme!")], "felice");
      var song = [[392, 392, 440, 392, 523, 494], [392, 392, 440, 392, 587, 523], [392, 392, 784, 659, 523, 494, 440], [698, 698, 659, 523, 587, 523]];
      var lyr = ["Happy birthday to you", "Happy birthday to you", "Happy birthday, dear Pepe", "Happy birthday to you!"];
      for (var li = 0; li < song.length; li++) {
        s2.sub = { en: lyr[li], it: li === 2 ? "Tanti auguri, caro Pepe" : "Tanti auguri a te" };
        s2.speaker = "mimi";
        this.bump();
        for (var ni = 0; ni < song[li].length; ni++) {
          this.tone(song[li][ni], 0.35, "triangle", 0, 0.16);
          await this.sleep(ni === song[li].length - 1 ? 700 : 380);
        }
      }
      this.meet("happy birthday");
      this.pose("mimi", "m_side", "a-idle", "felice");
      this.pose("pepe", "p_front", "a-idle", "contento");
      await this.say([IT("Adesso soffiamo sulle candeline! Toccale per spegnerle!"), EN("Blow!")], "felice");
      var out = 0;
      while (out < 3) {
        var bl = await this.ask({ taps: ["c0", "c1", "c2"].filter(function(id) {
          return self.item(id).src === IMG.candle_on;
        }), timeout: 15e3 });
        if (bl.type === "timeout") {
          await this.say([EN("Blow!"), IT("Soffia!")], "felice");
          continue;
        }
        this.setItem(bl.id, { src: IMG.candle_off });
        this.tone(300, 0.25, "sine", 0, 0.08);
        out++;
      }
      this.burst(40, 40);
      this.burst(60, 40);
      this.pose("mimi", "m_balla", "a-hop", "ride");
      this.pose("pepe", "p_salta", "a-hop", "contento");
      var thanks = P2 === "insieme" ? "Thank you, Soleil! Thank you, Stella!" : "Thank you, " + KIDNAME[P2] + "!";
      await this.say([EN("Happy birthday, Pepe!"), EN(thanks), IT("Che festa meravigliosa!")], "ride");
      this.kidList().forEach(function(k2) {
        self.star(k2, 2);
      });
      await this.pepe("purr", "contento");
      this.pose("mimi", "m_side", "a-idle", "felice");
      s2.chips = [];
      await this.say([IT("Oggi abbiamo imparato: balloon, cake, candles, stop, please, thank you e happy birthday!"), EN("The end!")], "felice");
      var fin = await this.ask({ chips: [{ id: "again", label: "Again!", sub: "Ancora la storia", cls: "go" }, { id: "home", label: "Home", sub: "Torna a casa" }] });
      if (fin.id === "again")
        this.startGame("story");
      else
        this.goHome();
    }
    /* ================= STORIE (motore) ================= */
    theme(name) {
      var t2 = THEMES[name] || THEMES.room;
      this.s.theme = name;
      this.s.wallCls = t2.wall;
      this.s.floorCls = t2.floor;
      this.s.rug = !!t2.rug;
      this.bump();
    }
    fill(str, extra) {
      var P2 = this.profile, name = P2 === "insieme" ? "Soleil e Stella" : KIDNAME[P2];
      var kid = this.s.turn ? KIDNAME[this.s.turn] : name;
      return str.replace(/\{name\}/g, name).replace(/\{kid\}/g, kid).replace(/\{choice\}/g, extra && extra.choice || "");
    }
    mapBox() {
      var h2 = MAP.w * 16 / 9 * MAP.ratio;
      return { left: MAP.x - MAP.w / 2, top: MAP.y - h2, w: MAP.w, h: h2 };
    }
    showMap(region, pins, tappable) {
      var self = this, b2 = this.mapBox();
      ["map", "reg"].forEach(function(id) {
        self.removeItem(id);
      });
      this.s.items = this.s.items.filter(function(i2) {
        return i2.id.indexOf("pin_") !== 0;
      });
      this.addItem({ id: "map", src: IMG.italy, x: MAP.x, y: MAP.y, w: MAP.w, z: 3, label: "Italia" });
      if (region)
        this.addItem({ id: "reg", src: REGION[region], x: MAP.x, y: MAP.y, w: MAP.w, z: 4, anim: "a-pop", label: region });
      (pins || []).forEach(function(c2) {
        var p2 = CITY[c2];
        if (!p2)
          return;
        self.addItem({ id: "pin_" + c2, src: IMG.pin, x: b2.left + p2[0] / 100 * b2.w, y: b2.top + p2[1] / 100 * b2.h + 0.4, w: 2.6, z: 20, anim: "a-pop", tapId: tappable ? "pin_" + c2 : null, label: c2 });
      });
    }
    hideMap() {
      this.s.items = this.s.items.filter(function(i2) {
        return i2.id !== "map" && i2.id !== "reg" && i2.id.indexOf("pin_") !== 0;
      });
      this.bump();
    }
    nextTurn() {
      if (this.profile !== "insieme") {
        this.s.turn = null;
        return this.profile;
      }
      this.storyTurn = (this.storyTurn || 0) + 1;
      var k2 = this.storyTurn % 2 ? "stella" : "soleil";
      this.setTurn(k2);
      return k2;
    }
    async sayP(str, face, extra) {
      await this.say(PARSE(this.fill(str, extra)), face);
    }
    async runStory(st) {
      var s2 = this.s, self = this;
      s2.playTitle = st.title;
      this.theme(st.bg);
      this.storyTurn = 0;
      s2.mimi.size = 32;
      s2.pepe.size = 17;
      for (var i2 = 0; i2 < st.steps.length; i2++) {
        var sp = st.steps[i2], t2 = sp[0];
        if (t2 === "mimi") {
          s2.mimi.x = sp[1];
          s2.mimi.y = sp[2];
          s2.mimi.dir = 1;
          this.pose("mimi", "m_side", "a-idle", "felice");
        } else if (t2 === "pepe") {
          s2.pepe.x = sp[1];
          s2.pepe.y = sp[2];
          s2.pepe.dir = 1;
          s2.pepe.hidden = false;
          this.pose("pepe", "p_front", "a-idle", "contento");
        } else if (t2 === "map")
          this.showMap(sp[1], sp[2], false);
        else if (t2 === "hidemap")
          this.hideMap();
        else if (t2 === "show")
          this.addItem({ id: sp[1], src: IMG[sp[2]], x: sp[3], y: sp[4], w: sp[5], z: Math.round(sp[4]), anim: sp[6] || "a-pop", label: sp[2] });
        else if (t2 === "hide")
          this.removeItem(sp[1]);
        else if (t2 === "swap") {
          this.setItem(sp[1], { src: IMG[sp[2]], anim: "a-pop" });
          this.pop();
          await this.sleep(300);
        } else if (t2 === "move") {
          this.setItem(sp[1], { ms: 1200, x: sp[2], y: sp[3] });
          await this.sleep(1250);
          this.setItem(sp[1], { ms: 0 });
        } else if (t2 === "dim") {
          s2.dim = sp[1];
          this.bump();
        } else if (t2 === "fx") {
          this.pose("mimi", "m_balla", "a-hop", "ride");
          this.pose("pepe", "p_salta", "a-hop", "contento");
          this.burst(50, 50);
          await this.sleep(1200);
          this.pose("mimi", "m_side", "a-idle", "felice");
          this.pose("pepe", "p_front", "a-idle");
        } else if (t2 === "m") {
          var face = sp[2] || "felice";
          this.pose("mimi", face === "ride" ? "m_balla" : face === "sorpresa" ? "m_front" : "m_side", null, face);
          this.setTurn(null);
          await this.sayP(sp[1], face);
          this.pose("mimi", null, "a-idle");
        } else if (t2 === "p") {
          this.pose("pepe", sp[1] === "laugh" ? "p_gioca" : sp[1] === "purr" ? "p_salta" : "p_front", sp[1] === "sad" ? "a-idle" : "a-hop", sp[2]);
          await this.pepe(sp[1], sp[2]);
          this.pose("pepe", "p_front", "a-idle");
        } else if (t2 === "tap")
          await this.stTap(sp);
        else if (t2 === "pin")
          await this.stPin(sp);
        else if (t2 === "pick")
          await this.stPick(sp);
        else if (t2 === "count")
          await this.stCount(sp);
        else if (t2 === "act")
          await this.stAct(sp);
        else if (t2 === "learn") {
          var words = sp[1];
          words.forEach(function(w2) {
            self.meet(w2);
          });
          this.setTurn(null);
          this.pose("mimi", "m_balla", "a-hop", "ride");
          await this.say([IT("Bravissime! Oggi abbiamo imparato:"), EN(words.join(", ") + "!")], "ride");
          this.kidList().forEach(function(k2) {
            self.star(k2, 2);
          });
          this.pose("mimi", "m_side", "a-idle", "felice");
          var fin = await this.ask({ chips: [{ id: "again", label: "Again!", sub: "Ancora questa storia", cls: "go" }, { id: "more", label: "Another story", sub: "Un'altra storia" }, { id: "home", label: "Home", sub: "Torna a casa" }] });
          if (fin.id === "again") {
            this.startStory(st.id);
            return;
          }
          if (fin.id === "more") {
            var others = STORIES.filter(function(x2) {
              return x2.id !== st.id && self.storyFor(x2);
            });
            this.startStory(pick(others).id);
            return;
          }
          this.goHome();
          return;
        }
      }
    }
    storyFor(st) {
      return !st.who || st.who === this.profile || this.profile === "insieme";
    }
    async stTap(sp) {
      var kid = this.nextTurn(), self = this;
      var targets = sp[2], correct = sp[3], word = sp[4];
      this.meet(word);
      await this.sayP(sp[1], "curiosa");
      var tries = 0;
      for (; ; ) {
        var a2 = await this.ask({ taps: targets, timeout: 15e3 });
        if (a2.type === "timeout") {
          tries++;
          if (correct)
            this.setItem(correct, { hint: true });
          await this.sayP(sp[1], "curiosa");
          if (tries < 3)
            continue;
          a2 = { id: correct };
        }
        if (!correct || a2.id === correct) {
          if (correct)
            this.setItem(correct, { hint: false, anim: "a-hop" });
          if (tries === 0)
            this.word(kid, word, "rec");
          this.star(kid);
          this.pose("mimi", "m_balla", "a-hop", "ride");
          this.cheer();
          if (sp[5])
            await this.sayP(sp[5], "ride");
          this.pose("mimi", "m_side", "a-idle", "felice");
          return;
        }
        tries++;
        var it = this.item(a2.id);
        this.boop();
        await this.sayP(sp[6] || "Quasi! Riprova!", "pensa", { choice: it ? it.label : "" });
        if (tries >= 2 && correct)
          this.setItem(correct, { hint: true });
      }
    }
    async stPin(sp) {
      var kid = this.nextTurn(), cities = sp[2].slice(), correct = sp[3], word = sp[4];
      if (kid === "stella")
        cities = [correct].concat(cities.filter(function(c2) {
          return c2 !== correct;
        }).slice(0, 1));
      var reg = this.item("reg");
      var region = reg ? Object.keys(REGION).find(function(k2) {
        return REGION[k2] === reg.src;
      }) : null;
      this.showMap(region, cities, true);
      this.meet(word);
      await this.sayP(sp[1], "curiosa");
      var tries = 0;
      for (; ; ) {
        var a2 = await this.ask({ taps: cities.map(function(c2) {
          return "pin_" + c2;
        }), timeout: 16e3, voice: kid === "soleil" });
        var id = a2.type === "tap" ? a2.id.slice(4) : null;
        if (a2.type === "voice") {
          var r2 = parseWord(a2.alts, cities.map(function(c2) {
            return { id: c2, en: [c2.toLowerCase(), word.toLowerCase()], it: [c2.toLowerCase()] };
          }));
          id = r2 ? r2.id : null;
          if (!r2) {
            await this.say([IT("Scusa, non ho capito."), EN("Can you show me?")], "confusa");
            continue;
          }
        }
        if (a2.type === "timeout") {
          tries++;
          this.setItem("pin_" + correct, { hint: true });
          await this.sayP(sp[1], "curiosa");
          if (tries < 3)
            continue;
          id = correct;
        }
        if (id === correct) {
          this.setItem("pin_" + correct, { hint: false, anim: "a-hop" });
          if (tries === 0)
            this.word(kid, word, "rec");
          this.star(kid);
          this.cheer();
          this.pose("mimi", "m_balla", "a-hop", "ride");
          await this.sayP(sp[5], "ride");
          this.pose("mimi", "m_side", "a-idle", "felice");
          return;
        }
        tries++;
        this.boop();
        await this.sayP(sp[6], "pensa", { choice: id });
        if (tries >= 1)
          this.setItem("pin_" + correct, { hint: true });
      }
    }
    async stPick(sp) {
      var kid = this.nextTurn(), opts = sp[2], correct = sp[3], word = sp[4];
      this.meet(word);
      await this.sayP(sp[1], "curiosa");
      var chips = shuffle(opts).map(function(o2) {
        return { id: o2[0], label: o2[1], sub: o2[2], img: o2[3] ? IMG[o2[3]] : "", hasSwatch: !!o2[4], swatch: o2[4] || "" };
      });
      var tries = 0;
      for (; ; ) {
        var a2 = await this.ask({ chips, timeout: 18e3, voice: kid === "soleil" });
        var id = a2.type === "chip" ? a2.id : null, lang = null;
        if (a2.type === "voice") {
          var r2 = parseWord(a2.alts, opts.map(function(o2) {
            return { id: o2[0], en: [o2[1].toLowerCase().replace(/^(a|an|the) /, "").replace(/[!.]/g, "")], it: [o2[2].toLowerCase().replace(/^(il |la |lo |l'|un |una )/, "")] };
          }));
          if (!r2) {
            await this.say([IT("Scusa, non ho capito bene."), EN("Can you show me?")], "confusa");
            continue;
          }
          id = r2.id;
          lang = r2.lang;
        }
        if (a2.type === "timeout") {
          tries++;
          await this.sayP(sp[1], "curiosa");
          if (tries < 2)
            continue;
          id = correct;
        }
        var chosen = opts.find(function(o2) {
          return o2[0] === id;
        });
        if (id === correct) {
          this.word(kid, word, lang === "en" ? "said" : tries === 0 ? "rec" : "met");
          this.star(kid);
          this.cheer();
          this.pose("mimi", "m_balla", "a-hop", "ride");
          if (lang === "it")
            await this.say([IT("Hai detto " + chosen[2] + "! In inglese:"), EN(chosen[1])], "felice");
          await this.sayP(sp[5], "ride");
          this.pose("mimi", "m_side", "a-idle", "felice");
          return;
        }
        tries++;
        this.boop();
        this.pose("mimi", "m_front", "a-idle", "pensa");
        await this.sayP(sp[6], "pensa", { choice: chosen ? chosen[2] : "" });
        if (tries >= 2) {
          await this.sayP(sp[5], "felice");
          return;
        }
      }
    }
    async stCount(sp) {
      var kid = this.nextTurn(), self = this, n2 = sp[3], img = sp[2], numW = ["one", "two", "three", "four", "five"];
      var ids = [];
      for (var i2 = 0; i2 < n2; i2++) {
        var id = "cnt" + i2;
        ids.push(id);
        this.addItem({ id, src: IMG[img], x: 40 + i2 * (44 / Math.max(1, n2 - 1)) * (n2 > 1 ? 1 : 0), y: 62 + i2 % 2 * 14, w: 6.5, z: 60 + i2, anim: "a-pop", tapId: id, label: img });
      }
      this.meet(sp[4]);
      this.meet(sp[5]);
      await this.sayP(sp[1] + " [Let's count!]", "felice");
      var count = 0, left = ids.slice();
      while (left.length) {
        var a2 = await this.ask({ taps: left, timeout: 15e3 });
        if (a2.type === "timeout") {
          this.setItem(left[0], { hint: true });
          await this.say([IT("Tocca!"), EN("Touch!")], "curiosa");
          continue;
        }
        left = left.filter(function(x2) {
          return x2 !== a2.id;
        });
        this.setItem(a2.id, { hint: false, anim: "a-hop", hidden: false });
        this.tone(523 + count * 90, 0.18, "triangle", 0, 0.14);
        await this.say([EN(cap(numW[count]) + "!")], "felice");
        count++;
      }
      this.word(kid, sp[4], "rec");
      this.star(kid);
      this.pose("mimi", "m_balla", "a-hop", "ride");
      this.cheer();
      await this.say([EN(cap(numW.slice(0, n2).join(", ")) + "!"), IT("Sono " + ["uno", "due", "tre", "quattro", "cinque"][n2 - 1] + "!")], "ride");
      ids.forEach(function(id2) {
        self.removeItem(id2);
      });
      this.pose("mimi", "m_side", "a-idle", "felice");
    }
    async stAct(sp) {
      this.setTurn(null);
      this.pose("mimi", "m_balla", "a-shake", "ride");
      this.pose("pepe", "p_salta", "a-hop", "contento");
      await this.sayP(sp[1], "ride");
      await this.ask({ chips: [{ id: "done", label: sp[2] || "Done!", sub: "Fatto!", cls: "ok" }], timeout: 12e3 });
      this.cheer();
      this.pose("mimi", "m_side", "a-idle", "felice");
      this.pose("pepe", "p_front", "a-idle");
    }
    startStory(id) {
      this.touch();
      if (this.timeUp()) {
        this.goNight();
        return;
      }
      var st = STORIES.find(function(x2) {
        return x2.id === id;
      });
      if (!st) {
        this.startGame("story");
        return;
      }
      this.stopFlow();
      this.s = this.freshScene();
      this.s.game = "story_" + id;
      this.bump();
      var self = this;
      this.run(async function() {
        await self.runStory(st);
      });
    }
    /* ================= SCUOLA DI BALLO 3D ================= */
    setCanvas(el) {
      if (el && el !== this.canvasEl) {
        this.canvasEl = el;
        if (window.THREE) {
          try {
            this.three = build3D(window.THREE, el);
            this.loop3D();
          } catch (e2) {
            this.three = null;
            this.s.micMsg = "Il 3D non parte su questo dispositivo: uso il ballo 2D.";
          }
        }
      } else if (!el && this.canvasEl) {
        this.stop3D();
      }
    }
    stop3D() {
      if (this.raf)
        cancelAnimationFrame(this.raf);
      this.raf = null;
      if (this.three)
        this.three.dispose();
      this.three = null;
      this.canvasEl = null;
    }
    loop3D() {
      var self = this;
      var tick = function() {
        if (!self.three)
          return;
        var d2 = self.dance || { step: "idle", pstep: "idle", t0: 0, beatMs: 600, speed: 1 };
        var now = performance.now();
        if (!d2.frozen)
          d2.b = (now - d2.t0) / d2.beatMs * (d2.speed || 1);
        var Pm = dancePose(d2.step, d2.b || 0);
        var Pp = dancePose(d2.pstep || d2.step, (d2.frozenP ? (now - d2.t0) / d2.beatMs : d2.b || 0) + (d2.pLag || 0));
        if (d2.pSilly === "fall") {
          Pp.bow = -0.9;
          Pp.hy = -0.08;
        }
        if (d2.pSilly === "wrong")
          Pp.ry = -Pp.ry;
        Pp.tail = d2.frozen ? 0.05 : 1;
        self.three.frame(Pm, Pp, d2.frozen ? d2.fT || 0 : now / 1e3);
        if (d2.frozen && !d2.fT)
          d2.fT = now / 1e3;
        if (!d2.frozen)
          d2.fT = 0;
        self.raf = requestAnimationFrame(tick);
      };
      this.raf = requestAnimationFrame(tick);
    }
    danceSet(step, opts) {
      opts = opts || {};
      var d2 = this.dance || (this.dance = {});
      d2.step = step;
      d2.pstep = opts.pstep || step;
      d2.t0 = performance.now();
      d2.speed = opts.speed || 1;
      d2.beatMs = opts.beatMs || d2.beatMs || 600;
      d2.pSilly = opts.silly || null;
      d2.pLag = opts.lag || 0;
      d2.frozen = false;
      d2.frozenP = false;
      this.s.stepLabel = step === "idle" || step === "bow" ? "" : STEPS[step] ? STEPS[step].en : "";
      this.s.stepSub = STEPS[step] ? STEPS[step].it : "";
      this.bump();
    }
    beatLoop(bpm, melody) {
      this.stopMusic();
      var self = this, beatMs = 6e4 / bpm, i2 = 0, mv = getDevice() === "tv" ? 2 : 1.3;
      var track = bpm === 112 ? "freeze" : melody[0] === 523 ? "baby" : melody[0] === 392 ? "party" : melody[1] === 523 ? "disco" : "tarantella";
      if (this.playTrack(track, function() {
        self.beatSynth(bpm, melody, mv);
      }))
        return beatMs;
      this.beatSynth(bpm, melody, mv);
      return beatMs;
    }
    beatSynth(bpm, melody, mv) {
      var self = this, beatMs = 6e4 / bpm, i2 = 0;
      this.musicT = setInterval(function() {
        var half = i2 % 2, beatN = Math.floor(i2 / 2);
        if (!half) {
          self.tone(70, 0.16, "sine", 0, Math.min(0.5, 0.28 * mv));
        } else
          self.tone(2400, 0.03, "square", 0, 0.025);
        if (beatN % 2 === 1 && !half)
          self.tone(200, 0.08, "triangle", 0, 0.08 * mv);
        self.tone(melody[i2 % melody.length], 0.16, "triangle", 0, 0.09 * mv);
        if (!half)
          self.tone(melody[(i2 + 4) % melody.length] / 2, beatMs / 1e3 * 0.9, "sine", 0, 0.06 * mv);
        i2++;
      }, beatMs / 2);
      return beatMs;
    }
    async countBeats(n2, beatMs, words) {
      for (var i2 = 0; i2 < n2; i2++) {
        this.s.countText = String(i2 % 8 + 1);
        this.bump();
        if (words)
          this.tone(i2 % 4 === 0 ? 1200 : 900, 0.05, "square", 0, 0.05);
        await this.sleep(beatMs);
      }
      this.s.countText = "";
      this.bump();
    }
    async gDance(g2) {
      var s2 = this.s, self = this;
      s2.is3d = true;
      s2.mimi.size = 0;
      s2.pepe.hidden = true;
      s2.wallCls = "bg-room";
      s2.floorCls = "fl-room";
      s2.rug = false;
      this.bump();
      await this.sleep(1300);
      if (!this.three) {
        try {
          var el = document.querySelector("canvas[data-mimi3d]");
          if (el)
            this.setCanvas(el);
        } catch (e2) {
        }
      }
      if (!this.three) {
        s2.is3d = false;
        s2.pepe.hidden = false;
        s2.mimi.size = 40;
        this.bump();
        await this.gDance2D(g2);
        return;
      }
      this.dance = { step: "idle", pstep: "idle", t0: performance.now(), beatMs: 600, speed: 1 };
      var P2 = this.profile;
      await this.say([IT("Benvenute alla scuola di ballo di Mim\xEC e Pepe! Io vi insegno i passi, uno alla volta. Scegliete un ballo!"), EN("Let's dance!")], "felice");
      for (; ; ) {
        this.check(g2);
        await this.maybeEnd();
        var order = P2 === "stella" ? ["baby", "party", "tarantella", "disco"] : P2 === "soleil" ? ["disco", "tarantella", "party", "baby"] : ["party", "baby", "tarantella", "disco"];
        var chips = order.map(function(id) {
          return { id, label: LESSONS[id].title, sub: LESSONS[id].it };
        }).concat([{ id: "freeze", label: "Freeze!", sub: "Balla e fermati" }]);
        chips[0].cls = "go";
        var a2 = await this.ask({ chips });
        if (a2.id === "freeze")
          await this.freeze3D(g2);
        else
          await this.lesson(g2, a2.id);
        this.danceSet("idle");
        await this.say([EN("Another dance?"), IT("Un altro ballo?")], "felice");
      }
    }
    async lesson(g2, id) {
      var L2 = LESSONS[id], self = this, P2 = this.profile;
      var beatMs = 6e4 / L2.bpm;
      if (id === "tarantella")
        await this.say([IT("La tarantella \xE8 un ballo allegro del Sud Italia, si balla in Campania, in Puglia, in Sicilia, con il tamburello!"), EN("Let's dance the tarantella!")], "ride");
      for (var i2 = 0; i2 < L2.steps.length; i2++) {
        this.check(g2);
        var st = L2.steps[i2], S2 = STEPS[st];
        var kid = P2 === "insieme" ? i2 % 2 ? "soleil" : "stella" : null;
        this.setTurn(kid);
        this.meet(S2.en.replace(/[!,]/g, "").toLowerCase());
        this.danceSet(st, { beatMs: beatMs * 1.6, pstep: "idle" });
        await this.say([EN("Step " + ["one", "two", "three", "four"][i2] + ": " + S2.en), IT(S2.it + " Guardate me, piano piano.")], "felice");
        this.danceSet(st, { beatMs: beatMs * 1.6, pstep: "idle" });
        await this.say([EN("One, two, three, four!")], "felice");
        await this.countBeats(4, beatMs * 1.6);
        await this.say([EN(kid ? KIDNAME[kid] + ", your turn! With music!" : "Now with music! Together!"), IT(kid ? "Tocca a te, " + KIDNAME[kid] + "!" : "Adesso tutti insieme!")], "ride");
        var silly = Math.random() < 0.35 ? pick(["fall", "wrong", "late"]) : null;
        this.beatLoop(L2.bpm, L2.melody);
        this.danceSet(st, { beatMs, silly: silly === "late" ? null : silly, lag: silly === "late" ? 0.5 : 0 });
        await this.countBeats(8, beatMs, true);
        this.stopMusic();
        this.danceSet("idle");
        if (silly) {
          var lines = { fall: [IT("Ahahah! Pepe \xE8 caduto!"), EN("Oops, Pepe! Get up!")], wrong: [IT("Pepe, giri dalla parte sbagliata!"), EN("The other way, Pepe!")], late: [IT("Pepe arriva sempre in ritardo!"), EN("Faster, Pepe!")] };
          await this.say(lines[silly], "ride");
          await this.pepe("laugh", "birichino");
        } else
          await this.say(this.praise(kid || (P2 === "insieme" ? "soleil" : P2)), "ride");
        if (kid)
          this.word(kid, S2.en.replace(/[!,]/g, "").toLowerCase(), "rec");
        else
          this.kidList().forEach(function(k2) {
            self.word(k2, S2.en.replace(/[!,]/g, "").toLowerCase(), "met");
          });
      }
      this.setTurn(null);
      await this.say([IT("E adesso\u2026 tutti i passi insieme, uno dopo l'altro! Pronte?"), EN("The whole dance! Ready?")], "ride");
      this.beatLoop(L2.bpm, L2.melody);
      for (var r2 = 0; r2 < L2.steps.length; r2++) {
        var st2 = L2.steps[r2];
        this.danceSet(st2, { beatMs });
        this.speak([EN(STEPS[st2].en)]);
        await this.countBeats(8, beatMs, true);
      }
      this.stopMusic();
      this.danceSet("bow", { beatMs });
      this.burst(40, 40);
      this.burst(60, 40);
      this.kidList().forEach(function(k2) {
        self.star(k2, 2);
      });
      await this.say([EN("Bravo! You are great dancers!"), IT("Siete delle ballerine fantastiche! Un inchino!")], "ride");
    }
    async freeze3D(g2) {
      var s2 = this.s, moves = ["clap", "jump", "arms_up", "march", "wiggle", "turn", "skip"];
      await this.say([IT("Balliamo! Quando la musica si ferma e dico Freeze, tutti immobili come statue!"), EN("Ready?")], "felice");
      for (var r2 = 0; r2 < 6; r2++) {
        this.check(g2);
        var st = pick(moves), bpm = 112, beatMs = 6e4 / bpm;
        var kid = this.profile === "insieme" ? r2 % 2 ? "soleil" : "stella" : null;
        this.setTurn(kid);
        this.beatLoop(bpm, LESSONS.party.melody);
        var silly = Math.random() < 0.3;
        this.danceSet(st, { beatMs });
        this.speak([EN((kid ? KIDNAME[kid] + ", " : "") + STEPS[st].en)]);
        await this.sleep(3e3 + Math.random() * 3e3);
        this.stopMusic();
        this.tone(220, 0.35, "square", 0, 0.08);
        this.dance.frozen = true;
        if (silly) {
          this.dance.pstep = "wiggle";
          this.dance.frozenP = true;
        }
        this.s.stepLabel = "FREEZE!";
        this.s.stepSub = "Fermi tutti!";
        this.bump();
        await this.say([EN("Freeze!"), IT("Fermi tutti!")], "sorpresa");
        if (silly) {
          await this.say([["fx", "laugh"], EN("Pepe! Freeze!"), IT("Pepe, ti muovi ancora!")], "ride");
          await this.pepe("meow", "sorpreso");
        }
        await this.sleep(1500);
      }
      this.danceSet("bow");
      this.burst(50, 40);
      await this.say([EN("Great freezing!"), IT("Che statue bravissime!")], "ride");
    }
    /* ================= VOCE REGISTRATA (ElevenLabs) =================
       Se esiste un audio registrato per la frase lo usa, altrimenti la voce del dispositivo. */
    voiceSpeed() {
      return this.store && this.store.settings.voiceSpeed ? this.store.settings.voiceSpeed : 0.88;
    }
    clipFor(p2) {
      return VOICE && VOICE.clips ? VOICE.clips[p2[0] + "|" + p2[1]] : null;
    }
    playClip(c2) {
      var self = this;
      if (this.stopClip) {
        var prev = this.stopClip;
        this.stopClip = null;
        prev();
      }
      return new Promise(function(resolve) {
        try {
          self.audios = self.audios || {};
          var a2 = self.audios[c2[0]] || (self.audios[c2[0]] = new Audio(VOICE.files[c2[0]]));
          a2.preload = "auto";
          var end = (c2[1] + c2[2]) / 1e3, poll = null, guard = null;
          var done = false, fin = function() {
            if (!done) {
              done = true;
              clearInterval(poll);
              clearTimeout(guard);
              if (self.stopClip === fin)
                self.stopClip = null;
              try {
                a2.pause();
              } catch (e2) {
              }
              resolve();
            }
          };
          self.stopClip = fin;
          var rate = self.voiceSpeed();
          a2.currentTime = c2[1] / 1e3;
          try {
            a2.preservesPitch = true;
            a2.mozPreservesPitch = true;
            a2.webkitPreservesPitch = true;
          } catch (e2) {
          }
          a2.playbackRate = rate;
          var pr = a2.play();
          if (pr && pr.catch)
            pr.catch(fin);
          poll = setInterval(function() {
            if (a2.ended || a2.currentTime >= end - 0.02)
              fin();
          }, 20);
          guard = setTimeout(fin, c2[2] / rate + 2500);
        } catch (e2) {
          resolve();
        }
      });
    }
    /* ================= RENDER ================= */
    renderVals() {
      var self = this, s2 = this.s, st = this.store;
      var actor = function(who) {
        var a2 = s2[who], p2 = POSE[a2.pose] || { f: 0, k: 1 };
        var depth = 0.55 + 0.45 * Math.max(0, Math.min(1, (a2.y - 45) / 52));
        var flip = p2.f === 0 ? 1 : a2.dir === p2.f ? 1 : -1;
        return { x: a2.x, y: a2.y, h: (a2.size * p2.k * depth).toFixed(2), z: Math.round(a2.y) + (who === "mimi" ? 2 : 1), ms: a2.ms, src: IMG[a2.pose], flip, anim: a2.anim, op: a2.hidden ? 0 : 1 };
      };
      var items = s2.items.map(function(it) {
        var tappable = !!(s2.input && it.tapId && s2.taps && s2.taps.indexOf(it.tapId) >= 0 && !it.hidden);
        return {
          x: it.x,
          y: it.y,
          w: it.w,
          z: it.z,
          ms: it.ms,
          src: it.src,
          label: it.label || it.id,
          cls: (it.hidden ? "gone" : "") + (tappable ? " tap" : "") + (it.hint && !it.hidden ? " hint" : ""),
          anim: it.anim || "",
          off: !tappable,
          tap: function() {
            if (it.tapId)
              self.onTap(it.tapId);
          }
        };
      });
      var chips = s2.chips.map(function(c2) {
        return { label: c2.label, sub: c2.sub || "", hasSub: !!c2.sub, cls: c2.cls || "", hasImg: !!c2.img, img: c2.img || "", hasSwatch: !!c2.hasSwatch, swatch: c2.swatch || "#FFFFFF", tap: function() {
          self.lastChip = c2.id;
          self.onChip(c2.id);
        } };
      });
      var prof = this.profile;
      var games = prof ? ORDER[prof].map(function(id, i2) {
        var G = GAMES[id];
        return { title: G.title, sub: G.sub, img: G.img, bg: G.bg, hasTag: i2 < 2, tag: "Consigliato", play: function() {
          self.startGame(id);
        } };
      }) : [];
      var catalog = CATALOG.map(function(c2) {
        var col = c2[3] === "gioca" ? ["#2E8B57", "#FFFFFF", "Gioca"] : c2[3] === "previsto" ? ["#F2C14A", "#3A2418", "Previsto"] : ["#E6DCFA", "#3A2418", "Proposta"];
        return { name: c2[0], who: c2[1], cat: c2[2], bg: col[0], fg: col[1], status: col[2] };
      });
      var worlds = WORLDS.map(function(w2) {
        return { name: w2.name, sub: w2.sub, img: w2.img, status: w2.status, op: w2.on ? 1 : 0.8, chipBg: w2.on ? "#2E8B57" : "#EFE4D6", chipFg: w2.on ? "#FFFFFF" : "#3A2418" };
      });
      var left = Math.max(0, Math.ceil((this.limitMs() - st.usage.ms) / 6e4));
      var speakerFace = s2.speaker === "pepe" ? FACE[s2.pepe.face] : FACE[s2.mimi.face];
      var gate = this.gate;
      var keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "del", "0", "ok"].map(function(k2) {
        return { label: k2 === "del" ? "\u2190" : k2 === "ok" ? "OK" : k2, bg: k2 === "ok" ? "#2E8B57" : "#FFF6EA", fg: k2 === "ok" ? "#FFFFFF" : "#3A2418", tap: function() {
          self.gateKey(k2);
        } };
      });
      var reports = ["stella", "soleil"].map(function(k2) {
        var ws = st.kids[k2].words, keysW = Object.keys(ws);
        var n2 = { met: keysW.length, rec: 0, said: 0, ver: 0 };
        var words = keysW.map(function(w2) {
          var r2 = ws[w2], ver = r2.days.length >= 2;
          if (r2.rec)
            n2.rec++;
          if (r2.said)
            n2.said++;
          if (ver)
            n2.ver++;
          var lvl = ver ? ["#2E8B57", "#FFFFFF", " \u2713\u2713"] : r2.said ? ["#2F5DA8", "#FFFFFF", " \u2713"] : r2.rec ? ["#F2C14A", "#3A2418", ""] : ["#EFE4D6", "#3A2418", ""];
          return { label: w2 + lvl[2], bg: lvl[0], fg: lvl[1], sort: ver ? 3 : r2.said ? 2 : r2.rec ? 1 : 0 };
        }).sort(function(a2, b2) {
          return b2.sort - a2.sort;
        }).slice(0, 60);
        return { name: KIDNAME[k2], met: n2.met, rec: n2.rec, said: n2.said, ver: n2.ver, stars: st.kids[k2].stars, words };
      });
      var lv = this.level();
      var levelBtns = [{ label: "Automatico", v: null }, { label: "1", v: 1 }, { label: "2", v: 2 }, { label: "3", v: 3 }, { label: "4", v: 4 }, { label: "5", v: 5 }].map(function(b2) {
        var on = st.settings.soleilLevel === b2.v;
        return { label: b2.label, bg: on ? "#3A2418" : "#FFF6EA", fg: on ? "#FFFFFF" : "#3A2418", tap: function() {
          st.settings.soleilLevel = b2.v;
          self.save();
          self.bump();
        } };
      });
      var limits = [10, 15, 20, 30].map(function(m2) {
        var on = st.settings.limit === m2;
        return { label: m2 + " min", bg: on ? "#3A2418" : "#FFF6EA", fg: on ? "#FFFFFF" : "#3A2418", tap: function() {
          st.settings.limit = m2;
          self.save();
          self.bump();
        } };
      });
      var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      var turnKid = s2.turn;
      var micMine = s2.input && s2.voiceOk && this.micAllowed() && (prof === "soleil" || prof === "insieme" && turnKid === "soleil");
      return {
        screenName: s2.screen,
        devPhoneCls: getDevice() === "phone" ? "on" : "",
        devTvCls: getDevice() === "tv" ? "on" : "",
        devPhoneOn: getDevice() === "phone" ? "true" : "false",
        devTvOn: getDevice() === "tv" ? "true" : "false",
        showHeader: s2.screen === "home" || s2.screen === "play",
        isStart: s2.screen === "start",
        isHome: s2.screen === "home",
        isPlay: s2.screen === "play",
        isGate: s2.screen === "gate",
        isParents: s2.screen === "parents",
        isNight: s2.screen === "night",
        goHome: function() {
          self.goHome();
        },
        goStart: function() {
          self.goStart();
        },
        goGate: function() {
          self.goGate();
        },
        pickStella: function() {
          self.setProfile("stella");
        },
        setDevPhone: function() {
          setDevice("phone");
          self.bump();
        },
        setDevTv: function() {
          setDevice("tv");
          self.bump();
        },
        pickSoleil: function() {
          self.setProfile("soleil");
        },
        pickInsieme: function() {
          self.setProfile("insieme");
        },
        profileLabel: prof === "insieme" ? "Soleil e Stella" : prof ? KIDNAME[prof] : "Chi gioca?",
        timeLeft: left + " min",
        capFace: speakerFace,
        capWho: s2.speaker === "pepe" ? "Pepe" : "Mim\xEC",
        capRing: s2.speaker === "pepe" ? "#F28C28" : "#D7263D",
        subEn: s2.sub.en,
        subIt: s2.sub.it,
        repeatLast: function() {
          self.repeatLast();
        },
        games,
        catalog,
        worlds,
        playStory: function() {
          self.startGame("story");
        },
        stories: STORIES.filter(function(st2) {
          return self.storyFor(st2);
        }).map(function(st2, i2) {
          return { title: st2.title, en: st2.en, tag: st2.tag, img: IMG[st2.cover], bg: ["#FFF3C4", "#E3F4FF", "#FDE6EE", "#E2F6E6", "#F3E8FF", "#FFE9D6"][i2 % 6], play: function() {
            self.startStory(st2.id);
          } };
        }),
        wallCls: s2.wallCls || "bg-room",
        floorCls: s2.floorCls || "fl-room",
        showRug: !!s2.rug,
        is3d: !!s2.is3d,
        setCanvas: function(el) {
          self.setCanvas(el);
        },
        hasCount: !!s2.countText,
        countText: s2.countText || "",
        hasStep: !!s2.stepLabel,
        stepLabel: s2.stepLabel || "",
        stepSub: s2.stepSub || "",
        stageCls: s2.frozen ? "frozen" : "",
        wallFilter: s2.dim ? "brightness(.55) saturate(.8)" : "none",
        items,
        mimi: actor("mimi"),
        pepe: actor("pepe"),
        bursts: s2.bursts,
        playTitle: s2.playTitle,
        hasTurn: !!s2.turn,
        turnLabel: s2.turn ? "Tocca a " + KIDNAME[s2.turn] : "",
        turnBg: s2.turn === "stella" ? "#D94F86" : "#D9861A",
        hasStars: s2.stars > 0,
        starsNow: s2.stars,
        hasMicMsg: !!s2.micMsg,
        micMsg: s2.micMsg,
        canMic: micMine,
        listen: function() {
          self.listen();
        },
        micLabel: s2.listening ? "Ti ascolto\u2026" : "Parla",
        hasChips: chips.length > 0,
        chips,
        gateA: gate.a,
        gateB: gate.b,
        gateEntry: gate.entry || " ",
        gateWrong: gate.wrong,
        keys,
        gateCancel: function() {
          if (gate.from === "night") {
            self.s.screen = "night";
            self.bump();
          } else if (self.profile)
            self.goHome();
          else
            self.goStart();
        },
        leaveParents: function() {
          self.leaveParents();
        },
        usedMin: Math.floor(st.usage.ms / 6e4),
        limitMin: st.settings.limit + st.usage.extra,
        extraNote: st.usage.extra ? " (inclusi +" + st.usage.extra + " di oggi)" : "",
        limits,
        addTen: function() {
          st.usage.extra += 10;
          self.save();
          self.bump();
        },
        resetToday: function() {
          st.usage.ms = 0;
          st.usage.extra = 0;
          self.save();
          self.bump();
        },
        speeds: [["Molto lenta", 0.78], ["Lenta", 0.88], ["Normale", 1]].map(function(o2) {
          var on = Math.abs((st.settings.voiceSpeed || 0.88) - o2[1]) < 0.01;
          return { label: o2[0], bg: on ? "#3A2418" : "#FFF6EA", fg: on ? "#FFFFFF" : "#3A2418", tap: function() {
            st.settings.voiceSpeed = o2[1];
            self.save();
            self.bump();
            self.speak([EN("Hello Soleil! Hello Stella!")]);
          } };
        }),
        toggleMic: function() {
          st.settings.mic = !st.settings.mic;
          self.save();
          self.bump();
        },
        micToggleLabel: st.settings.mic ? "Microfono acceso \xB7 tocca per spegnere" : "Microfono spento \xB7 tocca per accendere",
        micBtnBg: st.settings.mic ? "#2F5DA8" : "#FFF6EA",
        micBtnFg: st.settings.mic ? "#FFFFFF" : "#3A2418",
        micSupportText: SR ? "Questo browser supporta il riconoscimento vocale (serve il permesso del microfono)." : "Questo browser non supporta il riconoscimento vocale: si gioca toccando.",
        soleilLevel: lv,
        soleilLevelMode: st.settings.soleilLevel ? "scelto da voi" : "automatico",
        levelBtns,
        reports,
        resetLabel: this.resetArmed ? "Sicuri? Tocca di nuovo per azzerare" : "Azzera i progressi",
        resetProgress: function() {
          if (!self.resetArmed) {
            self.resetArmed = true;
            self.bump();
            return;
          }
          st.kids = { stella: blankKid(), soleil: blankKid() };
          self.resetArmed = false;
          self.save();
          self.bump();
        },
        nightEn: s2.nightEn || "",
        nightIt: s2.nightIt || ""
      };
    }
  };
  try {
    M(fe`<${Component} />`, document.getElementById("app"));
    document.getElementById("boot").remove();
  } catch (e2) {
    document.getElementById("boot").textContent = "Errore di avvio: " + e2.message;
    console.error(e2);
  }
})();
