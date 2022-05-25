<template>
  <section class="f floatline" :style="`background-color:${theme};`">
    <div class="floatline--loop">
      <div class="is__container__img">
        <loop v-if="$route.params.service === 'complete'"></loop>
        <loop-partial v-if="$route.params.service === 'partial'"></loop-partial>
        <loop-ddat v-if="$route.params.service === 'dday'"></loop-ddat>
      </div>
    </div>
    <div class="floatline--content" data-line>
      <div class="is__container__img">
        <offers-first v-if="$route.params.service === 'complete'"></offers-first>
        <flower-2 v-else-if="$route.params.service === 'partial'"></flower-2>
        <flower-3 v-else></flower-3>
      </div>
      <h1 :style="`color:${colorText};`">{{ content.title }}</h1>
    </div>
  </section>
</template>

<script>
import Loop from '~/assets/img/about-loop.svg?inline';
import LoopDdat from '~/assets/img/loop-dday.svg?inline';
import LoopPartial from '~/assets/img/loop-partial.svg?inline';
import OffersFirst from '~/assets/img/offers-first.svg?inline';
import Flower2 from '~/assets/img/flower-2.svg?inline';
import Flower3 from '~/assets/img/flower-3.svg?inline';

export default {
  name: 'WeddingFloatLine',
  components: {
    Loop,
    LoopDdat,
    LoopPartial,
    OffersFirst,
    Flower2,
    Flower3,
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
      const colorText = ['#3B2321','#2d332a',  '#3c2a44'];
      switch (this.$route.path) {
        case '/wedding/complete':
          this.theme = themes[0];
          this.colorText = colorText[0];
          break;
        case '/wedding/partial':
          this.theme = themes[1];
           this.colorText = colorText[1];
          break;
        default:
          this.theme = themes[2];
          this.colorText = colorText[2];
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
  height: 51vh;

  @media (min-width: 350px) {
    padding-top: 120px;
  }

  @media (min-width: 1100px) {
    padding-top: 80px;
  }

  &--loop {
    height: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: -80px;

    @media (min-width: 350px) {
      top: 0;
    }

    @media (min-width: 920px) {
      top: -80px;
    }

    svg {
      height: 100%;
      width: 100vw;
    }
  }

  &--content {
    align-items: center;
    display: flex;
    height: inherit;
    flex-direction: column;
    justify-content: center;

    div {
      height: auto;

      @media (min-width: 350px) {
        max-width: 20%;
      }

      @media (min-width: 920px) {
        max-width: 10%;
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