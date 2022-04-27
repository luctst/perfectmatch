<template>
  <section class="events container-fluid">
    <div class="events--loop">
      <loop-event></loop-event>
    </div>
    <div class="events--content">
      <div>évènements</div>
      <h4>Vous souhaitez fêter un évènement qui vous <span>tient à coeur ?</span></h4>
      <p><span>The Perfect Match s’engage à ne faire que du sur-mesure !</span>
      Parce-que chaque client est unique et chaque évènement aussi, en passant par la demande en mariage, l’organisation de vos fiançailles, une baby shower, une fête religieuse, ou encore votre anniversaire, on s’occupe de tout.</p>
      <button class="is__btn__secondary">Découvrir</button>
    </div>
    <div class="events--slidermobile">
      <div class="is__container__img events--slidermobile--first">
        <img src="~/assets/img/Groupe21.jpg"/>
      </div>
      <div class="is__container__img events--slidermobile--second">
        <div class="events--slidermobile--second--overlay">
          <img src="~/assets/img/Groupe13.jpg"/>
        </div>
      </div>
    </div>
    <div class="events--sliderdesktop">
      <div class="is__container__img events--sliderdesktop--first">
        <img src="~/assets/img/Groupe21.jpg"/>
      </div>
      <div class="is__container__img events--sliderdesktop--second">
        <div class="events--sliderdesktop--second--overlay">
          <img src="~/assets/img/Groupe13.jpg"/>
        </div>
      </div>
    </div>
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
.events {
  background-color: $colorGreen;
  position: relative;
  z-index: 4;

  @media (min-width: 350px) {
    padding-top: 80px;
  }

  @media (min-width: 800px) {
    height: 75vh;
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
    z-index: 1;

    svg {
      object-fit: cover;
      max-height: 100%;
      max-width: 100%;
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

    @media (min-width: 800px) {
      height: inherit;
      max-width: 300px;
      margin: 0 auto;
    }

    @media (min-width: 950px) {
      max-width: 350px;
    }

    @media (min-width: 1000px) {
      max-width: 400px;
    }

    @media (min-width: 1100px) {
      max-width: 500px;
    }

    div,
    h4,
    p {
      margin: 0;
    }

    div {
      color: $textColor;
      font-family: $mainTypo;
      font-size: 12px;
      line-height: 13.8px;
      text-transform: uppercase;

      @media (min-width: 350px) {
        margin-top: 80px;
      }
    }

    h4 {
      color: $textColor;
      font-family: $secondTypo;
      line-height: 40px;

      span {
        font-family: $mainTypoNeueBold;
        font-weight: 700;
      }

      @media (min-width: 350px) {
        font-size: 2em;
        margin-top: 15px;
        margin-bottom: 25px;
      }

      @media (min-width: 500px) {
        font-size: 2.5em;
      }

      @media (min-width: 800px) {
        font-size: 2em;
      }

      @media (min-width: 950px) {
        font-size: 2.5em;
        margin-bottom: 40px;
      }

      @media (min-width: 1000px) {
        font-size: 3em;
        line-height: 60px;
      }

      @media (min-width: 1100px) {
        font-size: 3.5em;
        line-height: 70px;
      }
    }

    p {
      color: $textColor;
      font-family: $mainTypo;
      line-height: 20px;

      span {
        font-family: $mainTypoBold;
      }

      @media (min-width: 350px) {
        font-size: 14px;
        margin-bottom: 40px;
      }

      @media (min-width: 1000px) {
        margin-bottom: 60px;
      }
    }
  }

  &--slidermobile {
    max-width: 100%;
    overflow: scroll;
    z-index: 10;

    &--second {
      &--overlay {
        background: $colorGreen; 
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

      &--first {
        margin-right: 20px;
      }

      &--first,
      &--second {
        z-index: 3;

        img {
          max-width: none;
          width: 230px;
        }
      }
    }

    @media (min-width: 500px) {
      &--first {
        margin-right: 30px;
      }

      &--first,
      &--second {
        img {
          width: 270px;
        }
      }
    }

    @media (min-width: 603px) {
      justify-content: center;
    }

    @media (min-width: 650px) {
      &--first,
      &--second {
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
    &--second {
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

    @media (min-width: 350px) {
      display: none;
    }

    @media (min-width: 800px) {
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
        right: 26px;
      }
    }

    @media (min-width: 1100px) {
      &--first,
      &--second {
        width: 20%;
      }
    }
  }
}
</style>