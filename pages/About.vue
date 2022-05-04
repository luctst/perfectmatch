<template>
  <section class="about">
    <header-vue></header-vue>
    <about-float-line :content="{}"></about-float-line>
    <section style="height:100vh;background-color:#fff;position:relative;z-index:3;"></section>
    <footer-vue :content="{}"></footer-vue>
  </section>
</template>

<script>
import Header from '~/components/Header.vue';
import AboutFloatLine from '~/components/AboutFloatLine.vue';
import FooterVue from '~/components/Footer.vue';

export default {
  components: {
    'header-vue': Header,
    AboutFloatLine,
    'footer-vue': FooterVue,
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