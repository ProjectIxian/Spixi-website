<script setup>
const { t, te } = useI18n()

useHead({
    title: t('pages.privacy.title') + " | Spixi",
    meta: [
        {
            name: 'description',
            content: t('pages.privacy.title')
        }
    ]
})

// Lets organize the content, so we can use it in the template, like this:
// <h1>{{ privacy.tN }}</h1>
// <p>{{ privacy.pN.M }}</p>
// <ul v-if="privacy.pN.M === 'list'"> -- only way to check if it's a list is to check if it's a string, if it is, it's a paragraph, if it's an object, it's a list
//     <li v-for="item in privacy.pN.M">
//         {{ item }}
//     </li>
// </ul>
// <p v-else>{{ privacy.pN.M }}</p>

</script>

<template>
    <div class="pt-[4em] pb-4 px-[2em] max-w-7xl mx-auto">
        <h1 class="font-lexend text-5xl font-semibold text-black dark:text-spixi-dark leading-normal text-center">
            {{ t('pages.privacy.title') }}
        </h1>
        <h3 class="font-lexend font-semibold text-black dark:text-spixi-dark text-center mt-4" v-if="te('pages.privacy.translation')">
            {{ t('pages.privacy.translation') }}
        </h3>

        <div class="flex flex-col gap-4 my-16 text-[#1D2329] dark:text-[#F0F2F4] max-w-4xl mx-auto">
            <p>
                This privacy policy (“Policy”) describes how IXI Labs Ltd. (“we”,“our”, “us”) collects, uses, shares, and stores personal information of Spixi services, including any associated features or functionalities, websites and user interfaces, as well as all content and software applications associated with our services (collectively, the “Services”).
            </p>
            <p>
                By using the Services, you accept the terms of this Policy and our Terms & Conditions (“Terms”), and consent to our collection, use, disclosure, and retention of your information as described in this Policy. If you have not done so already, please also review our Terms. The Terms contain provisions that limit our liability to you and require you to resolve any dispute with us on an individual basis and not as part of any class or representative action. IF YOU DO NOT AGREE WITH ANY PART OF THIS PRIVACY POLICY OR OUR TERMS, THEN PLEASE DO NOT USE ANY OF THE SERVICES.
            </p>
            <p>
                Please note that this Policy does not apply to information collected through third-party websites or sites that you may access through the Services, or that you submit to us through email, text message or other electronic message or offline.
            </p>
            <p>
                If you are engaging with the Services from the European Union (EU), see our Notice to EU Data Subjects for our legal bases for processing and transfer of your data.
            </p>
            <h2 class="font-semibold text-2xl">
                Your personal information and our website
            </h2>
            <p>
                We get information about you in a range of ways.
            </p>
            <h3 class="font-semibold text-xl">
                Information You Give Us.
            </h3>
            <p>
                Information we collect from you includes:
            </p>
            <ul class="list-disc pl-8">
                <li>
                    User information, such as your name, display name, domain name or social media account handles when you sign up for use of our Services;
                </li>
                <li>
                    Feedback and correspondence, such as information you provide in your responses to surveys, when you participate in market research activities, report a problem with Services, receive customer support or otherwise correspond with us;
                </li>
                <li>
                    Anonymized usage information, such as information about how you use the Services and interact with us;
                </li>
            </ul>
            <h3 class="font-semibold text-xl">
                Information We Get From Others.
            </h3>
            <p>
                We may get information about you from other third party sources and we may add this to information we get from your use of the Services.
            </p>
            <h3 class="font-semibold text-xl">
                Information Automatically Collected. 
            </h3>
            <p>
                We may automatically record certain information about how you use our Services (we refer to this information as “Log Data“). Log Data may include information such as a user’s Internet Protocol (IP) address, device and browser type, the pages or features of our Services which a user browsed and the time spent on those pages or features, the frequency with which the Services are used by a user, search terms, the links on our sites that a user clicked on or used, referral url, and other statistics. We use this information to administer the Services and we analyze (and may engage third parties to analyze) this information to improve and enhance the Services by expanding features and functionality and tailoring to our users’ needs and preferences.
            </p>
            <p>
                We may use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, and to gather demographic information about our user base as a whole. Users can control the use of cookies at the individual browser level. For more information, please see the section entitled “Cookies Policy” below.
                <br>
                We may also use data analytics sites to help us offer you an optimized user experience.
            </p>
            <h2 class="font-semibold text-2xl">
                How do we use the information we collect
            </h2>
            <p>
                The data we collect is used only to the extent necessary to provide you with full scope of our services and analyze how you use our site, so we can provide you with a better experience when visiting our site in the future.
            </p>
            <p>
                The personal data we collect will be used for the following purposes:
            </p>
            <ul class="list-disc pl-8">
                <li>
                    Certain information is used to identify you.
                </li>
                <li>
                    Certain information is used to contact you and/or provide you with information regarding SPIXI in the form of a weekly newsletter, send you promotional information about our services, special offers and other interesting information.
                </li>
                <li>
                    Certain information is used to analyze your use of our website, which pages you visit, the time and date of your visit, the time you spent on those pages and other statistics relevant to provide you with optimized experience.
                </li>
            </ul>
            <h3 class="font-semibold text-xl">
                Sharing of Your Personal Information
            </h3>
            <p>
                We do not share or sell the personal information that you provide us with other organizations without your express consent, except as described in this Policy. We disclose personal information to third parties under the following circumstances:
            </p>
            <ul class="list-disc pl-8">
                <li>
                    We may disclose your personal information to our affiliates for purposes consistent with this Policy.
                </li>
                <li>
                    We may share personal information for legal, protection, and safety purposes to comply with laws.
                </li>
            </ul>
            <p>
                If you are engaging with the Services from the European Union (EU), see our Notice to EU Data Subjects for our legal bases for processing and transfer of your data.
            </p>
            <h2 class="font-semibold text-2xl">
                Legal basis for data collecting and processing
            </h2>
            <p>
                The processing of Personal Data is performed in accordance with privacy rights and regulations following the EU Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 (the Directive), and the implementations of the Directive in local legislation. From May 25th, 2018,
            </p>
            <p>
                the Directive and local legislation based on the Directive will be replaced by the Regulations (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of Personal Data and on the free movement of such data, known as the
            </p>
            <p>
                General Data Protection Regulation (GDPR), and our processing will take place in accordance with the GDPR. Additional information regarding GDPR can be found at the following link: <a href="https://gdpr-info.eu/" class="no-underline hover:underline text-[#24BBFF]">https://gdpr-info.eu/</a>
            </p>
            <h3 class="font-semibold text-xl">
                Notice to California Residents
            </h3>
            <p>
                Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice: California residents may reach the Complaint Assistance Unit of the Division of Consumer Site of the California Department of Consumer Affairs by mail at 1625 North Market Blvd., Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.
            </p>
            <h2 class="font-semibold text-2xl">
                Your rights
            </h2>
            <p>
                Here is a list of the rights that all individuals have under data protection laws. They don't apply in all circumstances. When using our website, you have the following rights guaranteed by applicable law in regard to your personal information and data:
            </p>
            <ul class="list-disc pl-8">
                <li>
                    The right to request access to your personal data
                </li>
                <li>
                    The right to amend and/or delete your personal data
                </li>
                <li>
                    The right to restrict the processing of your data
                </li>
                <li>
                    The right to data portability
                </li>
                <li>
                    The right to object to the processing of your personal data and to unsubscribe
                </li>
                <li>
                    The right to withdraw your consent at any time
                </li>
                <li>
                    Conditions and/or limitations on your rights
                </li>
            </ul>
            <p>
                If you have any questions regarding your rights or if any of the information that you have provided us with has changed, e.g. if you change your email address or other contact details, please let us know by sending an email outlining the changes to: <a href="mailto:suupport@spixi.io" class="no-underline hover:underline text-[#24BBFF]">support@spixi.io</a>.
            </p>
            <h2 class="font-semibold text-2xl">
                How long is your personal information retained by us?
            </h2>
            <p>
                We will not retain data longer than is necessary to fulfil the purposes for which it was obtained for or as required by applicable laws or regulations. When legal provisions require it, all Personal Data collected through the platform will be deleted, as required by applicable law.
            </p>
            <p>
                Every user or visitor can invoke the right to be forgotten at any time. Users and visitors can request a list of their personal data obtained and held by us. In case you wish to obtain such data send an email to <a href="mailto:suupport@spixi.io" class="no-underline hover:underline text-[#24BBFF]">support@spixi.io</a>. You will receive the list within one month after we have received your request. 
            </p>
            <h2 class="font-semibold text-2xl">
                Use of Spixi and Privacy
            </h2>
            <p>
                Spixi is a blockchain based service, which includes interaction with your Spixi Client. For Spixi Terms and Conditions as well as Privacy Policy please visit the Spixi Website at <a href="https://www.spixi.io" class="no-underline hover:underline text-[#24BBFF]">www.spixi.io</a>.
            </p>
            <p>
                To interact with Spixi no personal information is required at any point. You choose to use the Spixi services which are offered as is. The only identifying information includes but is not limited to your Spixi Address, which is a blockchain address and is pseudonymous. Parts or all of information can be viewed publicly due to the nature of the blockchain and distributed ledger technology. The information recorded on the blockchain may be public and difficult or impossible to remove or delete. All Spixi users are encouraged to introduce themselves to the core principles of privacy and transparency of blockchains.
            </p>
            <h2 class="font-semibold text-2xl">
                Changes to this privacy policy
            </h2>
            <p>
                This Privacy Policy may be updated. We will inform you of any changes and updates by posting the new Privacy Policy on this page. We do however advise you to check this page for any changes periodically. This Privacy Policy and all its subsequent changes are effective immediately, after they are posted on this webpage.
            </p>
            <h2 class="font-semibold text-2xl">
                Cookies
            </h2>
            <p>
                This website, like most other websites, uses cookies. Cookies are messages that web servers send to your web browser when you visit Internet sites, and it helps us provide you with a customized experience while enhancing the functionality of the website. You can freely prevent these cookies from being stored, however this may downgrade certain elements of this websites' functionality. For more general information on cookies see <a href="https://en.wikipedia.org/wiki/HTTP_cookie" class="no-underline hover:underline text-[#24BBFF]"> https://en.wikipedia.org/wiki/HTTP_cookie</a>.
            </p>
            <p>
                You can at any time change or withdraw your consent from the Cookie Policy page on our website. If you fail to receive any information about cookies and the use of cookies on our website from this document, please contact us at <a href="mailto:support@spixi.io" class="no-underline hover:underline text-[#24BBFF]">support@spixi.io</a>.
            </p>
            <h3 class="font-semibold text-xl">
                Cookies on our website
            </h3>
            <p>
                This site uses different types of cookies:
            </p>
            <ul class="list-disc pl-8">
                <li>
                    First-party cookies - placed by us, to help us provide you with a personalized experience.
                </li>
                <li>
                    Third-party cookies - placed by domains other than Us.
                </li>
            </ul>
            <p>
                Based on expiry times:
            </p>
            <ul class="list-disc pl-8">
                <li>
                    Session - cookies are deleted from your computer when you close your browser.
                </li>
                <li>
                    Permanent - cookies remain stored on users’ computer until deleted or until they reach expiry date.
                </li>
            </ul>
            <h3 class="font-semibold text-xl">
                Use of cookies
            </h3>
            <p>
                Our website uses cookies for multiple purposes. Mainly to remember your previous registration and/or whether to show certain notifications which might only be valid to registered users.
            </p>
            <h3 class="font-semibold text-xl">
                Google analytics
            </h3>
            <p>
                Our website also uses Google Analytics to analyze the use of the Website. Google  Analytics generates statistical and other information about website use  by means of cookies, which are stored on users' computers. The  information generated relating to our website is used to create reports about the use of the website. Google will store and use  this information. If you want to learn more about Google's privacy  policy you can read it here: <a href="https://www.google.com/privacypolicy.html" class="no-underline hover:underline text-[#24BBFF]">https://www.google.com/privacypolicy.html</a>.
            </p>
            <h3 class="font-semibold text-xl">
                Other third-party cookies
            </h3>
            <p>
                When you use this website, you may also receive cookies placed by third parties. Third party cookies are used to track and measure usage of this site.
            </p>
            <h3 class="font-semibold text-xl">
                Cookie list
            </h3>
            <ul class="list-disc pl-8">
                <li>
                    _ga
                </li>
                <li>
                    _gat_gtag_UA_145131136_1
                </li>
                <li>
                    _gid
                </li>
                <li>
                    SpixiCookieAgreed
                </li>
            </ul>
            <h3 class="font-semibold text-xl">
                Managing your cookie preferences
            </h3>
            <p>
                It's important to note that if you change your settings and block certain cookies, you won't be able to take full advantage of some features of our site and its features.
            </p>
            <h3 class="font-semibold text-xl">
                How to delete cookies
            </h3>
            <p>
                The consent you've given to store and read cookies can be withdrawn at any time by setting your browser to disable cookies and/or to remove all cookies from your browser.
            </p>
            <p class="font-semibold">
                These policies may be updated from time to time, so you may wish to check it each time you submit personal information to <a href="https://www.spixi.io" class="no-underline hover:underline text-[#24BBFF]">spixi.io</a>.
            </p>
            <h2 class="font-semibold text-2xl">
                Contact us
            </h2>
            <p>
                If you have any questions about this Privacy Policy or any of the provision, you can contact us by email: <a href="mailto:support@spixi.io" class="no-underline hover:underline text-[#24BBFF]">support@spixi.io</a>.
            </p>
        </div>
    </div>
</template>