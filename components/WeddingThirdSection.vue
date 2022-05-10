<template>
  <section class="third container-fluid">
    <div class="third--title">
      <h3>Si vous vous retrouvez dans une de ces catégories,<br class="is__return__line"/> l'organisation complète est faite pour vous.</h3>
      <div class="subtitle">J'ai conscience que déléguer le jour qui sera un des plus importants de votre vie n'est pas évident, mais il est important de rappeler que c'est <span>votre mariage, votre journée, le plus beau jour de votre vie.</span> Alors vous resterez décisionnaires sur tout. Je serai là pour vous accompagner, vous conseiller, réaliser vos volontés mais jamais pour décider à votre place.</div>
    </div>
    <div class="third--picture">
      <div class="is__container__img third--picture--wrapper">
        <img src="~/assets/img/flower.jpg"/>
      </div>
    </div>
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

.third {
  background-color: $colorWhite;
  box-sizing: border-box;
  display: flex;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    padding-bottom: 120px;
  }

  @media (min-width: 350px) {
    flex-direction: column;
  }

  @media (min-width: 920px) {
    flex-direction: row;
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
      flex: 0 0 65%;
      text-align: left;
      margin: 0;
      margin-left: 8%;
      order: 1;

      .subtitle {
        text-align: left;
        max-width: 80%;
      }
    }

    @media (min-width: 1100px) {

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