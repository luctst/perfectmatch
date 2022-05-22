<template>
  <section class="wedding">
    <header-vue></header-vue>
    <wedding-float-line :content="content.floatline"></wedding-float-line>
    <wedding-goal-service :content="content.about"></wedding-goal-service>
    <wedding-for-who :content="content.forwho"></wedding-for-who>
    <wedding-third-section :content="content.makeforyou"></wedding-third-section>
    <wedding-offers :content="content.offers"></wedding-offers>
    <wedding-tarifs :content="content.tarifs"></wedding-tarifs>
    <footer-vue :content="content.footer"></footer-vue>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'WeddingService',
  mixins: [globalMixin],
  layout: 'default',
}
</script>
