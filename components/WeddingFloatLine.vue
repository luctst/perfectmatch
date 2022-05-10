<template>
  <section class="floatline" :style="`background-color:${theme};`">
    <div class="floatline--loop">
      <div class="is__container__img">
        <loop></loop>
      </div>
    </div>
    <div class="floatline--content">
      <div class="is__container__img">
        <component :is="icon"></component>
      </div>
      <h1>{{ content.title }}</h1>
    </div>
  </section>
</template>

<script>
import Loop from '~/assets/img/about-loop.svg?inline';
import OffersFirst from '~/assets/img/offers-first.svg?inline';
import Flower2 from '~/assets/img/flower-2.svg?inline';

export default {
  name: 'WeddingFloatLine',
  components: {
    Loop,
  },
  props: {
    content: {
      type: [Object, Boolean],
      required: true,
    },
  },
  data() {
    return {
      theme: '',
      icon: null,
    };
  },
  watch: {
    $route() {
      this.filledData();
    }
  },
  created() {
    this.filledData();
  },
  methods: {
    filledData() {
      const themes = ['#FDEADD', '#E0F4EB', '#F8ECFD'];

      switch (this.$route.path) {
        case '/wedding/complete':
          this.theme = themes[0];
          this.icon = OffersFirst;
          break;
        case '/wedding/partial':
          this.theme = themes[1];
          this.icon = Flower2;
          break;
        default:
          break;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.floatline {
  box-sizing: content-box;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    padding-top: 120px;
    height: 50vh;
  }

  @media (min-width: 1100px) {
    padding-top: 80px;
  }

  &--loop {
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;

    @media (min-width: 350px) {
      top: 50%;
    }

    @media (min-width: 800px) {
      top: 0;
    }
  }

  &--content {
    align-items: center;
    display: flex;
    height: inherit;
    flex-direction: column;
    justify-content: center;

    div {
      @media (min-width: 350px) {
        max-width: 30vw;
      }
    }

    h1 {
      @media (min-width: 350px) {
        margin-top: 40px;
      }
    }
  }
}
</style>