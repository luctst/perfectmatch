<template>
  <section class="wedding--service">
    <div class="wedding--service--loop">
      <loop></loop>
    </div>
  </section>
</template>

<script>
import Loop from '~/assets/img/loop.svg?inline';

export default {
  name: 'WeddingFloatLine',
  components: {
    Loop,
  },
}
</script>