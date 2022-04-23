export default {
  inheritAttrs: false,
  props: {
    content: {
      type: Object,
      required: true,
    },
    baseApiUrl: {
      type: String,
    },
  },
}