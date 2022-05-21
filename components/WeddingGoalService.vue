<template>
  <section class="goal--wrapper">
    <section class="goal container-fluid">
      <div class="goal--content">
        <div class="goal--content--title" data-line>
          <h2><div>En quoi consiste</div></h2>
          <h2>l'organisation compléte ?</h2>
        </div>
        <div class="goal--content--subtitle">
          <p class="subtitle2">Il s'agit de l'organisation de votre mariage de A à Z, jusqu'à la coordination du jour J.</p>
          <p class="subtitle2">Autrement dit, je m'occupe de tout et il ne vous restera plus qu'à profiter de votre journée le plus sereinement possible.</p>
        </div>
      </div>
      <div class="goal--picture">
        <div class="is__container__img">
          <img src="~/assets/img/Rectangle 2.jpg"/>
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
    padding-bottom: 140px;
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
        top: 12rem;
        position: absolute;
        max-width: 16vw;
      }
    }

    @media (min-width: 1100px) {
      div:last-child {
        top: 38%;
      }
    }

    @media (min-width: 1200px) {
      div:last-child {
        max-width: 14vw;
      }
    }

    @media (min-width: 1400px) {
      div:last-child {
        top: 16rem;
      }
    }

    @media (min-width: 1800px) {
      div:last-child {
        top: 22rem;
      }
    }
  }
}
</style>