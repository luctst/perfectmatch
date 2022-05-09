<template>
  <section class="wedding">
    <header-vue></header-vue>
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