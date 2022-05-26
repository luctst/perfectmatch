<template>
  <section class="events">
    <header-vue></header-vue>
    <event-float-line :content="content.floatline"></event-float-line>
    <event-useless :content="content.imagealone"></event-useless>
    <event-speciality :content="content.speciality"></event-speciality>
    <event-offers :content="content.offers"></event-offers>
    <event-tarif :content="content.devis"></event-tarif>
    <footer-vue :content="content.footer"></footer-vue>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Events',
  scrollToTop: true,
  mixins: [globalMixin],
};
</script>