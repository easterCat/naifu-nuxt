import n$1 from './client-only.f5bddb5b.mjs';
import g from './AppBanner.d43aa17c.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import F from './gelbooru.4df1ad82.mjs';
import { d as di } from '../server.mjs';
import './AppAnimate.0c3d74c4.mjs';
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

const n = defineComponent({ __name: "gelbooru", __ssrInlineRender: true, setup(t2) {
  const i2 = ref(""), l2 = (e2) => {
    i2.value = e2;
  };
  return (t3, r2, n2, u2) => {
    const d2 = n$1, c = g;
    r2(`<div${ssrRenderAttrs(mergeProps({ class: "gelbooru-tags-page page" }, u2))} data-v-fabb244a>`), r2(ssrRenderComponent(d2, null, null, n2)), r2('<div class="content" data-v-fabb244a>'), r2(ssrRenderComponent(c, { placeholder: "\u641C\u7D22\u6807\u7B7E", onSearchChange: l2 }, null, n2)), r2(ssrRenderComponent(F, { "search-text": i2.value }, null, n2)), r2("</div></div>");
  };
} }), u = n.setup;
n.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/tags/gelbooru.vue"), u ? u(e2, o2) : void 0;
};
const d = di(n, [["__scopeId", "data-v-fabb244a"]]);

export { d as default };
