import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.8defee0d.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import F from './gelbooru.1af24c6e.mjs';
import { d as di } from '../server.mjs';
import './AppAnimate.b0d9e6d2.mjs';
import 'element-plus/lib';
import './sYw7uX71Xe.38399cea.mjs';
import '@element-plus/icons-vue';
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
import './AreaTitle.b7e09825.mjs';
import './index.7c6a213b.mjs';
import 'vue-uuid';
import 'element-plus';
import './shop.4d5e891e.mjs';
import 'vue3-clipboard';
import './document-copy.11fbb28b.mjs';
import './shopping-trolley.94b396ca.mjs';

const u = defineComponent({ __name: "gelbooru", __ssrInlineRender: true, setup(t2) {
  const i2 = ref(""), n2 = (e2) => {
    i2.value = e2;
  };
  return (t3, r2, u2, l2) => {
    const d2 = n, c = g;
    r2(`<div${ssrRenderAttrs(mergeProps({ class: "gelbooru-tags-page page" }, l2))} data-v-af448383>`), r2(ssrRenderComponent(d2, null, null, u2)), r2('<div class="content" data-v-af448383>'), r2(ssrRenderComponent(c, { placeholder: "\u641C\u7D22\u6807\u7B7E", onSearchChange: n2 }, null, u2)), r2(ssrRenderComponent(F, { "search-text": i2.value }, null, u2)), r2("</div></div>");
  };
} }), l = u.setup;
u.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/pc/tags/gelbooru.vue"), l ? l(e2, o2) : void 0;
};
const d = di(u, [["__scopeId", "data-v-af448383"]]);

export { d as default };
