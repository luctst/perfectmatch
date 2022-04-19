<template>
  <section>
    <template v-if="$fetchState.pending">
      Fetch date
    </template>
    <template v-else-if="$fetchState.error">
      Error...
    </template>
    <nuxt
    v-else
    keep-alive />
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataFetched: false,
      contents: null,
      content: null,
    };
  },
  async fetch() {
    this.contents = (await this.$axios.$get(`/${this.$route.name}?locale=all`)).data;
    this.dataFetched = true;
  },
  watch: {
    dataFetched(newValue) {
      if (!newValue) return false;
    },
  },
};
</script>
