<template>
  <section class="tarif--wrapper">
    <section class="tarif container-fluid" data-line>
      <h3 class="is__h2" v-html="content.title"></h3>
      <div class="subtitle" v-html="parseMarkdown(content.subtitle)"></div>
      <button class="is__btn__primary">{{ content.button }}</button>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Tarif',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.tarif--wrapper {
  background-color: $colorWhite;
}

.tarif {
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;
  padding: 6rem 0 8rem 0;

  div:first-of-type {
    margin-top: 1rem;
  }

  div:last-of-type {
    margin-bottom: 3rem;
  }

  @media (min-width: 350px) {
    max-width: 85%;
  }

  @media (min-width: 620px) {
    max-width: 70%;
  }

  @media (min-width: 760px) {
    max-width: 40%;
  }

  @media (min-width: 920px) {
    max-width: 40%;
  }

  @media (min-width: 1100px) {
    max-width: 35%;
  }

  @media (min-width: 1800px) {
    max-width: 25%;
  }
}
</style>