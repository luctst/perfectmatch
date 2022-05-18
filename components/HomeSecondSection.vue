<template>
  <section class="agency--wrapper">
    <section class="agency container-fluid">
      <div class="agency--wrapper--content">
        <h2 v-html="content.title"></h2>
        <div class="subtitle">{{ content.subtitle }}</div>
        <button class="is__btn__primary">
          <nuxt-link to="/about">
            {{ content.button }}
          </nuxt-link>
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import GlobalMixin from '~/mixins/global';

export default {
  name: 'Agency',
  mixins: [GlobalMixin],
};
</script>

<style lang="scss" scoped>
.agency--wrapper {
  background-color: $colorWhite;
}

.agency {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (min-width: 350px) {
    align-items: center;
    padding-top: 80px;
  }

  @media (min-width: 920px) {
    height: auto;
    align-items: flex-start;
    padding-left: 13%;
  }

  @media (min-width: 1021px) {
    padding: 0 15%;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: 1800px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  &--wrapper--content {
    h2 {
      @media (min-width: 350px) {
        text-align: center;
      }

      @media (min-width: 920px) {
        text-align: left;
      }
    }

    div {
      @media (min-width: 350px) {
        text-align: center;
        margin-bottom: 40px;
      }

      @media (min-width: 920px) {
        text-align: left;
        margin: 2vh 0 75px 0;
      }
    }

    button {
      @media (min-width: 350px) {
        margin: 0 auto;
      }

      @media (min-width: 920px) {
        margin: 0;
      }
    }

    @media (min-width: 760px) {
      width: 65%;
    }

    @media (min-width: 920px) {
      width: 70%;

      .subtitle {
        max-width: 30rem;
      }
    }

    @media (min-width: 1100px) {
      width: 100%;
    }
  }
}
</style>
