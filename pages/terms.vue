<script setup>
const { t, te } = useI18n()

useHead({
    title: t('pages.terms.title'),
    meta: [
        {
            name: 'description',
            content: t('pages.terms.title')
        }
    ]
})
</script>

<template>
    <div class="pt-[4em] pb-4 px-[2em] max-w-7xl mx-auto">
        <h1 class="font-lexend text-5xl font-semibold text-black dark:text-spixi-dark leading-normal text-center">
            {{ t('pages.terms.title') }}
        </h1>
        <h3 class="font-lexend font-semibold text-black dark:text-spixi-dark text-center mt-4" v-if="te('pages.terms.translation')">
            {{ t('pages.terms.translation') }}
        </h3>

        <div class="flex flex-col gap-4 my-16 text-[#1D2329] dark:text-[#F0F2F4] max-w-4xl mx-auto">
            <h2 class="font-semibold text-2xl">
                Important notice
            </h2>
            <p>
                www.spixi.io (the »Site«) is a website operated by IXI Labs Ltd. (»We«, »Us«, »Our«). We are a private limited company registered in the UK. These Terms of Use (the »Agreement«) defines the responsibility of Us and the person, persons or entity (»You« or »Your«) using the Site. Please note that in order to use the Site, you must be of legal age and able to enter into a binding agreement, according to applicable law. We provide the Site solely on the terms and conditions set forth in this Agreement and on the condition that You accept and comply with everything in this Agreement. Before using the Site, please read this Agreement carefully, along with it You are required to read and agree with any other policies or notices on Our Site. Together all these materials contain terms, rules and guidelines related to Your use of the Site. Should You have any questions regarding this Agreement, please contact Us at <a href="mailto:support@spixi.io" class="no-underline hover:underline text-[#24BBFF]">support@spixi.io</a>.
            </p>
            <h2 class="font-semibold text-2xl">
                Changes to this Agreement and to our Site
            </h2>
            <p>
                We amend these Terms from time to time. Please check these Terms to ensure you understand the provisions that apply. We may also update and change our Site from time to time. We do not guarantee that our Site, or any content on it, will always be available or be uninterrupted and we may suspend or withdraw or restrict the availability of all or any part of our Site at any time. You are responsible for ensuring that all persons accessing our Site through your internet connection are aware of these Terms of Use and other applicable terms and conditions, and that they comply with them.
            </p>
            <h2 class="font-semibold text-2xl">
                Materials and content available on our Site
            </h2>
            <p>
                We are the owner or the licensee of all intellectual property rights in our Site, and in the material published on it. Those works are protected by copyright laws and all such rights are reserved. You may print off one copy, and download extracts, of any page(s) for your personal use and you may draw the attention of others within your organisation to content posted on our Site. You must not modify materials you have printed off or downloaded, and you must not use illustrations, photographs, video or audio sequences separately from accompanying text. Our status (and that of any identified contributors) as authors of content on our Site must always be acknowledged. You must not use any part of the content on our Site for commercial purposes without obtaining a licence to do so from us or our licensors via support@spixi.io. Although we make reasonable efforts to update the information on our Site, we make no representations, warranties or guarantees, whether expressed or implied, that the content on our Site is accurate, complete or up to date.
            </p>
            <h2 class="font-semibold text-2xl">
                Third party websites
            </h2>
            <p>
                Where our Site contains links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them. We have no control over the contents of those sites or resources. You are encouraged to inform yourself regarding the terms of use, privacy policy and other relevant policies of the websites you are linked to.
           </p>
            <h2 class="font-semibold text-2xl">
                Disclaimer and limitation of liability
            </h2>
            <p>
                We exclude all implied conditions, warranties, representations or other terms that may apply to our Site or any content on it. We will not be liable to you for loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, arising under or in connection with use of, or inability to use, our Site or use of or reliance on any content displayed on our Site. In particular, we will not be liable for loss of profits, sales, business, or revenue; business interruption; loss of anticipated savings; loss of business opportunity, goodwill or reputation; or any indirect or consequential loss or damage. Please note that we only provide our Site for domestic and private use. You agree not to use our Site for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity. We do not guarantee that our Site will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programs and platform to access our Site. You should use your own virus protection software. You must not misuse our Site by knowingly introducing viruses, trojan horses, worms, logic bombs or other malicious or technologically harmful material. You must not attempt to gain unauthorized access to our Site, the server on which our Site is stored or any server, computer or database connected to our Site. You must not attack our Site via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under relevant laws and such breaches will be reported to the relevant law enforcement authorities. In the event of such a breach, your right to use our Site will cease immediately.
            </p>
            <h2 class="font-semibold text-2xl">
                Use of Spixi software
            </h2>
            <p>
                Spixi and its code is made available under the open source MIT licence. The code is available for download on our Github page. You must read and agree with the licence available on Github repository of Ixian.
            </p>
            <h2 class="font-semibold text-2xl">
                Governing Law
            </h2>
            <p>
                This Agreement, its subject matter and its formation (and any non-contractual disputes or claims) are governed by the laws of the United Kingdom and the exclusive jurisdiction of the courts of the United Kingdom.
            </p>
        </div>
    </div>
</template>