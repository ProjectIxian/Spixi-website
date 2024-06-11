<script setup>
const props = defineProps({
    id: String,
    question: String,
    answer: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquam. Nullam nec purus nec libero ultricies aliquam."
    }
})
</script>
<template>
    <label :for="id" class="text-3xl font-lexend text-black dark:text-spixi-dark w-full">
        <input type="checkbox" :id="id" class="sr-only peer">
        <div class="flex flex-col justify-center col-span-5 py-3 border-b border-[#767E87] peer-checked:border-[#24BBFF] peer-checked:[&>.hidden]:block peer-checked:[&>div>.plus]:hidden peer-checked:[&>div>.minus]:block ">
            <div class="flex flex-row">
                <h3 class="w-full text-lg">
                    {{ question }}
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="plus peer-checked:hidden">
                    <mask id="mask0_769_340" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_769_340)">
                        <path d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z" class="fill-[#1D2329] dark:fill-[#D9D9D9]"/>
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="hidden minus peer-checked:block">
                    <mask id="mask0_769_360" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_769_360)">
                        <path d="M6 13C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H6Z" class="fill-[#1D2329] dark:fill-[#D9D9D9]"/>
                    </g>
                </svg>
            </div>
            <div class="hidden pt-4 overflow-hidden ease duration-500">
                <p class="text-base text-spixi dark:text-spixi-dark" v-html="answer">
                </p>
            </div>
        </div>
    </label>
</template>