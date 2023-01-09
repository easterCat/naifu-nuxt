import o from './AppAnimate.b0d9e6d2.mjs';
import { defineComponent, watch, withCtx, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { p, s } from './shop.4d5e891e.mjs';
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

const x = defineComponent({ __name: "TemplateDetail", __ssrInlineRender: true, props: ["modelValue", "currentTemplate"], emits: ["update:modelValue"], setup(e2, { emit: i2 }) {
  const k2 = e2;
  watch(() => k2.modelValue, (l2) => {
    l2 && f();
  });
  const { setShop: x2 } = p(), { copy: b2 } = s(), y2 = () => {
    z(), i2("update:modelValue", false);
  }, f = () => {
    document.body.style.overflowY = "hidden", document.addEventListener("touchmove", function(l2) {
      l2.preventDefault();
    }, false);
  }, z = () => {
    document.body.style.overflowY = "", document.removeEventListener("touchmove", function(l2) {
      l2.preventDefault();
    }, false);
  }, C = () => {
    var l2;
    x2(null == (l2 = k2.currentTemplate) ? void 0 : l2.prompt), y2();
  };
  return (a2, i3, s2, v2) => {
    const k3 = o, x3 = n;
    i3(`<div${ssrRenderAttrs(v2)} data-v-d25ac2cd>`), i3(ssrRenderComponent(k3, null, { default: withCtx((l2, a3, n2, i4) => {
      var s3, v3, m2, $2, k4, f2, z2, w, g, j, V, D, A, E, I, L, S, Y, R, q, B, F, G, H, J, K, M, N, O, P, Q, U, W, X, Z, ll, el, al, nl, tl, dl, pl, rl, cl, ul, ol, il, sl, vl, ml, $l, Tl, _l, hl;
      if (!a3)
        return [e2.modelValue ? (openBlock(), createBlock("div", { key: 0, class: "template-preview" }, [createVNode("div", { class: "preview-wrap", onClick: y2 }), createVNode("div", { class: "preview-con" }, [createVNode("div", { class: "left" }, [createVNode("div", { class: "list-con" }, [createVNode("ul", null, [createVNode("li", null, [createVNode("span", null, "name :"), createVNode("span", null, toDisplayString(null == (N = e2.currentTemplate) ? void 0 : N.name), 1)]), (null == (O = e2.currentTemplate) ? void 0 : O.author) ? (openBlock(), createBlock("li", { key: 0 }, [createVNode("span", null, "author :"), createVNode("span", null, toDisplayString(null == (P = e2.currentTemplate) ? void 0 : P.author), 1)])) : createCommentVNode("", true), `${null == (Q = e2.currentTemplate) ? void 0 : Q.like}` ? (openBlock(), createBlock("li", { key: 1 }, [createVNode("span", null, "like :"), createVNode("span", null, toDisplayString(null == (U = e2.currentTemplate) ? void 0 : U.like), 1)])) : createCommentVNode("", true), createVNode("li", null, [createVNode("span", null, "prompt :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (W = e2.currentTemplate) ? void 0 : W.prompt) + " ", 1), createVNode(x3, { onClick: (l3) => {
          var a4;
          return unref(b2)(null == (a4 = e2.currentTemplate) ? void 0 : a4.prompt);
        } }, null, 8, ["onClick"])])]), (null == (X = e2.currentTemplate) ? void 0 : X.prompt_zh) ? (openBlock(), createBlock("li", { key: 2 }, [createVNode("span", null, "prompt_zh :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (Z = e2.currentTemplate) ? void 0 : Z.prompt_zh) + " ", 1), createVNode(x3, { onClick: (l3) => {
          var a4;
          return unref(b2)(null == (a4 = e2.currentTemplate) ? void 0 : a4.prompt_zh);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), (null == (ll = e2.currentTemplate) ? void 0 : ll.n_prompt) ? (openBlock(), createBlock("li", { key: 3 }, [createVNode("span", null, "n_prompt :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (el = e2.currentTemplate) ? void 0 : el.n_prompt) + " ", 1), createVNode(x3, { onClick: (l3) => {
          var a4;
          return unref(b2)(null == (a4 = e2.currentTemplate) ? void 0 : a4.n_prompt);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), (null == (al = e2.currentTemplate) ? void 0 : al.n_prompt_zh) ? (openBlock(), createBlock("li", { key: 4 }, [createVNode("span", null, "n_prompt_zh :"), createVNode("span", null, [createTextVNode(toDisplayString(null == (nl = e2.currentTemplate) ? void 0 : nl.n_prompt_zh) + " ", 1), createVNode(x3, { onClick: (l3) => {
          var a4;
          return unref(b2)(null == (a4 = e2.currentTemplate) ? void 0 : a4.n_prompt_zh);
        } }, null, 8, ["onClick"])])])) : createCommentVNode("", true), (null == (tl = e2.currentTemplate) ? void 0 : tl.step) ? (openBlock(), createBlock("li", { key: 5 }, [createVNode("span", null, "step :"), createVNode("span", null, toDisplayString(null == (dl = e2.currentTemplate) ? void 0 : dl.step), 1)])) : createCommentVNode("", true), (null == (pl = e2.currentTemplate) ? void 0 : pl.sampler) ? (openBlock(), createBlock("li", { key: 6 }, [createVNode("span", null, "sampler :"), createVNode("span", null, toDisplayString(null == (rl = e2.currentTemplate) ? void 0 : rl.sampler), 1)])) : createCommentVNode("", true), (null == (cl = e2.currentTemplate) ? void 0 : cl.scale) ? (openBlock(), createBlock("li", { key: 7 }, [createVNode("span", null, "scale :"), createVNode("span", null, toDisplayString(null == (ul = e2.currentTemplate) ? void 0 : ul.scale), 1)])) : createCommentVNode("", true), (null == (ol = e2.currentTemplate) ? void 0 : ol.seed) ? (openBlock(), createBlock("li", { key: 8 }, [createVNode("span", null, "seed :"), createVNode("span", null, toDisplayString(null == (il = e2.currentTemplate) ? void 0 : il.seed), 1)])) : createCommentVNode("", true), (null == (sl = e2.currentTemplate) ? void 0 : sl.size) ? (openBlock(), createBlock("li", { key: 9 }, [createVNode("span", null, "size :"), createVNode("span", null, toDisplayString(null == (vl = e2.currentTemplate) ? void 0 : vl.size), 1)])) : createCommentVNode("", true), (null == (ml = e2.currentTemplate) ? void 0 : ml.model) ? (openBlock(), createBlock("li", { key: 10 }, [createVNode("span", null, "model :"), createVNode("span", null, toDisplayString(null == ($l = e2.currentTemplate) ? void 0 : $l.model), 1)])) : createCommentVNode("", true), (null == (Tl = e2.currentTemplate) ? void 0 : Tl.desc) ? (openBlock(), createBlock("li", { key: 11 }, [createVNode("span", null, "desc :"), createVNode("span", null, toDisplayString(null == (_l = e2.currentTemplate) ? void 0 : _l.desc), 1)])) : createCommentVNode("", true)])])]), createVNode("div", { class: "right" }, [createVNode("div", { class: "image-con" }, [createVNode("img", { src: null == (hl = e2.currentTemplate) ? void 0 : hl.preview, alt: "" }, null, 8, ["src"])]), createVNode("div", { class: "button-con" }, [createVNode("button", { class: "btn btn-secondary m-r-10", onClick: y2 }, "\u5173\u95ED"), createVNode("button", { class: "btn btn-primary", onClick: C }, "\u5BFC\u5165\u8D2D\u7269\u8F66")])])])])) : createCommentVNode("", true)];
      e2.modelValue ? (a3(`<div class="template-preview" data-v-d25ac2cd${i4}><div class="preview-wrap" data-v-d25ac2cd${i4}></div><div class="preview-con" data-v-d25ac2cd${i4}><div class="left" data-v-d25ac2cd${i4}><div class="list-con" data-v-d25ac2cd${i4}><ul data-v-d25ac2cd${i4}><li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>name :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (s3 = e2.currentTemplate) ? void 0 : s3.name)}</span></li>`), (null == (v3 = e2.currentTemplate) ? void 0 : v3.author) ? a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>author :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (m2 = e2.currentTemplate) ? void 0 : m2.author)}</span></li>`) : a3("<!---->"), `${null == ($2 = e2.currentTemplate) ? void 0 : $2.like}` ? a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>like :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (k4 = e2.currentTemplate) ? void 0 : k4.like)}</span></li>`) : a3("<!---->"), a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>prompt :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (f2 = e2.currentTemplate) ? void 0 : f2.prompt)} `), a3(ssrRenderComponent(x3, { onClick: (l3) => {
        var a4;
        return unref(b2)(null == (a4 = e2.currentTemplate) ? void 0 : a4.prompt);
      } }, null, n2, i4)), a3("</span></li>"), (null == (z2 = e2.currentTemplate) ? void 0 : z2.prompt_zh) ? (a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>prompt_zh :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (w = e2.currentTemplate) ? void 0 : w.prompt_zh)} `), a3(ssrRenderComponent(x3, { onClick: (l3) => {
        var a4;
        return unref(b2)(null == (a4 = e2.currentTemplate) ? void 0 : a4.prompt_zh);
      } }, null, n2, i4)), a3("</span></li>")) : a3("<!---->"), (null == (g = e2.currentTemplate) ? void 0 : g.n_prompt) ? (a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>n_prompt :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (j = e2.currentTemplate) ? void 0 : j.n_prompt)} `), a3(ssrRenderComponent(x3, { onClick: (l3) => {
        var a4;
        return unref(b2)(null == (a4 = e2.currentTemplate) ? void 0 : a4.n_prompt);
      } }, null, n2, i4)), a3("</span></li>")) : a3("<!---->"), (null == (V = e2.currentTemplate) ? void 0 : V.n_prompt_zh) ? (a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>n_prompt_zh :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (D = e2.currentTemplate) ? void 0 : D.n_prompt_zh)} `), a3(ssrRenderComponent(x3, { onClick: (l3) => {
        var a4;
        return unref(b2)(null == (a4 = e2.currentTemplate) ? void 0 : a4.n_prompt_zh);
      } }, null, n2, i4)), a3("</span></li>")) : a3("<!---->"), (null == (A = e2.currentTemplate) ? void 0 : A.step) ? a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>step :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (E = e2.currentTemplate) ? void 0 : E.step)}</span></li>`) : a3("<!---->"), (null == (I = e2.currentTemplate) ? void 0 : I.sampler) ? a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>sampler :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (L = e2.currentTemplate) ? void 0 : L.sampler)}</span></li>`) : a3("<!---->"), (null == (S = e2.currentTemplate) ? void 0 : S.scale) ? a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>scale :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (Y = e2.currentTemplate) ? void 0 : Y.scale)}</span></li>`) : a3("<!---->"), (null == (R = e2.currentTemplate) ? void 0 : R.seed) ? a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>seed :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (q = e2.currentTemplate) ? void 0 : q.seed)}</span></li>`) : a3("<!---->"), (null == (B = e2.currentTemplate) ? void 0 : B.size) ? a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>size :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (F = e2.currentTemplate) ? void 0 : F.size)}</span></li>`) : a3("<!---->"), (null == (G = e2.currentTemplate) ? void 0 : G.model) ? a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>model :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (H = e2.currentTemplate) ? void 0 : H.model)}</span></li>`) : a3("<!---->"), (null == (J = e2.currentTemplate) ? void 0 : J.desc) ? a3(`<li data-v-d25ac2cd${i4}><span data-v-d25ac2cd${i4}>desc :</span><span data-v-d25ac2cd${i4}>${ssrInterpolate(null == (K = e2.currentTemplate) ? void 0 : K.desc)}</span></li>`) : a3("<!---->"), a3(`</ul></div></div><div class="right" data-v-d25ac2cd${i4}><div class="image-con" data-v-d25ac2cd${i4}><img${ssrRenderAttr("src", null == (M = e2.currentTemplate) ? void 0 : M.preview)} alt="" data-v-d25ac2cd${i4}></div><div class="button-con" data-v-d25ac2cd${i4}><button class="btn btn-secondary m-r-10" data-v-d25ac2cd${i4}>\u5173\u95ED</button><button class="btn btn-primary" data-v-d25ac2cd${i4}>\u5BFC\u5165\u8D2D\u7269\u8F66</button></div></div></div></div>`)) : a3("<!---->");
    }), _: 1 }, s2)), i3("</div>");
  };
} }), b = x.setup;
x.setup = (l2, e2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/pc/TemplateDetail.vue"), b ? b(l2, e2) : void 0;
};
const y = di(x, [["__scopeId", "data-v-d25ac2cd"]]);

export { y as default };
