import { getCurrentInstance, toRef, isRef, inject, reactive, effectScope, ref, markRaw, unref, computed, defineComponent, h as h$1, resolveComponent, onServerPrefetch, watch, isReactive, toRaw, getCurrentScope, onScopeDispose, toRefs, nextTick, defineAsyncComponent, version, Suspense, Transition, provide, mergeProps, withCtx, createVNode, shallowRef, useSSRContext, createApp, onErrorCaptured } from 'vue';
import { $fetch as $fetch$1 } from 'ofetch';
import { hash } from 'ohash';
import { createError, sendRedirect } from 'h3';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { hasProtocol, parseURL, joinURL, encodeParam, encodePath, isEqual, withLeadingSlash } from 'ufo';
import { createHead, useHead } from '@unhead/vue';
import { renderDOMHead, debouncedRenderDOMHead } from '@unhead/dom';
import { useRoute, RouterView, createMemoryHistory, createRouter } from 'vue-router';
import { defu } from 'defu';
import Mt from 'store';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense } from 'vue/server-renderer';
import { a as useRuntimeConfig } from '../nitro/node-server.mjs';

const k$1 = getContext("nuxt-app");
function D$1(e2) {
  let o2 = 0;
  const n2 = { provide: void 0, globalName: "nuxt", payload: reactive({ data: {}, state: {}, _errors: {}, serverRendered: true }), static: { data: {} }, isHydrating: false, deferHydration() {
    if (!n2.isHydrating)
      return () => {
      };
    o2++;
    let e3 = false;
    return () => {
      if (!e3)
        return e3 = true, o2--, 0 === o2 ? (n2.isHydrating = false, n2.callHook("app:suspense:resolve")) : void 0;
    };
  }, _asyncDataPromises: {}, _asyncData: {}, ...e2 };
  n2.hooks = createHooks(), n2.hook = n2.hooks.hook, n2.callHook = n2.hooks.callHook, n2.provide = (e3, t2) => {
    const o3 = "$" + e3;
    q$1(n2, o3, t2), q$1(n2.vueApp.config.globalProperties, o3, t2);
  }, q$1(n2.vueApp, "$nuxt", n2), q$1(n2.vueApp.config.globalProperties, "$nuxt", n2), n2.ssrContext && (n2.ssrContext.nuxt = n2), n2.ssrContext = n2.ssrContext || {}, n2.ssrContext.payload && Object.assign(n2.payload, n2.ssrContext.payload), n2.ssrContext.payload = n2.payload, n2.payload.config = { public: e2.ssrContext.runtimeConfig.public, app: e2.ssrContext.runtimeConfig.app };
  const r2 = e2.ssrContext.runtimeConfig, a2 = new Proxy(r2, { get(e3, t2) {
    var o3;
    return "public" === t2 ? e3.public : null != (o3 = e3[t2]) ? o3 : e3.public[t2];
  }, set: (e3, t2, o3) => false });
  return n2.provide("config", a2), n2;
}
async function I$1(e2, t2) {
  if ("function" != typeof t2)
    return;
  const { provide: o2 } = await T$1(e2, t2, [e2]) || {};
  if (o2 && "object" == typeof o2)
    for (const n2 in o2)
      e2.provide(n2, o2[n2]);
}
async function V$1(e2, t2) {
  for (const o2 of t2)
    await I$1(e2, o2);
}
function j$1(e2) {
  return e2.map((e3) => "function" != typeof e3 ? null : e3.length > 1 ? (t2) => e3(t2, t2.provide) : e3).filter(Boolean);
}
function A$1(e2) {
  return e2.__nuxt_plugin = true, e2;
}
function T$1(e2, t2, o2) {
  const n2 = () => o2 ? t2(...o2) : t2();
  return k$1.callAsync(e2, n2);
}
function U$1() {
  const t2 = k$1.tryUse();
  if (!t2) {
    const t3 = getCurrentInstance();
    if (!t3)
      throw new Error("nuxt instance unavailable");
    return t3.appContext.app.$nuxt;
  }
  return t2;
}
function R$1() {
  return U$1().$config;
}
function q$1(e2, t2, o2) {
  Object.defineProperty(e2, t2, { get: () => o2 });
}
const L$1 = () => toRef(U$1().payload, "error"), H$1 = (e2) => {
  const t2 = F$1(e2);
  try {
    U$1().callHook("app:error", t2);
    const e3 = L$1();
    e3.value = e3.value || t2;
  } catch {
    throw t2;
  }
  return t2;
}, F$1 = (e2) => {
  const t2 = createError(e2);
  return t2.__nuxt_error = true, t2;
}, z$1 = () => null;
function B$1(...e2) {
  var t2, o2, s2, i2, c2, l2, u2;
  const p2 = "string" == typeof e2[e2.length - 1] ? e2.pop() : void 0;
  "string" != typeof e2[0] && e2.unshift(p2);
  let [d2, f2, y2 = {}] = e2;
  if ("string" != typeof d2)
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if ("function" != typeof f2)
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  y2.server = null == (t2 = y2.server) || t2, y2.default = null != (o2 = y2.default) ? o2 : z$1, y2.lazy = null != (s2 = y2.lazy) && s2, y2.immediate = null == (i2 = y2.immediate) || i2;
  const v2 = U$1(), h2 = () => v2.isHydrating ? v2.payload.data[d2] : v2.static.data[d2], g2 = () => void 0 !== h2();
  v2._asyncData[d2] || (v2._asyncData[d2] = { data: ref(null != (u2 = null != (l2 = h2()) ? l2 : null == (c2 = y2.default) ? void 0 : c2.call(y2)) ? u2 : null), pending: ref(!g2()), error: ref(v2.payload._errors[d2] ? F$1(v2.payload._errors[d2]) : null) });
  const m2 = { ...v2._asyncData[d2] };
  m2.refresh = m2.execute = (e3 = {}) => {
    if (v2._asyncDataPromises[d2]) {
      if (false === e3.dedupe)
        return v2._asyncDataPromises[d2];
      v2._asyncDataPromises[d2].cancelled = true;
    }
    if (e3._initial && g2())
      return h2();
    m2.pending.value = true;
    const t3 = new Promise((e4, t4) => {
      try {
        e4(f2(v2));
      } catch (o3) {
        t4(o3);
      }
    }).then((e4) => {
      if (t3.cancelled)
        return v2._asyncDataPromises[d2];
      y2.transform && (e4 = y2.transform(e4)), y2.pick && (e4 = function(e5, t4) {
        const o3 = {};
        for (const n2 of t4)
          o3[n2] = e5[n2];
        return o3;
      }(e4, y2.pick)), m2.data.value = e4, m2.error.value = null;
    }).catch((e4) => {
      var o3, n2;
      if (t3.cancelled)
        return v2._asyncDataPromises[d2];
      m2.error.value = e4, m2.data.value = unref(null != (n2 = null == (o3 = y2.default) ? void 0 : o3.call(y2)) ? n2 : null);
    }).finally(() => {
      t3.cancelled || (m2.pending.value = false, v2.payload.data[d2] = m2.data.value, m2.error.value && (v2.payload._errors[d2] = F$1(m2.error.value)), delete v2._asyncDataPromises[d2]);
    });
    return v2._asyncDataPromises[d2] = t3, v2._asyncDataPromises[d2];
  };
  if (false !== y2.server && v2.payload.serverRendered && y2.immediate) {
    const e3 = m2.refresh({ _initial: true });
    onServerPrefetch(() => e3);
  }
  const _2 = Promise.resolve(v2._asyncDataPromises[d2]).then(() => m2);
  return Object.assign(_2, m2), _2;
}
function J$1(...e2) {
  const t2 = "string" == typeof e2[e2.length - 1] ? e2.pop() : void 0;
  "string" != typeof e2[0] && e2.unshift(t2);
  const [n2, r2] = e2;
  if (!n2 || "string" != typeof n2)
    throw new TypeError("[nuxt] [useState] key must be a string: " + n2);
  if (void 0 !== r2 && "function" != typeof r2)
    throw new Error("[nuxt] [useState] init must be a function: " + r2);
  const a2 = "$s" + n2, i2 = U$1(), c2 = toRef(i2.payload.state, a2);
  if (void 0 === c2.value && r2) {
    const e3 = r2();
    if (isRef(e3))
      return i2.payload.state[a2] = e3, e3;
    c2.value = e3;
  }
  return c2;
}
const M$1 = () => {
  var e2;
  return null == (e2 = U$1()) ? void 0 : e2.$router;
}, Y$1 = () => getCurrentInstance() ? inject("_route", U$1()._route) : U$1()._route, G$1 = (e2) => e2, W$1 = (e2, t2) => {
  e2 || (e2 = "/");
  const o2 = "string" == typeof e2 ? e2 : e2.path || "/", n2 = hasProtocol(o2, true);
  if (n2 && !(null == t2 ? void 0 : t2.external))
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  if (n2 && "script:" === parseURL(o2).protocol)
    throw new Error("Cannot navigate to an URL with script protocol.");
  const r2 = M$1();
  {
    const a2 = U$1();
    if (a2.ssrContext && a2.ssrContext.event) {
      const s2 = n2 ? o2 : joinURL(R$1().app.baseURL, r2.resolve(e2).fullPath || "/");
      return a2.callHook("app:redirected").then(() => sendRedirect(a2.ssrContext.event, s2, (null == t2 ? void 0 : t2.redirectCode) || 302));
    }
  }
  return n2 ? ((null == t2 ? void 0 : t2.replace) ? location.replace(o2) : location.href = o2, Promise.resolve()) : (null == t2 ? void 0 : t2.replace) ? r2.replace(e2) : r2.push(e2);
};
function K$1(e2, t2) {
  return U$1()._useHead(e2, t2);
}
function Q$1(e2, o2, n2) {
  const [r2 = {}, s2] = "string" == typeof o2 ? [{}, o2] : [o2, n2], i2 = r2.key || hash([s2, unref(r2.baseURL), "string" == typeof e2 ? e2 : "", unref(r2.params)]);
  if (!i2 || "string" != typeof i2)
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + i2);
  if (!e2)
    throw new Error("[nuxt] [useFetch] request is missing.");
  const l2 = i2 === s2 ? "$f" + i2 : i2, u2 = computed(() => {
    let t2 = e2;
    return "function" == typeof t2 && (t2 = t2()), unref(t2);
  }), { server: p2, lazy: d2, default: f2, transform: y2, pick: v2, watch: h2, immediate: g2, ...m2 } = r2, _2 = reactive({ ...m2, cache: "boolean" == typeof r2.cache ? void 0 : r2.cache });
  let b2;
  return B$1(l2, () => {
    var e3;
    return null == (e3 = null == b2 ? void 0 : b2.abort) || e3.call(b2), b2 = "undefined" != typeof AbortController ? new AbortController() : {}, $fetch(u2.value, { signal: b2.signal, ..._2 });
  }, { server: p2, lazy: d2, default: f2, transform: y2, pick: v2, immediate: g2, watch: [_2, u2, ...h2 || []] });
}
function X$1(e2 = U$1()) {
  var t2;
  return null == (t2 = e2.ssrContext) ? void 0 : t2.event;
}
function Z$1(e2) {
  const t2 = e2.componentName || "NuxtLink";
  return defineComponent({ name: t2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false } }, setup(t3, { slots: o2 }) {
    const r2 = M$1(), a2 = computed(() => t3.to || t3.href || ""), s2 = computed(() => !!t3.external || (!(!t3.target || "_self" === t3.target) || "object" != typeof a2.value && ("" === a2.value || hasProtocol(a2.value, true)))), i2 = ref(false);
    return () => {
      var n2, c2, l2;
      if (!s2.value)
        return h$1(resolveComponent("RouterLink"), { ref: void 0, to: a2.value, ...i2.value && !t3.custom ? { class: t3.prefetchedClass || e2.prefetchedClass } : {}, activeClass: t3.activeClass || e2.activeClass, exactActiveClass: t3.exactActiveClass || e2.exactActiveClass, replace: t3.replace, ariaCurrentValue: t3.ariaCurrentValue, custom: t3.custom }, o2.default);
      const d2 = "object" == typeof a2.value ? null != (c2 = null == (n2 = r2.resolve(a2.value)) ? void 0 : n2.href) ? c2 : null : a2.value || null, f2 = t3.target || null, y2 = t3.noRel ? null : ((...e3) => e3.find((e4) => void 0 !== e4))(t3.rel, e2.externalRelAttribute, d2 ? "noopener noreferrer" : "") || null, v2 = () => W$1(d2, { replace: t3.replace });
      return t3.custom ? o2.default ? o2.default({ href: d2, navigate: v2, route: r2.resolve(d2), rel: y2, target: f2, isExternal: s2.value, isActive: false, isExactActive: false }) : null : h$1("a", { ref: void 0, href: d2, rel: y2, target: f2 }, null == (l2 = o2.default) ? void 0 : l2.call(o2));
    };
  } });
}
const ee$1 = Z$1({ componentName: "NuxtLink" }), te$1 = Object.freeze(Object.defineProperty({ __proto__: null, defineNuxtLink: Z$1, default: ee$1 }, Symbol.toStringTag, { value: "Module" }));
function oe$1(e2) {
  return null !== e2 && "object" == typeof e2;
}
function ne$1(e2, t2, o2 = ".", n2) {
  if (!oe$1(t2))
    return ne$1(e2, {}, o2, n2);
  const r2 = Object.assign({}, t2);
  for (const a2 in e2) {
    if ("__proto__" === a2 || "constructor" === a2)
      continue;
    const t3 = e2[a2];
    null != t3 && (n2 && n2(r2, a2, t3, o2) || (Array.isArray(t3) && Array.isArray(r2[a2]) ? r2[a2] = [...t3, ...r2[a2]] : oe$1(t3) && oe$1(r2[a2]) ? r2[a2] = ne$1(t3, r2[a2], (o2 ? `${o2}.` : "") + a2.toString(), n2) : r2[a2] = t3));
  }
  return r2;
}
var re$1;
const ae$1 = (re$1 = (e2, t2, o2, n2) => {
  if (void 0 !== e2[t2] && "function" == typeof o2)
    return e2[t2] = o2(e2[t2]), true;
}, (...e2) => e2.reduce((e3, t2) => ne$1(e3, t2, "", re$1), {}))({});
function se$1() {
  const e2 = U$1();
  return e2._appConfig || (e2._appConfig = reactive(ae$1)), e2._appConfig;
}
/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let le$1;
const ue$1 = (e2) => le$1 = e2, pe$1 = Symbol();
function de$1(e2) {
  return e2 && "object" == typeof e2 && "[object Object]" === Object.prototype.toString.call(e2) && "function" != typeof e2.toJSON;
}
var fe$1, ye$1;
(ye$1 = fe$1 || (fe$1 = {})).direct = "direct", ye$1.patchObject = "patch object", ye$1.patchFunction = "patch function";
const ve$1 = false;
const qe = () => {
};
function Le(e2, t2, o2, n2 = qe) {
  e2.push(t2);
  const r2 = () => {
    const o3 = e2.indexOf(t2);
    o3 > -1 && (e2.splice(o3, 1), n2());
  };
  return !o2 && getCurrentScope() && onScopeDispose(r2), r2;
}
function He(e2, ...t2) {
  e2.slice().forEach((e3) => {
    e3(...t2);
  });
}
function Fe(e2, t2) {
  e2 instanceof Map && t2 instanceof Map && t2.forEach((t3, o2) => e2.set(o2, t3)), e2 instanceof Set && t2 instanceof Set && t2.forEach(e2.add, e2);
  for (const o2 in t2) {
    if (!t2.hasOwnProperty(o2))
      continue;
    const n2 = t2[o2], r2 = e2[o2];
    de$1(r2) && de$1(n2) && e2.hasOwnProperty(o2) && !isRef(n2) && !isReactive(n2) ? e2[o2] = Fe(r2, n2) : e2[o2] = n2;
  }
  return e2;
}
const ze = Symbol();
const { assign: Be } = Object;
function Je(e2) {
  return !(!isRef(e2) || !e2.effect);
}
function Me(e2, t2, o2, r2) {
  const { state: a2, actions: s2, getters: i2 } = t2, l2 = o2.state.value[e2];
  let u2;
  return u2 = Ye(e2, function() {
    l2 || false || (o2.state.value[e2] = a2 ? a2() : {});
    const t3 = toRefs(o2.state.value[e2]);
    return Be(t3, s2, Object.keys(i2 || {}).reduce((n2, r3) => (n2[r3] = markRaw(computed(() => {
      ue$1(o2);
      const t4 = o2._s.get(e2);
      return i2[r3].call(t4, t4);
    })), n2), {}));
  }, t2, o2, r2, true), u2.$reset = function() {
    const e3 = a2 ? a2() : {};
    this.$patch((t3) => {
      Be(t3, e3);
    });
  }, u2;
}
function Ye(e2, r2, a2 = {}, i2, l2, u2) {
  let p2;
  const m2 = Be({ actions: {} }, a2);
  const _2 = { deep: true };
  let b2, E2;
  let w2, $2 = markRaw([]), O2 = markRaw([]);
  const N2 = i2.state.value[e2];
  u2 || N2 || false || (i2.state.value[e2] = {});
  const P2 = ref({});
  let x2;
  function C2(t2) {
    let o2;
    b2 = E2 = false, "function" == typeof t2 ? (t2(i2.state.value[e2]), o2 = { type: fe$1.patchFunction, storeId: e2, events: w2 }) : (Fe(i2.state.value[e2], t2), o2 = { type: fe$1.patchObject, payload: t2, storeId: e2, events: w2 });
    const n2 = x2 = Symbol();
    nextTick().then(() => {
      x2 === n2 && (b2 = true);
    }), E2 = true, He($2, o2, i2.state.value[e2]);
  }
  const S2 = qe;
  function k2(t2, o2) {
    return function() {
      ue$1(i2);
      const n2 = Array.from(arguments), r3 = [], a3 = [];
      function s2(e3) {
        r3.push(e3);
      }
      function c2(e3) {
        a3.push(e3);
      }
      let l3;
      He(O2, { args: n2, name: t2, store: V2, after: s2, onError: c2 });
      try {
        l3 = o2.apply(this && this.$id === e2 ? this : V2, n2);
      } catch (u3) {
        throw He(a3, u3), u3;
      }
      return l3 instanceof Promise ? l3.then((e3) => (He(r3, e3), e3)).catch((e3) => (He(a3, e3), Promise.reject(e3))) : (He(r3, l3), l3);
    };
  }
  markRaw({ actions: {}, getters: {}, state: [], hotState: P2 }); const I2 = { _p: i2, $id: e2, $onAction: Le.bind(null, O2), $patch: C2, $reset: S2, $subscribe(t2, o2 = {}) {
    const n2 = Le($2, t2, o2.detached, () => r3()), r3 = p2.run(() => watch(() => i2.state.value[e2], (n3) => {
      ("sync" === o2.flush ? E2 : b2) && t2({ storeId: e2, type: fe$1.direct, events: w2 }, n3);
    }, Be({}, _2, o2)));
    return n2;
  }, $dispose: function() {
    p2.stop(), $2 = [], O2 = [], i2._s.delete(e2);
  } }, V2 = reactive(I2);
  i2._s.set(e2, V2);
  const j2 = i2._e.run(() => (p2 = effectScope(), p2.run(() => r2())));
  for (const t2 in j2) {
    const n2 = j2[t2];
    if (isRef(n2) && !Je(n2) || isReactive(n2))
      u2 || (!N2 || de$1(A2 = n2) && A2.hasOwnProperty(ze) || (isRef(n2) ? n2.value = N2[t2] : Fe(n2, N2[t2])), i2.state.value[e2][t2] = n2);
    else if ("function" == typeof n2) {
      const e3 = k2(t2, n2);
      j2[t2] = e3, m2.actions[t2] = n2;
    } else
      ;
  }
  var A2;
  if (Be(V2, j2), Be(toRaw(V2), j2), Object.defineProperty(V2, "$state", { get: () => i2.state.value[e2], set: (e3) => {
    C2((t2) => {
      Be(t2, e3);
    });
  } }), ve$1) ;
  return i2._p.forEach((e3) => {
    Be(V2, p2.run(() => e3({ store: V2, app: i2._a, pinia: i2, options: m2 })));
  }), N2 && u2 && a2.hydrate && a2.hydrate(V2.$state, N2), b2 = true, E2 = true, V2;
}
function Ge(t2, o2, n2) {
  let r2, a2;
  const s2 = "function" == typeof o2;
  function c2(t3, n3) {
    const l2 = getCurrentInstance();
    if ((t3 = (t3) || l2 && inject(pe$1, null)) && ue$1(t3), false)
      ;
    (t3 = le$1)._s.has(r2) || (s2 ? Ye(r2, o2, a2, t3) : Me(r2, a2, t3), false);
    const u2 = t3._s.get(r2);
    return u2;
  }
  return "string" == typeof t2 ? (r2 = t2, a2 = s2 ? n2 : o2) : (a2 = t2, r2 = t2.id), c2.$id = r2, c2;
}
const We = A$1((e2) => {
  const t2 = function() {
    const e3 = effectScope(true), t3 = e3.run(() => ref({}));
    let o2 = [], r2 = [];
    const a2 = markRaw({ install(e4) {
      ue$1(a2), a2._a = e4, e4.provide(pe$1, a2), e4.config.globalProperties.$pinia = a2, r2.forEach((e5) => o2.push(e5)), r2 = [];
    }, use(e4) {
      return this._a ? o2.push(e4) : r2.push(e4), this;
    }, _p: o2, _a: null, _e: e3, _s: /* @__PURE__ */ new Map(), state: t3 });
    return a2;
  }();
  return e2.vueApp.use(t2), ue$1(t2), e2.payload.pinia = t2.state.value, { provide: { pinia: t2 } };
});

const pinia_4d1705f1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  _: ee$1,
  a: G$1,
  b: R$1,
  c: F$1,
  d: A$1,
  e: L$1,
  f: T$1,
  g: J$1,
  h: K$1,
  i: M$1,
  j: We,
  k: Y$1,
  l: j$1,
  m: D$1,
  n: W$1,
  o: V$1,
  p: se$1,
  q: Ge,
  r: X$1,
  s: H$1,
  t: Q$1,
  u: U$1,
  v: te$1
});

var e,t,n,i,l,o,a,s,r,u,d,c,p,m,f,h,v,g,b,x,y,w,_,k,j,U,D,M,T,H,$,A,S,O,I,E,P,z,R,C,L,B,W,N,F,q,K,J,V,Y,G,Q,X,Z,ee,te,ne,ie,le,oe,ae,se,re,ue,de,ce,pe,me,fe,he,ve,ge,be,xe,ye,we,_e,ke;const At=useRuntimeConfig().app,St={Icon:defineAsyncComponent((()=>import('./_nuxt/Icon.1f05ab14.mjs').then((e=>e.default||e))))},Ot=A$1((e=>{for(const t in St)e.vueApp.component(t,St[t]),e.vueApp.component("Lazy"+t,St[t]);}));version.startsWith("2.");const It={meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"},{charset:"utf-8"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"description",content:"AI绘画的辅助工具."},{name:"referrer",content:"never"},{name:'msapplication-TileColor"',content:"#ffffff"},{name:'theme-color"',content:"#ffffff"}],link:[{rel:"icon",type:"image/x-icon",href:"/naifu/dute_favicon_32x32.ico"},{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}],style:[],script:[{src:"https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js",defer:!0}],noscript:[],charset:"utf-8",viewport:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",title:"AI绘画的辅助工具"},Et=!1,Pt=A$1((e=>{const t=function(e){const t=createHead(),n={unhead:t,install(e){version.startsWith("3")&&(e.config.globalProperties.$head=t,e.provide("usehead",t));},resolveTags:()=>t.resolveTags(),headEntries:()=>t.headEntries(),headTags:()=>t.resolveTags(),push:(e,n)=>t.push(e,n),addEntry:(e,n)=>t.push(e,n),addHeadObjs:(e,n)=>t.push(e,n),addReactiveEntry(e,t){const n=useHead(e,t);return void 0!==n?n.dispose:()=>{}},removeHeadObjs(){},updateDOM(e,n){n?renderDOMHead(t,{document:e}):debouncedRenderDOMHead(t,{delayFn:e=>setTimeout((()=>e()),50),document:e});},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=n.addHeadObjs,t.updateDOM=n.updateDOM,t.hooks.hook("dom:beforeRender",(e=>{for(const t of n.hooks["before:dom"])!1===t()&&(e.shouldRender=!1);})),e&&n.addHeadObjs(e),n}();t.push(It),e.vueApp.use(t),e._useHead=useHead,e.ssrContext.renderMeta=async()=>{const{renderSSRHead:e}=await import('@unhead/ssr'),n=await e(t.unhead);return {...n,bodyScriptsPrepend:n.bodyTagsOpen,bodyScripts:n.bodyTags}};})),zt={},Rt={layout:!1},Ct={},Lt={layout:!1},Bt={layout:!1},Wt={},Nt={},Ft={layout:!1},qt={},Kt={},Jt={},Vt={},Yt={},Gt={},Qt={},Xt={layout:!1},Zt={layout:!1},en={},tn={},nn={layout:!1},ln={},on={},an={},sn={},rn={},un={},dn={},cn={},pn={},mn={},fn={},hn={},vn={},gn={},bn={},xn={},yn={},wn={},_n={},kn=[{name:null!=(e=null==zt?void 0:zt.name)?e:"index",path:null!=(t=null==zt?void 0:zt.path)?t:"/",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/index.vue",children:[],meta:zt,alias:(null==zt?void 0:zt.alias)||[],redirect:(null==zt?void 0:zt.redirect)||void 0,component:()=>import('./_nuxt/index.de9e6ed3.mjs').then((e=>e.default||e))},{name:null!=(n=null==Rt?void 0:Rt.name)?n:"mobile-design",path:null!=(i=null==Rt?void 0:Rt.path)?i:"/mobile/design",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/design/index.vue",children:[],meta:Rt,alias:(null==Rt?void 0:Rt.alias)||[],redirect:(null==Rt?void 0:Rt.redirect)||void 0,component:()=>import('./_nuxt/index.51b38290.mjs').then((e=>e.default||e))},{name:null!=(l=null==Ct?void 0:Ct.name)?l:"mobile-draw-components-generateImage",path:null!=(o=null==Ct?void 0:Ct.path)?o:"/mobile/draw/components/generateImage",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/draw/components/generateImage.vue",children:[],meta:Ct,alias:(null==Ct?void 0:Ct.alias)||[],redirect:(null==Ct?void 0:Ct.redirect)||void 0,component:()=>import('./_nuxt/generateImage.1c024636.mjs').then((e=>e.default||e))},{name:null!=(a=null==Lt?void 0:Lt.name)?a:"mobile-draw",path:null!=(s=null==Lt?void 0:Lt.path)?s:"/mobile/draw",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/draw/index.vue",children:[],meta:Lt,alias:(null==Lt?void 0:Lt.alias)||[],redirect:(null==Lt?void 0:Lt.redirect)||void 0,component:()=>import('./_nuxt/index.541e05d4.mjs').then((e=>e.default||e))},{name:null!=(r=null==Bt?void 0:Bt.name)?r:"mobile-home",path:null!=(u=null==Bt?void 0:Bt.path)?u:"/mobile/home",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/home/index.vue",children:[],meta:Bt,alias:(null==Bt?void 0:Bt.alias)||[],redirect:(null==Bt?void 0:Bt.redirect)||void 0,component:()=>import('./_nuxt/index.8a34fc43.mjs').then((e=>e.default||e))},{name:null!=(d=null==Wt?void 0:Wt.name)?d:"mobile-links",path:null!=(c=null==Wt?void 0:Wt.path)?c:"/mobile/links",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/links/index.vue",children:[],meta:Wt,alias:(null==Wt?void 0:Wt.alias)||[],redirect:(null==Wt?void 0:Wt.redirect)||void 0,component:()=>import('./_nuxt/index.d7911224.mjs').then((e=>e.default||e))},{name:null!=(p=null==Nt?void 0:Nt.name)?p:"mobile-login",path:null!=(m=null==Nt?void 0:Nt.path)?m:"/mobile/login",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/login/index.vue",children:[],meta:Nt,alias:(null==Nt?void 0:Nt.alias)||[],redirect:(null==Nt?void 0:Nt.redirect)||void 0,component:()=>import('./_nuxt/index.6b2e76c4.mjs').then((e=>e.default||e))},{name:null!=(f=null==Ft?void 0:Ft.name)?f:"mobile-profile",path:null!=(h=null==Ft?void 0:Ft.path)?h:"/mobile/profile",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/profile/index.vue",children:[],meta:Ft,alias:(null==Ft?void 0:Ft.alias)||[],redirect:(null==Ft?void 0:Ft.redirect)||void 0,component:()=>import('./_nuxt/index.fa7fd439.mjs').then((e=>e.default||e))},{name:null!=(v=null==qt?void 0:qt.name)?v:"mobile-tags-chitu",path:null!=(g=null==qt?void 0:qt.path)?g:"/mobile/tags/chitu",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/tags/chitu.vue",children:[],meta:qt,alias:(null==qt?void 0:qt.alias)||[],redirect:(null==qt?void 0:qt.redirect)||void 0,component:()=>import('./_nuxt/chitu.528aa1ec.mjs').then((e=>e.default||e))},{name:null!=(b=null==Kt?void 0:Kt.name)?b:"mobile-tags-components-eHentai",path:null!=(x=null==Kt?void 0:Kt.path)?x:"/mobile/tags/components/eHentai",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/tags/components/eHentai.vue",children:[],meta:Kt,alias:(null==Kt?void 0:Kt.alias)||[],redirect:(null==Kt?void 0:Kt.redirect)||void 0,component:()=>import('./_nuxt/eHentai.1079c40b.mjs').then((e=>e.default||e))},{name:null!=(y=null==Jt?void 0:Jt.name)?y:"mobile-tags-components-eHentaiMore",path:null!=(w=null==Jt?void 0:Jt.path)?w:"/mobile/tags/components/eHentaiMore",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/tags/components/eHentaiMore.vue",children:[],meta:Jt,alias:(null==Jt?void 0:Jt.alias)||[],redirect:(null==Jt?void 0:Jt.redirect)||void 0,component:()=>import('./_nuxt/eHentaiMore.eb5fe927.mjs').then((e=>e.default||e))},{name:null!=(_=null==Vt?void 0:Vt.name)?_:"mobile-tags-components-gelbooru",path:null!=(k=null==Vt?void 0:Vt.path)?k:"/mobile/tags/components/gelbooru",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/tags/components/gelbooru.vue",children:[],meta:Vt,alias:(null==Vt?void 0:Vt.alias)||[],redirect:(null==Vt?void 0:Vt.redirect)||void 0,component:()=>import('./_nuxt/gelbooru.4df1ad82.mjs').then((e=>e.default||e))},{name:null!=(j=null==Yt?void 0:Yt.name)?j:"mobile-tags-eh",path:null!=(U=null==Yt?void 0:Yt.path)?U:"/mobile/tags/eh",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/tags/eh.vue",children:[],meta:Yt,alias:(null==Yt?void 0:Yt.alias)||[],redirect:(null==Yt?void 0:Yt.redirect)||void 0,component:()=>import('./_nuxt/eh.6e716d33.mjs').then((e=>e.default||e))},{name:null!=(D=null==Gt?void 0:Gt.name)?D:"mobile-tags-gelbooru",path:null!=(M=null==Gt?void 0:Gt.path)?M:"/mobile/tags/gelbooru",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/tags/gelbooru.vue",children:[],meta:Gt,alias:(null==Gt?void 0:Gt.alias)||[],redirect:(null==Gt?void 0:Gt.redirect)||void 0,component:()=>import('./_nuxt/gelbooru.206214ff.mjs').then((e=>e.default||e))},{name:null!=(T=null==Qt?void 0:Qt.name)?T:"mobile-tags",path:null!=(H=null==Qt?void 0:Qt.path)?H:"/mobile/tags",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/tags/index.vue",children:[],meta:Qt,alias:(null==Qt?void 0:Qt.alias)||[],redirect:(null==Qt?void 0:Qt.redirect)||void 0,component:()=>import('./_nuxt/index.ec133e5d.mjs').then((e=>e.default||e))},{name:null!=($=null==Xt?void 0:Xt.name)?$:"mobile-template-nsfw",path:null!=(A=null==Xt?void 0:Xt.path)?A:"/mobile/template/nsfw",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/template/nsfw.vue",children:[],meta:Xt,alias:(null==Xt?void 0:Xt.alias)||[],redirect:(null==Xt?void 0:Xt.redirect)||void 0,component:()=>import('./_nuxt/nsfw.f2f1810f.mjs').then((e=>e.default||e))},{name:null!=(S=null==Zt?void 0:Zt.name)?S:"mobile-template-sfw",path:null!=(O=null==Zt?void 0:Zt.path)?O:"/mobile/template/sfw",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/template/sfw.vue",children:[],meta:Zt,alias:(null==Zt?void 0:Zt.alias)||[],redirect:(null==Zt?void 0:Zt.redirect)||void 0,component:()=>import('./_nuxt/sfw.d92b9835.mjs').then((e=>e.default||e))},{name:null!=(I=null==en?void 0:en.name)?I:"mobile-utils-components-imageAnalysis",path:null!=(E=null==en?void 0:en.path)?E:"/mobile/utils/components/imageAnalysis",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/utils/components/imageAnalysis.vue",children:[],meta:en,alias:(null==en?void 0:en.alias)||[],redirect:(null==en?void 0:en.redirect)||void 0,component:()=>import('./_nuxt/imageAnalysis.d8a655bd.mjs').then((e=>e.default||e))},{name:null!=(P=null==tn?void 0:tn.name)?P:"mobile-utils-components-promptBeautiful",path:null!=(z=null==tn?void 0:tn.path)?z:"/mobile/utils/components/promptBeautiful",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/utils/components/promptBeautiful.vue",children:[],meta:tn,alias:(null==tn?void 0:tn.alias)||[],redirect:(null==tn?void 0:tn.redirect)||void 0,component:()=>import('./_nuxt/promptBeautiful.5e4d2009.mjs').then((e=>e.default||e))},{name:null!=(R=null==nn?void 0:nn.name)?R:"mobile-utils",path:null!=(C=null==nn?void 0:nn.path)?C:"/mobile/utils",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/mobile/utils/index.vue",children:[],meta:nn,alias:(null==nn?void 0:nn.alias)||[],redirect:(null==nn?void 0:nn.redirect)||void 0,component:()=>import('./_nuxt/index.966d9535.mjs').then((e=>e.default||e))},{name:null!=(L=null==ln?void 0:ln.name)?L:"pc-design",path:null!=(B=null==ln?void 0:ln.path)?B:"/pc/design",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/design/index.vue",children:[],meta:ln,alias:(null==ln?void 0:ln.alias)||[],redirect:(null==ln?void 0:ln.redirect)||void 0,component:()=>import('./_nuxt/index.718d9a8d.mjs').then((e=>e.default||e))},{name:null!=(W=null==on?void 0:on.name)?W:"pc-draw-components-generateImage",path:null!=(N=null==on?void 0:on.path)?N:"/pc/draw/components/generateImage",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/draw/components/generateImage.vue",children:[],meta:on,alias:(null==on?void 0:on.alias)||[],redirect:(null==on?void 0:on.redirect)||void 0,component:()=>import('./_nuxt/generateImage.601b5384.mjs').then((e=>e.default||e))},{name:null!=(F=null==an?void 0:an.name)?F:"pc-draw",path:null!=(q=null==an?void 0:an.path)?q:"/pc/draw",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/draw/index.vue",children:[],meta:an,alias:(null==an?void 0:an.alias)||[],redirect:(null==an?void 0:an.redirect)||void 0,component:()=>import('./_nuxt/index.2afbd1a5.mjs').then((e=>e.default||e))},{name:null!=(K=null==sn?void 0:sn.name)?K:"pc-home",path:null!=(J=null==sn?void 0:sn.path)?J:"/pc/home",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/home/index.vue",children:[],meta:sn,alias:(null==sn?void 0:sn.alias)||[],redirect:(null==sn?void 0:sn.redirect)||void 0,component:()=>import('./_nuxt/index.6289b4af.mjs').then((e=>e.default||e))},{name:null!=(V=null==rn?void 0:rn.name)?V:"pc-links",path:null!=(Y=null==rn?void 0:rn.path)?Y:"/pc/links",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/links/index.vue",children:[],meta:rn,alias:(null==rn?void 0:rn.alias)||[],redirect:(null==rn?void 0:rn.redirect)||void 0,component:()=>import('./_nuxt/index.ebfabc33.mjs').then((e=>e.default||e))},{name:null!=(G=null==un?void 0:un.name)?G:"pc-login",path:null!=(Q=null==un?void 0:un.path)?Q:"/pc/login",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/login/index.vue",children:[],meta:un,alias:(null==un?void 0:un.alias)||[],redirect:(null==un?void 0:un.redirect)||void 0,component:()=>import('./_nuxt/index.bd43c7f6.mjs').then((e=>e.default||e))},{name:null!=(X=null==dn?void 0:dn.name)?X:"pc-profile",path:null!=(Z=null==dn?void 0:dn.path)?Z:"/pc/profile",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/profile/index.vue",children:[],meta:dn,alias:(null==dn?void 0:dn.alias)||[],redirect:(null==dn?void 0:dn.redirect)||void 0,component:()=>import('./_nuxt/index.cdc5e4b6.mjs').then((e=>e.default||e))},{name:null!=(ee=null==cn?void 0:cn.name)?ee:"pc-tags-chitu",path:null!=(te=null==cn?void 0:cn.path)?te:"/pc/tags/chitu",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/tags/chitu.vue",children:[],meta:cn,alias:(null==cn?void 0:cn.alias)||[],redirect:(null==cn?void 0:cn.redirect)||void 0,component:()=>import('./_nuxt/chitu.3687a782.mjs').then((e=>e.default||e))},{name:null!=(ne=null==pn?void 0:pn.name)?ne:"pc-tags-components-eHentai",path:null!=(ie=null==pn?void 0:pn.path)?ie:"/pc/tags/components/eHentai",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/tags/components/eHentai.vue",children:[],meta:pn,alias:(null==pn?void 0:pn.alias)||[],redirect:(null==pn?void 0:pn.redirect)||void 0,component:()=>import('./_nuxt/eHentai.e524cd24.mjs').then((e=>e.default||e))},{name:null!=(le=null==mn?void 0:mn.name)?le:"pc-tags-components-eHentaiMore",path:null!=(oe=null==mn?void 0:mn.path)?oe:"/pc/tags/components/eHentaiMore",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/tags/components/eHentaiMore.vue",children:[],meta:mn,alias:(null==mn?void 0:mn.alias)||[],redirect:(null==mn?void 0:mn.redirect)||void 0,component:()=>import('./_nuxt/eHentaiMore.31810972.mjs').then((e=>e.default||e))},{name:null!=(ae=null==fn?void 0:fn.name)?ae:"pc-tags-components-gelbooru",path:null!=(se=null==fn?void 0:fn.path)?se:"/pc/tags/components/gelbooru",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/tags/components/gelbooru.vue",children:[],meta:fn,alias:(null==fn?void 0:fn.alias)||[],redirect:(null==fn?void 0:fn.redirect)||void 0,component:()=>import('./_nuxt/gelbooru.1af24c6e.mjs').then((e=>e.default||e))},{name:null!=(re=null==hn?void 0:hn.name)?re:"pc-tags-eh",path:null!=(ue=null==hn?void 0:hn.path)?ue:"/pc/tags/eh",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/tags/eh.vue",children:[],meta:hn,alias:(null==hn?void 0:hn.alias)||[],redirect:(null==hn?void 0:hn.redirect)||void 0,component:()=>import('./_nuxt/eh.a48b8252.mjs').then((e=>e.default||e))},{name:null!=(de=null==vn?void 0:vn.name)?de:"pc-tags-gelbooru",path:null!=(ce=null==vn?void 0:vn.path)?ce:"/pc/tags/gelbooru",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/tags/gelbooru.vue",children:[],meta:vn,alias:(null==vn?void 0:vn.alias)||[],redirect:(null==vn?void 0:vn.redirect)||void 0,component:()=>import('./_nuxt/gelbooru.03ae2f1d.mjs').then((e=>e.default||e))},{name:null!=(pe=null==gn?void 0:gn.name)?pe:"pc-tags",path:null!=(me=null==gn?void 0:gn.path)?me:"/pc/tags",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/tags/index.vue",children:[],meta:gn,alias:(null==gn?void 0:gn.alias)||[],redirect:(null==gn?void 0:gn.redirect)||void 0,component:()=>import('./_nuxt/index.1339414a.mjs').then((e=>e.default||e))},{name:null!=(fe=null==bn?void 0:bn.name)?fe:"pc-template-nsfw",path:null!=(he=null==bn?void 0:bn.path)?he:"/pc/template/nsfw",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/template/nsfw.vue",children:[],meta:bn,alias:(null==bn?void 0:bn.alias)||[],redirect:(null==bn?void 0:bn.redirect)||void 0,component:()=>import('./_nuxt/nsfw.553c51bf.mjs').then((e=>e.default||e))},{name:null!=(ve=null==xn?void 0:xn.name)?ve:"pc-template-sfw",path:null!=(ge=null==xn?void 0:xn.path)?ge:"/pc/template/sfw",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/template/sfw.vue",children:[],meta:xn,alias:(null==xn?void 0:xn.alias)||[],redirect:(null==xn?void 0:xn.redirect)||void 0,component:()=>import('./_nuxt/sfw.16eb32d5.mjs').then((e=>e.default||e))},{name:null!=(be=null==yn?void 0:yn.name)?be:"pc-utils-components-imageAnalysis",path:null!=(xe=null==yn?void 0:yn.path)?xe:"/pc/utils/components/imageAnalysis",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/utils/components/imageAnalysis.vue",children:[],meta:yn,alias:(null==yn?void 0:yn.alias)||[],redirect:(null==yn?void 0:yn.redirect)||void 0,component:()=>import('./_nuxt/imageAnalysis.a28bf575.mjs').then((e=>e.default||e))},{name:null!=(ye=null==wn?void 0:wn.name)?ye:"pc-utils-components-promptBeautiful",path:null!=(we=null==wn?void 0:wn.path)?we:"/pc/utils/components/promptBeautiful",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/utils/components/promptBeautiful.vue",children:[],meta:wn,alias:(null==wn?void 0:wn.alias)||[],redirect:(null==wn?void 0:wn.redirect)||void 0,component:()=>import('./_nuxt/promptBeautiful.1cafd4df.mjs').then((e=>e.default||e))},{name:null!=(_e=null==_n?void 0:_n.name)?_e:"pc-utils",path:null!=(ke=null==_n?void 0:_n.path)?ke:"/pc/utils",file:"/Users/lilin/Desktop/naifu-nuxt/src/pages/pc/utils/index.vue",children:[],meta:_n,alias:(null==_n?void 0:_n.alias)||[],redirect:(null==_n?void 0:_n.redirect)||void 0,component:()=>import('./_nuxt/index.e0ff9a73.mjs').then((e=>e.default||e))}];function jn(e){try{const t=document.querySelector(e);if(t)return parseFloat(getComputedStyle(t).scrollMarginTop)}catch{}return 0}const Un={...{scrollBehavior(e,t,n){const i=U$1();let l=n||void 0;if(!l&&t&&e&&!1!==e.meta.scrollToTop&&function(e,t){const n=e.matched[0]===t.matched[0];if(!n)return !0;if(n&&JSON.stringify(e.params)!==JSON.stringify(t.params))return !0;return !1}(t,e)&&(l={left:0,top:0}),e.path===t.path){if(t.hash&&!e.hash)return {left:0,top:0};if(e.hash)return {el:e.hash,top:jn(e.hash)}}const o=e=>{var t;return !!(null!=(t=e.meta.pageTransition)?t:Et)},a=o(t)&&o(e)?"page:transition:finish":"page:finish";return new Promise((t=>{i.hooks.hookOnce(a,(async()=>{await nextTick(),e.hash&&(l={el:e.hash,top:jn(e.hash)}),t(l);}));}))}}},Dn=G$1((async e=>{var t;let n,i;if(!(null==(t=e.meta)?void 0:t.validate))return;const l=([n,i]=executeAsync((()=>Promise.resolve(e.meta.validate(e)))),n=await n,i(),n);return "boolean"==typeof l?l:F$1(l)}));let Mn=null;const Tn=(e,t)=>(...n)=>{Mn&&(window.clearTimeout(Mn),Mn=null),Mn=setTimeout((()=>{e.apply(void 0,n),Mn=null;}),t);},Hn=()=>{},$n=[Dn,G$1(((e,t)=>{}))],An={},Sn=A$1((async e=>{var t,n,i,l;let o,a,s=R$1().app.baseURL;Un.hashMode&&!s.includes("#")&&(s+="#");const r=null!=(n=null==(t=Un.history)?void 0:t.call(Un,s))?n:createMemoryHistory(s),u=null!=(l=null==(i=Un.routes)?void 0:i.call(Un,kn))?l:kn,d=e.ssrContext.url,c=createRouter({...Un,history:r,routes:u});e.vueApp.use(c);const p=shallowRef(c.currentRoute.value);c.afterEach(((e,t)=>{p.value=t;})),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>p.value});const m=shallowRef(c.resolve(d)),f=()=>{m.value=c.currentRoute.value;};e.hook("page:finish",f),c.afterEach(((e,t)=>{var n,i,l,o;(null==(i=null==(n=e.matched[0])?void 0:n.components)?void 0:i.default)===(null==(o=null==(l=t.matched[0])?void 0:l.components)?void 0:o.default)&&f();}));const h={};for(const b in m.value)h[b]=computed((()=>m.value[b]));e._route=reactive(h),e._middleware=e._middleware||{global:[],named:{}},L$1();try{[o,a]=executeAsync((()=>c.push(d))),await o,a(),[o,a]=executeAsync((()=>c.isReady())),await o,a();}catch(g){T$1(e,H$1,[g]);}const v=J$1("_layout");return c.beforeEach((async(t,n)=>{var i,l;t.meta=reactive(t.meta),e.isHydrating&&(t.meta.layout=null!=(i=v.value)?i:t.meta.layout),e._processingMiddleware=!0;const o=new Set([...$n,...e._middleware.global]);for(const e of t.matched){const t=e.meta.middleware;if(t)if(Array.isArray(t))for(const e of t)o.add(e);else o.add(t);}for(const a of o){const i="string"==typeof a?e._middleware.named[a]||await(null==(l=An[a])?void 0:l.call(An).then((e=>e.default||e))):a;if(!i)throw new Error(`Unknown route middleware: '${a}'.`);const o=await T$1(e,i,[t,n]);if(!1===o||o instanceof Error){const t=o||createError({statusCode:404,statusMessage:`Page Not Found: ${d}`});return await T$1(e,H$1,[t]),!1}if(o||!1===o)return o}})),c.afterEach((async t=>{if(delete e._processingMiddleware,0===t.matched.length)T$1(e,H$1,[createError({statusCode:404,fatal:!1,statusMessage:`Page not found: ${t.fullPath}`})]);else {const n=t.fullPath||"/";isEqual(n,d)||await T$1(e,W$1,[n]);}})),e.hooks.hookOnce("app:created",(async()=>{try{await c.replace({...c.resolve(d),name:void 0,force:!0});}catch(g){T$1(e,H$1,[g]);}})),{provide:{router:c}}})),On="Sunset",In="ColorScheme",En=A$1((e=>{const t=J$1("color-mode",(()=>reactive({preference:On,value:On,unknown:!0,forced:!1}))).value,n={};K$1({htmlAttrs:n}),M$1().afterEach((e=>{const i=e.meta.colorMode;i&&"system"!==i?(t.value=n["data-color-mode-forced"]=i,n["data-theme"]=t.value,t.forced=!0):"system"===i&&console.warn("You cannot force the colorMode to system at the page level.");})),e.provide("colorMode",t);}));async function Pn(e,t){const n=await async function(e){{const t=(await import('image-meta').then((e=>e.imageMeta)))(await fetch(e).then((e=>e.buffer())));if(!t)throw new Error(`No metadata could be extracted from the image \`${e}\`.`);const{width:n,height:i}=t;return {width:n,height:i,ratio:n&&i?n/i:void 0}}}(t).catch((e=>(console.error("Failed to get image meta for "+t,e+""),{width:0,height:0,ratio:0})));return n}function zn(e=""){return e.split(/[?#]/).shift().split("/").pop().split(".").pop()}function Rn(e){return t=>t?e[t]||t:e.missingValue}function Cn(e=""){return "number"==typeof e?e:"string"==typeof e&&e.replace("px","").match(/^\d+$/g)?parseInt(e,10):void 0}function Ln(e){const t={options:e},n=(e,n={})=>Bn(t,e,n),i=(e,t={},i={})=>n(e,{...i,modifiers:defu(t,i.modifiers||{})}).url;for(const l in e.presets)i[l]=(t,n,o)=>i(t,n,{...e.presets[l],...o});return i.options=e,i.getImage=n,i.getMeta=(e,n)=>async function(e,t,n){const i=Bn(e,t,{...n});return "function"==typeof i.getMeta?await i.getMeta():await Pn(0,i.url)}(t,e,n),i.getSizes=(e,n)=>function(e,t,n){var i,l;const o=Cn(null==(i=n.modifiers)?void 0:i.width),a=Cn(null==(l=n.modifiers)?void 0:l.height),s=o&&a?a/o:0,r=[],u={};if("string"==typeof n.sizes)for(const c of n.sizes.split(/[\s,]+/).filter((e=>e))){const e=c.split(":");2===e.length&&(u[e[0].trim()]=e[1].trim());}else Object.assign(u,n.sizes);for(const c in u){const i=e.options.screens&&e.options.screens[c]||parseInt(c);let l=String(u[c]);const o=l.endsWith("vw");if(!o&&/^\d+$/.test(l)&&(l+="px"),!o&&!l.endsWith("px"))continue;let d=parseInt(l);if(!i||!d)continue;o&&(d=Math.round(d/100*i));const p=s?Math.round(d*s):a;r.push({width:d,size:l,screenMaxWidth:i,media:`(max-width: ${i}px)`,src:e.$img(t,{...n.modifiers,width:d,height:p},n)});}r.sort(((e,t)=>e.screenMaxWidth-t.screenMaxWidth));const d=r[r.length-1];d&&(d.media="");return {sizes:r.map((e=>`${e.media?e.media+" ":""}${e.size}`)).join(", "),srcset:r.map((e=>`${e.src} ${e.width}w`)).join(", "),src:null==d?void 0:d.src}}(t,e,n),t.$img=i,i}function Bn(e,t,n){var i,l;if("string"!=typeof t||""===t)throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return {url:t};const{provider:o,defaults:a}=function(e,t){const n=e.options.providers[t];if(!n)throw new Error("Unknown provider: "+t);return n}(e,n.provider||e.options.provider),s=function(e,t){if(!t)return {};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}(e,n.preset);if(t=hasProtocol(t)?t:withLeadingSlash(t),!o.supportsAlias)for(const c in e.options.alias)t.startsWith(c)&&(t=joinURL(e.options.alias[c],t.substr(c.length)));if(o.validateDomains&&hasProtocol(t)){const n=parseURL(t).host;if(!e.options.domains.find((e=>e===n)))return {url:t}}const r=defu(n,s,a);r.modifiers={...r.modifiers};const u=r.modifiers.format;(null==(i=r.modifiers)?void 0:i.width)&&(r.modifiers.width=Cn(r.modifiers.width)),(null==(l=r.modifiers)?void 0:l.height)&&(r.modifiers.height=Cn(r.modifiers.height));const d=o.getImage(t,r,e);return d.format=d.format||u||"",d}const Wn=function({formatter:e,keyMap:t,joinWith:n="/",valueMap:i}={}){e||(e=(e,t)=>`${e}=${t}`),t&&"function"!=typeof t&&(t=Rn(t));const l=i||{};return Object.keys(l).forEach((e=>{"function"!=typeof l[e]&&(l[e]=Rn(l[e]));})),(i={})=>Object.entries(i).filter((([e,t])=>void 0!==t)).map((([n,o])=>{const a=l[n];return "function"==typeof a&&(o=a(i[n])),n="function"==typeof t?t(n):n,e(n,o)})).join(n)}({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:",",formatter:(e,t)=>encodeParam(e)+"_"+encodeParam(t)}),Nn=Object.freeze(Object.defineProperty({__proto__:null,getImage:(e,{modifiers:t={},baseURL:n}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const l=Wn(t)||"_";return n||(n=joinURL("/","/_ipx")),{url:joinURL(n,l,encodePath(e))}},validateDomains:!0,supportsAlias:!0},Symbol.toStringTag,{value:"Module"})),Fn={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};Fn.providers={ipx:{provider:Nn,defaults:{}}};const qn=A$1((()=>({provide:{img:Ln(Fn)}})));let Kn=[];const Jn=[];const Vn={install(e){e.directive("scroll-to",{mounted(e,t){const n=(document.querySelector(t.value.target)||null).offsetTop||0;Jn.push(n);const i=document.querySelector(t.value.container)||window,l=i.offsetTop||0,o=t.value.behavior||"",a=t.value.time||500,s=t.value.cb||null,r=t.value.syncCb||null;e.addEventListener("click",(()=>{!function(e,t,n,i,l){Kn.forEach((e=>window.cancelAnimationFrame(e))),Kn=[];const o=t.scrollTop;if(o===e)return;let a=null;if("smooth"!==i)return void t.scrollTo({top:e});const s=window.requestAnimationFrame((function i(s){a=a||s;const r=s-a,u=Math.abs((e-o)*r/n);if(o<e?t.scrollTo(0,o+u):t.scrollTo(0,o-u),r<n){const e=window.requestAnimationFrame(i);Kn.push(e);}else t.scrollTo(0,e),l&&l();}));Kn.push(s);}(n-l,i,a,o,r),s&&s();})),i.addEventListener("scroll",Tn((e=>{const t=e.target.scrollTop,n=Jn.findIndex(((e,n)=>{const i=Jn[n-1]?Jn[n-1]:0;return t<=e&&t>=i}));console.log("findIndex :>> ",n),(n||0===n)&&s&&s(n);}),1500));}});}},Yn=(e,t,n)=>{const{direction:i,delay:l,timing:o,duration:a,iteration:s}=t,r=["animate__animated"];i?r.push(`animate__${i}`):r.push("animate__fadeIn"),e.style["animation-duration"]=a?`${a}ms`:"500ms",e.style["animation-delay"]=l?`${l}ms`:"0ms",e.style["animation-iteration-count"]=s?`${o}`:"1",e.style["animation-timing-function"]=o?`${o}`:"linear";const u=`${e.classList.value} ${r.join(" ")}`;e.className=u,e.setAttribute("animate-data",u);},Gn={install:(e,t)=>{e.directive("animate-css",{mounted(e,t){const{value:n,modifiers:i}=t;((e,t,n)=>{const{click:i,hover:l}=n;"string"==typeof t&&(t={classes:t}),i?e.onclick=()=>{Yn(e,t);}:l?e.onmouseover=()=>{Yn(e,t);}:Yn(e,t);})(e,n,i);}});}},Qn=[We,Ot,Pt,Sn,En,qn,A$1((e=>{e.vueApp.use(Vn),e.vueApp.use(Gn);})),A$1((()=>({provide:{store:Mt}})))],Xn=defineComponent({setup:(e,{slots:t})=>()=>{var e;return null==(e=t.default)?void 0:e.call(t)}}),Zn=(e,t,n)=>({default:()=>t?h$1(e,!0===t?{}:t,n):h$1(Xn,{},n)}),ei={default:()=>import('./_nuxt/default.6a636d70.mjs').then((e=>e.default||e)),mobile:()=>import('./_nuxt/mobile.2c724574.mjs').then((e=>e.default||e))},ti=defineComponent({props:{name:String},async setup(e,t){const n=await ei[e.name]().then((e=>e.default||e));return ()=>h$1(n,{},t.slots)}}),ni=defineComponent({props:{name:{type:[String,Boolean,Object],default:null}},setup(e,t){const n=inject("_route"),i=n===Y$1()?useRoute():n,l=computed((()=>{var t,n;return null!=(n=null!=(t=unref(e.name))?t:i.meta.layout)?n:"default"}));return ()=>{var e;const n=l.value&&l.value in ei,o=null!=(e=i.meta.layoutTransition)&&e;return Zn(Transition,n&&o,{default:()=>Zn(ti,n&&{key:l.value,name:l.value,hasTransition:void 0},t.slots).default()}).default()}}}),ii=Object.freeze(Object.defineProperty({__proto__:null,default:ni},Symbol.toStringTag,{value:"Module"})),li=defineComponent({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(e,{slots:t}){const n=function(e){const t=ref(0),n=ref(!1);computed((()=>1e4/e.duration));let i=null,l=null;function o(){s(),t.value=0,n.value=!0,e.throttle;}function a(){t.value=100,r();}function s(){clearInterval(i),clearTimeout(l),i=null,l=null;}function r(){s();}return {progress:t,isLoading:n,start:o,finish:a,clear:s}}({duration:e.duration,throttle:e.throttle}),i=U$1();return i.hook("page:start",n.start),i.hook("page:finish",n.finish),()=>h$1("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${e.height}px`,opacity:n.isLoading.value?1:0,background:e.color,backgroundSize:100/n.progress.value*100+"% auto",transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},t)}});const oi=Object.freeze(Object.defineProperty({__proto__:null,default:li},Symbol.toStringTag,{value:"Module"})),ai=defineComponent({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t}){const n=U$1();return ()=>h$1(RouterView,{name:e.name,route:e.route,...t},{default:t=>{var i,l,o;if(!t.Component)return;const a=((e,t)=>{var n;const i=t.route.matched.find((e=>{var n;return (null==(n=e.components)?void 0:n.default)===t.Component.type})),l=null!=(n=null!=e?e:null==i?void 0:i.meta.key)?n:i&&(o=t.route,i.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,(e=>{var t;return (null==(t=o.params[e.slice(1)])?void 0:t.toString())||""})));var o;return "function"==typeof l?l(t.route):l})(e.pageKey,t),s=n.deferHydration(),r=!!(null!=(l=null!=(i=e.transition)?i:t.route.meta.pageTransition)?l:Et),u=r&&function(e){const t=e.map((e=>({...e,onAfterLeave:si(e.onAfterLeave)})));return defu(...t)}([e.transition,t.route.meta.pageTransition,Et,{onAfterLeave:()=>{n.callHook("page:transition:finish",t.Component);}}].filter(Boolean));return Zn(Transition,r&&u,(null!=(o=e.keepalive)?o:t.route.meta.keepalive,d=h$1(Suspense,{onPending:()=>n.callHook("page:start",t.Component),onResolve:()=>{nextTick((()=>n.callHook("page:finish",t.Component).finally(s)));}},{default:()=>h$1(ri,{key:a,routeProps:t,pageKey:a,hasTransition:r})}),{default:()=>d})).default();var d;}})}});function si(e){return Array.isArray(e)?e:e?[e]:[]}const ri=defineComponent({props:["routeProps","pageKey","hasTransition"],setup(e){const t=e.pageKey,n=e.routeProps.route,i={};for(const l in e.routeProps.route)i[l]=computed((()=>t===e.pageKey?e.routeProps.route[l]:n[l]));return provide("_route",reactive(i)),()=>h$1(e.routeProps.Component)}}),ui=Object.freeze(Object.defineProperty({__proto__:null,default:ai},Symbol.toStringTag,{value:"Module"})),di=(e,t)=>{const n=e.__vccOpts||e;for(const[i,l]of t)n[i]=l;return n},ci={};const pi=ci.setup;ci.setup=(e,t)=>{const n=useSSRContext();return (n.modules||(n.modules=new Set)).add("app.vue"),pi?pi(e,t):void 0};const mi=di(ci,[["ssrRender",function(e,t,n,i){const l=ni,o=li,a=ai;t(`<div${ssrRenderAttrs(mergeProps({class:"stable-app"},i))}>`),t(ssrRenderComponent(l,{name:"default"},{default:withCtx(((e,t,n,i)=>{if(!t)return [createVNode(o),createVNode(a)];t(ssrRenderComponent(o,null,null,n,i)),t(ssrRenderComponent(a,null,null,n,i));})),_:1},n)),t("</div>");}]]),fi={__name:"nuxt-root",__ssrInlineRender:!0,setup(e){const t=defineAsyncComponent((()=>import('./_nuxt/error-component.ba426b69.mjs').then((e=>e.default||e)))),n=U$1();n.deferHydration(),provide("_route",Y$1()),n.hooks.callHookWith((e=>e.map((e=>e()))),"vue:setup");const i=L$1();return onErrorCaptured(((e,t,i)=>{n.hooks.callHook("vue:error",e,t,i).catch((e=>console.error("[nuxt] Error in `vue:error` hook",e))),T$1(n,H$1,[e]);})),(e,n,l,o)=>{ssrRenderSuspense(n,{default:()=>{unref(i)?n(ssrRenderComponent(unref(t),{error:unref(i)},null,l)):n(ssrRenderComponent(unref(mi),null,null,l));},_:1});}}},hi=fi.setup;let vi;fi.setup=(e,t)=>{const n=useSSRContext();return (n.modules||(n.modules=new Set)).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue"),hi?hi(e,t):void 0},globalThis.$fetch||(globalThis.$fetch=$fetch$1.create({baseURL:At.baseURL}));const gi=j$1(Qn);vi=async function(e){const t=createApp(fi),n=D$1({vueApp:t,ssrContext:e});try{await V$1(n,gi),await n.hooks.callHook("app:created",t);}catch(i){await n.callHook("app:error",i),n.payload.error=n.payload.error||i;}return t};const bi=e=>vi(e);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  _: di,
  a: ni,
  b: ui,
  c: In,
  d: Tn,
  'default': bi,
  g: zn,
  i: Hn,
  l: ii,
  n: oi,
  p: Cn
});

export { Cn as C, Ge as G, Hn as H, In as I, J$1 as J, K$1 as K, M$1 as M, Q$1 as Q, R$1 as R, Tn as T, U$1 as U, Y$1 as Y, server as a, di as d, ee$1 as e, ni as n, pinia_4d1705f1 as p, se$1 as s, zn as z };
