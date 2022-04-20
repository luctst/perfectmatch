<template>
<section class="home">
  <header-vue></header-vue>
  <section class="home--inner container" ref="inner">
    <div class="home--inner--loop">
      <loop></loop>
    </div>
    <div class="home--inner--content">
      <h1 v-html="content.floatline.title"></h1>
      <h2>{{ content.floatline.subtitle }}</h2>
    </div>
    <div class="home--inner--slidermobile">
      <div class="is__container__img home--inner--slidermobile--firstitem">
        <img
        :src="content.floatline.imgleft.data.attributes.url"
        :alt="content.floatline.imgleft.data.attributes.alternativeText"/>
      </div>
      <div class="is__container__img home--inner--slidermobile--seconditem">
        <div class="home--inner--slidermobile--seconditem--overlay">
          <img
          :src="content.floatline.imgright.data.attributes.url"
          :alt="content.floatline.imgright.data.attributes.alternativeText"/>
        </div>
      </div>
    </div>
    <div class="home--inner--sliderdesktop">
      <div class="is__container__img home--inner--sliderdesktop--firstitem">
        <img
        :src="content.floatline.imgleft.data.attributes.url"
        :alt="content.floatline.imgleft.data.attributes.alternativeText"/>
      </div>
      <div class="is__container__img home--inner--sliderdesktop--seconditem">
        <div class="home--inner--sliderdesktop--seconditem--overlay">
          <img
          :src="content.floatline.imgright.data.attributes.url"
          :alt="content.floatline.imgright.data.attributes.alternativeText"/>
        </div>
      </div>
    </div>
  </section>
</section>
</template>

<script>
import Loop from '~/assets/img/loop.svg?inline';
import Header from '~/components/Header.vue';

export default {
  layout: 'default',
  components: {
    'header-vue': Header,
    Loop,
  },
  props: {
    content: {
      type: [Boolean, Object],
      required: true,
    },
    baseApiUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.applyStyleToInner();
    window.addEventListener('resize', this.applyStyleToInner);
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
}
</script>

<style lang="scss" scoped>
.is__container__img {
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
}

.home {
  background-color: $colorBeige;
  max-height: 100vh;

  @media (min-width: 350px) {
    height: 90vh;
  }

  @media (min-width: 800px) {
    height: 100vh;
  }

  &--inner {
    position: relative;
    @media (min-width: 350px) {
      padding-top: 8em;
    }

    @media (min-width: 800px) {
      padding-top: 12em;
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

      h1 {
        color: $textColor;
        font-family: $secondTypo;
        font-weight: 100;
        text-align: center;
        margin: 0;

        strong {
          display: inline-block;
          font-weight: bold;
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
          font-size: 86px;
          line-height: 96px;
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
          margin: 0 199px;
          margin-top: 20%;
        }
      }
    }

    &--slidermobile {
      max-width: 100%;
      overflow: scroll;

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
          width: 21%;
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
    }
  }
}
</style>