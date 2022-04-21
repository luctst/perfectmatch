<template>
<section class="home">
  <header-vue></header-vue>
  <home-float-line :floatline="content.floatline"></home-float-line>
</section>
</template>

<script>
import Header from '~/components/Header.vue';
import HomeFloatline from '~/components/HomeFloatLine.vue';

export default {
  components: {
    'header-vue': Header,
    'home-float-line': HomeFloatline,
  },
  layout: 'default',
  props: {
    content: {
      type: [Boolean, Object],
      required: true,
    },
    baseApiUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  background-color: $colorBeige;
  max-height: 100vh;

  @media (min-width: 350px) {
    height: 90vh;
  }

  @media (min-width: 800px) {
    height: 100vh;
  }
}
</style>