<template>
  <section class="floatline container-fluid">
    <div class="floatline--loop">
      <loop></loop>
    </div>
    <div class="floatline--title">
      <h1>La bienveillance, l'écoute <br class="is__return__line"/>et le <span>sur-mesure</span></h1>
      <div class="floatline--title--extra">
        <div class="subtitle">Autant de valeurs que <span>The Perfect Match</span> mettra à votre profit pour créer vos plus beaux souvenirs.</div>
        <span class="is__span__outside__h2"></span>
      </div>
    </div>
    <div class="floatline--profile">
      <div class="is__container__img">
        <img src="~/assets/img/pic-profile.jpg" alt="Picture profile">
      </div>
    </div>
  </section>
</template>

<script>
import GlobalMixin from '~/mixins/global';
import Loop from '~/assets/img/about-loop.svg?inline';

export default {
  name: 'AboutFloatLine',
  components: {
    Loop,
  },
  mixins: [GlobalMixin],
};
</script>

<style lang="scss" scoped>
.is__return__line {
  @media (min-width: 350px) {
    display: none;
  }

  @media (min-width: 920px) {
    display: block;
  }
}

.floatline {
  background-color: $colorBeige;
  position: relative;
  z-index: 4;

  @media (min-width: 350px) {
    padding-top: 8em!important;
    height: calc(100vh);
  }

  @media (min-width: 920px) {
    padding-top: 12em!important;
    height: calc(100vh - 12em);
  }

  &--loop {
    position: absolute;
    left: 0;
    right: 0;
    top: -20px;
    z-index: 1;

    svg {
      object-fit: cover;
      max-height: 100%;
      max-width: 100%;
    }
  }

  &--title,
  &--profile {
    position: relative;
    z-index: 2;
  }

  &--title {
    h1 {
      @media (min-width: 350px) {
        margin-bottom: 50px;
        text-align: center;
      }

      @media (min-width: 920px) {
        text-align: left;
        margin-bottom: 0;
      }
    }

    &--extra {
      div {
        @media (min-width: 350px) {
          text-align: center;
          margin-bottom: 16px;
        }
        @media (min-width: 450px) {
          margin: 0 10% 16px 10%;
        }
        @media (min-width: 550px) {
          margin: 0 15% 16px 15%;
        }
        @media (min-width: 920px) {
          text-align: left;
          margin: 0 0 16px 0;
          max-width: 315px;
        }
      }

      .is__span__outside__h2 {
        background-color: #EDCDB8;
        display: inline-block;
        transform-origin: top left;
        transform: rotate(90deg);
        height: 1px;
        width: 30px;
      }

      @media (min-width: 350px) {
        align-items: center;
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 920px) {
        align-items: flex-start;
        margin-bottom: 8%;
      }

      @media (min-width: 900px) {
        margin-bottom: 6%;
      }

      @media (min-width: 1100px) {
        margin-bottom: 4%;
      }
    }

    @media (min-width: 920px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100vh - 12em);
    }
  }

  &--profile {
    @media (min-width: 350px) {
      margin-top: 60px;
      transform: translateY(20%);

      div {
        position: relative;
        z-index: 3;
      }
    }

    @media (min-width: 450px) {
      display: flex;
      justify-content: center;

      div {
        max-width: 350px;
      }
    }

    @media (min-width: 550px) {
      div {
        max-width: 400px;
      }
    }

    @media (min-width: 920px) {
      justify-content: flex-end;
      transform: translateY(-80%);

      div {
        max-width: 35vw;
      }
    }

    @media (min-width: 1100px) {
      transform: translateY(-60%);
    }

    @media (min-width: 1600px) {
      div {
        max-width: 40vw;
      }
    }

    @media (min-width: 1720px) {
      div {
        max-width: 25vw;
      }
    }
  }
}
</style>