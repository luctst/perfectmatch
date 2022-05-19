<template>
  <section>
    <template v-if="$fetchState.pending">
      Fetch date
    </template>
    <template v-else-if="$fetchState.error">
      <error></error>
    </template>
    <template v-else>
      <nuxt-child
      :content="content"
      :pagination="pagination"
      keep-alive />
    </template>
  </section>
</template>

<script>
import qs from 'qs';

export default {
  data() {
    return {
      pagination: {},
      content: false,
    };
  },
  async fetch() {
    await this.fetchRouteContent();
  },
  watch: {
    async $route() {
      this.shouldAddBodyPadding();
      await this.fetchRouteContent();
    }
  },
  created() {
    if (process.browser) {
      this.shouldAddBodyPadding();
      window.addEventListener('resize', this.shouldAddBodyPadding);
    }
  },
  methods: {
    shouldAddBodyPadding() {
      const body = document.querySelector('body');

      if (
        this.$route.name === 'Contact'
        || !this.$route.name
      ) {
        if (!body.classList.contains('is__body__padding')) return true;

        body.classList.remove('is__body__padding');
        return true;
      }

      if (window.innerWidth >= 920) {
        if (body.classList.contains('is__body__padding')) return true;

        body.classList.add('is__body__padding');
        return true;
      }

      if (!body.classList.contains('is__body__padding')) return true;

      body.classList.remove('is__body__padding');
      return true;
    },
    async fetchRouteContent() {
      try {
        const routesToFetch = this.$store.state.routes.find((r) => {
          if (Object.keys(this.$route.params).length) {
            const params = Object.keys(this.$route.params);
            return this.$route.path.split(this.$route.params[params[0]]).join(`:${params[0]}`) === r.path;
          }
  
          return r.path === this.$route.path;
        });

        if (!routesToFetch) throw new Error('page do not exist');
  
        if (routesToFetch.path.includes(':')) {
          this.content = (await this.$axios.$get(
            this.$route.path,
            {
              params: {
                populate: '*',
              },
            },
          )).data.attributes;
  
          return true;
        }
  
        if (routesToFetch.compoCategoryToFetch) {
          const populate = (await this.$axios.$get('/content-type-builder/components'))
          .data
          .filter((c) => {
            if (routesToFetch.compoCategoryToFetch.includes(',')) {
              const strToArray = routesToFetch.compoCategoryToFetch.trim().split(',');
              return strToArray.includes(c.category);
            }
  
            return c.category === routesToFetch.compoCategoryToFetch
          })
          .reduce(
            (prev, next) => {
              if (next.apiId.includes('-')) {
                prev.populate[next.apiId.split('-').join('')] = { populate: '*' };
                return prev;
              }

              prev.populate[next.apiId] = { populate: '*' };
              return prev;
            },
            { populate: {}}
          );
          const query = qs.stringify(populate, { encodeValuesOnly: true });
          this.content = (await this.$axios.$get(`/${routesToFetch.apiRoutes}?${query}&locale=fr-FR`,
          )).data.attributes;
          return true;
        }
  
        const result = await this.$axios.$get(`${routesToFetch.apiRoutes}?populate=*&pagination[pageSize]=12&sort=createdAt:desc&locale=fr-FR`);
  
        this.content = result.data;
        this.pagination = result.meta.pagination;
        return true;
      } catch (error) {
        throw error;
      }
    },
  },
};
</script>
