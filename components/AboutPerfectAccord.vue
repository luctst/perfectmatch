<template>
  <section class="accord container-fluid">
    <div class="accord--picture">
      <div class="is__container__img">
        <img src="~/assets/img/Rectangle-54.jpg">
      </div>
    </div>
    <div class="accord--content">
      <div class="title--tag">Pourquoi The Perfect Match ?</div>
      <h2>The Perfect Match</h2>
      <h2>C'est <span>l'accord parfait</span></h2>
      <p class="subtitle">L'accord parfait entre un couple qui s'est bien trouvé et qui souhaite s'unir pour la vie. Mais c'est aussi l'accord parfait entre vous et moi, le début d'une jolie collaboration pour réaliser vos plus beaux souvenirs. Le match parfait quoi !</p>
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

  @media (min-width: 920px) {
    flex-direction: row;
    align-items: center;
    padding-top: 180px;
    padding-bottom: 180px;
  }

  &--picture {
    @media (min-width: 400px) {
      div {
        max-width: 350px;
      }

      margin: 0 auto;
    }

    @media (min-width: 920px) {
      div {
        max-width: none;
      }
    }
  }

  &--content {
    div {
      margin-bottom: 15px;
    }

    p {
      @media (min-width: 350px) {
        margin-top: 25px;
      }

      @media (min-width: 550px) {
        margin-left: 12%;
        margin-right: 12%;
      }

      @media (min-width: 920px) {
        text-align: left;
        margin-left: 0;
        margin-top: 40px;
      }
    }

    @media (min-width: 350px) {
      margin-top: 50px;
      margin-bottom: 80px;
      text-align: center;
    }

    @media (min-width: 920px) {
      text-align: left;
      margin-left: 6%;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}
</style>