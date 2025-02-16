<script setup>
const { t } = useI18n()
</script>
<template>
    <footer class="bg-white dark:bg-[#1B232B] pt-6 pb-10">
      <div class="max-w-screen-xl mx-auto p-4">
        
        <div class="flex justify-between">
          <div class="w-full md:w-1/2">
            <NuxtLink to="/" activeClass="font-bold">
              <BaseLogo width="170px" height="60px" />
            </NuxtLink>
          </div>
          <div class="w-full md:w-1/2 flex justify-end">
            <div class="flex items-center space-x-4">
              <NuxtLink to="https://github.com/ixian-platform/" class="text-gray-700 dark:text-white" target="_blank">
                <Icon name="flowbite:github-solid" class="w-10 h-10" />
              </NuxtLink>
              <NuxtLink to="https://x.com/SpixiIm" class="text-gray-700 dark:text-white" target="_blank">
                <Icon name="flowbite:x-solid" class="w-10 h-10" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between font-medium my-8 items-center gap-8">
            <NuxtLink to="/download" class="text-gray-700 dark:text-white">
              {{ t('footer.download') }}
            </NuxtLink>
            <NuxtLink to="/howitworks" class="text-gray-700 dark:text-white">
              {{ t('footer.howitworks') }}
            </NuxtLink>
            <NuxtLink to="/privacy" class="text-gray-700 dark:text-white">
              {{ t('footer.privacy') }}
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-700 dark:text-white">
              {{ t('footer.terms') }}
            </NuxtLink>
            <NuxtLink to="https://www.ixian.io/" class="text-gray-700 dark:text-white" target="_blank">
              {{ t('footer.ixian') }}
            </NuxtLink>
            <NuxtLink to="https://www.ixilabs.co.uk/" class="text-gray-700 dark:text-white" target="_blank">
              {{ t('footer.ixilabs') }}
            </NuxtLink>
        </div>
        <div class="flex md:hidden">
          <br><br>
        </div>
        <div class="text-center text-gray-700 dark:text-white text-sm">
          <p>
            IXI Labs &copy; 2025
          </p>
        </div>
      </div>
    </footer>
</template>