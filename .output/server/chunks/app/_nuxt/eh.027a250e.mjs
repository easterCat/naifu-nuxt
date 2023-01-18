import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.207aa45f.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import C from './eHentai.6c21ddff.mjs';
import J from './eHentaiMore.7bd4d028.mjs';
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
import './AreaTitle.512d3722.mjs';
import './index.7c6a213b.mjs';
import 'vue-uuid';
import 'element-plus';
import './shop.269c075a.mjs';
import 'vue3-clipboard';
import './document-copy.11fbb28b.mjs';
import './shopping-trolley.94b396ca.mjs';

const l = defineComponent({ __name: "eh", __ssrInlineRender: true, setup(o2) {
  const i2 = ref(""), d2 = ref(""), l2 = (e2) => {
    i2.value = e2, d2.value = e2;
  };
  return (o3, r2, u2, c2) => {
    const v = n, b = g;
    r2(`<div${ssrRenderAttrs(mergeProps({ class: "eh-tags-page page" }, c2))} data-v-dbd29e60>`), r2(ssrRenderComponent(v, null, null, u2)), r2('<div class="content" data-v-dbd29e60>'), r2(ssrRenderComponent(b, { placeholder: "\u641C\u7D22\u6807\u7B7E", onSearchChange: l2 }, null, u2)), r2(ssrRenderComponent(C, { "search-text": i2.value }, null, u2)), r2(ssrRenderComponent(J, { "search-text": d2.value }, null, u2)), r2("</div></div>");
  };
} }), u = l.setup;
l.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/tags/eh.vue"), u ? u(e2, t2) : void 0;
};
const c = di(l, [["__scopeId", "data-v-dbd29e60"]]);

export { c as default };
