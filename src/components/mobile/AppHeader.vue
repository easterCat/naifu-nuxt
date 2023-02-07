<template>
    <header class="fix-header header bg-base-30">
        <div class="header-con">
            <div class="header-menu">
                <div class="header-icon">
                    <nuxt-img
                        src="https://image.lexica.art/md/9ce846a3-21f0-4f35-bf40-61d5c918860a"
                    />
                </div>
            </div>
            <div class="user-info">
                <div class="user-util">
                    <div v-if="isMobile()" class="user-menu">
                        <Transition name="fade">
                            <span @click="showMenu">
                                <span v-if="menuVisible"><i-ep-expand></i-ep-expand></span>
                                <span v-else><i-ep-fold></i-ep-fold></span>
                            </span>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>

        <ClientOnly>
            <el-drawer v-model="menuVisible" title="主题" :with-header="false" size="75%">
                <div class="m-b-20">
                    <div class="user-name">
                        <el-avatar
                            src="https://image.lexica.art/md/26ef6676-a7e3-4560-8cb8-4355e017dc2b"
                        />
                        <span>{{ indexStore?.username || 'Welcome!' }}</span>
                    </div>
                </div>
                <ul class="w-full p-2 menu">
                    <li
                        class="rounded"
                        :class="{ 'item-active': activeEvent('home') }"
                        @click="handleNavClick('home')"
                    >
                        <a>
                            <i-ep-house></i-ep-house>
                            首页
                        </a>
                    </li>
                    <li
                        class="rounded"
                        :class="{ 'item-active': activeEvent('tags') }"
                        @click="handleNavClick('tags')"
                    >
                        <a>
                            <i-ep-collection-tag></i-ep-collection-tag>
                            常规标签
                        </a>
                    </li>
                    <li
                        class="rounded"
                        :class="{ 'item-active': activeEvent('tags') }"
                        @click="handleNavClick('tags/chitu')"
                    >
                        <a>
                            <i-ep-collection-tag></i-ep-collection-tag>
                            词图标签
                        </a>
                    </li>
                    <li
                        class="rounded"
                        :class="{ 'item-active': activeEvent('tags') }"
                        @click="handleNavClick('tags/gelbooru')"
                    >
                        <a>
                            <i-ep-collection-tag></i-ep-collection-tag>
                            Gelbooru(H)
                        </a>
                    </li>
                    <li
                        class="rounded"
                        :class="{ 'item-active': activeEvent('tags') }"
                        @click="handleNavClick('tags/eh')"
                    >
                        <a>
                            <i-ep-collection-tag></i-ep-collection-tag>
                            EHentai(H)
                        </a>
                    </li>
                    <li
                        class="rounded"
                        :class="{ 'item-active': activeEvent('template/sfw') }"
                        @click="handleNavClick('template/sfw')"
                    >
                        <a>
                            <i-ep-files></i-ep-files>
                            SFW模版
                        </a>
                    </li>
                    <li
                        class="rounded"
                        :class="{ 'item-active': activeEvent('template/nsfw') }"
                        @click="handleNavClick('template/nsfw')"
                    >
                        <a>
                            <i-ep-files></i-ep-files>
                            NSFW模版
                        </a>
                    </li>
                    <li
                        class="rounded"
                        :class="{ 'item-active': activeEvent('utils') }"
                        @click="handleNavClick('utils')"
                    >
                        <a>
                            <i-ep-guide></i-ep-guide>
                            辅助工具
                        </a>
                    </li>
                    <!-- <li
                        class="rounded"
                        :class="{ 'item-active': activeEvent('links') }"
                        @click="handleNavClick('links')"
                    >
                        <a>
                            <i-ep-link></i-ep-link>
                            收录
                        </a>
                    </li> -->
                </ul>
                <button class="btn btn-wide fix-bottom" @click="draw">Generate</button>
            </el-drawer>
        </ClientOnly>
        <PcShopLayer v-model="showShopLayer"></PcShopLayer>
    </header>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import lodash from 'lodash';
import { useIndexStore } from '~~/src/store/index';
import { isMobile } from '@/utils/index';

const indexStore: any = useIndexStore();
const { AuthApi } = useApi();
const router = useRouter();
const route = useRoute();
// large medium small
const screenSize = ref('large');
const path: Ref<string> = ref(route.path);
const activeIndex: Ref<string> = ref(path.value ?? '/home');
const shopStatus: Ref<boolean> = ref(false);
const showShopLayer: Ref<boolean> = ref(false);
const menuVisible: Ref<boolean> = ref(false);
const hoverMenu: Ref<boolean> = ref(false);

const { shopList } = useShop();

watch(shopList, (newValue) => {
    shopStatus.value = !!newValue.length;
});

const logout = async () => {
    if (!indexStore?.username) {
        indexStore.clearToken();
        indexStore.clearUserInfo();
        return router.push({ path: '/mobile/login' });
    }
    const result = await AuthApi.logout();
    const { code, msg } = result;
    if ((code === 200 || code === 20003) && msg) {
        indexStore.clearToken();
        indexStore.clearUserInfo();
        return ElMessage({
            type: 'success',
            message: '账号登出成功!ByeBye',
            showClose: true,
        });
    } else {
        return ElMessage({
            type: 'warning',
            message: msg,
            showClose: true,
        });
    }
};

const activeEvent = (r: string) => {
    return route.path.includes(`mobile/${r}`);
};

const showMenu = () => {
    console.log('object :>> ', menuVisible.value);
    menuVisible.value = !menuVisible.value;
};

const hoverTagMenu = () => {
    hoverMenu.value = true;
};

const leaveTagMenu = () => {
    hoverMenu.value = false;
};

// methods
const handleNavClick = (link: string) => {
    router.push({ path: `/mobile/${link}` });
    activeIndex.value = `/mobile/${link}`;
};

const shopEvent = () => {
    showShopLayer.value = true;
};

const resize = () => {
    const w: any = window?.innerWidth;
    if (w < 1280 && w > 750) {
        screenSize.value = 'medium';
    } else if (w < 750) {
        screenSize.value = 'small';
    } else {
        screenSize.value = 'large';
    }
};

const draw = () => {
    const router = useRouter();
    router.push('/mobile/draw');
};

const throttleResize = lodash.throttle(resize, 1200);

onMounted(() => {
    // indexStore = useIndexStore();
    resize();
    window.addEventListener('resize', throttleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', throttleResize);
});
</script>

<style lang="scss" scoped>
.theme-select-btn {
    width: 49%;
    margin-bottom: 10px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;

    .left {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: left;
    }
    .right {
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        > span {
            height: 50px;
            width: 20%;
        }

        span:nth-child(1) {
            border-color: hsl(var(--p) / 1);
            background-color: hsl(var(--p) / 1);
            color: hsl(var(--pc) / 1);
        }
        span:nth-child(2) {
            border-color: hsl(var(--a) / 1);
            background-color: hsl(var(--a) / 1);
            color: hsl(var(--ac) / 1);
        }
        span:nth-child(3) {
            border-color: hsl(var(--s) / 1);
            background-color: hsl(var(--s) / 1);
            color: hsl(var(--sc) / 1);
        }
        span:nth-child(4) {
            border-color: hsl(var(--n) / 1);
            background-color: hsl(var(--n) / 1);
            color: hsl(var(--nc) / 1);
        }
    }
}

.bg-base-30 {
    --tw-bg-opacity: 0.3;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity));
}

.header {
    position: sticky;
    top: 0px;
    z-index: 1001;
    width: 100%;
    box-shadow: hsl(var(--p) / 0.2) 0px 48px 100px 0px;

    .header-con {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 56px;
    }

    .header-menu {
        width: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transform: translateX(10px);
    }

    .header-icon {
        width: 42px;
        height: 42px;
        border-radius: 10px;
        overflow: hidden;
        animation-name: wobbleHorizontal;
        animation-duration: 28s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .user-info {
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 56px;
    }

    .user-name {
        width: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        font-size: 14px;
        padding: 0 10px 0 0;

        > span {
            margin-right: 20px;
        }
    }

    .user-util {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        font-size: 14px;
        padding: 0 10px 0 8px;

        > div {
            padding: 0 8px;
        }

        .icon {
            margin-left: 0;
        }
    }

    .user-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        width: 40px;
        cursor: pointer;
        position: relative;

        span {
            display: flex;
            align-items: center;
            position: absolute;
            right: 0;
        }
    }

    .hover-anime-btn:hover {
        animation: 0.9s cubic-bezier(0.25, 0.1, 0.25, 1) 0s infinite pulse;
    }
}

:deep(.el-overlay) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.5s linear;

    .el-drawer {
        background: hsl(var(--b2) / 1);
    }

    .fix-bottom {
        position: absolute;
        bottom: 10px;
    }
}
</style>
