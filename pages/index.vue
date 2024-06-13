<script setup>
const { t } = useI18n()

useHead({
    title: "Spixi",
    meta: [
        {
            name: 'description',
            content: "Spixi"
        }
    ]
})
</script>

<template>
    <div>
        <div class="bg-gradient-to-b from-[#00000000] to-[#1A6FBD59] dark:to-[#3770a659] h-max flex justify-center">
            <div class="inline-flex flex-col mt-16 gap-16 lg:mx-266px items-center justify-between">
                <div class="flex flex-col items-center">
                    <h1 class="text-6xl font-medium font-lexend text-black dark:text-spixi-dark text-center tracking-hero">
                        {{ t('pages.home.hero.connectwith') }} <span class="text-[#24BBFF]">{{ t('pages.home.hero.confidence') }}</span>
                    </h1>
                    <p class="text-[18px] text-spixi dark:text-spixi-dark text-center mt-4 md:w-[604px]">
                        {{ t('pages.home.hero.subtitle') }}
                    </p>
                    <div class="mt-6 flex items-center gap-3 font-medium">
                        <NuxtLink to="/download" class="bg-[#6BFCC8] hover:bg-[#47D4AA] text-black rounded-lg py-3 px-8">
                            {{ t('pages.misc.tryit') }}
                        </NuxtLink>
                        <NuxtLink to="/howitworks" class="border border-spixi dark:border-white text-spixi hover:bg-[#1D2329] hover:text-spixi-dark dark:text-spixi-dark dark:hover:bg-spixi-dark dark:hover:text-[#1D2329] rounded-lg py-3 px-8">
                            {{ t('pages.misc.learnmore') }}
                        </NuxtLink>
                    </div>
                </div>
                <NuxtImg src="/img/home/HeroLight.png" v-show="$colorMode.value === 'light'" class="content-end w-[714px]" />
                <NuxtImg src="/img/home/HeroDark.png" v-show="$colorMode.value === 'dark'" class="content-end w-[714px]" />
            </div>
        </div>
        <div class="pt-[7.5em] pb-4 px-[2em] max-w-7xl mx-auto">
            <h1 class="font-lexend text-5xl font-semibold text-black dark:text-spixi-dark leading-normal">
                {{ t('pages.home.features.nocompromise') }} <br>
                <span class="text-[#07C788]">{{ t('pages.home.features.security') }}</span> {{ t('pages.home.features.and') }} <span class="text-[#07C788]">{{ t('pages.home.features.privacy') }}</span>.
            </h1>
            <div class="flex flex-col md:flex-row items-start gap-[40px] w-full justify-between pt-32">
                <HomeFeatures 
                    class="md:w-1/3 fill-[#FFF]"
                    image="/img/home/Privacy.svg" 
                    :title="t('pages.home.features.e2etitle')"
                    :description="t('pages.home.features.e2edesc')" />
                
                <HomeFeatures 
                    class="md:w-1/3"
                    image="/img/home/Encryption.svg" 
                    :title="t('pages.home.features.lastencryptiontitle')"
                    :description="t('pages.home.features.lastencryptiondesc')" />
                
                <HomeFeatures 
                    class="md:w-1/3"
                    image="/img/home/Reliable.svg" 
                    :title="t('pages.home.features.reliabletitle')"
                    :description="t('pages.home.features.reliabledesc')" />
            </div>
    
            <HomeIxianTech />
    
            <div class="flex flex-col md:flex-row items-start justify-around gap-12">
                <div class="md:w-1/3">
                    <h2 class="text-5xl font-lexend font-semibold text-black dark:text-spixi-dark leading-[80px]">
                        {{ t('pages.home.features.whattodo') }} <span class="text-[#30BEFE]">Spixi</span>.
                    </h2>
                    <div class="my-4">
                        <NuxtLink to="/howitworks" class="border border-spixi dark:border-white text-spixi hover:bg-[#1D2329] hover:text-spixi-dark dark:text-spixi-dark dark:hover:bg-spixi-dark dark:hover:text-[#1D2329] font-medium rounded-lg py-3 px-6">
                            {{ t('pages.home.features.learnhowitworks') }}
                        </NuxtLink>
                    </div>
                </div>
                <div class="md:w-2/3 flex flex-col gap-10">
                    <div class="flex flex-col md:flex-row gap-10">
                        <HomeExtra 
                            :title="t('pages.home.features.decentralizedtitle')"
                            :description="t('pages.home.features.decentralizeddesc')"
                            image="/img/home/Decentralized.svg" />
    
                        <HomeExtra 
                            :title="t('pages.home.features.paymentstitle')"
                            :description="t('pages.home.features.paymentsdesc')"
                            image="/img/home/Payments.svg" />
                    </div>
                    
                    <div class="flex flex-col md:flex-row gap-10">
                        <HomeExtra 
                            :title="t('pages.home.features.onlinetitle')"
                            :description="t('pages.home.features.onlinedesc')"
                            image="/img/home/Online.svg" />
    
                        <HomeExtra 
                            :title="t('pages.home.features.appstoretitle')"
                            :description="t('pages.home.features.appstoredesc')"
                            image="/img/home/AppStore.svg" 
                            comingSoon /> 
                    </div>
                </div>
            </div>
    
            <SpixiSummary />
            
        </div>
    </div>
</template>