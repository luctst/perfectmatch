<template>
  <section class="floatline--wrapper">
    <section class="floatline container-fluid">
      <div class="floatline--loop is__container__img">
        <loop></loop>
      </div>
      <div class="floatline--content">
        <div class="floatline--content--title">
          <h1 data-line>Là où <div>votre rêve</div><br>prend vie</h1>
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
        <div class="is__container__img floatline--sliderdesktop--firstitem " data-rellax data-rellax-speed="2">
          <img  
          :src="content.imgleft.data.attributes.url"
          :alt="content.imgleft.data.attributes.alternativeText"/>
        </div>
        <div class="is__container__img floatline--sliderdesktop--seconditem">
          <div class="floatline--sliderdesktop--seconditem--overlay " data-rellax data-rellax-speed="2">
            <img 
            :src="content.imgright.data.attributes.url"
            :alt="content.imgright.data.attributes.alternativeText"/>
          </div>
        </div>
      </div>
    </section>
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
.floatline--wrapper {
  background-color: $colorBeige;
  z-index: 4;
  height: 100vh;
}

.floatline {
  height: inherit;
  position: relative;

  &--loop {
    height: 100vh;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;

    @media (min-width: 350px) {
      top: -80px;
      left: 0;
    }

    @media (min-width: 920px) {
      top: 0;
      left: 0;
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
          margin: 0 10%;
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
    height: auto;
    z-index: 10;

    &--seconditem {
      &--overlay {
        height: 100%;
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
        width: 230px;
      }
    }

    @media (min-width: 500px) {
      &--firstitem {
        margin-right: 30px;
      }

      &--firstitem,
      &--seconditem {
        width: 270px;
      }
    }

    @media (min-width: 603px) {
      justify-content: center;
    }

    @media (min-width: 650px) {
      &--firstitem,
      &--seconditem {
        width: 100%;
      }
    }

    @media (min-width: 700px) {
      &--firstitem,
      &--seconditem {
        width: 40%;
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
        height: 30vh;
        bottom: -98px;
        width: 25%;
      }

      &--seconditem {
        width: 23%;
        bottom: 0;
        right: 0;

        &--overlay {
          height: 25vh;
        }
      }
    }

    @media (min-width: 1100px) {
      &--seconditem {
        padding-right: 50px;
      }
    }

    @media (min-width: 1400px) {
      &--firstitem {
        height: 45vh;
        width: 19%;
      }
      &--seconditem {
        &--overlay {
          height: 45vh;
        }
      }
    }
  }
}
</style>
