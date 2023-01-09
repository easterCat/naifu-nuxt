import { _ as f } from './nuxt-img.fed184f3.mjs';
import n from './client-only.f5bddb5b.mjs';
import o from './AppAnimate.b0d9e6d2.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext, createElementVNode, reactive, ref, watch, withCtx, openBlock, createBlock, createVNode, isRef, toDisplayString, createCommentVNode, createElementBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { d as di, M, Y as Y$1, H as Hn } from '../server.mjs';
import { p } from './shop.4d5e891e.mjs';
import { v, i, h } from './plus.ff77b18c.mjs';
import P$1 from 'vuedraggable';
import { uuid } from 'vue-uuid';
import { c } from './index.7c6a213b.mjs';
import { ElAvatar } from 'element-plus/lib';
import { t } from './link.0f68c07f.mjs';
import se$1 from 'lodash';
import 'ofetch';
import 'ohash';
import 'h3';
import 'hookable';
import 'unctx';
import 'ufo';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import 'store';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'vue3-clipboard';
import 'element-plus';

const U = defineComponent({ __name: "AnimationButton", __ssrInlineRender: true, props: { buttonStyle: { type: Number, default: 1 }, buttonWidth: { type: String, default: "" }, buttonText: { type: String, default: "" }, buttonColor: { type: String, default: "" }, buttonShadow: { type: Boolean, default: false }, buttonAngel: { type: String, default: "0deg" }, buttonSize: { type: String, default: "medium" } }, emits: ["submit"], setup(e2, { emit: t2 }) {
  const a2 = e2, l2 = computed(() => {
    if (a2.buttonColor) {
      let e3 = `background: linear-gradient(${a2.buttonAngel}, rgba(${a2.buttonColor},1) 0%, rgba(${a2.buttonColor},0.8) 100%);`;
      return (null == a2 ? void 0 : a2.buttonWidth) && (e3 = `${e3}width:${null == a2 ? void 0 : a2.buttonWidth}`), e3;
    }
    return "";
  });
  return (t3, a3, n2, d2) => {
    a3(`<div${ssrRenderAttrs(mergeProps({ class: "animation-button" }, d2))} data-v-be9d83c0><button class="${ssrRenderClass([[`btn-${e2.buttonStyle}`, `${e2.buttonSize}`, e2.buttonShadow ? "btn-shadow" : ""], "custom-btn"])}" style="${ssrRenderStyle(unref(l2))}"${ssrRenderAttr("data-style", e2.buttonStyle)} data-v-be9d83c0>`), [1, 2, 13, 14].includes(e2.buttonStyle) ? a3(`<!--[-->${ssrInterpolate(e2.buttonText)}<!--]-->`) : a3("<!---->"), [5, 6].includes(e2.buttonStyle) ? a3(`<span data-v-be9d83c0>${ssrInterpolate(e2.buttonText)}</span>`) : a3("<!---->"), [11].includes(e2.buttonStyle) ? a3(`<!--[-->${ssrInterpolate(e2.buttonText)} <div class="dot" data-v-be9d83c0></div><!--]-->`) : a3("<!---->"), a3("</button></div>");
  };
} }), P = U.setup;
U.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/pc/AnimationButton.vue"), P ? P(e2, t2) : void 0;
};
const R = di(U, [["__scopeId", "data-v-be9d83c0"]]), F = Object.freeze(Object.defineProperty({ __proto__: null, default: R }, Symbol.toStringTag, { value: "Module" })), q = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, D = [createElementVNode("path", { fill: "currentColor", d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z" }, null, -1)];
const E = { name: "ep-close-bold", render: function(e2, t2) {
  return openBlock(), createElementBlock("svg", q, D);
} }, G = defineComponent({ __name: "ShopLayer", __ssrInlineRender: true, props: ["modelValue"], emits: ["update:modelValue"], setup(e2, { emit: t2 }) {
  const l2 = reactive({ animation: 400, group: "people", disabled: false, ghostClass: "ghost" }), { shop: n2, shopList: o2, onlySetShop: d2, initShop: i2, clearShop: u2, removeShopByName: y2, copyShop: $2, addOneCircle: w2, removeOneCircle: C2, createNewShopItem: B2 } = p(), I2 = ref("");
  watch(o2, (e3) => {
    d2(e3.map((e4) => e4.text || "").join(", "));
  });
  const O2 = () => {
    t2("update:modelValue", false);
  }, T2 = (e3) => `${e3}-${uuid.v4()}`, W2 = async () => {
  };
  return (t3, n3, d3, i3) => {
    const r2 = o, m2 = R, b2 = E, k2 = v, M2 = i, N2 = h;
    n3(`<div${ssrRenderAttrs(i3)} data-v-e72df3ce>`), n3(ssrRenderComponent(r2, { name: "fadeIn" }, { default: withCtx((t4, a2, n4, d4) => {
      if (!a2)
        return [e2.modelValue ? (openBlock(), createBlock("div", { key: 0, class: "shop-card" }, [createVNode("div", { class: "shop-card-header" }, [createVNode("span", null, [createVNode(m2, { "button-style": 1, class: "btn-accent", "button-text": "\u6E05\u7A7A\u8D2D\u7269\u8F66", "button-size": "large", onSubmit: unref(u2) }, null, 8, ["onSubmit"]), createVNode(m2, { "button-style": 1, class: "btn-accent", "button-text": "\u590D\u5236\u6807\u7B7E", "button-size": "large", onSubmit: unref($2) }, null, 8, ["onSubmit"]), createVNode(m2, { "button-style": 1, class: "btn-accent", "button-text": "\u65B0\u589E\u6807\u7B7E", "button-size": "large", onSubmit: unref(B2) }, null, 8, ["onSubmit"]), createVNode(m2, { "button-style": 1, class: "btn-accent", "button-text": "\u751F\u6210\u56FE\u7247", "button-size": "large", onSubmit: W2 })]), createVNode(b2, { onClick: O2 })]), createVNode("div", { class: "shop-card-con" }, [createVNode("div", { class: "left" }, [createVNode(unref(P$1), { modelValue: unref(o2), "onUpdate:modelValue": (e3) => isRef(o2) ? o2.value = e3 : null, "component-data": { name: "list" }, "drag-options": unref(l2), "item-key": (e3) => {
          T2(e3);
        } }, { item: withCtx(({ element: e3 }) => [createVNode("div", { class: "shop-item" }, [createVNode("div", null, [createVNode("span", null, toDisplayString(e3.text), 1), createVNode(k2, { class: "add", onClick: (t5) => unref(w2)(e3.text) }, null, 8, ["onClick"]), createVNode(M2, { class: "minus", onClick: (t5) => unref(C2)(e3.text) }, null, 8, ["onClick"]), createVNode(N2, { class: "remove", onClick: (t5) => unref(y2)(e3.text) }, null, 8, ["onClick"])])])]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "drag-options", "item-key"])]), unref(I2) ? (openBlock(), createBlock("div", { key: 0, class: "right" }, [createVNode("img", { src: unref(I2), alt: "" }, null, 8, ["src"])])) : createCommentVNode("", true)])])) : createCommentVNode("", true)];
      e2.modelValue ? (a2(`<div class="shop-card" data-v-e72df3ce${d4}><div class="shop-card-header" data-v-e72df3ce${d4}><span data-v-e72df3ce${d4}>`), a2(ssrRenderComponent(m2, { "button-style": 1, class: "btn-accent", "button-text": "\u6E05\u7A7A\u8D2D\u7269\u8F66", "button-size": "large", onSubmit: unref(u2) }, null, n4, d4)), a2(ssrRenderComponent(m2, { "button-style": 1, class: "btn-accent", "button-text": "\u590D\u5236\u6807\u7B7E", "button-size": "large", onSubmit: unref($2) }, null, n4, d4)), a2(ssrRenderComponent(m2, { "button-style": 1, class: "btn-accent", "button-text": "\u65B0\u589E\u6807\u7B7E", "button-size": "large", onSubmit: unref(B2) }, null, n4, d4)), a2(ssrRenderComponent(m2, { "button-style": 1, class: "btn-accent", "button-text": "\u751F\u6210\u56FE\u7247", "button-size": "large", onSubmit: W2 }, null, n4, d4)), a2("</span>"), a2(ssrRenderComponent(b2, { onClick: O2 }, null, n4, d4)), a2(`</div><div class="shop-card-con" data-v-e72df3ce${d4}><div class="left" data-v-e72df3ce${d4}>`), a2(ssrRenderComponent(unref(P$1), { modelValue: unref(o2), "onUpdate:modelValue": (e3) => isRef(o2) ? o2.value = e3 : null, "component-data": { name: "list" }, "drag-options": unref(l2), "item-key": (e3) => {
        T2(e3);
      } }, { item: withCtx(({ element: e3 }, t5, a3, l3) => {
        if (!t5)
          return [createVNode("div", { class: "shop-item" }, [createVNode("div", null, [createVNode("span", null, toDisplayString(e3.text), 1), createVNode(k2, { class: "add", onClick: (t6) => unref(w2)(e3.text) }, null, 8, ["onClick"]), createVNode(M2, { class: "minus", onClick: (t6) => unref(C2)(e3.text) }, null, 8, ["onClick"]), createVNode(N2, { class: "remove", onClick: (t6) => unref(y2)(e3.text) }, null, 8, ["onClick"])])])];
        t5(`<div class="shop-item" data-v-e72df3ce${l3}><div data-v-e72df3ce${l3}><span data-v-e72df3ce${l3}>${ssrInterpolate(e3.text)}</span>`), t5(ssrRenderComponent(k2, { class: "add", onClick: (t6) => unref(w2)(e3.text) }, null, a3, l3)), t5(ssrRenderComponent(M2, { class: "minus", onClick: (t6) => unref(C2)(e3.text) }, null, a3, l3)), t5(ssrRenderComponent(N2, { class: "remove", onClick: (t6) => unref(y2)(e3.text) }, null, a3, l3)), t5("</div></div>");
      }), _: 1 }, n4, d4)), a2("</div>"), unref(I2) ? a2(`<div class="right" data-v-e72df3ce${d4}><img${ssrRenderAttr("src", unref(I2))} alt="" data-v-e72df3ce${d4}></div>`) : a2("<!---->"), a2("</div></div>")) : a2("<!---->");
    }), _: 1 }, d3)), n3("</div>");
  };
} }), J = G.setup;
G.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/pc/ShopLayer.vue"), J ? J(e2, t2) : void 0;
};
const K = di(G, [["__scopeId", "data-v-e72df3ce"]]), Q = Object.freeze(Object.defineProperty({ __proto__: null, default: K }, Symbol.toStringTag, { value: "Module" })), X = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, Y = [createElementVNode("path", { fill: "currentColor", d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384L128 512l192 128V384z" }, null, -1)];
const Z = { name: "ep-fold", render: function(e2, t2) {
  return openBlock(), createElementBlock("svg", X, Y);
} }, ee = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, te = [createElementVNode("path", { fill: "currentColor", d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352l192 160l-192 128V352z" }, null, -1)];
const ae = { name: "ep-expand", render: function(e2, t2) {
  return openBlock(), createElementBlock("svg", ee, te);
} }, le = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, ne = [createElementVNode("path", { fill: "currentColor", d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z" }, null, -1), createElementVNode("path", { fill: "currentColor", d: "m220.8 256l-71.232 80l71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496l-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z" }, null, -1)];
const oe = { name: "ep-guide", render: function(e2, t2) {
  return openBlock(), createElementBlock("svg", le, ne);
} }, se = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, de = [createElementVNode("path", { fill: "currentColor", d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z" }, null, -1)];
const ce = { name: "ep-files", render: function(e2, t2) {
  return openBlock(), createElementBlock("svg", se, de);
} }, ie = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, ue = [createElementVNode("path", { fill: "currentColor", d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z" }, null, -1)];
const re = { name: "ep-collection-tag", render: function(e2, t2) {
  return openBlock(), createElementBlock("svg", ie, ue);
} }, me = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, be = [createElementVNode("path", { fill: "currentColor", d: "M192 413.952V896h640V413.952L512 147.328L192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z" }, null, -1)];
const ve = { name: "ep-house", render: function(e2, t2) {
  return openBlock(), createElementBlock("svg", me, be);
} }, pe = defineComponent({ __name: "AppHeader", __ssrInlineRender: true, setup(a2) {
  var l2;
  const n2 = c();
  M();
  const d2 = Y$1(), c2 = ref("large"), i2 = ref(d2.path);
  ref(null != (l2 = i2.value) ? l2 : "/home");
  const u2 = ref(false), r2 = ref(false), v2 = ref(false), p2 = ref(false), { shopList: h2 } = p();
  watch(h2, (e2) => {
    u2.value = !!e2.length;
  });
  const f2 = (e2) => d2.path.includes(`mobile/${e2}`);
  return se$1.throttle(() => {
    const e2 = null == window ? void 0 : window.innerWidth;
    c2.value = e2 < 1280 && e2 > 750 ? "medium" : e2 < 750 ? "small" : "large";
  }, 1200), (a3, l3, d3, i3) => {
    var u3, m2;
    const b2 = f, h3 = ve, x2 = re, g2 = n, $2 = ce, z2 = oe, w2 = t, k2 = ElAvatar, H2 = ae, L2 = Z, j2 = K;
    l3(`<header${ssrRenderAttrs(mergeProps({ class: "fix-header header bg-base-30" }, i3))} data-v-724ccbb7><div class="header-con" data-v-724ccbb7><div class="header-menu" data-v-724ccbb7><div class="header-icon" data-v-724ccbb7>`), l3(ssrRenderComponent(b2, { src: "https://image.lexica.art/md/9ce846a3-21f0-4f35-bf40-61d5c918860a" }, null, d3)), l3("</div>"), "large" === c2.value ? (l3(`<div class="my-menu" data-v-724ccbb7><span class="${ssrRenderClass([{ "item-active": f2("home") }, "menu-item"])}" data-v-724ccbb7>`), l3(ssrRenderComponent(h3, null, null, d3)), l3(` \u9996\u9875 </span><span class="${ssrRenderClass([{ "item-active": f2("tags") }, "menu-item"])}" data-v-724ccbb7>`), l3(ssrRenderComponent(x2, null, null, d3)), l3(" \u6807\u7B7E "), p2.value ? (l3('<div class="menu-item-select" data-v-724ccbb7>'), l3(ssrRenderComponent(g2, null, null, d3)), l3("</div>")) : l3("<!---->"), l3(`</span><span class="${ssrRenderClass([{ "item-active": f2("template/sfw") }, "menu-item"])}" data-v-724ccbb7>`), l3(ssrRenderComponent($2, null, null, d3)), l3(" SFW\u6A21\u7248 </span>"), unref(n2).roleId && "4" !== unref(n2).roleId ? (l3(`<span class="${ssrRenderClass([{ "item-active": f2("template/nsfw") }, "menu-item"])}" data-v-724ccbb7>`), l3(ssrRenderComponent($2, null, null, d3)), l3(" NSFW\u6A21\u7248 </span>")) : l3("<!---->"), l3(`<span class="${ssrRenderClass([{ "item-active": f2("utils") }, "menu-item"])}" data-v-724ccbb7>`), l3(ssrRenderComponent(z2, null, null, d3)), l3(` \u5DE5\u5177 </span><span class="${ssrRenderClass([{ "item-active": f2("links") }, "menu-item"])}" data-v-724ccbb7>`), l3(ssrRenderComponent(w2, null, null, d3)), l3(" \u6536\u5F55 </span></div>")) : l3("<!---->"), l3('</div><div class="user-info" data-v-724ccbb7><div class="dropdown" data-v-724ccbb7><label tabindex="0" class="m-1" data-v-724ccbb7>'), "large" === c2.value || "medium" === c2.value ? (l3('<div class="user-name" data-v-724ccbb7>'), l3(ssrRenderComponent(k2, { src: "https://image.lexica.art/md/26ef6676-a7e3-4560-8cb8-4355e017dc2b" }, null, d3)), l3(`<span data-v-724ccbb7>${ssrInterpolate((null == (u3 = unref(n2)) ? void 0 : u3.username) || "Welcome!")}</span></div>`)) : l3("<!---->"), l3(`</label><ul tabindex="0" class="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52" data-v-724ccbb7><li data-v-724ccbb7><a data-v-724ccbb7>\u7528\u6237\u4E2D\u5FC3</a></li><li data-v-724ccbb7><a data-v-724ccbb7>${ssrInterpolate((null == (m2 = unref(n2)) ? void 0 : m2.username) ? "\u8D26\u53F7\u767B\u51FA" : "\u8D26\u53F7\u767B\u5F55")}</a></li></ul></div><div class="user-util" data-v-724ccbb7>`), unref(Hn)() ? (l3('<div class="user-menu" data-v-724ccbb7><span data-v-724ccbb7>'), v2.value ? (l3("<span data-v-724ccbb7>"), l3(ssrRenderComponent(H2, null, null, d3)), l3("</span>")) : (l3("<span data-v-724ccbb7>"), l3(ssrRenderComponent(L2, null, null, d3)), l3("</span>")), l3("</span></div>")) : l3("<!---->"), l3("</div></div></div>"), l3(ssrRenderComponent(g2, null, null, d3)), l3(ssrRenderComponent(j2, { modelValue: r2.value, "onUpdate:modelValue": (e2) => r2.value = e2 }, null, d3)), l3("</header>");
  };
} }), he = pe.setup;
pe.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/mobile/AppHeader.vue"), he ? he(e2, t2) : void 0;
};
const fe = di(pe, [["__scopeId", "data-v-724ccbb7"]]), xe = Object.freeze(Object.defineProperty({ __proto__: null, default: fe }, Symbol.toStringTag, { value: "Module" }));

export { F as A, Q as S, fe as _, R as a, E as b, ae as c, Z as d, K as e, xe as f };
