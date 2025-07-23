export default defineNuxtConfig({
  app: {
    baseURL: '/im-learnings/',
    cdnURL: '/im-learnings/',
  },
  ssr: false,
  generate: {
    dir: 'dist',
    fallback: '200.html',
  },
  router: {
    options: {
      base: '/im-learnings/',
    },
  },
})
