// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/im-learnings/',
  },
  ssr: false,
  generate: {
    dir: 'dist',
  },
})
