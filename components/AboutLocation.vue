<template>
  <section class="location--wrapper">
    <section class="location container-fluid">
      <div class="location--loop">
        <div class="is__container__img">
          <location-loop></location-loop>
        </div>
      </div>
      <div class="location--title" data-line>
        <div class="title--tag">{{ content.little_title }}</div>
        <h2 v-html="content.main_title"></h2>
      </div>
      <div class="location--subtitle">
        <p v-html="parseMarkdown(content.subtitle)" class="subtitle"></p>
      </div>
      <div class="location--illu">
        <div class="is__container__img">
          <location-svg></location-svg>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';
import LocationLoop from '~/assets/img/location-loop.svg?inline';
import LocationSvg from '~/assets/img/location.svg?inline';

export default {
  name: 'Location',
  components: {
    LocationLoop,
    LocationSvg,
  },
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.location--wrapper {
  background-color: $colorGreen;
}

.location {
  box-sizing: border-box;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    height: 100vh;
    padding-top: 80px;
  }

  @media (min-width: 920px) {
    height: 100vh;
  }

  @media (min-width: 1000px) {
    padding-top: 4rem;
  } 

  @media (min-width: 1600px) {
    padding-top: 20vh;
  }

  &--loop {
    div {
      height: 100vh;
      position: absolute;
      z-index: 0;
      left: 0;

      @media (min-width: 350px) {
        top: 0;
      }
    }
  }

  &--title,
  &--subtitle {
    z-index: 3;
  }

  &--title {
    @media (min-width: 350px) {
      text-align: center;
    }

    div {
      color: #2E332A;
      margin-bottom: 15px;
    }

    h2 {
      color: #2E332A;
    }

    @media (min-width: 920px) {
      align-items: center;
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }

  &--subtitle {
    p {
      color: #2E332A;

      @media (min-width: 920px) {
        text-align: center;
        margin: 0 25%;
      }
    }

    @media (min-width: 350px) {
      margin: 25px 0 50px 0;
    }

    @media (min-width: 920px) {
      margin: 40px 0 80px 0;
    }
  }

  &--illu {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 4;
  }
}
</style>