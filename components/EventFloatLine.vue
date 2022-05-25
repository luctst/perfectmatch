<template>
  <section class="f floatline--wrapper">
    <section class="floatline container-fluid">
      <div class="floatline--img--left">
        <div class="is__container__img" data-rellax data-rellax-speed="2">
          <img
          :src="content.image.data.attributes.url"
          :alt="content.image.data.attributes.alternativeText"/>
        </div>
      </div>
      <div class="floatline--title">
        <h1 data-line>{{ content.title }}</h1>
        <div class="subtitle" data-line v-html="parseMarkdown(content.subtitle)"></div>
        <span></span>
      </div>
      <div class="floatline--img--right">
        <div class="is__container__img" data-rellax data-rellax-speed="2">
          <logo-circle></logo-circle>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import LogoCircle from '~/assets/img/logo-circle.svg?inline';
import globalMixin from '~/mixins/global';

export default {
  name: 'Floatline',
  components: {
    LogoCircle,
  },
  mixins: [globalMixin],
}
</script>

<style lang="scss" scoped>
.floatline--wrapper {
  background-color: $colorWhite;
}

.floatline {
  display: flex;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    padding-top: 8rem;
    flex-direction: column;
  }

  @media (min-width: 920px) {
    flex-direction: row;
    padding-top: 10rem;
  }

  &--img--left {
    @media (min-width: 920px) {
      flex: 0 0 24%;
    }

    div {
      @media (min-width: 350px) {
        margin: 0 auto;
        max-width: 80%;
      }

      @media (min-width: 470px) {
        max-width: 70%;
      }

      @media (min-width: 540px) {
        max-width: 60%;
      }

      @media (min-width: 680px) {
        max-width: 50%;
      }

      @media (min-width: 770px) {
        max-width: 40%;
      }

      @media (min-width: 920px) {
        max-width: 100%;
        height: 100%;
      }
    }
  }

  &--title {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (min-width: 350px) {
      padding-top: 2rem;
      padding-bottom: 6rem;
    }

    @media (min-width: 920px) {
      margin-top: auto;
      padding: 0;
    }

    div {
      margin-bottom: 1rem;

      @media (min-width: 700px) {
        margin-left: 8rem;
        margin-right: 8rem;
      }

      @media (min-width: 920px) {
        margin-top: 1rem;
        margin-left: 12rem;
        margin-right: 12rem;
      }
    }

    span {
      display: block;
      background-color: #EDCDB8;
      height: 27px;
      width: 1px;
    }
  }

  &--img--right {
    @media (min-width: 920px) {
      flex: 0 0 20%;
    }

    div {
      @media (min-width: 350px) {
        max-width: 80%;
        margin: 0 auto;
      }

      @media (min-width: 470px) {
        max-width: 70%;
      }

      @media (min-width: 540px) {
        max-width: 50%;
      }

      @media (min-width: 680px) {
        max-width: 40%;
      }

      @media (min-width: 770px) {
        max-width: 30%;
      }

      @media (min-width: 920px) {
        max-width: 100%;
      }
    }
  }
}
</style>