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
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['@/assets/main.scss']
  },
  googleFonts: {
    families: {
      Roboto: {
        wght: [400]
      },
      'Playfair+Display': {
        wght: [400],
      },
    },
  },
  axios: {
    credentials: true,
    baseUrl: process.env.APIURL,
  },
  build: {
  }
}