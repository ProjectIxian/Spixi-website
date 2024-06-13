<script setup>
const { t } = useI18n()
</script>
<template>
    <div class="bg-[#6BF5CC] rounded-2xl my-32">
        <div class="flex flex-col md:flex-row items-center justify-between pt-5 px-10">
            <div class="md:w-1/2 flex flex-col">
                <h2 class="text-5xl font-lexend font-semibold text-black">
                    {{ t('pages.home.features.start') }}
                </h2>
                
                <div class="my-4">
                    <p class="text-base text-black" v-html="t('pages.home.features.starthelp')"></p>
                </div>
                
                <div class="my-4">
                    <NuxtLink to="/download" class="border border-spixi text-black hover:bg-[#47D4AA] font-medium rounded-lg py-3 px-8">
                        {{ t('pages.home.features.downloadnow') }}
                    </NuxtLink>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-end">
                <NuxtImg class="w-[432px]" src="/img/SpixiSummaryLight.png" v-show="$colorMode.value === 'light'" />
                <NuxtImg class="w-[432px]" src="/img/SpixiSummaryDark.png" v-show="$colorMode.value === 'dark'" />
            </div>
        </div>
    </div>
</template>