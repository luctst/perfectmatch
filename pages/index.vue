<template>
<section class="home">
  <header-vue></header-vue>
  <section class="home--inner container">
    <div class="homer--inner--loop">
      <loop></loop>
    </div>
    <div class="home--inner--content"></div>
    <div class="home--inner--slidermobile"></div>
    <div class="home--inner--sliderdesktop"></div>
  </section>
</section>
</template>

<script>
import Loop from '~/assets/img/loop.svg?inline';
import Header from '~/components/Header.vue';

export default {
  layout: 'default',
  components: {
    'header-vue': Header,
    Loop,
  },
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
  height: 100vh;
  max-height: 100vh;

  &--inner {
    position: relative;

    &--loop {
      position: absolute;

      svg {
        object-fit: cover;
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>