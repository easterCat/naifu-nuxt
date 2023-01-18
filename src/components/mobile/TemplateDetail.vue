<template>
    <div>
        <MobileAppAnimate>
            <div v-if="modelValue" class="template-preview">
                <div class="preview-wrap" @click="close"></div>
                <div class="preview-con">
                    <div class="right">
                        <div class="image-con">
                            <img :src="currentTemplate?.preview" alt="" />
                        </div>
                    </div>
                    <div v-if="currentTemplate" class="left">
                        <div v-if="`${currentTemplate?.name}`">
                            <span>name :</span>
                            <span>{{ currentTemplate?.name }}</span>
                        </div>
                        <div v-if="currentTemplate?.author">
                            <span>author :</span>
                            <span>{{ currentTemplate?.author }}</span>
                        </div>
                        <div v-if="`${currentTemplate?.like}`">
                            <span>like :</span>
                            <span>{{ currentTemplate?.like }}</span>
                        </div>
                        <div v-if="`${currentTemplate?.prompt}`">
                            <span>prompt :</span>
                            <span>
                                {{ currentTemplate?.prompt }}
                                <i-ep-copy-document
                                    @click="copy(currentTemplate?.prompt)"
                                ></i-ep-copy-document>
                            </span>
                        </div>

                        <template v-if="moreVisible">
                            <div v-if="currentTemplate?.prompt_zh">
                                <span>prompt_zh :</span>
                                <span>
                                    {{ currentTemplate?.prompt_zh }}
                                    <i-ep-copy-document
                                        @click="copy(currentTemplate?.prompt_zh)"
                                    ></i-ep-copy-document>
                                </span>
                            </div>
                            <div v-if="currentTemplate?.n_prompt">
                                <span>n_prompt :</span>
                                <span>
                                    {{ currentTemplate?.n_prompt }}
                                    <i-ep-copy-document
                                        @click="copy(currentTemplate?.n_prompt)"
                                    ></i-ep-copy-document>
                                </span>
                            </div>
                            <div v-if="currentTemplate?.n_prompt_zh">
                                <span>n_prompt_zh :</span>
                                <span>
                                    {{ currentTemplate?.n_prompt_zh }}
                                    <i-ep-copy-document
                                        @click="copy(currentTemplate?.n_prompt_zh)"
                                    ></i-ep-copy-document>
                                </span>
                            </div>
                            <div v-if="currentTemplate?.step">
                                <span>step :</span>
                                <span>{{ currentTemplate?.step }}</span>
                            </div>
                            <div v-if="currentTemplate?.sampler">
                                <span>sampler :</span>
                                <span>{{ currentTemplate?.sampler }}</span>
                            </div>
                            <div v-if="currentTemplate?.scale">
                                <span>scale :</span>
                                <span>{{ currentTemplate?.scale }}</span>
                            </div>
                            <div v-if="currentTemplate?.seed">
                                <span>seed :</span>
                                <span>{{ currentTemplate?.seed }}</span>
                            </div>
                            <div v-if="currentTemplate?.size">
                                <span>size :</span>
                                <span>{{ currentTemplate?.size }}</span>
                            </div>
                            <div v-if="currentTemplate?.model">
                                <span>model :</span>
                                <span>{{ currentTemplate?.model }}</span>
                            </div>
                            <div v-if="currentTemplate?.desc">
                                <span>desc :</span>
                                <span>{{ currentTemplate?.desc }}</span>
                            </div>
                        </template>
                    </div>
                    <div class="button-con">
                        <button class="btn btn-secondary btn-sm m-r-10" @click="close">关闭</button>
                        <button
                            class="btn btn-accent btn-sm m-r-10"
                            @click="() => (moreVisible = !moreVisible)"
                        >
                            查看更多
                        </button>
                        <button class="btn btn-primary btn-sm" @click="exportPromptToShop">
                            导入购物车
                        </button>
                    </div>
                </div>
            </div>
        </MobileAppAnimate>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['modelValue', 'currentTemplate']);

watch(
    () => props.modelValue,
    (val) => {
        val && stop();
    },
);

const { setShop } = useShop();
const emits = defineEmits(['update:modelValue']);
const { copy } = useCopy();

const moreVisible = ref(false);

const close = () => {
    move();
    emits('update:modelValue', false);
};
const stop = () => {
    const mo = function (e: any) {
        e.preventDefault();
    };
    document.body.style.overflowY = 'hidden';
    document.addEventListener('touchmove', mo, false); // 禁止页面滑动
};

const move = () => {
    const mo = function (e: any) {
        e.preventDefault();
    };
    document.body.style.overflowY = ''; // 出现滚动条
    document.removeEventListener('touchmove', mo, false);
};

const exportPromptToShop = () => {
    setShop(props.currentTemplate?.prompt);
};

onMounted(() => {
    move();
});
</script>

<style lang="scss" scoped>
.template-preview {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1001;
    display: flex;
    justify-content: center;

    .preview-wrap {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        --tw-bg-opacity: 0.4;
        background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
    }

    .preview-con {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        top: 30px;
        bottom: 30px;
        z-index: 2;
        border-radius: 10px;
        padding: 15px;
        --tw-bg-opacity: 1;
        background-color: hsl(var(--b1) / var(--tw-bg-opacity));
        box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 20px;
        overflow-x: hidden;
        overflow-y: auto;

        .left {
            width: 100%;
            height: auto;
            > div {
                width: 100%;
                height: auto;
                line-height: 20px;
                padding: 2px 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }
        }

        .right {
            width: 100%;
            height: 100%;
        }

        .button-con {
            width: 100%;
            height: 100px;
            padding-top: 20px;
            display: flex;
            justify-content: center;
        }

        span:nth-child(1) {
            width: 100%;
            display: inline;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 2px;
        }

        span:nth-child(2) {
            width: 100%;
            font-size: 14px;
            > span {
                font-size: 14px;
                transform: translate3d(4px, 4px, 4px);
                cursor: pointer;
            }

            svg {
                display: inline;
            }
        }

        .image-con {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;

            img {
                width: 100%;
                height: 100%;
            }
        }

        img {
            max-height: calc(100% - 10px);
            border-radius: 10px;
        }
    }
}
</style>
