<script setup>

const { t } = useI18n()

useHead({
    title: t('pages.howitworks.title') + " | Spixi",
    meta: [
        {
            name: 'description',
            content: t('pages.howitworks.subtitle1')
        }
    ]
})
</script>

<template>
    <div class="pt-[4em] pb-4 px-[2em] max-w-7xl mx-auto">

        <div class="bg-white dark:bg-[#1B232B] rounded-2xl">
            <div class="flex flex-col md:flex-row items-center justify-between py-7 px-10 gap-10">
                <div class="md:w-1/2 inline-flex flex-col h-52 justify-between item">
                    <h2 class="text-5xl font-lexend font-semibold text-black dark:text-spixi-dark pt-4">
                        {{ t('pages.howitworks.title') }}
                    </h2>
                    <p class="text-base text-spixi dark:text-spixi-dark mt-4 w-auto md:w-[500px]">
                        {{ t('pages.howitworks.subtitle1') }} <br>
                        {{ t('pages.howitworks.subtitle2') }}
                    </p>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <NuxtImg src="/img/howitworks/HeroLight.svg" v-show="$colorMode.value === 'light'" class="w-64" />
                    <NuxtImg src="/img/howitworks/HeroDark.svg" v-show="$colorMode.value === 'dark'" class="w-64" />
                </div>
            </div>
        </div>

        <Hiw 
            :title="t('pages.howitworks.hiw1.title')"
            :content="t('pages.howitworks.hiw1.content')"
            image="/img/howitworks/Create.png"
        />

        <Helper
            :title="t('pages.howitworks.helper')"
            :subtitle="t('pages.howitworks.helperdesc')"
            />

        <Hiw
            :title="t('pages.howitworks.hiw2.title')"
            :content="t('pages.howitworks.hiw2.content')"
            image="/img/howitworks/Address.png"
        />

        <Hiw 
            :title="t('pages.howitworks.hiw3.title')"
            :content="t('pages.howitworks.hiw3.content')"
            image="/img/howitworks/Contact.png"
        />

        <Hiw 
            :title="t('pages.howitworks.hiw4.title')"
            :content="t('pages.howitworks.hiw4.content')"
            image="/img/howitworks/Send.png"
        />

        <h2 class="text-5xl font-lexend text-black dark:text-spixi-dark py-4 mt-10 text-center" id="faq">
            FAQ
        </h2>

        <div class="w-full flex justify-center">
            <div class="w-9/12">
                <Faq
                    v-for = "i in 15"
                    :key = "i"
                    :id = "`faq${i}`"
                    :question = "t(`pages.howitworks.faq.q${i}`)"
                    :answer = "t(`pages.howitworks.faq.a${i}`) ? t(`pages.howitworks.faq.a${i}`) : undefined"
                />
            </div>
        </div>

        <SpixiSummary />


    </div>
</template>