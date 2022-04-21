<template>
<section class="home">
  <header-vue></header-vue>
  <home-float-line :content="content.floatline"></home-float-line>
  <home-first-section :content="content.section1"></home-first-section>
</section>
</template>

<script>
import Header from '~/components/Header.vue';
import HomeFloatline from '~/components/HomeFloatLine.vue';
import HomeFirstSection from '~/components/HomeFirstSection.vue';

export default {
  components: {
    'header-vue': Header,
    'home-float-line': HomeFloatline,
    'home-first-section': HomeFirstSection,
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
