<template>
<section class="home">
  <header-vue></header-vue>
  <home-float-line :content="content.floatline"></home-float-line>
  <home-first-section :content="content.section1"></home-first-section>
  <home-second-section :content="content.section2"></home-second-section>
  <home-third-section :content="content.section3"></home-third-section>
  <offers :content="content.offers"></offers>
  <events :content="content.events"></events>
  <articles
  :titles="[content.articles.firstTitle, content.articles.secondTitle]"
  :btnContent="content.articles.button">
  </articles>
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
