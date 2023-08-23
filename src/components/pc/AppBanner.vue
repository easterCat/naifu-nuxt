<template>
    <div class="banner-con">
        <div class="banner-image">
            <img src="@/assets/imgs/banner/sYw7uX71Xe.jpeg" alt="" />
        </div>
        <PcAppAnimate>
            <div class="banner-message">基于Github Page的静态资源网站</div>
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
                    @focus="() => (tagDropVisible = true)"
                    @blur="() => (tagDropVisible = false)"
                />
                <button class="btn btn-sm btn-accent" @click="search">Search</button>
                <div v-if="tagDropVisible" class="drop-down">
                    <div
                        v-for="(tag, index) in tags"
                        :key="index"
                        class="badge mr-1"
                        @click="selectTag(tag)"
                    >
                        {{ tag.tag_name }} {{ tag.tag_count }}
                    </div>
                </div>
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
import lodash from 'lodash';

defineProps({
    placeholder: {
        type: String,
        default: '',
    },
});
const { DanbooruApi } = useApi();
const emit = defineEmits(['searchChange']);
const input = ref('');
const tagDropVisible = ref(false);
const tags: Ref<any[]> = ref([]);

watch(input, (newInput) => {
    emit('searchChange', newInput);
    getTagRecomand({ target: { value: newInput } });
});

const search = () => {
    emit('searchChange', input.value);
};

const getTagRecomand = lodash.debounce(async (e: any) => {
    console.log(e.target.value);
    const result = await DanbooruApi.getBooruTags({ searchText: e.target.value });
    if (result.tags && result.tags.length > 0) {
        tagDropVisible.value = true;
        tags.value = result.tags;
    }
}, 1300);

const selectTag = (tag: any) => {
    input.value = tag.tag_name;
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

        .drop-down {
            position: absolute;
            top: 45px;
            left: 0;
            right: 0;
            border-radius: 8px;
            width: 100%;
            min-height: 80px;
            max-height: 120px;
            height: auto;
            padding: 10px;
            background-color: hsl(var(--b2, var(--b1)) / 1);
            transition: height 1s ease;
            overflow: auto;
        }

        .badge {
            cursor: pointer;
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
