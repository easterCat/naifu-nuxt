<template>
    <div class="tranfer-con">
        <div class="button-con">
            <button class="btn btn-secondary btn-sm m-r-10" @click="clearPrompt">
                清空
                <Icon class="m-l-6" name="ant-design:delete-filled"></Icon>
            </button>
            <button class="btn btn-sm btn-accent m-r-10" @click="importPromptFromShop">
                购物车导入
                <Icon class="m-l-6" name="clarity:shopping-cart-solid-badged"></Icon>
            </button>
            <button class="btn btn-primary btn-sm m-r-10" @click="generateImage">
                {{ loading ? '图片生成中' : '生成' }}
                <Icon v-if="loading" class="m-l-6" name="line-md:loading-twotone-loop"></Icon>
                <Icon v-else class="m-l-6" name="entypo:brush"></Icon>
            </button>
            <button
                v-if="gImage && gImage.length > 0"
                class="btn btn-sm m-r-10"
                @click="publishTemplate"
            >
                {{ publishLoading ? '发布中' : '发布' }}
                <Icon
                    v-if="publishLoading"
                    class="m-l-6"
                    name="line-md:loading-twotone-loop"
                ></Icon>
                <Icon v-else class="m-l-6" name="ic:baseline-file-upload"></Icon>
            </button>
        </div>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <el-select
                    v-model="generateImageSize"
                    placeholder="图片大小"
                    size="large"
                    class="w-full"
                >
                    <el-option
                        v-for="item in generateImageOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <el-select
                    v-model="generateImageSampler"
                    placeholder="采样器"
                    size="large"
                    class="w-full"
                >
                    <el-option
                        v-for="item in generateImageSamplerOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-input
                    v-model="postUrl"
                    placeholder="请输入url,例如: https://cube-joan-released-philips.trycloudflare.com/generate-stream"
                    clearable
                    size="large"
                >
                    <template #prepend>
                        <el-select
                            v-model="postUrlProvide"
                            placeholder="选择接口"
                            style="width: 115px"
                            size="large"
                            @change="postUrlProvideChange"
                        >
                            <el-option
                                label="FreeApi"
                                value="https://www.naifuai.site/api/draw/ai"
                            />
                            <el-option
                                label="Colab"
                                value="https://cube-joan-released-philips.trycloudflare.com/generate-stream"
                            />
                        </el-select>
                    </template>
                </el-input>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-input
                    v-model="textArea"
                    type="textarea"
                    placeholder="请输入正面Prompt"
                    :rows="8"
                    clearable
                    :autosize="{ minRows: 8, maxRows: 8 }"
                    show-word-limit
                    maxlength="3000"
                />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-input
                    v-model="uc"
                    type="textarea"
                    placeholder="请输入负面Prompt"
                    :rows="8"
                    clearable
                    :autosize="{ minRows: 8, maxRows: 8 }"
                    show-word-limit
                    maxlength="3000"
                />
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <input
                    type="range"
                    min="1"
                    max="9"
                    :value="settingStore.drawNumber"
                    class="range range-xs"
                    step="1"
                    @change="rangeChange"
                />
                <div class="flex justify-between w-full text-xs">
                    <span>1张</span>
                    <span>2张</span>
                    <span>3张</span>
                    <span>4张</span>
                    <span>5张</span>
                    <span>6张</span>
                    <span>7张</span>
                    <span>8张</span>
                    <span>9张</span>
                </div>
            </el-col>
        </el-row>
        <div v-if="gImage" class="g-image m-t-20">
            <ul>
                <li v-for="(item, iIndex) in gImage" :key="iIndex">
                    <img :src="item" alt="" @click="previewURL(item)" />
                </li>
            </ul>
        </div>
        <PcAreaTitle title="历史记录">
            <template #titleSide>
                <span class="title-side">总数:{{ promptHistoryLength }}条</span>
            </template>
        </PcAreaTitle>
        <div v-if="promptHistory && promptHistory?.length" class="history-con">
            <div class="button-con">
                <button class="btn btn-accent btn-sm" @click="clearHistory">清空历史</button>
            </div>

            <template v-for="(history, hIndex) in promptHistory" :key="hIndex">
                <div class="history-item">
                    <p style="font-weight: bold; margin-bottom: 4px">
                        <i-ep-opportunity
                            v-if="hIndex === 0"
                            style="color: #67c23a; font-size: 12px"
                        ></i-ep-opportunity>
                        <span>{{ history?.time }}</span>
                    </p>
                    <p>{{ history?.prompt }}</p>
                    <div class="history-button">
                        <button
                            class="btn btn-sm btn-secondary m-r-10"
                            @click="removeHistory(hIndex)"
                        >
                            删除
                            <slot name="icon"><i-ep-delete class="m-l-6"></i-ep-delete></slot>
                        </button>

                        <button class="btn btn-sm btn-accent m-r-10" @click="copy(history?.prompt)">
                            复制
                            <slot name="icon">
                                <i-ep-document-copy class="m-l-6"></i-ep-document-copy>
                            </slot>
                        </button>
                        <button
                            class="btn btn-sm btn-primary"
                            @click="selectHistory(history?.prompt)"
                        >
                            选择
                            <Icon class="m-l-6" name="icon-park-solid:full-selection"></Icon>
                        </button>
                    </div>
                </div>
            </template>
        </div>
        <div v-else class="tags-con">
            <p class="no-data">暂无记录</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, Ref } from 'vue';
import dayjs from 'dayjs';
import { useSettingStore } from '@/store/setting';
import { warnNotification, notification } from '@/utils/notification';
import { useIndexStore } from '~~/src/store';

interface HistoryItem {
    prompt?: string | undefined;
    time?: string | undefined;
}
const settingStore = useSettingStore();
const { NovalApi, TemplateApi, CommonApi } = useApi();
const { $store } = useNuxtApp();
const { copy } = useCopy();
const { shop, setShop } = useShop();

const key = 'prompt_history';
const textArea: Ref<string> = ref('');
const postUrl: Ref<string> = ref('');
const postUrlProvide: Ref<string> = ref('');
const promptHistory: Ref<HistoryItem[]> = ref<HistoryItem[]>([]);
const promptHistoryLength: Ref<number> = ref(0);
const gImage: Ref<any[] | undefined> = ref([]);
const loading: Ref<boolean> = ref(false);
const publishLoading: Ref<boolean> = ref(false);
const generateImageOptions = ref([
    {
        label: '图片大小 512*768',
        value: '512*768',
    },
    {
        label: '图片大小 768*512',
        value: '768*512',
    },
    {
        label: '图片大小 512*512',
        value: '512*512',
    },
    {
        label: '图片大小 768*768',
        value: '768*768',
    },
    {
        label: '图片大小 768*1024',
        value: '768*1024',
    },
    {
        label: '图片大小 1024*768',
        value: '1024*768',
    },
]);
const generateImageSize = ref('512*768');
const generateImageSamplerOptions = ref([
    {
        label: 'k_euler_ancestral',
        value: 'k_euler_ancestral',
    },
    {
        label: 'k_euler',
        value: 'k_euler',
    },
    {
        label: 'k_lms',
        value: 'k_lms',
    },
    {
        label: 'plms',
        value: 'plms',
    },
    {
        label: 'ddim',
        value: 'ddim',
    },
]);
const generateImageSampler = ref('k_euler_ancestral');
const uc = ref(
    'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry',
);

onMounted(() => {
    getData();
    importPromptFromShop();
    postUrl.value = sessionStorage.getItem('post_url') || '';
    postUrlProvide.value = sessionStorage.getItem('post_url_provide') || '';
});

const importPromptFromShop = () => {
    textArea.value = shop.value;
    if (textArea.value) {
        saveData(textArea.value);
    }
};

const exportPromptToShop = (prompt: string) => {
    setShop(prompt);
};

const clearHistory = () => {
    removeAllHistory();
    promptHistory.value = [];
};

const clearPrompt = () => {
    textArea.value = '';
    gImage.value = [];
};

const rangeChange = (e: any) => {
    settingStore.setDrawNumber(e.target.value || 1);
};

const postUrlProvideChange = (value: string) => {
    if (value) {
        sessionStorage.setItem('post_url', value);
        sessionStorage.setItem('post_url_provide', value);
        postUrlProvide.value = value;
        postUrl.value = value;
    }
};

const generateImage = () => {
    if (postUrl.value && postUrl.value.includes('www.naifuai.site')) {
        rrythGenerate();
    } else {
        naifuGenerate();
    }
};

const rrythGenerate = async () => {
    if (loading.value) return;
    loading.value = true;
    const size = generateImageSize.value.split('*');
    const width = size[0];
    const height = size[1];

    try {
        if (settingStore.drawNumber === 1) {
            const seed = Math.floor(Math.random() * Math.pow(2, 32));
            const result = await NovalApi.rrythGenerate({
                n_samples: settingStore.drawNumber,
                sampler: generateImageSampler.value,
                postUrl: postUrl.value,
                init_images: '',
                prompt: textArea.value,
                seed,
                negative_prompt: uc.value,
                cfg_scale: 12,
                width,
                height,
                denoising_strength: 0.6,
                steps: 28,
            });
            loading.value = false;
            const images: string[] = result.data.images;
            gImage.value = images?.map((i: any) => {
                return `data:image/png;base64,${i}`;
            });
        } else {
            const results = await Promise.all(
                Array.from({ length: settingStore.drawNumber }).map((i) => {
                    const seed = Math.floor(Math.random() * Math.pow(2, 32));
                    return NovalApi.rrythGenerate({
                        n_samples: settingStore.drawNumber,
                        sampler: generateImageSampler.value,
                        postUrl: postUrl.value,
                        init_images: '',
                        prompt: textArea.value,
                        seed,
                        negative_prompt: uc.value,
                        cfg_scale: 12,
                        width,
                        height,
                        denoising_strength: 0.6,
                        steps: 28,
                    });
                }),
            );
            loading.value = false;
            const images: string[] = results.map((item) => {
                return item.data.images[0];
            });
            gImage.value = images?.map((i: any) => {
                return `data:image/png;base64,${i}`;
            });
        }
        saveData(textArea.value);
        exportPromptToShop(textArea.value);
        sessionStorage.setItem('post_url', postUrl.value);
    } catch (error) {
        loading.value = false;
    }
};

const naifuGenerate = async () => {
    if (loading.value) return;
    if (!postUrl.value) return warnNotification('地址为空');
    loading.value = true;
    const size = generateImageSize.value.split('*');
    const width = size[0];
    const height = size[1];
    const seed = Math.floor(Math.random() * Math.pow(2, 32));
    if (!postUrl.value.includes('/generate-stream')) {
        postUrl.value = `${postUrl.value}/generate-stream`;
    }
    try {
        const result = await NovalApi.generate({
            height,
            n_samples: settingStore.drawNumber,
            prompt: textArea.value,
            sampler: generateImageSampler.value,
            scale: 12,
            seed,
            steps: 28,
            uc: uc.value,
            ucPreset: 0,
            width,
            postUrl: postUrl.value,
        });
        loading.value = false;
        const base64Reg = /(?<=data:)[A-Za-z0-9\/+=]+/g;
        const arr = `${result}`.match(base64Reg);
        gImage.value = arr?.map((i: any) => {
            return `data:image/png;base64,${i}`;
        });
        saveData(textArea.value);
        exportPromptToShop(textArea.value);
        sessionStorage.setItem('post_url', postUrl.value);
    } catch (error) {
        loading.value = false;
    }
};

const saveData = (data: string) => {
    let arr = [];

    if (!data) {
        return ElMessage({
            showClose: true,
            message: '请输入prompt',
            type: 'warning',
        });
    }

    if ($store.get(key)) {
        arr = JSON.parse($store.get(key)) ?? [];
    }

    const find = arr.find((i: any) => i.prompt === data);

    if (find) {
        return;
    }

    if (arr && arr.length && arr.length > 100) {
        return ElMessage({
            showClose: true,
            message: '数据超过100条',
            type: 'warning',
        });
    }

    if (!arr.includes(data)) {
        arr.unshift({ prompt: data, time: dayjs().format('YYYY年MM月DD日 HH时mm分ss秒') });
    }

    promptHistory.value = [...arr];
    promptHistoryLength.value = promptHistory.value.length;
    $store.set(key, JSON.stringify(promptHistory.value));
};

const getData = () => {
    if ($store.get(key)) {
        promptHistory.value = JSON.parse($store.get(key));
        promptHistoryLength.value = promptHistory.value.length;
    }
};

const selectHistory = (data: any) => {
    textArea.value = data;
};

const removeHistory = (index: number) => {
    const arr = JSON.parse($store.get(key)) ?? [];
    arr.splice(index, 1);
    promptHistory.value = [...arr];
    promptHistoryLength.value = promptHistory.value.length;
    $store.set(key, JSON.stringify(promptHistory.value));
};

const removeAllHistory = () => {
    $store.set(key, '');
};

const previewURL = (image = '') => {
    const { $viewerApi } = useNuxtApp();
    $viewerApi({
        images: [image],
    });
};

const publishTemplate = async () => {
    if (publishLoading.value) return;
    publishLoading.value = true;
    // 上传当前生成的图片
    try {
        const uploads = await CommonApi.uploadImages({
            files: gImage.value?.map((i) => i.replace('data:image/png;base64,', '')).join(','),
        });
        const images = uploads.data.join(',');

        // 发布当前模版
        const result = await TemplateApi.createPersonalTemplate({
            prompt: textArea.value,
            n_prompt: uc.value,
            size: generateImageSize.value,
            scale: 12,
            sampler: generateImageSampler.value,
            step: 28,
            images,
        });
        publishLoading.value = false;
        if (result && result.code === 200) {
            return notification('创建成功');
        } else {
            publishLoading.value = false;
        }
    } catch (error) {
        console.error(error);
        publishLoading.value = false;
    }
};
</script>

<style lang="scss" scoped>
.tranfer-con {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    padding-bottom: 20px;

    .el-textarea {
        width: 100%;
        margin-bottom: 20px;
    }
}

.button-con {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 12px;
}

:deep(.el-textarea) {
    border: 1px solid #f1f1f1;
    border-radius: 10px;
}

.history-item {
    padding: 20px;
    --tw-bg-opacity: 0.15;
    background-color: hsl(var(--p) / var(--tw-bg-opacity));
    box-shadow: hsl(var(--p) / 0.05) 0px 7px 29px 0px;
    border-radius: 10px;
    margin-bottom: 12px;

    > p {
        display: flex;
        align-items: center;
    }

    .history-button {
        margin-top: 12px;
    }
}

.tag-style {
    margin: 0 8px 8px 0px;
}

.no-data {
    color: gray;
}

.title-side {
    font-size: 18px;
    color: gray;
    margin-left: 10px;
}

.g-image {
    width: 100%;
    ul {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        gap: 20px;
    }

    li {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.6s linear;
    }
}

:deep(.el-col) {
    margin-bottom: 10px;
}
</style>
