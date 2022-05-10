<template>
  <section class="offers">
    <div class="offers--wrapper container-fluid">
    </div>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Offers',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.offers {
  background-color: $colorWhite;
  position: relative;
  z-index: 3;
}
</style>