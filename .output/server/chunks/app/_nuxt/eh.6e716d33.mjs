import n from './client-only.f5bddb5b.mjs';
import { _ as fe } from './AppHeader.1cc5a687.mjs';
import g from './AppBanner.d43aa17c.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import C from './eHentai.1079c40b.mjs';
import J from './eHentaiMore.eb5fe927.mjs';
import { d as di } from '../server.mjs';
import './nuxt-img.fed184f3.mjs';
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
import './shop.4d5e891e.mjs';
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
import './AreaTitle.b7e09825.mjs';
import './document-copy.11fbb28b.mjs';
import './shopping-trolley.94b396ca.mjs';

const b = defineComponent({ __name: "eh", __ssrInlineRender: true, setup(r2) {
  const a2 = ref(""), c2 = ref(""), b2 = (e2) => {
    a2.value = e2, c2.value = e2;
  };
  return (r3, p2, f2, v2) => {
    const j = n, h = fe, g$1 = g;
    p2(`<div${ssrRenderAttrs(mergeProps({ class: "eh-tags-page page" }, v2))} data-v-1b3519b0>`), p2(ssrRenderComponent(j, null, { default: withCtx((e2, t2, o2, r4) => {
      if (!t2)
        return [createVNode(h)];
      t2(ssrRenderComponent(h, null, null, o2, r4));
    }), _: 1 }, f2)), p2('<div class="content" data-v-1b3519b0>'), p2(ssrRenderComponent(g$1, { placeholder: "\u641C\u7D22\u6807\u7B7E", onSearchChange: b2 }, null, f2)), p2(ssrRenderComponent(C, { "search-text": a2.value }, null, f2)), p2(ssrRenderComponent(J, { "search-text": c2.value }, null, f2)), p2("</div></div>");
  };
} }), f = b.setup;
b.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/tags/eh.vue"), f ? f(e2, t2) : void 0;
};
const v = di(b, [["__scopeId", "data-v-1b3519b0"]]);

export { v as default };
