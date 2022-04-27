<template>
  <section ref="inner" class="floatline container-fluid">
    <div class="floatline--loop">
      <loop></loop>
    </div>
    <div class="floatline--content">
      <h1 v-html="content.title"></h1>
      <h2>{{ content.subtitle }}</h2>
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
  mounted() {
    // this.applyStyleToInner();
    // window.addEventListener('resize', this.applyStyleToInner);
  },
  methods: {
    applyStyleToInner() {
      if (window.innerWidth > 800) {
        if (this.$refs.inner.classList.contains('container-fluid')) return false;
        if (this.$refs.inner.classList.contains('container')) {
          this.$refs.inner.classList.remove('container');
        }

        this.$refs.inner.classList.add('container-fluid');
        return true;
      }

      if (this.$refs.inner.classList.contains('container')) return false;
        if (this.$refs.inner.classList.contains('container-fluid')) {
          this.$refs.inner.classList.remove('container-fluid');
        }

      this.$refs.inner.classList.add('container');
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.floatline {
  background-color: $colorBeige;
  position: relative;
  z-index: 4;
  @media (min-width: 350px) {
    padding-top: 8em!important;
  }

  @media (min-width: 800px) {
    padding-top: 12em!important;
    height: calc(100vh - 12em);
  }

  &--loop {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;

    svg {
      object-fit: cover;
      max-height: 100%;
      max-width: 100%;
    }

    @media (min-width: 350px) {
      top: -80px;
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

    @media (min-width: 800px) {
      align-items: center;
      justify-content: space-between;
      height: inherit;
    }

    h1 {
      color: $textColor;
      font-family: $secondTypo;
      font-weight: 100;
      font-style: normal;
      text-align: center;
      margin: 0;

      span {
        font-family: $mainTypoNeueBold;
        display: inline-block;
      }

      @media (min-width: 350px) {
        font-size: 68px;
        margin-bottom: 50px;
        line-height: 70px;
      }

      @media (min-width: 500px) {
        font-size: 76px;
      }

      @media (min-width: 800px) {
        font-size: 5em;
        margin: 0 15%;
        line-height: 96px;
      }

      @media (min-width: 1100px) {
        font-size: 115px;
        line-height: 115px;
      }
    }

    h2 {
      color: $textColor;
      font-family: $mainTypo;
      line-height: 20px;
      margin: 0;
      text-align: center;

      @media (min-width: 350px) {
        font-size: 14px;
      }
      @media (min-width: 500px) {
        margin: 0 50px;
      }
      @media (min-width: 800px) {
        margin: 0 30% 2%;
      }

      @media (min-width: 1100px) {
        margin-left: 38%;
        margin-right: 38%;
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
      margin-top: 60px;
      transform: translateY(11%);

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

    @media (min-width: 800px) {
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
          border-top-left-radius: 200px 200px;
          border-top-right-radius: 200px 200px;
          display: block;
        }
      }
    }

    @media (min-width: 800px) {
      display: block;

      &--firstitem,
      &--seconditem {
        position: absolute;
        width: 26%;
      }

      &--firstitem {
        bottom: -98px;
        z-index: 3;
      }

      &--seconditem {
        bottom: 0;
        right: 14px;
      }
    }

    @media (min-width: 1100px) {
      &--firstitem,
      &--seconditem {
        width: 20%;
      }
    }
  }
}
</style>