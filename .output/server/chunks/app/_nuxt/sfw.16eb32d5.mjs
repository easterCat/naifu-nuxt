import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.8defee0d.mjs';
import u from './ImageFlur.6242b6fc.mjs';
import y from './TemplateDetail.44bc18a6.mjs';
import { U, d as di } from '../server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { p } from './shop.4d5e891e.mjs';
import { ID_INJECTION_KEY } from 'element-plus';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import './AppAnimate.b0d9e6d2.mjs';
import 'element-plus/lib';
import './sYw7uX71Xe.38399cea.mjs';
import '@element-plus/icons-vue';
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
import './copy-document.b505b457.mjs';
import 'vue3-clipboard';

const _ = defineComponent({ __name: "sfw", __ssrInlineRender: true, setup(r2) {
  U().vueApp.provide(ID_INJECTION_KEY, { prefix: Math.floor(1e3 * Math.random()), current: 0 }), p(), ref(false);
  const m2 = ref(1);
  ref(36);
  const g2 = ref(0);
  ref(0);
  const _2 = ref(false);
  ref([]);
  const w2 = ref(null), $2 = ref("high"), A = computed(() => Array.from({ length: g2.value }, (t2, e2) => e2).slice(m2.value > 3 ? m2.value - 3 : m2.value, m2.value + 3)), y$1 = (t2) => {
    $2.value = t2;
  };
  return (n2, r3, l2, u2) => {
    const c2 = n, d2 = g, $3 = u, I = y;
    r3(`<div${ssrRenderAttrs(mergeProps({ class: "template-page page" }, u2))} data-v-f6c89083>`), r3(ssrRenderComponent(c2, null, null, l2)), r3('<div class="content" data-v-f6c89083><div class="banner-con" data-v-f6c89083>'), r3(ssrRenderComponent(d2, { placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u6807\u7B7E" }, null, l2)), r3("</div>"), r3(ssrRenderComponent($3, { onGetImageFlur: y$1 }, null, l2)), r3(ssrRenderComponent(c2, null, null, l2)), r3('<div class="demo-pagination-block" data-v-f6c89083>'), unref(g2) && unref(g2) > 0 ? (r3('<div class="btn-group" data-v-f6c89083><button class="btn btn-outline" data-v-f6c89083>\u9996\u9875</button><button class="btn btn-outline" data-v-f6c89083>\u4E0A\u4E00\u9875</button><!--[-->'), ssrRenderList(unref(A), (t2, e2) => {
      r3(`<button class="${ssrRenderClass([{ "btn-active": t2 === unref(m2) }, "btn"])}" data-v-f6c89083>${ssrInterpolate(t2)}</button>`);
    }), r3("<!--]-->"), unref(m2) < unref(g2) - 3 ? r3('<button class="btn" data-v-f6c89083>...</button>') : r3("<!---->"), r3(`<button class="${ssrRenderClass([{ "btn-active": unref(g2) === unref(m2) }, "btn"])}" data-v-f6c89083>${ssrInterpolate(unref(g2))}</button><button class="btn btn-outline" data-v-f6c89083>\u4E0B\u4E00\u9875</button><button class="btn btn-outline" data-v-f6c89083>\u5C3E\u9875</button><input${ssrRenderAttr("value", unref(m2))} type="text" placeholder="go" class="w-24 max-w-xs input input-bordered" data-v-f6c89083></div>`)) : r3("<!---->"), r3("</div></div>"), r3(ssrRenderComponent(I, { modelValue: unref(_2), "onUpdate:modelValue": (t2) => isRef(_2) ? _2.value = t2 : null, "current-template": unref(w2) }, null, l2)), r3("</div>");
  };
} }), w = _.setup;
_.setup = (t2, e2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/pc/template/sfw.vue"), w ? w(t2, e2) : void 0;
};
const $ = di(_, [["__scopeId", "data-v-f6c89083"]]);

export { $ as default };
