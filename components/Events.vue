<template>
  <section class="events--wrapper">
    <section class="events container-fluid">
      <div class="events--loop is__container__img">
        <loop-event></loop-event>
      </div>
      <div class="events--content" data-line>
        <div class="title--tag">évènements</div>
        <h2 v-html="content.title"></h2>
        <p class="subtitle" v-html="parseMarkdown(content.subtitle)" ></p>
        <button class="is__btn__secondary">
          <nuxt-link to="/events">
            {{ content.button }}
          </nuxt-link>
        </button>
      </div>
      <div class="events--slidermobile">
        <div class="is__container__img events--slidermobile--first">
          <img 
          :src="content.imageLeft.data.attributes.url"
          :alt="content.imageLeft.data.attributes.alternativeText"/>
        </div>
        <div class="is__container__img events--slidermobile--second">
          <div class="events--slidermobile--second--overlay">
            <img
              :src="content.imageRight.data.attributes.url"
              :alt="content.imageRight.data.attributes.alternativeText"/>
          </div>
        </div>
      </div>
      <div class="events--sliderdesktop">
        <div class="is__container__img events--sliderdesktop--first">
          <img 
          data-parallaxUp
          :src="content.imageLeft.data.attributes.url"
          :alt="content.imageLeft.data.attributes.alternativeText"/>
        </div>
        <div class="is__container__img events--sliderdesktop--second">
          <div class="events--sliderdesktop--second--overlay">
            <img 
            data-parallaxUp
            :src="content.imageRight.data.attributes.url"
            :alt="content.imageRight.data.attributes.alternativeText"/>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';
import LoopEvent from '~/assets/img/loop-event.svg?inline';

export default {
  name: 'Events',
  components: {
    LoopEvent,
  },
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.events--wrapper {
  box-sizing: border-box;
  background-color: $colorWhite;
}

.events {
  height: auto;
  background-color: $colorGreen;
  box-sizing: border-box;
  position: relative;
  z-index: 4;

  @media (min-width: 800px) {
    padding-bottom: 4rem;
  }

  @media (min-width: 920px) {
    padding-top: 80px;
  }

  @media (min-width: 1000px) {
    height: 90vh;
  }

  @media (min-width: 1100px) {
    height: 100vh;
  }

  &--loop {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 0;

    @media (min-width: 350px) {
      height: 50vh;
      top: 0;
      left: 0;
    }

    @media (min-width: 920px) {
      height: 100vh;
      top: -80px;
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

    @media (min-width: 350px) {
      align-items: flex-start;
    }

    @media (min-width: 600px) {
      margin-right: 13%;
    }

    @media (min-width: 920px) {
      height: inherit;
      max-width: 35vw;
      margin: 0 auto;
      margin-top: 5rem;
      padding-left: 5rem;
    }

    @media (min-width: 1100px) {
      max-width: 45vw;
    }

    @media (min-width: 1800px) {
      max-width: 40vw;
      padding-left: 15rem;
    }

    div,
    h2,
    p {
      color: #2E332A;
      text-align: left;
    }

    div {
      @media (min-width: 350px) {
        margin-top: 80px;
      }

      @media (min-width: 920px) {
        margin-top: 0;
      }
    }

    h2 {
      @media (min-width: 920px) {
        margin-bottom: 2vh;
      }
    }

    p {
      @media (min-width: 920px) {
        margin-bottom: 2rem;
      }
    }

    button {
      &:hover {
        background-color: $colorHoverGreen;
      }

      @media (min-width: 350px) {
        margin-top: 40px;
      }

      @media (min-width: 920px) {
        margin-top: 0;
      }
    }
  }

  &--slidermobile {
    max-width: 100%;
    height: auto;
    z-index: 10;

    &--second {
      &--overlay {
        height: 100%;
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

    @media (min-width: 350px) {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      transform: translateY(11%);

      &--first {
        margin-right: 20px;
      }

      &--first,
      &--second {
        z-index: 3;
        width: 100%;
      }
    }

    @media (min-width: 500px) {
      &--first {
        margin-right: 30px;
      }
    }

    @media (min-width: 700px) {
      &--first,
      &--second {
        width: 40%;
      }
    }

    @media (min-width: 920px) {
      display: none;
    }
  }

  &--sliderdesktop {
    &--first,
    &--second {
      z-index: 3;
    }

    &--second {
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

    @media (min-width: 350px) {
      display: none;
    }

    @media (min-width: 920px) {
      display: flex;

      &--first,
      &--second {
        position: absolute;
        width: 26%;
      }

      &--first {
        top: 8%;
        z-index: 3;
      }

      &--second {
        bottom: -98px;
        right: 15px;
      }
    }

    @media (min-width: 1100px) {
      &--first,
      &--second {
        width: 20%;
      }

      &--second {
        right: 50px;
      }
    }
  }
}
</style>