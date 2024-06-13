<script setup>
const props = defineProps({
    title: String,
    content: String,
    image: String
})

let images = {
    light: props.image.replace('.png', 'Light.png'),
    dark: props.image.replace('.png', 'Dark.png')
}
</script>
<template>
    <div class="flex flex-col md:flex-row items-start justify-evenly py-16 gap-10">
        <div class="md:w-2/5 w-full flex flex-col">
            <h2 class="text-3xl font-lexend text-black dark:text-spixi-dark leading-[40px]" v-html="title"></h2>
            <div class="text-base text-spixi dark:text-spixi-dark my-4" v-html="content"></div>
        </div>
        <div class="md:w-3/5 w-full flex justify-center">
            <NuxtImg v-if="images.light" :src="images.light" v-show="$colorMode.value === 'light'" class="w-50 md:w-full rounded-[40px]" />
            <NuxtImg v-if="images.dark" :src="images.dark" v-show="$colorMode.value === 'dark'" class="w-50 md:w-full rounded-[40px]" />
        </div>
    </div>
</template>