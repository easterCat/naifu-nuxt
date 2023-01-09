import n from './client-only.f5bddb5b.mjs';
import { $ as $t } from './AppHeader.774ecbba.mjs';
import o from './AppAnimate.b0d9e6d2.mjs';
import I from './LinkList.5a026ddb.mjs';
import a from './AppFooter.1678a3f1.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './AppHeader.1cc5a687.mjs';
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
import './Icon.1f05ab14.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const d = {};
const c = d.setup;
d.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/pc/links/index.vue"), c ? c(e2, t2) : void 0;
};
const f = di(d, [["ssrRender", function(n2, u2, d2, c2) {
  const f2 = n, j = $t, b = o, v = I, h = a;
  u2(`<div${ssrRenderAttrs(mergeProps({ class: "links-page page bg-base-100" }, c2))}>`), u2(ssrRenderComponent(f2, null, { default: withCtx((e2, t2, o2, i2) => {
    if (!t2)
      return [createVNode(j)];
    t2(ssrRenderComponent(j, null, null, o2, i2));
  }), _: 1 }, d2)), u2(ssrRenderComponent(b, null, { default: withCtx((e2, t2, o2, i2) => {
    if (!t2)
      return [createVNode("div", { class: "content" }, [createVNode(v, { "show-left-menu": true })])];
    t2(`<div class="content"${i2}>`), t2(ssrRenderComponent(v, { "show-left-menu": true }, null, o2, i2)), t2("</div>");
  }), _: 1 }, d2)), u2(ssrRenderComponent(h, null, null, d2)), u2("</div>");
}]]);

export { f as default };
