// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/device",
    "nuxt-icon",
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'es',
        file: 'es.json'
      },
      {
        code: 'pt',
        file: 'pt.json'
      },
      {
        code: 'fr',
        file: 'fr.json'
      },
      {
        code: 'it',
        file: 'it.json'
      },
      {
        code: 'de',
        file: 'de.json'
      },
      {
        code: 'ru',
        file: 'ru.json'
      },
      {
        code: 'ja',
        file: 'ja.json'
      },
      {
        code: 'zh',
        file: 'zh.json'
      },
    ], 
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Spixi',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    baseURL: process.env.BASE_URL || "/"
  },
  colorMode: {
    classSuffix: '',
    storageKey: 'color-theme',
    preference: 'system',
    fallback: 'light',
  },
  googleFonts: {
    families: {
      'Lexend': true,
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: '~/plugins/utils.client.js' },
  ],
  image: {
    provider: 'ipx',
    ipx: {},
  },
  nitro:  {
    prerender: {
      routes: [],
      failOnError:false,
    }
  }
})