<template>
  <section class="events">
    <header-vue></header-vue>
    <event-float-line :content="{}"></event-float-line>
    <event-useless :content="{}"></event-useless>
    <event-speciality :content="{}"></event-speciality>
    <event-offers :content="{}"></event-offers>
    <event-tarif :content="{}"></event-tarif>
    <footer-vue :content="{}"></footer-vue>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Events',
  mixins: [globalMixin],
};
</script>