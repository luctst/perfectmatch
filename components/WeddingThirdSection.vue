<template>
  <section class="third--wrapper">
    <section class="third container-fluid">
      <div class="third--title">
        <h3 v-html="content.title"></h3>
        <div v-html="parseMarkdown(content.subtitle)" class="subtitle"></div>
      </div>
      <div class="third--picture">
        <div class="is__container__img third--picture--wrapper"  data-parallaxUpMobile>
          <img 
          data-parallaxUp
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
  name: 'Third',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.is__return__line {
  @media (min-width: 350px) {
    display: none;
  }

  @media (min-width: 800px) {
    display: block;
  }
}

.third--wrapper {
  background-color: $colorWhite;
  position: relative;
  z-index: 4;
}

.third {
  box-sizing: border-box;
  display: flex;
  position: relative;

  @media (min-width: 350px) {
    padding-bottom: 120px;
  }

  @media (min-width: 350px) {
    flex-direction: column;
  }

  @media (min-width: 920px) {
    padding-bottom: 0;
    flex-direction: row;
    transform: translateY(16%);
  }

  &--title {
    @media (min-width: 350px) {
      text-align: center;
      margin-top: 40px;
      order: 2;
    }

    @media (min-width: 700px) {
      margin: 40px 7% 0;
    }

    @media (min-width: 920px) {
      text-align: left;
      margin: 0;
      order: 1;

      .subtitle {
        text-align: left;
        max-width: 80%;
      }
    }

    @media (min-width: 1100px) {
      margin-left: 8%;

      .subtitle {
        max-width: 80%;
      }
    }
  }

  &--picture {
    @media (min-width: 350px) {
      margin: 0 auto;
      order: 1;
    }

    @media (min-width: 920px) {
      flex: 0 0 30%;
      order: 2;
    }

    &--wrapper {
      @media (min-width: 400px) {
        max-width: 80vw;
      }

      @media (min-width: 540px) {
        max-width: 64vw;
      }

      @media (min-width: 650px) {
        max-width: 51vw;
      }

      @media (min-width: 840px) {
        max-width: 45vw;
      }
    }
  }
}
</style>