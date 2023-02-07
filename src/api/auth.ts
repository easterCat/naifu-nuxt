import Request from '~~/src/utils/request';

class AuthApi extends Request {
    async register(body: any) {
        const result = await this.post('/auth/registration', body);
        return result;
    }

    async login(body: any) {
        const result = await this.post('/auth/login', body);
        return result;
    }

    async logout() {
        const result = await this.post('/auth/logout/access');
        const result2 = await this.post('/auth/logout/refresh');
        return result;
    }

    async refresh() {
        const result = await this.post('/auth/token/refresh');
        return result;
    }

    async getUserInfo() {
        const result = await this.get('/auth/user/info');
        return result;
    }

    async getUserFavorites() {
        const result = await this.get('/auth/user/favorite');
        return result;
    }
}

export default new AuthApi();
