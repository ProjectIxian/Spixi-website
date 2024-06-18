<script setup>
const { t } = useI18n()
</script>
<template>
    <div class="bg-[#6bd3ff]/50 border dark:bg-[#2C5262]/50 border-[#30BEFE] rounded-2xl my-32">
        <div class="flex flex-col md:flex-row items-center justify-between py-7 px-10">
            <div class="md:w-2/3">
                <NuxtImg src="/img/IxianTechLight.svg" v-show="$colorMode.value === 'light'" />
                <NuxtImg src="/img/IxianTechDark.svg" v-show="$colorMode.value === 'dark'" />
                <h2 class="text-5xl font-lexend font-semibold text-black dark:text-spixi-dark pt-4">
                    {{ t('pages.home.features.tech.title') }}
                </h2>
                <p class="text-base text-spixi dark:text-spixi-dark mt-4">
                    {{ t('pages.home.features.tech.line1') }} <br>
                    {{ t('pages.home.features.tech.line2') }}
                </p>
                <div class="mt-8 mb-4">
                    <NuxtLink to="https://www.ixian.io/" target="_blank" class="border border-spixi dark:border-white text-spixi hover:bg-[#1D2329] hover:text-spixi-dark dark:text-spixi-dark dark:hover:bg-spixi-dark dark:hover:text-[#1D2329] font-medium rounded-lg py-3 px-6">
                        {{ t('pages.home.features.tech.website') }}
                    </NuxtLink>
                </div>
            </div>
            <div class="md:w-1/3 flex justify-center">
                <NuxtImg src="/img/home/IxianTechLight.svg" v-show="$colorMode.value === 'light'" />
                <NuxtImg src="/img/home/IxianTechDark.svg" v-show="$colorMode.value === 'dark'" />
            </div>
        </div>
    </div>
</template>