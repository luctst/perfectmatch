<template>
  <section class="goal--wrapper">
    <section class="goal container-fluid">
      <div class="goal--content">
        <div class="goal--content--title" data-line>
          <h2 v-html="content.first_title"></h2>
          <h2 v-html="content.second_title"></h2>
        </div>
        <div class="goal--content--subtitle">
          <p v-html="parseMarkdown(content.first_subtitle)" class="subtitle2"></p>
          <p
          v-html="parseMarkdown(content.second_subtitle)"
          :class="[$route.params.service === 'dday' ? 'subtitle' : 'subtitle2']"></p>
        </div>
      </div>
      <div class="goal--picture">
        <div class="is__container__img">
          <img 
          :src="content.image.data.attributes.url"
          :alt="content.image.data.attributes.alternativeText"/>
        </div>
        <div class="is__container__img">
          <logo-circle></logo-circle>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';
import LogoCircle from '~/assets/img/logo-circle.svg?inline';

export default {
  name: 'Goal',
  components: {
    LogoCircle,
  },
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.goal--wrapper {
  background-color: $colorWhite;
}

.goal {
  display: flex;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 120px;
  }

  @media (min-width: 660px) {
    padding-bottom: 80px;
  }

  @media (min-width: 920px) {
    flex-direction: row;
  }

  @media (min-width: 1400px) {
    padding-top: 120px;
  }

  &--content {
    @media (min-width: 350px) {
      margin-top: 40px;
      order: 2;
    }

    @media (min-width: 920px) {
      flex: 0 0 60%;
      margin-right: 32px;
      order: 1;
    }

    @media (min-width: 1200px) {
      margin-right: 80px;
    }

    &--subtitle {
      .subtitle {
        text-align: left;
      }

      @media (min-width: 920px) {
        padding-top: 40px;
        max-width: 60%;
      }
    }
  }

  &--picture {
    position: relative;

    @media (min-width: 350px) {
      order: 1;

      div:first-child {
        max-width: 100vw;
        margin: 0 auto;

        img {
          max-height: 500px;
        }
      }

      div:last-child {
        display: none;
      }
    }

    @media (min-width: 430px) {
      div:first-child {
        max-width: 80vw;
      }
    }

    @media (min-width: 520px) {
      div:first-child {
        max-width: 65vw;
      }
    }

    @media (min-width: 660px) {
      div:first-child {
        max-width: 55vw;
      }
    }

    @media (min-width: 920px) {
      order: 2;

      div:first-child {
        max-width: 100%;
      }

      div:last-child {
        display: block;
        left: -5rem;
        top: -10%;
        position: absolute;
        max-width: 16vw;
      }
    }
  }
}
</style>