<template>
  <section class="project--wrapper">
    <header-vue></header-vue>
    <section class="project">
      <div class="project--name container-fluid" data-line>
        <h1 v-html="content.project_name"></h1>
      </div>
      <div class="project--slider">
        <vue-slick-carousel
        :draggable="true"
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
      <div class="project--testimony container-fluid">
        <div class="title--tag">{{ content.little_title }}</div>
        <h2 v-html="parseMarkdown(content.temoignages)"></h2>
        <div v-html="content.subtitle" class="subtitle"></div>
      </div>
    </section>
    <footer-vue :content="content.footer"></footer-vue>
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
  scrollToTop: true,
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

  @media (min-width: 350px) {
    padding-top: 8rem;
  }

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
    @media (min-width: 350px) {
      margin-top: 2rem;
      margin-bottom: 4rem;
    } 

    @media (min-width: 920px) {
      margin-top: 4rem;
      margin-bottom: 10rem;
    }
  }

  &--testimony {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (min-width: 350px) {
      padding-bottom: 4rem;
    }

    @media (min-width: 920px) {
      padding-bottom: 12rem;
    }

    h2,
    .subtitle {
      @media (min-width: 700px) {
        max-width: 80%;
      }

      @media (min-width: 920px) {
        max-width: 70%;
      }

      @media (min-width: 1100px) {
        max-width: 50%;
      }
    }

    h2 {
      text-align: center;

      @media (min-width: 1100px) {
        max-width: 70%;
      }
    }

    .subtitle {
      margin-top: 2rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>