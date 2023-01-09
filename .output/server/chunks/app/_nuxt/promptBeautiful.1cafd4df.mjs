import d from './AreaTitle.b7e09825.mjs';
import { U, d as di } from '../server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, isRef, toDisplayString, useSSRContext } from 'vue';
import { s, p } from './shop.4d5e891e.mjs';
import { l } from './check.2703b08f.mjs';
import { a } from './document-copy.11fbb28b.mjs';
import { m, h } from './opportunity.3ae6b5be.mjs';
import { ElRow, ElCol, ElInput } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
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

const z = defineComponent({ __name: "promptBeautiful", __ssrInlineRender: true, setup(o2) {
  U();
  const u2 = ref(""), j2 = ref(""), z2 = ref([]), R2 = ref([]), k2 = ref(0), { copy: C } = s();
  p();
  const B = () => {
    C(j2.value);
  };
  return (a2, o3, e2, i2) => {
    var c2, C2;
    const I = ElRow, P = ElCol, S = ElInput, A = d, T = m, q = h, D = a, E = l;
    o3(`<div${ssrRenderAttrs(mergeProps({ class: "tranfer-con" }, i2))} data-v-715416f0><div class="button-con" data-v-715416f0><button class="btn btn-accent m-r-10 m-b-10" data-v-715416f0>\u683C\u5F0F\u5316</button><button class="btn btn-accent m-r-10 m-b-10" data-v-715416f0>\u6E05\u7A7A</button><button class="btn btn-accent m-r-10 m-b-10" data-v-715416f0> \u5927\u62EC\u53F7\u8F6C\u5706\u62EC\u53F7 </button><button class="btn btn-accent m-r-10 m-b-10" data-v-715416f0> \u5706\u62EC\u53F7\u8F6C\u5927\u62EC\u53F7 </button><button class="btn btn-accent m-r-10 m-b-10" data-v-715416f0> \u8D77\u624B\u5F0F </button><button class="btn btn-accent m-r-10 m-b-10" data-v-715416f0>\u8D2D\u7269\u8F66\u5BFC\u5165</button><button class="btn btn-accent m-r-10 m-b-10" data-v-715416f0>\u5BFC\u51FA\u8D2D\u7269\u8F66</button><button class="btn btn-accent m-r-10 m-b-10" data-v-715416f0> \u7A7A\u683C\u52A0\u9017\u53F7(\u7528\u4E8Edanbooru) </button><button class="btn btn-accent m-b-10" data-v-715416f0> \u53BB\u9664\u4E0B\u5212\u7EBF(\u7528\u4E8Edanbooru) </button></div>`), o3(ssrRenderComponent(I, { gutter: 20 }, { default: withCtx((t2, a3, o4, e3) => {
      if (!a3)
        return [createVNode(P, { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }, { default: withCtx(() => [createVNode(S, { modelValue: unref(u2), "onUpdate:modelValue": (t3) => isRef(u2) ? u2.value = t3 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165promit", rows: 12, clearable: "", autosize: { minRows: 12 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(P, { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }, { default: withCtx(() => [createVNode(S, { modelValue: unref(j2), "onUpdate:modelValue": (t3) => isRef(j2) ? j2.value = t3 : null, type: "textarea", placeholder: "\u8F93\u51FAprompt", rows: 12, autosize: { minRows: 12 }, readonly: "", "show-word-limit": "", maxlength: "3000", onClick: B }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 })];
      a3(ssrRenderComponent(P, { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }, { default: withCtx((t3, a4, o5, e4) => {
        if (!a4)
          return [createVNode(S, { modelValue: unref(u2), "onUpdate:modelValue": (t4) => isRef(u2) ? u2.value = t4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165promit", rows: 12, clearable: "", autosize: { minRows: 12 }, "show-word-limit": "", maxlength: "3000" }, null, 8, ["modelValue", "onUpdate:modelValue"])];
        a4(ssrRenderComponent(S, { modelValue: unref(u2), "onUpdate:modelValue": (t4) => isRef(u2) ? u2.value = t4 : null, type: "textarea", placeholder: "\u8BF7\u8F93\u5165promit", rows: 12, clearable: "", autosize: { minRows: 12 }, "show-word-limit": "", maxlength: "3000" }, null, o5, e4));
      }), _: 1 }, o4, e3)), a3(ssrRenderComponent(P, { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }, { default: withCtx((t3, a4, o5, e4) => {
        if (!a4)
          return [createVNode(S, { modelValue: unref(j2), "onUpdate:modelValue": (t4) => isRef(j2) ? j2.value = t4 : null, type: "textarea", placeholder: "\u8F93\u51FAprompt", rows: 12, autosize: { minRows: 12 }, readonly: "", "show-word-limit": "", maxlength: "3000", onClick: B }, null, 8, ["modelValue", "onUpdate:modelValue"])];
        a4(ssrRenderComponent(S, { modelValue: unref(j2), "onUpdate:modelValue": (t4) => isRef(j2) ? j2.value = t4 : null, type: "textarea", placeholder: "\u8F93\u51FAprompt", rows: 12, autosize: { minRows: 12 }, readonly: "", "show-word-limit": "", maxlength: "3000", onClick: B }, null, o5, e4));
      }), _: 1 }, o4, e3));
    }), _: 1 }, e2)), o3(ssrRenderComponent(A, { title: "Prompt\u5217\u8868" }, null, e2)), unref(z2) && (null == (c2 = unref(z2)) ? void 0 : c2.length) ? (o3('<div class="tags-con" data-v-715416f0><div class="m-b-10" data-v-715416f0><button class="btn btn-md btn-accent" data-v-715416f0> \u5F53\u524Dtags\u66FF\u6362prompt </button></div><!--[-->'), ssrRenderList(unref(z2), (t2, a3) => {
      o3(`<button class="btn btn-sm btn-secondary m-r-10 m-b-10" data-v-715416f0>${ssrInterpolate(t2)}</button>`);
    }), o3("<!--]--></div>")) : o3('<div class="tags-con" data-v-715416f0><p class="no-data" data-v-715416f0>\u6682\u65E0\u5217\u8868</p></div>'), o3(ssrRenderComponent(A, { title: "Prompt\u8BB0\u5F55" }, { titleSide: withCtx((t2, a3, o4, e3) => {
      if (!a3)
        return [createVNode("span", { class: "title-side" }, "\u603B\u6570:" + toDisplayString(unref(k2)) + "\u6761", 1)];
      a3(`<span class="title-side" data-v-715416f0${e3}>\u603B\u6570:${ssrInterpolate(unref(k2))}\u6761</span>`);
    }), _: 1 }, e2)), unref(R2) && (null == (C2 = unref(R2)) ? void 0 : C2.length) ? (o3('<div class="history-con" data-v-715416f0><div class="button-con" data-v-715416f0><button class="btn btn-md btn-accent m-b-15" data-v-715416f0>\u6E05\u7A7A\u5386\u53F2</button></div><!--[-->'), ssrRenderList(unref(R2), (t2, l2) => {
      o3(`<div class="history-item" data-v-715416f0><p style="${ssrRenderStyle({ "font-weight": "bold", "margin-bottom": "4px" })}" data-v-715416f0>`), o3(0 === l2 ? ssrRenderComponent(T, { style: { color: "#67c23a", "font-size": "12px" } }, null, e2) : "<!---->"), o3(`<span data-v-715416f0>${ssrInterpolate(null == t2 ? void 0 : t2.time)}</span></p><p data-v-715416f0>${ssrInterpolate(null == t2 ? void 0 : t2.prompt)}</p><div class="history-button" data-v-715416f0><button class="btn btn-sm btn-secondary m-r-10" data-v-715416f0>`), ssrRenderSlot(a2.$slots, "icon", {}, () => {
        o3(ssrRenderComponent(q, { class: "m-r-4" }, null, e2));
      }, o3, e2), o3(' \u5220\u9664 </button><button class="btn btn-sm btn-accent m-r-10" data-v-715416f0>'), ssrRenderSlot(a2.$slots, "icon", {}, () => {
        o3(ssrRenderComponent(D, { class: "m-r-4" }, null, e2));
      }, o3, e2), o3(' \u590D\u5236 </button><button class="btn btn-sm btn-primary m-r-10" data-v-715416f0>'), ssrRenderSlot(a2.$slots, "icon", {}, () => {
        o3(ssrRenderComponent(E, { class: "m-r-4" }, null, e2));
      }, o3, e2), o3(" \u9009\u62E9 </button></div></div>");
    }), o3("<!--]--></div>")) : o3('<div class="tags-con" data-v-715416f0><p class="no-data" data-v-715416f0>\u6682\u65E0\u8BB0\u5F55</p></div>'), o3("</div>");
  };
} }), R = z.setup;
z.setup = (t2, a2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/pc/utils/components/promptBeautiful.vue"), R ? R(t2, a2) : void 0;
};
const k = di(z, [["__scopeId", "data-v-715416f0"]]);

export { k as default };
