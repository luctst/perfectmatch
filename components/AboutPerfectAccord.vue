<template>
  <section class="accord container-fluid">
    <div class="accord--picture">
      <div class="is__container__img">
        <img src="~/assets/img/Rectangle-54.jpg">
      </div>
    </div>
    <div class="accord--content">
      <div>Pourquoi The Perfect Match ?</div>
      <h3>The Perfect Match</h3>
      <h3>C'est <span>l'accord parfait</span></h3>
      <p>L'accord parfait entre un couple qui s'est bien trouvé et qui souhaite s'unir pour la vie. Mais c'est aussi l'accord parfait entre vous et moi, le début d'une jolie collaboration pour réaliser vos plus beaux souvenirs. Le match parfait quoi !</p>
    </div>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Accord',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.accord {
  background-color: $colorWhite;
  display: flex;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    flex-direction: column;
    padding-top: 80px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    padding-top: 160px;
    padding-bottom: 120px;
  }

  &--picture {
    @media (min-width: 400px) {
      div {
        max-width: 350px;
      }

      margin: 0 auto;
    }

    @media (min-width: 800px) {
      div {
        max-width: none;
      }
    }
  }

  &--content {
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
        font-size: 2em;
      }

      @media (min-width: 800px) {
        font-size: 3em;
      }

      @media (min-width: 950px) {
        font-size: 3.5em;
        line-height: 56px;
      }

      @media (min-width: 1100px) {
        font-size: 4em;
      }
    }

    p {
      color: $textColor;
      font-family: $mainTypo;
      font-size: 14px;
      line-height: 20px;
      margin: 0;

      @media (min-width: 350px) {
        margin-top: 25px;
      }

      @media (min-width: 550px) {
        margin-left: 12%;
        margin-right: 12%;
      }

      @media (min-width: 800px) {
        margin-left: 0;
        margin-top: 40px;
      }
    }

    @media (min-width: 350px) {
      margin-top: 50px;
      margin-bottom: 80px;
      text-align: center;
    }

    @media (min-width: 800px) {
      text-align: left;
      margin-left: 6%;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}
</style>