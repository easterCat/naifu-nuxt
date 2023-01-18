import I from './Icon.221105b5.mjs';
import d from './AreaTitle.512d3722.mjs';
import { A } from './index.7c6a213b.mjs';
import { U, d as di } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { s, p } from './shop.269c075a.mjs';
import { a } from './document-copy.11fbb28b.mjs';
import { m, h } from './opportunity.3ae6b5be.mjs';
import { ElRow, ElCol, ElSelect, ElOption, ElInput } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { t } from './setting.a7e60345.mjs';
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
import 'vue-uuid';
import 'element-plus';
import 'vue3-clipboard';

const S = defineComponent({ __name: "generateImage", __ssrInlineRender: true, setup(u2) {
  const v2 = t();
  A(), U(), s(), p();
  const N2 = ref(""), S2 = ref(""), q2 = ref(""), D2 = ref([]), T = ref(0), B = ref([]), E = ref(false), G = ref([{ label: "\u56FE\u7247\u5927\u5C0F 512*768", value: "512*768" }, { label: "\u56FE\u7247\u5927\u5C0F 768*512", value: "768*512" }, { label: "\u56FE\u7247\u5927\u5C0F 512*512", value: "512*512" }, { label: "\u56FE\u7247\u5927\u5C0F 768*768", value: "768*768" }, { label: "\u56FE\u7247\u5927\u5C0F 768*1024", value: "768*1024" }, { label: "\u56FE\u7247\u5927\u5C0F 1024*768", value: "1024*768" }]), H = ref("512*768"), J = ref([{ label: "k_euler_ancestral", value: "k_euler_ancestral" }, { label: "k_euler", value: "k_euler" }, { label: "k_lms", value: "k_lms" }, { label: "plms", value: "plms" }, { label: "ddim", value: "ddim" }]), K = ref("k_euler_ancestral"), L = ref("lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"), M = (l2) => {
    v2.setDrawNumber(l2.target.value || 1);
  }, O = (l2) => {
    l2 && (sessionStorage.setItem("post_url", l2), sessionStorage.setItem("post_url_provide", l2), q2.value = l2, S2.value = l2);
  };
  return (a2, t2, u3, s2) => {
    var x2;
    const g2 = I, F2 = ElRow, Q = ElCol, W = ElSelect, X = ElOption, Y = ElInput, Z = d, ll = m, el = h, al = a;
    t2(`<div${ssrRenderAttrs(mergeProps({ class: "tranfer-con" }, s2))} data-v-8c46f7bf><div class="button-con" data-v-8c46f7bf><button class="btn btn-secondary btn-sm m-r-10" data-v-8c46f7bf> \u6E05\u7A7A `), t2(ssrRenderComponent(g2, { class: "m-l-6", name: "ant-design:delete-filled" }, null, u3)), t2('</button><button class="btn btn-sm btn-accent m-r-10" data-v-8c46f7bf> \u8D2D\u7269\u8F66\u5BFC\u5165 '), t2(ssrRenderComponent(g2, { class: "m-l-6", name: "clarity:shopping-cart-solid-badged" }, null, u3)), t2(`</button><button class="btn btn-primary btn-sm m-r-10" data-v-8c46f7bf>${ssrInterpolate(unref(E) ? "\u56FE\u7247\u751F\u6210\u4E2D" : "\u751F\u6210")} `), unref(E) ? t2(ssrRenderComponent(g2, { class: "m-l-6", name: "line-md:loading-twotone-loop" }, null, u3)) : t2(ssrRenderComponent(g2, { class: "m-l-6", name: "entypo:brush" }, null, u3)), t2("</button></div>"), t2(ssrRenderComponent(F2, { gutter: 20 }, { default: withCtx((l2, e2, a3, t3) => {
      if (!e2)
        return [createVNode(Q, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }, { default: withCtx(() => [createVNode(W, { modelValue: unref(H), "onUpdate:modelValue": (l3) => isRef(H) ? H.value = l3 : null, placeholder: "\u56FE\u7247\u5927\u5C0F", size: "large", class: "w-full" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(G), (l3) => (openBlock(), createBlock(X, { key: l3.value, label: l3.label, value: l3.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }, { default: withCtx(() => [createVNode(W, { modelValue: unref(K), "onUpdate:modelValue": (l3) => isRef(K) ? K.value = l3 : null, placeholder: "\u91C7\u6837\u5668", size: "large", class: "w-full" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(J), (l3) => (openBlock(), createBlock(X, { key: l3.value, label: l3.label, value: l3.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx(() => [createVNode(Y, { modelValue: unref(S2), "onUpdate:modelValue": (l3) => isRef(S2) ? S2.value = l3 : null, placeholder: "\u8BF7\u8F93\u5165url,\u4F8B\u5982: https://cube-joan-released-philips.trycloudflare.com/generate-stream", clearable: "", size: "large" }, { prepend: withCtx(() => [createVNode(W, { modelValue: unref(q2), "onUpdate:modelValue": (l3) => isRef(q2) ? q2.value = l3 : null, placeholder: "\u9009\u62E9\u63A5\u53E3", style: { width: "115px" }, size: "large", onChange: O }, { default: withCtx(() => [createVNode(X, { label: "FreeApi", value: "https://www.naifuai.site/api/draw/ai" }), createVNode(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }, { default: withCtx(() => [createVNode(Y, { modelValue: unref(N2), "onUpdate:modelValue": (l3) => isRef(N2) ? N2.value = l3 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u6B63\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }, { default: withCtx(() => [createVNode(Y, { modelValue: unref(L), "onUpdate:modelValue": (l3) => isRef(L) ? L.value = l3 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u8D1F\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx(() => [createVNode("input", { type: "range", min: "1", max: "9", value: unref(v2).drawNumber, class: "range range-xs", step: "1", onChange: M }, null, 40, ["value"]), createVNode("div", { class: "flex justify-between w-full text-xs" }, [createVNode("span", null, "1\u5F20"), createVNode("span", null, "2\u5F20"), createVNode("span", null, "3\u5F20"), createVNode("span", null, "4\u5F20"), createVNode("span", null, "5\u5F20"), createVNode("span", null, "6\u5F20"), createVNode("span", null, "7\u5F20"), createVNode("span", null, "8\u5F20"), createVNode("span", null, "9\u5F20")])]), _: 1 })];
      e2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }, { default: withCtx((l3, e3, a4, t4) => {
        if (!e3)
          return [createVNode(W, { modelValue: unref(H), "onUpdate:modelValue": (l4) => isRef(H) ? H.value = l4 : null, placeholder: "\u56FE\u7247\u5927\u5C0F", size: "large", class: "w-full" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(G), (l4) => (openBlock(), createBlock(X, { key: l4.value, label: l4.label, value: l4.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
        e3(ssrRenderComponent(W, { modelValue: unref(H), "onUpdate:modelValue": (l4) => isRef(H) ? H.value = l4 : null, placeholder: "\u56FE\u7247\u5927\u5C0F", size: "large", class: "w-full" }, { default: withCtx((l4, e4, a5, t5) => {
          if (!e4)
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(G), (l5) => (openBlock(), createBlock(X, { key: l5.value, label: l5.label, value: l5.value }, null, 8, ["label", "value"]))), 128))];
          e4("<!--[-->"), ssrRenderList(unref(G), (l5) => {
            e4(ssrRenderComponent(X, { key: l5.value, label: l5.label, value: l5.value }, null, a5, t5));
          }), e4("<!--]-->");
        }), _: 1 }, a4, t4));
      }), _: 1 }, a3, t3)), e2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }, { default: withCtx((l3, e3, a4, t4) => {
        if (!e3)
          return [createVNode(W, { modelValue: unref(K), "onUpdate:modelValue": (l4) => isRef(K) ? K.value = l4 : null, placeholder: "\u91C7\u6837\u5668", size: "large", class: "w-full" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(J), (l4) => (openBlock(), createBlock(X, { key: l4.value, label: l4.label, value: l4.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
        e3(ssrRenderComponent(W, { modelValue: unref(K), "onUpdate:modelValue": (l4) => isRef(K) ? K.value = l4 : null, placeholder: "\u91C7\u6837\u5668", size: "large", class: "w-full" }, { default: withCtx((l4, e4, a5, t5) => {
          if (!e4)
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(J), (l5) => (openBlock(), createBlock(X, { key: l5.value, label: l5.label, value: l5.value }, null, 8, ["label", "value"]))), 128))];
          e4("<!--[-->"), ssrRenderList(unref(J), (l5) => {
            e4(ssrRenderComponent(X, { key: l5.value, label: l5.label, value: l5.value }, null, a5, t5));
          }), e4("<!--]-->");
        }), _: 1 }, a4, t4));
      }), _: 1 }, a3, t3)), e2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx((l3, e3, a4, t4) => {
        if (!e3)
          return [createVNode(Y, { modelValue: unref(S2), "onUpdate:modelValue": (l4) => isRef(S2) ? S2.value = l4 : null, placeholder: "\u8BF7\u8F93\u5165url,\u4F8B\u5982: https://cube-joan-released-philips.trycloudflare.com/generate-stream", clearable: "", size: "large" }, { prepend: withCtx(() => [createVNode(W, { modelValue: unref(q2), "onUpdate:modelValue": (l4) => isRef(q2) ? q2.value = l4 : null, placeholder: "\u9009\u62E9\u63A5\u53E3", style: { width: "115px" }, size: "large", onChange: O }, { default: withCtx(() => [createVNode(X, { label: "FreeApi", value: "https://www.naifuai.site/api/draw/ai" }), createVNode(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
        e3(ssrRenderComponent(Y, { modelValue: unref(S2), "onUpdate:modelValue": (l4) => isRef(S2) ? S2.value = l4 : null, placeholder: "\u8BF7\u8F93\u5165url,\u4F8B\u5982: https://cube-joan-released-philips.trycloudflare.com/generate-stream", clearable: "", size: "large" }, { prepend: withCtx((l4, e4, a5, t5) => {
          if (!e4)
            return [createVNode(W, { modelValue: unref(q2), "onUpdate:modelValue": (l5) => isRef(q2) ? q2.value = l5 : null, placeholder: "\u9009\u62E9\u63A5\u53E3", style: { width: "115px" }, size: "large", onChange: O }, { default: withCtx(() => [createVNode(X, { label: "FreeApi", value: "https://www.naifuai.site/api/draw/ai" }), createVNode(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
          e4(ssrRenderComponent(W, { modelValue: unref(q2), "onUpdate:modelValue": (l5) => isRef(q2) ? q2.value = l5 : null, placeholder: "\u9009\u62E9\u63A5\u53E3", style: { width: "115px" }, size: "large", onChange: O }, { default: withCtx((l5, e5, a6, t6) => {
            if (!e5)
              return [createVNode(X, { label: "FreeApi", value: "https://www.naifuai.site/api/draw/ai" }), createVNode(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" })];
            e5(ssrRenderComponent(X, { label: "FreeApi", value: "https://www.naifuai.site/api/draw/ai" }, null, a6, t6)), e5(ssrRenderComponent(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" }, null, a6, t6));
          }), _: 1 }, a5, t5));
        }), _: 1 }, a4, t4));
      }), _: 1 }, a3, t3)), e2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }, { default: withCtx((l3, e3, a4, t4) => {
        if (!e3)
          return [createVNode(Y, { modelValue: unref(N2), "onUpdate:modelValue": (l4) => isRef(N2) ? N2.value = l4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u6B63\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])];
        e3(ssrRenderComponent(Y, { modelValue: unref(N2), "onUpdate:modelValue": (l4) => isRef(N2) ? N2.value = l4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u6B63\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, a4, t4));
      }), _: 1 }, a3, t3)), e2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }, { default: withCtx((l3, e3, a4, t4) => {
        if (!e3)
          return [createVNode(Y, { modelValue: unref(L), "onUpdate:modelValue": (l4) => isRef(L) ? L.value = l4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u8D1F\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])];
        e3(ssrRenderComponent(Y, { modelValue: unref(L), "onUpdate:modelValue": (l4) => isRef(L) ? L.value = l4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u8D1F\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, a4, t4));
      }), _: 1 }, a3, t3)), e2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx((l3, e3, a4, t4) => {
        if (!e3)
          return [createVNode("input", { type: "range", min: "1", max: "9", value: unref(v2).drawNumber, class: "range range-xs", step: "1", onChange: M }, null, 40, ["value"]), createVNode("div", { class: "flex justify-between w-full text-xs" }, [createVNode("span", null, "1\u5F20"), createVNode("span", null, "2\u5F20"), createVNode("span", null, "3\u5F20"), createVNode("span", null, "4\u5F20"), createVNode("span", null, "5\u5F20"), createVNode("span", null, "6\u5F20"), createVNode("span", null, "7\u5F20"), createVNode("span", null, "8\u5F20"), createVNode("span", null, "9\u5F20")])];
        e3(`<input type="range" min="1" max="9"${ssrRenderAttr("value", unref(v2).drawNumber)} class="range range-xs" step="1" data-v-8c46f7bf${t4}><div class="flex justify-between w-full text-xs" data-v-8c46f7bf${t4}><span data-v-8c46f7bf${t4}>1\u5F20</span><span data-v-8c46f7bf${t4}>2\u5F20</span><span data-v-8c46f7bf${t4}>3\u5F20</span><span data-v-8c46f7bf${t4}>4\u5F20</span><span data-v-8c46f7bf${t4}>5\u5F20</span><span data-v-8c46f7bf${t4}>6\u5F20</span><span data-v-8c46f7bf${t4}>7\u5F20</span><span data-v-8c46f7bf${t4}>8\u5F20</span><span data-v-8c46f7bf${t4}>9\u5F20</span></div>`);
      }), _: 1 }, a3, t3));
    }), _: 1 }, u3)), unref(B) ? (t2('<div class="g-image m-t-20" data-v-8c46f7bf><ul data-v-8c46f7bf><!--[-->'), ssrRenderList(unref(B), (l2, e2) => {
      t2(`<li data-v-8c46f7bf><img${ssrRenderAttr("src", l2)} alt="" data-v-8c46f7bf></li>`);
    }), t2("<!--]--></ul></div>")) : t2("<!---->"), t2(ssrRenderComponent(Z, { title: "\u5386\u53F2\u8BB0\u5F55" }, { titleSide: withCtx((l2, e2, a3, t3) => {
      if (!e2)
        return [createVNode("span", { class: "title-side" }, "\u603B\u6570:" + toDisplayString(unref(T)) + "\u6761", 1)];
      e2(`<span class="title-side" data-v-8c46f7bf${t3}>\u603B\u6570:${ssrInterpolate(unref(T))}\u6761</span>`);
    }), _: 1 }, u3)), unref(D2) && (null == (x2 = unref(D2)) ? void 0 : x2.length) ? (t2('<div class="history-con" data-v-8c46f7bf><div class="button-con" data-v-8c46f7bf><button class="btn btn-accent btn-sm" data-v-8c46f7bf>\u6E05\u7A7A\u5386\u53F2</button></div><!--[-->'), ssrRenderList(unref(D2), (l2, e2) => {
      t2(`<div class="history-item" data-v-8c46f7bf><p style="${ssrRenderStyle({ "font-weight": "bold", "margin-bottom": "4px" })}" data-v-8c46f7bf>`), t2(0 === e2 ? ssrRenderComponent(ll, { style: { color: "#67c23a", "font-size": "12px" } }, null, u3) : "<!---->"), t2(`<span data-v-8c46f7bf>${ssrInterpolate(null == l2 ? void 0 : l2.time)}</span></p><p data-v-8c46f7bf>${ssrInterpolate(null == l2 ? void 0 : l2.prompt)}</p><div class="history-button" data-v-8c46f7bf><button class="btn btn-sm btn-secondary m-r-10" data-v-8c46f7bf> \u5220\u9664 `), ssrRenderSlot(a2.$slots, "icon", {}, () => {
        t2(ssrRenderComponent(el, { class: "m-l-6" }, null, u3));
      }, t2, u3), t2('</button><button class="btn btn-sm btn-accent m-r-10" data-v-8c46f7bf> \u590D\u5236 '), ssrRenderSlot(a2.$slots, "icon", {}, () => {
        t2(ssrRenderComponent(al, { class: "m-l-6" }, null, u3));
      }, t2, u3), t2('</button><button class="btn btn-sm btn-primary" data-v-8c46f7bf> \u9009\u62E9 '), t2(ssrRenderComponent(g2, { class: "m-l-6", name: "icon-park-solid:full-selection" }, null, u3)), t2("</button></div></div>");
    }), t2("<!--]--></div>")) : t2('<div class="tags-con" data-v-8c46f7bf><p class="no-data" data-v-8c46f7bf>\u6682\u65E0\u8BB0\u5F55</p></div>'), t2("</div>");
  };
} }), q = S.setup;
S.setup = (l2, e2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/pc/draw/components/generateImage.vue"), q ? q(l2, e2) : void 0;
};
const D = di(S, [["__scopeId", "data-v-8c46f7bf"]]);

export { D as default };
