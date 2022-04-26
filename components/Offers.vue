<template>
  <section class="offers container-fluid">
    <div
    v-for="(offer, index) in offers"
    :key="index"
    :class="['offers--item', offer.active ? 'active' : 'inactive']"
    :style="`border:1px solid ${offer.theme};background-color: ${offer.active ? offer.theme : 'transparent'};`"
    @mouseenter="offer.active = true"
    @mouseleave="offer.active = false">
      <div class="is__container__img">
        <component :is="offer.icon"></component>
      </div>
      <h4>{{ offer.content[0] }}</h4>
      <p>{{ offer.content[1] }}</p>
      <button
      class="is__btn__secondary"
      :style="`background-color:${offer.active ? '#FFF' : offer.theme };`">Découvrir</button>
    </div>
  </section>
</template>

<script>
import GlobalMixin from '~/mixins/global';
import OffersFirst from '~/assets/img/offers-first.svg?inline';
import OffersSecond from '~/assets/img/flower-2.svg?inline';
import OffersThird from '~/assets/img/flower-3.svg?inline';

export default {
  name: 'Offers',
  components: {
    OffersFirst,
    OffersSecond,
    OffersThird,
  },
  mixins: [GlobalMixin],
  data() {
    return {
      offers: [
        {
          active: true,
          theme: '#FDEADD',
          icon: OffersFirst,
          content: [
            'Organisation Complète',
            'On s\'occupe de tout et il ne vous restera plus qu\'à profiter de votre journée le plus sereinement possible.',
          ],
        },
        {
          active: false,
          theme: '#CEE4DA',
          icon: OffersSecond,
          content: [
            'Organisation Partielle',
            'On vous aide dans l\'organisation de votre mariage, notamment sur la partie la plus fastidieuse à savoir la recherche de prestataires.',
          ],
        },
        {
          active: false,
          theme: '#E8D7EE',
          icon: OffersThird,
          content: [
            'Coordination Jour J',
            'Vous êtes pratiquement venu à bout de l\'organisation de votre mariage mais vous voulez profiter de votre journée.',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  border-top-left-radius: 200px 200px;
  border-top-right-radius: 200px 200px;
}

.inactive {
  border-top-left-radius: 200px 200px;
  border-top-right-radius: 200px 200px;
}

.offers {
  display: flex;

  @media (min-width: 350px) {
    flex-direction: column;
  }

  @media (min-width: 380px) {
    align-items: center;
  }

  @media (min-width: 805px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1100px) {
    justify-content: center;
  }

  &--item {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;

    div {
      margin: 0 auto;
    }

    h4,
    p {
      color: $textColor;
      margin: 0;
      text-align: center;
    }

    h4 {
      font-family: $secondTypo;
    }

    p {
      font-family: $mainTypo;
      line-height: 20px;
    }

    @media (min-width: 350px) {
      padding: 16% 50px 50px 50px;
      margin-top: 40px;

      h4 {
        font-size: 1.39em;
        margin-top: 12px;
      }

      p {
        font-size: 1.02em;
        margin-top: 20px;
        margin-bottom: 45px;
      }
    }

    @media (min-width: 415px) {
      max-width: 335px;
    }

    @media (min-width: 805px) {
      height: 562px;
      max-height: 562px;
      max-width: 251px;

      h4 {
        font-size: 1em;
      }

      p {
        font-size: .8em;
      }

      button {
        font-size: .7em;
      }
    }

    @media (min-width: 903px) {
      max-width: 280px;
    }

    @media (min-width: 1000px) {
      max-width: 335px;

      &:nth-child(2) {
        margin-left: 8%;
        margin-right: 8%;
      }
    }

    @media (min-width: 1100px) {
      padding-top: 8%;

      h4 {
        font-size: 1.3em;
      }

      p {
        font-size: .9em;
      }

      button {
        font-size: 14px;
      }
    }
  }
}
</style>