<template>
  <section class="wedding">
    <header-vue></header-vue>
    <wedding-float-line :content="content.floatline"></wedding-float-line>
    <wedding-goal-service :content="{}"></wedding-goal-service>
    <wedding-for-who :content="{}"></wedding-for-who>
    <wedding-third-section :content="{}"></wedding-third-section>
    <wedding-offers :content="{}"></wedding-offers>
    <wedding-tarifs :content="{}"></wedding-tarifs>
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
