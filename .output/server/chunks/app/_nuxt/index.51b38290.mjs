import { R, Y as Y$1, M, d as di, n as ni } from '../server.mjs';
import I from './Icon.1f05ab14.mjs';
import o$1 from './AppAnimate.0c3d74c4.mjs';
import { A } from './index.7c6a213b.mjs';
import { defineComponent, withAsyncContext, reactive, ref, watch, mergeProps, withCtx, createVNode, unref, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, isRef, renderSlot, withDirectives, vModelText, useSSRContext } from 'vue';
import { s, p } from './shop.4d5e891e.mjs';
import { a as a$1 } from './document-copy.11fbb28b.mjs';
import { t } from './shopping-trolley.94b396ca.mjs';
import { ElRadioGroup, ElRadio, ElButton } from 'element-plus/lib';
import { v, i, h } from './plus.ff77b18c.mjs';
import { d, a, o } from './arrow-left-bold.d700f3b7.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import P from 'vuedraggable';
import { uuid } from 'vue-uuid';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'element-plus';
import 'vue3-clipboard';

const W = defineComponent({ __name: "index", __ssrInlineRender: true, props: ["modelValue"], async setup(e2) {
  let n2, w2;
  const { DefaultTagsApi: W2 } = A(), X2 = ([n2, w2] = withAsyncContext(() => W2.getTags()), n2 = await n2, w2(), n2), Y2 = JSON.parse(X2), Z = R().public.GELBOORU_TOKEN, ll = reactive({ animation: 400, group: "people", disabled: false, ghostClass: "ghost" }), { GelbooruApi: el, ShopApi: al } = A(), tl = Y$1(), il = M(), sl = ref("1"), ol = ref(""), dl = ref(false), nl = ref(1), cl = ref(0), { copy: vl } = s(), { addShop: ul, renameShopName: rl, shopList: ml, shop: pl, onlySetShop: kl, initShop: fl, setShop: $l, clearShop: Cl, removeShopByName: xl, copyShop: yl, addOneCircle: bl, removeOneCircle: hl, createNewShopItem: gl } = p(), _l = ref(Y2.class), zl = ref(_l.value[0].data), Vl = ref([]), jl = ref([]);
  watch(ml, (l2) => {
    "pc-design" === tl.name && kl(l2.map((l3) => l3.text).join(", "));
  });
  const wl = () => {
    il.go(-1);
  }, Sl = () => {
    il.replace("/pc/home");
  }, Ul = () => {
    dl.value = true;
  }, Tl = () => {
    $l(ol.value), dl.value = false;
  }, El = async () => {
    var l2;
    const e3 = await al.translate({ text: pl.value, type: 1 });
    (null == (l2 = null == e3 ? void 0 : e3.data) ? void 0 : l2.translateText).split("\uFF0C").forEach((l3, e4) => {
      ml.value[e4].translateText = l3;
    });
  }, Ol = (l2) => {
    nl.value = l2, cl.value = 0, 2 === l2 && (async () => {
      const l3 = await el.getList();
      Vl.value = l3.data;
    })();
  }, Al = async (l2, e3) => {
    if (1 === nl.value)
      zl.value = _l.value[l2].data, cl.value = l2;
    else if (2 === nl.value) {
      const a2 = await el.getTagsById({ token: Z, page: 1, limit: 100, category_id: e3 });
      cl.value = l2, jl.value = a2.data;
    }
  }, Il = (l2) => `${l2}-${uuid.v4()}`;
  return (e3, i2, s2, o2) => {
    const d2 = ni, n3 = d, c2 = a, v2 = I, u2 = ElRadioGroup, r2 = ElRadio, w3 = v, S2 = i, U2 = o, Q2 = h, W3 = ElButton, X3 = t, Y3 = a$1, Z2 = o$1;
    i2(`<div${ssrRenderAttrs(mergeProps({ class: ["design-page page", { white: "2" === sl.value }] }, o2))} data-v-78c26d29>`), i2(ssrRenderComponent(d2, { name: "mobile" }, { default: withCtx((l2, a2, t2, i3) => {
      if (!a2)
        return [createVNode("div", { class: "header" }, [createVNode("div", { class: "back" }, [createVNode(n3, { onClick: wl }), createVNode(c2, { onClick: Sl })]), createVNode("div", { class: "header-center" }, [createVNode(v2, { size: "20", name: "material-symbols:shopping-cart", onClick: Ul }), createVNode(v2, { size: "24", name: "material-symbols:new-label-rounded", onClick: unref(gl) }, null, 8, ["onClick"]), createVNode(v2, { size: "20", name: "material-symbols:content-copy-rounded", onClick: unref(yl) }, null, 8, ["onClick"]), createVNode(v2, { size: "19", name: "majesticons:translate", onClick: El }), createVNode(v2, { size: "20", name: "material-symbols:delete", onClick: unref(Cl) }, null, 8, ["onClick"])]), createVNode("div", { class: "header-right" }, [createVNode(u2, { modelValue: sl.value, "onUpdate:modelValue": (l3) => sl.value = l3, class: "ml-4" }, { default: withCtx(() => [createVNode(r2, { label: "1", size: "large" }, { default: withCtx(() => [createTextVNode("\u6DF1\u8272")]), _: 1 }), createVNode(r2, { label: "2", size: "large" }, { default: withCtx(() => [createTextVNode("\u6D45\u8272")]), _: 1 })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])])]), createVNode("div", { class: "body" }, [createVNode("div", { class: "left" }, [createVNode("div", { class: "left-layer1" }, [createVNode("div", { class: "layer-top" }, "\u6570\u636E\u6765\u6E90"), createVNode("div", { class: "layer-bottom" }, [createVNode("div", { class: ["left-menu", { "item-active": 1 === nl.value }], onClick: (l3) => Ol(1) }, " \u5E38\u89C4\u6807\u7B7E ", 10, ["onClick"]), createVNode("div", { class: ["left-menu", { "item-active": 2 === nl.value }], onClick: (l3) => Ol(2) }, " Gelbooru\u6807\u7B7E ", 10, ["onClick"]), createVNode("div", { class: ["left-menu", { "item-active": 3 === nl.value }], onClick: (l3) => Ol(3) }, " EH\u6807\u7B7E(500\u4E2A) ", 10, ["onClick"]), createVNode("div", { class: ["left-menu", { "item-active": 4 === nl.value }], onClick: (l3) => Ol(4) }, " EH\u6807\u7B7E(31000\u4E2A) ", 10, ["onClick"])]), createVNode("div", { class: "layer-top" }, "\u6807\u7B7E\u7C7B\u522B"), 1 === nl.value ? (openBlock(), createBlock("div", { key: 0, class: "type-list" }, [(openBlock(true), createBlock(Fragment, null, renderList(_l.value, (l3, e4) => (openBlock(), createBlock("div", { key: e4, class: ["type-item", { "type-item-active ": e4 === cl.value }], onClick: (l4) => Al(e4) }, toDisplayString(null == l3 ? void 0 : l3.name), 11, ["onClick"]))), 128))])) : createCommentVNode("", true), 2 === nl.value ? (openBlock(), createBlock("div", { key: 1, class: "type-list" }, [(openBlock(true), createBlock(Fragment, null, renderList(Vl.value, (l3, e4) => (openBlock(), createBlock("div", { key: e4, class: ["type-item", { "type-item-active ": e4 === cl.value }], onClick: (a3) => Al(e4, null == l3 ? void 0 : l3.id) }, toDisplayString(null == l3 ? void 0 : l3.name) + "(" + toDisplayString(null == l3 ? void 0 : l3.level) + ") ", 11, ["onClick"]))), 128))])) : createCommentVNode("", true)])]), createVNode("div", { class: "center" }, [createVNode("div", { class: "shop-card-con" }, [createVNode(unref(P), { modelValue: unref(ml), "onUpdate:modelValue": (l3) => isRef(ml) ? ml.value = l3 : null, "component-data": { name: "list" }, "drag-options": unref(ll), "item-key": (l3) => {
          Il(l3);
        } }, { item: withCtx(({ element: l3 }) => [createVNode("div", { class: "shop-item" }, [createVNode("div", null, [createVNode("span", null, toDisplayString(l3.text), 1), createVNode("span", { class: "tran-text" }, toDisplayString(l3.translateText), 1), createVNode(w3, { class: "add", onClick: (e4) => unref(bl)(l3.text) }, null, 8, ["onClick"]), createVNode(S2, { class: "minus", onClick: (e4) => unref(hl)(l3.text) }, null, 8, ["onClick"]), createVNode(U2, { class: "remove", onClick: (e4) => unref(rl)(l3.text) }, null, 8, ["onClick"]), createVNode(Q2, { class: "remove", onClick: (e4) => unref(xl)(l3.text) }, null, 8, ["onClick"])])])]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "drag-options", "item-key"])])]), createVNode("div", { class: "right" }, [createVNode("div", { class: "tag-list" }, [1 === nl.value ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(zl.value, (l3, a3) => (openBlock(), createBlock("div", { key: a3, class: "tag-item" }, [createVNode("div", { class: "text-con" }, [createVNode("p", { class: "zh" }, toDisplayString(null == l3 ? void 0 : l3.zh) + " " + toDisplayString(null == l3 ? void 0 : l3.en), 1)]), createVNode("div", null, [createVNode(W3, { size: "small", circle: "", onClick: (e4) => unref(ul)(null == l3 ? void 0 : l3.en) }, { default: withCtx(() => [renderSlot(e3.$slots, "icon", {}, () => [createVNode(X3)], true)]), _: 2 }, 1032, ["onClick"]), createVNode(W3, { size: "small", circle: "", onClick: (e4) => unref(vl)(null == l3 ? void 0 : l3.en) }, { default: withCtx(() => [renderSlot(e3.$slots, "icon", {}, () => [createVNode(Y3)], true)]), _: 2 }, 1032, ["onClick"])])]))), 128)) : createCommentVNode("", true), 2 === nl.value ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(jl.value, (l3, a3) => (openBlock(), createBlock("div", { key: a3, class: "tag-item" }, [createVNode("div", { class: "text-con" }, [createVNode("p", { class: "zh" }, toDisplayString(null == l3 ? void 0 : l3.t_name) + " " + toDisplayString(null == l3 ? void 0 : l3.name), 1)]), createVNode("div", null, [createVNode(W3, { size: "small", circle: "", onClick: (e4) => unref(ul)(null == l3 ? void 0 : l3.en) }, { default: withCtx(() => [renderSlot(e3.$slots, "icon", {}, () => [createVNode(X3)], true)]), _: 2 }, 1032, ["onClick"]), createVNode(W3, { size: "small", circle: "", onClick: (e4) => unref(vl)(null == l3 ? void 0 : l3.en) }, { default: withCtx(() => [renderSlot(e3.$slots, "icon", {}, () => [createVNode(Y3)], true)]), _: 2 }, 1032, ["onClick"])])]))), 128)) : createCommentVNode("", true)])])]), createVNode(Z2, null, { default: withCtx(() => [dl.value ? (openBlock(), createBlock("div", { key: 0, class: "import-wrapper" }, [createVNode("div", { class: "import-layer" }, [withDirectives(createVNode("textarea", { "onUpdate:modelValue": (l3) => ol.value = l3, type: "text" }, null, 8, ["onUpdate:modelValue"]), [[vModelText, ol.value]])]), createVNode("div", { class: "import-button" }, [createVNode("button", { onClick: () => dl.value = false }, "\u53D6\u6D88", 8, ["onClick"]), createVNode("button", { onClick: Tl }, "\u786E\u5B9A")])])) : createCommentVNode("", true)]), _: 1 })];
      a2(`<div class="header" data-v-78c26d29${i3}><div class="back" data-v-78c26d29${i3}>`), a2(ssrRenderComponent(n3, { onClick: wl }, null, t2, i3)), a2(ssrRenderComponent(c2, { onClick: Sl }, null, t2, i3)), a2(`</div><div class="header-center" data-v-78c26d29${i3}>`), a2(ssrRenderComponent(v2, { size: "20", name: "material-symbols:shopping-cart", onClick: Ul }, null, t2, i3)), a2(ssrRenderComponent(v2, { size: "24", name: "material-symbols:new-label-rounded", onClick: unref(gl) }, null, t2, i3)), a2(ssrRenderComponent(v2, { size: "20", name: "material-symbols:content-copy-rounded", onClick: unref(yl) }, null, t2, i3)), a2(ssrRenderComponent(v2, { size: "19", name: "majesticons:translate", onClick: El }, null, t2, i3)), a2(ssrRenderComponent(v2, { size: "20", name: "material-symbols:delete", onClick: unref(Cl) }, null, t2, i3)), a2(`</div><div class="header-right" data-v-78c26d29${i3}>`), a2(ssrRenderComponent(u2, { modelValue: sl.value, "onUpdate:modelValue": (l3) => sl.value = l3, class: "ml-4" }, { default: withCtx((l3, e4, a3, t3) => {
        if (!e4)
          return [createVNode(r2, { label: "1", size: "large" }, { default: withCtx(() => [createTextVNode("\u6DF1\u8272")]), _: 1 }), createVNode(r2, { label: "2", size: "large" }, { default: withCtx(() => [createTextVNode("\u6D45\u8272")]), _: 1 })];
        e4(ssrRenderComponent(r2, { label: "1", size: "large" }, { default: withCtx((l4, e5, a4, t4) => {
          if (!e5)
            return [createTextVNode("\u6DF1\u8272")];
          e5("\u6DF1\u8272");
        }), _: 1 }, a3, t3)), e4(ssrRenderComponent(r2, { label: "2", size: "large" }, { default: withCtx((l4, e5, a4, t4) => {
          if (!e5)
            return [createTextVNode("\u6D45\u8272")];
          e5("\u6D45\u8272");
        }), _: 1 }, a3, t3));
      }), _: 1 }, t2, i3)), a2(`</div></div><div class="body" data-v-78c26d29${i3}><div class="left" data-v-78c26d29${i3}><div class="left-layer1" data-v-78c26d29${i3}><div class="layer-top" data-v-78c26d29${i3}>\u6570\u636E\u6765\u6E90</div><div class="layer-bottom" data-v-78c26d29${i3}><div class="${ssrRenderClass([{ "item-active": 1 === nl.value }, "left-menu"])}" data-v-78c26d29${i3}> \u5E38\u89C4\u6807\u7B7E </div><div class="${ssrRenderClass([{ "item-active": 2 === nl.value }, "left-menu"])}" data-v-78c26d29${i3}> Gelbooru\u6807\u7B7E </div><div class="${ssrRenderClass([{ "item-active": 3 === nl.value }, "left-menu"])}" data-v-78c26d29${i3}> EH\u6807\u7B7E(500\u4E2A) </div><div class="${ssrRenderClass([{ "item-active": 4 === nl.value }, "left-menu"])}" data-v-78c26d29${i3}> EH\u6807\u7B7E(31000\u4E2A) </div></div><div class="layer-top" data-v-78c26d29${i3}>\u6807\u7B7E\u7C7B\u522B</div>`), 1 === nl.value ? (a2(`<div class="type-list" data-v-78c26d29${i3}><!--[-->`), ssrRenderList(_l.value, (l3, e4) => {
        a2(`<div class="${ssrRenderClass([{ "type-item-active ": e4 === cl.value }, "type-item"])}" data-v-78c26d29${i3}>${ssrInterpolate(null == l3 ? void 0 : l3.name)}</div>`);
      }), a2("<!--]--></div>")) : a2("<!---->"), 2 === nl.value ? (a2(`<div class="type-list" data-v-78c26d29${i3}><!--[-->`), ssrRenderList(Vl.value, (l3, e4) => {
        a2(`<div class="${ssrRenderClass([{ "type-item-active ": e4 === cl.value }, "type-item"])}" data-v-78c26d29${i3}>${ssrInterpolate(null == l3 ? void 0 : l3.name)}(${ssrInterpolate(null == l3 ? void 0 : l3.level)}) </div>`);
      }), a2("<!--]--></div>")) : a2("<!---->"), a2(`</div></div><div class="center" data-v-78c26d29${i3}><div class="shop-card-con" data-v-78c26d29${i3}>`), a2(ssrRenderComponent(unref(P), { modelValue: unref(ml), "onUpdate:modelValue": (l3) => isRef(ml) ? ml.value = l3 : null, "component-data": { name: "list" }, "drag-options": unref(ll), "item-key": (l3) => {
        Il(l3);
      } }, { item: withCtx(({ element: l3 }, e4, a3, t3) => {
        if (!e4)
          return [createVNode("div", { class: "shop-item" }, [createVNode("div", null, [createVNode("span", null, toDisplayString(l3.text), 1), createVNode("span", { class: "tran-text" }, toDisplayString(l3.translateText), 1), createVNode(w3, { class: "add", onClick: (e5) => unref(bl)(l3.text) }, null, 8, ["onClick"]), createVNode(S2, { class: "minus", onClick: (e5) => unref(hl)(l3.text) }, null, 8, ["onClick"]), createVNode(U2, { class: "remove", onClick: (e5) => unref(rl)(l3.text) }, null, 8, ["onClick"]), createVNode(Q2, { class: "remove", onClick: (e5) => unref(xl)(l3.text) }, null, 8, ["onClick"])])])];
        e4(`<div class="shop-item" data-v-78c26d29${t3}><div data-v-78c26d29${t3}><span data-v-78c26d29${t3}>${ssrInterpolate(l3.text)}</span><span class="tran-text" data-v-78c26d29${t3}>${ssrInterpolate(l3.translateText)}</span>`), e4(ssrRenderComponent(w3, { class: "add", onClick: (e5) => unref(bl)(l3.text) }, null, a3, t3)), e4(ssrRenderComponent(S2, { class: "minus", onClick: (e5) => unref(hl)(l3.text) }, null, a3, t3)), e4(ssrRenderComponent(U2, { class: "remove", onClick: (e5) => unref(rl)(l3.text) }, null, a3, t3)), e4(ssrRenderComponent(Q2, { class: "remove", onClick: (e5) => unref(xl)(l3.text) }, null, a3, t3)), e4("</div></div>");
      }), _: 1 }, t2, i3)), a2(`</div></div><div class="right" data-v-78c26d29${i3}><div class="tag-list" data-v-78c26d29${i3}>`), 1 === nl.value ? (a2("<!--[-->"), ssrRenderList(zl.value, (l3, s3) => {
        a2(`<div class="tag-item" data-v-78c26d29${i3}><div class="text-con" data-v-78c26d29${i3}><p class="zh" data-v-78c26d29${i3}>${ssrInterpolate(null == l3 ? void 0 : l3.zh)} ${ssrInterpolate(null == l3 ? void 0 : l3.en)}</p></div><div data-v-78c26d29${i3}>`), a2(ssrRenderComponent(W3, { size: "small", circle: "", onClick: (e4) => unref(ul)(null == l3 ? void 0 : l3.en) }, { default: withCtx((l4, a3, t3, i4) => {
          if (!a3)
            return [renderSlot(e3.$slots, "icon", {}, () => [createVNode(X3)], true)];
          ssrRenderSlot(e3.$slots, "icon", {}, () => {
            a3(ssrRenderComponent(X3, null, null, t3, i4));
          }, a3, t3, i4);
        }), _: 2 }, t2, i3)), a2(ssrRenderComponent(W3, { size: "small", circle: "", onClick: (e4) => unref(vl)(null == l3 ? void 0 : l3.en) }, { default: withCtx((l4, a3, t3, i4) => {
          if (!a3)
            return [renderSlot(e3.$slots, "icon", {}, () => [createVNode(Y3)], true)];
          ssrRenderSlot(e3.$slots, "icon", {}, () => {
            a3(ssrRenderComponent(Y3, null, null, t3, i4));
          }, a3, t3, i4);
        }), _: 2 }, t2, i3)), a2("</div></div>");
      }), a2("<!--]-->")) : a2("<!---->"), 2 === nl.value ? (a2("<!--[-->"), ssrRenderList(jl.value, (l3, s3) => {
        a2(`<div class="tag-item" data-v-78c26d29${i3}><div class="text-con" data-v-78c26d29${i3}><p class="zh" data-v-78c26d29${i3}>${ssrInterpolate(null == l3 ? void 0 : l3.t_name)} ${ssrInterpolate(null == l3 ? void 0 : l3.name)}</p></div><div data-v-78c26d29${i3}>`), a2(ssrRenderComponent(W3, { size: "small", circle: "", onClick: (e4) => unref(ul)(null == l3 ? void 0 : l3.en) }, { default: withCtx((l4, a3, t3, i4) => {
          if (!a3)
            return [renderSlot(e3.$slots, "icon", {}, () => [createVNode(X3)], true)];
          ssrRenderSlot(e3.$slots, "icon", {}, () => {
            a3(ssrRenderComponent(X3, null, null, t3, i4));
          }, a3, t3, i4);
        }), _: 2 }, t2, i3)), a2(ssrRenderComponent(W3, { size: "small", circle: "", onClick: (e4) => unref(vl)(null == l3 ? void 0 : l3.en) }, { default: withCtx((l4, a3, t3, i4) => {
          if (!a3)
            return [renderSlot(e3.$slots, "icon", {}, () => [createVNode(Y3)], true)];
          ssrRenderSlot(e3.$slots, "icon", {}, () => {
            a3(ssrRenderComponent(Y3, null, null, t3, i4));
          }, a3, t3, i4);
        }), _: 2 }, t2, i3)), a2("</div></div>");
      }), a2("<!--]-->")) : a2("<!---->"), a2("</div></div></div>"), a2(ssrRenderComponent(Z2, null, { default: withCtx((l3, e4, a3, t3) => {
        if (!e4)
          return [dl.value ? (openBlock(), createBlock("div", { key: 0, class: "import-wrapper" }, [createVNode("div", { class: "import-layer" }, [withDirectives(createVNode("textarea", { "onUpdate:modelValue": (l4) => ol.value = l4, type: "text" }, null, 8, ["onUpdate:modelValue"]), [[vModelText, ol.value]])]), createVNode("div", { class: "import-button" }, [createVNode("button", { onClick: () => dl.value = false }, "\u53D6\u6D88", 8, ["onClick"]), createVNode("button", { onClick: Tl }, "\u786E\u5B9A")])])) : createCommentVNode("", true)];
        dl.value ? e4(`<div class="import-wrapper" data-v-78c26d29${t3}><div class="import-layer" data-v-78c26d29${t3}><textarea type="text" data-v-78c26d29${t3}>${ssrInterpolate(ol.value)}</textarea></div><div class="import-button" data-v-78c26d29${t3}><button data-v-78c26d29${t3}>\u53D6\u6D88</button><button data-v-78c26d29${t3}>\u786E\u5B9A</button></div></div>`) : e4("<!---->");
      }), _: 1 }, t2, i3));
    }), _: 3 }, s2)), i2("</div>");
  };
} }), X = W.setup;
W.setup = (l2, e2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/design/index.vue"), X ? X(l2, e2) : void 0;
};
const Y = di(W, [["__scopeId", "data-v-78c26d29"]]);

export { Y as default };
