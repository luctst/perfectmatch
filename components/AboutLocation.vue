<template>
  <section class="location container-fluid">
    <div class="location--loop">
      <location-loop></location-loop>
    </div>
    <div class="location--title">
      <div>L'agence est flexbile</div>
      <h3>Basée entre <span>Bordeaux et Paris</span></h3>
    </div>
    <div class="location--subtitle">
      <p><span>L'agence se déplace autour de Bordeaux, en passant par son littoral et ses châteaux mais également au sein même de la capitale et de ses proches banlieues.</span> Notre valeur ajoutée ? Organiser vos événements sur Paris et alentour, grâce à notre réseau, mais aussi vous faire découvrir notre région Bordelaise en vous proposant des mariages insolites au cœur de nos vignes et châteaux ou au bord de nos jolies plages.</p>
    </div>
    <div class="location--illu">
      <div class="is__container__img">
        <location-svg></location-svg>
      </div>
    </div>
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
.location {
  background-color: $colorGreen;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    height: 80vh;
    padding-top: 80px;
  }

  @media (min-width: 1000px) {
    height: 100vh;
    padding-top: 100px;
  } 

  &--loop {
    position: absolute;
    z-index: 1;

    @media (min-width: 350px) {
      top: -350px;
      right: 0;
    }

    @media (min-width: 800px) {
      bottom: 0;
      top: 0;
      left: 0;
    }

    svg {
      object-fit: cover;
      max-height: 100%;
      max-width: 100%;
    }
  }

  &--title {
    div {
      font-family: $mainTypo;
      font-size: 12px;
      text-transform: uppercase;
      line-height: 13.8px;
      margin-bottom: 15px;
    }

    h3 {
      font-family: $secondTypo;
      line-height: 40px;
      font-weight: 100;
      margin: 0;

      span {
        font-family: $mainTypoNeueBold;
      }

      @media (min-width: 350px) {
        font-size: 2em;
      }

      @media (min-width: 800px) {
        font-size: 3em;
      }

      @media (min-width: 950px) {
        font-size: 3.5em;
      }

      @media (min-width: 1100px) {
        font-size: 4em;
      }
    }

    @media (min-width: 800px) {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }

  &--subtitle {
    p {
      color: $textColor;
      font-family: $mainTypo;
      font-size: 14px;
      line-height: 20px;
      margin: 0;

      span {
        font-family: $mainTypoNeueBold;
      }

      @media (min-width: 800px) {
        text-align: center;
        margin: 0 15%;
      }
    }

    @media (min-width: 350px) {
      margin: 25px 0 50px 0;
    }

    @media (min-width: 800px) {
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