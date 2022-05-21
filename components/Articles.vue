<template>
  <section class="articles--wrapper">
    <section class="articles container-fluid">
      <div class="articles--content" data-line>
        <div class="title--tag">Articles</div>
        <h2
        v-for="(title, i) in titles"
        :key="i"
        v-html="title"></h2>
      </div>
      <div class="articles--items--wrapper">
        <nuxt-link
        v-for="(article, index) in articles"
        :id="index"
        :key="index"
        :class="['articles--items--wrapper--item', article.active && 'active']"
        :to="`/articles/${article.id}`"
        @mouseenter.native="article.active = true"
        @mouseleave.native="article.active = false">
          <div
          class="is__container__img articles--items--wrapper--item--img">
            <img
            :src="article.attributes.mainimage.data.attributes.url"
            :alt="article.attributes.mainimage.data.attributes.url"/>
          </div>
          <div class="articles--items--wrapper--item--content">
            <h4>{{ article.attributes.title }}</h4>
            <p
            v-html="formatSubtitle(article.attributes.subtitle)"
            class="subtitle"></p>
          </div>
        </nuxt-link>
      </div>
      <div class="articles--actions">
        <button class="is__btn__primary">
          <nuxt-link to="/articles">Voir plus</nuxt-link>
        </button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Articles',
  props: {
    titles: {
      type: Array,
      required: true,
    },
  },
  async created() {
    await this.fetchLastArticles();
  },
  watch: {
    async $route() {
      await this.fetchLastArticles();
    }
  },
  methods: {
    formatSubtitle(text) {
      if (text.length >= 60) {
        return `${text.slice(0, 80)}...`;
      }

      return text;
    },
    async fetchLastArticles() {
      try {
        const result = (await this.$axios.$get('/articles?pagination[pageSize]=3&populate=*')).data;

        this.articles = result.map((article) => {
          const newArticle = { ...article };
          newArticle.active = false;

          return newArticle;
        });
      } catch (error) {
        this.errorApi = error.message;
      }
    },
  },
  data() {
    return {
      errorApi: null,
      articles: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  h4 {
    text-decoration: underline;
    text-decoration-color: #EDCDB8;
  }
}

.articles--wrapper {
  background-color: $colorWhite;
}

.articles {
  position: relative;
  z-index: 2;

  @media (min-width: 350px) {
    padding-top: 110px;
    padding-bottom: 80px;
  }

  @media (min-width: 920px) {
    padding-top: 160px;
    padding-bottom: 130px;
  }

  &--content {
    h2:last-of-type {
      @media (min-width: 920px) {
        margin-bottom: 100px;
      }
    }
  }

  &--items--wrapper {
    display: flex;

    &--item:nth-child(2) {
      @media (min-width: 1400px) {
        max-width: 25rem;
      }

      @media (min-width: 1800px) {
        max-width: 30rem;
      }
    }

    &--item {
      display: inline-block;
      text-decoration: none;

      @media (min-width: 415px) {
        max-width: 335px;
      }

      @media (min-width: 600px) {
        max-width: 400px;
      }

      @media (min-width: 920px) {
        max-width: 240px;
      }

      @media (min-width: 950px) {
        max-width: 280px;
      }

      @media (min-width: 1025px) {
        max-width: 300px;
      }

      @media (min-width: 1100px) {
        max-width: 30vw;
      }

      &--content {
        h4 {
          margin-top: 20px;
        }

        p {
          text-align: left;
          margin-top: 15px;
        }
      }
    }

    @media (min-width: 350px) {
      align-items: center;
      flex-direction: column;
      margin-top: 50px;

      &--item:not(:first-child) {
        margin-top: 50px;
      }
    }

    @media (min-width: 920px) {
      align-items: flex-start;
      flex-direction: row;
      justify-content: space-between;

      &--item:not(:first-child) {
        margin-top: 0;
      }

      &--item {
        &:last-child {
          transform: translateY(-20%);
        }
      }

      &--item:nth-child(2) {
        margin-left: 10vw;
        margin-right: 6vw;
      }
    }

    @media (min-width: 1800px) {
      &--item:nth-child(2) {
        margin-left: 10vw;
        margin-right: 6vw;
      }
    }
  }

  &--actions {
    margin-top: 40px;

    @media (min-width: 350px) {
      display: none;
    }

    @media (min-width: 920px) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>