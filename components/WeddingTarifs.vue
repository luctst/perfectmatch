<template>
  <section class="tarifs--wrapper">
    <section class="tarifs container-fluid">
      <section class="tarifs--view--mobile">
        <div class="tarifs--title">
          <div class="title--tag">Nos</div>
          <h2><span>Tarifs</span></h2>
        </div>
        <div class="tarifs--view--mobile--items">
          <div
          v-for="(item, index) in offers"
          :key="index"
          class="offers--item">
            <div
            :style="`border-bottom:1px solid ${item.borderColor};`"
            class="offers--item--top">
              <div class="is__container__img">
                <component :is="item.svg"></component>
              </div>
              <h3>{{ item.title }}</h3>
            </div>
            <div class="offers--item--bottom">
              <div class="title--tag">
                {{ Number.isNaN(item.price) ? 'Tarif' : 'À partir de' }}
              </div>
              <p class="is__h2">
                <span>
                  {{ Number.isNaN(item.price) ? 'Sur-mesure' : `${item.price} €` }}
                </span>
              </p>
              <button class="is__btn__secondary">Choisir</button>
            </div>
            <!-- <div class="offers--item--options">
              <div
              v-for="(ops, i) in offersOptions"
              :key="i"
              class="offers--item--options--item">
                <div class="offers--item--options--item--title">
                  <div class="subtitle2">{{ ops.content }}</div>
                </div>
                <div
                class="offers--item--options--item--availability">
                  <div class="offers--item--options-item--availability--item"></div>
                </div>
            </div> -->
          </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';
import OffersFirst from '~/assets/img/offers-first.svg?inline';
import OffersSecond from '~/assets/img/flower-2.svg?inline';
import OffersThird from '~/assets/img/flower-3.svg?inline';

export default {
  name: 'Tarifs',
  components: {
    OffersFirst,
    OffersSecond,
    OffersThird,
  },
  mixins: [globalMixin],
  data() {
    return {
      offers: [
        {
          title: 'Organisation compléte',
          price: 3500,
          svg: OffersFirst,
          borderColor: '#EDCDB8',
        },
        {
          title: 'Organisation partielle',
          price: 'Sur-mesure',
          svg: OffersSecond,
          borderColor: '#AED7C5',
        },
        {
          title: 'Coordination Jour J',
          price: 1500,
          svg: OffersThird,
          borderColor: '#DDC5E7',
        },
      ],
      offersOptions: [
        {
          content: 'Rendez-vous découverte',
          availabilityForOffers: this.opsAvailableInOffers('all'),
        },
        {
          content: 'Rédaction du devis',
          availabilityForOffers: this.opsAvailableInOffers('all'),
        },
        {
          content: 'Conseils et coaching',
          availabilityForOffers: this.opsAvailableInOffers(1, '500 €'),
        },
      ],
    };
  },
  methods: {
    opsAvailableInOffers(...args) {
      const params = [...args];

      if (params.length === 1) {
        const firstItem = params[0];

        if (typeof firstItem === 'string') {
          if (firstItem === 'all') return [true, true, true];
          return [firstItem];
        }
      }

      return params.map((arg) => {
        if (typeof arg === 'number') return true;
        return arg;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tarifs--wrapper {
  background-color: $colorWhite;
}

.tarifs--title {
  @media (min-width: 350px) {
    text-align: center;
    margin-bottom: 4rem;
  }
}

.offers--item {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 300px 300px;
  border-top-right-radius: 300px 300px;
  padding: 4rem 0 2rem 0;
  width: 100%;

  @media (min-width: 350px) {
    max-width: 100%;
    margin-bottom: 4rem;
  }

  @media (min-width: 480px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }

  @media (min-width: 550px) {
    max-width: 80%;
  }

  @media (min-width: 760px) {
    max-width: 70%;
  }

  @media (min-width: 860px) {
    max-width: 60%;
  }

  &--top {
    margin-bottom: 1.6rem;
    width: 100%;

    div {
      margin: 0 auto;
      max-width: 6rem;
    }

    h3 {
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }

  &--bottom {
    align-items: center;
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 0;


      @media (min-width: 350px) {
        font-size: .7rem;
      }
    }

    p {
      margin: .4rem 0 2rem 0 ;
    }
  }
}

.tarifs {
  display: flex;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    padding-top: 4rem;
    padding-bottom: 6rem;
  }

  &--view--mobile {
    max-width: 100%;

    @media (min-width: 350px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &--items {
      .offers--item:nth-child(1) {
        border: 1px solid $colorBeige;
        background-color: $colorBeige;
      }
  
      .offers--item:nth-child(2) {
        background-color: $colorGreen;
        border: 1px solid $colorGreen;
      }
  
      .offers--item:nth-child(3) {
        background-color: $colorPurple;
        border: 1px solid $colorPurple;
        margin-bottom: 0;
      }
    }
  }
}
</style>