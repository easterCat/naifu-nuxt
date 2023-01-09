import I from './Icon.1f05ab14.mjs';
import d from './AreaTitle.b7e09825.mjs';
import { A } from './index.7c6a213b.mjs';
import { U, d as di } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { s, p } from './shop.4d5e891e.mjs';
import { a } from './document-copy.11fbb28b.mjs';
import { m, h } from './opportunity.3ae6b5be.mjs';
import { ElRow, ElCol, ElSelect, ElOption, ElInput } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
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
  A(), U(), s(), p();
  const f2 = ref(""), q2 = ref(""), S2 = ref(""), T2 = ref(1), B2 = ref([]), D = ref(0), E = ref([]), F = ref(false), G = ref([{ label: "\u56FE\u7247\u5927\u5C0F 512*768", value: "512*768" }, { label: "\u56FE\u7247\u5927\u5C0F 768*512", value: "768*512" }, { label: "\u56FE\u7247\u5927\u5C0F 512*512", value: "512*512" }, { label: "\u56FE\u7247\u5927\u5C0F 768*768", value: "768*768" }, { label: "\u56FE\u7247\u5927\u5C0F 768*1024", value: "768*1024" }, { label: "\u56FE\u7247\u5927\u5C0F 1024*768", value: "1024*768" }]), H = ref("512*768"), J = ref([{ label: "k_euler_ancestral", value: "k_euler_ancestral" }, { label: "k_euler", value: "k_euler" }, { label: "k_lms", value: "k_lms" }, { label: "plms", value: "plms" }, { label: "ddim", value: "ddim" }]), K = ref("k_euler_ancestral"), L = ref("lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"), M = (e2) => {
    T2.value = e2.target.value || 1;
  }, N = (e2) => {
    e2 && (S2.value = e2, q2.value = e2);
  };
  return (a2, t2, u3, n2) => {
    var x2;
    const g2 = I, O = ElRow, Q = ElCol, W = ElSelect, X = ElOption, Y = ElInput, Z = d, ee = m, le = h, ae = a;
    t2(`<div${ssrRenderAttrs(mergeProps({ class: "tranfer-con" }, n2))} data-v-e13a2c02><div class="button-con" data-v-e13a2c02><button class="btn btn-secondary btn-sm m-r-10" data-v-e13a2c02> \u6E05\u7A7A `), t2(ssrRenderComponent(g2, { class: "m-l-6", name: "ant-design:delete-filled" }, null, u3)), t2('</button><button class="btn btn-sm btn-accent m-r-10" data-v-e13a2c02> \u8D2D\u7269\u8F66\u5BFC\u5165 '), t2(ssrRenderComponent(g2, { class: "m-l-6", name: "clarity:shopping-cart-solid-badged" }, null, u3)), t2(`</button><button class="btn btn-primary btn-sm m-r-10" data-v-e13a2c02>${ssrInterpolate(unref(F) ? "\u56FE\u7247\u751F\u6210\u4E2D" : "\u751F\u6210")} `), unref(F) ? t2(ssrRenderComponent(g2, { class: "m-l-6", name: "line-md:loading-twotone-loop" }, null, u3)) : t2(ssrRenderComponent(g2, { class: "m-l-6", name: "entypo:brush" }, null, u3)), t2("</button></div>"), t2(ssrRenderComponent(O, { gutter: 20 }, { default: withCtx((e2, l2, a3, t3) => {
      if (!l2)
        return [createVNode(Q, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }, { default: withCtx(() => [createVNode(W, { modelValue: unref(H), "onUpdate:modelValue": (e3) => isRef(H) ? H.value = e3 : null, placeholder: "\u56FE\u7247\u5927\u5C0F", size: "large", class: "w-full" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(G), (e3) => (openBlock(), createBlock(X, { key: e3.value, label: e3.label, value: e3.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }, { default: withCtx(() => [createVNode(W, { modelValue: unref(K), "onUpdate:modelValue": (e3) => isRef(K) ? K.value = e3 : null, placeholder: "\u91C7\u6837\u5668", size: "large", class: "w-full" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(J), (e3) => (openBlock(), createBlock(X, { key: e3.value, label: e3.label, value: e3.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx(() => [createVNode(Y, { modelValue: unref(q2), "onUpdate:modelValue": (e3) => isRef(q2) ? q2.value = e3 : null, placeholder: "\u8BF7\u8F93\u5165url,\u4F8B\u5982: https://cube-joan-released-philips.trycloudflare.com/generate-stream", clearable: "", size: "large" }, { prepend: withCtx(() => [createVNode(W, { modelValue: unref(S2), "onUpdate:modelValue": (e3) => isRef(S2) ? S2.value = e3 : null, placeholder: "\u9009\u62E9\u63A5\u53E3", style: { width: "115px" }, size: "large", onChange: N }, { default: withCtx(() => [createVNode(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" }), createVNode(X, { label: "freeApi", value: "https://www.naifuai.site/api/draw/ai" })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }, { default: withCtx(() => [createVNode(Y, { modelValue: unref(f2), "onUpdate:modelValue": (e3) => isRef(f2) ? f2.value = e3 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u6B63\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }, { default: withCtx(() => [createVNode(Y, { modelValue: unref(L), "onUpdate:modelValue": (e3) => isRef(L) ? L.value = e3 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u8D1F\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(Q, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx(() => [createVNode("input", { type: "range", min: "1", max: "9", value: unref(T2), class: "range range-xs", step: "1", onChange: M }, null, 40, ["value"]), createVNode("div", { class: "flex justify-between w-full text-xs" }, [createVNode("span", null, "1\u5F20"), createVNode("span", null, "2\u5F20"), createVNode("span", null, "3\u5F20"), createVNode("span", null, "4\u5F20"), createVNode("span", null, "5\u5F20"), createVNode("span", null, "6\u5F20"), createVNode("span", null, "7\u5F20"), createVNode("span", null, "8\u5F20"), createVNode("span", null, "9\u5F20")])]), _: 1 })];
      l2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }, { default: withCtx((e3, l3, a4, t4) => {
        if (!l3)
          return [createVNode(W, { modelValue: unref(H), "onUpdate:modelValue": (e4) => isRef(H) ? H.value = e4 : null, placeholder: "\u56FE\u7247\u5927\u5C0F", size: "large", class: "w-full" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(G), (e4) => (openBlock(), createBlock(X, { key: e4.value, label: e4.label, value: e4.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
        l3(ssrRenderComponent(W, { modelValue: unref(H), "onUpdate:modelValue": (e4) => isRef(H) ? H.value = e4 : null, placeholder: "\u56FE\u7247\u5927\u5C0F", size: "large", class: "w-full" }, { default: withCtx((e4, l4, a5, t5) => {
          if (!l4)
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(G), (e5) => (openBlock(), createBlock(X, { key: e5.value, label: e5.label, value: e5.value }, null, 8, ["label", "value"]))), 128))];
          l4("<!--[-->"), ssrRenderList(unref(G), (e5) => {
            l4(ssrRenderComponent(X, { key: e5.value, label: e5.label, value: e5.value }, null, a5, t5));
          }), l4("<!--]-->");
        }), _: 1 }, a4, t4));
      }), _: 1 }, a3, t3)), l2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }, { default: withCtx((e3, l3, a4, t4) => {
        if (!l3)
          return [createVNode(W, { modelValue: unref(K), "onUpdate:modelValue": (e4) => isRef(K) ? K.value = e4 : null, placeholder: "\u91C7\u6837\u5668", size: "large", class: "w-full" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(J), (e4) => (openBlock(), createBlock(X, { key: e4.value, label: e4.label, value: e4.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
        l3(ssrRenderComponent(W, { modelValue: unref(K), "onUpdate:modelValue": (e4) => isRef(K) ? K.value = e4 : null, placeholder: "\u91C7\u6837\u5668", size: "large", class: "w-full" }, { default: withCtx((e4, l4, a5, t5) => {
          if (!l4)
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(J), (e5) => (openBlock(), createBlock(X, { key: e5.value, label: e5.label, value: e5.value }, null, 8, ["label", "value"]))), 128))];
          l4("<!--[-->"), ssrRenderList(unref(J), (e5) => {
            l4(ssrRenderComponent(X, { key: e5.value, label: e5.label, value: e5.value }, null, a5, t5));
          }), l4("<!--]-->");
        }), _: 1 }, a4, t4));
      }), _: 1 }, a3, t3)), l2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx((e3, l3, a4, t4) => {
        if (!l3)
          return [createVNode(Y, { modelValue: unref(q2), "onUpdate:modelValue": (e4) => isRef(q2) ? q2.value = e4 : null, placeholder: "\u8BF7\u8F93\u5165url,\u4F8B\u5982: https://cube-joan-released-philips.trycloudflare.com/generate-stream", clearable: "", size: "large" }, { prepend: withCtx(() => [createVNode(W, { modelValue: unref(S2), "onUpdate:modelValue": (e4) => isRef(S2) ? S2.value = e4 : null, placeholder: "\u9009\u62E9\u63A5\u53E3", style: { width: "115px" }, size: "large", onChange: N }, { default: withCtx(() => [createVNode(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" }), createVNode(X, { label: "freeApi", value: "https://www.naifuai.site/api/draw/ai" })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
        l3(ssrRenderComponent(Y, { modelValue: unref(q2), "onUpdate:modelValue": (e4) => isRef(q2) ? q2.value = e4 : null, placeholder: "\u8BF7\u8F93\u5165url,\u4F8B\u5982: https://cube-joan-released-philips.trycloudflare.com/generate-stream", clearable: "", size: "large" }, { prepend: withCtx((e4, l4, a5, t5) => {
          if (!l4)
            return [createVNode(W, { modelValue: unref(S2), "onUpdate:modelValue": (e5) => isRef(S2) ? S2.value = e5 : null, placeholder: "\u9009\u62E9\u63A5\u53E3", style: { width: "115px" }, size: "large", onChange: N }, { default: withCtx(() => [createVNode(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" }), createVNode(X, { label: "freeApi", value: "https://www.naifuai.site/api/draw/ai" })]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
          l4(ssrRenderComponent(W, { modelValue: unref(S2), "onUpdate:modelValue": (e5) => isRef(S2) ? S2.value = e5 : null, placeholder: "\u9009\u62E9\u63A5\u53E3", style: { width: "115px" }, size: "large", onChange: N }, { default: withCtx((e5, l5, a6, t6) => {
            if (!l5)
              return [createVNode(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" }), createVNode(X, { label: "freeApi", value: "https://www.naifuai.site/api/draw/ai" })];
            l5(ssrRenderComponent(X, { label: "Colab", value: "https://cube-joan-released-philips.trycloudflare.com/generate-stream" }, null, a6, t6)), l5(ssrRenderComponent(X, { label: "freeApi", value: "https://www.naifuai.site/api/draw/ai" }, null, a6, t6));
          }), _: 1 }, a5, t5));
        }), _: 1 }, a4, t4));
      }), _: 1 }, a3, t3)), l2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }, { default: withCtx((e3, l3, a4, t4) => {
        if (!l3)
          return [createVNode(Y, { modelValue: unref(f2), "onUpdate:modelValue": (e4) => isRef(f2) ? f2.value = e4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u6B63\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])];
        l3(ssrRenderComponent(Y, { modelValue: unref(f2), "onUpdate:modelValue": (e4) => isRef(f2) ? f2.value = e4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u6B63\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, a4, t4));
      }), _: 1 }, a3, t3)), l2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }, { default: withCtx((e3, l3, a4, t4) => {
        if (!l3)
          return [createVNode(Y, { modelValue: unref(L), "onUpdate:modelValue": (e4) => isRef(L) ? L.value = e4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u8D1F\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])];
        l3(ssrRenderComponent(Y, { modelValue: unref(L), "onUpdate:modelValue": (e4) => isRef(L) ? L.value = e4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165\u8D1F\u9762Prompt", rows: 8, clearable: "", autosize: { minRows: 8, maxRows: 8 }, "show-word-limit": "", maxlength: "3000" }, null, a4, t4));
      }), _: 1 }, a3, t3)), l2(ssrRenderComponent(Q, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx((e3, l3, a4, t4) => {
        if (!l3)
          return [createVNode("input", { type: "range", min: "1", max: "9", value: unref(T2), class: "range range-xs", step: "1", onChange: M }, null, 40, ["value"]), createVNode("div", { class: "flex justify-between w-full text-xs" }, [createVNode("span", null, "1\u5F20"), createVNode("span", null, "2\u5F20"), createVNode("span", null, "3\u5F20"), createVNode("span", null, "4\u5F20"), createVNode("span", null, "5\u5F20"), createVNode("span", null, "6\u5F20"), createVNode("span", null, "7\u5F20"), createVNode("span", null, "8\u5F20"), createVNode("span", null, "9\u5F20")])];
        l3(`<input type="range" min="1" max="9"${ssrRenderAttr("value", unref(T2))} class="range range-xs" step="1" data-v-e13a2c02${t4}><div class="flex justify-between w-full text-xs" data-v-e13a2c02${t4}><span data-v-e13a2c02${t4}>1\u5F20</span><span data-v-e13a2c02${t4}>2\u5F20</span><span data-v-e13a2c02${t4}>3\u5F20</span><span data-v-e13a2c02${t4}>4\u5F20</span><span data-v-e13a2c02${t4}>5\u5F20</span><span data-v-e13a2c02${t4}>6\u5F20</span><span data-v-e13a2c02${t4}>7\u5F20</span><span data-v-e13a2c02${t4}>8\u5F20</span><span data-v-e13a2c02${t4}>9\u5F20</span></div>`);
      }), _: 1 }, a3, t3));
    }), _: 1 }, u3)), unref(E) ? (t2('<div class="g-image m-t-20" data-v-e13a2c02><ul data-v-e13a2c02><!--[-->'), ssrRenderList(unref(E), (e2, l2) => {
      t2(`<li data-v-e13a2c02><img${ssrRenderAttr("src", e2)} alt="" data-v-e13a2c02></li>`);
    }), t2("<!--]--></ul></div>")) : t2("<!---->"), t2(ssrRenderComponent(Z, { title: "\u5386\u53F2\u8BB0\u5F55" }, { titleSide: withCtx((e2, l2, a3, t3) => {
      if (!l2)
        return [createVNode("span", { class: "title-side" }, "\u603B\u6570:" + toDisplayString(unref(D)) + "\u6761", 1)];
      l2(`<span class="title-side" data-v-e13a2c02${t3}>\u603B\u6570:${ssrInterpolate(unref(D))}\u6761</span>`);
    }), _: 1 }, u3)), unref(B2) && (null == (x2 = unref(B2)) ? void 0 : x2.length) ? (t2('<div class="history-con" data-v-e13a2c02><div class="button-con" data-v-e13a2c02><button class="btn btn-accent btn-sm" data-v-e13a2c02>\u6E05\u7A7A\u5386\u53F2</button></div><!--[-->'), ssrRenderList(unref(B2), (e2, l2) => {
      t2(`<div class="history-item" data-v-e13a2c02><p style="${ssrRenderStyle({ "font-weight": "bold", "margin-bottom": "4px" })}" data-v-e13a2c02>`), t2(0 === l2 ? ssrRenderComponent(ee, { style: { color: "#67c23a", "font-size": "12px" } }, null, u3) : "<!---->"), t2(`<span data-v-e13a2c02>${ssrInterpolate(null == e2 ? void 0 : e2.time)}</span></p><p data-v-e13a2c02>${ssrInterpolate(null == e2 ? void 0 : e2.prompt)}</p><div class="history-button" data-v-e13a2c02><button class="btn btn-sm btn-secondary m-r-10" data-v-e13a2c02> \u5220\u9664 `), ssrRenderSlot(a2.$slots, "icon", {}, () => {
        t2(ssrRenderComponent(le, { class: "m-l-6" }, null, u3));
      }, t2, u3), t2('</button><button class="btn btn-sm btn-accent m-r-10" data-v-e13a2c02> \u590D\u5236 '), ssrRenderSlot(a2.$slots, "icon", {}, () => {
        t2(ssrRenderComponent(ae, { class: "m-l-6" }, null, u3));
      }, t2, u3), t2('</button><button class="btn btn-sm btn-primary" data-v-e13a2c02> \u9009\u62E9 '), t2(ssrRenderComponent(g2, { class: "m-l-6", name: "icon-park-solid:full-selection" }, null, u3)), t2("</button></div></div>");
    }), t2("<!--]--></div>")) : t2('<div class="tags-con" data-v-e13a2c02><p class="no-data" data-v-e13a2c02>\u6682\u65E0\u8BB0\u5F55</p></div>'), t2("</div>");
  };
} }), T = S.setup;
S.setup = (e2, l2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/draw/components/generateImage.vue"), T ? T(e2, l2) : void 0;
};
const B = di(S, [["__scopeId", "data-v-e13a2c02"]]);

export { B as default };
