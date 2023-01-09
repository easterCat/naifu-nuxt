import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const r = {};
const d = r.setup;
r.setup = (e2, o2) => {
  const i2 = useSSRContext();
  return (i2.modules || (i2.modules = /* @__PURE__ */ new Set())).add("components/pc/AppFooter.vue"), d ? d(e2, o2) : void 0;
};
const a = di(r, [["ssrRender", function(t2, i2, r2, d2) {
  i2(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, d2))} data-v-ce0ed732><ul class="circles" data-v-ce0ed732><li data-v-ce0ed732></li><li data-v-ce0ed732></li><li data-v-ce0ed732></li><li data-v-ce0ed732></li><li data-v-ce0ed732></li><li data-v-ce0ed732></li><li data-v-ce0ed732></li><li data-v-ce0ed732></li><li data-v-ce0ed732></li><li data-v-ce0ed732></li></ul></footer>`);
}], ["__scopeId", "data-v-ce0ed732"]]);

export { a as default };
