import o from './AppAnimate.b0d9e6d2.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ElInput } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { s } from './sYw7uX71Xe.38399cea.mjs';
import { Search } from '@element-plus/icons-vue';
import { d as di } from '../server.mjs';
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

const b = defineComponent({ __name: "AppBanner", __ssrInlineRender: true, props: { placeholder: { type: String, default: "" } }, emits: ["searchChange"], setup(a2, { emit: i2 }) {
  const f2 = ref("");
  return watch(f2, (e2) => {
    i2("searchChange", e2);
  }), (t2, r2, i3, b2) => {
    const h2 = o, g2 = ElInput;
    r2(`<div${ssrRenderAttrs(mergeProps({ class: "banner-con" }, b2))} data-v-6d1f8494><div class="banner-image" data-v-6d1f8494><img${ssrRenderAttr("src", s)} alt="" data-v-6d1f8494></div>`), r2(ssrRenderComponent(h2, null, { default: withCtx((e2, a3, t3, r3) => {
      if (!a3)
        return [createVNode("div", { class: "banner-message" }, "\u5B8C\u5168\u57FA\u4E8EGithub Page\u7684\u9759\u6001\u8D44\u6E90\u7F51\u7AD9,\u8BB0\u5F55\u4F7F\u7528")];
      a3(`<div class="banner-message" data-v-6d1f8494${r3}>\u5B8C\u5168\u57FA\u4E8EGithub Page\u7684\u9759\u6001\u8D44\u6E90\u7F51\u7AD9,\u8BB0\u5F55\u4F7F\u7528</div>`);
    }), _: 1 }, i3)), r2(ssrRenderComponent(h2, null, { default: withCtx((e2, t3, r3, n2) => {
      if (!t3)
        return [createVNode("div", { class: "banner-search" }, [createVNode(g2, { modelValue: f2.value, "onUpdate:modelValue": (e3) => f2.value = e3, class: "input-style", size: "large", placeholder: a2.placeholder, "prefix-icon": unref(Search), clearable: "" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "prefix-icon"]), createVNode("button", { class: "btn btn-sm btn-accent" }, "Search")])];
      t3(`<div class="banner-search" data-v-6d1f8494${n2}>`), t3(ssrRenderComponent(g2, { modelValue: f2.value, "onUpdate:modelValue": (e3) => f2.value = e3, class: "input-style", size: "large", placeholder: a2.placeholder, "prefix-icon": unref(Search), clearable: "" }, null, r3, n2)), t3(`<button class="btn btn-sm btn-accent" data-v-6d1f8494${n2}>Search</button></div>`);
    }), _: 1 }, i3)), r2(ssrRenderComponent(h2, null, { default: withCtx((e2, a3, t3, r3) => {
      if (!a3)
        return [createVNode("div", { class: "banner-tips" }, "\u57FA\u4E8Enuxt3,vue3,element plus")];
      a3(`<div class="banner-tips" data-v-6d1f8494${r3}>\u57FA\u4E8Enuxt3,vue3,element plus</div>`);
    }), _: 1 }, i3)), r2("</div>");
  };
} }), h = b.setup;
b.setup = (e2, a2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("components/pc/AppBanner.vue"), h ? h(e2, a2) : void 0;
};
const g = di(b, [["__scopeId", "data-v-6d1f8494"]]);

export { g as default };
