<template>
<section class="home">
  <header-vue></header-vue>
  <home-float-line :content="content.floatline"></home-float-line>
  <home-first-section :content="content.section1"></home-first-section>
  <home-second-section :content="{}"></home-second-section>
  <home-third-section :content="{}"></home-third-section>
  <offers :content="{}"></offers>
</section>
</template>

<script>
import Header from '~/components/Header.vue';
import HomeFloatline from '~/components/HomeFloatLine.vue';
import HomeFirstSection from '~/components/HomeFirstSection.vue';
import HomeSecondSection from '~/components/HomeSecondSection.vue';
import HomeThirdSection from '~/components/HomeThirdSection.vue';
import Offers from '~/components/Offers.vue';

export default {
  components: {
    'header-vue': Header,
    'home-float-line': HomeFloatline,
    'home-first-section': HomeFirstSection,
    'home-second-section': HomeSecondSection,
    'home-third-section': HomeThirdSection,
    Offers,
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
