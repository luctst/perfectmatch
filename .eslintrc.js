module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 0,
    'nuxt/no-globals-in-created': 0,
    'no-useless-escape': 1,
    'no-useless-catch': 1,
    'vue/multi-word-component-names': 1,
    'no-new': 1,
  }
}
