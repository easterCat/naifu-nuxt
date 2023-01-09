import { isMobile } from '@/utils/index';

const routeTo = (to: any, from: any) => {
    if (isMobile() && to.path.includes('/pc')) {
        const newPath = to.path.replace('/pc', '/mobile');
        return navigateTo(newPath);
    }
    if (!isMobile() && to.path.includes('/mobile')) {
        const newPath = to.path.replace('/mobile', '/pc');
        return navigateTo(newPath);
    }
};

export default defineNuxtRouteMiddleware((to: any, from: any) => {
    if (process.client) {
        routeTo(to, from);
        window.onresize = () => {
            routeTo(to, from);
        };
    }
});
