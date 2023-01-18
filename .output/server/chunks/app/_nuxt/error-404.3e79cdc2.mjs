import { d as di, K, e as ee } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const p = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(a2) {
  const m2 = a2;
  return K({ title: `${m2.statusCode} - ${m2.statusMessage} | ${m2.appName}`, script: [], style: [{ children: '*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}' }] }), (t2, m3, p2, u2) => {
    const b2 = ee;
    m3(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, u2))} data-v-04469bb6><div class="fixed left-0 right-0 spotlight z-10" data-v-04469bb6></div><div class="max-w-520px text-center z-20" data-v-04469bb6><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-04469bb6>${ssrInterpolate(a2.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-04469bb6>${ssrInterpolate(a2.description)}</p><div class="w-full flex items-center justify-center" data-v-04469bb6>`), m3(ssrRenderComponent(b2, { to: "/", class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer" }, { default: withCtx((t3, e2, o2, i2) => {
      if (!e2)
        return [createTextVNode(toDisplayString(a2.backHome), 1)];
      e2(`${ssrInterpolate(a2.backHome)}`);
    }), _: 1 }, p2)), m3("</div></div></div>");
  };
} }, u = p.setup;
p.setup = (t2, e2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"), u ? u(t2, e2) : void 0;
};
const b = di(p, [["__scopeId", "data-v-04469bb6"]]);

export { b as default };