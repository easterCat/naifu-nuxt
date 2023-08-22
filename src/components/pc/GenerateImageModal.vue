<template>
    <div>
        <PcAppAnimate>
            <div v-if="modelValue" class="template-preview">
                <div class="preview-wrap" @click="close"></div>
                <div class="preview-con">
                    <PcGenerateImage
                        v-animate-css="{ direction: 'modifySlideInUp', delay: 60 }"
                    ></PcGenerateImage>
                </div>
            </div>
        </PcAppAnimate>
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

const exportShop = () => {
    setShop(props.currentTemplate?.prompt);
    close();
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
        display: flex;
        justify-content: center;
        position: absolute;
        top: 30px;
        bottom: 30px;
        z-index: 2;
        width: 90%;
        max-width: 1920px;
        border-radius: 10px;
        padding: 30px;
        --tw-bg-opacity: 1;
        background-color: hsl(var(--b1) / var(--tw-bg-opacity));
        box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 20px;
        overflow: auto;
    }
}
</style>
