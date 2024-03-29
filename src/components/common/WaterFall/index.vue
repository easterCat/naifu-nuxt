<template>
    <div class="water-fall">
        <div ref="wrapper" class="wrapper">
            <ul class="image-list">
                <li
                    v-for="(image, iIndex) in waterFallOption.images"
                    :key="image?.id"
                    ref="domRefs"
                    class="image-item"
                    :style="`width:${colWidth}px;height:${image._height}px;top:${image._top}px;left:${image._left}px;`"
                >
                    <div
                        class="image-con"
                        @mouseenter="hoverImageCon(iIndex)"
                        @mouseleave="leaveImageCon"
                    >
                        <img
                            :src="
                                image?.min_imgbb_url ? image?.min_imgbb_url : image?.minify_preview
                            "
                            :alt="image?.prompt"
                            :class="{
                                'high-image-blur': flur === 'high',
                                'low-image-blur': flur === 'low',
                            }"
                        />
                        <div v-if="hoverIndex === iIndex" class="item-wrapper">
                            <ClientOnly>
                                <div
                                    v-animate-css="{ direction: 'modifySlideInDown' }"
                                    class="icon-con"
                                >
                                    <span v-if="hoverIndex === iIndex">
                                        <i-ep-search></i-ep-search>
                                    </span>
                                    <span>
                                        <i-ep-star
                                            :class="{
                                                liked: favoriteIds?.includes(image?.id + ''),
                                            }"
                                            @click="favorite(image?.id, iIndex)"
                                        ></i-ep-star>
                                        <i-ep-more @click="preview(image)"></i-ep-more>
                                    </span>
                                </div>
                            </ClientOnly>
                            <ClientOnly>
                                <div
                                    v-animate-css="{ direction: 'modifySlideInUp' }"
                                    class="text-con"
                                >
                                    <p>{{ image?.name }}</p>
                                    <p>{{ image?.prompt }}</p>
                                </div>
                            </ClientOnly>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="spinner">
            <div v-show="loading" class="dot1"></div>
            <div v-show="loading" class="dot2"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// https://juejin.cn/post/7049942717442293773 瀑布流实现
import { ref, toRaw, Ref } from 'vue';
import lodash from 'lodash';

interface ImageItem {
    name: string;
    author: string;
    category: string;
    desc: boolean;
    height: number;
    id: number;
    like_address: string;
    like: number;
    model: boolean;
    prompt: string;
    prompt_zh: string;
    n_prompt: string;
    n_prompt_zh: string;
    seed: string;
    preview: string;
    imgbb_url: string;
    minify_preview: string;
    min_imgbb_url: string;
    sampler: string;
    skip: string;
    size: string;
    step: string;
    scale: string;
    _width?: number;
    _height?: number;
    _top?: number;
    _left?: number;
    _error?: boolean;
    _finished?: boolean;
}

interface WaterFallOption {
    images: any[];
    imagesLen: number;
    beginIndex: number;
    loadedCount: number;
    colsHeightArr: any[];
    columnNumber: number;
}

const { $store }: any = useNuxtApp();
const route = useRoute();

const props = defineProps(['datas', 'flur', 'loading', 'searchText', 'favoriteIds']);
const emits = defineEmits(['load', 'preview', 'favorite', 'loaded']);

const waterFallOption: WaterFallOption = reactive({
    images: [],
    imagesLen: 0,
    beginIndex: 0,
    loadedCount: 0,
    colsHeightArr: [],
    columnNumber: 5,
});

watch(
    () => props.datas,
    (val) => {
        if (route.name !== 'pc-home') return;
        if (val && val.length > 0) {
            if (val.length <= 50) {
                waterFallOption.beginIndex = 0;
                waterFallOption.loadedCount = 0;
            }
            waterFallOption.images = val;
            waterFallOption.imagesLen = val.length;
            preload();
        } else {
            waterFallOption.images = [];
            waterFallOption.imagesLen = 0;
            waterFallOption.beginIndex = 0;
            waterFallOption.loadedCount = 0;
            waterFallOption.colsHeightArr = [];
            pageIndex.value = 1;
            pageSize.value = 50;
        }
    },
);

const domRefs: Ref<any[]> = ref([]);
const colWidth: Ref<number> = ref(0);
const viewHeight: Ref<number> = ref(0);
const wrapper: Ref<HTMLElement | null> = ref(null);
const scrollContainer: Ref<HTMLElement> = ref(window.document.body);
const hoverIndex: Ref<number | null> = ref(null);
const pageIndex = ref(1);
const pageSize = ref(50);
const ip = ref('');
const imageList: Ref<ImageItem[]> = ref([]);

const hoverImageCon = (i: any) => {
    hoverIndex.value = i;
};

const leaveImageCon = () => {
    hoverIndex.value = null;
};

const preview = (tem: any) => {
    emits('preview', { ...tem });
};

const favorite = async (id: number, index: number) => {
    emits('favorite', id);
    const like = imageList.value[index].like;
    imageList.value[index].like = like + 1;
};

// 渲染图片
const renderImage = () => {
    if (wrapper.value) {
        wrapper.value.style.height = `${
            Math.max.apply(null, waterFallOption.colsHeightArr) + 280
        }px`;
    }

    const imgRefs = toRaw(domRefs.value);
    if (!imgRefs) return;

    for (let i = waterFallOption.beginIndex; i < waterFallOption.imagesLen; ++i) {
        const cur = imgRefs[i];
        if (!cur) return;

        const imgEl = cur.children[0].children[0];
        imgEl.style.transition = 'all 0.5s ease-in-out';
        if (imgEl.complete) {
            setTimeout(() => {
                imgEl.style.opacity = 1;
                imgEl.style.transform = 'scale(1)';
            }, 300);
        } else {
            imgEl.onload = () => {
                imgEl.style.opacity = 1;
                imgEl.style.transform = 'scale(1)';
            };
        }
    }
    // 等位置计算完毕,等待图片动画过程时结束loading
    emits('loaded');
    waterFallOption.beginIndex = imgRefs.length;
};

// 调整图片
const resizeImage = () => {
    if (wrapper.value) {
        wrapper.value.style.height = `${
            Math.max.apply(null, waterFallOption.colsHeightArr) + 280
        }px`;
    }

    const imgRefs = toRaw(domRefs.value);
    if (!imgRefs) return;
    waterFallOption.beginIndex = imgRefs.length;
};

// 瀑布流位置计算
const waterFall = () => {
    let top, left, height;

    if (waterFallOption.beginIndex === 0) {
        waterFallOption.colsHeightArr = [];
    }

    for (let i = waterFallOption.beginIndex; i < waterFallOption.imagesLen; ++i) {
        const item: ImageItem = waterFallOption.images[i];
        if (!item) return;
        height = item._height || 0;
        if (i < waterFallOption.columnNumber) {
            waterFallOption.colsHeightArr.push(height);
            top = 0;
            left = i * colWidth.value + (i % waterFallOption.columnNumber);
        } else {
            const minHeight = Math.min.apply(null, waterFallOption.colsHeightArr);
            const minIndex = waterFallOption.colsHeightArr.indexOf(minHeight);
            top = minHeight;
            left = minIndex * colWidth.value;
            waterFallOption.colsHeightArr[minIndex] += height;
        }

        item._top = top;
        item._left = left;
    }
};

const preloaded = () => {
    console.log('预加载完毕 :>> ');
    waterFall();
    imageList.value = waterFallOption.images;
    nextTick(() => {
        renderImage();
    });
};

// 预加载
const preload = () => {
    viewHeight.value = document.body.clientHeight;
    waterFallOption.images.forEach((item: ImageItem, index: number) => {
        if (index < waterFallOption.loadedCount) {
            return;
        }
        if (!item.minify_preview) {
            item._width = colWidth.value;
            item._height = colWidth.value;
            waterFallOption.loadedCount = waterFallOption.loadedCount + 1;
            if (waterFallOption.imagesLen === waterFallOption.loadedCount) {
                preloaded();
            }
        } else {
            if (item._finished) {
                waterFallOption.loadedCount = waterFallOption.loadedCount + 1;
                if (waterFallOption.imagesLen === waterFallOption.loadedCount) {
                    preloaded();
                }
                return;
            }
            const img = new Image();
            img.src = item?.min_imgbb_url ? item?.min_imgbb_url : item.minify_preview;
            img.onload = img.onerror = (e) => {
                item._width = colWidth.value;
                item._height =
                    (e as Event).type === 'load'
                        ? Math.round(colWidth.value * (img.height / img.width))
                        : img.width;

                if ((e as Event).type === 'error') {
                    item._error = true;
                }
                item._finished = true;
                waterFallOption.loadedCount = waterFallOption.loadedCount + 1;
                if (waterFallOption.imagesLen === waterFallOption.loadedCount) {
                    preloaded();
                }
            };
        }
    });
};

const resizePreloaded = () => {
    console.log('页面宽高变化预加载完毕 :>> ');
    waterFall();
    imageList.value = waterFallOption.images;
    nextTick(() => {
        resizeImage();
    });
};

// window宽高变化监听
const resizePreload = () => {
    waterFallOption.loadedCount = 0;
    waterFallOption.beginIndex = 0;
    waterFallOption.images.forEach((item: ImageItem) => {
        if (!item.minify_preview) {
            item._width = colWidth.value;
            item._height = colWidth.value;
            waterFallOption.loadedCount = waterFallOption.loadedCount + 1;
            if (waterFallOption.imagesLen === waterFallOption.loadedCount) {
                resizePreloaded();
            }
        } else {
            item._width = colWidth.value;
            item._height = Math.round(colWidth.value * ((item._height as number) / item._width));
            waterFallOption.loadedCount = waterFallOption.loadedCount + 1;
            if (waterFallOption.imagesLen === waterFallOption.loadedCount) {
                resizePreloaded();
            }
        }
    });
};

const scrollLoading = () => {
    if (props.loading) return;
    const minHeight = Math.min.apply(null, waterFallOption.colsHeightArr);
    const scrollTop = scrollContainer.value.scrollTop;
    if (scrollTop + viewHeight.value > minHeight - 20) {
        console.log('触底');
        pageIndex.value = pageIndex.value + 1;
        emits('load', { pageIndex: pageIndex.value, pageSize: pageSize.value });
    }
};

const initCol = () => {
    const width = document.body.clientWidth;
    if (width > 3500) {
        waterFallOption.columnNumber = 10;
    } else if (width < 3500 && width > 2800) {
        waterFallOption.columnNumber = 8;
    } else if (width < 2800 && width > 2200) {
        waterFallOption.columnNumber = 7;
    } else if (width < 2200 && width > 1700) {
        waterFallOption.columnNumber = 6;
    } else if (width < 1700 && width > 1380) {
        waterFallOption.columnNumber = 5;
    } else if (width < 1380 && width > 1160) {
        waterFallOption.columnNumber = 4;
    } else if (width < 1160 && width > 850) {
        waterFallOption.columnNumber = 3;
    } else if (width < 850 && width > 600) {
        waterFallOption.columnNumber = 2;
    } else {
        waterFallOption.columnNumber = 1;
    }
    colWidth.value = Math.round((document.body.clientWidth - 30) / waterFallOption.columnNumber);
};

const initResize = () => {
    initCol();
    resizePreload();
};

const init = () => {
    initCol();
    preload();
};

const debounceScroll = lodash.debounce(scrollLoading, 1500);

const debounceResize = lodash.debounce(initResize, 800);

onMounted(() => {
    ip.value = $store.get('ip');
    waterFallOption.images = props.datas ? props.datas : [];
    waterFallOption.imagesLen = props.datas?.length;
    init();
    scrollContainer.value = document.querySelector('.home-page') as HTMLElement;
    scrollContainer.value.addEventListener('scroll', debounceScroll);
    window.addEventListener('resize', debounceResize);
});

onUnmounted(() => {
    scrollContainer.value.removeEventListener('scroll', debounceScroll);
    window.removeEventListener('resize', debounceResize);
});
</script>

<style lang="scss" scoped>
.high-image-blur {
    filter: blur(8px);
}
.low-image-blur {
    filter: blur(4px);
}

.water-fall {
    min-height: 300px;
    padding-bottom: 120px;

    .spinner {
        margin: 0 auto;
        width: 80px;
        height: 80px;
        position: relative;
        text-align: center;
        animation: rotate 2s infinite linear;
    }

    .dot1,
    .dot2 {
        width: 60%;
        height: 60%;
        display: inline-block;
        position: absolute;
        top: 0;
        background-color: hsl(var(--p) / 1);
        border-radius: 100%;
        animation: bounce 2s infinite ease-in-out;
    }

    .dot2 {
        top: auto;
        bottom: 0px;
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
    }
}

.image-list {
    display: grid;
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 100%;
    .image-item {
        position: absolute;
        cursor: pointer;
        padding: 8px;
        box-sizing: border-box;
        transition: all 0.5s ease-in-out;

        .image-con {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            overflow: hidden;
            background: rgba(0, 0, 0, 0);
        }

        .image-con:hover {
            box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
                rgba(17, 17, 26, 0.1) 0px 16px 56px;
            transition: all 0.4s;
        }

        .tips {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 3;
            opacity: 100;
            font-size: 30px;
            color: blue;
        }

        .item-wrapper {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 3;
            opacity: 100;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.6) 0%,
                rgba(0, 0, 0, 0.2) 30%,
                rgba(0, 0, 0, 0.2) 70%,
                rgba(0, 0, 0, 0.6) 100%
            );
        }

        .icon-con {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            color: #fff;

            span:nth-child(1) {
                font-size: 18px;
            }

            span:nth-child(2) {
                display: flex;
                align-items: center;
                font-size: 20px;
                svg {
                    margin-right: 10px;
                }
            }
        }

        .text-con {
            position: absolute;
            bottom: 20px;
            padding: 0 10px;
            width: 100%;
            height: 45px;

            > p:nth-child(1) {
                width: 100%;
                height: 20px;
                line-height: 20px;
                font-size: 16px;
                color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            > p:nth-child(2) {
                width: 100%;
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                color: rgb(188, 188, 188);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-top: 6px;
            }
        }

        img {
            width: 100%;
            height: 100%;
            opacity: 0;
            transform: scale(0.6);
        }

        .liked {
            color: hsl(var(--p) / 1);
            font-weight: bold;
            filter: brightness(1.8);
        }
    }
}
</style>
