import { U as U$1, d as di, n as ni } from '../server.mjs';
import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.d43aa17c.mjs';
import z from './TemplateDetail.57da46ce.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, withKeys, isRef, useSSRContext } from 'vue';
import { A } from './index.7c6a213b.mjs';
import { ElRow } from 'element-plus/lib';
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
import './sYw7uX71Xe.38399cea.mjs';
import '@element-plus/icons-vue';
import './shop.4d5e891e.mjs';
import 'vue3-clipboard';
import './copy-document.b505b457.mjs';
import 'vue-uuid';

const T = defineComponent({ __name: "nsfw", __ssrInlineRender: true, setup(t2) {
  U$1().vueApp.provide(ID_INJECTION_KEY, { prefix: Math.floor(1e3 * Math.random()), current: 0 }), ref(true);
  const u2 = ref(false), k2 = ref(1), T2 = ref(36), U2 = ref(0), K2 = ref(0), N = ref(false), S = ref([]), X = ref(null), z$1 = computed(() => Array.from({ length: U2.value }, (e2, t3) => t3).slice(k2.value > 3 ? k2.value - 3 : k2.value, k2.value + 3)), B = async () => {
    if (u2.value)
      return;
    u2.value = true;
    const { TemplateApi: e2 } = A(), t3 = await e2.getTemplatesNoval({ pageIndex: k2.value, pageSize: T2.value });
    u2.value = false, S.value = null == t3 ? void 0 : t3.templates, K2.value = t3.total, U2.value = Math.ceil(K2.value / T2.value);
  }, D = (e2) => {
    R(Number(e2.target.value));
  }, R = (e2) => {
    k2.value = e2, B();
  }, Y = () => {
    k2.value <= 1 || (k2.value = k2.value - 1, B());
  }, q = () => {
    k2.value = 1, B();
  }, E = () => {
    k2.value = U2.value, B();
  }, F = () => {
    k2.value >= U2.value || (k2.value = k2.value + 1, B());
  };
  return (t3, o2, u3, s2) => {
    const i2 = ni, j2 = n, M2 = g, T3 = ElRow, K3 = z;
    o2(`<div${ssrRenderAttrs(mergeProps({ class: "template-page page" }, s2))} data-v-f93eb48b>`), o2(ssrRenderComponent(i2, { name: "mobile" }, { default: withCtx((e2, t4, l2, a2) => {
      if (!t4)
        return [createVNode(j2), createVNode("div", { class: "content" }, [createVNode("div", { class: "banner-con" }, [createVNode(M2, { placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u6807\u7B7E" })]), createVNode(j2), createVNode(T3, { class: "list-con", gutter: 20 }, { default: withCtx(() => [createVNode(j2)]), _: 1 }), createVNode("div", { class: "demo-pagination-block" }, [unref(U2) && unref(U2) > 0 ? (openBlock(), createBlock("div", { key: 0, class: "btn-group" }, [createVNode("button", { class: "btn btn-outline", onClick: q }, "\u9996\u9875"), createVNode("button", { class: "btn btn-outline", onClick: Y }, "\u4E0A\u4E00\u9875"), (openBlock(true), createBlock(Fragment, null, renderList(unref(z$1), (e3, t5) => (openBlock(), createBlock("button", { key: t5, class: ["btn", { "btn-active": e3 === unref(k2) }], onClick: (t6) => R(e3) }, toDisplayString(e3), 11, ["onClick"]))), 128)), unref(k2) < unref(U2) - 3 ? (openBlock(), createBlock("button", { key: 0, class: "btn" }, "...")) : createCommentVNode("", true), createVNode("button", { class: ["btn", { "btn-active": unref(U2) === unref(k2) }], onClick: (e3) => R(unref(U2)) }, toDisplayString(unref(U2)), 11, ["onClick"]), createVNode("button", { class: "btn btn-outline", onClick: F }, "\u4E0B\u4E00\u9875"), createVNode("button", { class: "btn btn-outline", onClick: E }, "\u5C3E\u9875"), createVNode("input", { value: unref(k2), type: "text", placeholder: "go", class: "w-24 max-w-xs input input-bordered", onKeyup: withKeys(D, ["enter"]) }, null, 40, ["value", "onKeyup"])])) : createCommentVNode("", true)])]), createVNode(K3, { modelValue: unref(N), "onUpdate:modelValue": (e3) => isRef(N) ? N.value = e3 : null, "current-template": unref(X) }, null, 8, ["modelValue", "onUpdate:modelValue", "current-template"])];
      t4(ssrRenderComponent(j2, null, null, l2, a2)), t4(`<div class="content" data-v-f93eb48b${a2}><div class="banner-con" data-v-f93eb48b${a2}>`), t4(ssrRenderComponent(M2, { placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u6807\u7B7E" }, null, l2, a2)), t4("</div>"), t4(ssrRenderComponent(j2, null, null, l2, a2)), t4(ssrRenderComponent(T3, { class: "list-con", gutter: 20 }, { default: withCtx((e3, t5, l3, a3) => {
        if (!t5)
          return [createVNode(j2)];
        t5(ssrRenderComponent(j2, null, null, l3, a3));
      }), _: 1 }, l2, a2)), t4(`<div class="demo-pagination-block" data-v-f93eb48b${a2}>`), unref(U2) && unref(U2) > 0 ? (t4(`<div class="btn-group" data-v-f93eb48b${a2}><button class="btn btn-outline" data-v-f93eb48b${a2}>\u9996\u9875</button><button class="btn btn-outline" data-v-f93eb48b${a2}>\u4E0A\u4E00\u9875</button><!--[-->`), ssrRenderList(unref(z$1), (e3, l3) => {
        t4(`<button class="${ssrRenderClass([{ "btn-active": e3 === unref(k2) }, "btn"])}" data-v-f93eb48b${a2}>${ssrInterpolate(e3)}</button>`);
      }), t4("<!--]-->"), unref(k2) < unref(U2) - 3 ? t4(`<button class="btn" data-v-f93eb48b${a2}>...</button>`) : t4("<!---->"), t4(`<button class="${ssrRenderClass([{ "btn-active": unref(U2) === unref(k2) }, "btn"])}" data-v-f93eb48b${a2}>${ssrInterpolate(unref(U2))}</button><button class="btn btn-outline" data-v-f93eb48b${a2}>\u4E0B\u4E00\u9875</button><button class="btn btn-outline" data-v-f93eb48b${a2}>\u5C3E\u9875</button><input${ssrRenderAttr("value", unref(k2))} type="text" placeholder="go" class="w-24 max-w-xs input input-bordered" data-v-f93eb48b${a2}></div>`)) : t4("<!---->"), t4("</div></div>"), t4(ssrRenderComponent(K3, { modelValue: unref(N), "onUpdate:modelValue": (e3) => isRef(N) ? N.value = e3 : null, "current-template": unref(X) }, null, l2, a2));
    }), _: 1 }, u3)), o2("</div>");
  };
} }), U = T.setup;
T.setup = (e2, t2) => {
  const l2 = useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/template/nsfw.vue"), U ? U(e2, t2) : void 0;
};
const K = di(T, [["__scopeId", "data-v-f93eb48b"]]);

export { K as default };
