import { d as di, n as ni } from '../server.mjs';
import n from './client-only.f5bddb5b.mjs';
import { defineComponent, shallowRef, ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import I from './imageAnalysis.287bfb0f.mjs';
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
import './Icon.221105b5.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './AreaTitle.512d3722.mjs';
import './index.7c6a213b.mjs';
import 'vue-uuid';
import 'element-plus';
import './shop.269c075a.mjs';
import 'element-plus/lib';
import 'vue3-clipboard';
import './upload-filled.195f95e8.mjs';

const c = defineComponent({ __name: "index", __ssrInlineRender: true, setup(o2) {
  var i2;
  shallowRef(I);
  ref(0);
  const l2 = ref(a);
  return ref(null == (i2 = l2.value[0]) ? void 0 : i2.childs), ref(false), ref(""), (o3, i3, r2, p2) => {
    const l3 = ni, a2 = n;
    i3(`<div${ssrRenderAttrs(mergeProps({ class: "utils-page page" }, p2))} data-v-f51225ee>`), i3(ssrRenderComponent(l3, { name: "mobile" }, { default: withCtx((e2, o4, t2, i4) => {
      if (!o4)
        return [createVNode(a2), createVNode(a2), createVNode(a2)];
      o4(ssrRenderComponent(a2, null, null, t2, i4)), o4(ssrRenderComponent(a2, null, null, t2, i4)), o4(ssrRenderComponent(a2, null, null, t2, i4));
    }), _: 1 }, r2)), i3("</div>");
  };
} }), v = c.setup;
c.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/utils/index.vue"), v ? v(e2, o2) : void 0;
};
const b = di(c, [["__scopeId", "data-v-f51225ee"]]);

export { b as default };
