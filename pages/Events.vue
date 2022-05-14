<template>
  <section class="events">
    <header-vue></header-vue>
    <event-float-line></event-float-line>
    <event-useless></event-useless>
    <event-speciality></event-speciality>
    <event-offers></event-offers>
    <footer-vue :content="{}"></footer-vue>
  </section>
</template>

<script>
export default {
  name: 'Events',
};
</script>