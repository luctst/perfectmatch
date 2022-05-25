<template>
  <section class="speciality--wrapper">
    <section class="speciality container-fluid">
      <div class="speciality--title">
        <h3 v-html="parseMarkdown(content.title)"></h3>
        <div class="subtitle" v-html="parseMarkdown(content.subtitle)"></div>
      </div>
      <div class="speciality--img">
        <div class="is__container__img">
          <img
           data-parallaxDown
          :src="content.image.data.attributes.url"
          :alt="content.image.data.attributes.alternativeText"/>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Speciality',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.speciality--wrapper {
  background-color: $colorWhite;
}

.speciality {
  box-sizing: border-box;
  display: flex;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    align-items: center;
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 6rem;
  }

  @media (min-width: 920px) {
    padding-top: 0;
    flex-direction: row;
    padding-bottom: 12rem;
  }

  &--title {
    @media (min-width: 350px) {
      margin-top: 2rem;
      order: 2;
    }

    @media (min-width: 450px) {
      max-width: 80%;
    }

    @media (min-width: 740px) {
      max-width: 65%;
    }

    @media (min-width: 920px) {
      flex: 0 0 63%;
      margin-top: 0;
      order: 0;
    }

    @media (min-width: 1100px) {
      flex-basis: 56%;
      margin-left: 6rem;
    }

    h3 {
      @media (min-width: 350px) {
        text-align: center;
      }

      @media (min-width: 920px) {
        text-align: left;
      }
    }

    .subtitle {
      @media (min-width: 920px) {
        text-align: left;
      }
    }
  }

  &--img {
    div {
      @media (min-width: 450px) {
        margin: 0 auto;
        max-width: 80%;
      }

      @media (min-width: 650px) {
        max-width: 65%;
      }

      @media (min-width: 920px) {
        position: absolute;
        top: 14%;
        right: 15px;
        max-width: 30%;
        margin: 0;
      }

      @media (min-width: 1100px) {
        max-width: 22%;
        top: 50%;
        right: 50px;
      }
    }
  }
}
</style>