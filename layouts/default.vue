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
      :base-api-url="baseApiUrl"
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

      if (this.$route.name === 'Contact') {
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
      const d = [
        {
          path: '/articles/:id',
          apiRoutes: '/articles/:id',
        },
        {
          path: '/',
          apiRoutes: 'accueil',
          compoCategory: 'accueil',
        },
        {
          path: '/about',
          apiRoutes: 'about',
          compoCategory: 'about',
        },
        {
          path: '/wedding/complete',
          apiRoutes: 'wedding-complete',
          compoCategory: 'wedding',
        },
        {
          path: '/wedding/partial',
          apiRoutes: 'wedding-partial',
          compoCategory: 'wedding',
        },
        {
          path: '/events',
          apiRoutes: 'events',
          compoCategory: 'event',
        },
        {
          path: '/contact',
          apiRoutes: 'contact',
          compoCategory: 'contact',
        },
      ];
      const routesToFetch = d.find((r) => {
        if (Object.keys(this.$route.params).length) {
          const params = Object.keys(this.$route.params);
          return this.$route.path.split(this.$route.params[params[0]]).join(`:${params[0]}`) === r.path;
        }

        return r.path === this.$route.path;
      });

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

      if (routesToFetch.compoCategory) {
        const populate = (await this.$axios.$get('/content-type-builder/components'))
        .data
        .filter((c) => c.category === routesToFetch.compoCategory)
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
        return true;
      }
    },
  },
};
</script>
