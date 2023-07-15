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
        setTimeout(() => {
            routeTo(to, from);
        }, 1500);
        window.onresize = () => {
            setTimeout(() => {
                routeTo(to, from);
            }, 1500);
        };
    }
});
