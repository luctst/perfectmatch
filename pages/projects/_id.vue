<template>
  <section class="project--wrapper">
    <header-vue></header-vue>
    <section class="project container-fluid">
      <div class="project--name">
        <h1 v-html="content.project_name"></h1>
      </div>
      <div class="project--slider">
        <vue-slick-carousel
        :autoplay="true"
        :autoplay-speed="5000"
        :arrows="false"
        :dots="true"
        :infinite="true"
        :center-mode="true"
        :slides-to-show="1"
        :slides-to-scroll="1"
        lazy-load="progressive">
          <img
          v-for="(img, i) in content.images.data"
          :key="i"
          :src="img.attributes.url"
          :alt="img.attributes.alternativeText"/>
          <template #customPaging="page">
            <div class="custom-dot">
              {{ page }}
            </div>
          </template>
        </vue-slick-carousel>
      </div>
      <div class="project--testimony">
        <div class="title--tag">{{ content.little_title }}</div>
        <h2 v-html="parseMarkdown(content.temoignages)"></h2>
        <div v-html="content.subtitle" class="subtitle"></div>
      </div>
    </section>
    <footer-vue></footer-vue>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import globalMixin from '~/mixins/global';

export default {
  name: 'Project',
  components: {
    VueSlickCarousel,
  },
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.project--wrapper {
  background-color: $colorWhite;
}

.project {
  position: relative;
  z-index: 3;

  @media (min-width: 920px) {
    padding-top: 8rem;
  }

  &--name {
    @media (min-width: 1100px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 70%;
    }
  }

  &--slider {
    @media (min-width: 920px) {
      margin-top: 4rem;
      margin-bottom: 6rem;
    }
  }

  &--testimony {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (min-width: 920px) {
      padding-bottom: 8rem;
    }

    h2,
    .subtitle {
      @media (min-width: 920px) {
        max-width: 70%;
      }

      @media (min-width: 1100px) {
        max-width: 50%;
      }
    }

    h2 {
      text-align: center;
    }

    .subtitle {
      margin-top: 2rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>