<template>
  <section class="contact">
    <header-vue></header-vue>
    <contact-floatline></contact-floatline>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Contact',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.contact {
  background-color: #F8ECFD;
}
</style>