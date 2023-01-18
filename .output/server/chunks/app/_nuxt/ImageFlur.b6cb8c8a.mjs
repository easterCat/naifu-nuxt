import n from './client-only.f5bddb5b.mjs';
import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const p = defineComponent({ __name: "ImageFlur", __ssrInlineRender: true, emits: ["get-image-flur"], setup: (o2, { emit: t2 }) => (ref("high"), (o3, r2, t3, i2) => {
  r2(ssrRenderComponent(n, i2, null, t3));
}) }), s = p.setup;
p.setup = (e2, o2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/pc/ImageFlur.vue"), s ? s(e2, o2) : void 0;
};
const u = di(p, [["__scopeId", "data-v-25037110"]]);

export { u as default };
