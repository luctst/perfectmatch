export default {
  inheritAttrs: false,
  props: {
    content: {
      type: [Object, Boolean],
      required: true,
    },
    baseApiUrl: {
      type: String,
    },
  },
}