<template>
  <section class="contact">
    <header-vue></header-vue>
    <contact-floatline :content="content.floatline"></contact-floatline>
    <contact-form :content="content.formulaire"></contact-form>
    <contact-footer :content="content.footer"></contact-footer>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Contact',
  scrollToTop: true,
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.contact {
  background-color: #F8ECFD;
}
</style>