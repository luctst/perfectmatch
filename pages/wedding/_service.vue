<template>
  <section class="wedding">
    <header-vue></header-vue>
    <wedding-float-line :content="content.floatline"></wedding-float-line>
    <footer-vue :content="{}"></footer-vue>
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
