import Request from '~~/src/utils/request';

class CommonApi extends Request {
    async uploadImages(body: any) {
        const result = await this.post('/common/upload_image', body);
        return result;
    }
}

export default new CommonApi();
