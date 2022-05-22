<template>
  <section>
    <template v-if="$fetchState.pending">
      <loader></loader>
    </template>
    <template v-else-if="$fetchState.error">
      <error></error>
    </template>
    <template v-else>
      <nuxt-child
      v-if="showContent"
      :content="content"
      :pagination="pagination"
      keep-alive/>
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
      allsTitle:null,
      showContent: false,
    };
  },
  async fetch() {
    await this.fetchRouteContent();
    this.isLoaderDisplay();
  },
  watch: {
    async $route() {
      this.shouldAddBodyPadding();
      await this.$fetch();
      this.findAllTitleofThePage();
    }
  },
  created() {
    if (process.browser) {
      this.isLoaderDisplay();
      window.addEventListener('resize', this.shouldAddBodyPadding);
    }
  },
  mounted() {
    this.findAllTitleofThePage();
  },
  methods: {
    isLoaderDisplay() {
      this.$nextTick(() => {
        if (!this.content) {
          return this.$nuxt.$loading.start();
        }

        this.showContent = true;
        this.shouldAddBodyPadding();
      })
    },
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
    async fetchRouteContent(newRoute) {
      try {
        const routerData = newRoute ? { ...newRoute } : this.$route;
        const routesToFetch = this.$store.state.routes.find((r) => {
          if (
            Object.keys(routerData.params).length
            && r.path.includes(':')
          ) {
            const params = Object.keys(routerData.params);
            return routerData.path.split(routerData.params[params[0]]).join(`:${params[0]}`) === r.path;
          }
  
          return r.path === routerData.path;
        });

        if (!routesToFetch) throw new Error('page do not exist');
  
        if (routesToFetch.path.includes(':')) {
          const components = (await this.$axios.$get('/content-type-builder/components'))
            .data
            .filter((component) => {
              if (
                component.apiId === 'footer'
                || component.apiId === 'header'
              ) return true;
              return false;
            })
            .reduce(
              (prev, next) => {
                prev[next.apiId] = next.schema.attributes;
                return prev;
              },
              {}
            )

          const pageResult = (await this.$axios.$get(
            routerData.path,
            {
              params: {
                populate: '*',
              },
            },
          )).data.attributes;

          this.content = {
            ...pageResult,
            ...components,
          };
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

        const components = (await this.$axios.$get('/content-type-builder/components'))
          .data
          .filter((component) => {
            if (
              component.apiId === 'footer'
              || component.apiId === 'header'
            ) return true;
            return false;
          })
          .reduce(
            (prev, next) => {
              prev[next.apiId] = next.schema.attributes;
              return prev;
            },
            {}
          )
        const result = await this.$axios.$get(`${routesToFetch.apiRoutes}?populate=*&pagination[pageSize]=12&sort=createdAt:desc&locale=fr-FR`);
  
        this.content = {
          items: [...result.data],
          ...components,
        };
        this.pagination = result.meta.pagination;
        return true;
      } catch (error) {
        throw error;
      }
    },
    findAllTitleofThePage(){
      this.allsTitle = document.querySelectorAll("h1[data-line],h2[data-line],[data-line] h2,[data-line] h1")
      this.splitLine(this.allsTitle,'line')
      this.observeTitle(this.allsTitle)
    }
  },
};
</script>
