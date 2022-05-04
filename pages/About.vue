<template>
  <section class="about">
    <header-vue></header-vue>
    <about-float-line :content="{}"></about-float-line>
    <about-who-iam :content="{}"></about-who-iam>
    <footer-vue :content="{}"></footer-vue>
  </section>
</template>

<script>
import Header from '~/components/Header.vue';
import AboutFloatLine from '~/components/AboutFloatLine.vue';
import AboutWhoIam from '~/components/AboutWhoIam.vue';
import FooterVue from '~/components/Footer.vue';

export default {
  components: {
    'header-vue': Header,
    AboutFloatLine,
    AboutWhoIam,
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