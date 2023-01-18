import { d as di, n as ni } from '../server.mjs';
import n from './client-only.f5bddb5b.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a } from './utils.da672ed3.mjs';
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

const l = defineComponent({ __name: "index", __ssrInlineRender: true, setup: (o2) => (ref(a), (o3, t2, i2, d2) => {
  const u2 = ni, l2 = n;
  t2(`<div${ssrRenderAttrs(mergeProps({ class: "draw-page page" }, d2))} data-v-4594e73b>`), t2(ssrRenderComponent(u2, { name: "mobile" }, { default: withCtx((e2, o4, r2, t3) => {
    if (!o4)
      return [createVNode(l2), createVNode(l2)];
    o4(ssrRenderComponent(l2, null, null, r2, t3)), o4(ssrRenderComponent(l2, null, null, r2, t3));
  }), _: 1 }, i2)), t2("</div>");
}) }), v = l.setup;
l.setup = (e2, o2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/draw/index.vue"), v ? v(e2, o2) : void 0;
};
const f = di(l, [["__scopeId", "data-v-4594e73b"]]);

export { f as default };
