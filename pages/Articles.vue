<template>
  <section class="articles--wrapper">
    <header-vue></header-vue>
    <section class="articles container-fluid"></section>
    <footer-vue></footer-vue>
  </section>
</template>

<script>
export default {
  name: 'Articles',
  async created() {
    try {
      await this.$axios.get();
    } catch (error) {
      this.errorApi = error.message;
    }
  },
  data() {
    return {
      errorApi: null,
      articles: [],
      pagination: {
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.articles--wrapper {
  background-color: $colorWhite;
}

.articles {
  position: relative;
  z-index: 3;
}
</style>