import o from './AppAnimate.0c3d74c4.mjs';
import { defineComponent, watch, ref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, createTextVNode, unref, Fragment, useSSRContext } from 'vue';
import { p, s } from './shop.269c075a.mjs';
import { n } from './copy-document.b505b457.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { d as di } from '../server.mjs';
import 'element-plus/lib';
import 'vue3-clipboard';
import 'element-plus';
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

const h = defineComponent({ __name: "TemplateDetail", __ssrInlineRender: true, props: ["modelValue", "currentTemplate"], emits: ["update:modelValue"], setup(n2, { emit: m2 }) {
  const b2 = n2;
  watch(() => b2.modelValue, (e2) => {
    e2 && w();
  });
  const { setShop: h2 } = p(), { copy: y2 } = s(), z2 = ref(false), C = () => {
    g(), m2("update:modelValue", false);
  }, w = () => {
    document.body.style.overflowY = "hidden", document.addEventListener("touchmove", function(e2) {
      e2.preventDefault();
    }, false);
  }, g = () => {
    document.body.style.overflowY = "", document.removeEventListener("touchmove", function(e2) {
      e2.preventDefault();
    }, false);
  }, j = () => {
    var e2;
    h2(null == (e2 = b2.currentTemplate) ? void 0 : e2.prompt);
  };
  return (l2, t2, m3, c2) => {
    const f2 = o, b3 = n;
    t2(`<div${ssrRenderAttrs(c2)} data-v-17fd8661>`), t2(ssrRenderComponent(f2, null, { default: withCtx((e2, l3, t3, a2) => {
      var m4, c3, f3, $2, T2, h3, w2, g2, V, D, A, E, I, L, S, Y, R, q, B, F, G, H, J, K, M, N, O, P, Q, U, W, X, Z, ee, ne, le, te, ae, de, re, pe, ue, oe, ve, ie, se, me, ce, fe, $e, Te, ke, _e, xe, be, he, ye, ze;
      if (!l3)
        return [n2.modelValue ? (openBlock(), createBlock("div", { key: 0, class: "template-preview" }, [createVNode("div", { class: "preview-wrap", onClick: C }), createVNode("div", { class: "preview-con" }, [createVNode("div", { class: "right" }, [createVNode("div", { class: "image-con" }, [createVNode("img", { src: null == (U = n2.currentTemplate) ? void 0 : U.preview, alt: "" }, null, 8, ["src"])])]), n2.currentTemplate ? (openBlock(), createBlock("div", { key: 0, class: "left" }, [`${null == (W = n2.currentTemplate) ? void 0 : W.name}` ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("span", null, "name :"), createVNode("span", null, toDisplayString(null == (X = n2.currentTemplate) ? void 0 : X.name), 1)])) : createCommentVNode("", true), (null == (Z = n2.currentTemplate) ? void 0 : Z.author) ? (openBlock(), createBlock("div", { key: 1 }, [createVNode("span", null, "author :"), createVNode("span", null, toDisplayString(null == (ee = n2.currentTemplate) ? void 0 : ee.author), 1)])) : createCommentVNode("", true), `${null == (ne = n2.currentTemplate) ? void 0 : ne.like}` ? (openBlock(), createBlock("div", { key: 2 }, [createVNode("span", null, "like :"), createVNode("span", null, toDisplayString(null == (le = n2.currentTemplate) ? void 0 : le.like), 1)])) : createCommentVNode("", true), `${null == (te = n2.currentTemplate) ? void 0 : te.prompt}` ? (openBlock(), createBlock("div", { key: 3 }, [createVNode("span", null, "prompt :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (ae = n2.currentTemplate) ? void 0 : ae.prompt) + " ", 1), createVNode(b3, { onClick: (e3) => {
          var l4;
          return unref(y2)(null == (l4 = n2.currentTemplate) ? void 0 : l4.prompt);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), unref(z2) ? (openBlock(), createBlock(Fragment, { key: 4 }, [(null == (de = n2.currentTemplate) ? void 0 : de.prompt_zh) ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("span", null, "prompt_zh :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (re = n2.currentTemplate) ? void 0 : re.prompt_zh) + " ", 1), createVNode(b3, { onClick: (e3) => {
          var l4;
          return unref(y2)(null == (l4 = n2.currentTemplate) ? void 0 : l4.prompt_zh);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), (null == (pe = n2.currentTemplate) ? void 0 : pe.n_prompt) ? (openBlock(), createBlock("div", { key: 1 }, [createVNode("span", null, "n_prompt :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (ue = n2.currentTemplate) ? void 0 : ue.n_prompt) + " ", 1), createVNode(b3, { onClick: (e3) => {
          var l4;
          return unref(y2)(null == (l4 = n2.currentTemplate) ? void 0 : l4.n_prompt);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), (null == (oe = n2.currentTemplate) ? void 0 : oe.n_prompt_zh) ? (openBlock(), createBlock("div", { key: 2 }, [createVNode("span", null, "n_prompt_zh :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (ve = n2.currentTemplate) ? void 0 : ve.n_prompt_zh) + " ", 1), createVNode(b3, { onClick: (e3) => {
          var l4;
          return unref(y2)(null == (l4 = n2.currentTemplate) ? void 0 : l4.n_prompt_zh);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), (null == (ie = n2.currentTemplate) ? void 0 : ie.step) ? (openBlock(), createBlock("div", { key: 3 }, [createVNode("span", null, "step :"), createVNode("span", null, toDisplayString(null == (se = n2.currentTemplate) ? void 0 : se.step), 1)])) : createCommentVNode("", true), (null == (me = n2.currentTemplate) ? void 0 : me.sampler) ? (openBlock(), createBlock("div", { key: 4 }, [createVNode("span", null, "sampler :"), createVNode("span", null, toDisplayString(null == (ce = n2.currentTemplate) ? void 0 : ce.sampler), 1)])) : createCommentVNode("", true), (null == (fe = n2.currentTemplate) ? void 0 : fe.scale) ? (openBlock(), createBlock("div", { key: 5 }, [createVNode("span", null, "scale :"), createVNode("span", null, toDisplayString(null == ($e = n2.currentTemplate) ? void 0 : $e.scale), 1)])) : createCommentVNode("", true), (null == (Te = n2.currentTemplate) ? void 0 : Te.seed) ? (openBlock(), createBlock("div", { key: 6 }, [createVNode("span", null, "seed :"), createVNode("span", null, toDisplayString(null == (ke = n2.currentTemplate) ? void 0 : ke.seed), 1)])) : createCommentVNode("", true), (null == (_e = n2.currentTemplate) ? void 0 : _e.size) ? (openBlock(), createBlock("div", { key: 7 }, [createVNode("span", null, "size :"), createVNode("span", null, toDisplayString(null == (xe = n2.currentTemplate) ? void 0 : xe.size), 1)])) : createCommentVNode("", true), (null == (be = n2.currentTemplate) ? void 0 : be.model) ? (openBlock(), createBlock("div", { key: 8 }, [createVNode("span", null, "model :"), createVNode("span", null, toDisplayString(null == (he = n2.currentTemplate) ? void 0 : he.model), 1)])) : createCommentVNode("", true), (null == (ye = n2.currentTemplate) ? void 0 : ye.desc) ? (openBlock(), createBlock("div", { key: 9 }, [createVNode("span", null, "desc :"), createVNode("span", null, toDisplayString(null == (ze = n2.currentTemplate) ? void 0 : ze.desc), 1)])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)])) : createCommentVNode("", true), createVNode("div", { class: "button-con" }, [createVNode("button", { class: "btn btn-secondary btn-sm m-r-10", onClick: C }, "\u5173\u95ED"), createVNode("button", { class: "btn btn-accent btn-sm m-r-10", onClick: () => z2.value = !unref(z2) }, " \u67E5\u770B\u66F4\u591A ", 8, ["onClick"]), createVNode("button", { class: "btn btn-primary btn-sm", onClick: j }, " \u5BFC\u5165\u8D2D\u7269\u8F66 ")])])])) : createCommentVNode("", true)];
      n2.modelValue ? (l3(`<div class="template-preview" data-v-17fd8661${a2}><div class="preview-wrap" data-v-17fd8661${a2}></div><div class="preview-con" data-v-17fd8661${a2}><div class="right" data-v-17fd8661${a2}><div class="image-con" data-v-17fd8661${a2}><img${ssrRenderAttr("src", null == (m4 = n2.currentTemplate) ? void 0 : m4.preview)} alt="" data-v-17fd8661${a2}></div></div>`), n2.currentTemplate ? (l3(`<div class="left" data-v-17fd8661${a2}>`), `${null == (c3 = n2.currentTemplate) ? void 0 : c3.name}` ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>name :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (f3 = n2.currentTemplate) ? void 0 : f3.name)}</span></div>`) : l3("<!---->"), (null == ($2 = n2.currentTemplate) ? void 0 : $2.author) ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>author :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (T2 = n2.currentTemplate) ? void 0 : T2.author)}</span></div>`) : l3("<!---->"), `${null == (h3 = n2.currentTemplate) ? void 0 : h3.like}` ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>like :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (w2 = n2.currentTemplate) ? void 0 : w2.like)}</span></div>`) : l3("<!---->"), `${null == (g2 = n2.currentTemplate) ? void 0 : g2.prompt}` ? (l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>prompt :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (V = n2.currentTemplate) ? void 0 : V.prompt)} `), l3(ssrRenderComponent(b3, { onClick: (e3) => {
        var l4;
        return unref(y2)(null == (l4 = n2.currentTemplate) ? void 0 : l4.prompt);
      } }, null, t3, a2)), l3("</span></div>")) : l3("<!---->"), unref(z2) ? (l3("<!--[-->"), (null == (D = n2.currentTemplate) ? void 0 : D.prompt_zh) ? (l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>prompt_zh :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (A = n2.currentTemplate) ? void 0 : A.prompt_zh)} `), l3(ssrRenderComponent(b3, { onClick: (e3) => {
        var l4;
        return unref(y2)(null == (l4 = n2.currentTemplate) ? void 0 : l4.prompt_zh);
      } }, null, t3, a2)), l3("</span></div>")) : l3("<!---->"), (null == (E = n2.currentTemplate) ? void 0 : E.n_prompt) ? (l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>n_prompt :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (I = n2.currentTemplate) ? void 0 : I.n_prompt)} `), l3(ssrRenderComponent(b3, { onClick: (e3) => {
        var l4;
        return unref(y2)(null == (l4 = n2.currentTemplate) ? void 0 : l4.n_prompt);
      } }, null, t3, a2)), l3("</span></div>")) : l3("<!---->"), (null == (L = n2.currentTemplate) ? void 0 : L.n_prompt_zh) ? (l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>n_prompt_zh :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (S = n2.currentTemplate) ? void 0 : S.n_prompt_zh)} `), l3(ssrRenderComponent(b3, { onClick: (e3) => {
        var l4;
        return unref(y2)(null == (l4 = n2.currentTemplate) ? void 0 : l4.n_prompt_zh);
      } }, null, t3, a2)), l3("</span></div>")) : l3("<!---->"), (null == (Y = n2.currentTemplate) ? void 0 : Y.step) ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>step :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (R = n2.currentTemplate) ? void 0 : R.step)}</span></div>`) : l3("<!---->"), (null == (q = n2.currentTemplate) ? void 0 : q.sampler) ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>sampler :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (B = n2.currentTemplate) ? void 0 : B.sampler)}</span></div>`) : l3("<!---->"), (null == (F = n2.currentTemplate) ? void 0 : F.scale) ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>scale :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (G = n2.currentTemplate) ? void 0 : G.scale)}</span></div>`) : l3("<!---->"), (null == (H = n2.currentTemplate) ? void 0 : H.seed) ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>seed :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (J = n2.currentTemplate) ? void 0 : J.seed)}</span></div>`) : l3("<!---->"), (null == (K = n2.currentTemplate) ? void 0 : K.size) ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>size :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (M = n2.currentTemplate) ? void 0 : M.size)}</span></div>`) : l3("<!---->"), (null == (N = n2.currentTemplate) ? void 0 : N.model) ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>model :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (O = n2.currentTemplate) ? void 0 : O.model)}</span></div>`) : l3("<!---->"), (null == (P = n2.currentTemplate) ? void 0 : P.desc) ? l3(`<div data-v-17fd8661${a2}><span data-v-17fd8661${a2}>desc :</span><span data-v-17fd8661${a2}>${ssrInterpolate(null == (Q = n2.currentTemplate) ? void 0 : Q.desc)}</span></div>`) : l3("<!---->"), l3("<!--]-->")) : l3("<!---->"), l3("</div>")) : l3("<!---->"), l3(`<div class="button-con" data-v-17fd8661${a2}><button class="btn btn-secondary btn-sm m-r-10" data-v-17fd8661${a2}>\u5173\u95ED</button><button class="btn btn-accent btn-sm m-r-10" data-v-17fd8661${a2}> \u67E5\u770B\u66F4\u591A </button><button class="btn btn-primary btn-sm" data-v-17fd8661${a2}> \u5BFC\u5165\u8D2D\u7269\u8F66 </button></div></div></div>`)) : l3("<!---->");
    }), _: 1 }, m3)), t2("</div>");
  };
} }), y = h.setup;
h.setup = (e2, n2) => {
  const l2 = useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("components/mobile/TemplateDetail.vue"), y ? y(e2, n2) : void 0;
};
const z = di(h, [["__scopeId", "data-v-17fd8661"]]);

export { z as default };
