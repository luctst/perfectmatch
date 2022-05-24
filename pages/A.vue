<template>
  <section class="articles--wrapper">
    <header-vue></header-vue>
    <section class="articles container-fluid">
      <header class="articles--header data-line">
        <section><h1>Tous nos conseils</h1></section>
        <section><h1>Et <span>actualités</span></h1></section>
      </header>
      <main class="articles--body">
        <section
        v-for="(mosaicData, i) in mosaicFormated"
        :key="i"
        :class="`articles--body--mosaic${mosaicData.mid}`">
          <div
          v-for="(article, y) in mosaicData.articles"
          :key="y"
          :class="`articles--body--mosaic${mosaicData.mid}--wrapper`">
            <router-link
            :class="[`articles--body--mosaic${mosaicData.mid}--wrapper--item`, article.active && 'active']"
            :to="`/articles/${article.id}`"
            @mouseenter.native="article.active = true"
            @mouseleave.native="article.active = false">
              <div
              :class="`is__container__img articles--body--mosaic${mosaicData.mid}--wrapper--item--img`">
                <img
                :src="article.attributes.mainimage.data.attributes.url"
                :alt="article.attributes.mainimage.data.attributes.alternativeText"/>
              </div>
              <div
              :class="`articles--body--mosaic${mosaicData.mid}--wrapper--item--content`">
                <h4>{{ article.attributes.title }}</h4>
                <p
                v-html="formatSubtitle(article.attributes.subtitle)"
                class="subtitle"></p>
              </div>
            </router-link>
          </div>
        </section>
      </main>
      <footer class="articles--footer">
        <button 
        v-if="paginationData.page !== paginationData.pageCount"
        class="is__btn__primary"
        @click="fetchNewArticles">Voir plus</button>
      </footer>
    </section>
    <footer-vue :content="content.footer"></footer-vue>
  </section>
</template>

<script>
export default {
  name: 'Articles',
  scrollToTop: true,
  props: {
    content: {
      type: [Array, Boolean, Object],
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
  },
  watch: {
    content(newValue) {
      if (Array.isArray(newValue.items)) {
      this.articles = newValue.items.map((article) => ({
        ...article,
        active: false,
      }));
    }

    return true;
    },
  },
  created() {
    if (Array.isArray(this.content.items)) {
      this.articles = this.content.items.map((article) => ({
        ...article,
        active: false,
      }));
    }

    return true;
  },
  computed: {
    mosaicFormated() {
      let actualMosaicId = 1;
      const mosaicLength = Math.ceil(this.articles.length / 3);
      const result = [];

      for (let index = 0; index < mosaicLength; index++) {
        if (actualMosaicId === 4) {
          actualMosaicId = 1;
        }

        result.push({
          mid: actualMosaicId,
          articles: [...this.articles].slice(
            index === 0 ? 0 : index * 3,
            index === 0 ? 3 : (index + 1) * 3,
          ),
        });

        actualMosaicId += 1;
      }

      return result;
    },
  },
  data() {
    return {
      errorApi: null,
      articles: [],
      paginationData: this.pagination,
    };
  },
  methods: {
    async fetchNewArticles() {
      try {
        const resultApi = await this.$axios.$get(`/articles?pagination[pageSize]=12&pagination[page]=${this.paginationData.page + 1}&populate=*&sort=createdAt:desc`);

        const resultArrayFormated = resultApi.data.map((article) => ({
          ...article,
          active: false,
        }));

        this.articles = this.articles.concat(resultArrayFormated);
        this.paginationData = resultApi.meta.pagination;
      } catch (error) {
        this.errorApi = true;
      }
    },
    formatSubtitle(text) {
      if (text.length >= 60) {
        return `${text.slice(0, 80)}...`;
      }

      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.is__container__img {
  max-width: 350px;
}

.articles--wrapper {
  background-color: $colorWhite;
}

.articles {
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    padding-top: 8rem;
  }

  @media (min-width: 920px) {
    padding-top: 9rem;
  }

  &--header {
    @media (min-width: 920px) {
      margin-bottom: 4rem;
    }

    section {
      h1 {
        text-align: left;
      }
    }
  }

  &--body {
    :last-child {
      margin-bottom: 0;
    }

    @media (min-width: 350px) {
      margin-top: 4rem;
      margin-bottom: 6rem;
    }

    @media (min-width: 920px) {
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 4rem;
    }

    &--mosaic1 {
      @media (min-width: 920px) {
        margin-bottom: 8rem;

        &--wrapper:first-child {
          margin-top: 6rem;
        }

        &--wrapper:nth-child(3) {
          margin-top: -5rem;
        }
      }

      @media (min-width: 1100px) {
        margin-bottom: 16rem;

        &--wrapper:first-child {
          margin-top: 12rem;
        }

        &--wrapper:nth-child(3) {
          margin-top: -12rem;
        }
      }
    }

    &--mosaic2 {
      @media (min-width: 920px) {
        margin-bottom: 8rem;

        &--wrapper:first-child {
          margin-top: 6rem;
        }

        &--wrapper:nth-child(2) {
          margin-top: -5rem;
        }
      }

      @media (min-width: 1100px) {
        margin-bottom: 16rem;

        &--wrapper:first-child {
          margin-top: 12rem;
        }

        &--wrapper:nth-child(2) {
          margin-top: -10rem;
        }
      }
    }

    &--mosaic3 {
      @media (min-width: 920px) {
        margin-bottom: 8rem;

        &--wrapper:first-child {
          margin-top: 6rem;
        }

        &--wrapper:nth-child(2) {
          margin-top: 4rem;
        }

        &--wrapper:last-child {
          margin-top: -6rem;
        }
      }

      @media (min-width: 1100px) {
        margin-bottom: 16rem;

        &--wrapper:first-child {
          margin-top: 12rem;
        }

        &--wrapper:nth-child(2) {
          margin-top: 8rem;
        }
      }
    }

    &--mosaic1,
    &--mosaic2,
    &--mosaic3 {
      @media (min-width: 920px) {
        display: grid;
        grid-template: auto / minmax(auto, 1fr) 2fr minmax(auto, 1fr);

        &--wrapper:nth-child(2) {
          margin-left: 10vw;
          margin-right: 6vw;
        }
      }

      &--wrapper {
        @media (min-width: 350px) {
          align-items: center;
          flex-direction: column;
          display: flex;
          margin-bottom: 2rem;
        }

        @media (min-width: 920px) {
          width: fit-content;
        }

        &--item {
          display: block;
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
            max-width: 350px;
          }

          &--content {
            h4 {
              margin-top: 20px;
            }

            p {
              text-align: left;
              margin-top: 15px;

              @media (min-width: 350px) {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }

  &--footer {
    display: flex;
    justify-content: center;

    @media (min-width: 920px) {
      margin-top: 4rem;
      padding-bottom: 6rem;
    }
  }
}
</style>