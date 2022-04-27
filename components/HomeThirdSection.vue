<template>
  <section class="formulasinfos container-fluid">
    <div class="formulasinfos--img">
      <div class="is__container__img formulasinfos--img--container">
        <img src="~/assets/img/flower.jpg">
      </div>
      <div class="formulasinfos--img--content">
        Pour contenter chaque futur marié, nous nous adapterons à tout type de demande et de budget. <span>A vous de choisir la formule qui vous correspond le mieux !</span>
      </div>
    </div>
    <div class="formulasinfos--content">
      <p>Mariage</p>
      <h3>The Perfect Match vous propose <span>3 formules</span> pour votre mariage.</h3>
    </div>
  </section>
</template>

<script>
import GlobalMixin from '~/mixins/global';

export default {
  name: 'FormulaInfos',
  mixins: [GlobalMixin],
};
</script>

<style lang="scss" scoped>
.formulasinfos {
  background-color: $colorWhite;
  display: flex;
  position: relative;
  z-index: 2;

  @media (min-width: 350px) {
    flex-direction: column;
    padding-top: 80px;

    &--img {
      max-width: 335px;
      margin: 0 auto;
    }

    &--content {
      margin-top: 80px;
      text-align: center;

      h3 {
        font-size: 1.9em;
      }
    }
  }

  @media (min-width: 662px) {
    &--content {
      h3 {
        margin-left: 13%;
        margin-right: 13%;
      }
    }
  }

  @media (min-width: 800px) {
    margin-top: 0;
    align-items: flex-end;
    flex-direction: row-reverse;

    &--img {
      max-width: 324px;
      margin: 0;
    }

    &--content {
      p {
        text-align: left;
        margin-top: 0;
      }

      h3 {
        font-size: 2em;
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0;
        text-align: left;
      }
    }
  }

  @media (min-width: 828px) {
    &--content {
      margin-top: 0;

      h3 {
        margin-right: 3%;
      }
    }
  }

  @media (min-width: 950px) {
    &--content {
      h3 {
        font-size: 3em;
      }
    }
  }

  @media (min-width: 1000px) {
    &--img {
      transform: translateY(-10%);
    }

    &--content {
      margin-bottom: 5.6%;
    }
  }

  @media (min-width: 1100px) {
    &--content {
      margin-bottom: 3.2%;

      h3 {
        font-size: 3.5em;
      }
    }
  }

  &--img {
    &--container {
      width: inherit;
    }

    &--content {
      color: $textColor;
      font-family: $mainTypo;
      font-size: 14px;
      line-height: 20px;
      margin: 0;
      margin-top: 25px;

      span {
        display: inline-block;
        font-family: $mainTypoBold;
      }
    }
  }

  &--content {
    p,
    h3 {
      color: $textColor;
    }

    p {
      font-family: $mainTypo;
      font-size: 12px;
      text-transform: uppercase;
      line-height: 13.8px;
    }

    h3 {
      font-family: $secondTypo;
      margin-top: 15px;

      span {
        font-family: $mainTypoNeueBold;
      }
    }
  }
}
</style>