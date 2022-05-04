<template>
  <section class="floatline container-fluid">
    <div class="floatline--loop">
      <loop></loop>
    </div>
    <div class="floatline--title">
      <h1>La bienveillance, l'écoute et le <span>sur-mesure</span></h1>
      <div class="floatline--title--extra">
        <h2>Autant de valeurs que <span>The Perfect Match</span> mettra à votre profit pour créer vos plus beaux souvenirs.</h2>
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
.floatline {
  background-color: $colorBeige;
  position: relative;
  z-index: 4;

  @media (min-width: 350px) {
    padding-top: 8em!important;
    height: calc(100vh);
  }

  @media (min-width: 800px) {
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
      color: $textColor;
      font-family: $secondTypo;
      font-weight: 100;
      font-style: normal;
      margin: 0;

      span {
        font-family: $mainTypoNeueBold;
        display: inline-block;
      }

      @media (min-width: 350px) {
        font-size: 68px;
        margin-bottom: 50px;
        text-align: center;
        line-height: 70px;
      }

      @media (min-width: 500px) {
        font-size: 76px;
      }

      @media (min-width: 800px) {
        font-size: 4.5em;
        line-height: 70px;
        text-align: left;
        margin-bottom: 0;
      }

      @media (min-width: 1100px) {
        font-size: 6.5em;
        line-height: 115px;
      }
    }

    &--extra {
      h2 {
        color: $textColor;
        font-family: $mainTypo;
        line-height: 20px;
        margin: 0;

        span {
          font-family: $mainTypoNeueBold;
          display: inline-block;
        }

        @media (min-width: 350px) {
          font-size: 14px;
          text-align: center;
          margin-bottom: 16px;
        }
        @media (min-width: 450px) {
          margin: 0 10% 16px 10%;
        }
        @media (min-width: 550px) {
          margin: 0 15% 16px 15%;
        }
        @media (min-width: 800px) {
          text-align: left;
          margin: 0 0 16px 0;
          max-width: 350px;
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

      @media (min-width: 800px) {
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

    @media (min-width: 800px) {
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

    @media (min-width: 800px) {
      justify-content: flex-end;
      transform: translateY(-80%);
    }

    @media (min-width: 1100px) {
      transform: translateY(-60%);
    }
  }
}
</style>