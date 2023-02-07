import { defineStore } from 'pinia';

export const useIndexStore = defineStore({
    id: 'index-store',
    state: () => {
        const { $store } = useNuxtApp();
        return {
            userInfo:
                $store && $store.get('user')
                    ? JSON.parse($store.get('user') as string)
                    : { nickname: '', username: '', id: '', email: '', role_id: '' },
            access_token:
                $store && $store.get('access_token')
                    ? JSON.parse($store.get('access_token') as string)
                    : '',
            refresh_token:
                $store && $store.get('refresh_token')
                    ? JSON.parse($store.get('refresh_token') as string)
                    : '',
        };
    },

    getters: {
        nickname: (state) => state.userInfo.nickname,
        avatar: (state) => state.userInfo.avatar,
        username: (state) =>
            state.userInfo.nickname ? state.userInfo.nickname : state.userInfo.username,
        userId: (state) => state.userInfo.id,
        email: (state) => state.userInfo.email,
        roleId: (state) => state.userInfo.role_id,
        favoriteIds: (state) =>
            state.userInfo.favorites && state.userInfo.favorites.length
                ? state.userInfo.favorites.map((i: any) => i.id).join(',')
                : '',
        favorites: (state) =>
            state.userInfo.favorites && state.userInfo.favorites.length
                ? state.userInfo.favorites
                : [],
        templates: (state) =>
            state.userInfo.templates && state.userInfo.templates.length
                ? state.userInfo.templates
                : [],
    },

    actions: {
        setUserInfo(info: any) {
            const { $store } = useNuxtApp();
            this.userInfo = { ...info };
            $store.set('user', JSON.stringify(this.userInfo));
        },
        setToken(accessToken: string, refreshToken: string) {
            const { $store } = useNuxtApp();
            this.access_token = accessToken;
            this.refresh_token = refreshToken;
            $store.set('access_token', JSON.stringify(this.access_token));
            $store.set('refresh_token', JSON.stringify(this.refresh_token));
        },
        clearUserInfo() {
            const { $store } = useNuxtApp();
            this.userInfo = { nickname: '', username: '', id: '', email: '', role_id: '' };
            $store.remove('user');
        },
        clearToken() {
            const { $store } = useNuxtApp();
            this.access_token = '';
            this.refresh_token = '';
            $store.remove('access_token');
            $store.remove('refresh_token');
        },
        async refresh() {
            const { $store } = useNuxtApp();
            const { AuthApi } = useApi();
            const result = await AuthApi.refresh();
            if (result.code === 200) {
                const { access_token } = result.data;
                this.access_token = access_token;
                $store.set('access_token', JSON.stringify(access_token));
            } else {
                this.access_token = '';
                this.refresh_token = '';
                $store.set('access_token', JSON.stringify(this.access_token));
                $store.set('refresh_token', JSON.stringify(this.refresh_token));
            }
        },
        removeFavoriteById(id: number) {
            const fIndex = this.userInfo.favorites.findIndex((i: any) => {
                return i.id === id;
            });
            if (fIndex >= 0) {
                const { $store } = useNuxtApp();
                this.userInfo.favorites.splice(fIndex, 1);
                $store.set('user', JSON.stringify(this.userInfo));
            }
        },
        addFavoriteById(data: any) {
            if (data) {
                const { $store } = useNuxtApp();
                this.userInfo.favorites.push(data);
                $store.set('user', JSON.stringify(this.userInfo));
            }
        },
    },
});
