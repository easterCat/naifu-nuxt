import n from './client-only.f5bddb5b.mjs';
import l$1 from './FixMenu.604bb48a.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { d as di } from '../server.mjs';
import './Icon.1f05ab14.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
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
import './link.0f68c07f.mjs';

const d = {};
const l = d.setup;
d.setup = (o2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue"), l ? l(o2, t2) : void 0;
};
const a = di(d, [["ssrRender", function(m2, p2, d2, l2) {
  const a2 = n, f = l$1;
  p2(`<div${ssrRenderAttrs(mergeProps({ class: "pc-default-layout" }, l2))} data-v-8e45d5c5>`), ssrRenderSlot(m2.$slots, "default", {}, null, p2, d2), p2(ssrRenderComponent(a2, null, { default: withCtx((o2, t2, r2, e2) => {
    if (!t2)
      return [createVNode(f)];
    t2(ssrRenderComponent(f, null, null, r2, e2));
  }), _: 1 }, d2)), p2("</div>");
}], ["__scopeId", "data-v-8e45d5c5"]]);

export { a as default };
