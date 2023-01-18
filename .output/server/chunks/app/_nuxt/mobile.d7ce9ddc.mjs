import n from './client-only.f5bddb5b.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
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

const d = {};
const u = d.setup;
d.setup = (o2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("layouts/mobile.vue"), u ? u(o2, t2) : void 0;
};
const p = di(d, [["ssrRender", function(e2, s2, d2, u2) {
  const p2 = n;
  s2(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-default-layout" }, u2))} data-v-10bdb79e>`), ssrRenderSlot(e2.$slots, "default", {}, null, s2, d2), s2(ssrRenderComponent(p2, null, null, d2)), s2("</div>");
}], ["__scopeId", "data-v-10bdb79e"]]);

export { p as default };
