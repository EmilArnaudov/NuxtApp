import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/css/reset.css',
        '~/assets/css/fonts.css',
    ],
    ssr: false,
})


