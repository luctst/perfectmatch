<template>
  <section class="article--wrapper">
    <header-vue></header-vue>
    <main class="article container">
      <header class="article--header">
        <div class="title--tag">{{ dateFormated }}</div>
        <h1>{{ content.title }}</h1>
        <div class="subtitle" v-html="content.subtitle"></div>
        <div class="is__container__img">
          <img
          :src="content.mainimage.data.attributes.formats.thumbnail.url"
          :alt="content.mainimage.data.attributes.alternativeText"/>
        </div>
      </header>
      <section
      v-html="bodyArticle"
      class="article--body"></section>
      <div class="article--strike">
        <span></span>
      </div>
    </main>
    <articles
      :titles="[
      'Découvrez d\'autres',
      '<span>conseil et articles</span>',
      ]">
    </articles>
    <footer-vue></footer-vue>
  </section>
</template>

<script>
import { marked } from 'marked';
import globalMixin from '~/mixins/global';

export default {
  name: 'Article',
  mixins: [globalMixin],
  computed: {
    dateFormated() {
      const updatedAt = new Date(this.content.updatedAt);
      return `${updatedAt.getDate()} ${this.monthsFR[updatedAt.getMonth()]} ${updatedAt.getFullYear()}`;
    },
    bodyArticle() {
      marked.setOptions({
        breaks: true,
        gfm: true,
      });

      return marked(this.content.content);
    },
  },
  data() {
    return {
      monthsFR: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Aôut',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.article--wrapper {
  background-color: $colorWhite;
}

.article {
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    padding-top: 8rem;
  }

  @media (min-width: 920px) {
    padding-top: 12rem;
    max-width: 900px;
  }

  &--header {
    .title--tag {
      text-align: center;
    }

    .subtitle {
      margin-bottom: 4rem;
    }

    .is__container__img {
      height: 100%;

      img {
        max-height: 530px;
      }
    }
  }

  &--body {
    margin-top: 6rem;
  }

  &--strike {
    display: flex;
    justify-content: center;
    margin-top: 4rem;

    span {
      background-color: $colorSubTitle;
      max-width: 100%;
      height: 1px;
      display: inline-block;
      opacity: .1;

      @media (min-width: 920px) {
        width: 70%;
      }
    }
  }
}
</style>