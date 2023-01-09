import { M } from '../server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const s = defineComponent({ __name: "index", __ssrInlineRender: true, setup: (o2) => (M(), (e2, o3, t2, s2) => {
  o3(`<div${ssrRenderAttrs(mergeProps({ class: "index-page" }, s2))}></div>`);
}) }), p = s.setup;
s.setup = (e2, o2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), p ? p(e2, o2) : void 0;
};

export { s as default };
