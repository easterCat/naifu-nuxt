import { G as Ge, R, U } from '../server.mjs';
import { toRaw } from 'vue';
import { uuid } from 'vue-uuid';
import { ElMessage } from 'element-plus';

var t = Object.defineProperty, e = (e2, s2, a2) => (((e3, s3, a3) => {
  s3 in e3 ? t(e3, s3, { enumerable: true, configurable: true, writable: true, value: a3 }) : e3[s3] = a3;
})(e2, "symbol" != typeof s2 ? s2 + "" : s2, a2), a2);
const c = Ge({ id: "index-store", state: () => {
  const { $store: t2 } = U();
  return { userInfo: t2 && t2.get("user") ? JSON.parse(t2.get("user")) : { nickname: "", username: "", id: "", email: "", role_id: "" }, access_token: t2 && t2.get("access_token") ? JSON.parse(t2.get("access_token")) : "", refresh_token: t2 && t2.get("refresh_token") ? JSON.parse(t2.get("refresh_token")) : "" };
}, getters: { nickname: (t2) => t2.userInfo.nickname, username: (t2) => t2.userInfo.nickname ? t2.userInfo.nickname : t2.userInfo.username, userId: (t2) => t2.userInfo.id, email: (t2) => t2.userInfo.email, roleId: (t2) => t2.userInfo.role_id, favoriteIds: (t2) => t2.userInfo.favorites && t2.userInfo.favorites.length ? t2.userInfo.favorites.map((t3) => t3.id).join(",") : "", favorites: (t2) => t2.userInfo.favorites && t2.userInfo.favorites.length ? t2.userInfo.favorites : [] }, actions: { setUserInfo(t2) {
  const { $store: e2 } = U();
  this.userInfo = { ...t2 }, e2.set("user", JSON.stringify(this.userInfo));
}, setToken(t2, e2) {
  const { $store: s2 } = U();
  this.access_token = t2, this.refresh_token = e2, s2.set("access_token", JSON.stringify(this.access_token)), s2.set("refresh_token", JSON.stringify(this.refresh_token));
}, clearUserInfo() {
  const { $store: t2 } = U();
  this.userInfo = { nickname: "", username: "", id: "", email: "", role_id: "" }, t2.remove("user");
}, clearToken() {
  const { $store: t2 } = U();
  this.access_token = "", this.refresh_token = "", t2.remove("access_token"), t2.remove("refresh_token");
}, async refresh() {
  const { $store: t2 } = U(), { AuthApi: e2 } = A(), s2 = await e2.refresh();
  if (200 === s2.code) {
    const { access_token: e3 } = s2.data;
    this.access_token = e3, t2.set("access_token", JSON.stringify(e3));
  }
}, removeFavoriteById(t2) {
  const e2 = this.userInfo.favorites.findIndex((e3) => e3.id === t2);
  if (e2 >= 0) {
    const { $store: t3 } = U();
    this.userInfo.favorites.splice(e2, 1), t3.set("user", JSON.stringify(this.userInfo));
  }
}, addFavoriteById(t2) {
  if (t2) {
    const { $store: e2 } = U();
    this.userInfo.favorites.push(t2), e2.set("user", JSON.stringify(this.userInfo));
  }
} } });
let u = null;
function l(t2) {
  return u && u.close(), u = ElMessage({ showClose: true, message: t2, type: "error" }), u;
}
const h = (t2, e2, s2) => {
  const a2 = R(), r2 = a2.public.FLASK_BASE_API, o2 = a2.public.API_DATA_FROM, u2 = c();
  let h2 = "";
  return h2 = "github" === o2 || "github" === s2 ? t2 : r2 + t2, new Promise(async (t3, a3) => {
    try {
      const n2 = { ...e2, key: uuid.v4() };
      u2.access_token && "github" !== s2 && (h2.includes("refresh") ? n2.headers = { Authorization: `Bearer ${u2.refresh_token}` } : n2.headers = { Authorization: `Bearer ${u2.access_token}` });
      const r3 = await $fetch(h2, n2);
      r3 ? 20001 === (null == r3 ? void 0 : r3.code) ? await u2.refresh() : 20002 === (null == r3 ? void 0 : r3.code) || 20003 === (null == r3 ? void 0 : r3.code) || 500 === (null == r3 ? void 0 : r3.code) ? l(null == r3 ? void 0 : r3.msg) : t3(r3) : a3(`${h2} => \u6570\u636E\u83B7\u53D6\u5931\u8D25`);
    } catch (n2) {
      console.error("$fetch\u51FA\u73B0\u9519\u8BEF => ", n2), a3(n2);
    }
  });
};
class g {
  constructor() {
    e(this, "get", (t2, e2, s2) => h(t2, { method: "get", params: e2 }, s2)), e(this, "post", (t2, e2, s2) => h(t2, { method: "post", body: e2 }, s2)), e(this, "put", (t2, e2, s2) => h(t2, { method: "put", body: e2 }, s2)), e(this, "delete", (t2, e2, s2) => h(t2, { method: "delete", body: e2 }, s2));
  }
}
const p = new class extends g {
  getEhtags() {
    return this.get("https://raw.githubusercontent.com/scooderic/exhentai-tags-chinese-translation/master/dist/ehtags-cn.json", {}, "github");
  }
}();
const f = new class extends g {
  getNameSpaceList() {
    return this.get("https://ehtt.fly.dev/database", {}, "github");
  }
  getListByNameSpace() {
    return this.get("https://raw.githubusercontent.com/EhTagTranslation/Database/master/database/female.md", {}, "github");
  }
  getAllJsonData() {
    return this.get("https://raw.githubusercontent.com/EhTagTranslation/DatabaseReleases/master/db.full.json", {}, "github");
  }
}();
const d = new class extends g {
  getList(t2) {
    return this.get("https://lexica.art/api/v1/search", t2);
  }
}();
const m = new class extends g {
  getList(t2) {
    return this.post("https://api.cerfai.com/open/get_full_categories", t2, "github");
  }
  getTagsById(t2) {
    return this.post("https://api.cerfai.com/open/get_tags_by_category", t2, "github");
  }
  searchTags(t2) {
    return this.post("https://api.cerfai.com/search_tags", t2, "github");
  }
}();
const b = new class extends g {
  translate(t2) {
    return this.post("/translate", t2);
  }
}();
const k = new class extends g {
  getTags() {
    return this.get("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/tags.json", {}, "github");
  }
}();
const _ = new class extends g {
  async getLinks() {
    const t2 = R().public.API_DATA_FROM;
    if ("github" === t2) {
      const t3 = "https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/links.json", e2 = await this.get(t3);
      return { links: JSON.parse(e2), total: null };
    }
    if ("database" === t2) {
      const t3 = await this.get("/link/list", { pageIndex: 1, pageSize: 1e3 }), { data: e2 } = toRaw(t3);
      return { links: e2.list, total: e2.total };
    }
  }
  async addLink(t2) {
    return await this.post("/link/list", t2);
  }
  async updateLink(t2) {
    return await this.put("/link/list", t2);
  }
  async deleteLink(t2) {
    return await this.delete("/link/list", t2);
  }
}();
const y = new class extends g {
  async getTemplates(t2) {
    const e2 = R().public.API_DATA_FROM;
    if ("github" === e2) {
      const t3 = "https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/templates.json", e3 = await this.get(t3);
      return { templates: JSON.parse(e3), total: null };
    }
    if ("database" === e2) {
      const e3 = "/get_templates", s2 = await this.get(e3, t2), { data: a2 } = toRaw(s2);
      return { templates: a2.list, total: a2.total };
    }
  }
  async getTemplatesNoval(t2) {
    const e2 = await this.get("/get_templates_noval", t2), { data: s2 } = toRaw(e2);
    return { templates: s2.list, total: s2.total };
  }
  async getTemplatesChitu(t2) {
    const e2 = await this.get("/get_templates_chitu", t2), { data: s2 } = toRaw(e2);
    return { templates: s2.list, total: s2.total };
  }
  async setIp() {
    const t2 = (await this.get("/set_ip")).data.ip, { $store: e2 } = U();
    return e2.set("ip", t2), { ip: t2 };
  }
  async likeTemplateById(t2) {
    return await this.post("/template/favorite/sfw", t2);
  }
}();
const w = new class extends g {
  async register(t2) {
    return await this.post("/auth/registration", t2);
  }
  async login(t2) {
    return await this.post("/auth/login", t2);
  }
  async logout() {
    return await this.post("/auth/logout/access");
  }
  async refresh() {
    return await this.post("/auth/token/refresh");
  }
  async getUserInfo() {
    return await this.get("/auth/user/info");
  }
  async getUserFavorites() {
    return await this.get("/auth/user/favorite");
  }
}();
const I = new class extends g {
  generate(t2) {
    return this.post(t2.postUrl, t2, "github");
  }
  rrythGenerate(t2) {
    return this.post("/draw/ai", t2);
  }
}();
const v = { EhtagsApi: p, EhttApi: f, LexicaApi: d, GelbooruApi: m, ShopApi: b, DefaultTagsApi: k, LinkApi: _, TemplateApi: y, AuthApi: w, NovalApi: I, DanbooruApi: new class extends g {
  analysisImage(t2) {
    return this.post("/danbooru/analysis", t2);
  }
  async searchBooruList(t2) {
    const e2 = await this.get("/danbooru/list", t2), { data: s2 } = toRaw(e2);
    return { templates: s2.list, total: s2.total };
  }
}() }, A = () => v;

export { A, c };
