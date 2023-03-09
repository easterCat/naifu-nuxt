globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';

const _runtimeConfig = {"app":{"baseURL":"/naifu","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=2592000, immutable"}}}},"public":{"API_DATA_FROM":"database","FLASK_BASE_API":"https://www.naifuai.top/stable/api","GELBOORU_TOKEN":"b8d9e7d1fa1dcc3e5116760c093be229","IP_ADDRESS":"https://www.naifuai.top"},"ipx":{"dir":"","maxAge":"","domains":[],"sharp":{},"alias":{}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
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
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
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

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
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
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
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
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
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
    event.node.res.setHeader("Content-Type", "application/json");
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
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-3y++sUAKzaCQmjLBz2v0kvESHgc\"",
    "mtime": "2023-03-09T08:00:34.703Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/dute_favicon_32x32.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-8oCXDVT9HoWT374Zl0C8RR6n29g\"",
    "mtime": "2023-03-09T08:00:34.701Z",
    "size": 4286,
    "path": "../public/dute_favicon_32x32.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"50-69DQBog8W6e8ZlGS0bRz1eURY9A\"",
    "mtime": "2023-03-09T08:00:34.700Z",
    "size": 80,
    "path": "../public/robots.txt"
  },
  "/worker.js": {
    "type": "application/javascript",
    "etag": "\"576-2zXlF0n7n2o2/pad0eK9vHB37zY\"",
    "mtime": "2023-03-09T08:00:34.698Z",
    "size": 1398,
    "path": "../public/worker.js"
  },
  "/_nuxt/01.bfcaf521.webp": {
    "type": "image/webp",
    "etag": "\"1f4f8-3S7JGluLSJZK6xC8cOfp2VXckkw\"",
    "mtime": "2023-03-09T08:00:34.695Z",
    "size": 128248,
    "path": "../public/_nuxt/01.bfcaf521.webp"
  },
  "/_nuxt/02.dedaa15f.webp": {
    "type": "image/webp",
    "etag": "\"27098-f0Cdu0eLWVZX+rbvAjUMpM1jIzc\"",
    "mtime": "2023-03-09T08:00:34.693Z",
    "size": 159896,
    "path": "../public/_nuxt/02.dedaa15f.webp"
  },
  "/_nuxt/03.871e52e8.webp": {
    "type": "image/webp",
    "etag": "\"25ef0-2K/HI+17WfR7tMdfDoiWHiuBlgw\"",
    "mtime": "2023-03-09T08:00:34.690Z",
    "size": 155376,
    "path": "../public/_nuxt/03.871e52e8.webp"
  },
  "/_nuxt/04.dc12eeac.webp": {
    "type": "image/webp",
    "etag": "\"2f992-1Lrkz+KkNIjqcgoM/c+N9xMioy4\"",
    "mtime": "2023-03-09T08:00:34.687Z",
    "size": 194962,
    "path": "../public/_nuxt/04.dc12eeac.webp"
  },
  "/_nuxt/AnimationButton.7dc7d920.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"151e-wybaLj7f5jqQaVDO1CnS5BjBEsQ\"",
    "mtime": "2023-03-09T08:00:34.683Z",
    "size": 5406,
    "path": "../public/_nuxt/AnimationButton.7dc7d920.css"
  },
  "/_nuxt/AppAnimate.vue.2251f2f5.js": {
    "type": "application/javascript",
    "etag": "\"1f9-igt2GSmULtjIOR+4jUx5rrTgK1E\"",
    "mtime": "2023-03-09T08:00:34.682Z",
    "size": 505,
    "path": "../public/_nuxt/AppAnimate.vue.2251f2f5.js"
  },
  "/_nuxt/AppBanner.2420fd0e.js": {
    "type": "application/javascript",
    "etag": "\"53c-ZlQtiF9Untd1uiTjN1BEOgcB4vo\"",
    "mtime": "2023-03-09T08:00:34.681Z",
    "size": 1340,
    "path": "../public/_nuxt/AppBanner.2420fd0e.js"
  },
  "/_nuxt/AppBanner.bfb45a60.js": {
    "type": "application/javascript",
    "etag": "\"55e-KQVb52fjBqcFTNlmKFqHk1yJ054\"",
    "mtime": "2023-03-09T08:00:34.680Z",
    "size": 1374,
    "path": "../public/_nuxt/AppBanner.bfb45a60.js"
  },
  "/_nuxt/AppBanner.ea699a68.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"680-QjAfqqSm3/CjJOq2IUglD+46re8\"",
    "mtime": "2023-03-09T08:00:34.679Z",
    "size": 1664,
    "path": "../public/_nuxt/AppBanner.ea699a68.css"
  },
  "/_nuxt/AppFooter.a3f85cf2.js": {
    "type": "application/javascript",
    "etag": "\"1cd-44TSLpbT4Yjh8kBoHv1qtCUhB6I\"",
    "mtime": "2023-03-09T08:00:34.678Z",
    "size": 461,
    "path": "../public/_nuxt/AppFooter.a3f85cf2.js"
  },
  "/_nuxt/AppFooter.b62ad9f7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"537-wUO+VQnBoT5H0bbi866McK1/kzM\"",
    "mtime": "2023-03-09T08:00:34.677Z",
    "size": 1335,
    "path": "../public/_nuxt/AppFooter.b62ad9f7.css"
  },
  "/_nuxt/AppHeader.42ada422.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29d1-1BRdmnM2tlEm8GMNJYKBN5EgGNo\"",
    "mtime": "2023-03-09T08:00:34.675Z",
    "size": 10705,
    "path": "../public/_nuxt/AppHeader.42ada422.css"
  },
  "/_nuxt/AppHeader.ba8de875.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e43-IKCoKiQdd8gzWRVYaRRFGZVD7w0\"",
    "mtime": "2023-03-09T08:00:34.673Z",
    "size": 32323,
    "path": "../public/_nuxt/AppHeader.ba8de875.css"
  },
  "/_nuxt/AppHeader.c3e6b539.js": {
    "type": "application/javascript",
    "etag": "\"1e5b-LQsFufQzwHE+L1HTaKLruhwNCvg\"",
    "mtime": "2023-03-09T08:00:34.669Z",
    "size": 7771,
    "path": "../public/_nuxt/AppHeader.c3e6b539.js"
  },
  "/_nuxt/AppHeader.fb0835f3.js": {
    "type": "application/javascript",
    "etag": "\"158c-1hzNzwb/CIeEMkUCOSNPyfA75wk\"",
    "mtime": "2023-03-09T08:00:34.665Z",
    "size": 5516,
    "path": "../public/_nuxt/AppHeader.fb0835f3.js"
  },
  "/_nuxt/AppHeader.vue.3adb3901.js": {
    "type": "application/javascript",
    "etag": "\"1dd0-6lMiO49RHIz0ZonAWVNCNa4Djh0\"",
    "mtime": "2023-03-09T08:00:34.663Z",
    "size": 7632,
    "path": "../public/_nuxt/AppHeader.vue.3adb3901.js"
  },
  "/_nuxt/AreaTitle.53015a37.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ac-AbQ+Ai083w+mdGv2o+REEOsblwQ\"",
    "mtime": "2023-03-09T08:00:34.662Z",
    "size": 684,
    "path": "../public/_nuxt/AreaTitle.53015a37.css"
  },
  "/_nuxt/AreaTitle.7541e96f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b7-lx+vixW11cfCUS/CSsYua+B0J4Q\"",
    "mtime": "2023-03-09T08:00:34.661Z",
    "size": 695,
    "path": "../public/_nuxt/AreaTitle.7541e96f.css"
  },
  "/_nuxt/AreaTitle.b3d1887b.js": {
    "type": "application/javascript",
    "etag": "\"196-5HucEuxzPCe/neAkmq0RklyfkGA\"",
    "mtime": "2023-03-09T08:00:34.659Z",
    "size": 406,
    "path": "../public/_nuxt/AreaTitle.b3d1887b.js"
  },
  "/_nuxt/AreaTitle.c72836fd.js": {
    "type": "application/javascript",
    "etag": "\"196-iN+qdB9Z1RSx868c06H672aMfcY\"",
    "mtime": "2023-03-09T08:00:34.658Z",
    "size": 406,
    "path": "../public/_nuxt/AreaTitle.c72836fd.js"
  },
  "/_nuxt/FixMenu.7359bebe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"35f-nUFifjtOqcyOZUDEWPKJ56IvAHw\"",
    "mtime": "2023-03-09T08:00:34.657Z",
    "size": 863,
    "path": "../public/_nuxt/FixMenu.7359bebe.css"
  },
  "/_nuxt/Icon.3d534480.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-xd4VR5rzTGiAbFM5VcKNdgvx+L8\"",
    "mtime": "2023-03-09T08:00:34.656Z",
    "size": 67,
    "path": "../public/_nuxt/Icon.3d534480.css"
  },
  "/_nuxt/Icon.a9c15d63.js": {
    "type": "application/javascript",
    "etag": "\"525b-16nceo3kXqNIPmwFqA3CafdgfXM\"",
    "mtime": "2023-03-09T08:00:34.655Z",
    "size": 21083,
    "path": "../public/_nuxt/Icon.a9c15d63.js"
  },
  "/_nuxt/IconCSS.24c50a2a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-TjeccAsRNeBlN9jNxjRwfXa9XZU\"",
    "mtime": "2023-03-09T08:00:34.653Z",
    "size": 258,
    "path": "../public/_nuxt/IconCSS.24c50a2a.css"
  },
  "/_nuxt/IconCSS.5c08f265.js": {
    "type": "application/javascript",
    "etag": "\"41d-czIMBRH3/GNtexQnhoBg4ZuDbkg\"",
    "mtime": "2023-03-09T08:00:34.652Z",
    "size": 1053,
    "path": "../public/_nuxt/IconCSS.5c08f265.js"
  },
  "/_nuxt/ImageFlur.17c4dbc9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f2-CFMZoLELDHFJEbw4DAnIZ/r50ho\"",
    "mtime": "2023-03-09T08:00:34.650Z",
    "size": 754,
    "path": "../public/_nuxt/ImageFlur.17c4dbc9.css"
  },
  "/_nuxt/ImageFlur.3e4c6be0.js": {
    "type": "application/javascript",
    "etag": "\"43c-elFTUB2mLv5Lx0I6nppkMtv9Qtc\"",
    "mtime": "2023-03-09T08:00:34.649Z",
    "size": 1084,
    "path": "../public/_nuxt/ImageFlur.3e4c6be0.js"
  },
  "/_nuxt/LinkList.0c23d73f.js": {
    "type": "application/javascript",
    "etag": "\"1e86-2/gHX3clDGQinJhJeLu87xZ4xZ4\"",
    "mtime": "2023-03-09T08:00:34.648Z",
    "size": 7814,
    "path": "../public/_nuxt/LinkList.0c23d73f.js"
  },
  "/_nuxt/LinkList.fba8519a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f6e-fG4USQW3BtNN0cUdv38L3eCFn6w\"",
    "mtime": "2023-03-09T08:00:34.647Z",
    "size": 3950,
    "path": "../public/_nuxt/LinkList.fba8519a.css"
  },
  "/_nuxt/LinkList.vue.9bd818f5.js": {
    "type": "application/javascript",
    "etag": "\"e5-kcypvSyXbb7CJfABl6us8CN7oX4\"",
    "mtime": "2023-03-09T08:00:34.646Z",
    "size": 229,
    "path": "../public/_nuxt/LinkList.vue.9bd818f5.js"
  },
  "/_nuxt/TemplateDetail.50c52758.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a20-oYBxxN+Ku8rmUA9zqfvdX+4TIow\"",
    "mtime": "2023-03-09T08:00:34.645Z",
    "size": 2592,
    "path": "../public/_nuxt/TemplateDetail.50c52758.css"
  },
  "/_nuxt/TemplateDetail.951b5083.js": {
    "type": "application/javascript",
    "etag": "\"1273-J7NBungB2sOa/di1BRpDnUNmYEo\"",
    "mtime": "2023-03-09T08:00:34.644Z",
    "size": 4723,
    "path": "../public/_nuxt/TemplateDetail.951b5083.js"
  },
  "/_nuxt/TemplateDetail.d73f6386.js": {
    "type": "application/javascript",
    "etag": "\"13d9-DWQkEMa2K+J7fOCAf5cbCbJb+v0\"",
    "mtime": "2023-03-09T08:00:34.642Z",
    "size": 5081,
    "path": "../public/_nuxt/TemplateDetail.d73f6386.js"
  },
  "/_nuxt/arrow-left-bold.de457792.js": {
    "type": "application/javascript",
    "etag": "\"49f-gAT6Vqc7ovWRrq5nLQy1l94fboc\"",
    "mtime": "2023-03-09T08:00:34.641Z",
    "size": 1183,
    "path": "../public/_nuxt/arrow-left-bold.de457792.js"
  },
  "/_nuxt/check.4e3d9170.js": {
    "type": "application/javascript",
    "etag": "\"179-Gl3M4gJB166GOGS7poIJky3rXL8\"",
    "mtime": "2023-03-09T08:00:34.639Z",
    "size": 377,
    "path": "../public/_nuxt/check.4e3d9170.js"
  },
  "/_nuxt/chitu.1bb18c98.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"681-0bts9+uKfmyEANTI9aSSYS/jKK8\"",
    "mtime": "2023-03-09T08:00:34.638Z",
    "size": 1665,
    "path": "../public/_nuxt/chitu.1bb18c98.css"
  },
  "/_nuxt/chitu.4df6c2ca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6af-nYfrdX+HlvxRi2UQalVtYLH+Zlg\"",
    "mtime": "2023-03-09T08:00:34.636Z",
    "size": 1711,
    "path": "../public/_nuxt/chitu.4df6c2ca.css"
  },
  "/_nuxt/chitu.5bd94bb3.js": {
    "type": "application/javascript",
    "etag": "\"22df-9hQ0D8rQyntuxfR9dGRUGMnmjEo\"",
    "mtime": "2023-03-09T08:00:34.635Z",
    "size": 8927,
    "path": "../public/_nuxt/chitu.5bd94bb3.js"
  },
  "/_nuxt/chitu.7bf1fd37.js": {
    "type": "application/javascript",
    "etag": "\"21f8-Fcf4iIiHWPAa38R+JE+dEqT+Ilc\"",
    "mtime": "2023-03-09T08:00:34.634Z",
    "size": 8696,
    "path": "../public/_nuxt/chitu.7bf1fd37.js"
  },
  "/_nuxt/client-only.54dd065e.js": {
    "type": "application/javascript",
    "etag": "\"1de-hwCGlnH0xXJzgMCp1zODXGBYwPs\"",
    "mtime": "2023-03-09T08:00:34.633Z",
    "size": 478,
    "path": "../public/_nuxt/client-only.54dd065e.js"
  },
  "/_nuxt/copy-document.95383293.js": {
    "type": "application/javascript",
    "etag": "\"29e-GivIgqh+eB5VMNvY4lK8uvwEnbo\"",
    "mtime": "2023-03-09T08:00:34.632Z",
    "size": 670,
    "path": "../public/_nuxt/copy-document.95383293.js"
  },
  "/_nuxt/dayjs.8d3b77e9.js": {
    "type": "application/javascript",
    "etag": "\"3abb-+CT/hPRfuceoXIwB7FTvaGjLE7A\"",
    "mtime": "2023-03-09T08:00:34.630Z",
    "size": 15035,
    "path": "../public/_nuxt/dayjs.8d3b77e9.js"
  },
  "/_nuxt/default.afbe4dbf.js": {
    "type": "application/javascript",
    "etag": "\"8f2-pbE+ZhHPWwcZY8vOZEWYcK9vn28\"",
    "mtime": "2023-03-09T08:00:34.629Z",
    "size": 2290,
    "path": "../public/_nuxt/default.afbe4dbf.js"
  },
  "/_nuxt/default.b7d8577b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"272-6fejxovWY8mOVKDc+n8SUNn6e30\"",
    "mtime": "2023-03-09T08:00:34.628Z",
    "size": 626,
    "path": "../public/_nuxt/default.b7d8577b.css"
  },
  "/_nuxt/delete.9ec69f6d.js": {
    "type": "application/javascript",
    "etag": "\"25d-SgwxkHMeD+/Iko52JBtRHP4gd7M\"",
    "mtime": "2023-03-09T08:00:34.627Z",
    "size": 605,
    "path": "../public/_nuxt/delete.9ec69f6d.js"
  },
  "/_nuxt/document-copy.4e0f3946.js": {
    "type": "application/javascript",
    "etag": "\"216-5OLKpuLJrdtL5zWvYoAt/PYJqpA\"",
    "mtime": "2023-03-09T08:00:34.626Z",
    "size": 534,
    "path": "../public/_nuxt/document-copy.4e0f3946.js"
  },
  "/_nuxt/eHentai.62357595.js": {
    "type": "application/javascript",
    "etag": "\"ae5-jF0jK0lcWY/TV+ghRPvgDqKPuzY\"",
    "mtime": "2023-03-09T08:00:34.625Z",
    "size": 2789,
    "path": "../public/_nuxt/eHentai.62357595.js"
  },
  "/_nuxt/eHentai.b616aa12.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"492-vSNDSEdu3kp3/zG1Q9IH/Mm86GE\"",
    "mtime": "2023-03-09T08:00:34.623Z",
    "size": 1170,
    "path": "../public/_nuxt/eHentai.b616aa12.css"
  },
  "/_nuxt/eHentai.d1e6f821.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"468-r4SQ/fVNJIO7nWMZAHBxeUjIyrk\"",
    "mtime": "2023-03-09T08:00:34.621Z",
    "size": 1128,
    "path": "../public/_nuxt/eHentai.d1e6f821.css"
  },
  "/_nuxt/eHentai.d576e8b2.js": {
    "type": "application/javascript",
    "etag": "\"ad0-5wDV7ZPAG6R13FN1Vx+GU8pUHHY\"",
    "mtime": "2023-03-09T08:00:34.620Z",
    "size": 2768,
    "path": "../public/_nuxt/eHentai.d576e8b2.js"
  },
  "/_nuxt/eHentaiMore.92bd9995.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ec-i0RQt1wg9CK+i21ezytG0R0nqhA\"",
    "mtime": "2023-03-09T08:00:34.619Z",
    "size": 1260,
    "path": "../public/_nuxt/eHentaiMore.92bd9995.css"
  },
  "/_nuxt/eHentaiMore.a1028c5b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"507-sFWMk50lPIWh/x8pNjpxHyGYgAw\"",
    "mtime": "2023-03-09T08:00:34.618Z",
    "size": 1287,
    "path": "../public/_nuxt/eHentaiMore.a1028c5b.css"
  },
  "/_nuxt/eHentaiMore.cdf29eae.js": {
    "type": "application/javascript",
    "etag": "\"1580-1O+Y6pGMTl/w2PUI89ITJiNpehg\"",
    "mtime": "2023-03-09T08:00:34.616Z",
    "size": 5504,
    "path": "../public/_nuxt/eHentaiMore.cdf29eae.js"
  },
  "/_nuxt/eHentaiMore.f722587c.js": {
    "type": "application/javascript",
    "etag": "\"1595-Z8dfZhBZqSXJW/E5ukvg6lEo2Ao\"",
    "mtime": "2023-03-09T08:00:34.615Z",
    "size": 5525,
    "path": "../public/_nuxt/eHentaiMore.f722587c.js"
  },
  "/_nuxt/eh.23f83c8e.js": {
    "type": "application/javascript",
    "etag": "\"572-VClh/Ea1Wk2RFS5Nw/OPXRFuK1c\"",
    "mtime": "2023-03-09T08:00:34.614Z",
    "size": 1394,
    "path": "../public/_nuxt/eh.23f83c8e.js"
  },
  "/_nuxt/eh.5b1dba67.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"613-T7gp+39jAl9SQUvQRJ6CX7b/+DY\"",
    "mtime": "2023-03-09T08:00:34.612Z",
    "size": 1555,
    "path": "../public/_nuxt/eh.5b1dba67.css"
  },
  "/_nuxt/eh.71ab7383.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"649-G0ByF80dQ3bKYOey6BKo8jDs3NI\"",
    "mtime": "2023-03-09T08:00:34.611Z",
    "size": 1609,
    "path": "../public/_nuxt/eh.71ab7383.css"
  },
  "/_nuxt/eh.e72ac992.js": {
    "type": "application/javascript",
    "etag": "\"6aa-pDxEEBW2WK6x2j75MInpVrTJDUo\"",
    "mtime": "2023-03-09T08:00:34.608Z",
    "size": 1706,
    "path": "../public/_nuxt/eh.e72ac992.js"
  },
  "/_nuxt/element-plus.2b688509.js": {
    "type": "application/javascript",
    "etag": "\"15ea62-yFQZhc7o6Xwk+eILun8UXm7S4k8\"",
    "mtime": "2023-03-09T08:00:34.606Z",
    "size": 1436258,
    "path": "../public/_nuxt/element-plus.2b688509.js"
  },
  "/_nuxt/element-plus.6dccdfeb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"21116-OrkSp5JTMYaW4oDV3T9gno9b/ls\"",
    "mtime": "2023-03-09T08:00:34.597Z",
    "size": 135446,
    "path": "../public/_nuxt/element-plus.6dccdfeb.css"
  },
  "/_nuxt/entry.acd383a2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6b02c-pNSBh45KFt0FyiBwy7Mj5TSrISk\"",
    "mtime": "2023-03-09T08:00:34.593Z",
    "size": 438316,
    "path": "../public/_nuxt/entry.acd383a2.css"
  },
  "/_nuxt/entry.d6d52af3.js": {
    "type": "application/javascript",
    "etag": "\"2045f-YfPK/5/3RY5/POzAlfCjGLOYlGM\"",
    "mtime": "2023-03-09T08:00:34.585Z",
    "size": 132191,
    "path": "../public/_nuxt/entry.d6d52af3.js"
  },
  "/_nuxt/error-404.1474f64e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-HViiyiVJMGPK8i0/uY2HTTvRXlw\"",
    "mtime": "2023-03-09T08:00:34.583Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.1474f64e.css"
  },
  "/_nuxt/error-404.378155b5.js": {
    "type": "application/javascript",
    "etag": "\"94c-agG+S5pKfEipL30Vprw83kUCOWE\"",
    "mtime": "2023-03-09T08:00:34.582Z",
    "size": 2380,
    "path": "../public/_nuxt/error-404.378155b5.js"
  },
  "/_nuxt/error-500.070dde72.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-TCe48BfeVVDBYpMZAIyaR+rmom0\"",
    "mtime": "2023-03-09T08:00:34.581Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.070dde72.css"
  },
  "/_nuxt/error-500.27f9e42f.js": {
    "type": "application/javascript",
    "etag": "\"7f3-7vkP8PS899ZpHawXLXiJ3iYGdQ0\"",
    "mtime": "2023-03-09T08:00:34.580Z",
    "size": 2035,
    "path": "../public/_nuxt/error-500.27f9e42f.js"
  },
  "/_nuxt/error-component.cde715d9.js": {
    "type": "application/javascript",
    "etag": "\"5f4-e0IQ/zUp8L5EOh4kLTYRaC0BDao\"",
    "mtime": "2023-03-09T08:00:34.579Z",
    "size": 1524,
    "path": "../public/_nuxt/error-component.cde715d9.js"
  },
  "/_nuxt/gelbooru.19fe1ccc.js": {
    "type": "application/javascript",
    "etag": "\"dda-HhfEWxGdOyxlfCrPiHzcV8j8nno\"",
    "mtime": "2023-03-09T08:00:34.578Z",
    "size": 3546,
    "path": "../public/_nuxt/gelbooru.19fe1ccc.js"
  },
  "/_nuxt/gelbooru.210d4057.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"655-0ybHKZRmFTbA0GTFRG8JtXSVrFc\"",
    "mtime": "2023-03-09T08:00:34.577Z",
    "size": 1621,
    "path": "../public/_nuxt/gelbooru.210d4057.css"
  },
  "/_nuxt/gelbooru.5e414510.js": {
    "type": "application/javascript",
    "etag": "\"dda-8gEv5xeo6ybixOwk1RBrSxO1/Hw\"",
    "mtime": "2023-03-09T08:00:34.576Z",
    "size": 3546,
    "path": "../public/_nuxt/gelbooru.5e414510.js"
  },
  "/_nuxt/gelbooru.6db329b0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f3-81GW2NNB1foDyBgYci9dGa03ldg\"",
    "mtime": "2023-03-09T08:00:34.575Z",
    "size": 755,
    "path": "../public/_nuxt/gelbooru.6db329b0.css"
  },
  "/_nuxt/gelbooru.b4da17d0.js": {
    "type": "application/javascript",
    "etag": "\"648-sho9+iaCJnqMnRgOE2yb/RdHIsY\"",
    "mtime": "2023-03-09T08:00:34.574Z",
    "size": 1608,
    "path": "../public/_nuxt/gelbooru.b4da17d0.js"
  },
  "/_nuxt/gelbooru.c6f53e30.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e0-hiEo07EpuzLNaZkxHORsehTJXlw\"",
    "mtime": "2023-03-09T08:00:34.573Z",
    "size": 736,
    "path": "../public/_nuxt/gelbooru.c6f53e30.css"
  },
  "/_nuxt/gelbooru.e1e7d579.js": {
    "type": "application/javascript",
    "etag": "\"510-YsKvFRaG1rhmvjkYe1loTSgF7Oc\"",
    "mtime": "2023-03-09T08:00:34.571Z",
    "size": 1296,
    "path": "../public/_nuxt/gelbooru.e1e7d579.js"
  },
  "/_nuxt/gelbooru.f4bd9b5f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"61f-bqqJsFwDPA4KVFlRA1w+8XAmcFI\"",
    "mtime": "2023-03-09T08:00:34.570Z",
    "size": 1567,
    "path": "../public/_nuxt/gelbooru.f4bd9b5f.css"
  },
  "/_nuxt/generateImage.1dc3002b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"71f-ZOw1W4JF1T6pyUywDPOADbp+4SQ\"",
    "mtime": "2023-03-09T08:00:34.569Z",
    "size": 1823,
    "path": "../public/_nuxt/generateImage.1dc3002b.css"
  },
  "/_nuxt/generateImage.9f5e1339.js": {
    "type": "application/javascript",
    "etag": "\"230d-ZkT1usykB9O28N/dxkmOO0Gon0U\"",
    "mtime": "2023-03-09T08:00:34.567Z",
    "size": 8973,
    "path": "../public/_nuxt/generateImage.9f5e1339.js"
  },
  "/_nuxt/generateImage.f60f0719.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6cf-i51S8OuqlbbQKAs4M3nwzlp9CCs\"",
    "mtime": "2023-03-09T08:00:34.566Z",
    "size": 1743,
    "path": "../public/_nuxt/generateImage.f60f0719.css"
  },
  "/_nuxt/generateImage.f8672b31.js": {
    "type": "application/javascript",
    "etag": "\"27b7-LoceZOlM3/ja7iqvdvc+6AgSzyE\"",
    "mtime": "2023-03-09T08:00:34.565Z",
    "size": 10167,
    "path": "../public/_nuxt/generateImage.f8672b31.js"
  },
  "/_nuxt/imageAnalysis.4ca67cd1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"73d-sK4b2XN1Kyz5dbffq0bUpOFmikQ\"",
    "mtime": "2023-03-09T08:00:34.564Z",
    "size": 1853,
    "path": "../public/_nuxt/imageAnalysis.4ca67cd1.css"
  },
  "/_nuxt/imageAnalysis.55940091.js": {
    "type": "application/javascript",
    "etag": "\"10ba-QPESCFiNHXpGMw08nQgMSXoqtGI\"",
    "mtime": "2023-03-09T08:00:34.563Z",
    "size": 4282,
    "path": "../public/_nuxt/imageAnalysis.55940091.js"
  },
  "/_nuxt/imageAnalysis.78c029bd.js": {
    "type": "application/javascript",
    "etag": "\"f3e-m4KOVY+47YAxUFHwTAUBfByMBoc\"",
    "mtime": "2023-03-09T08:00:34.562Z",
    "size": 3902,
    "path": "../public/_nuxt/imageAnalysis.78c029bd.js"
  },
  "/_nuxt/imageAnalysis.d2ca7c04.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"771-FyuWiP32xqTrBZmNJSL1a5fFwSc\"",
    "mtime": "2023-03-09T08:00:34.561Z",
    "size": 1905,
    "path": "../public/_nuxt/imageAnalysis.d2ca7c04.css"
  },
  "/_nuxt/index.0222b462.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9a8-gKOL6gkv4ObyH1vs2X6pWFPBvnY\"",
    "mtime": "2023-03-09T08:00:34.560Z",
    "size": 2472,
    "path": "../public/_nuxt/index.0222b462.css"
  },
  "/_nuxt/index.0a132317.js": {
    "type": "application/javascript",
    "etag": "\"a0c-QKCiXZ9e7AgOIjY+U4G3PtkAGRw\"",
    "mtime": "2023-03-09T08:00:34.558Z",
    "size": 2572,
    "path": "../public/_nuxt/index.0a132317.js"
  },
  "/_nuxt/index.20ca9b8c.js": {
    "type": "application/javascript",
    "etag": "\"1ac6-LVqCjJ842bHnzuq6qhgl15RnUjU\"",
    "mtime": "2023-03-09T08:00:34.557Z",
    "size": 6854,
    "path": "../public/_nuxt/index.20ca9b8c.js"
  },
  "/_nuxt/index.21ea8d5e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"14f2-N0ggV5q6WKR0asZrotWcOwhmk5I\"",
    "mtime": "2023-03-09T08:00:34.556Z",
    "size": 5362,
    "path": "../public/_nuxt/index.21ea8d5e.css"
  },
  "/_nuxt/index.223a325a.js": {
    "type": "application/javascript",
    "etag": "\"1c57-uf7QGZ/KeyVOxaF7p/MHi2H1pJg\"",
    "mtime": "2023-03-09T08:00:34.554Z",
    "size": 7255,
    "path": "../public/_nuxt/index.223a325a.js"
  },
  "/_nuxt/index.284da233.js": {
    "type": "application/javascript",
    "etag": "\"69e-hJYGFX1/bTXY7jUfJLzlFUdqQMM\"",
    "mtime": "2023-03-09T08:00:34.552Z",
    "size": 1694,
    "path": "../public/_nuxt/index.284da233.js"
  },
  "/_nuxt/index.2ba55263.js": {
    "type": "application/javascript",
    "etag": "\"1331-xbtvOIf94qFFk2tOUYqC9CEIECA\"",
    "mtime": "2023-03-09T08:00:34.550Z",
    "size": 4913,
    "path": "../public/_nuxt/index.2ba55263.js"
  },
  "/_nuxt/index.2fbebf4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"67e-DPs5orKdHeLQrJTb7/gRETda1bs\"",
    "mtime": "2023-03-09T08:00:34.550Z",
    "size": 1662,
    "path": "../public/_nuxt/index.2fbebf4d.css"
  },
  "/_nuxt/index.58ec0441.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"caa-Ivmvj814hZXXcRyaZm7AY2PIOI8\"",
    "mtime": "2023-03-09T08:00:34.549Z",
    "size": 3242,
    "path": "../public/_nuxt/index.58ec0441.css"
  },
  "/_nuxt/index.5f72405e.js": {
    "type": "application/javascript",
    "etag": "\"c2f-uSwExgU0peKt9n1rRKq1gQL5Mt8\"",
    "mtime": "2023-03-09T08:00:34.548Z",
    "size": 3119,
    "path": "../public/_nuxt/index.5f72405e.js"
  },
  "/_nuxt/index.61ef6c32.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"367-CcObMJKsYdf6UjdgLl9i7cZafKk\"",
    "mtime": "2023-03-09T08:00:34.547Z",
    "size": 871,
    "path": "../public/_nuxt/index.61ef6c32.css"
  },
  "/_nuxt/index.646e6c1b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a0-+Vq9WHx38LpEo1E9aGtJXy0SewU\"",
    "mtime": "2023-03-09T08:00:34.545Z",
    "size": 2208,
    "path": "../public/_nuxt/index.646e6c1b.css"
  },
  "/_nuxt/index.73f48779.js": {
    "type": "application/javascript",
    "etag": "\"462-MuPyAKb9e0ay77LdEjkOqNGPWs0\"",
    "mtime": "2023-03-09T08:00:34.544Z",
    "size": 1122,
    "path": "../public/_nuxt/index.73f48779.js"
  },
  "/_nuxt/index.7793375e.js": {
    "type": "application/javascript",
    "etag": "\"f0b-K10xwZ+w3+v5nKXYctgH/twjvHE\"",
    "mtime": "2023-03-09T08:00:34.543Z",
    "size": 3851,
    "path": "../public/_nuxt/index.7793375e.js"
  },
  "/_nuxt/index.8744c311.js": {
    "type": "application/javascript",
    "etag": "\"f4f-g+H45h7judx0Sk/mtQ4P9Tonar0\"",
    "mtime": "2023-03-09T08:00:34.542Z",
    "size": 3919,
    "path": "../public/_nuxt/index.8744c311.js"
  },
  "/_nuxt/index.8fd102e1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"578-JW+gsPXXxxBTGs4qzcvOeV4RxZ8\"",
    "mtime": "2023-03-09T08:00:34.541Z",
    "size": 1400,
    "path": "../public/_nuxt/index.8fd102e1.css"
  },
  "/_nuxt/index.96a3cfab.js": {
    "type": "application/javascript",
    "etag": "\"d50-MkwBcHt1NKb6+nU1XM1k4mSgRuQ\"",
    "mtime": "2023-03-09T08:00:34.539Z",
    "size": 3408,
    "path": "../public/_nuxt/index.96a3cfab.js"
  },
  "/_nuxt/index.9b5b6bd6.js": {
    "type": "application/javascript",
    "etag": "\"1005-8jzoOubB+/ZK1tXTMKgDv/p6kbo\"",
    "mtime": "2023-03-09T08:00:34.537Z",
    "size": 4101,
    "path": "../public/_nuxt/index.9b5b6bd6.js"
  },
  "/_nuxt/index.9ce50181.js": {
    "type": "application/javascript",
    "etag": "\"1de-lChO+PbzUKYGhiQ0H7OM6h+XvkQ\"",
    "mtime": "2023-03-09T08:00:34.536Z",
    "size": 478,
    "path": "../public/_nuxt/index.9ce50181.js"
  },
  "/_nuxt/index.9e6194f9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"248-Iih9RUKXICcYzFq8hNovCoZSVtE\"",
    "mtime": "2023-03-09T08:00:34.535Z",
    "size": 584,
    "path": "../public/_nuxt/index.9e6194f9.css"
  },
  "/_nuxt/index.a7e954a6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"990-E4axk4tNb1Unux3vgw9OCCo+/D8\"",
    "mtime": "2023-03-09T08:00:34.534Z",
    "size": 2448,
    "path": "../public/_nuxt/index.a7e954a6.css"
  },
  "/_nuxt/index.aca1a641.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b6-7uPWeMF5tA1J6oZfZuix99y2CzQ\"",
    "mtime": "2023-03-09T08:00:34.533Z",
    "size": 1462,
    "path": "../public/_nuxt/index.aca1a641.css"
  },
  "/_nuxt/index.ad956294.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"61d-/ANr9+dAe5A8jaa6WW7jVZcK2cY\"",
    "mtime": "2023-03-09T08:00:34.531Z",
    "size": 1565,
    "path": "../public/_nuxt/index.ad956294.css"
  },
  "/_nuxt/index.adaf24be.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"140d-LeKHQnY/eFmKSifubFHFiCoUgJY\"",
    "mtime": "2023-03-09T08:00:34.530Z",
    "size": 5133,
    "path": "../public/_nuxt/index.adaf24be.css"
  },
  "/_nuxt/index.ba32ee8a.js": {
    "type": "application/javascript",
    "etag": "\"544-6af6Q35wwS8FWZxKpOrABV+IKAQ\"",
    "mtime": "2023-03-09T08:00:34.529Z",
    "size": 1348,
    "path": "../public/_nuxt/index.ba32ee8a.js"
  },
  "/_nuxt/index.bbaa1024.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c1-xiEvQwvVsqBODjZg7O3WTTQv2Sc\"",
    "mtime": "2023-03-09T08:00:34.528Z",
    "size": 1473,
    "path": "../public/_nuxt/index.bbaa1024.css"
  },
  "/_nuxt/index.bdc0ab2a.js": {
    "type": "application/javascript",
    "etag": "\"fc1-eN/0Gc+LhiBSNebIRTiVjzXvwPQ\"",
    "mtime": "2023-03-09T08:00:34.526Z",
    "size": 4033,
    "path": "../public/_nuxt/index.bdc0ab2a.js"
  },
  "/_nuxt/index.c8cc670e.js": {
    "type": "application/javascript",
    "etag": "\"1b01-q3S3F4AJuvuOoP5tDk319SL3ZCw\"",
    "mtime": "2023-03-09T08:00:34.525Z",
    "size": 6913,
    "path": "../public/_nuxt/index.c8cc670e.js"
  },
  "/_nuxt/index.d0d66ba7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"362-ANTXKPea3378glHXUIVK6xmMbtI\"",
    "mtime": "2023-03-09T08:00:34.524Z",
    "size": 866,
    "path": "../public/_nuxt/index.d0d66ba7.css"
  },
  "/_nuxt/index.dbbed3fb.js": {
    "type": "application/javascript",
    "etag": "\"1ba9-AiSsug3eLVyIxCKWmTkKQMN5sR8\"",
    "mtime": "2023-03-09T08:00:34.520Z",
    "size": 7081,
    "path": "../public/_nuxt/index.dbbed3fb.js"
  },
  "/_nuxt/index.ec5d37ad.js": {
    "type": "application/javascript",
    "etag": "\"168b-gqGVlNQ7tbyV2P7iA6Nk3D7DKAY\"",
    "mtime": "2023-03-09T08:00:34.518Z",
    "size": 5771,
    "path": "../public/_nuxt/index.ec5d37ad.js"
  },
  "/_nuxt/index.ecc7741e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5f3-MYPuho3v8rpYbM6PHknrxTNraQc\"",
    "mtime": "2023-03-09T08:00:34.517Z",
    "size": 1523,
    "path": "../public/_nuxt/index.ecc7741e.css"
  },
  "/_nuxt/index.ef643654.js": {
    "type": "application/javascript",
    "etag": "\"598-LbBc5hLw3wHN85i6xMZBzy+9nh4\"",
    "mtime": "2023-03-09T08:00:34.515Z",
    "size": 1432,
    "path": "../public/_nuxt/index.ef643654.js"
  },
  "/_nuxt/index.f2828a0b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"78d-CCJVZN7E1771rlhxYYvLr+NGlts\"",
    "mtime": "2023-03-09T08:00:34.514Z",
    "size": 1933,
    "path": "../public/_nuxt/index.f2828a0b.css"
  },
  "/_nuxt/index.f63415b6.js": {
    "type": "application/javascript",
    "etag": "\"b75-tX1Qyb1SPEPINxdgKZU2Oj9agDc\"",
    "mtime": "2023-03-09T08:00:34.512Z",
    "size": 2933,
    "path": "../public/_nuxt/index.f63415b6.js"
  },
  "/_nuxt/lodash.a69c0f78.js": {
    "type": "application/javascript",
    "etag": "\"1170a-PDjYWG96tc/0rZOs67yZZHcTF30\"",
    "mtime": "2023-03-09T08:00:34.510Z",
    "size": 71434,
    "path": "../public/_nuxt/lodash.a69c0f78.js"
  },
  "/_nuxt/mobile.676acbe6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"276-rA5av0bw6XYS1A+0udDF5sJI6W8\"",
    "mtime": "2023-03-09T08:00:34.508Z",
    "size": 630,
    "path": "../public/_nuxt/mobile.676acbe6.css"
  },
  "/_nuxt/mobile.de7bbcc4.js": {
    "type": "application/javascript",
    "etag": "\"199-9+r6MdB6Z8KtmowLB0LgNnmIZdc\"",
    "mtime": "2023-03-09T08:00:34.507Z",
    "size": 409,
    "path": "../public/_nuxt/mobile.de7bbcc4.js"
  },
  "/_nuxt/nsfw.7523d766.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6f5-2w5b9in1pqE2WnHHX2g2fLlNiAE\"",
    "mtime": "2023-03-09T08:00:34.506Z",
    "size": 1781,
    "path": "../public/_nuxt/nsfw.7523d766.css"
  },
  "/_nuxt/nsfw.960b03c0.js": {
    "type": "application/javascript",
    "etag": "\"1638-kIKye6AmEk618nox9x7G0AocsN4\"",
    "mtime": "2023-03-09T08:00:34.504Z",
    "size": 5688,
    "path": "../public/_nuxt/nsfw.960b03c0.js"
  },
  "/_nuxt/nsfw.ac3e908a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"696-+hBzVBYTyUEvXPBj22BBTeC9nr0\"",
    "mtime": "2023-03-09T08:00:34.503Z",
    "size": 1686,
    "path": "../public/_nuxt/nsfw.ac3e908a.css"
  },
  "/_nuxt/nsfw.d071325f.js": {
    "type": "application/javascript",
    "etag": "\"17e8-PT9PbiTYTeKXX7AH8twvmCHI2t0\"",
    "mtime": "2023-03-09T08:00:34.502Z",
    "size": 6120,
    "path": "../public/_nuxt/nsfw.d071325f.js"
  },
  "/_nuxt/opportunity.2e34fed2.js": {
    "type": "application/javascript",
    "etag": "\"26a-1eNCDDauEenbfE3HvlLhzlgu5O8\"",
    "mtime": "2023-03-09T08:00:34.500Z",
    "size": 618,
    "path": "../public/_nuxt/opportunity.2e34fed2.js"
  },
  "/_nuxt/pinia.df657e0f.js": {
    "type": "application/javascript",
    "etag": "\"ac0b-IN61edloxaJ4fFGrlHz4IKkI45o\"",
    "mtime": "2023-03-09T08:00:34.498Z",
    "size": 44043,
    "path": "../public/_nuxt/pinia.df657e0f.js"
  },
  "/_nuxt/plus.f657fb1f.js": {
    "type": "application/javascript",
    "etag": "\"463-YOz7vijyiUIGNVDqb5Or8t+vT0k\"",
    "mtime": "2023-03-09T08:00:34.496Z",
    "size": 1123,
    "path": "../public/_nuxt/plus.f657fb1f.js"
  },
  "/_nuxt/promptBeautiful.04ccf942.js": {
    "type": "application/javascript",
    "etag": "\"18f7-bR/RC6EBjrD9PbzsXeQEamqE5QY\"",
    "mtime": "2023-03-09T08:00:34.494Z",
    "size": 6391,
    "path": "../public/_nuxt/promptBeautiful.04ccf942.js"
  },
  "/_nuxt/promptBeautiful.42a82843.js": {
    "type": "application/javascript",
    "etag": "\"192f-il4Wavr1/biIDlFVUsQCcGKYZvk\"",
    "mtime": "2023-03-09T08:00:34.491Z",
    "size": 6447,
    "path": "../public/_nuxt/promptBeautiful.42a82843.js"
  },
  "/_nuxt/promptBeautiful.49a04165.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64e-kEb3Ziq3cfvqPOmVVk/q5J6SCaI\"",
    "mtime": "2023-03-09T08:00:34.489Z",
    "size": 1614,
    "path": "../public/_nuxt/promptBeautiful.49a04165.css"
  },
  "/_nuxt/promptBeautiful.93c34c0a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"61a-fGqaTEAIrA+18DKLLoJ6yrEg8JA\"",
    "mtime": "2023-03-09T08:00:34.488Z",
    "size": 1562,
    "path": "../public/_nuxt/promptBeautiful.93c34c0a.css"
  },
  "/_nuxt/sYw7uX71Xe.6fa69bb4.jpeg": {
    "type": "image/jpeg",
    "etag": "\"2ba5b-mSCyUXXaLyjcwRITfcfO5cP41CQ\"",
    "mtime": "2023-03-09T08:00:34.486Z",
    "size": 178779,
    "path": "../public/_nuxt/sYw7uX71Xe.6fa69bb4.jpeg"
  },
  "/_nuxt/sYw7uX71Xe.a89bef30.js": {
    "type": "application/javascript",
    "etag": "\"70-f3ZkM91giqKEobmiJ+/2Wpna4qg\"",
    "mtime": "2023-03-09T08:00:34.483Z",
    "size": 112,
    "path": "../public/_nuxt/sYw7uX71Xe.a89bef30.js"
  },
  "/_nuxt/setting.6ad74f14.js": {
    "type": "application/javascript",
    "etag": "\"114-lJy1Q3Dd8nB5EBFaq2xOM8a7vJg\"",
    "mtime": "2023-03-09T08:00:34.482Z",
    "size": 276,
    "path": "../public/_nuxt/setting.6ad74f14.js"
  },
  "/_nuxt/sfw.22306f01.js": {
    "type": "application/javascript",
    "etag": "\"116b-lZjVIwwICNilLgzG9ucnXOn1+tg\"",
    "mtime": "2023-03-09T08:00:34.480Z",
    "size": 4459,
    "path": "../public/_nuxt/sfw.22306f01.js"
  },
  "/_nuxt/sfw.257ce892.js": {
    "type": "application/javascript",
    "etag": "\"16e0-fSDH3a+uHd9f3fVWi/i484Vd+Js\"",
    "mtime": "2023-03-09T08:00:34.478Z",
    "size": 5856,
    "path": "../public/_nuxt/sfw.257ce892.js"
  },
  "/_nuxt/sfw.32d5d034.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"796-xG3S8jqpJDIyWjcXjXeAufqG5Rk\"",
    "mtime": "2023-03-09T08:00:34.476Z",
    "size": 1942,
    "path": "../public/_nuxt/sfw.32d5d034.css"
  },
  "/_nuxt/sfw.7879a49e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"68a-4ecRV9w8e1zxW5Sa+M3uaNe7y+o\"",
    "mtime": "2023-03-09T08:00:34.474Z",
    "size": 1674,
    "path": "../public/_nuxt/sfw.7879a49e.css"
  },
  "/_nuxt/shop.01a46abf.js": {
    "type": "application/javascript",
    "etag": "\"3456-wo+NeawAQ6CeLQSa7MEj7DZn4aI\"",
    "mtime": "2023-03-09T08:00:34.472Z",
    "size": 13398,
    "path": "../public/_nuxt/shop.01a46abf.js"
  },
  "/_nuxt/shopping-trolley.3f0ecb69.js": {
    "type": "application/javascript",
    "etag": "\"370-nWrgTCIubdlmkSdD/Sd6jKHoudY\"",
    "mtime": "2023-03-09T08:00:34.471Z",
    "size": 880,
    "path": "../public/_nuxt/shopping-trolley.3f0ecb69.js"
  },
  "/_nuxt/sortablejs.c0b850ce.js": {
    "type": "application/javascript",
    "etag": "\"ae83-peS7D4cKSUGPxFFr7J+5I/Pu1ho\"",
    "mtime": "2023-03-09T08:00:34.469Z",
    "size": 44675,
    "path": "../public/_nuxt/sortablejs.c0b850ce.js"
  },
  "/_nuxt/store.c5eaf696.js": {
    "type": "application/javascript",
    "etag": "\"31fc-hi4KaiP/g0fl4rYHHPCs22xmfpE\"",
    "mtime": "2023-03-09T08:00:34.467Z",
    "size": 12796,
    "path": "../public/_nuxt/store.c5eaf696.js"
  },
  "/_nuxt/upload-filled.458643b9.js": {
    "type": "application/javascript",
    "etag": "\"241-n7lfdYaavWV6C8QrvOcu6QQHeK4\"",
    "mtime": "2023-03-09T08:00:34.465Z",
    "size": 577,
    "path": "../public/_nuxt/upload-filled.458643b9.js"
  },
  "/_nuxt/utils.f7361be0.js": {
    "type": "application/javascript",
    "etag": "\"143-RY+Du6a7ZITGaR7WmCYcTQ+ngXA\"",
    "mtime": "2023-03-09T08:00:34.464Z",
    "size": 323,
    "path": "../public/_nuxt/utils.f7361be0.js"
  },
  "/_nuxt/uuid.db292a81.js": {
    "type": "application/javascript",
    "etag": "\"1e23-UscsY51PZ3Sh0hEY3Er3oedaSKA\"",
    "mtime": "2023-03-09T08:00:34.462Z",
    "size": 7715,
    "path": "../public/_nuxt/uuid.db292a81.js"
  },
  "/_nuxt/vuedraggable.fd1947e2.js": {
    "type": "application/javascript",
    "etag": "\"c52c-z7u3pwYsWfJbcv1DV9MsJqIk0BM\"",
    "mtime": "2023-03-09T08:00:34.460Z",
    "size": 50476,
    "path": "../public/_nuxt/vuedraggable.fd1947e2.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":2592000}};

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
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
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
    event.node.res.setHeader("Last-Modified", asset.mtime);
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
  const ipxOptions = {
    ...useRuntimeConfig().ipx || {},
    dir: fileURLToPath(new URL("../public", globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.req, event.res);
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
