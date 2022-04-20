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
import qs from 'qs';

export default {
  data() {
    return {
      content: false,
      baseApiUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:1337/api'
        : 'https://the-perfect-match.herokuapp.com'
    };
  },
  async fetch() {
    const d = [
      {
        path: '/',
        apiRoutes: 'accueil',
      },
      {
        path: '/about',
        apiRoutes: 'about',
      },
    ];
    const routesToFetch = d.find((r) => r.path === this.$route.path);
    const populate = (await this.$axios.$get('/content-type-builder/components'))
    .data
    .filter((c) => c.category === routesToFetch.apiRoutes)
    .reduce(
      (prev, next) => {
        prev.populate[next.apiId] = { populate: '*' };
        return prev;
      },
      { populate: {}}
    );
    const query = qs.stringify(populate, { encodeValuesOnly: true });

    this.content = (await this.$axios.$get(`/${routesToFetch.apiRoutes}?${query}&locale=fr-FR`,
    )).data.attributes;
  },
};
</script>
