<template>
  <section class="agency container-fluid">
    <div class="agency--wrapper--content">
      <h2>Une agence d’organisation d’<span>évènements</span> privés.</h2>
      <div class="subtitle">Basée entre Paris et Bordeaux, nous vous proposons de choisir l’évènement et le lieu de votre choix, afin de satisfaire tous vos désirs.</div>
      <button class="is__btn__primary">En savoir plus</button>
    </div>
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
.agency {
  background-color: $colorWhite;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: 350px) {
    height: 40vh;
    padding-top: 80px;
  }

  @media (min-width: 500px) {
    padding-left: 10%;
  }

  @media (min-width: 1000px) {
    height: 55vh;
    padding-left: 13%;
  }

  @media (min-width: 1021px) {
    padding-top: 0;
    padding: 0 15%;
  }

  &--wrapper--content {
    h2 {
      text-align: left;

      @media (min-width: 400px) {
        width: 90%;
      }

      @media (min-width: 460px) {
        width: 80%;
      }

      @media (min-width: 500px) {
        width: 65%;
      }

      @media (min-width: 769px) {
        width: 63%;
      }

      @media (min-width: 800px) {
        width: 100%;
      }
    }

    div {
      text-align: left;

      @media (min-width: 350px) {
        margin-bottom: 40px;
        line-height: 20px;
      }

      @media (min-width: 769px) {
        width: 58%;
      }

      @media (min-width: 800px) {
        margin: 2vh 0 75px 0;
      }

      @media (min-width: 1100px) {
        width: 40%;
      }
    }
  }
}
</style>
