<template>
    <div class="banner-con">
        <div class="banner-image">
            <img src="@/assets/imgs/banner/sYw7uX71Xe.jpeg" alt="" />
        </div>
        <PcAppAnimate>
            <div class="banner-message">基于Github Page的静态资源网站,记录使用</div>
        </PcAppAnimate>
        <PcAppAnimate>
            <div class="banner-search">
                <el-input
                    v-model="input"
                    class="input-style"
                    size="large"
                    :placeholder="placeholder"
                    :prefix-icon="Search"
                    clearable
                />
                <button class="btn btn-sm btn-accent" @click="search">Search</button>
            </div>
        </PcAppAnimate>
        <PcAppAnimate>
            <div class="banner-tips">基于nuxt3,vue3,element plus</div>
        </PcAppAnimate>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

defineProps({
    placeholder: {
        type: String,
        default: '',
    },
});
const emit = defineEmits(['searchChange']);
const input = ref('');

watch(input, (newInput) => {
    emit('searchChange', newInput);
});

const search = () => {
    emit('searchChange', input.value);
};
</script>

<style lang="scss" scoped>
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
    border-radius: 10px;

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

    .banner-message {
        font-size: 32px;
        margin: 16px;
        color: #fff;
    }

    .banner-search {
        position: relative;
        max-width: 450px;
        width: 100%;
        margin: 16px;

        button {
            position: absolute;
            right: 4px;
            top: 4px;
            border-radius: 30px;
        }
    }

    .input-style {
        width: 100%;
    }

    .banner-tips {
        font-size: 16px;
        margin: 16px;
        color: #fff;
    }
}

:deep(.el-input__wrapper) {
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.7);
}

:deep(.el-input__suffix) {
    transform: translateX(-70px);
}
</style>
