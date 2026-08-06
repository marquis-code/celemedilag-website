// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  alias: {
    '@': './app'
  },
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&f[]=clash-display@200,400,700,500,600,300&display=swap' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3005/api'
    }
  }
})
