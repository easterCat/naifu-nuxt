globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/naifu","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{"API_DATA_FROM":"database","FLASK_BASE_API":"http://www.naifuai.top/stable/api","GELBOORU_TOKEN":"b8d9e7d1fa1dcc3e5116760c093be229","IP_ADDRESS":"http://www.naifuai.top"},"ipx":{"dir":"../public","domains":[],"sharp":{},"alias":{}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "\"use strict\";const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"MyDeepTheme\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"-mode\",t=\"theme\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"-mode\",t=\"theme\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n";

const _Q5h6ST0Az6 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _Q5h6ST0Az6
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-3y++sUAKzaCQmjLBz2v0kvESHgc\"",
    "mtime": "2023-05-03T07:35:37.499Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/dute_favicon_32x32.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-8oCXDVT9HoWT374Zl0C8RR6n29g\"",
    "mtime": "2023-05-03T07:35:37.493Z",
    "size": 4286,
    "path": "../public/dute_favicon_32x32.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"50-69DQBog8W6e8ZlGS0bRz1eURY9A\"",
    "mtime": "2023-05-03T07:35:37.491Z",
    "size": 80,
    "path": "../public/robots.txt"
  },
  "/worker.js": {
    "type": "application/javascript",
    "etag": "\"576-2zXlF0n7n2o2/pad0eK9vHB37zY\"",
    "mtime": "2023-05-03T07:35:37.489Z",
    "size": 1398,
    "path": "../public/worker.js"
  },
  "/_nuxt/01.bfcaf521.webp": {
    "type": "image/webp",
    "etag": "\"1f4f8-3S7JGluLSJZK6xC8cOfp2VXckkw\"",
    "mtime": "2023-05-03T07:35:37.484Z",
    "size": 128248,
    "path": "../public/_nuxt/01.bfcaf521.webp"
  },
  "/_nuxt/02.dedaa15f.webp": {
    "type": "image/webp",
    "etag": "\"27098-f0Cdu0eLWVZX+rbvAjUMpM1jIzc\"",
    "mtime": "2023-05-03T07:35:37.479Z",
    "size": 159896,
    "path": "../public/_nuxt/02.dedaa15f.webp"
  },
  "/_nuxt/03.871e52e8.webp": {
    "type": "image/webp",
    "etag": "\"25ef0-2K/HI+17WfR7tMdfDoiWHiuBlgw\"",
    "mtime": "2023-05-03T07:35:37.474Z",
    "size": 155376,
    "path": "../public/_nuxt/03.871e52e8.webp"
  },
  "/_nuxt/04.dc12eeac.webp": {
    "type": "image/webp",
    "etag": "\"2f992-1Lrkz+KkNIjqcgoM/c+N9xMioy4\"",
    "mtime": "2023-05-03T07:35:37.469Z",
    "size": 194962,
    "path": "../public/_nuxt/04.dc12eeac.webp"
  },
  "/_nuxt/AppAnimate.vue.8fb43427.js": {
    "type": "application/javascript",
    "etag": "\"1f9-4l3prGe290yi/KMrWuwX6ptnyS8\"",
    "mtime": "2023-05-03T07:35:37.462Z",
    "size": 505,
    "path": "../public/_nuxt/AppAnimate.vue.8fb43427.js"
  },
  "/_nuxt/AppBanner.5db97cc0.js": {
    "type": "application/javascript",
    "etag": "\"536-dCEOtAg15gG1hEvN74pbO77MKzU\"",
    "mtime": "2023-05-03T07:35:37.460Z",
    "size": 1334,
    "path": "../public/_nuxt/AppBanner.5db97cc0.js"
  },
  "/_nuxt/AppBanner.ef5d8149.js": {
    "type": "application/javascript",
    "etag": "\"558-JCpO0w+DwBJvAhO98qCa+orkt8s\"",
    "mtime": "2023-05-03T07:35:37.458Z",
    "size": 1368,
    "path": "../public/_nuxt/AppBanner.ef5d8149.js"
  },
  "/_nuxt/AppBanner.fb0a5f76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"680-M7jrJdlDwr5QO/krgaTVWgGXF9A\"",
    "mtime": "2023-05-03T07:35:37.456Z",
    "size": 1664,
    "path": "../public/_nuxt/AppBanner.fb0a5f76.css"
  },
  "/_nuxt/AppFooter.b62ad9f7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"537-wUO+VQnBoT5H0bbi866McK1/kzM\"",
    "mtime": "2023-05-03T07:35:37.455Z",
    "size": 1335,
    "path": "../public/_nuxt/AppFooter.b62ad9f7.css"
  },
  "/_nuxt/AppFooter.c1cdfdd3.js": {
    "type": "application/javascript",
    "etag": "\"1cd-RVT7ptJrMvViSvZlaaz49kHNd2A\"",
    "mtime": "2023-05-03T07:35:37.453Z",
    "size": 461,
    "path": "../public/_nuxt/AppFooter.c1cdfdd3.js"
  },
  "/_nuxt/AppHeader.27b10f29.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"89d7-CjWHNZTPo0IKq/oMGG8DpGhJbHI\"",
    "mtime": "2023-05-03T07:35:37.450Z",
    "size": 35287,
    "path": "../public/_nuxt/AppHeader.27b10f29.css"
  },
  "/_nuxt/AppHeader.42ada422.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29d1-1BRdmnM2tlEm8GMNJYKBN5EgGNo\"",
    "mtime": "2023-05-03T07:35:37.448Z",
    "size": 10705,
    "path": "../public/_nuxt/AppHeader.42ada422.css"
  },
  "/_nuxt/AppHeader.712d55b6.js": {
    "type": "application/javascript",
    "etag": "\"1e6b-vRfjyh39QmJ6JwbdOUfQ1Sr/RNk\"",
    "mtime": "2023-05-03T07:35:37.446Z",
    "size": 7787,
    "path": "../public/_nuxt/AppHeader.712d55b6.js"
  },
  "/_nuxt/AppHeader.c4ad434e.js": {
    "type": "application/javascript",
    "etag": "\"158c-NCrxWpSadlul3I97f0x/bzxA+E4\"",
    "mtime": "2023-05-03T07:35:37.444Z",
    "size": 5516,
    "path": "../public/_nuxt/AppHeader.c4ad434e.js"
  },
  "/_nuxt/AppHeader.vue.f62f57c0.js": {
    "type": "application/javascript",
    "etag": "\"1de8-Shi+04iL7BOvbdJ1XZtF/Mkt0ik\"",
    "mtime": "2023-05-03T07:35:37.442Z",
    "size": 7656,
    "path": "../public/_nuxt/AppHeader.vue.f62f57c0.js"
  },
  "/_nuxt/AreaTitle.47993181.js": {
    "type": "application/javascript",
    "etag": "\"196-VE7JQ2DR7FXFRrE+/6ydceoq7dQ\"",
    "mtime": "2023-05-03T07:35:37.441Z",
    "size": 406,
    "path": "../public/_nuxt/AreaTitle.47993181.js"
  },
  "/_nuxt/AreaTitle.53015a37.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ac-AbQ+Ai083w+mdGv2o+REEOsblwQ\"",
    "mtime": "2023-05-03T07:35:37.439Z",
    "size": 684,
    "path": "../public/_nuxt/AreaTitle.53015a37.css"
  },
  "/_nuxt/AreaTitle.7541e96f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b7-lx+vixW11cfCUS/CSsYua+B0J4Q\"",
    "mtime": "2023-05-03T07:35:37.436Z",
    "size": 695,
    "path": "../public/_nuxt/AreaTitle.7541e96f.css"
  },
  "/_nuxt/AreaTitle.af9f5cf8.js": {
    "type": "application/javascript",
    "etag": "\"196-m3rSLWz6JjcR29YMesdRU+yVZ90\"",
    "mtime": "2023-05-03T07:35:37.433Z",
    "size": 406,
    "path": "../public/_nuxt/AreaTitle.af9f5cf8.js"
  },
  "/_nuxt/FixMenu.7359bebe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"35f-nUFifjtOqcyOZUDEWPKJ56IvAHw\"",
    "mtime": "2023-05-03T07:35:37.431Z",
    "size": 863,
    "path": "../public/_nuxt/FixMenu.7359bebe.css"
  },
  "/_nuxt/GenerateImage.86b81104.js": {
    "type": "application/javascript",
    "etag": "\"2759-y4gCu1/8gWyvOxFFkwxKV598a30\"",
    "mtime": "2023-05-03T07:35:37.429Z",
    "size": 10073,
    "path": "../public/_nuxt/GenerateImage.86b81104.js"
  },
  "/_nuxt/Icon.b60facb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-zMPLmvCZlYiFksjvdHEQCaeW9HQ\"",
    "mtime": "2023-05-03T07:35:37.427Z",
    "size": 67,
    "path": "../public/_nuxt/Icon.b60facb8.css"
  },
  "/_nuxt/Icon.e4501bf3.js": {
    "type": "application/javascript",
    "etag": "\"525a-y+bx4GhNTcvf7YHZga2aWP+Q8Qs\"",
    "mtime": "2023-05-03T07:35:37.424Z",
    "size": 21082,
    "path": "../public/_nuxt/Icon.e4501bf3.js"
  },
  "/_nuxt/IconCSS.c801ab78.js": {
    "type": "application/javascript",
    "etag": "\"41d-IROGFj4P42hkOQa7etyaZ3+hsAA\"",
    "mtime": "2023-05-03T07:35:37.422Z",
    "size": 1053,
    "path": "../public/_nuxt/IconCSS.c801ab78.js"
  },
  "/_nuxt/IconCSS.da4df14b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-15IN0qUCwK3rpTvvp/SlHAIAAgA\"",
    "mtime": "2023-05-03T07:35:37.420Z",
    "size": 258,
    "path": "../public/_nuxt/IconCSS.da4df14b.css"
  },
  "/_nuxt/ImageFlur.17c4dbc9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f2-CFMZoLELDHFJEbw4DAnIZ/r50ho\"",
    "mtime": "2023-05-03T07:35:37.419Z",
    "size": 754,
    "path": "../public/_nuxt/ImageFlur.17c4dbc9.css"
  },
  "/_nuxt/ImageFlur.649f6404.js": {
    "type": "application/javascript",
    "etag": "\"43c-L42f3zMShrHp3xcLR42CYnv2gbk\"",
    "mtime": "2023-05-03T07:35:37.418Z",
    "size": 1084,
    "path": "../public/_nuxt/ImageFlur.649f6404.js"
  },
  "/_nuxt/LinkList.11d6ad7b.js": {
    "type": "application/javascript",
    "etag": "\"1981-1Nmx2hEzYmyj/oANrKwowcEuBpY\"",
    "mtime": "2023-05-03T07:35:37.415Z",
    "size": 6529,
    "path": "../public/_nuxt/LinkList.11d6ad7b.js"
  },
  "/_nuxt/LinkList.70e482db.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102d-TNNb3wkY3M3mitMieGABtptMvDw\"",
    "mtime": "2023-05-03T07:35:37.411Z",
    "size": 4141,
    "path": "../public/_nuxt/LinkList.70e482db.css"
  },
  "/_nuxt/LinkList.vue.5ec06d9d.js": {
    "type": "application/javascript",
    "etag": "\"e5-OOCbRAlQRpBfwe4fvxa2G9nCSEM\"",
    "mtime": "2023-05-03T07:35:37.410Z",
    "size": 229,
    "path": "../public/_nuxt/LinkList.vue.5ec06d9d.js"
  },
  "/_nuxt/TemplateDetail.243aedc0.js": {
    "type": "application/javascript",
    "etag": "\"13d9-HlZht4nDnj6m3NdhX3HhdLxi2os\"",
    "mtime": "2023-05-03T07:35:37.407Z",
    "size": 5081,
    "path": "../public/_nuxt/TemplateDetail.243aedc0.js"
  },
  "/_nuxt/TemplateDetail.50c52758.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a20-oYBxxN+Ku8rmUA9zqfvdX+4TIow\"",
    "mtime": "2023-05-03T07:35:37.403Z",
    "size": 2592,
    "path": "../public/_nuxt/TemplateDetail.50c52758.css"
  },
  "/_nuxt/TemplateDetail.f2854d2b.js": {
    "type": "application/javascript",
    "etag": "\"1273-Bvpcp3KJ7Xfe/OnP5WaevEXlR2g\"",
    "mtime": "2023-05-03T07:35:37.402Z",
    "size": 4723,
    "path": "../public/_nuxt/TemplateDetail.f2854d2b.js"
  },
  "/_nuxt/arrow-left-bold.22f1f2d1.js": {
    "type": "application/javascript",
    "etag": "\"49f-Dq+RkcyVp6qbiX7Y9c9M10ulQrM\"",
    "mtime": "2023-05-03T07:35:37.399Z",
    "size": 1183,
    "path": "../public/_nuxt/arrow-left-bold.22f1f2d1.js"
  },
  "/_nuxt/check.0bcb8353.js": {
    "type": "application/javascript",
    "etag": "\"179-9dE6IHxX9FvcL2c1gFW3mMje3Zw\"",
    "mtime": "2023-05-03T07:35:37.397Z",
    "size": 377,
    "path": "../public/_nuxt/check.0bcb8353.js"
  },
  "/_nuxt/chitu.1bb18c98.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"681-0bts9+uKfmyEANTI9aSSYS/jKK8\"",
    "mtime": "2023-05-03T07:35:37.395Z",
    "size": 1665,
    "path": "../public/_nuxt/chitu.1bb18c98.css"
  },
  "/_nuxt/chitu.49b97323.js": {
    "type": "application/javascript",
    "etag": "\"21f8-Fa/z2CRdeASrMIxUAo4wJQIx9Fo\"",
    "mtime": "2023-05-03T07:35:37.393Z",
    "size": 8696,
    "path": "../public/_nuxt/chitu.49b97323.js"
  },
  "/_nuxt/chitu.4df6c2ca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6af-nYfrdX+HlvxRi2UQalVtYLH+Zlg\"",
    "mtime": "2023-05-03T07:35:37.390Z",
    "size": 1711,
    "path": "../public/_nuxt/chitu.4df6c2ca.css"
  },
  "/_nuxt/chitu.6a249b31.js": {
    "type": "application/javascript",
    "etag": "\"22d3-uFqFTgibzh2L41UzknuR83kgqs0\"",
    "mtime": "2023-05-03T07:35:37.388Z",
    "size": 8915,
    "path": "../public/_nuxt/chitu.6a249b31.js"
  },
  "/_nuxt/client-only.0e549049.js": {
    "type": "application/javascript",
    "etag": "\"1de-+0ilTKiDi/AhaUcPuqJQ2EsX7Xw\"",
    "mtime": "2023-05-03T07:35:37.386Z",
    "size": 478,
    "path": "../public/_nuxt/client-only.0e549049.js"
  },
  "/_nuxt/copy-document.ea07b65e.js": {
    "type": "application/javascript",
    "etag": "\"29e-+b8OcHUcly4ImyrYOelCuZAhy3E\"",
    "mtime": "2023-05-03T07:35:37.385Z",
    "size": 670,
    "path": "../public/_nuxt/copy-document.ea07b65e.js"
  },
  "/_nuxt/dayjs.8d3b77e9.js": {
    "type": "application/javascript",
    "etag": "\"3abb-+CT/hPRfuceoXIwB7FTvaGjLE7A\"",
    "mtime": "2023-05-03T07:35:37.383Z",
    "size": 15035,
    "path": "../public/_nuxt/dayjs.8d3b77e9.js"
  },
  "/_nuxt/default.b7d8577b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"272-6fejxovWY8mOVKDc+n8SUNn6e30\"",
    "mtime": "2023-05-03T07:35:37.381Z",
    "size": 626,
    "path": "../public/_nuxt/default.b7d8577b.css"
  },
  "/_nuxt/default.bcde3a08.js": {
    "type": "application/javascript",
    "etag": "\"8f2-8n3ebZgyZOXHtelRrxlf7/6u3S4\"",
    "mtime": "2023-05-03T07:35:37.379Z",
    "size": 2290,
    "path": "../public/_nuxt/default.bcde3a08.js"
  },
  "/_nuxt/delete.deeb614b.js": {
    "type": "application/javascript",
    "etag": "\"25d-TqIbpCWkf9niLS8S6W9lzWoc6gI\"",
    "mtime": "2023-05-03T07:35:37.377Z",
    "size": 605,
    "path": "../public/_nuxt/delete.deeb614b.js"
  },
  "/_nuxt/document-copy.8b581c25.js": {
    "type": "application/javascript",
    "etag": "\"216-ObQzDIT2uBpu5Jyv5O1Qq4vnyvQ\"",
    "mtime": "2023-05-03T07:35:37.375Z",
    "size": 534,
    "path": "../public/_nuxt/document-copy.8b581c25.js"
  },
  "/_nuxt/eHentai.6e436293.js": {
    "type": "application/javascript",
    "etag": "\"ae5-nOiFQOJpqjO1+V6HNXc+cfwIrvY\"",
    "mtime": "2023-05-03T07:35:37.373Z",
    "size": 2789,
    "path": "../public/_nuxt/eHentai.6e436293.js"
  },
  "/_nuxt/eHentai.b616aa12.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"492-vSNDSEdu3kp3/zG1Q9IH/Mm86GE\"",
    "mtime": "2023-05-03T07:35:37.371Z",
    "size": 1170,
    "path": "../public/_nuxt/eHentai.b616aa12.css"
  },
  "/_nuxt/eHentai.d1e6f821.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"468-r4SQ/fVNJIO7nWMZAHBxeUjIyrk\"",
    "mtime": "2023-05-03T07:35:37.368Z",
    "size": 1128,
    "path": "../public/_nuxt/eHentai.d1e6f821.css"
  },
  "/_nuxt/eHentai.f61e96f0.js": {
    "type": "application/javascript",
    "etag": "\"ad0-Zp1Cis6VWda8/qNsjbqFbYKBfOE\"",
    "mtime": "2023-05-03T07:35:37.365Z",
    "size": 2768,
    "path": "../public/_nuxt/eHentai.f61e96f0.js"
  },
  "/_nuxt/eHentaiMore.0388c601.js": {
    "type": "application/javascript",
    "etag": "\"1595-i3tYvEu1R+c3xxah671U9RbmxLk\"",
    "mtime": "2023-05-03T07:35:37.363Z",
    "size": 5525,
    "path": "../public/_nuxt/eHentaiMore.0388c601.js"
  },
  "/_nuxt/eHentaiMore.92bd9995.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ec-i0RQt1wg9CK+i21ezytG0R0nqhA\"",
    "mtime": "2023-05-03T07:35:37.360Z",
    "size": 1260,
    "path": "../public/_nuxt/eHentaiMore.92bd9995.css"
  },
  "/_nuxt/eHentaiMore.a1028c5b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"507-sFWMk50lPIWh/x8pNjpxHyGYgAw\"",
    "mtime": "2023-05-03T07:35:37.358Z",
    "size": 1287,
    "path": "../public/_nuxt/eHentaiMore.a1028c5b.css"
  },
  "/_nuxt/eHentaiMore.b24df863.js": {
    "type": "application/javascript",
    "etag": "\"1580-Bn9DOceF2tONDS7oDZDEiwp86+c\"",
    "mtime": "2023-05-03T07:35:37.356Z",
    "size": 5504,
    "path": "../public/_nuxt/eHentaiMore.b24df863.js"
  },
  "/_nuxt/eh.5b1dba67.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"613-T7gp+39jAl9SQUvQRJ6CX7b/+DY\"",
    "mtime": "2023-05-03T07:35:37.355Z",
    "size": 1555,
    "path": "../public/_nuxt/eh.5b1dba67.css"
  },
  "/_nuxt/eh.5cb433ce.js": {
    "type": "application/javascript",
    "etag": "\"69e-D7aCyplgYzSUwSzSXXS0vsRe4Kg\"",
    "mtime": "2023-05-03T07:35:37.353Z",
    "size": 1694,
    "path": "../public/_nuxt/eh.5cb433ce.js"
  },
  "/_nuxt/eh.71ab7383.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"649-G0ByF80dQ3bKYOey6BKo8jDs3NI\"",
    "mtime": "2023-05-03T07:35:37.352Z",
    "size": 1609,
    "path": "../public/_nuxt/eh.71ab7383.css"
  },
  "/_nuxt/eh.f4d38069.js": {
    "type": "application/javascript",
    "etag": "\"572-su5U9O5LhSrNy4gw9Fr0tkpXgKU\"",
    "mtime": "2023-05-03T07:35:37.349Z",
    "size": 1394,
    "path": "../public/_nuxt/eh.f4d38069.js"
  },
  "/_nuxt/element-plus.14b5fef1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"21146-4iWndTcXRuACiMJTzB8a4YrfnCc\"",
    "mtime": "2023-05-03T07:35:37.347Z",
    "size": 135494,
    "path": "../public/_nuxt/element-plus.14b5fef1.css"
  },
  "/_nuxt/element-plus.9770c440.js": {
    "type": "application/javascript",
    "etag": "\"161319-j8ZVribpZferuqjfDuNMw7y2hmw\"",
    "mtime": "2023-05-03T07:35:37.342Z",
    "size": 1446681,
    "path": "../public/_nuxt/element-plus.9770c440.js"
  },
  "/_nuxt/entry.6d913b1a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6bcc6-AtvVKG6QJ2zA2Vdj32HskdTmt7M\"",
    "mtime": "2023-05-03T07:35:37.323Z",
    "size": 441542,
    "path": "../public/_nuxt/entry.6d913b1a.css"
  },
  "/_nuxt/entry.6e6388fc.js": {
    "type": "application/javascript",
    "etag": "\"2033c-nOY8GvrNkuJGncxXn2pMnlyjGv4\"",
    "mtime": "2023-05-03T07:35:37.316Z",
    "size": 131900,
    "path": "../public/_nuxt/entry.6e6388fc.js"
  },
  "/_nuxt/error-404.1474f64e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-HViiyiVJMGPK8i0/uY2HTTvRXlw\"",
    "mtime": "2023-05-03T07:35:37.312Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.1474f64e.css"
  },
  "/_nuxt/error-404.a3904e01.js": {
    "type": "application/javascript",
    "etag": "\"94c-Yw/mACD/OA5oM2nZ86cgULJyUM4\"",
    "mtime": "2023-05-03T07:35:37.309Z",
    "size": 2380,
    "path": "../public/_nuxt/error-404.a3904e01.js"
  },
  "/_nuxt/error-500.05c34f33.js": {
    "type": "application/javascript",
    "etag": "\"7f3-uhdbckgWohx6eaBS5E3DjQgbbeI\"",
    "mtime": "2023-05-03T07:35:37.308Z",
    "size": 2035,
    "path": "../public/_nuxt/error-500.05c34f33.js"
  },
  "/_nuxt/error-500.070dde72.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-TCe48BfeVVDBYpMZAIyaR+rmom0\"",
    "mtime": "2023-05-03T07:35:37.306Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.070dde72.css"
  },
  "/_nuxt/error-component.62b2003b.js": {
    "type": "application/javascript",
    "etag": "\"5f4-ouRmChqSFmdR8v+ekBSFpeK4Pqk\"",
    "mtime": "2023-05-03T07:35:37.304Z",
    "size": 1524,
    "path": "../public/_nuxt/error-component.62b2003b.js"
  },
  "/_nuxt/gelbooru.210d4057.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"655-0ybHKZRmFTbA0GTFRG8JtXSVrFc\"",
    "mtime": "2023-05-03T07:35:37.301Z",
    "size": 1621,
    "path": "../public/_nuxt/gelbooru.210d4057.css"
  },
  "/_nuxt/gelbooru.6db329b0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f3-81GW2NNB1foDyBgYci9dGa03ldg\"",
    "mtime": "2023-05-03T07:35:37.298Z",
    "size": 755,
    "path": "../public/_nuxt/gelbooru.6db329b0.css"
  },
  "/_nuxt/gelbooru.8585ed32.js": {
    "type": "application/javascript",
    "etag": "\"dda-tdg/iVyl0zeyYgeLJejeHeOt94Q\"",
    "mtime": "2023-05-03T07:35:37.296Z",
    "size": 3546,
    "path": "../public/_nuxt/gelbooru.8585ed32.js"
  },
  "/_nuxt/gelbooru.ba824491.js": {
    "type": "application/javascript",
    "etag": "\"63c-RaUZR3kH0JVvKYQfZWtKhTi4JEw\"",
    "mtime": "2023-05-03T07:35:37.294Z",
    "size": 1596,
    "path": "../public/_nuxt/gelbooru.ba824491.js"
  },
  "/_nuxt/gelbooru.c6f53e30.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e0-hiEo07EpuzLNaZkxHORsehTJXlw\"",
    "mtime": "2023-05-03T07:35:37.292Z",
    "size": 736,
    "path": "../public/_nuxt/gelbooru.c6f53e30.css"
  },
  "/_nuxt/gelbooru.e3be0f49.js": {
    "type": "application/javascript",
    "etag": "\"dda-T89E8c5J9vzqWD4G+S9jD81n9U0\"",
    "mtime": "2023-05-03T07:35:37.290Z",
    "size": 3546,
    "path": "../public/_nuxt/gelbooru.e3be0f49.js"
  },
  "/_nuxt/gelbooru.e936e73b.js": {
    "type": "application/javascript",
    "etag": "\"510-hD4dshYDPoqaz8aVacm0XFnGIR0\"",
    "mtime": "2023-05-03T07:35:37.288Z",
    "size": 1296,
    "path": "../public/_nuxt/gelbooru.e936e73b.js"
  },
  "/_nuxt/gelbooru.f4bd9b5f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"61f-bqqJsFwDPA4KVFlRA1w+8XAmcFI\"",
    "mtime": "2023-05-03T07:35:37.286Z",
    "size": 1567,
    "path": "../public/_nuxt/gelbooru.f4bd9b5f.css"
  },
  "/_nuxt/generateImage.1dc3002b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"71f-ZOw1W4JF1T6pyUywDPOADbp+4SQ\"",
    "mtime": "2023-05-03T07:35:37.284Z",
    "size": 1823,
    "path": "../public/_nuxt/generateImage.1dc3002b.css"
  },
  "/_nuxt/generateImage.e2cc1072.js": {
    "type": "application/javascript",
    "etag": "\"230d-Uqoi9g79a6db5hAyttjsy/l4tew\"",
    "mtime": "2023-05-03T07:35:37.282Z",
    "size": 8973,
    "path": "../public/_nuxt/generateImage.e2cc1072.js"
  },
  "/_nuxt/imageAnalysis.3ab30527.js": {
    "type": "application/javascript",
    "etag": "\"10ba-djBKEsn/R7QDtFE5O9vpdOR0g4Y\"",
    "mtime": "2023-05-03T07:35:37.279Z",
    "size": 4282,
    "path": "../public/_nuxt/imageAnalysis.3ab30527.js"
  },
  "/_nuxt/imageAnalysis.4ca67cd1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"73d-sK4b2XN1Kyz5dbffq0bUpOFmikQ\"",
    "mtime": "2023-05-03T07:35:37.276Z",
    "size": 1853,
    "path": "../public/_nuxt/imageAnalysis.4ca67cd1.css"
  },
  "/_nuxt/imageAnalysis.b791bbf8.js": {
    "type": "application/javascript",
    "etag": "\"f43-j+wsgfh17G/zk5oLZpQK7/rJHI4\"",
    "mtime": "2023-05-03T07:35:37.273Z",
    "size": 3907,
    "path": "../public/_nuxt/imageAnalysis.b791bbf8.js"
  },
  "/_nuxt/imageAnalysis.d2ca7c04.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"771-FyuWiP32xqTrBZmNJSL1a5fFwSc\"",
    "mtime": "2023-05-03T07:35:37.268Z",
    "size": 1905,
    "path": "../public/_nuxt/imageAnalysis.d2ca7c04.css"
  },
  "/_nuxt/index.0222b462.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9a8-gKOL6gkv4ObyH1vs2X6pWFPBvnY\"",
    "mtime": "2023-05-03T07:35:37.264Z",
    "size": 2472,
    "path": "../public/_nuxt/index.0222b462.css"
  },
  "/_nuxt/index.0a4f546a.js": {
    "type": "application/javascript",
    "etag": "\"fc6-HvjHX4YMCfF1zzb8WBC1v6D46XU\"",
    "mtime": "2023-05-03T07:35:37.261Z",
    "size": 4038,
    "path": "../public/_nuxt/index.0a4f546a.js"
  },
  "/_nuxt/index.19d591b2.js": {
    "type": "application/javascript",
    "etag": "\"1de-CrHV62wF0Svxb+XuUa9Mfn7U9KI\"",
    "mtime": "2023-05-03T07:35:37.258Z",
    "size": 478,
    "path": "../public/_nuxt/index.19d591b2.js"
  },
  "/_nuxt/index.1a896799.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"67e-vaYJCLGilImQr5nrdMLp653aO20\"",
    "mtime": "2023-05-03T07:35:37.256Z",
    "size": 1662,
    "path": "../public/_nuxt/index.1a896799.css"
  },
  "/_nuxt/index.21ea8d5e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"14f2-N0ggV5q6WKR0asZrotWcOwhmk5I\"",
    "mtime": "2023-05-03T07:35:37.254Z",
    "size": 5362,
    "path": "../public/_nuxt/index.21ea8d5e.css"
  },
  "/_nuxt/index.269a9cef.js": {
    "type": "application/javascript",
    "etag": "\"1307-yIpPgxzhD1uhF+A64eeCDt/nUAc\"",
    "mtime": "2023-05-03T07:35:37.252Z",
    "size": 4871,
    "path": "../public/_nuxt/index.269a9cef.js"
  },
  "/_nuxt/index.2b0cf7b2.js": {
    "type": "application/javascript",
    "etag": "\"462-Aa+1bMzq/HjmFucjyJxph7eaH/A\"",
    "mtime": "2023-05-03T07:35:37.250Z",
    "size": 1122,
    "path": "../public/_nuxt/index.2b0cf7b2.js"
  },
  "/_nuxt/index.4f411a9b.js": {
    "type": "application/javascript",
    "etag": "\"167f-/3p+K8P1TCC37Xr6DBXNHDS8jBA\"",
    "mtime": "2023-05-03T07:35:37.248Z",
    "size": 5759,
    "path": "../public/_nuxt/index.4f411a9b.js"
  },
  "/_nuxt/index.58ec0441.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"caa-Ivmvj814hZXXcRyaZm7AY2PIOI8\"",
    "mtime": "2023-05-03T07:35:37.243Z",
    "size": 3242,
    "path": "../public/_nuxt/index.58ec0441.css"
  },
  "/_nuxt/index.5ff58eba.js": {
    "type": "application/javascript",
    "etag": "\"c2f-scTPJODevOPOqQcWlYCljfANreY\"",
    "mtime": "2023-05-03T07:35:37.240Z",
    "size": 3119,
    "path": "../public/_nuxt/index.5ff58eba.js"
  },
  "/_nuxt/index.61ef6c32.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"367-CcObMJKsYdf6UjdgLl9i7cZafKk\"",
    "mtime": "2023-05-03T07:35:37.235Z",
    "size": 871,
    "path": "../public/_nuxt/index.61ef6c32.css"
  },
  "/_nuxt/index.646e6c1b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a0-+Vq9WHx38LpEo1E9aGtJXy0SewU\"",
    "mtime": "2023-05-03T07:35:37.233Z",
    "size": 2208,
    "path": "../public/_nuxt/index.646e6c1b.css"
  },
  "/_nuxt/index.68e0bca5.js": {
    "type": "application/javascript",
    "etag": "\"64c-czA4jm6uC07btkgXiU6gUikGs4s\"",
    "mtime": "2023-05-03T07:35:37.231Z",
    "size": 1612,
    "path": "../public/_nuxt/index.68e0bca5.js"
  },
  "/_nuxt/index.70e5e363.js": {
    "type": "application/javascript",
    "etag": "\"f0b-HBw0eJcpPCZESFumSn85AJOhVY0\"",
    "mtime": "2023-05-03T07:35:37.229Z",
    "size": 3851,
    "path": "../public/_nuxt/index.70e5e363.js"
  },
  "/_nuxt/index.8fd102e1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"578-JW+gsPXXxxBTGs4qzcvOeV4RxZ8\"",
    "mtime": "2023-05-03T07:35:37.228Z",
    "size": 1400,
    "path": "../public/_nuxt/index.8fd102e1.css"
  },
  "/_nuxt/index.9157f4fb.js": {
    "type": "application/javascript",
    "etag": "\"58c-da+Fc570yRb/YTZk6Vfj2OOGgwk\"",
    "mtime": "2023-05-03T07:35:37.226Z",
    "size": 1420,
    "path": "../public/_nuxt/index.9157f4fb.js"
  },
  "/_nuxt/index.924a51e2.js": {
    "type": "application/javascript",
    "etag": "\"544-UtEMFrpOUOsD4QLjwqDi1cSSTOg\"",
    "mtime": "2023-05-03T07:35:37.225Z",
    "size": 1348,
    "path": "../public/_nuxt/index.924a51e2.js"
  },
  "/_nuxt/index.9e6194f9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"248-Iih9RUKXICcYzFq8hNovCoZSVtE\"",
    "mtime": "2023-05-03T07:35:37.223Z",
    "size": 584,
    "path": "../public/_nuxt/index.9e6194f9.css"
  },
  "/_nuxt/index.a6b37e48.js": {
    "type": "application/javascript",
    "etag": "\"1b01-6twkzCy1hbQwT+DnjpHe1lJHv4E\"",
    "mtime": "2023-05-03T07:35:37.221Z",
    "size": 6913,
    "path": "../public/_nuxt/index.a6b37e48.js"
  },
  "/_nuxt/index.a7e954a6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"990-E4axk4tNb1Unux3vgw9OCCo+/D8\"",
    "mtime": "2023-05-03T07:35:37.219Z",
    "size": 2448,
    "path": "../public/_nuxt/index.a7e954a6.css"
  },
  "/_nuxt/index.a87fcb7a.js": {
    "type": "application/javascript",
    "etag": "\"1c57-XaRLYguuC5blLM3cb9xbni2Olt8\"",
    "mtime": "2023-05-03T07:35:37.218Z",
    "size": 7255,
    "path": "../public/_nuxt/index.a87fcb7a.js"
  },
  "/_nuxt/index.acb2f6db.js": {
    "type": "application/javascript",
    "etag": "\"d44-l/dONIwG4OvteVZyVJExVarWE8Y\"",
    "mtime": "2023-05-03T07:35:37.216Z",
    "size": 3396,
    "path": "../public/_nuxt/index.acb2f6db.js"
  },
  "/_nuxt/index.ad956294.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"61d-/ANr9+dAe5A8jaa6WW7jVZcK2cY\"",
    "mtime": "2023-05-03T07:35:37.215Z",
    "size": 1565,
    "path": "../public/_nuxt/index.ad956294.css"
  },
  "/_nuxt/index.adaf24be.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"140d-LeKHQnY/eFmKSifubFHFiCoUgJY\"",
    "mtime": "2023-05-03T07:35:37.212Z",
    "size": 5133,
    "path": "../public/_nuxt/index.adaf24be.css"
  },
  "/_nuxt/index.b988157d.js": {
    "type": "application/javascript",
    "etag": "\"10a5-yC9sFzTtdt3p37k5r3anQ7PLztE\"",
    "mtime": "2023-05-03T07:35:37.210Z",
    "size": 4261,
    "path": "../public/_nuxt/index.b988157d.js"
  },
  "/_nuxt/index.bbaa1024.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c1-xiEvQwvVsqBODjZg7O3WTTQv2Sc\"",
    "mtime": "2023-05-03T07:35:37.208Z",
    "size": 1473,
    "path": "../public/_nuxt/index.bbaa1024.css"
  },
  "/_nuxt/index.d0d66ba7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"362-ANTXKPea3378glHXUIVK6xmMbtI\"",
    "mtime": "2023-05-03T07:35:37.207Z",
    "size": 866,
    "path": "../public/_nuxt/index.d0d66ba7.css"
  },
  "/_nuxt/index.d13ccf75.js": {
    "type": "application/javascript",
    "etag": "\"1bb0-Qmdaa3uDw2vtJEvidArOlqpyAdE\"",
    "mtime": "2023-05-03T07:35:37.205Z",
    "size": 7088,
    "path": "../public/_nuxt/index.d13ccf75.js"
  },
  "/_nuxt/index.d3b87285.js": {
    "type": "application/javascript",
    "etag": "\"b69-jA/Ghx74xOl2nlx13TBf6z+P2es\"",
    "mtime": "2023-05-03T07:35:37.204Z",
    "size": 2921,
    "path": "../public/_nuxt/index.d3b87285.js"
  },
  "/_nuxt/index.ecc7741e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5f3-MYPuho3v8rpYbM6PHknrxTNraQc\"",
    "mtime": "2023-05-03T07:35:37.202Z",
    "size": 1523,
    "path": "../public/_nuxt/index.ecc7741e.css"
  },
  "/_nuxt/index.ee90517e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b6-G80L6oZMVLDoiwYLFbfiHnyzSWU\"",
    "mtime": "2023-05-03T07:35:37.201Z",
    "size": 1462,
    "path": "../public/_nuxt/index.ee90517e.css"
  },
  "/_nuxt/index.f0da873b.js": {
    "type": "application/javascript",
    "etag": "\"a0c-orn9qQfZuIWVO8R2ivm2XL5hSNc\"",
    "mtime": "2023-05-03T07:35:37.199Z",
    "size": 2572,
    "path": "../public/_nuxt/index.f0da873b.js"
  },
  "/_nuxt/index.f2828a0b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"78d-CCJVZN7E1771rlhxYYvLr+NGlts\"",
    "mtime": "2023-05-03T07:35:37.197Z",
    "size": 1933,
    "path": "../public/_nuxt/index.f2828a0b.css"
  },
  "/_nuxt/index.f4835471.js": {
    "type": "application/javascript",
    "etag": "\"1ac6-q7vmOZ659u20gHKW7cIf+w+Vp4M\"",
    "mtime": "2023-05-03T07:35:37.195Z",
    "size": 6854,
    "path": "../public/_nuxt/index.f4835471.js"
  },
  "/_nuxt/index.fb1f257c.js": {
    "type": "application/javascript",
    "etag": "\"1005-3B41O9fHE5hoivzyXR18ApEpw0s\"",
    "mtime": "2023-05-03T07:35:37.192Z",
    "size": 4101,
    "path": "../public/_nuxt/index.fb1f257c.js"
  },
  "/_nuxt/lodash.28fbfd65.js": {
    "type": "application/javascript",
    "etag": "\"1162e-mRRzP1Xk+tMwRwo+czX+jW7NZck\"",
    "mtime": "2023-05-03T07:35:37.190Z",
    "size": 71214,
    "path": "../public/_nuxt/lodash.28fbfd65.js"
  },
  "/_nuxt/mobile.676acbe6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"276-rA5av0bw6XYS1A+0udDF5sJI6W8\"",
    "mtime": "2023-05-03T07:35:37.187Z",
    "size": 630,
    "path": "../public/_nuxt/mobile.676acbe6.css"
  },
  "/_nuxt/mobile.b342df35.js": {
    "type": "application/javascript",
    "etag": "\"199-2S1N3PwzoMHs/SZS0ME9JYOXSkg\"",
    "mtime": "2023-05-03T07:35:37.185Z",
    "size": 409,
    "path": "../public/_nuxt/mobile.b342df35.js"
  },
  "/_nuxt/nsfw.357dd2da.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"856-e8wjQ8/n7AiyuPJxhnqTrduZT7Q\"",
    "mtime": "2023-05-03T07:35:37.183Z",
    "size": 2134,
    "path": "../public/_nuxt/nsfw.357dd2da.css"
  },
  "/_nuxt/nsfw.7523d766.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6f5-2w5b9in1pqE2WnHHX2g2fLlNiAE\"",
    "mtime": "2023-05-03T07:35:37.181Z",
    "size": 1781,
    "path": "../public/_nuxt/nsfw.7523d766.css"
  },
  "/_nuxt/nsfw.771199c2.js": {
    "type": "application/javascript",
    "etag": "\"1cdb-kz2geLizBtVWltMJazm0Is6FNDo\"",
    "mtime": "2023-05-03T07:35:37.179Z",
    "size": 7387,
    "path": "../public/_nuxt/nsfw.771199c2.js"
  },
  "/_nuxt/nsfw.da3f6c62.js": {
    "type": "application/javascript",
    "etag": "\"17e8-FKk8hwgIjWaVdIlF6fA9E+mquLo\"",
    "mtime": "2023-05-03T07:35:37.177Z",
    "size": 6120,
    "path": "../public/_nuxt/nsfw.da3f6c62.js"
  },
  "/_nuxt/opportunity.6177798a.js": {
    "type": "application/javascript",
    "etag": "\"26a-uAUpakVuIRsEzDYpZRMBxB8ElG4\"",
    "mtime": "2023-05-03T07:35:37.176Z",
    "size": 618,
    "path": "../public/_nuxt/opportunity.6177798a.js"
  },
  "/_nuxt/pinia.10f5e2fc.js": {
    "type": "application/javascript",
    "etag": "\"bd65-S/0VqOXkitPwqWo5e9qj8AzUcPA\"",
    "mtime": "2023-05-03T07:35:37.174Z",
    "size": 48485,
    "path": "../public/_nuxt/pinia.10f5e2fc.js"
  },
  "/_nuxt/plus.b3af1c95.js": {
    "type": "application/javascript",
    "etag": "\"463-P9HxfnWZyk8SzDjc5nExydSRRck\"",
    "mtime": "2023-05-03T07:35:37.172Z",
    "size": 1123,
    "path": "../public/_nuxt/plus.b3af1c95.js"
  },
  "/_nuxt/promptBeautiful.49a04165.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64e-kEb3Ziq3cfvqPOmVVk/q5J6SCaI\"",
    "mtime": "2023-05-03T07:35:37.170Z",
    "size": 1614,
    "path": "../public/_nuxt/promptBeautiful.49a04165.css"
  },
  "/_nuxt/promptBeautiful.93c34c0a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"61a-fGqaTEAIrA+18DKLLoJ6yrEg8JA\"",
    "mtime": "2023-05-03T07:35:37.169Z",
    "size": 1562,
    "path": "../public/_nuxt/promptBeautiful.93c34c0a.css"
  },
  "/_nuxt/promptBeautiful.e535c29d.js": {
    "type": "application/javascript",
    "etag": "\"18f7-yIGcDj9mjcJMLRCrpQU0hyY1vZw\"",
    "mtime": "2023-05-03T07:35:37.167Z",
    "size": 6391,
    "path": "../public/_nuxt/promptBeautiful.e535c29d.js"
  },
  "/_nuxt/promptBeautiful.f75a7b8b.js": {
    "type": "application/javascript",
    "etag": "\"192f-YtA2yq3bnvig8y5tT2Y35e4m/04\"",
    "mtime": "2023-05-03T07:35:37.165Z",
    "size": 6447,
    "path": "../public/_nuxt/promptBeautiful.f75a7b8b.js"
  },
  "/_nuxt/sYw7uX71Xe.3955fd62.js": {
    "type": "application/javascript",
    "etag": "\"70-eYjpVlK/7m0RPb9rFU6e6cvDwWE\"",
    "mtime": "2023-05-03T07:35:37.163Z",
    "size": 112,
    "path": "../public/_nuxt/sYw7uX71Xe.3955fd62.js"
  },
  "/_nuxt/sYw7uX71Xe.6fa69bb4.jpeg": {
    "type": "image/jpeg",
    "etag": "\"2ba5b-mSCyUXXaLyjcwRITfcfO5cP41CQ\"",
    "mtime": "2023-05-03T07:35:37.161Z",
    "size": 178779,
    "path": "../public/_nuxt/sYw7uX71Xe.6fa69bb4.jpeg"
  },
  "/_nuxt/setting.539ac9d5.js": {
    "type": "application/javascript",
    "etag": "\"114-dgKeIVFlZ87AfONYxLzP00nUxos\"",
    "mtime": "2023-05-03T07:35:37.156Z",
    "size": 276,
    "path": "../public/_nuxt/setting.539ac9d5.js"
  },
  "/_nuxt/setting.7dc7d920.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"151e-wybaLj7f5jqQaVDO1CnS5BjBEsQ\"",
    "mtime": "2023-05-03T07:35:37.154Z",
    "size": 5406,
    "path": "../public/_nuxt/setting.7dc7d920.css"
  },
  "/_nuxt/sfw.32d5d034.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"796-xG3S8jqpJDIyWjcXjXeAufqG5Rk\"",
    "mtime": "2023-05-03T07:35:37.153Z",
    "size": 1942,
    "path": "../public/_nuxt/sfw.32d5d034.css"
  },
  "/_nuxt/sfw.7879a49e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"68a-4ecRV9w8e1zxW5Sa+M3uaNe7y+o\"",
    "mtime": "2023-05-03T07:35:37.151Z",
    "size": 1674,
    "path": "../public/_nuxt/sfw.7879a49e.css"
  },
  "/_nuxt/sfw.8b9976bb.js": {
    "type": "application/javascript",
    "etag": "\"116b-1TFxqlFmlXEWA4+2rxkxdvvg7cA\"",
    "mtime": "2023-05-03T07:35:37.149Z",
    "size": 4459,
    "path": "../public/_nuxt/sfw.8b9976bb.js"
  },
  "/_nuxt/sfw.90efbeff.js": {
    "type": "application/javascript",
    "etag": "\"16d4-zSu1CXaDEhodiEWxq9V8e7pYFRE\"",
    "mtime": "2023-05-03T07:35:37.148Z",
    "size": 5844,
    "path": "../public/_nuxt/sfw.90efbeff.js"
  },
  "/_nuxt/shop.04e85396.js": {
    "type": "application/javascript",
    "etag": "\"3456-dp1cwC6oAu7KeyeagjOdwj2N8nE\"",
    "mtime": "2023-05-03T07:35:37.145Z",
    "size": 13398,
    "path": "../public/_nuxt/shop.04e85396.js"
  },
  "/_nuxt/shopping-trolley.3dbf809c.js": {
    "type": "application/javascript",
    "etag": "\"370-/s4sq8r/GhjFxaUkgWPWiTp2hPU\"",
    "mtime": "2023-05-03T07:35:37.143Z",
    "size": 880,
    "path": "../public/_nuxt/shopping-trolley.3dbf809c.js"
  },
  "/_nuxt/sortablejs.c0b850ce.js": {
    "type": "application/javascript",
    "etag": "\"ae83-peS7D4cKSUGPxFFr7J+5I/Pu1ho\"",
    "mtime": "2023-05-03T07:35:37.140Z",
    "size": 44675,
    "path": "../public/_nuxt/sortablejs.c0b850ce.js"
  },
  "/_nuxt/store.c5eaf696.js": {
    "type": "application/javascript",
    "etag": "\"31fc-hi4KaiP/g0fl4rYHHPCs22xmfpE\"",
    "mtime": "2023-05-03T07:35:37.138Z",
    "size": 12796,
    "path": "../public/_nuxt/store.c5eaf696.js"
  },
  "/_nuxt/upload-filled.29a3af13.js": {
    "type": "application/javascript",
    "etag": "\"241-o3q/YguOI0iLn8C3mGQXsJbrY2U\"",
    "mtime": "2023-05-03T07:35:37.135Z",
    "size": 577,
    "path": "../public/_nuxt/upload-filled.29a3af13.js"
  },
  "/_nuxt/utils.f7361be0.js": {
    "type": "application/javascript",
    "etag": "\"143-RY+Du6a7ZITGaR7WmCYcTQ+ngXA\"",
    "mtime": "2023-05-03T07:35:37.132Z",
    "size": 323,
    "path": "../public/_nuxt/utils.f7361be0.js"
  },
  "/_nuxt/uuid.963791a5.js": {
    "type": "application/javascript",
    "etag": "\"1e17-w4ZqKMcepJTctQQRXCkcD2SS594\"",
    "mtime": "2023-05-03T07:35:37.130Z",
    "size": 7703,
    "path": "../public/_nuxt/uuid.963791a5.js"
  },
  "/_nuxt/vuedraggable.712c55a1.js": {
    "type": "application/javascript",
    "etag": "\"c524-0+7jGDUSS+7tD47cPzFwWET/pe4\"",
    "mtime": "2023-05-03T07:35:37.125Z",
    "size": 50468,
    "path": "../public/_nuxt/vuedraggable.712c55a1.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _9Y7Ukg = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx;
  const ipxOptions = {
    ...opts || {},
    dir: fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const _lazy_nbdSTU = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_nbdSTU, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _9Y7Ukg, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_nbdSTU, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
