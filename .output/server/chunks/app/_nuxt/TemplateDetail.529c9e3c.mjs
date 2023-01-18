import o from './AppAnimate.b0d9e6d2.mjs';
import { defineComponent, watch, withCtx, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { p, s } from './shop.269c075a.mjs';
import { n } from './copy-document.b505b457.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const h = defineComponent({ __name: "TemplateDetail", __ssrInlineRender: true, props: ["modelValue", "currentTemplate"], emits: ["update:modelValue"], setup(e2, { emit: d2 }) {
  const _2 = e2;
  watch(() => _2.modelValue, (l2) => {
    l2 && y();
  });
  const { setShop: h2 } = p(), { copy: k2 } = s(), x2 = () => {
    z(), d2("update:modelValue", false);
  }, y = () => {
    document.body.style.overflowY = "hidden", document.addEventListener("touchmove", function(l2) {
      l2.preventDefault();
    }, false);
  }, z = () => {
    document.body.style.overflowY = "", document.removeEventListener("touchmove", function(l2) {
      l2.preventDefault();
    }, false);
  }, C = () => {
    var l2;
    h2(null == (l2 = _2.currentTemplate) ? void 0 : l2.prompt), x2();
  };
  return (n2, d3, v2, m2) => {
    const _3 = o, h3 = n;
    d3(`<div${ssrRenderAttrs(m2)} data-v-f33b4874>`), d3(ssrRenderComponent(_3, null, { default: withCtx((l2, n3, a2, d4) => {
      var v3, m3, c2, b2, _4, y2, z2, w, g, j, V, D, A, E, I, L, S, Y, R, q, B, F, G, H, J, K, M, N, O, P, Q, U, W, X, Z, ll, el, nl, al, tl, pl, rl, ul, ol, il, sl, dl, vl, ml, cl, bl, fl, $l, Tl;
      if (!n3)
        return [e2.modelValue ? (openBlock(), createBlock("div", { key: 0, class: "template-preview" }, [createVNode("div", { class: "preview-wrap", onClick: x2 }), createVNode("div", { class: "preview-con" }, [createVNode("div", { class: "left" }, [createVNode("div", { class: "list-con" }, [createVNode("ul", null, [createVNode("li", null, [createVNode("span", null, "name :"), createVNode("span", null, toDisplayString(null == (N = e2.currentTemplate) ? void 0 : N.name), 1)]), (null == (O = e2.currentTemplate) ? void 0 : O.author) ? (openBlock(), createBlock("li", { key: 0 }, [createVNode("span", null, "author :"), createVNode("span", null, toDisplayString(null == (P = e2.currentTemplate) ? void 0 : P.author), 1)])) : createCommentVNode("", true), `${null == (Q = e2.currentTemplate) ? void 0 : Q.like}` ? (openBlock(), createBlock("li", { key: 1 }, [createVNode("span", null, "like :"), createVNode("span", null, toDisplayString(null == (U = e2.currentTemplate) ? void 0 : U.like), 1)])) : createCommentVNode("", true), createVNode("li", null, [createVNode("span", null, "prompt :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (W = e2.currentTemplate) ? void 0 : W.prompt) + " ", 1), createVNode(h3, { onClick: (l3) => {
          var n4;
          return unref(k2)(null == (n4 = e2.currentTemplate) ? void 0 : n4.prompt);
        } }, null, 8, ["onClick"])])]), (null == (X = e2.currentTemplate) ? void 0 : X.prompt_zh) ? (openBlock(), createBlock("li", { key: 2 }, [createVNode("span", null, "prompt_zh :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (Z = e2.currentTemplate) ? void 0 : Z.prompt_zh) + " ", 1), createVNode(h3, { onClick: (l3) => {
          var n4;
          return unref(k2)(null == (n4 = e2.currentTemplate) ? void 0 : n4.prompt_zh);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), (null == (ll = e2.currentTemplate) ? void 0 : ll.n_prompt) ? (openBlock(), createBlock("li", { key: 3 }, [createVNode("span", null, "n_prompt :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (el = e2.currentTemplate) ? void 0 : el.n_prompt) + " ", 1), createVNode(h3, { onClick: (l3) => {
          var n4;
          return unref(k2)(null == (n4 = e2.currentTemplate) ? void 0 : n4.n_prompt);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), (null == (nl = e2.currentTemplate) ? void 0 : nl.n_prompt_zh) ? (openBlock(), createBlock("li", { key: 4 }, [createVNode("span", null, "n_prompt_zh :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (al = e2.currentTemplate) ? void 0 : al.n_prompt_zh) + " ", 1), createVNode(h3, { onClick: (l3) => {
          var n4;
          return unref(k2)(null == (n4 = e2.currentTemplate) ? void 0 : n4.n_prompt_zh);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), (null == (tl = e2.currentTemplate) ? void 0 : tl.step) ? (openBlock(), createBlock("li", { key: 5 }, [createVNode("span", null, "step :"), createVNode("span", null, toDisplayString(null == (pl = e2.currentTemplate) ? void 0 : pl.step), 1)])) : createCommentVNode("", true), (null == (rl = e2.currentTemplate) ? void 0 : rl.sampler) ? (openBlock(), createBlock("li", { key: 6 }, [createVNode("span", null, "sampler :"), createVNode("span", null, toDisplayString(null == (ul = e2.currentTemplate) ? void 0 : ul.sampler), 1)])) : createCommentVNode("", true), (null == (ol = e2.currentTemplate) ? void 0 : ol.scale) ? (openBlock(), createBlock("li", { key: 7 }, [createVNode("span", null, "scale :"), createVNode("span", null, toDisplayString(null == (il = e2.currentTemplate) ? void 0 : il.scale), 1)])) : createCommentVNode("", true), (null == (sl = e2.currentTemplate) ? void 0 : sl.seed) ? (openBlock(), createBlock("li", { key: 8 }, [createVNode("span", null, "seed :"), createVNode("span", null, toDisplayString(null == (dl = e2.currentTemplate) ? void 0 : dl.seed), 1)])) : createCommentVNode("", true), (null == (vl = e2.currentTemplate) ? void 0 : vl.size) ? (openBlock(), createBlock("li", { key: 9 }, [createVNode("span", null, "size :"), createVNode("span", null, toDisplayString(null == (ml = e2.currentTemplate) ? void 0 : ml.size), 1)])) : createCommentVNode("", true), (null == (cl = e2.currentTemplate) ? void 0 : cl.model) ? (openBlock(), createBlock("li", { key: 10 }, [createVNode("span", null, "model :"), createVNode("span", null, toDisplayString(null == (bl = e2.currentTemplate) ? void 0 : bl.model), 1)])) : createCommentVNode("", true), (null == (fl = e2.currentTemplate) ? void 0 : fl.desc) ? (openBlock(), createBlock("li", { key: 11 }, [createVNode("span", null, "desc :"), createVNode("span", null, toDisplayString(null == ($l = e2.currentTemplate) ? void 0 : $l.desc), 1)])) : createCommentVNode("", true)])])]), createVNode("div", { class: "right" }, [createVNode("div", { class: "image-con" }, [createVNode("img", { src: null == (Tl = e2.currentTemplate) ? void 0 : Tl.preview, alt: "" }, null, 8, ["src"])]), createVNode("div", { class: "button-con" }, [createVNode("button", { class: "btn btn-secondary m-r-10", onClick: x2 }, "\u5173\u95ED"), createVNode("button", { class: "btn btn-primary", onClick: C }, "\u5BFC\u5165\u8D2D\u7269\u8F66")])])])])) : createCommentVNode("", true)];
      e2.modelValue ? (n3(`<div class="template-preview" data-v-f33b4874${d4}><div class="preview-wrap" data-v-f33b4874${d4}></div><div class="preview-con" data-v-f33b4874${d4}><div class="left" data-v-f33b4874${d4}><div class="list-con" data-v-f33b4874${d4}><ul data-v-f33b4874${d4}><li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>name :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (v3 = e2.currentTemplate) ? void 0 : v3.name)}</span></li>`), (null == (m3 = e2.currentTemplate) ? void 0 : m3.author) ? n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>author :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (c2 = e2.currentTemplate) ? void 0 : c2.author)}</span></li>`) : n3("<!---->"), `${null == (b2 = e2.currentTemplate) ? void 0 : b2.like}` ? n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>like :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (_4 = e2.currentTemplate) ? void 0 : _4.like)}</span></li>`) : n3("<!---->"), n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>prompt :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (y2 = e2.currentTemplate) ? void 0 : y2.prompt)} `), n3(ssrRenderComponent(h3, { onClick: (l3) => {
        var n4;
        return unref(k2)(null == (n4 = e2.currentTemplate) ? void 0 : n4.prompt);
      } }, null, a2, d4)), n3("</span></li>"), (null == (z2 = e2.currentTemplate) ? void 0 : z2.prompt_zh) ? (n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>prompt_zh :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (w = e2.currentTemplate) ? void 0 : w.prompt_zh)} `), n3(ssrRenderComponent(h3, { onClick: (l3) => {
        var n4;
        return unref(k2)(null == (n4 = e2.currentTemplate) ? void 0 : n4.prompt_zh);
      } }, null, a2, d4)), n3("</span></li>")) : n3("<!---->"), (null == (g = e2.currentTemplate) ? void 0 : g.n_prompt) ? (n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>n_prompt :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (j = e2.currentTemplate) ? void 0 : j.n_prompt)} `), n3(ssrRenderComponent(h3, { onClick: (l3) => {
        var n4;
        return unref(k2)(null == (n4 = e2.currentTemplate) ? void 0 : n4.n_prompt);
      } }, null, a2, d4)), n3("</span></li>")) : n3("<!---->"), (null == (V = e2.currentTemplate) ? void 0 : V.n_prompt_zh) ? (n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>n_prompt_zh :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (D = e2.currentTemplate) ? void 0 : D.n_prompt_zh)} `), n3(ssrRenderComponent(h3, { onClick: (l3) => {
        var n4;
        return unref(k2)(null == (n4 = e2.currentTemplate) ? void 0 : n4.n_prompt_zh);
      } }, null, a2, d4)), n3("</span></li>")) : n3("<!---->"), (null == (A = e2.currentTemplate) ? void 0 : A.step) ? n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>step :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (E = e2.currentTemplate) ? void 0 : E.step)}</span></li>`) : n3("<!---->"), (null == (I = e2.currentTemplate) ? void 0 : I.sampler) ? n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>sampler :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (L = e2.currentTemplate) ? void 0 : L.sampler)}</span></li>`) : n3("<!---->"), (null == (S = e2.currentTemplate) ? void 0 : S.scale) ? n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>scale :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (Y = e2.currentTemplate) ? void 0 : Y.scale)}</span></li>`) : n3("<!---->"), (null == (R = e2.currentTemplate) ? void 0 : R.seed) ? n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>seed :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (q = e2.currentTemplate) ? void 0 : q.seed)}</span></li>`) : n3("<!---->"), (null == (B = e2.currentTemplate) ? void 0 : B.size) ? n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>size :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (F = e2.currentTemplate) ? void 0 : F.size)}</span></li>`) : n3("<!---->"), (null == (G = e2.currentTemplate) ? void 0 : G.model) ? n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>model :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (H = e2.currentTemplate) ? void 0 : H.model)}</span></li>`) : n3("<!---->"), (null == (J = e2.currentTemplate) ? void 0 : J.desc) ? n3(`<li data-v-f33b4874${d4}><span data-v-f33b4874${d4}>desc :</span><span data-v-f33b4874${d4}>${ssrInterpolate(null == (K = e2.currentTemplate) ? void 0 : K.desc)}</span></li>`) : n3("<!---->"), n3(`</ul></div></div><div class="right" data-v-f33b4874${d4}><div class="image-con" data-v-f33b4874${d4}><img${ssrRenderAttr("src", null == (M = e2.currentTemplate) ? void 0 : M.preview)} alt="" data-v-f33b4874${d4}></div><div class="button-con" data-v-f33b4874${d4}><button class="btn btn-secondary m-r-10" data-v-f33b4874${d4}>\u5173\u95ED</button><button class="btn btn-primary" data-v-f33b4874${d4}>\u5BFC\u5165\u8D2D\u7269\u8F66</button></div></div></div></div>`)) : n3("<!---->");
    }), _: 1 }, v2)), d3("</div>");
  };
} }), k = h.setup;
h.setup = (l2, e2) => {
  const n2 = useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("components/pc/TemplateDetail.vue"), k ? k(l2, e2) : void 0;
};
const x = di(h, [["__scopeId", "data-v-f33b4874"]]);

export { x as default };
