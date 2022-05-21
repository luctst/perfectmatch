<template>
  <section class="floatline--wrapper">
    <div class="floatline--wrapper--loop">
      <div class="is__container__img">
        <loop></loop>
      </div>
    </div>
    <section class="floatline container-fluid">
      <div class="floatline--title" data-line>
        <h1 v-html="content.title"></h1>
        <div class="floatline--title--extra">
          <div v-html="content.subtitle" class="subtitle"></div>
          <span class="is__span__outside__h2"></span>
        </div>
      </div>
      <div class="floatline--profile">
        <div ref="containerImg" class="is__container__img" data-rellax data-rellax-speed="-3">
          <img
          :src="content.imageProfile.data.attributes.url"
          :alt="content.imageProfile.data.attributes.alternativeText"/>
        </div>
      </div>
    </section>
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

.floatline--wrapper {
  background-color: $colorBeige;

  &--loop {
    div {
      height: 100vh;
      position: absolute;
      left: 0;
      right: 0;
      top: -240px;
      z-index: 1;
    }
  }
}

.floatline {
  position: relative;
  z-index: 4;

  @media (min-width: 350px) {
    padding-top: 8em!important;
    height: calc(100vh - 8em);
  }

  @media (min-width: 920px) {
    padding-top: 12em!important;
    height: calc(100vh - 12em);
  }

  @media (min-width: 1800px) {
    height: 100vh;
  }

  &--title,
  &--profile {
    position: relative;
    z-index: 2;
  }

  &--title {
    h1 {
      @media (min-width: 350px) {
        font-size: 61px;
        line-height: 60px;
        margin-bottom: 1.5rem;
        text-align: center;
      }

      @media (min-width: 920px) {
        font-size: 7em;
        text-align: left;
        margin-bottom: 0;
        line-height: 1em;
      }

      @media (min-width: 1600px) {
        font-size: 9em;
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

    @media (min-width: 650px) {
      margin: 0 auto;
      max-width: 80%;
    }

    @media (min-width: 920px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100vh - 12em);
      max-width: 100%;
    }
  }

  &--profile {
    @media (min-width: 350px) {
      transform: translateY(15%);

      div {
        position: relative;
        z-index: 5;
      }
    }

    @media (min-width: 450px) {
      display: flex;
      justify-content: center;
    }

    @media (min-width: 550px) {
      div {
        max-width: 70%;
      }
    }

    @media (min-width: 920px) {
      justify-content: flex-end;
      transform: translateY(-50%);

      div {
        max-width: 40vw;
      }
    }

    @media (min-width: 1100px) {
      transform: translateY(-60%);

      div {
        max-width: 30vw;
      }
    }

    @media (min-width: 1800px) {
      div {
        max-width: 30vw;
      }
    }
  }
}
</style>