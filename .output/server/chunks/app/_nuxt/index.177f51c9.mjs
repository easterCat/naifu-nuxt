import I from './Icon.221105b5.mjs';
import o$1 from './AppAnimate.0c3d74c4.mjs';
import { A } from './index.7c6a213b.mjs';
import { R, Y, M as M$1, d as di } from '../server.mjs';
import { defineComponent, withAsyncContext, reactive, ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, isRef, toDisplayString, renderSlot, openBlock, createBlock, withDirectives, vModelText, createCommentVNode, useSSRContext } from 'vue';
import { s, p } from './shop.269c075a.mjs';
import { a as a$1 } from './document-copy.11fbb28b.mjs';
import { t } from './shopping-trolley.94b396ca.mjs';
import { ElRadioGroup, ElRadio, ElButton } from 'element-plus/lib';
import { v, i, h } from './plus.ff77b18c.mjs';
import { d, a, o } from './arrow-left-bold.d700f3b7.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import P$1 from 'vuedraggable';
import { uuid } from 'vue-uuid';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
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
import 'element-plus';
import 'vue3-clipboard';

const M = defineComponent({ __name: "index", __ssrInlineRender: true, props: ["modelValue"], async setup(s2) {
  let _2, F2;
  const { DefaultTagsApi: M2 } = A(), P2 = ([_2, F2] = withAsyncContext(() => M2.getTags()), _2 = await _2, F2(), _2), Q2 = JSON.parse(P2);
  R().public.GELBOORU_TOKEN;
  const W = reactive({ animation: 400, group: "people", disabled: false, ghostClass: "ghost" }), { GelbooruApi: X, ShopApi: Y$1 } = A(), Z = Y(), ee = M$1(), ae = ref("1"), le = ref(""), te = ref(false), ie = ref(1), de = ref(0), { copy: se } = s(), { addShop: oe, renameShopName: ne, shopList: ve, shop: re, onlySetShop: ce, initShop: ue, setShop: me, clearShop: pe, removeShopByName: be, copyShop: fe, addOneCircle: xe, removeOneCircle: he, createNewShopItem: $e } = p(), ye = ref(Q2.class), ke = ref(ye.value[0].data), Ce = ref([]), ge = ref([]);
  watch(ve, (e2) => {
    "pc-design" === Z.name && ce(e2.map((e3) => e3.text).join(", "));
  });
  const _e = () => {
    ee.go(-1);
  }, ze = () => {
    ee.replace("/pc/home");
  }, je = () => {
    te.value = true;
  }, Se = () => {
    me(le.value), te.value = false;
  }, we = async () => {
    var e2;
    const a2 = await Y$1.translate({ text: re.value, type: 1 });
    (null == (e2 = null == a2 ? void 0 : a2.data) ? void 0 : e2.translateText).split("\uFF0C").forEach((e3, a3) => {
      ve.value[a3].translateText = e3;
    });
  };
  return (l2, t2, i2, d2) => {
    const s3 = d, o2 = a, n2 = I, v2 = ElRadioGroup, r2 = ElRadio, _3 = v, z2 = i, j2 = o, F3 = h, M3 = ElButton, P3 = t, Q3 = a$1, X2 = o$1;
    t2(`<div${ssrRenderAttrs(mergeProps({ class: ["design-page page", { white: "2" === ae.value }] }, d2))} data-v-3bd31888><div class="header" data-v-3bd31888><div class="back" data-v-3bd31888>`), t2(ssrRenderComponent(s3, { onClick: _e }, null, i2)), t2(ssrRenderComponent(o2, { onClick: ze }, null, i2)), t2('</div><div class="header-center" data-v-3bd31888>'), t2(ssrRenderComponent(n2, { size: "20", name: "material-symbols:shopping-cart", onClick: je }, null, i2)), t2(ssrRenderComponent(n2, { size: "24", name: "material-symbols:new-label-rounded", onClick: unref($e) }, null, i2)), t2(ssrRenderComponent(n2, { size: "20", name: "material-symbols:content-copy-rounded", onClick: unref(fe) }, null, i2)), t2(ssrRenderComponent(n2, { size: "19", name: "majesticons:translate", onClick: we }, null, i2)), t2(ssrRenderComponent(n2, { size: "20", name: "material-symbols:delete", onClick: unref(pe) }, null, i2)), t2('</div><div class="header-right" data-v-3bd31888>'), t2(ssrRenderComponent(v2, { modelValue: ae.value, "onUpdate:modelValue": (e2) => ae.value = e2, class: "ml-4" }, { default: withCtx((e2, a2, l3, t3) => {
      if (!a2)
        return [createVNode(r2, { label: "1", size: "large" }, { default: withCtx(() => [createTextVNode("\u6DF1\u8272")]), _: 1 }), createVNode(r2, { label: "2", size: "large" }, { default: withCtx(() => [createTextVNode("\u6D45\u8272")]), _: 1 })];
      a2(ssrRenderComponent(r2, { label: "1", size: "large" }, { default: withCtx((e3, a3, l4, t4) => {
        if (!a3)
          return [createTextVNode("\u6DF1\u8272")];
        a3("\u6DF1\u8272");
      }), _: 1 }, l3, t3)), a2(ssrRenderComponent(r2, { label: "2", size: "large" }, { default: withCtx((e3, a3, l4, t4) => {
        if (!a3)
          return [createTextVNode("\u6D45\u8272")];
        a3("\u6D45\u8272");
      }), _: 1 }, l3, t3));
    }), _: 1 }, i2)), t2(`</div></div><div class="body" data-v-3bd31888><div class="left" data-v-3bd31888><div class="left-layer1" data-v-3bd31888><div class="layer-top" data-v-3bd31888>\u6570\u636E\u6765\u6E90</div><div class="layer-bottom" data-v-3bd31888><div class="${ssrRenderClass([{ "item-active": 1 === ie.value }, "left-menu"])}" data-v-3bd31888> \u5E38\u89C4\u6807\u7B7E </div><div class="${ssrRenderClass([{ "item-active": 2 === ie.value }, "left-menu"])}" data-v-3bd31888> Gelbooru\u6807\u7B7E </div><div class="${ssrRenderClass([{ "item-active": 3 === ie.value }, "left-menu"])}" data-v-3bd31888> EH\u6807\u7B7E(500\u4E2A) </div><div class="${ssrRenderClass([{ "item-active": 4 === ie.value }, "left-menu"])}" data-v-3bd31888> EH\u6807\u7B7E(31000\u4E2A) </div></div><div class="layer-top" data-v-3bd31888>\u6807\u7B7E\u7C7B\u522B</div>`), 1 === ie.value ? (t2('<div class="type-list" data-v-3bd31888><!--[-->'), ssrRenderList(ye.value, (e2, a2) => {
      t2(`<div class="${ssrRenderClass([{ "type-item-active ": a2 === de.value }, "type-item"])}" data-v-3bd31888>${ssrInterpolate(null == e2 ? void 0 : e2.name)}</div>`);
    }), t2("<!--]--></div>")) : t2("<!---->"), 2 === ie.value ? (t2('<div class="type-list" data-v-3bd31888><!--[-->'), ssrRenderList(Ce.value, (e2, a2) => {
      t2(`<div class="${ssrRenderClass([{ "type-item-active ": a2 === de.value }, "type-item"])}" data-v-3bd31888>${ssrInterpolate(null == e2 ? void 0 : e2.name)}(${ssrInterpolate(null == e2 ? void 0 : e2.level)}) </div>`);
    }), t2("<!--]--></div>")) : t2("<!---->"), t2('</div></div><div class="center" data-v-3bd31888><div class="shop-card-con" data-v-3bd31888>'), t2(ssrRenderComponent(unref(P$1), { modelValue: unref(ve), "onUpdate:modelValue": (e2) => isRef(ve) ? ve.value = e2 : null, "component-data": { name: "list" }, "drag-options": unref(W), "item-key": (e2) => {
      ((e3) => {
        uuid.v4();
      })();
    } }, { item: withCtx(({ element: e2 }, a2, l3, t3) => {
      if (!a2)
        return [createVNode("div", { class: "shop-item" }, [createVNode("div", null, [createVNode("span", null, toDisplayString(e2.text), 1), createVNode("span", { class: "tran-text" }, toDisplayString(e2.translateText), 1), createVNode(_3, { class: "add", onClick: (a3) => unref(xe)(e2.text) }, null, 8, ["onClick"]), createVNode(z2, { class: "minus", onClick: (a3) => unref(he)(e2.text) }, null, 8, ["onClick"]), createVNode(j2, { class: "remove", onClick: (a3) => unref(ne)(e2.text) }, null, 8, ["onClick"]), createVNode(F3, { class: "remove", onClick: (a3) => unref(be)(e2.text) }, null, 8, ["onClick"])])])];
      a2(`<div class="shop-item" data-v-3bd31888${t3}><div data-v-3bd31888${t3}><span data-v-3bd31888${t3}>${ssrInterpolate(e2.text)}</span><span class="tran-text" data-v-3bd31888${t3}>${ssrInterpolate(e2.translateText)}</span>`), a2(ssrRenderComponent(_3, { class: "add", onClick: (a3) => unref(xe)(e2.text) }, null, l3, t3)), a2(ssrRenderComponent(z2, { class: "minus", onClick: (a3) => unref(he)(e2.text) }, null, l3, t3)), a2(ssrRenderComponent(j2, { class: "remove", onClick: (a3) => unref(ne)(e2.text) }, null, l3, t3)), a2(ssrRenderComponent(F3, { class: "remove", onClick: (a3) => unref(be)(e2.text) }, null, l3, t3)), a2("</div></div>");
    }), _: 1 }, i2)), t2('</div></div><div class="right" data-v-3bd31888><div class="tag-list" data-v-3bd31888>'), 1 === ie.value ? (t2("<!--[-->"), ssrRenderList(ke.value, (e2, a2) => {
      t2(`<div class="tag-item" data-v-3bd31888><div class="text-con" data-v-3bd31888><p class="zh" data-v-3bd31888>${ssrInterpolate(null == e2 ? void 0 : e2.zh)} ${ssrInterpolate(null == e2 ? void 0 : e2.en)}</p></div><div data-v-3bd31888>`), t2(ssrRenderComponent(M3, { size: "small", circle: "", onClick: (a3) => unref(oe)(null == e2 ? void 0 : e2.en) }, { default: withCtx((e3, a3, t3, i3) => {
        if (!a3)
          return [renderSlot(l2.$slots, "icon", {}, () => [createVNode(P3)], true)];
        ssrRenderSlot(l2.$slots, "icon", {}, () => {
          a3(ssrRenderComponent(P3, null, null, t3, i3));
        }, a3, t3, i3);
      }), _: 2 }, i2)), t2(ssrRenderComponent(M3, { size: "small", circle: "", onClick: (a3) => unref(se)(null == e2 ? void 0 : e2.en) }, { default: withCtx((e3, a3, t3, i3) => {
        if (!a3)
          return [renderSlot(l2.$slots, "icon", {}, () => [createVNode(Q3)], true)];
        ssrRenderSlot(l2.$slots, "icon", {}, () => {
          a3(ssrRenderComponent(Q3, null, null, t3, i3));
        }, a3, t3, i3);
      }), _: 2 }, i2)), t2("</div></div>");
    }), t2("<!--]-->")) : t2("<!---->"), 2 === ie.value ? (t2("<!--[-->"), ssrRenderList(ge.value, (e2, a2) => {
      t2(`<div class="tag-item" data-v-3bd31888><div class="text-con" data-v-3bd31888><p class="zh" data-v-3bd31888>${ssrInterpolate(null == e2 ? void 0 : e2.t_name)} ${ssrInterpolate(null == e2 ? void 0 : e2.name)}</p></div><div data-v-3bd31888>`), t2(ssrRenderComponent(M3, { size: "small", circle: "", onClick: (a3) => unref(oe)(null == e2 ? void 0 : e2.en) }, { default: withCtx((e3, a3, t3, i3) => {
        if (!a3)
          return [renderSlot(l2.$slots, "icon", {}, () => [createVNode(P3)], true)];
        ssrRenderSlot(l2.$slots, "icon", {}, () => {
          a3(ssrRenderComponent(P3, null, null, t3, i3));
        }, a3, t3, i3);
      }), _: 2 }, i2)), t2(ssrRenderComponent(M3, { size: "small", circle: "", onClick: (a3) => unref(se)(null == e2 ? void 0 : e2.en) }, { default: withCtx((e3, a3, t3, i3) => {
        if (!a3)
          return [renderSlot(l2.$slots, "icon", {}, () => [createVNode(Q3)], true)];
        ssrRenderSlot(l2.$slots, "icon", {}, () => {
          a3(ssrRenderComponent(Q3, null, null, t3, i3));
        }, a3, t3, i3);
      }), _: 2 }, i2)), t2("</div></div>");
    }), t2("<!--]-->")) : t2("<!---->"), t2("</div></div></div>"), t2(ssrRenderComponent(X2, null, { default: withCtx((e2, a2, l3, t3) => {
      if (!a2)
        return [te.value ? (openBlock(), createBlock("div", { key: 0, class: "import-wrapper" }, [createVNode("div", { class: "import-layer" }, [withDirectives(createVNode("textarea", { "onUpdate:modelValue": (e3) => le.value = e3, type: "text" }, null, 8, ["onUpdate:modelValue"]), [[vModelText, le.value]])]), createVNode("div", { class: "import-button" }, [createVNode("button", { onClick: () => te.value = false }, "\u53D6\u6D88", 8, ["onClick"]), createVNode("button", { onClick: Se }, "\u786E\u5B9A")])])) : createCommentVNode("", true)];
      te.value ? a2(`<div class="import-wrapper" data-v-3bd31888${t3}><div class="import-layer" data-v-3bd31888${t3}><textarea type="text" data-v-3bd31888${t3}>${ssrInterpolate(le.value)}</textarea></div><div class="import-button" data-v-3bd31888${t3}><button data-v-3bd31888${t3}>\u53D6\u6D88</button><button data-v-3bd31888${t3}>\u786E\u5B9A</button></div></div>`) : a2("<!---->");
    }), _: 1 }, i2)), t2("</div>");
  };
} }), P = M.setup;
M.setup = (e2, a2) => {
  const l2 = useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("pages/pc/design/index.vue"), P ? P(e2, a2) : void 0;
};
const Q = di(M, [["__scopeId", "data-v-3bd31888"]]);

export { Q as default };
