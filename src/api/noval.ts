import Request from '~~/src/utils/request';

class NovalApi extends Request {
    generate(body?: any) {
        return this.post(body.postUrl, body, 'github');
    }

    // 绘图计划提供的免费接口https://github.com/MirrorCY/rryth/blob/main/src/index.ts
    rrythGenerate(body?: any) {
        return this.post('/draw/ai', body);
    }

    getDrawServerList() {
        return this.get('/draw/list');
    }

    testDrawServerList() {
        return this.get('/draw/test');
    }
}

export default new NovalApi();
