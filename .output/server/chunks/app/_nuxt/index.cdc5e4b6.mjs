import n$1 from './client-only.f5bddb5b.mjs';
import { A } from './index.7c6a213b.mjs';
import { p } from './shop.4d5e891e.mjs';
import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { d as di } from '../server.mjs';
import 'vue-uuid';
import 'element-plus';
import 'element-plus/lib';
import 'vue3-clipboard';
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

const u = defineComponent({ __name: "index", __ssrInlineRender: true, setup: (t2) => (A(), p(), ref(false), ref(null), (o2, r2, t3, i2) => {
  r2(ssrRenderComponent(n$1, i2, null, t3));
}) }), n = u.setup;
u.setup = (e2, o2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("pages/pc/profile/index.vue"), n ? n(e2, o2) : void 0;
};
const d = di(u, [["__scopeId", "data-v-135fbf5c"]]);

export { d as default };
