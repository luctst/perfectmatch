export default {
  target: 'server',
  ssr: true,
  loading: '~/components/Loader.vue',
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
    {
      src: "~/plugins/split.js",
      ssr: false
    },
    { 
      src: '~/plugins/observer.js', 
      ssr: false 
    },
    { 
      src: '~/plugins/rellax.js', 
      ssr: false 
    }

  ],
  components: true,
  buildModules: [
    //'@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    '@nuxtjs/i18n',
  ],
  styleResources: {
    scss: ['@/assets/main.scss']
  },
  axios: {
    baseUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:1337/api'
      : process.env.APIURL,
  },
  toast: {
    position: 'top-right',
    duration: 5000,
    theme: 'outline',
    keepOnHover: true,
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_',
      redirectOn: 'root',
      defaultLocale: 'fr',
    }
  },
  server: {
    host: "0.0.0.0"
  },
}
