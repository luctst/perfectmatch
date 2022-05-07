<template>
  <section class="floatline container-fluid">
    <div class="floatline--loop is__container__img">
      <loop></loop>
    </div>
    <div class="floatline--content">
      <div class="floatline--content--title">
        <h1>Là où <span>votre rêve</span><br/> prend vie</h1>
      </div>
      <div class="floatline--content--subtitle">
        <p class="subtitle">{{ content.subtitle }}</p>
        <div class="is__span__outside__h2"></div>
      </div>
    </div>
    <div class="floatline--slidermobile">
      <div class="is__container__img floatline--slidermobile--firstitem">
        <img
        :src="content.imgleft.data.attributes.url"
        :alt="content.imgleft.data.attributes.alternativeText"/>
      </div>
      <div class="is__container__img floatline--slidermobile--seconditem">
        <div class="floatline--slidermobile--seconditem--overlay">
          <img
          :src="content.imgright.data.attributes.url"
          :alt="content.imgright.data.attributes.alternativeText"/>
        </div>
      </div>
    </div>
    <div class="floatline--sliderdesktop">
      <div class="is__container__img floatline--sliderdesktop--firstitem">
        <img
        :src="content.imgleft.data.attributes.url"
        :alt="content.imgleft.data.attributes.alternativeText"/>
      </div>
      <div class="is__container__img floatline--sliderdesktop--seconditem">
        <div class="floatline--sliderdesktop--seconditem--overlay">
          <img
          :src="content.imgright.data.attributes.url"
          :alt="content.imgright.data.attributes.alternativeText"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GlobalMixin from '~/mixins/global';
import Loop from '~/assets/img/loop.svg?inline';

export default {
  name: 'HomeFloatLine',  
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
  height: 100vh;

  &--loop {
    height: 100vh;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;

    @media (min-width: 350px) {
      top: -80px;
    }

    @media (min-width: 920px) {
      left: -40vw;
    }
  }
  
  &--content,
  &--slidermobile,
  &--sliderdesktop {
    z-index: 2;
  }

  &--content {
    display: flex;
    flex-direction: column;
    position: relative;
    height: inherit;

    @media (min-width: 350px) {
      justify-content: center;
    }

    &--title {
      @media (min-width: 920px) {
        margin-top: auto;
      }

      h1 {
        @media (min-width: 350px) {
          margin-bottom: 50px;
        }

        @media (min-width: 920px) {
          margin-top: auto;
          margin: 0 15%;
        }
      } 
    }

    &--subtitle {
      align-items: center;
      display: flex;
      flex-direction: column;

      @media (min-width: 920px) {
        margin-top: auto;
      }

      p {
        @media (min-width: 500px) {
          margin: 0 50px;
        }
        @media (min-width: 920px) {
          margin: 0 30% 2%;
          margin-top: auto;
        }
  
        @media (min-width: 1100px) {
          margin-left: 38%;
          margin-right: 38%;
        }
      }

      div {
        background-color: #EDCDB8;
        height: 27px;
        margin-bottom: 2%;
        width: 1px;
      }
    }
  }

  &--slidermobile {
    max-width: 100%;
    overflow: scroll;
    z-index: 10;

    &--seconditem {
      &--overlay {
        background: $colorBeige; 
        padding-top: 0px; 
        text-align: center; 
        overflow: hidden;

        img {
          border-top-left-radius: 200px 200px;
          border-top-right-radius: 200px 200px;
          display: block;
        }
      }
    }

    @media (min-width: 350px) {
      display: flex;
      transform: translateY(-15vh);

      &--firstitem {
        margin-right: 20px;
      }

      &--firstitem,
      &--seconditem {
        z-index: 3;

        img {
          max-width: none;
          width: 230px;
        }
      }
    }

    @media (min-width: 500px) {
      &--firstitem {
        margin-right: 30px;
      }

      &--firstitem,
      &--seconditem {
        img {
          width: 270px;
        }
      }
    }

    @media (min-width: 603px) {
      justify-content: center;
    }

    @media (min-width: 650px) {
      &--firstitem,
      &--seconditem {
        img {
          width: 255px;
        }
      }
    }

    @media (min-width: 920px) {
      display: none;
    }
  }

  &--sliderdesktop {
    @media (min-width: 350px) {
      display: none;
    }

    &--seconditem {
      &--overlay {
        background: transparent; 
        padding-top: 0px; 
        text-align: center; 
        overflow: hidden;

        img {
          border-top-left-radius: 300px 300px;
          border-top-right-radius: 300px 300px;
          display: block;
        }
      }
    }

    @media (min-width: 920px) {
      display: block;

      &--firstitem,
      &--seconditem {
        position: absolute;
        z-index: 3;
      }

      &--firstitem {
        height: 45vh;
        bottom: -98px;
        width: 19%;
      }

      &--seconditem {
        width: 23%;
        bottom: 0;
        right: 15px;

        &--overlay {
          height: 50vh;
        }
      }
    }

    @media (min-width: 1100px) {
      &--seconditem {
        right: 50px;
      }
    }
  }
}
</style>