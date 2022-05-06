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
      <p class="title--tag">Mariage</p>
      <h2>The Perfect Match vous propose <br/><span>3 formules</span> pour votre mariage.</h2>
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
    justify-content: space-between;
    padding-top: 80px;

    &--img {
      max-width: 335px;
      margin: 0 auto;
    }

    &--content {
      margin-top: 80px;
      text-align: center;
    }
  }

  @media (min-width: 662px) {
    &--content {
      h2 {
        margin-right: 13%;
      }
    }
  }

  @media (min-width: 800px) {
    margin-top: 0;
    align-items: flex-end;
    flex-direction: row-reverse;
    padding-top: 0;

    &--img {
      max-width: 324px;
      margin: 0;
    }

    &--content {
      p {
        text-align: left;
        margin-top: 0;
      }

      h2 {
        margin-right: 0;
      }
    }
  }

  @media (min-width: 828px) {
    &--content {
      margin-top: 0;
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
    h2 {
      text-align: left;
    }
  }
}
</style>