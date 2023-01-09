import d from './AreaTitle.b7e09825.mjs';
import { A } from './index.7c6a213b.mjs';
import { s, p } from './shop.4d5e891e.mjs';
import { defineComponent, withAsyncContext, ref, watch, mergeProps, withCtx, createVNode, unref, renderSlot, useSSRContext } from 'vue';
import { ElSwitch, ElButton, ElPagination } from 'element-plus/lib';
import { a } from './document-copy.11fbb28b.mjs';
import { t } from './shopping-trolley.94b396ca.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { T as Tn, d as di } from '../server.mjs';
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

const S = defineComponent({ __name: "eHentai", __ssrInlineRender: true, props: { searchText: { type: String, default: "" } }, async setup(i2) {
  let v2, y2;
  const S2 = i2, { EhtagsApi: V2 } = A(), C2 = ([v2, y2] = withAsyncContext(() => V2.getEhtags()), v2 = await v2, y2(), v2), U = JSON.parse(C2), E = ref(false), H = ref([]), T = ref(1), w = ref(50), A$1 = ref(0), { copy: I } = s(), { addShop: J } = p();
  watch(() => S2.searchText, (e2) => {
    q(e2);
  });
  const N = (e2) => {
    w.value = e2, T.value = 1, R();
  }, O = (e2) => {
    T.value = e2, R();
  }, R = () => {
    H.value = U.slice(50 * (T.value - 1), 50 * T.value);
  }, q = Tn((e2) => {
    const t2 = U.filter((t3) => t3.k.includes(e2));
    t2 && (T.value = 1, H.value = t2.slice(50 * (T.value - 1), 50 * T.value), A$1.value = t2.length);
  }, 1e3);
  return (t2, a2, l2, i3) => {
    const o2 = d, s2 = ElSwitch, r2 = ElButton, v3 = t, k2 = a, y3 = ElPagination;
    a2(`<div${ssrRenderAttrs(mergeProps({ class: "eh-con" }, i3))} data-v-f7c00578>`), a2(ssrRenderComponent(o2, { title: "EH\u6807\u7B7E\u5217\u8868" }, { titleSide: withCtx((e2, t3, a3, l3) => {
      if (!t3)
        return [createVNode(s2, { modelValue: E.value, "onUpdate:modelValue": (e3) => E.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CF", "active-text": "\u5F00\u542F", class: "title-side" }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode("span", { class: "eh-title-side-tip" }, "(577\u4E2A\u6807\u7B7E\u7248\u672C,\u9AD8h,\u614E\u91CD)")];
      t3(ssrRenderComponent(s2, { modelValue: E.value, "onUpdate:modelValue": (e3) => E.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CF", "active-text": "\u5F00\u542F", class: "title-side" }, null, a3, l3)), t3(`<span class="eh-title-side-tip" data-v-f7c00578${l3}>(577\u4E2A\u6807\u7B7E\u7248\u672C,\u9AD8h,\u614E\u91CD)</span>`);
    }), _: 1 }, l2)), E.value ? (a2('<div class="tag-list" data-v-f7c00578><!--[-->'), ssrRenderList(H.value, (e2, i4) => {
      a2(`<div class="tag-item" data-v-f7c00578><div class="text-con" data-v-f7c00578><p class="zh" data-v-f7c00578>${ssrInterpolate(null == e2 ? void 0 : e2.k)}</p><p class="en" data-v-f7c00578>${ssrInterpolate(null == e2 ? void 0 : e2.v)}</p></div><div data-v-f7c00578>`), a2(ssrRenderComponent(r2, { size: "small", circle: "", onClick: (t3) => unref(J)(null == e2 ? void 0 : e2.v) }, { default: withCtx((e3, a3, l3, i5) => {
        if (!a3)
          return [renderSlot(t2.$slots, "icon", {}, () => [createVNode(v3)], true)];
        ssrRenderSlot(t2.$slots, "icon", {}, () => {
          a3(ssrRenderComponent(v3, null, null, l3, i5));
        }, a3, l3, i5);
      }), _: 2 }, l2)), a2(ssrRenderComponent(r2, { size: "small", circle: "", onClick: (t3) => unref(I)(null == e2 ? void 0 : e2.v) }, { default: withCtx((e3, a3, l3, i5) => {
        if (!a3)
          return [renderSlot(t2.$slots, "icon", {}, () => [createVNode(k2)], true)];
        ssrRenderSlot(t2.$slots, "icon", {}, () => {
          a3(ssrRenderComponent(k2, null, null, l3, i5));
        }, a3, l3, i5);
      }), _: 2 }, l2)), a2("</div></div>");
    }), a2("<!--]--></div>")) : a2("<!---->"), E.value ? (a2('<div class="demo-pagination-block" data-v-f7c00578>'), a2(ssrRenderComponent(y3, { "current-page": T.value, "onUpdate:current-page": (e2) => T.value = e2, "page-size": w.value, "onUpdate:page-size": (e2) => w.value = e2, "page-sizes": [50, 100], background: true, layout: "total, sizes, prev, pager, next, jumper", total: A$1.value, onSizeChange: N, onCurrentChange: O }, null, l2)), a2("</div>")) : a2("<!---->"), a2("</div>");
  };
} }), V = S.setup;
S.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/tags/components/eHentai.vue"), V ? V(e2, t2) : void 0;
};
const C = di(S, [["__scopeId", "data-v-f7c00578"]]);

export { C as default };
