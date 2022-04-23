<template>
  <section class="agency container">
    <div class="agency--wrapper--content">
      <h3>Une agence d’organisation d’<span>évènements</span> privés.</h3>
      <div>Basée entre Paris et Bordeaux, nous vous proposons de choisir l’évènement et le lieu de votre choix, afin de satisfaire tous vos désirs.</div>
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
  display: flex;
  align-items: center;
  max-height: 50vh;

  @media (min-width: 350px) {
    height: 40vh;
    margin-top: 80px;
  }

  @media (min-width: 800px) {
    margin-top: 0;
  }

  @media (min-width: 1000px) {
    height: 45vh;
  }

  &--wrapper--content {
    h3 {
      color: $textColor;
      font-family: $secondTypo;
      font-weight: normal;
      margin: 0;
      
      span {
        display: inline-block;
        font-family: $mainTypoNeueBold;
      }
  
      @media (min-width: 350px) {
        font-size: 1.7em;
      }

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
        font-size: 2.2em;
        width: 63%;
      }

      @media (min-width: 800px) {
        font-size: 3em;
        width: 80%;
      }

      @media (min-width: 1100px) {
        width: 59%;
      }
    }
    div {
      color: $textColor;
      font-family: $mainTypo;
      margin: 0;
  
      @media (min-width: 350px) {
        font-size: 14px;
        margin: 25px 0 40px 0;
        line-height: 20px;
      }

      @media (min-width: 769px) {
        width: 58%;
      }

      @media (min-width: 800px) {
        margin: 40px 0 75px 0;
      }

      @media (min-width: 1100px) {
        width: 40%;
      }
    }
  }
}
</style>
