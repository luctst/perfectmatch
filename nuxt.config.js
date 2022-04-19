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
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    credentials: true,
    baseUrl: process.env.APIURL,
    headers: {
      common: {
        // Authorization: `Bearer ${process.env.APITOKEN}`,
      },
    },
  },
  build: {
  }
}
