import I from './Icon.1f05ab14.mjs';
import n from './client-only.f5bddb5b.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { t } from './link.0f68c07f.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { d as di } from '../server.mjs';
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

const u = defineComponent({ __name: "FixMenu", __ssrInlineRender: true, setup: (e2) => (ref(false), (e3, n2, i2, p2) => {
  const u2 = I, c2 = t, l2 = n;
  n2(`<div${ssrRenderAttrs(mergeProps({ class: "page-fix-menu" }, p2))} data-v-63c719a1><button class="hover-anime-btn btn btn-sm btn-accent btn-circle" data-v-63c719a1>`), n2(ssrRenderComponent(u2, { name: "entypo:brush" }, null, i2)), n2('</button><button class="hover-anime-btn btn btn-sm btn-primary btn-circle" data-v-63c719a1>'), n2(ssrRenderComponent(c2, null, null, i2)), n2("</button>"), n2(ssrRenderComponent(l2, null, null, i2)), n2("</div>");
}) }), c = u.setup;
u.setup = (t2, o2) => {
  const e2 = useSSRContext();
  return (e2.modules || (e2.modules = /* @__PURE__ */ new Set())).add("components/pc/FixMenu.vue"), c ? c(t2, o2) : void 0;
};
const l = di(u, [["__scopeId", "data-v-63c719a1"]]);

export { l as default };
