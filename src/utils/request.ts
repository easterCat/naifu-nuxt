import { uuid } from 'vue-uuid';
import { useIndexStore } from '../store';
import { errorMessage } from '@/utils/message';
import { isMobile } from '@/utils/index';

interface resultJson {
    code: number;
    msg: string;
    data: any;
}

const fetch = (url: string, options?: any, from?: string): Promise<any> => {
    const config = useRuntimeConfig();
    const api = config.public.FLASK_BASE_API;
    const dataFrom = config.public.API_DATA_FROM;
    const indexStore = useIndexStore();
    const router = useRouter();

    let reqUrl = '';
    if (dataFrom === 'github' || from === 'github') {
        // 当from是github时,使用全部传入url
        reqUrl = url;
    } else {
        reqUrl = api + url;
    }

    return new Promise(async (resolve, reject) => {
        // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
        try {
            const op = { ...options, key: uuid.v4() };
            if (indexStore.access_token && from !== 'github') {
                if (reqUrl.includes('refresh')) {
                    op.headers = {
                        Authorization: `Bearer ${indexStore.refresh_token}`,
                    };
                } else {
                    op.headers = {
                        Authorization: `Bearer ${indexStore.access_token}`,
                    };
                }
            }
            const result: resultJson = await $fetch(reqUrl, op);
            if (result) {
                if (reqUrl.includes('refresh') && result?.code === 20001) {
                    indexStore.clearToken();
                    if (isMobile()) {
                        router.replace('/mobile/login');
                    } else {
                        router.replace('/pc/login');
                    }
                } else if (result?.code === 20001) {
                    await indexStore.refresh();
                } else if (result?.code === 20002 || result?.code === 20003) {
                    errorMessage(result?.msg);

                    if (isMobile()) {
                        router.replace('/mobile/login');
                    } else {
                        router.replace('/pc/login');
                    }
                } else if (result?.code === 500) {
                    errorMessage(result?.msg);
                } else {
                    resolve(result);
                }
            } else {
                reject(`${reqUrl} => 数据获取失败`);
            }
        } catch (error) {
            console.error('$fetch出现错误 => ', error);
            reject(error);
        }
    });
};

export default class Request {
    get = (url: string, params?: any, from?: string) => {
        return fetch(url, { method: 'get', params }, from);
    };

    post = (url: string, body?: any, from?: string) => {
        return fetch(url, { method: 'post', body }, from);
    };

    put = (url: string, body?: any, from?: string) => {
        return fetch(url, { method: 'put', body }, from);
    };

    delete = (url: string, body?: any, from?: string) => {
        return fetch(url, { method: 'delete', body }, from);
    };
}
