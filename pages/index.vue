<template>
<section class="home">
  <header-vue></header-vue>
  <section class="home--inner container">
    <div class="home--inner--loop">
      <loop></loop>
    </div>
    <div class="home--inner--content">
      <h1 v-html="content.floatline.title"></h1>
      <h2>{{ content.floatline.subtitle }}</h2>
    </div>
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
  max-height: 100vh;

  @media (min-width: 350px) {
    height: 90vh;
  }

  &--inner {
    position: relative;
    @media (min-width: 350px) {
      padding-top: 8em;
    }

    &--loop {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 1;

      svg {
        object-fit: cover;
        max-height: 100%;
        max-width: 100%;
      }

      @media (min-width: 350px) {
        top: -80px;
      }
    }
    
    &--content,
    &--slidermobile,
    &--sliderdesktop {
      position: relative;
      z-index: 2;
    }

    &--content {
      display: flex;
      flex-direction: column;

      @media (min-width: 350px) {

      }

      h1 {
        color: $textColor;
        font-family: $secondTypo;
        font-weight: 200;
        text-align: center;
        margin: 0;

        @media (min-width: 350px) {
          font-size: 68px;
          margin-bottom: 50px;
        }
      }

      h2 {
        color: $textColor;
        font-family: $mainTypo;
        line-height: 20px;
        margin: 0;
        text-align: center;

        @media (min-width: 350px) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>