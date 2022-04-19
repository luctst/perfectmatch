<template>
  <section>
    <template v-if="$fetchState.pending">
      Fetch date
    </template>
    <template v-else-if="$fetchState.error">
      Error...
    </template>
    <template v-else>
      <nuxt-child
      :content="content"
      :baseApiUrl="baseApiUrl"
      keep-alive />
    </template>
  </section>
</template>

<script>
export default {
  data() {
    return {
      content: false,
      baseApiUrl: 'https://the-perfect-match.herokuapp.com',
    };
  },
  async fetch() {
    const routesToFetch = [
      {
        path: '/',
        apiRoutes: 'accueil'
      },
      {
        path: '/about',
        apiRoutes: 'about',
      },
    ].find((r) => r.path === this.$route.path);

    this.content = (await this.$axios.$get(
      `/${routesToFetch.apiRoutes}`,
      {
        params: {
          locale: 'fr-FR',
          populate: '*',
        },
      }
    )).data.attributes;
  },
};
</script>
