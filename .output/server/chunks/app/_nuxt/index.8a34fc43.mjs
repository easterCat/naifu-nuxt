import { U, d as di, n as ni } from '../server.mjs';
import n from './client-only.f5bddb5b.mjs';
import z from './TemplateDetail.57da46ce.mjs';
import { A } from './index.7c6a213b.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import se from 'lodash';
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
import './AppAnimate.0c3d74c4.mjs';
import './shop.4d5e891e.mjs';
import 'element-plus/lib';
import 'vue3-clipboard';
import 'element-plus';
import './copy-document.b505b457.mjs';
import 'vue-uuid';

const f = defineComponent({ __name: "index", __ssrInlineRender: true, setup(t2) {
  const { TemplateApi: m2 } = A();
  ref(true), U();
  const s2 = ref(false), f2 = ref(null), b2 = ref(false), h2 = ref(1), j = ref(50);
  ref("");
  const g = ref(""), _ = ref([]);
  return se.debounce(async (e2) => {
    if (e2 === g.value)
      return;
    _.value = [], g.value = e2, b2.value = true;
    const t3 = await m2.getTemplates({ pageIndex: h2.value, pageSize: j.value, searchTag: g.value });
    b2.value = false, _.value = (null == t3 ? void 0 : t3.templates) && 0 !== (null == t3 ? void 0 : t3.templates.length) ? null == t3 ? void 0 : t3.templates : [];
  }, 1200), (t3, a2, r2, m3) => {
    const u2 = ni, c2 = n, b3 = z;
    a2(`<div${ssrRenderAttrs(mergeProps({ class: "home-page page" }, m3))} data-v-e4fc35ec>`), a2(ssrRenderComponent(u2, { name: "mobile" }, { default: withCtx((e2, t4, o2, l2) => {
      if (!t4)
        return [createVNode(c2), createVNode(c2), createVNode(b3, { modelValue: s2.value, "onUpdate:modelValue": (e3) => s2.value = e3, "current-template": f2.value }, null, 8, ["modelValue", "onUpdate:modelValue", "current-template"])];
      t4(ssrRenderComponent(c2, null, null, o2, l2)), t4(ssrRenderComponent(c2, null, null, o2, l2)), t4(ssrRenderComponent(b3, { modelValue: s2.value, "onUpdate:modelValue": (e3) => s2.value = e3, "current-template": f2.value }, null, o2, l2));
    }), _: 1 }, r2)), a2("</div>");
  };
} }), b = f.setup;
f.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/home/index.vue"), b ? b(e2, t2) : void 0;
};
const h = di(f, [["__scopeId", "data-v-e4fc35ec"]]);

export { h as default };
