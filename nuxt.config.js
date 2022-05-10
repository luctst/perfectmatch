export default {
  target: 'server',
  ssr: true,
  head: {
    title: 'perfectmatch',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/main.scss'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['@/assets/main.scss']
  },
  axios: {
    // credentials: true,
    baseUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:1337/api'
      : process.env.APIURL,
  },
  server: {
    host: "0.0.0.0"
  }
}
