<template>
    <ClientOnly>
        <div class="profile-page page">
            <PcAppShadow />
            <PcAppHeader />
            <div class="content">
                <div class="banner-con">
                    <div class="banner-image">
                        <img src="@/assets/imgs/banner/sYw7uX71Xe.jpeg" alt="" />
                    </div>
                </div>
                <div class="profile-con">
                    <div class="avatar-con">
                        <div class="avatar">
                            <div class="w-32 rounded-full">
                                <img
                                    :src="
                                        indexStore.avatar || 'https://placeimg.com/192/192/people'
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div class="info-con">
                        <div class="left">
                            <div class="shadow stats">
                                <div class="stat place-items-center">
                                    <div class="stat-title">关注</div>
                                    <div class="stat-value">999</div>
                                    <div class="stat-desc">截止 2023年1月13日</div>
                                </div>

                                <div class="stat place-items-center">
                                    <div class="stat-title">追随</div>
                                    <div class="stat-value text-secondary">4,200</div>
                                    <div class="stat-desc text-secondary">截止 2023年1月13日</div>
                                </div>
                            </div>
                        </div>
                        <div class="center">
                            <div class="shadow stats">
                                <div class="stat place-items-center">
                                    <div class="stat-title">昵称</div>
                                    <div class="stat-value">{{ indexStore?.nickname }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="shadow stats">
                                <div class="stat place-items-center">
                                    <div class="stat-title">用户等级</div>
                                    <div class="stat-value">{{ userLevel() }}</div>
                                </div>

                                <div class="stat place-items-center">
                                    <div class="stat-title">加入天数</div>
                                    <div class="stat-value text-secondary">
                                        {{ joinDay() }}
                                    </div>
                                    <div class="stat-desc text-secondary">截止 2023年1月13日</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tabs-con">
                    <div class="tabs">
                        <a
                            class="tab tab-lg tab-bordered m-r-10"
                            :class="{ 'tab-active': tabActive === 1 }"
                            @click="changeTabActive(1)"
                        >
                            收藏模版
                        </a>
                        <a
                            class="tab tab-lg tab-bordered"
                            :class="{ 'tab-active': tabActive === 2 }"
                            @click="changeTabActive(2)"
                        >
                            个人模版
                        </a>
                    </div>
                </div>
                <div class="collect-con">
                    <el-row
                        v-if="indexStore?.favorites || indexStore?.templates"
                        class="list-con"
                        :gutter="20"
                    >
                        <el-col
                            v-for="(tem, tIndex) in showList"
                            :key="tIndex"
                            v-animate-css="{
                                direction: 'modifySlideInUp',
                                delay: tIndex * 50,
                            }"
                            :xs="24"
                            :sm="12"
                            :md="6"
                            :lg="4"
                            :xl="4"
                        >
                            <div class="shadow-xl card card-compact glass bg-base-100 m-b-20">
                                <figure>
                                    <nuxt-img
                                        class="image"
                                        :src="
                                            tem?.min_imgbb_url
                                                ? tem?.min_imgbb_url
                                                : tem?.minify_preview
                                        "
                                        loading="lazy"
                                        @click="previewURL(tem?.images)"
                                    />
                                </figure>
                                <div class="card-body">
                                    <h2 class="card-title">{{ tem?.name }}</h2>
                                    <p>{{ tem?.author }}</p>
                                    <div class="justify-end card-actions">
                                        <button
                                            v-if="tabActive === 1"
                                            class="btn btn-sm btn-secondary"
                                            @click="favoriteTem(tem?.id)"
                                        >
                                            移除
                                        </button>
                                        <button
                                            class="btn btn-accent btn-sm"
                                            @click="cardClick(tem)"
                                        >
                                            详情
                                        </button>
                                        <button
                                            class="btn btn-primary btn-sm"
                                            @click="exportSfwToShop(tem)"
                                        >
                                            购物车
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <PcTemplateDetail
                v-model="showPreview"
                :current-template="currentTemplate"
            ></PcTemplateDetail>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import dayjs from 'dayjs';
import { useIndexStore } from '~~/src/store/index';

const { AuthApi, TemplateApi } = useApi();
const { setShop } = useShop();
let indexStore: any = null;

const showPreview = ref(false);
const currentTemplate: Ref<any | null> = ref(null);
const tabActive = ref(1); // 1 or 2
const showList: any = ref([]);

const joinDay = () => {
    const minus = dayjs(dayjs().format('YYYY-MM-DD')).diff(indexStore?.userInfo.create_time, 'day');
    return minus;
};

const initUserInfo = async () => {
    const result = await AuthApi.getUserInfo();
    const { data } = result;
    indexStore.setUserInfo(data?.user);
};

const userLevel = () => {
    if (!indexStore?.roleId) return '';
    const obj: any = {
        '1': '管理员',
        '2': '开发者',
        '3': '贡献者',
        '4': '游客',
    };
    return obj[indexStore?.roleId];
};

const exportSfwToShop = (tem: any) => {
    setShop(tem?.prompt);
};

const favoriteTem = async (id: number) => {
    const result: any = await TemplateApi.likeTemplateById({
        templateId: id,
        userId: indexStore?.userId,
    });
    if (result?.code === 200) {
        indexStore.removeFavoriteById(id);
    }
};

const cardClick = (tem: any) => {
    currentTemplate.value = { ...tem, preview: tem?.imgbb_url ? tem?.imgbb_url : tem?.preview };
    showPreview.value = true;
};

const changeTabActive = (index: number) => {
    tabActive.value = index;
    if (index === 1) {
        showList.value = indexStore?.favorites;
    } else {
        showList.value = indexStore?.templates;
    }
};

const previewURL = (images = '') => {
    if (!images) return;
    const { $viewerApi } = useNuxtApp();
    $viewerApi({
        images: images.split(','),
    });
};

onMounted(() => {
    indexStore = useIndexStore();
    initUserInfo();
    showList.value = indexStore?.favorites;
});
</script>

<style scoped lang="scss">
.profile-page {
    height: 100vh;
    overflow-y: hidden;
    overflow-y: scroll;
    .content {
        padding: 20px;
    }
    .image {
        width: 100%;
        height: 320px;
        display: block;
        background: rgb(148, 148, 148);
        object-fit: cover;
        object-position: center center;
    }

    .banner-con {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 344px;
        z-index: 3;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        .banner-image {
            width: 100%;
            height: 700px;
            object-fit: cover;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: -1;
            transform: translateY(-130px);

            > img {
                width: 100%;
                height: 100%;
                filter: blur(8px);
            }
        }
    }

    .profile-con {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .avatar-con {
        height: 0px;
        transform: translateY(-120px);
        background: #fff;
        z-index: 100;
    }

    .info-con {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: hsl(var(--b1) / 1);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .tabs-con {
        margin-top: 20px;
        background: hsl(var(--b1) / 1);
        border-radius: 10px;
        height: auto;
        line-height: auto;
        padding: 10px 10px 0px 10px;
    }

    .collect-con {
        margin-top: 20px;

        .card-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>
