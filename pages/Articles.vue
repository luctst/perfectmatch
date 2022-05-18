<template>
  <section class="articles--wrapper">
    <header-vue></header-vue>
    <section class="articles container-fluid">
      <header class="articles--header">
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
            <nuxt-link
            :class="[`articles--body--mosaic${mosaicData.mid}--wrapper--item`, article.active && 'active']"
            :to="`/articles/${article.id}`"
            @mouseenter.native="article.active = true"
            @mouseleave.native="article.active = false">
              <div
              :style="`:hover { cursor: ${cursorUrl};}`"
              :class="`is__container__img articles--body--mosaic${mosaicData.mid}--wrapper--item--img`">
                <img
                :src="article.attributes.mainimage.data.attributes.url"
                :alt="article.attributes.mainimage.data.attributes.url"/>
              </div>
              <div
              :class="`articles--body--mosaic${mosaicData.mid}--wrapper--item--content`">
                <h4>{{ article.attributes.title }}</h4>
                <p
                v-html="formatSubtitle(article.attributes.subtitle)"
                class="subtitle"></p>
              </div>
            </nuxt-link>
          </div>
        </section>
      </main>
    </section>
    <footer-vue></footer-vue>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Articles',
  mixins: [globalMixin],
  props: {
    pagination: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.articles = this.content.map((article) => ({
      ...article,
      active: false,
    }));

    return true;
  },
  computed: {
    mosaicFormated() {
      let actualMosaicId = 1;
      const mosaicLength = Math.ceil(this.content.length / 3);
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
    @media (min-width: 350px) {
      margin-top: 4rem;
      margin-bottom: 6rem;
    }

    @media (min-width: 920px) {
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 8rem;
    }

    &--mosaic1 {
      @media (min-width: 920px) {
        margin-bottom: 8rem;

        &--wrapper:first-child {
          margin-top: 6rem;
        }

        &--wrapper:last-child {
          margin-top: -5rem;
        }
      }

      @media (min-width: 1100px) {
        margin-bottom: 16rem;

        &--wrapper:first-child {
          margin-top: 12rem;
        }

        &--wrapper:last-child {
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
            max-width: 30vw;
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
}
</style>