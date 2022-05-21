<template>
  <section class="about">
    <header-vue></header-vue>
    <about-float-line :content="content.aboutfloatline"></about-float-line>
    <about-who-iam :content="content.quisuisje"></about-who-iam>
    <about-certif :content="content.certification"></about-certif>
    <about-location :content="content.location"></about-location>
    <about-perfect-accord :content="content.whyperfectmatch"></about-perfect-accord>
    <about-event :content="content.politiqueagence"></about-event>
    <footer-vue :content="content.footer"></footer-vue>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  layout: 'default',
  mixins: [globalMixin],
}
</script>