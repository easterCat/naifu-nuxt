import { U as U$1, d as di, n as ni } from '../server.mjs';
import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.d43aa17c.mjs';
import z from './TemplateDetail.57da46ce.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, withKeys, isRef, useSSRContext } from 'vue';
import { A } from './index.7c6a213b.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { ID_INJECTION_KEY } from 'element-plus';
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
import './AppAnimate.0c3d74c4.mjs';
import 'element-plus/lib';
import './sYw7uX71Xe.38399cea.mjs';
import '@element-plus/icons-vue';
import './shop.4d5e891e.mjs';
import 'vue3-clipboard';
import './copy-document.b505b457.mjs';
import 'vue-uuid';

const M = defineComponent({ __name: "sfw", __ssrInlineRender: true, setup(t2) {
  U$1().vueApp.provide(ID_INJECTION_KEY, { prefix: Math.floor(1e3 * Math.random()), current: 0 }), ref(true);
  const u2 = ref(false), k2 = ref(1), M2 = ref(36), T2 = ref(0), U2 = ref(0), K = ref(false), S = ref([]), X = ref(null), z$1 = computed(() => Array.from({ length: T2.value }, (e2, t3) => t3).slice(k2.value > 3 ? k2.value - 3 : k2.value, k2.value + 3)), B = async () => {
    if (u2.value)
      return;
    u2.value = true;
    const { TemplateApi: e2 } = A(), t3 = await e2.getTemplates({ pageIndex: k2.value, pageSize: M2.value });
    u2.value = false, S.value = null == t3 ? void 0 : t3.templates, U2.value = t3.total, T2.value = Math.ceil(U2.value / M2.value);
  }, D = (e2) => {
    k2.value = e2, B();
  }, N = () => {
    k2.value <= 1 || (k2.value = k2.value - 1, B());
  }, R = () => {
    k2.value = 1, B();
  }, Y = () => {
    k2.value = T2.value, B();
  }, q = (e2) => {
    D(Number(e2.target.value));
  }, E = () => {
    k2.value >= T2.value || (k2.value = k2.value + 1, B());
  };
  return (t3, o2, u3, i2) => {
    const s2 = ni, j2 = n, I2 = g, M3 = z;
    o2(`<div${ssrRenderAttrs(mergeProps({ class: "template-page page" }, i2))} data-v-ef9e7b1b>`), o2(ssrRenderComponent(s2, { name: "mobile" }, { default: withCtx((e2, t4, a2, l2) => {
      if (!t4)
        return [createVNode(j2), createVNode("div", { class: "content" }, [createVNode("div", { class: "banner-con" }, [createVNode(I2, { placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u6807\u7B7E" })]), createVNode(j2), createVNode(j2), createVNode("div", { class: "demo-pagination-block" }, [unref(T2) && unref(T2) > 0 ? (openBlock(), createBlock("div", { key: 0, class: "btn-group" }, [createVNode("button", { class: "btn btn-outline", onClick: R }, "\u9996\u9875"), createVNode("button", { class: "btn btn-outline", onClick: N }, "\u4E0A\u4E00\u9875"), (openBlock(true), createBlock(Fragment, null, renderList(unref(z$1), (e3, t5) => (openBlock(), createBlock("button", { key: t5, class: ["btn", { "btn-active": e3 === unref(k2) }], onClick: (t6) => D(e3) }, toDisplayString(e3), 11, ["onClick"]))), 128)), unref(k2) < unref(T2) - 3 ? (openBlock(), createBlock("button", { key: 0, class: "btn" }, "...")) : createCommentVNode("", true), createVNode("button", { class: ["btn", { "btn-active": unref(T2) === unref(k2) }], onClick: (e3) => D(unref(T2)) }, toDisplayString(unref(T2)), 11, ["onClick"]), createVNode("button", { class: "btn btn-outline", onClick: E }, "\u4E0B\u4E00\u9875"), createVNode("button", { class: "btn btn-outline", onClick: Y }, "\u5C3E\u9875"), createVNode("input", { value: unref(k2), type: "text", placeholder: "go", class: "w-24 max-w-xs input input-bordered", onKeyup: withKeys(q, ["enter"]) }, null, 40, ["value", "onKeyup"])])) : createCommentVNode("", true)])]), createVNode(M3, { modelValue: unref(K), "onUpdate:modelValue": (e3) => isRef(K) ? K.value = e3 : null, "current-template": unref(X) }, null, 8, ["modelValue", "onUpdate:modelValue", "current-template"])];
      t4(ssrRenderComponent(j2, null, null, a2, l2)), t4(`<div class="content" data-v-ef9e7b1b${l2}><div class="banner-con" data-v-ef9e7b1b${l2}>`), t4(ssrRenderComponent(I2, { placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u6807\u7B7E" }, null, a2, l2)), t4("</div>"), t4(ssrRenderComponent(j2, null, null, a2, l2)), t4(ssrRenderComponent(j2, null, null, a2, l2)), t4(`<div class="demo-pagination-block" data-v-ef9e7b1b${l2}>`), unref(T2) && unref(T2) > 0 ? (t4(`<div class="btn-group" data-v-ef9e7b1b${l2}><button class="btn btn-outline" data-v-ef9e7b1b${l2}>\u9996\u9875</button><button class="btn btn-outline" data-v-ef9e7b1b${l2}>\u4E0A\u4E00\u9875</button><!--[-->`), ssrRenderList(unref(z$1), (e3, a3) => {
        t4(`<button class="${ssrRenderClass([{ "btn-active": e3 === unref(k2) }, "btn"])}" data-v-ef9e7b1b${l2}>${ssrInterpolate(e3)}</button>`);
      }), t4("<!--]-->"), unref(k2) < unref(T2) - 3 ? t4(`<button class="btn" data-v-ef9e7b1b${l2}>...</button>`) : t4("<!---->"), t4(`<button class="${ssrRenderClass([{ "btn-active": unref(T2) === unref(k2) }, "btn"])}" data-v-ef9e7b1b${l2}>${ssrInterpolate(unref(T2))}</button><button class="btn btn-outline" data-v-ef9e7b1b${l2}>\u4E0B\u4E00\u9875</button><button class="btn btn-outline" data-v-ef9e7b1b${l2}>\u5C3E\u9875</button><input${ssrRenderAttr("value", unref(k2))} type="text" placeholder="go" class="w-24 max-w-xs input input-bordered" data-v-ef9e7b1b${l2}></div>`)) : t4("<!---->"), t4("</div></div>"), t4(ssrRenderComponent(M3, { modelValue: unref(K), "onUpdate:modelValue": (e3) => isRef(K) ? K.value = e3 : null, "current-template": unref(X) }, null, a2, l2));
    }), _: 1 }, u3)), o2("</div>");
  };
} }), T = M.setup;
M.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/template/sfw.vue"), T ? T(e2, t2) : void 0;
};
const U = di(M, [["__scopeId", "data-v-ef9e7b1b"]]);

export { U as default };
