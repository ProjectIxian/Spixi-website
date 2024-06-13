<script setup>
defineProps({
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    version: {
        type: String
    },
    link: {
        type: {
            url: String,
            text: String
        },
        default: () => ({ url: "", text: "" })
    },
    store: {
        type: {
            image: String,
            url: String
        },
        default: () => ({ image: "", url: "" })
    }
})
</script>
<template>
    <div class="bg-white dark:bg-[#1B232B] p-6 rounded-[40px] w-full">
        <h3 class="text-3xl font-lexend font-semibold text-black dark:text-spixi-dark flex flex-row gap-3 items-center">
            {{ title }} 
            <span v-if="typeof version !== 'undefined'" class="text-sm bg-[#6BFCC8] py-1 px-2 font-normal items-center rounded text-spixi">{{ version }}</span>
        </h3>
        <p class="text-base text-spixi dark:text-spixi-dark my-4">
            {{ description }}
        </p>
        <div class="flex flex-col md:flex-row gap-1 md:gap-3 items-center">
            <NuxtLink v-if="store.url" :to="store.url" class="flex items-center py-4">
                <img :src="store.image" alt="Google Play" class="w-[150px] h-auto" />
            </NuxtLink>
            <p v-if="store.url && link.url" class="text-spixi dark:text-spixi-dark font-medium">
                or
            </p>
            <NuxtLink v-if="link.url" :to="link.url" class="border border-spixi dark:border-white text-spixi hover:bg-[#1D2329] hover:text-spixi-dark dark:text-spixi-dark dark:hover:bg-spixi-dark dark:hover:text-[#1D2329] font-medium rounded-lg my-4 py-2 px-6">
                {{ link.text }}
            </NuxtLink>
        </div>
    </div>
</template>