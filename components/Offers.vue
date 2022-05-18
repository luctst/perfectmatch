<template>
  <section class="offers--wrapper">
    <section class="offers container-fluid">
      <div
      v-for="(offer, index) in offersData"
      :key="index"
      :class="renderClass(offer.active, index)"
      :style="`border:1px solid ${offer.colorBorder};background-color:${index === 0 ? offer.theme : 'transparent'};`"
      @mouseenter="offer.active = true"
      @mouseleave="index === 0 ? offer.active = true : offer.active = false">
        <div class="is__container__img">
          <component :is="offer.icon"></component>
        </div>
        <h3 :style="`color:${offer.colorText};`">{{ offer.content[0] }}</h3>
        <p class="subtitle" :style="`color:${offer.colorText};`">{{ offer.content[1] }}</p>
        <button
        class="is__btn__secondary"
        :style="`background-color:${offer.active ? offer.colorBorder : offer.theme };color:${offer.colorText};`">
          <nuxt-link :to="offer.btnHref">
            Découvrir
          </nuxt-link>
        </button>
      </div>
    </section>
  </section>
</template>

<script>
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
  props: {
    content: {
      type: [Array, Boolean],
      required: true,
    },
  },
  created() {
    this.offersData = this.content.map((c, i) => {
      const actualOfferData = { ...this.offersData[i] };
      actualOfferData.content = [];
      actualOfferData.content.push(c.title, c.description);

      return actualOfferData;
    });
  },
  data() {
    return {
      dataPopulated: false,
      offersData: [
        {
          btnHref: '/wedding/complete',
          theme: '#FDEADD',
          colorText: '#3B2321',
          icon: OffersFirst,
          active: true,
        },
        {
          active: false,
          colorBorder: '#AED7C5',
          theme: '#E0F4EB',
          colorText: '#2E332A',
          icon: OffersSecond,
          btnHref: '/wedding/partial',
        },
        {
          active: false,
          colorBorder: '#DDC5E7',
          theme: '#F8ECFD',
          colorText: '#3C2A44',
          icon: OffersThird,
          btnHref: '/wedding/dday',
        },
      ],
    };
  },
  methods: {
    renderClass(isActive, index) {
      const d = 'offers--item';

      if (index === 0) {
        return d.concat(' active');
      }

      return isActive ? d.concat(' active') : d.concat(' inactive');
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  border-top-left-radius: 300px 300px;
  border-top-right-radius: 300px 300px;
}

.inactive {
  border-top-left-radius: 300px 300px;
  border-top-right-radius: 300px 300px;

  @media (min-width: 920px) {
    border-bottom-left-radius: 300px 300px;
    border-bottom-right-radius: 300px 300px;
  }
}

.offers--wrapper {
  background-color: $colorWhite;
}

.offers {
  display: flex;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    flex-direction: column;
    padding-bottom: 80px;
  }

  @media (min-width: 380px) {
    align-items: center;
  }

  @media (min-width: 920px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 180px;
  }

  &--item {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;

    div {
      margin: 0 auto;

      @media (min-width: 1600px) {
        width: 50%;
      }
    }

    h3 {
      text-align: center;

      @media (min-width: 920px) {
        margin-top: 40px;
      }
    }

    p {
      margin-bottom: 40px;
    }

    button {
      @media (min-width: 350px) {
        margin-top: 30px;
      }
    }

    @media (min-width: 350px) {
      margin-top: 40px;
      padding: 16% 50px 5% 50px;
    }

    @media (min-width: 500px) {
      width: 70%;
    }

    @media (min-width: 920px) {
      width: 100%;
    }

    @media (min-width: 920px) {
      padding-top: 10%;

      &:nth-child(2) {
        margin-left: 15px;
        margin-right: 15px;
      }
    }

    @media (min-width: 1100px) {
      padding-top: 8%;

      &:nth-child(2) {
        margin-left: 3%;
        margin-right: 3%;
      }
    }
  }
}
</style>