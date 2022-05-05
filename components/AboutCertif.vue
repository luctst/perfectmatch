<template>
  <section class="certif container-fluid">
    <div class="certif--title">
      <div>Mon parcours</div>
      <h3><span>Certifiée</span> organisateur de mariage</h3>
    </div>
    <div class="certif--content">
      <div class="is__container__img">
        <img src="~/assets/img/certif.png"/>
      </div>
      <p>Après avoir travaillé en tant qu'agent immobilier pendant près de 4 ans sur la région bordelaise, je voulu me réorienté vers un métier plus en accord avec moi même.</p>
      <p>C'est pourquoi j'ai suivi une formation d'organisatrice de mariage au sein de l'école **EFMM** (école de formation aux métiers du mariage).</p>
    </div>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Certif',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.certif {
  background-color: $colorWhite;
  color: $textColor;
  position: relative;
  z-index: 3;

  &--title {
    div {
      font-family: $mainTypo;
      font-size: 12px;
      text-transform: uppercase;
      line-height: 13.8px;
      margin-bottom: 15px;
    }

    h3 {
      font-family: $secondTypo;
      line-height: 40px;
      font-weight: 100;
      margin: 0;

      span {
        font-family: $mainTypoNeueBold;
      }

      @media (min-width: 350px) {
        font-size: 1.9em;
      }

      @media (min-width: 800px) {
        font-size: 2.5em;
      }

      @media (min-width: 950px) {
        font-size: 3em;
      }

      @media (min-width: 1100px) {
        font-size: 3.5em;
      }
    }
  }

  &--content {
    p {
      color: $textColor;
      font-family: $mainTypo;
      font-size: 14px;
      line-height: 20px;
      margin: 0;
    }

    @media (min-width: 350px) {
      margin-top: 30px;
      padding-bottom: 70px;

      div {
        margin-bottom: 25px;
      }
    }

    @media (min-width: 450px) {
      div {
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
      }

      p {
        text-align: center;
        margin: 0 6%;
      }
    }

    @media (min-width: 800px) {
      display: flex;
      margin-top: 60px;
      padding-bottom: 140px;

      div {
        flex: 0 0 30%;
        margin-bottom: 0;
      }

      p {
        text-align: left;
        margin-left: 0;
        margin-right: 0;
        line-height: 24px;
        font-size: 16px;
      }

      p:first-of-type {
        margin: 0 2%;
      }
    }
  }
}
</style>