import { getCurrentInstance, toRef, isRef, inject, version, reactive, effectScope, ref, markRaw, unref, computed, defineComponent, h, resolveComponent, onServerPrefetch, watch, isReactive, toRaw, getCurrentScope, onScopeDispose, toRefs, nextTick, defineAsyncComponent, Suspense, Transition, provide, mergeProps, withCtx, createVNode, shallowRef, isReadonly, useSSRContext, createApp, onErrorCaptured } from 'vue';
import { $fetch } from 'ofetch';
import { createHead, useHead } from '@unhead/vue';
import { renderDOMHead, debouncedRenderDOMHead } from '@unhead/dom';
import { hash } from 'ohash';
import { createError, sendRedirect } from 'h3';
import { hasProtocol, parseURL, joinURL, encodeParam, isEqual, withLeadingSlash, encodePath } from 'ufo';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { renderSSRHead } from '@unhead/ssr';
import { useRoute, RouterView, createMemoryHistory, createRouter } from 'vue-router';
import { defu } from 'defu';
import ne from 'store';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense } from 'vue/server-renderer';
import { a as useRuntimeConfig } from '../nitro/node-server.mjs';

const A = getContext("nuxt-app"), T = "__nuxt_plugin";
function H(t2) {
  let o2 = 0;
  const n2 = { provide: void 0, globalName: "nuxt", payload: reactive({ data: {}, state: {}, _errors: {}, serverRendered: true }), static: { data: {} }, isHydrating: false, deferHydration() {
    if (!n2.isHydrating)
      return () => {
      };
    o2++;
    let e2 = false;
    return () => {
      if (!e2)
        return e2 = true, o2--, 0 === o2 ? (n2.isHydrating = false, n2.callHook("app:suspense:resolve")) : void 0;
    };
  }, _asyncDataPromises: {}, _asyncData: {}, ...t2 };
  n2.hooks = createHooks(), n2.hook = n2.hooks.hook, n2.callHook = n2.hooks.callHook, n2.provide = (e2, t3) => {
    const o3 = "$" + e2;
    J(n2, o3, t3), J(n2.vueApp.config.globalProperties, o3, t3);
  }, J(n2.vueApp, "$nuxt", n2), J(n2.vueApp.config.globalProperties, "$nuxt", n2), n2.ssrContext && (n2.ssrContext.nuxt = n2), n2.ssrContext = n2.ssrContext || {}, n2.ssrContext.payload && Object.assign(n2.payload, n2.ssrContext.payload), n2.ssrContext.payload = n2.payload, n2.payload.config = { public: t2.ssrContext.runtimeConfig.public, app: t2.ssrContext.runtimeConfig.app };
  const r2 = t2.ssrContext.runtimeConfig, a2 = new Proxy(r2, { get: (e2, t3) => {
    var _a;
    return "public" === t3 ? e2.public : (_a = e2[t3]) != null ? _a : e2.public[t3];
  }, set: (e2, t3, o3) => false });
  return n2.provide("config", a2), n2;
}
async function R(e2, t2) {
  if ("function" != typeof t2)
    return;
  const { provide: o2 } = await F(e2, t2, [e2]) || {};
  if (o2 && "object" == typeof o2)
    for (const n2 in o2)
      e2.provide(n2, o2[n2]);
}
async function U(e2, t2) {
  for (const o2 of t2)
    await R(e2, o2);
}
function q(e2) {
  return e2.map((e3) => "function" != typeof e3 ? null : e3.length > 1 ? (t2) => e3(t2, t2.provide) : e3).filter(Boolean);
}
function L(e2) {
  return e2[T] = true, e2;
}
function F(e2, t2, o2) {
  const n2 = () => o2 ? t2(...o2) : t2();
  return A.callAsync(e2, n2);
}
function M() {
  const e2 = A.tryUse();
  if (!e2) {
    const e3 = getCurrentInstance();
    if (!e3)
      throw new Error("nuxt instance unavailable");
    return e3.appContext.app.$nuxt;
  }
  return e2;
}
function B() {
  return M().$config;
}
function J(e2, t2, o2) {
  Object.defineProperty(e2, t2, { get: () => o2 });
}
const Y = false;
/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let G;
const K = (e2) => G = e2, Q = Symbol();
function X(e2) {
  return e2 && "object" == typeof e2 && "[object Object]" === Object.prototype.toString.call(e2) && "function" != typeof e2.toJSON;
}
var Z, ee;
(ee = Z || (Z = {})).direct = "direct", ee.patchObject = "patch object", ee.patchFunction = "patch function";
const oe = false;
const Ce$1 = () => {
};
function ke$1(e2, t2, o2, n2 = Ce$1) {
  e2.push(t2);
  const r2 = () => {
    const o3 = e2.indexOf(t2);
    o3 > -1 && (e2.splice(o3, 1), n2());
  };
  return !o2 && getCurrentScope() && onScopeDispose(r2), r2;
}
function Se$1(e2, ...t2) {
  e2.slice().forEach((e3) => {
    e3(...t2);
  });
}
function De$1(e2, t2) {
  e2 instanceof Map && t2 instanceof Map && t2.forEach((t3, o2) => e2.set(o2, t3)), e2 instanceof Set && t2 instanceof Set && t2.forEach(e2.add, e2);
  for (const o2 in t2) {
    if (!t2.hasOwnProperty(o2))
      continue;
    const n2 = t2[o2], r2 = e2[o2];
    X(r2) && X(n2) && e2.hasOwnProperty(o2) && !isRef(n2) && !isReactive(n2) ? e2[o2] = De$1(r2, n2) : e2[o2] = n2;
  }
  return e2;
}
const je$1 = Symbol();
const { assign: Ie$1 } = Object;
function Ve$1(e2) {
  return !(!isRef(e2) || !e2.effect);
}
function Ae$1(e2, t2, o2, a2) {
  const { state: s2, actions: i2, getters: c2 } = t2, l2 = o2.state.value[e2];
  let u2;
  return u2 = Te$1(e2, function() {
    l2 || false || (o2.state.value[e2] = s2 ? s2() : {});
    const t3 = toRefs(o2.state.value[e2]);
    return Ie$1(t3, i2, Object.keys(c2 || {}).reduce((n2, a3) => (n2[a3] = markRaw(computed(() => {
      K(o2);
      const t4 = o2._s.get(e2);
      return c2[a3].call(t4, t4);
    })), n2), {}));
  }, t2, o2, a2, true), u2.$reset = function() {
    const e3 = s2 ? s2() : {};
    this.$patch((t3) => {
      Ie$1(t3, e3);
    });
  }, u2;
}
function Te$1(t2, s2, c2 = {}, y2, h2, v2) {
  let g2;
  const m2 = Ie$1({ actions: {} }, c2);
  const _2 = { deep: true };
  let b2, E2;
  let w2, $2 = markRaw([]), O2 = markRaw([]);
  const N2 = y2.state.value[t2];
  v2 || N2 || false || (y2.state.value[t2] = {});
  const P2 = ref({});
  let x2;
  function C2(e2) {
    let o2;
    b2 = E2 = false, "function" == typeof e2 ? (e2(y2.state.value[t2]), o2 = { type: Z.patchFunction, storeId: t2, events: w2 }) : (De$1(y2.state.value[t2], e2), o2 = { type: Z.patchObject, payload: e2, storeId: t2, events: w2 });
    const n2 = x2 = Symbol();
    nextTick().then(() => {
      x2 === n2 && (b2 = true);
    }), E2 = true, Se$1($2, o2, y2.state.value[t2]);
  }
  const k2 = Ce$1;
  function S2(e2, o2) {
    return function() {
      K(y2);
      const n2 = Array.from(arguments), r2 = [], a2 = [];
      let s3;
      Se$1(O2, { args: n2, name: e2, store: I2, after: function(e3) {
        r2.push(e3);
      }, onError: function(e3) {
        a2.push(e3);
      } });
      try {
        s3 = o2.apply(this && this.$id === t2 ? this : I2, n2);
      } catch (i2) {
        throw Se$1(a2, i2), i2;
      }
      return s3 instanceof Promise ? s3.then((e3) => (Se$1(r2, e3), e3)).catch((e3) => (Se$1(a2, e3), Promise.reject(e3))) : (Se$1(r2, s3), s3);
    };
  }
  markRaw({ actions: {}, getters: {}, state: [], hotState: P2 }); const j2 = { _p: y2, $id: t2, $onAction: ke$1.bind(null, O2), $patch: C2, $reset: k2, $subscribe(e2, o2 = {}) {
    const n2 = ke$1($2, e2, o2.detached, () => r2()), r2 = g2.run(() => watch(() => y2.state.value[t2], (n3) => {
      ("sync" === o2.flush ? E2 : b2) && e2({ storeId: t2, type: Z.direct, events: w2 }, n3);
    }, Ie$1({}, _2, o2)));
    return n2;
  }, $dispose: function() {
    g2.stop(), $2 = [], O2 = [], y2._s.delete(t2);
  } }, I2 = reactive(j2);
  y2._s.set(t2, I2);
  const V2 = y2._e.run(() => (g2 = effectScope(), g2.run(() => s2())));
  for (const e2 in V2) {
    const o2 = V2[e2];
    if (isRef(o2) && !Ve$1(o2) || isReactive(o2))
      v2 || (!N2 || X(A2 = o2) && A2.hasOwnProperty(je$1) || (isRef(o2) ? o2.value = N2[e2] : De$1(o2, N2[e2])), y2.state.value[t2][e2] = o2);
    else if ("function" == typeof o2) {
      const t3 = S2(e2, o2);
      V2[e2] = t3, m2.actions[e2] = o2;
    } else
      ;
  }
  var A2;
  if (Ie$1(I2, V2), Ie$1(toRaw(I2), V2), Object.defineProperty(I2, "$state", { get: () => y2.state.value[t2], set: (e2) => {
    C2((t3) => {
      Ie$1(t3, e2);
    });
  } }), oe) ;
  return y2._p.forEach((e2) => {
    Ie$1(I2, g2.run(() => e2({ store: I2, app: y2._a, pinia: y2, options: m2 })));
  }), N2 && v2 && c2.hydrate && c2.hydrate(I2.$state, N2), b2 = true, E2 = true, I2;
}
function He$1(e2, o2, n2) {
  let r2, a2;
  const i2 = "function" == typeof o2;
  function c2(e3, n3) {
    const l2 = getCurrentInstance();
    if ((e3 = (e3) || l2 && inject(Q, null)) && K(e3), false)
      ;
    (e3 = G)._s.has(r2) || (i2 ? Te$1(r2, o2, a2, e3) : Ae$1(r2, a2, e3), false);
    const u2 = e3._s.get(r2);
    return u2;
  }
  return "string" == typeof e2 ? (r2 = e2, a2 = i2 ? n2 : o2) : (a2 = e2, r2 = e2.id), c2.$id = r2, c2;
}
const Re$1 = () => toRef(M().payload, "error"), Ue$1 = (e2) => {
  const t2 = qe$1(e2);
  try {
    M().callHook("app:error", t2);
    const e3 = Re$1();
    e3.value = e3.value || t2;
  } catch {
    throw t2;
  }
  return t2;
}, qe$1 = (e2) => {
  const t2 = createError(e2);
  return t2.__nuxt_error = true, t2;
}, Le$1 = () => null;
function Fe$1(...e2) {
  var _a, _b, _c, _d, _e2, _f;
  var o2;
  const r2 = "string" == typeof e2[e2.length - 1] ? e2.pop() : void 0;
  "string" != typeof e2[0] && e2.unshift(r2);
  let [a2, s2, i2 = {}] = e2;
  if ("string" != typeof a2)
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if ("function" != typeof s2)
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  i2.server = (_a = i2.server) != null ? _a : true, i2.default = (_b = i2.default) != null ? _b : Le$1, i2.lazy = (_c = i2.lazy) != null ? _c : false, i2.immediate = (_d = i2.immediate) != null ? _d : true;
  const l2 = M(), u2 = () => l2.isHydrating ? l2.payload.data[a2] : l2.static.data[a2], p2 = () => void 0 !== u2();
  l2._asyncData[a2] || (l2._asyncData[a2] = { data: ref((_f = (_e2 = u2()) != null ? _e2 : null == (o2 = i2.default) ? void 0 : o2.call(i2)) != null ? _f : null), pending: ref(!p2()), error: ref(l2.payload._errors[a2] ? qe$1(l2.payload._errors[a2]) : null) });
  const d2 = { ...l2._asyncData[a2] };
  d2.refresh = d2.execute = (e3 = {}) => {
    if (l2._asyncDataPromises[a2]) {
      if (false === e3.dedupe)
        return l2._asyncDataPromises[a2];
      l2._asyncDataPromises[a2].cancelled = true;
    }
    if (e3._initial && p2())
      return u2();
    d2.pending.value = true;
    const t2 = new Promise((e4, t3) => {
      try {
        e4(s2(l2));
      } catch (o3) {
        t3(o3);
      }
    }).then((e4) => {
      if (t2.cancelled)
        return l2._asyncDataPromises[a2];
      i2.transform && (e4 = i2.transform(e4)), i2.pick && (e4 = function(e5, t3) {
        const o3 = {};
        for (const n2 of t3)
          o3[n2] = e5[n2];
        return o3;
      }(e4, i2.pick)), d2.data.value = e4, d2.error.value = null;
    }).catch((e4) => {
      var _a2;
      var o3;
      if (t2.cancelled)
        return l2._asyncDataPromises[a2];
      d2.error.value = e4, d2.data.value = unref((_a2 = null == (o3 = i2.default) ? void 0 : o3.call(i2)) != null ? _a2 : null);
    }).finally(() => {
      t2.cancelled || (d2.pending.value = false, l2.payload.data[a2] = d2.data.value, d2.error.value && (l2.payload._errors[a2] = qe$1(d2.error.value)), delete l2._asyncDataPromises[a2]);
    });
    return l2._asyncDataPromises[a2] = t2, l2._asyncDataPromises[a2];
  };
  if (false !== i2.server && l2.payload.serverRendered && i2.immediate) {
    const e3 = d2.refresh({ _initial: true });
    getCurrentInstance() ? onServerPrefetch(() => e3) : l2.hook("app:created", () => e3);
  }
  const f2 = Promise.resolve(l2._asyncDataPromises[a2]).then(() => d2);
  return Object.assign(f2, d2), f2;
}
function Me$1(...e2) {
  const t2 = "string" == typeof e2[e2.length - 1] ? e2.pop() : void 0;
  "string" != typeof e2[0] && e2.unshift(t2);
  const [o2, n2] = e2;
  if (!o2 || "string" != typeof o2)
    throw new TypeError("[nuxt] [useState] key must be a string: " + o2);
  if (void 0 !== n2 && "function" != typeof n2)
    throw new Error("[nuxt] [useState] init must be a function: " + n2);
  const r2 = "$s" + o2, a2 = M(), s2 = toRef(a2.payload.state, r2);
  if (void 0 === s2.value && n2) {
    const e3 = n2();
    if (isRef(e3))
      return a2.payload.state[r2] = e3, e3;
    s2.value = e3;
  }
  return s2;
}
function Be$1(e2 = M()) {
  var t2;
  return null == (t2 = e2.ssrContext) ? void 0 : t2.event;
}
const Je$1 = () => {
  var e2;
  return null == (e2 = M()) ? void 0 : e2.$router;
}, ze$1 = () => getCurrentInstance() ? inject("_route", M()._route) : M()._route, We$1 = (e2) => e2, Ye$1 = (e2, t2) => {
  e2 || (e2 = "/");
  const o2 = "string" == typeof e2 ? e2 : e2.path || "/", n2 = hasProtocol(o2, true);
  if (n2 && !(null == t2 ? void 0 : t2.external))
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  if (n2 && "script:" === parseURL(o2).protocol)
    throw new Error("Cannot navigate to an URL with script protocol.");
  const r2 = Je$1();
  {
    const a2 = M();
    if (a2.ssrContext && a2.ssrContext.event) {
      if ((() => {
        try {
          if (M()._processingMiddleware)
            return true;
        } catch {
          return true;
        }
        return false;
      })() && !n2)
        return function(e3, t3) {
          const o3 = Be$1();
          o3 && (o3.node.res.statusCode = e3, t3 && (o3.node.res.statusMessage = t3));
        }((null == t2 ? void 0 : t2.redirectCode) || 302), e2;
      const s2 = n2 ? o2 : joinURL(B().app.baseURL, r2.resolve(e2).fullPath || "/");
      return a2.callHook("app:redirected").then(() => sendRedirect(a2.ssrContext.event, s2, (null == t2 ? void 0 : t2.redirectCode) || 302));
    }
  }
  return n2 ? ((null == t2 ? void 0 : t2.replace) ? location.replace(o2) : location.href = o2, Promise.resolve()) : (null == t2 ? void 0 : t2.replace) ? r2.replace(e2) : r2.push(e2);
};
function Ge$1(e2) {
  const t2 = createHead(), o2 = { unhead: t2, install(e3) {
    version.startsWith("3") && (e3.config.globalProperties.$head = t2, e3.provide("usehead", t2));
  }, use(e3) {
    t2.use(e3);
  }, resolveTags: () => t2.resolveTags(), headEntries: () => t2.headEntries(), headTags: () => t2.resolveTags(), push: (e3, o3) => t2.push(e3, o3), addEntry: (e3, o3) => t2.push(e3, o3), addHeadObjs: (e3, o3) => t2.push(e3, o3), addReactiveEntry(e3, t3) {
    const o3 = useHead(e3, t3);
    return void 0 !== o3 ? o3.dispose : () => {
    };
  }, removeHeadObjs() {
  }, updateDOM(e3, o3) {
    o3 ? renderDOMHead(t2, { document: e3 }) : debouncedRenderDOMHead(t2, { delayFn: (e4) => setTimeout(() => e4(), 50), document: e3 });
  }, internalHooks: t2.hooks, hooks: { "before:dom": [], "resolved:tags": [], "resolved:entries": [] } };
  return t2.addHeadObjs = o2.addHeadObjs, t2.updateDOM = o2.updateDOM, t2.hooks.hook("dom:beforeRender", (e3) => {
    for (const t3 of o2.hooks["before:dom"])
      false === t3() && (e3.shouldRender = false);
  }), e2 && o2.addHeadObjs(e2), o2;
}
function Ke$1(e2, t2) {
  return M()._useHead(e2, t2);
}
function Qe$1(t2, o2, n2) {
  const [r2 = {}, a2] = "string" == typeof o2 ? [{}, o2] : [o2, n2], s2 = r2.key || hash([a2, unref(r2.baseURL), "string" == typeof t2 ? t2 : "", unref(r2.params || r2.query)]);
  if (!s2 || "string" != typeof s2)
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + s2);
  if (!t2)
    throw new Error("[nuxt] [useFetch] request is missing.");
  const i2 = s2 === a2 ? "$f" + s2 : s2, l2 = computed(() => {
    let e2 = t2;
    return "function" == typeof e2 && (e2 = e2()), unref(e2);
  }), { server: u2, lazy: p2, default: d2, transform: y2, pick: h2, watch: v2, immediate: g2, ...m2 } = r2, _2 = reactive({ ...m2, cache: "boolean" == typeof r2.cache ? void 0 : r2.cache });
  let b2;
  return Fe$1(i2, () => {
    var e2;
    null == (e2 = null == b2 ? void 0 : b2.abort) || e2.call(b2), b2 = "undefined" != typeof AbortController ? new AbortController() : {};
    const t3 = "string" == typeof l2.value && l2.value.startsWith("/");
    let o3 = r2.$fetch || globalThis.$fetch;
    return !r2.$fetch && t3 && (o3 = function() {
      var e3;
      const t4 = null == (e3 = M().ssrContext) ? void 0 : e3.event;
      return (null == t4 ? void 0 : t4.$fetch) || globalThis.$fetch;
    }()), o3(l2.value, { signal: b2.signal, ..._2 });
  }, { server: u2, lazy: p2, default: d2, transform: y2, pick: h2, immediate: g2, watch: [_2, l2, ...v2 || []] });
}
version.startsWith("2.");
const Xe$1 = (...e2) => e2.find((e3) => void 0 !== e3), Ze$1 = "noopener noreferrer";
function et$1(e2) {
  const t2 = e2.componentName || "NuxtLink";
  return defineComponent({ name: t2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false } }, setup(t3, { slots: o2 }) {
    const r2 = Je$1(), a2 = computed(() => t3.to || t3.href || ""), s2 = computed(() => !!t3.external || (!(!t3.target || "_self" === t3.target) || "object" != typeof a2.value && ("" === a2.value || hasProtocol(a2.value, true)))), i2 = ref(false);
    return () => {
      var _a;
      var n2, c2;
      if (!s2.value)
        return h(resolveComponent("RouterLink"), { ref: void 0, to: a2.value, ...i2.value && !t3.custom ? { class: t3.prefetchedClass || e2.prefetchedClass } : {}, activeClass: t3.activeClass || e2.activeClass, exactActiveClass: t3.exactActiveClass || e2.exactActiveClass, replace: t3.replace, ariaCurrentValue: t3.ariaCurrentValue, custom: t3.custom }, o2.default);
      const l2 = "object" == typeof a2.value ? (_a = null == (n2 = r2.resolve(a2.value)) ? void 0 : n2.href) != null ? _a : null : a2.value || null, u2 = t3.target || null, p2 = t3.noRel ? null : Xe$1(t3.rel, e2.externalRelAttribute, l2 ? Ze$1 : "") || null, d2 = () => Ye$1(l2, { replace: t3.replace });
      return t3.custom ? o2.default ? o2.default({ href: l2, navigate: d2, route: r2.resolve(l2), rel: p2, target: u2, isExternal: s2.value, isActive: false, isExactActive: false }) : null : h("a", { ref: void 0, href: l2, rel: p2, target: u2 }, null == (c2 = o2.default) ? void 0 : c2.call(o2));
    };
  } });
}
const tt$1 = et$1({ componentName: "NuxtLink" });
function ot$1(e2) {
  return null !== e2 && "object" == typeof e2;
}
function nt$1(e2, t2, o2 = ".", n2) {
  if (!ot$1(t2))
    return nt$1(e2, {}, o2, n2);
  const r2 = Object.assign({}, t2);
  for (const a2 in e2) {
    if ("__proto__" === a2 || "constructor" === a2)
      continue;
    const t3 = e2[a2];
    null != t3 && (n2 && n2(r2, a2, t3, o2) || (Array.isArray(t3) && Array.isArray(r2[a2]) ? r2[a2] = [...t3, ...r2[a2]] : ot$1(t3) && ot$1(r2[a2]) ? r2[a2] = nt$1(t3, r2[a2], (o2 ? `${o2}.` : "") + a2.toString(), n2) : r2[a2] = t3));
  }
  return r2;
}
var rt$1;
const at$1 = (rt$1 = (e2, t2, o2) => {
  if (void 0 !== e2[t2] && "function" == typeof o2)
    return e2[t2] = o2(e2[t2]), true;
}, (...e2) => e2.reduce((e3, t2) => nt$1(e3, t2, "", rt$1), {}))({});
function st$1() {
  const t2 = M();
  return t2._appConfig || (t2._appConfig = reactive(at$1)), t2._appConfig;
}
const it$1 = L((e2) => {
  const t2 = function() {
    const e3 = effectScope(true), t3 = e3.run(() => ref({}));
    let a2 = [], s2 = [];
    const i2 = markRaw({ install(e4) {
      K(i2), i2._a = e4, e4.provide(Q, i2), e4.config.globalProperties.$pinia = i2, s2.forEach((e5) => a2.push(e5)), s2 = [];
    }, use(e4) {
      return this._a || Y ? a2.push(e4) : s2.push(e4), this;
    }, _p: a2, _a: null, _e: e3, _s: /* @__PURE__ */ new Map(), state: t3 });
    return i2;
  }();
  return e2.vueApp.use(t2), K(t2), e2.payload.pinia = t2.state.value, { provide: { pinia: t2 } };
});

const le=useRuntimeConfig().app,se={Icon:defineAsyncComponent((()=>import('./_nuxt/Icon-0b140c3a.mjs').then((e=>e.default||e)))),IconCSS:defineAsyncComponent((()=>import('./_nuxt/IconCSS-4039d78c.mjs').then((e=>e.default||e))))},ue=L((e=>{for(const t in se)e.vueApp.component(t,se[t]),e.vueApp.component("Lazy"+t,se[t]);})),de={meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"},{charset:"utf-8"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"description",content:"AI绘画的辅助工具."},{name:"referrer",content:"never"},{name:'msapplication-TileColor"',content:"#ffffff"},{name:'theme-color"',content:"#ffffff"}],link:[{rel:"icon",type:"image/x-icon",href:"/naifu/dute_favicon_32x32.ico"},{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}],style:[],script:[{src:"https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js",defer:!0}],noscript:[],charset:"utf-8",viewport:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",title:"AI绘画的辅助工具"},ce=!1,me=L((e=>{const t=Ge$1();t.push(de),e.vueApp.use(t),e._useHead=useHead,e.ssrContext.renderMeta=async()=>{const e=await renderSSRHead(t.unhead);return {...e,bodyScriptsPrepend:e.bodyTagsOpen,bodyScripts:e.bodyTags}};})),pe={layout:!1},he={layout:!1},fe={layout:!1},ve={layout:!1},ge={layout:!1},ye={layout:!1},we={layout:!1},xe={layout:!1},be={layout:!1},_e={layout:!1},je={layout:!1},ke={layout:!1},Ae={layout:!1},$e=[{name:"index",path:"/",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/index-664c91a3.mjs').then((e=>e.default||e))},{name:(null==pe?void 0:pe.name)??"mobile-design",path:(null==pe?void 0:pe.path)??"/mobile/design",children:[],meta:pe||{},alias:(null==pe?void 0:pe.alias)||[],redirect:(null==pe?void 0:pe.redirect)||void 0,component:()=>import('./_nuxt/index-7f62e4ab.mjs').then((e=>e.default||e))},{name:"mobile-draw-components-generateImage",path:"/mobile/draw/components/generateImage",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/generateImage-e54f5f6a.mjs').then((e=>e.default||e))},{name:(null==he?void 0:he.name)??"mobile-draw",path:(null==he?void 0:he.path)??"/mobile/draw",children:[],meta:he||{},alias:(null==he?void 0:he.alias)||[],redirect:(null==he?void 0:he.redirect)||void 0,component:()=>import('./_nuxt/index-dcb30021.mjs').then((e=>e.default||e))},{name:(null==fe?void 0:fe.name)??"mobile-home",path:(null==fe?void 0:fe.path)??"/mobile/home",children:[],meta:fe||{},alias:(null==fe?void 0:fe.alias)||[],redirect:(null==fe?void 0:fe.redirect)||void 0,component:()=>import('./_nuxt/index-7b2b51f7.mjs').then((e=>e.default||e))},{name:(null==ve?void 0:ve.name)??"mobile-links",path:(null==ve?void 0:ve.path)??"/mobile/links",children:[],meta:ve||{},alias:(null==ve?void 0:ve.alias)||[],redirect:(null==ve?void 0:ve.redirect)||void 0,component:()=>import('./_nuxt/index-e57b001f.mjs').then((e=>e.default||e))},{name:(null==ge?void 0:ge.name)??"mobile-login",path:(null==ge?void 0:ge.path)??"/mobile/login",children:[],meta:ge||{},alias:(null==ge?void 0:ge.alias)||[],redirect:(null==ge?void 0:ge.redirect)||void 0,component:()=>import('./_nuxt/index-c2d9f418.mjs').then((e=>e.default||e))},{name:(null==ye?void 0:ye.name)??"mobile-profile",path:(null==ye?void 0:ye.path)??"/mobile/profile",children:[],meta:ye||{},alias:(null==ye?void 0:ye.alias)||[],redirect:(null==ye?void 0:ye.redirect)||void 0,component:()=>import('./_nuxt/index-b42f66a4.mjs').then((e=>e.default||e))},{name:(null==we?void 0:we.name)??"mobile-tags-chitu",path:(null==we?void 0:we.path)??"/mobile/tags/chitu",children:[],meta:we||{},alias:(null==we?void 0:we.alias)||[],redirect:(null==we?void 0:we.redirect)||void 0,component:()=>import('./_nuxt/chitu-2ace15b8.mjs').then((e=>e.default||e))},{name:"mobile-tags-components-eHentai",path:"/mobile/tags/components/eHentai",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/eHentai-2d8d5c3f.mjs').then((e=>e.default||e))},{name:"mobile-tags-components-eHentaiMore",path:"/mobile/tags/components/eHentaiMore",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/eHentaiMore-b456974d.mjs').then((e=>e.default||e))},{name:"mobile-tags-components-gelbooru",path:"/mobile/tags/components/gelbooru",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/gelbooru-50606971.mjs').then((e=>e.default||e))},{name:(null==xe?void 0:xe.name)??"mobile-tags-eh",path:(null==xe?void 0:xe.path)??"/mobile/tags/eh",children:[],meta:xe||{},alias:(null==xe?void 0:xe.alias)||[],redirect:(null==xe?void 0:xe.redirect)||void 0,component:()=>import('./_nuxt/eh-12685ed6.mjs').then((e=>e.default||e))},{name:(null==be?void 0:be.name)??"mobile-tags-gelbooru",path:(null==be?void 0:be.path)??"/mobile/tags/gelbooru",children:[],meta:be||{},alias:(null==be?void 0:be.alias)||[],redirect:(null==be?void 0:be.redirect)||void 0,component:()=>import('./_nuxt/gelbooru-0e64640c.mjs').then((e=>e.default||e))},{name:(null==_e?void 0:_e.name)??"mobile-tags",path:(null==_e?void 0:_e.path)??"/mobile/tags",children:[],meta:_e||{},alias:(null==_e?void 0:_e.alias)||[],redirect:(null==_e?void 0:_e.redirect)||void 0,component:()=>import('./_nuxt/index-981777e7.mjs').then((e=>e.default||e))},{name:(null==je?void 0:je.name)??"mobile-template-nsfw",path:(null==je?void 0:je.path)??"/mobile/template/nsfw",children:[],meta:je||{},alias:(null==je?void 0:je.alias)||[],redirect:(null==je?void 0:je.redirect)||void 0,component:()=>import('./_nuxt/nsfw-dfd4f5fd.mjs').then((e=>e.default||e))},{name:(null==ke?void 0:ke.name)??"mobile-template-sfw",path:(null==ke?void 0:ke.path)??"/mobile/template/sfw",children:[],meta:ke||{},alias:(null==ke?void 0:ke.alias)||[],redirect:(null==ke?void 0:ke.redirect)||void 0,component:()=>import('./_nuxt/sfw-658ef39a.mjs').then((e=>e.default||e))},{name:"mobile-utils-components-imageAnalysis",path:"/mobile/utils/components/imageAnalysis",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/imageAnalysis-890aafd6.mjs').then((e=>e.default||e))},{name:"mobile-utils-components-promptBeautiful",path:"/mobile/utils/components/promptBeautiful",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/promptBeautiful-2023cbc9.mjs').then((e=>e.default||e))},{name:(null==Ae?void 0:Ae.name)??"mobile-utils",path:(null==Ae?void 0:Ae.path)??"/mobile/utils",children:[],meta:Ae||{},alias:(null==Ae?void 0:Ae.alias)||[],redirect:(null==Ae?void 0:Ae.redirect)||void 0,component:()=>import('./_nuxt/index-48f03e53.mjs').then((e=>e.default||e))},{name:"pc-design",path:"/pc/design",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/index-c8595d88.mjs').then((e=>e.default||e))},{name:"pc-draw-components-generateImage",path:"/pc/draw/components/generateImage",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/generateImage-484ce1d3.mjs').then((e=>e.default||e))},{name:"pc-draw",path:"/pc/draw",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/index-defc8dfe.mjs').then((e=>e.default||e))},{name:"pc-home",path:"/pc/home",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/index-c2a9814a.mjs').then((e=>e.default||e))},{name:"pc-links",path:"/pc/links",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/index-2f69a50c.mjs').then((e=>e.default||e))},{name:"pc-login",path:"/pc/login",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/index-2a160608.mjs').then((e=>e.default||e))},{name:"pc-profile",path:"/pc/profile",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/index-36827eb0.mjs').then((e=>e.default||e))},{name:"pc-tags-chitu",path:"/pc/tags/chitu",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/chitu-42091db4.mjs').then((e=>e.default||e))},{name:"pc-tags-components-eHentai",path:"/pc/tags/components/eHentai",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/eHentai-66500bc7.mjs').then((e=>e.default||e))},{name:"pc-tags-components-eHentaiMore",path:"/pc/tags/components/eHentaiMore",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/eHentaiMore-1ddbb532.mjs').then((e=>e.default||e))},{name:"pc-tags-components-gelbooru",path:"/pc/tags/components/gelbooru",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/gelbooru-6e37a240.mjs').then((e=>e.default||e))},{name:"pc-tags-eh",path:"/pc/tags/eh",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/eh-0692a6ad.mjs').then((e=>e.default||e))},{name:"pc-tags-gelbooru",path:"/pc/tags/gelbooru",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/gelbooru-e6059ca9.mjs').then((e=>e.default||e))},{name:"pc-tags",path:"/pc/tags",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/index-8c1c7807.mjs').then((e=>e.default||e))},{name:"pc-template-nsfw",path:"/pc/template/nsfw",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/nsfw-63099175.mjs').then((e=>e.default||e))},{name:"pc-template-sfw",path:"/pc/template/sfw",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/sfw-1024f486.mjs').then((e=>e.default||e))},{name:"pc-utils-components-imageAnalysis",path:"/pc/utils/components/imageAnalysis",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/imageAnalysis-1a315aa7.mjs').then((e=>e.default||e))},{name:"pc-utils-components-promptBeautiful",path:"/pc/utils/components/promptBeautiful",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/promptBeautiful-28ed9c55.mjs').then((e=>e.default||e))},{name:"pc-utils",path:"/pc/utils",children:[],meta:{},alias:[],redirect:void 0,component:()=>import('./_nuxt/index-f887024f.mjs').then((e=>e.default||e))}];function Me(e){try{const t=document.querySelector(e);if(t)return parseFloat(getComputedStyle(t).scrollMarginTop)}catch{}return 0}const Te={...{scrollBehavior(e,o,n){const a=M();let i=n||void 0;if(!i&&o&&e&&!1!==e.meta.scrollToTop&&function(e,t){const o=e.matched[0]===t.matched[0];if(!o)return !0;if(o&&JSON.stringify(e.params)!==JSON.stringify(t.params))return !0;return !1}(o,e)&&(i={left:0,top:0}),e.path===o.path){if(o.hash&&!e.hash)return {left:0,top:0};if(e.hash)return {el:e.hash,top:Me(e.hash)}}const r=e=>!!(e.meta.pageTransition??ce),l=r(o)&&r(e)?"page:transition:finish":"page:finish";return new Promise((o=>{a.hooks.hookOnce(l,(async()=>{await nextTick(),e.hash&&(i={el:e.hash,top:Me(e.hash)}),o(i);}));}))}}},Ie=We$1((async e=>{var t;let o,n;if(!(null==(t=e.meta)?void 0:t.validate))return;M(),Je$1();const a=([o,n]=executeAsync((()=>Promise.resolve(e.meta.validate(e)))),o=await o,n(),o);return !0!==a?a:void 0}));let Se=null;const He=(e,t)=>(...o)=>{Se&&(window.clearTimeout(Se),Se=null),Se=setTimeout((()=>{e.apply(void 0,o),Se=null;}),t);},Ce=()=>{},Ee=[Ie,We$1(((e,t)=>{}))],Le={},Pe=L((async e=>{var t,r;let l,s,u=B().app.baseURL;Te.hashMode&&!u.includes("#")&&(u+="#");const d=(null==(t=Te.history)?void 0:t.call(Te,u))??createMemoryHistory(u),c=(null==(r=Te.routes)?void 0:r.call(Te,$e))??$e,m=e.ssrContext.url,p=createRouter({...Te,history:d,routes:c});e.vueApp.use(p);const h=shallowRef(p.currentRoute.value);p.afterEach(((e,t)=>{h.value=t;})),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>h.value});const f=shallowRef(p.resolve(m)),v=()=>{f.value=p.currentRoute.value;};e.hook("page:finish",v),p.afterEach(((e,t)=>{var o,n,a,i;(null==(n=null==(o=e.matched[0])?void 0:o.components)?void 0:n.default)===(null==(i=null==(a=t.matched[0])?void 0:a.components)?void 0:i.default)&&v();}));const g={};for(const o in f.value)g[o]=computed((()=>f.value[o]));e._route=reactive(g),e._middleware=e._middleware||{global:[],named:{}},Re$1();try{[l,s]=executeAsync((()=>p.push(m))),await l,s(),[l,s]=executeAsync((()=>p.isReady())),await l,s();}catch(w){[l,s]=executeAsync((()=>F(e,Ue$1,[w]))),await l,s();}const y=Me$1("_layout");return p.beforeEach((async(t,o)=>{var n;t.meta=reactive(t.meta),e.isHydrating&&y.value&&!isReadonly(t.meta.layout)&&(t.meta.layout=y.value),e._processingMiddleware=!0;const r=new Set([...Ee,...e._middleware.global]);for(const e of t.matched){const t=e.meta.middleware;if(t)if(Array.isArray(t))for(const e of t)r.add(e);else r.add(t);}for(const a of r){const i="string"==typeof a?e._middleware.named[a]||await(null==(n=Le[a])?void 0:n.call(Le).then((e=>e.default||e))):a;if(!i)throw new Error(`Unknown route middleware: '${a}'.`);const r=await F(e,i,[t,o]);if(!1===r||r instanceof Error){const t=r||createError({statusCode:404,statusMessage:`Page Not Found: ${m}`});return await F(e,Ue$1,[t]),!1}if(r||!1===r)return r}})),p.afterEach((async t=>{if(delete e._processingMiddleware,0===t.matched.length)await F(e,Ue$1,[createError({statusCode:404,fatal:!1,statusMessage:`Page not found: ${t.fullPath}`})]);else {const o=t.fullPath||"/";if(!isEqual(o,m,{trailingSlash:!0})){const t=await F(e,Be$1),n={redirectCode:200!==t.node.res.statusCode&&t.node.res.statusCode||302};await F(e,Ye$1,[o,n]);}}})),e.hooks.hookOnce("app:created",(async()=>{try{await p.replace({...p.resolve(m),name:void 0,force:!0});}catch(w){await F(e,Ue$1,[w]);}})),{provide:{router:p}}})),Oe="MyDeepTheme",ze=L((e=>{const t=Me$1("color-mode",(()=>reactive({preference:Oe,value:Oe,unknown:!0,forced:!1}))).value,o={};Ke$1({htmlAttrs:o}),Je$1().afterEach((e=>{const n=e.meta.colorMode;n&&"system"!==n?(t.value=o["data-color-mode-forced"]=n,o["data-theme"]=t.value,t.forced=!0):"system"===n&&console.warn("You cannot force the colorMode to system at the page level.");})),e.provide("colorMode",t);}));async function Be(e,t){const o=await async function(e){{const t=(await import('image-meta').then((e=>e.imageMeta)))(await fetch(e).then((e=>e.buffer())));if(!t)throw new Error(`No metadata could be extracted from the image \`${e}\`.`);const{width:o,height:n}=t;return {width:o,height:n,ratio:o&&n?o/n:void 0}}}(t).catch((e=>(console.error("Failed to get image meta for "+t,e+""),{width:0,height:0,ratio:0})));return o}function Re(e){return t=>t?e[t]||t:e.missingValue}function Ne(e=""){return "number"==typeof e?e:"string"==typeof e&&e.replace("px","").match(/^\d+$/g)?parseInt(e,10):void 0}function We(e){const t={options:e},o=(e,o={})=>Fe(t,e,o),n=(e,t={},n={})=>o(e,{...n,modifiers:defu(t,n.modifiers||{})}).url;for(const a in e.presets)n[a]=(t,o,i)=>n(t,o,{...e.presets[a],...i});return n.options=e,n.getImage=o,n.getMeta=(e,o)=>async function(e,t,o){const n=Fe(e,t,{...o});return "function"==typeof n.getMeta?await n.getMeta():await Be(0,n.url)}(t,e,o),n.getSizes=(e,o)=>function(e,t,o){var n,a;const i=Ne(null==(n=o.modifiers)?void 0:n.width),r=Ne(null==(a=o.modifiers)?void 0:a.height),l=i&&r?r/i:0,s=[],u={};if("string"==typeof o.sizes)for(const c of o.sizes.split(/[\s,]+/).filter((e=>e))){const e=c.split(":");2===e.length&&(u[e[0].trim()]=e[1].trim());}else Object.assign(u,o.sizes);for(const c in u){const n=e.options.screens&&e.options.screens[c]||parseInt(c);let a=String(u[c]);const i=a.endsWith("vw");if(!i&&/^\d+$/.test(a)&&(a+="px"),!i&&!a.endsWith("px"))continue;let d=parseInt(a);if(!n||!d)continue;i&&(d=Math.round(d/100*n));const m=l?Math.round(d*l):r;s.push({width:d,size:a,screenMaxWidth:n,media:`(max-width: ${n}px)`,src:e.$img(t,{...o.modifiers,width:d,height:m},o)});}s.sort(((e,t)=>e.screenMaxWidth-t.screenMaxWidth));const d=s[s.length-1];d&&(d.media="");return {sizes:s.map((e=>`${e.media?e.media+" ":""}${e.size}`)).join(", "),srcset:s.map((e=>`${e.src} ${e.width}w`)).join(", "),src:null==d?void 0:d.src}}(t,e,o),t.$img=n,n}function Fe(e,t,o){var n,a;if("string"!=typeof t||""===t)throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return {url:t};const{provider:i,defaults:r}=function(e,t){const o=e.options.providers[t];if(!o)throw new Error("Unknown provider: "+t);return o}(e,o.provider||e.options.provider),l=function(e,t){if(!t)return {};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}(e,o.preset);if(t=hasProtocol(t)?t:withLeadingSlash(t),!i.supportsAlias)for(const c in e.options.alias)t.startsWith(c)&&(t=joinURL(e.options.alias[c],t.substr(c.length)));if(i.validateDomains&&hasProtocol(t)){const o=parseURL(t).host;if(!e.options.domains.find((e=>e===o)))return {url:t}}const s=defu(o,l,r);s.modifiers={...s.modifiers};const u=s.modifiers.format;(null==(n=s.modifiers)?void 0:n.width)&&(s.modifiers.width=Ne(s.modifiers.width)),(null==(a=s.modifiers)?void 0:a.height)&&(s.modifiers.height=Ne(s.modifiers.height));const d=i.getImage(t,s,e);return d.format=d.format||u||"",d}const qe=function({formatter:e,keyMap:t,joinWith:o="/",valueMap:n}={}){e||(e=(e,t)=>`${e}=${t}`),t&&"function"!=typeof t&&(t=Re(t));const a=n||{};return Object.keys(a).forEach((e=>{"function"!=typeof a[e]&&(a[e]=Re(a[e]));})),(n={})=>Object.entries(n).filter((([e,t])=>void 0!==t)).map((([o,i])=>{const r=a[o];return "function"==typeof r&&(i=r(n[o])),o="function"==typeof t?t(o):o,e(o,i)})).join(o)}({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>encodeParam(e)+"_"+encodeParam(t)}),Ke=Object.freeze({__proto__:null,getImage:(e,{modifiers:t={},baseURL:o}={},n)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const a=qe(t)||"_";return o||(o=joinURL("/","/_ipx")),{url:joinURL(o,a,encodePath(e))}},supportsAlias:!0,validateDomains:!0}),Ue={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};Ue.providers={ipx:{provider:Ke,defaults:{}}};const De=L((()=>({provide:{img:We(Ue)}})));let Je=[];const Ge=[];const Ve={install(e){e.directive("scroll-to",{mounted(e,t){const o=(document.querySelector(t.value.target)||null).offsetTop||0;Ge.push(o);const n=document.querySelector(t.value.container)||window,a=n.offsetTop||0,i=t.value.behavior||"",r=t.value.time||500,l=t.value.cb||null,s=t.value.syncCb||null;e.addEventListener("click",(()=>{!function(e,t,o,n,a){Je.forEach((e=>window.cancelAnimationFrame(e))),Je=[];const i=t.scrollTop;if(i===e)return;let r=null;if("smooth"!==n)return void t.scrollTo({top:e});const l=window.requestAnimationFrame((function n(l){r=r||l;const s=l-r,u=Math.abs((e-i)*s/o);if(i<e?t.scrollTo(0,i+u):t.scrollTo(0,i-u),s<o){const e=window.requestAnimationFrame(n);Je.push(e);}else t.scrollTo(0,e),a&&a();}));Je.push(l);}(o-a,n,r,i,s),l&&l();})),n.addEventListener("scroll",He((e=>{const t=e.target.scrollTop,o=Ge.findIndex(((e,o)=>{const n=Ge[o-1]?Ge[o-1]:0;return t<=e&&t>=n}));console.log("findIndex :>> ",o),(o||0===o)&&l&&l(o);}),1500));}});}},Xe=(e,t,o)=>{const{direction:n,delay:a,timing:i,duration:r,iteration:l}=t,s=["animate__animated"];n?s.push(`animate__${n}`):s.push("animate__fadeIn"),e.style["animation-duration"]=r?`${r}ms`:"500ms",e.style["animation-delay"]=a?`${a}ms`:"0ms",e.style["animation-iteration-count"]=l?`${i}`:"1",e.style["animation-timing-function"]=i?`${i}`:"linear";const u=`${e.classList.value} ${s.join(" ")}`;e.className=u,e.setAttribute("animate-data",u);},Ye={install:(e,t)=>{e.directive("animate-css",{mounted(e,t){const{value:o,modifiers:n}=t;((e,t,o)=>{const{click:n,hover:a}=o;"string"==typeof t&&(t={classes:t}),n?e.onclick=()=>{Xe(e,t);}:a?e.onmouseover=()=>{Xe(e,t);}:Xe(e,t);})(e,o,n);}});}},Qe=[it$1,ue,me,Pe,ze,De,L((e=>{e.vueApp.use(Ve),e.vueApp.use(Ye);})),L((()=>({provide:{store:ne}})))],Ze=defineComponent({name:"FragmentWrapper",setup:(e,{slots:t})=>()=>{var e;return null==(e=t.default)?void 0:e.call(t)}}),et=(e,t,o)=>({default:()=>t?h(e,!0===t?{}:t,o):h(Ze,{},o)}),tt={default:()=>import('./_nuxt/default-68e121b6.mjs').then((e=>e.default||e)),mobile:()=>import('./_nuxt/mobile-1a5635fb.mjs').then((e=>e.default||e))},ot=defineComponent({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(e,t){const o=await tt[e.name]().then((e=>e.default||e));return ()=>h(o,t.attrs,t.slots)}}),nt=defineComponent({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,t){const o=inject("_route"),a=o===ze$1()?useRoute():o,i=computed((()=>unref(e.name)??a.meta.layout??"default"));return ()=>{const e=i.value&&i.value in tt,o=a.meta.layoutTransition??false;return et(Transition,e&&o,{default:()=>et(ot,e&&{key:i.value,name:i.value,...t.attrs},t.slots).default()}).default()}}}),at=defineComponent({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(e,{slots:t}){const o=function(e){const t=ref(0),o=ref(!1);computed((()=>1e4/e.duration));let a=null,i=null;function r(){s(),t.value=0,e.throttle,o.value=!0;}function l(){t.value=100,u();}function s(){clearInterval(a),clearTimeout(i),a=null,i=null;}function u(){s();}return {progress:t,isLoading:o,start:r,finish:l,clear:s}}({duration:e.duration,throttle:e.throttle}),a=M();return a.hook("page:start",o.start),a.hook("page:finish",o.finish),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:"auto",height:`${e.height}px`,opacity:o.isLoading.value?1:0,background:e.color||void 0,backgroundSize:100/o.progress.value*100+"% auto",transform:`scaleX(${o.progress.value}%)`,transformOrigin:"left",transition:"transform 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},t)}});const it=defineComponent({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:o}){const n=M();return ()=>h(RouterView,{name:e.name,route:e.route,...o},{default:o=>{if(!o.Component)return;const a=((e,t)=>{const o=e.route.matched.find((t=>{var o;return (null==(o=t.components)?void 0:o.default)===e.Component.type})),n=t??(null==o?void 0:o.meta.key)??(o&&(a=e.route,o.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,(e=>{var t;return (null==(t=a.params[e.slice(1)])?void 0:t.toString())||""}))));var a;return "function"==typeof n?n(e.route):n})(o,e.pageKey),i=n.deferHydration(),l=!!(e.transition??o.route.meta.pageTransition??ce),s=l&&function(e){const t=e.map((e=>({...e,onAfterLeave:rt(e.onAfterLeave)})));return defu(...t)}([e.transition,o.route.meta.pageTransition,ce,{onAfterLeave:()=>{n.callHook("page:transition:finish",o.Component);}}].filter(Boolean));return et(Transition,l&&s,(e.keepalive??o.route.meta.keepalive,u=h(Suspense,{onPending:()=>n.callHook("page:start",o.Component),onResolve:()=>{nextTick((()=>n.callHook("page:finish",o.Component).finally(i)));}},{default:()=>h(lt,{key:a,routeProps:o,pageKey:a,hasTransition:l})}),{default:()=>u})).default();var u;}})}});function rt(e){return Array.isArray(e)?e:e?[e]:[]}const lt=defineComponent({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const t=e.pageKey,o=e.routeProps.route,i={};for(const a in e.routeProps.route)i[a]=computed((()=>t===e.pageKey?e.routeProps.route[a]:o[a]));return provide("_route",reactive(i)),()=>h(e.routeProps.Component)}}),st=(e,t)=>{const o=e.__vccOpts||e;for(const[n,a]of t)o[n]=a;return o},ut={};const dt=ut.setup;ut.setup=(e,t)=>{const o=useSSRContext();return (o.modules||(o.modules=new Set)).add("app.vue"),dt?dt(e,t):void 0};const ct=st(ut,[["ssrRender",function(e,t,o,n){const a=nt,i=at,r=it;t(`<div${ssrRenderAttrs(mergeProps({class:"naifu-app"},n))}>`),t(ssrRenderComponent(a,null,{default:withCtx(((e,t,o,n)=>{if(!t)return [createVNode(i),createVNode(r)];t(ssrRenderComponent(i,null,null,o,n)),t(ssrRenderComponent(r,null,null,o,n));})),_:1},o)),t("</div>");}]]),mt={__name:"nuxt-root",__ssrInlineRender:!0,setup(t){const o=defineAsyncComponent((()=>import('./_nuxt/error-component-5e5c2edf.mjs').then((e=>e.default||e)))),n=defineAsyncComponent((()=>import('./_nuxt/island-renderer-7fa7a94f.mjs').then((e=>e.default||e)))),a=M();a.deferHydration(),provide("_route",ze$1()),a.hooks.callHookWith((e=>e.map((e=>e()))),"vue:setup");const i=Re$1();onErrorCaptured(((e,t,o)=>{a.hooks.callHook("vue:error",e,t,o).catch((e=>console.error("[nuxt] Error in `vue:error` hook",e)));{const t=F(a,Ue$1,[e]);onServerPrefetch((()=>t));}}));const{islandContext:r}=a.ssrContext;return (e,t,a,l)=>{ssrRenderSuspense(t,{default:()=>{unref(i)?t(ssrRenderComponent(unref(o),{error:unref(i)},null,a)):unref(r)?t(ssrRenderComponent(unref(n),{context:unref(r)},null,a)):t(ssrRenderComponent(unref(ct),null,null,a));},_:1});}}},pt=mt.setup;mt.setup=(e,t)=>{const o=useSSRContext();return (o.modules||(o.modules=new Set)).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue"),pt?pt(e,t):void 0};const ht=mt;let ft;globalThis.$fetch||(globalThis.$fetch=$fetch.create({baseURL:le.baseURL}));const vt=q(Qe);ft=async function(e){const t=createApp(ht),o=H({vueApp:t,ssrContext:e});try{await U(o,vt),await o.hooks.callHook("app:created",t);}catch(n){await o.callHook("app:error",n),o.payload.error=o.payload.error||n;}return t};const gt=e=>ft(e);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  _: st,
  a: nt,
  d: He,
  default: gt,
  i: Ce,
  p: Ne
});

export { B, Ce as C, He as H, Je$1 as J, Ke$1 as K, M, Ne as N, Qe$1 as Q, st as a, Me$1 as b, He$1 as c, server as d, nt as n, qe$1 as q, st$1 as s, tt$1 as t, ze$1 as z };
