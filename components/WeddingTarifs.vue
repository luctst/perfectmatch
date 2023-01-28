<template>
  <section class="tarifs--wrapper">
    <section class="tarifs container-fluid">
      <section class="tarifs--view--mobile">
        <div class="tarifs--title">
          <div class="title--tag">{{ content.little_title }}</div>
          <h2 data-line v-html="content.big_title"></h2>
        </div>
        <div class="tarifs--view--mobile--items">
          <div
          v-for="(item, index) in populateOffers"
          :key="index"
          class="tarifs--view--mobile--items--wrapper">
            <div class="offers--item">
              <div
              :style="`border-bottom:1px solid ${item.borderColor};`"
              class="offers--item--top">
                <div class="is__container__img">
                  <component :is="item.svg"></component>
                </div>
                <h3 v-html="item.title"></h3>
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
            </div>
            <div class="offers--options">
              <template v-for="(ops, i) in populateOffersOps">
                <div
                v-if="ops.availabilityForOffers[index] !== 'no'"
                :key="i"
                class="offers--options--item">
                  <div class="offers--options--item--title">
                    <div class="subtitle">{{ ops.content }}</div>
                  </div>
                  <div class="offers--options--item--availability">
                    <div class="offers--options--item--availability--item">
                      <div
                      v-if="ops.availabilityForOffers[index] === 'yes'"
                      :style="`border: 1px solid ${populateOffers[index].checkColor};background-color:${populateOffers[index].checkColor};`"
                      class="is__container__img">
                        <check></check>
                      </div>
                      <div
                      v-else-if="ops.availabilityForOffers[index] !== 'no'"
                      class="subtitle">
                        {{ ops.availabilityForOffers[index] }}
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </section>
      <section class="tarifs--view--desktop">
        <div class="tarifs--view--desktop--header">
          <div class="tarifs--title" data-line>
            <div class="title--tag">{{ content.little_title }}</div>
            <h2 v-html="content.big_title"></h2>
          </div>
          <div class="tarifs--view--desktop--header--items">
            <div
            v-for="(item, y) in populateOffers"
            :key="y"
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
                <p class="is__h3">
                  <span>
                    {{ Number.isNaN(item.price) ? 'Sur-mesure' : `${item.price} €` }}
                  </span>
                </p>
                <button class="is__btn__secondary">
                  <nuxt-link :to="`/contact?offer=${item.title}`">
                    Choisir
                  </nuxt-link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="tarifs--view--desktop--body">
          <div
          v-for="(ops, y) in populateOffersOps"
          :key="y"
          class="offers--options">
            <div class="offers--options--item">
              <div class="offers--options--item--title">
                <div class="subtitle">{{ ops.content }}</div>
              </div>
              <div class="offers--options--item--availability">
                <div
                v-for="(inner, w) in ops.availabilityForOffers"
                :key="w"
                class="offers--options--item--availability--item">
                  <div
                  v-if="inner === 'yes'"
                  :style="`border: 1px solid ${populateOffers[w].checkColor};background-color:${populateOffers[w].checkColor};`"
                  class="is__container__img">
                    <check></check>
                  </div>
                  <div
                  v-else-if="inner !== 'no'"
                  class="subtitle">
                    {{ inner }}
                  </div>
                  <div
                  v-else
                  class="">
                    <tarif-false></tarif-false>
                  </div>
                </div>
              </div>
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
import OffersSecond from '~/assets/img/flower-2-service.svg?inline';
import OffersThird from '~/assets/img/flower-3-service.svg?inline';
import Check from '~/assets/img/check.svg?inline';
import TarifFalse from '~/assets/img/tarif-false.svg?inline';

export default {
  name: 'Tarifs',
  components: {
    OffersFirst,
    OffersSecond,
    OffersThird,
    Check,
    TarifFalse,
  },
  mixins: [globalMixin],
  computed: {
    populateOffers() {
      return this.filledOffers(this.content.prestaitems);
    },
    populateOffersOps() {
      return this.filledAvailabilityForOffers(this.content.prestaoptions);
    },
  },
  methods: {
    filledOffers(offersArray) {
      const o = [
        {
          svg: OffersFirst,
          borderColor: '#EDCDB8',
          checkColor: '#FDEADD',
        },
        {
          svg: OffersSecond,
          borderColor: '#AED7C5',
          checkColor: '#E0F4EB',
        },
        {
          svg: OffersThird,
          borderColor: '#DDC5E7',
          checkColor: '#F8ECFD',
        },
      ];
      
      return o.map((defaultOffer, i) => ({
        ...defaultOffer,
        price: offersArray[i].price,
        title: offersArray[i].title,
      }));
    },
    filledAvailabilityForOffers(arrayOps) {
      return arrayOps.map((ops) => ({
        content: ops.title,
        availabilityForOffers: [
          ops.contentForPresta1,
          ops.contentForPresta2,
          ops.contentForPresta3
        ],
      }));
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

  @media (min-width: 920px) {
    text-align: left;
    margin-bottom: 4rem;
  }

  @media (min-width: 1100px) {
    margin-right: 6rem;
  }

  @media (min-width: 1400px) {
    margin-right: 0rem;
  }
}

.offers--item,
.offers--options {
  width: 100%;

  @media (min-width: 350px) {
    max-width: 100%;
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

  @media (min-width: 920px) {
    max-width: 100%;
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

  @media (min-width: 350px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 920px) {
    margin-bottom: 0;
  }

  &--top {
    width: 100%;

    div {
      margin: 0 auto;
      max-width: 9rem;
    }

    h3 {
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 2rem;
      padding: 0 10%;
    }
    
    @media (min-width: 350px) {
      padding-bottom: 2.5rem;
    }

    @media (min-width: 920px) {
      height: 15rem;
    }

    @media (min-width: 1400px) {
      padding-bottom: 5.5rem;
    }
  }

  &--bottom {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;

    div {
      margin-bottom: 0;


      @media (min-width: 350px) {
        font-size: .7rem;
      }
    }

    p {
      margin: .4rem 0 2rem 0 ;

      span {
        font-family: $mainTypoNeueBold;
      }
    }
  }
}

.offers--options {
  display: flex;
  flex-direction: column;

  @media (min-width: 350px) {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 920px) {
    margin: 0;
  }

  &--item {
    border-bottom: 1px solid rgba(59, 35, 33, .1);
    align-items: center;
    display: flex;

    @media (min-width: 350px) {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      justify-content: space-between;
    }

    @media (min-width: 920px) {
      padding: 1.7rem 0;
      justify-content: flex-start;
    }

    &--title {
      .subtitle {
        margin-top: 0;

        @media (min-width: 920px) {
          text-align: left;
        }
      }

      @media (min-width: 920px) {
        flex: 0 0 27%;
      }

      @media (min-width: 1100px) {
        flex: 0 0 33%;
      }

      @media (min-width: 1200px) {
        flex: 0 0 25%;
      }

      @media (min-width: 1400px) {
        flex: 0 0 33%;
      }

      @media (min-width: 1602px) {
        flex: 0 0 29%;
      }

      @media (min-width: 1642px) {
        flex: 0 0 31%;
      }

      @media (min-width: 1740px) {
        flex: 0 0 34%;
      }

      @media (min-width: 1800px) {
        flex: 0 0 36%;
      }
    }

    &--availability {
      @media (min-width: 920px) {
        align-items: center;
        flex: 0 0 70%;
        display: flex;
      }

      &--item {
        @media (min-width: 920px) {
          align-items: center;
          display: flex;
          justify-content: center;
          text-align: center;
          flex: 0 0 33.33%;
        }

        .is__container__img {
          border-radius: 50%;
          align-items: center;
          display: flex;
          justify-content: center;
          padding: .3rem;
          height: 14px;
          width: 14px;
        }

        .subtitle {
          margin-top: 0;
        }
      }
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

  @media (min-width: 1100px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  &--view--mobile,
  &--view--desktop--header {
    &--items {
        .offers--item:first-child {
          .offers--item--bottom {
            button {
              &:hover {
                background-color: $colorHoverBeige;
              }
            }
          }
        }
    
        .offers--item:nth-child(2) {
          .offers--item--bottom {
            button {
              &:hover {
                background-color: $colorHoverGreen;
              }
            }
          }
        }
    
        .offers--item:last-child {
          .offers--item--bottom {
            button {
              &:hover {
                background-color: $colorHoverPurple;
              }
            }
          }
        }
    }
  }

  &--view--mobile {
    max-width: 100%;

    @media (min-width: 350px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 920px) {
      display: none;
    }

    &--items {
      &--wrapper:nth-child(1) {
        .offers--item {
          border: 1px solid $colorBeige;
          background-color: $colorBeige;
        }
      }
  
      :nth-child(2) {
        .offers--item {
          background-color: $colorGreen;
          border: 1px solid $colorGreen;
        }
      }
  
      :nth-child(3) {
        .offers--item {
          background-color: $colorPurple;
          border: 1px solid $colorPurple;
          margin-bottom: 0;
        }

        .offers--options {
          margin-bottom: 0;
        }
      }
    }
  }

  &--view--desktop {
    width: 100%;

    @media (min-width: 350px) {
      display: none;
    }

    @media (min-width: 920px) {
      display: flex;
      flex-direction: column;
    }

    &--header {
      align-items: flex-end;
      display: flex;

      &--items {
        display: flex;
        margin-left: auto;

        .offers--item:nth-child(1) {
          background-color: $colorBeige;
        }
    
        .offers--item:nth-child(2) {
          background-color: $colorGreen;

          @media (min-width: 920px) {
            margin: 0 1rem;
          }
        }
    
        .offers--item:nth-child(3) {
          background-color: #F8ECFD;
        }
      }
    }

    &--body {
      margin-top: 1rem;

      :last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
