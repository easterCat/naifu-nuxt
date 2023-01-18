import n from './client-only.f5bddb5b.mjs';
import { _ as fe } from './AppHeader.1a53bb67.mjs';
import g from './AppBanner.207aa45f.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import F from './gelbooru.41af31e2.mjs';
import { d as di } from '../server.mjs';
import './nuxt-img.540f6540.mjs';
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
import './AppAnimate.b0d9e6d2.mjs';
import './shop.269c075a.mjs';
import 'element-plus/lib';
import 'vue3-clipboard';
import 'element-plus';
import './plus.ff77b18c.mjs';
import 'vuedraggable';
import 'vue-uuid';
import './index.7c6a213b.mjs';
import './link.0f68c07f.mjs';
import 'lodash';
import './AppAnimate.0c3d74c4.mjs';
import './sYw7uX71Xe.38399cea.mjs';
import '@element-plus/icons-vue';
import './AreaTitle.512d3722.mjs';
import './document-copy.11fbb28b.mjs';
import './shopping-trolley.94b396ca.mjs';

const f = defineComponent({ __name: "gelbooru", __ssrInlineRender: true, setup(r2) {
  const a2 = ref(""), d2 = (e2) => {
    a2.value = e2;
  };
  return (r3, p2, f2, c2) => {
    const v2 = n, b = fe, j = g;
    p2(`<div${ssrRenderAttrs(mergeProps({ class: "gelbooru-tags-page page" }, c2))} data-v-e1714ff9>`), p2(ssrRenderComponent(v2, null, { default: withCtx((e2, o2, t2, r4) => {
      if (!o2)
        return [createVNode(b)];
      o2(ssrRenderComponent(b, null, null, t2, r4));
    }), _: 1 }, f2)), p2('<div class="content" data-v-e1714ff9>'), p2(ssrRenderComponent(j, { placeholder: "\u641C\u7D22\u6807\u7B7E", onSearchChange: d2 }, null, f2)), p2(ssrRenderComponent(F, { "search-text": a2.value }, null, f2)), p2("</div></div>");
  };
} }), c = f.setup;
f.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/tags/gelbooru.vue"), c ? c(e2, o2) : void 0;
};
const v = di(f, [["__scopeId", "data-v-e1714ff9"]]);

export { v as default };
