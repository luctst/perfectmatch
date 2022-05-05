<template>
  <section class="about">
    <header-vue></header-vue>
    <about-float-line :content="{}"></about-float-line>
    <about-who-iam :content="{}"></about-who-iam>
    <about-certif :content="{}"></about-certif>
    <about-location :content="{}"></about-location>
    <about-accord :content="{}"></about-accord>
    <footer-vue :content="{}"></footer-vue>
  </section>
</template>

<script>
import Header from '~/components/Header.vue';
import AboutFloatLine from '~/components/AboutFloatLine.vue';
import AboutWhoIam from '~/components/AboutWhoIam.vue';
import AboutCertif from '~/components/AboutCertif.vue';
import AboutLocation from '~/components/AboutLocation.vue';
import AboutAccord from '~/components/AboutPerfectAccord.vue';
import FooterVue from '~/components/Footer.vue';

export default {
  components: {
    'header-vue': Header,
    AboutFloatLine,
    AboutWhoIam,
    AboutCertif,
    AboutLocation,
    AboutAccord,
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