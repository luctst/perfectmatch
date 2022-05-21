<template>
  <section class="event--wrapper">
    <section class="event container-fluid">
        <div class="event--title">
          <div class="title--tag">Politique de l’agence </div>
          <h2 data-line>Faire de votre évènement un des<br>plus <div>beaux jour de votre vie.</div></h2>
          <div class="event--title--subtitle">
            <p class="subtitle2">A noter aussi que dans cette belle aventure qui vous attend, nous formerons une équipe. En effet, vous êtes les principaux acteurs de cet évènement</p>
            <p class="subtitle2">j'aurais donc besoin de vous et de votre implication afin de mettre tout en oeuvre pour parvenir au résultat tant attendu.</p>
          </div>
        </div>
        <div class="event--circle">
          <div class="is__container__img">
            <circle-about></circle-about>
          </div>
        </div>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';
import CircleAbout from '~/assets/img/circle-about.svg?inline';

export default {
  name: 'AboutEvent',
  components: {
    CircleAbout,
  },
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.event--wrapper {
  background-color: $colorWhite;
}

.event {
  display: flex;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    flex-direction: column;
    padding-bottom: 80px;
  }

  @media (min-width: 920px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1100px) {
    padding-bottom: 180px;
  }

  &--title {
    h2 {
      @media (min-width: 920px) {
        max-width: 61%;
      }

      @media (min-width: 1100px) {
        max-width: 83%;
      }

      @media (min-width: 1400px) {
        max-width: 71%;
      }

      @media (min-width: 1600px) {
        max-width: 80%;
      }
    }

    &--subtitle {
      :last-child {
        @media (min-width: 1040px) {
          margin-left: 16px;
        }
      }

      @media (min-width: 920px) {
        display: flex;
      }
    }

    @media (min-width: 350px) {
      margin-top: 80px;
      order: 2;
    }

    @media (min-width: 920px) {
      flex: 0 0 80%;
      margin-top: 0;
      order: 1;
    }

  }

  &--circle {
    @media (min-width: 350px) {
      margin: 0 auto;
      order: 1;
    }

    @media (min-width: 450px) {
      max-width: 50vw;
    }

    @media (min-width: 920px) {
      order: 2;
      margin: 0;
    }
  }
}
</style>