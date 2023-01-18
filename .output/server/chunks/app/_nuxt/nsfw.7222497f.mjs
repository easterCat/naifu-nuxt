import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.0455c2c4.mjs';
import u from './ImageFlur.b6cb8c8a.mjs';
import x from './TemplateDetail.529c9e3c.mjs';
import { U, d as di } from '../server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, isRef, useSSRContext } from 'vue';
import { p } from './shop.269c075a.mjs';
import { A } from './index.7c6a213b.mjs';
import { ElRow } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { ID_INJECTION_KEY } from 'element-plus';
import de from 'lodash';
import './AppAnimate.b0d9e6d2.mjs';
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
import 'vue-uuid';

const I = defineComponent({ __name: "nsfw", __ssrInlineRender: true, setup(u2) {
  U().vueApp.provide(ID_INJECTION_KEY, { prefix: Math.floor(1e3 * Math.random()), current: 0 }), p();
  const c2 = ref(false), y2 = ref(1), I2 = ref(36), N2 = ref(0), S2 = ref(0), T = ref(false), M = ref([]), k = ref(null), z = ref("Gelbooru"), B = ref(""), C = ref("high"), D = computed(() => Array.from({ length: N2.value }, (e2, t2) => t2).slice(y2.value > 3 ? y2.value - 3 : y2.value, y2.value + 3)), F = (e2) => {
    C.value = e2;
  }, V = de.debounce(async (e2) => {
    e2 !== B.value && (B.value = e2, y2.value = 1, X());
  }, 1200), X = async () => {
    if (c2.value)
      return;
    c2.value = true;
    const { TemplateApi: e2, DanbooruApi: t2 } = A();
    let a2 = null;
    a2 = "Noval" === z.value ? await e2.getTemplatesNoval({ pageIndex: y2.value, pageSize: I2.value }) : await t2.searchBooruList({ pageIndex: y2.value, pageSize: I2.value, searchText: B.value }), c2.value = false, M.value = null == a2 ? void 0 : a2.templates, S2.value = a2.total, N2.value = Math.ceil(S2.value / I2.value);
  }, L = (e2) => {
    z.value = e2.target.value, "Gelbooru" === e2.target.value ? (y2.value = 1, I2.value = 100, X()) : (y2.value = 1, I2.value = 36, X());
  };
  return (l2, u3, n2, r2) => {
    const m2 = n, b2 = g, A2 = u, G2 = ElRow, I3 = x;
    u3(`<div${ssrRenderAttrs(mergeProps({ class: "template-page page" }, r2))} data-v-269119a8>`), u3(ssrRenderComponent(m2, null, null, n2)), u3('<div class="content" data-v-269119a8><div class="banner-con" data-v-269119a8>'), u3(ssrRenderComponent(b2, { placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u6807\u7B7E", onSearchChange: unref(V) }, null, n2)), u3("</div>"), u3(ssrRenderComponent(A2, { onGetImageFlur: F }, { right: withCtx((e2, t2, a2, o2) => {
      if (!t2)
        return [createVNode("select", { class: "w-32 max-w-xs select select-bordered select-sm", disabled: unref(c2), onChange: L }, [createVNode("option", { selected: "Noval" === unref(z) }, "Noval", 8, ["selected"]), createVNode("option", { selected: "Gelbooru" === unref(z) }, "Gelbooru", 8, ["selected"])], 40, ["disabled"])];
      t2(`<select class="w-32 max-w-xs select select-bordered select-sm"${ssrIncludeBooleanAttr(unref(c2)) ? " disabled" : ""} data-v-269119a8${o2}><option${ssrIncludeBooleanAttr("Noval" === unref(z)) ? " selected" : ""} data-v-269119a8${o2}>Noval</option><option${ssrIncludeBooleanAttr("Gelbooru" === unref(z)) ? " selected" : ""} data-v-269119a8${o2}>Gelbooru</option></select>`);
    }), _: 1 }, n2)), u3(ssrRenderComponent(G2, { class: "list-con", gutter: 20 }, { default: withCtx((e2, t2, a2, o2) => {
      if (!t2)
        return [createVNode(m2)];
      t2(ssrRenderComponent(m2, null, null, a2, o2));
    }), _: 1 }, n2)), u3('<div class="demo-pagination-block" data-v-269119a8>'), unref(N2) && unref(N2) > 0 ? (u3('<div class="btn-group" data-v-269119a8><button class="btn btn-outline" data-v-269119a8>\u9996\u9875</button><button class="btn btn-outline" data-v-269119a8>\u4E0A\u4E00\u9875</button><!--[-->'), ssrRenderList(unref(D), (e2, t2) => {
      u3(`<button class="${ssrRenderClass([{ "btn-active": e2 === unref(y2) }, "btn"])}" data-v-269119a8>${ssrInterpolate(e2)}</button>`);
    }), u3("<!--]-->"), unref(y2) < unref(N2) - 3 ? u3('<button class="btn" data-v-269119a8>...</button>') : u3("<!---->"), u3(`<button class="${ssrRenderClass([{ "btn-active": unref(N2) === unref(y2) }, "btn"])}" data-v-269119a8>${ssrInterpolate(unref(N2))}</button><button class="btn btn-outline" data-v-269119a8>\u4E0B\u4E00\u9875</button><button class="btn btn-outline" data-v-269119a8>\u5C3E\u9875</button><input${ssrRenderAttr("value", unref(y2))} type="text" placeholder="go" class="w-24 max-w-xs input input-bordered" data-v-269119a8></div>`)) : u3("<!---->"), u3("</div></div>"), u3(ssrRenderComponent(I3, { modelValue: unref(T), "onUpdate:modelValue": (e2) => isRef(T) ? T.value = e2 : null, "current-template": unref(k) }, null, n2)), u3("</div>");
  };
} }), N = I.setup;
I.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/pc/template/nsfw.vue"), N ? N(e2, t2) : void 0;
};
const S = di(I, [["__scopeId", "data-v-269119a8"]]);

export { S as default };
