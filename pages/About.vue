<template>
  <section class="about">
    <header-vue></header-vue>
    <about-float-line :content="{}"></about-float-line>
    <about-who-iam :content="{}"></about-who-iam>
    <about-certif :content="{}"></about-certif>
    <about-location :content="{}"></about-location>
    <about-perfect-accord :content="{}"></about-perfect-accord>
    <about-event :content="{}"></about-event>
    <footer-vue :content="{}"></footer-vue>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  layout: 'default',
  mixins: [globalMixin],
}
</script>