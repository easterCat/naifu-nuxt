<template>
    <div>
        <PcAppAnimate name="fadeIn">
            <div v-if="modelValue" class="shop-card">
                <div class="shop-card-header">
                    <span>
                        <PcAnimationButton
                            :button-style="1"
                            class="btn-accent"
                            button-text="清空购物车"
                            button-size="large"
                            @submit="clearShop"
                        ></PcAnimationButton>
                        <PcAnimationButton
                            :button-style="1"
                            class="btn-accent"
                            button-text="复制标签"
                            button-size="large"
                            @submit="copyShop"
                        ></PcAnimationButton>
                        <PcAnimationButton
                            :button-style="1"
                            class="btn-accent"
                            button-text="新增标签"
                            button-size="large"
                            @submit="createNewShopItem"
                        ></PcAnimationButton>
                        <PcAnimationButton
                            :button-style="1"
                            class="btn-accent"
                            button-text="生成图片"
                            button-size="large"
                            @submit="generateImage"
                        ></PcAnimationButton>
                    </span>
                    <i-ep-close-bold @click="shopEvent"></i-ep-close-bold>
                </div>
                <div class="shop-card-con">
                    <div class="left">
                        <draggable
                            v-model="shopList"
                            :component-data="{ name: 'list' }"
                            :drag-options="dragOptions"
                            :item-key="
                            (e:any) => {
                                createKey(e);
                            }
                        "
                        >
                            <template #item="{ element }">
                                <div class="shop-item">
                                    <div>
                                        <span>{{ element.text }}</span>
                                        <i-ep-plus
                                            class="add"
                                            @click="addOneCircle(element.text)"
                                        ></i-ep-plus>
                                        <i-ep-minus
                                            class="minus"
                                            @click="removeOneCircle(element.text)"
                                        ></i-ep-minus>
                                        <i-ep-delete-filled
                                            class="remove"
                                            @click="removeShopByName(element.text)"
                                        ></i-ep-delete-filled>
                                    </div>
                                </div>
                            </template>
                        </draggable>
                    </div>
                    <div v-if="gImage" class="right"><img :src="gImage" alt="" /></div>
                </div>
            </div>
        </PcAppAnimate>
    </div>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable';
import { uuid } from 'vue-uuid';

defineProps(['modelValue']);
const $emit = defineEmits(['update:modelValue']);

const dragOptions = reactive({
    animation: 400,
    group: 'people',
    disabled: false,
    ghostClass: 'ghost',
});
const {
    shop,
    shopList,
    onlySetShop,
    initShop,
    clearShop,
    removeShopByName,
    copyShop,
    addOneCircle,
    removeOneCircle,
    createNewShopItem,
} = useShop();
const gImage = ref('');

watch(shopList, (newValue) => {
    onlySetShop(newValue.map((i: any) => i.text || '').join(', '));
});

const shopEvent = () => {
    $emit('update:modelValue', false);
};

const createKey = (e: any) => {
    return `${e}-${uuid.v4()}`;
};

const generateImage = async () => {
    // const { NovalApi } = useApi();
    // const result = await NovalApi.generate({
    //     height: 768,
    //     n_samples: 1,
    //     prompt: shop.value,
    //     sampler: 'k_euler_ancestral',
    //     scale: 12,
    //     seed: 2081400182,
    //     steps: 28,
    //     uc: 'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry',
    //     ucPreset: 0,
    //     width: 512,
    // });
    // console.log(result);
    // const data = result.split('data:')[1];
    // gImage.value = data;
};

onMounted(() => {
    initShop();
});
</script>

<style lang="scss" scoped>
header {
    position: sticky;
    top: 0px;
    z-index: 1001;
    display: flex;
    background: #fff;
    box-shadow: rgba(17, 17, 26, 0.15) 0px 3px 8px;

    .header-menu {
        flex: 1;
    }

    .user-info {
        width: 260px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 20px;
    }
}
.shop-card {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3001;
    background: #fff;
    padding: 30px 40px;
    overflow-y: auto;

    .shop-card-header {
        display: flex;
        justify-content: space-between;
        font-size: 28px;
        color: rgb(97, 96, 96);

        svg {
            cursor: pointer;
        }
    }

    .shop-card-con {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        .left {
            flex: 1;
            > div {
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
            }
        }

        .right {
            flex: 1;
        }
    }

    .shop-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        color: #666;
        background: linear-gradient(145deg, rgb(233, 233, 233) 0%, rgba(233, 233, 233, 0.7) 100%);
        margin-right: 16px;
        margin-bottom: 16px;
        border-radius: 10px;
        box-shadow: rgba(17, 17, 26, 0.15) 0px 3px 8px;
        cursor: pointer;
        font-weight: bold;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        svg {
            font-size: 14px;
            margin-left: 8px;
            transform: translateY(3px);
        }
    }
}

:deep(.el-menu--horizontal) {
    border-bottom: none;
}
</style>
