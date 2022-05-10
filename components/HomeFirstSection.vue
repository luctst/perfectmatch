<template>
  <section class="gettingmaried--wrapper">
    <section class="gettingmaried container-fluid">
      <div class="gettingmaried--title">
        <h2>Vous allez <span>vous marier</span> ?</h2>
        <h2>La demande tant attendue est arrivée ? </h2>
        <h2>Con-gra-tu-la-tion !</h2>
      </div>
      <div class="gettingmaried--circle">
        <div class="is__container__img">
          <logo-circle></logo-circle>
        </div>
      </div>
      <div class="gettingmaried--content">
        <p class="subtitle">Si vous êtes ici, c'est sûrement que vous vous posez quelques questions à propos de l l'organisation de votre grand jour. <br/><span>Alors vous êtes au bon endroit !</span></p>
      </div>
    </section>
  </section>
</template>

<script>
import GlobalMixin from '~/mixins/global';
import LogoCircle from '~/assets/img/logo-circle.svg?inline';

export default {
  name: 'HomeFirstSection',
  components: {
    LogoCircle,
  },
  mixins: [GlobalMixin],
};
</script>

<style lang="scss" scoped>
.gettingmaried--wrapper {
  background-color: $colorWhite;
}

.gettingmaried {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (min-width: 350px) {
    padding-top: 13rem;
    height: auto;
  }

  @media (min-width: 550px) {
    padding-top: 17rem;
  }

  @media (min-width: 650px) {
    padding-top: 20rem;
  }

  @media (min-width: 800px) {
    padding-top: 23rem;
  }

  @media (min-width: 920px) {
    padding-top: 170px;
    height: auto;
  }

  &--title {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      text-align: center;
    }
  }

  &--circle {
    position: relative;

    @media (min-width: 350px) {
      margin-top: 60px;
      order: 2;
    }

    @media (min-width: 920px) {
      margin-top: 0;
    }

    div {
      @media (min-width: 350px) {
        margin: 0 auto;
        width: 70vw;
      }

      @media (min-width: 500px) {
        width: 50vw;
        max-width: 20rem;
      }

      @media (min-width: 920px) {
        margin: 0;
        width: 16vw;
      }
    }
  }

  &--content {
    display: flex;
    justify-content: center;

    @media (min-width: 350px) {
      order: 1;
    }

    p {
      @media (min-width: 500px) {
        max-width: 70%;
      }

      @media (min-width: 920px) {
        margin-top: 5vh;
        max-width: 30%;
      }

      @media (min-width: 1600px) {
        max-width: 25%;
      }
    }
  }
}
</style>