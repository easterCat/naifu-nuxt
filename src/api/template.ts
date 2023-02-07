import Request from '~~/src/utils/request';

class TemplateApi extends Request {
    async getTemplates(params: any) {
        const url = `/template/han`;
        const result = await this.get(url, params);
        const { data } = toRaw(result);
        console.log(data);
        return { templates: data.list, total: data.total };
    }

    async getTemplatesNoval(params: any) {
        const url = `/get_templates_noval`;
        const result = await this.get(url, params);
        const { data } = toRaw(result);
        return { templates: data.list, total: data.total };
    }

    async getTemplatesChitu(params: any) {
        const url = `/get_templates_chitu`;
        const result = await this.get(url, params);
        const { data } = toRaw(result);
        return { templates: data.list, total: data.total };
    }

    async setIp() {
        const url = `/set_ip`;
        const result = await this.get(url);
        const ip = result.data.ip;
        const { $store } = useNuxtApp();
        $store.set('ip', ip);
        return { ip };
    }

    async likeTemplateById(body: any) {
        const url = `/template/favorite/sfw`;
        const result = await this.post(url, body);
        return result;
    }

    async createPersonalTemplate(body: any) {
        const url = `/template/personal`;
        const result = await this.post(url, body);
        return result;
    }
}

export default new TemplateApi();
