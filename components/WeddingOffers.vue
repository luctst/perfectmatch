<template>
  <section class="offers">
    <div
    :style="`background-color:${theme};`"
    class="offers--wrapper container-fluid">
      <div class="offers--wrapper--title" data-line>
        <h2 v-html="content.first_title" :style="`color:${colorText};`"></h2>
        <h2 v-html="content.second_title" :style="`color:${colorText};`"></h2>
      </div>
      <div
      v-for="(item, i) in offers"
      :key="i"
      class="offers--wrapper--wrap"
      :style="`margin-bottom: ${content.offerstitle.length ? '6rem' : '2rem'};`">
      <template v-if="Array.isArray(item)">
        <template v-for="(innerItem, y) in item">
          <div
          v-if="typeof innerItem === 'string'"
          :key="y"
          :style="`border-bottom:1px solid ${borderColor};`"
          class="offers--wrapper--wrap--title">
            <h2 data-line class="is__h3"><span>{{ innerItem }}</span></h2>
          </div>
          <div
          v-else
          :key="y"
          :style="`border-bottom: 1px solid ${borderColor};`"
          class="offers--wrapper--wrap--item"
          @click="switchItemActive(i, y)">
            <div class="offers--wrapper--wrap--item--header">
              <h3 class="is__h4">{{ innerItem.title }}</h3>
              <div
              :style="`background-color:${innerItem.active ? borderColor : 'transparent'};border: 1px solid ${borderColor};`"
              class="is__container__img">
                <accordeon-plus v-if="!innerItem.active"></accordeon-plus>
                <accordeon-less v-else></accordeon-less>
              </div>
            </div>
            <div
            v-if="innerItem.active"
            class="offers--wrapper--wrap--item--subtitle">
              <p class="subtitle" v-html="parseMarkdown(innerItem.subtitle)"></p>
            </div>
          </div>
        </template>
      </template>
      <template v-else>
        <div @click="switchActive(i)">
          <div
          :style="`border-bottom:1px solid ${borderColor};`"
          class="offers--wrapper--wrap--items--item--title">
            <h3 :style="`color:${colorText};`">{{ item.title }}</h3>
            <div
            :style="`border:1px solid ${borderColor};background-color:${item.active ? borderColor : 'transparent'};`"
            class="is__container__img">
              <accordeon-plus v-if="!item.active"></accordeon-plus>
              <accordeon-less v-else></accordeon-less>
            </div>
          </div>
          <div
          v-if="item.active"
          :style="`border-bottom:1px solid ${borderColor};`"
          class="offers--wrapper--wrap--items--item--subtitle">
            <p class="subtitle" v-html="parseMarkdown(item.subtitle)" :style="`color:${colorText};`"></p>
          </div>
        </div>
      </template>
      </div>
    </div>
  </section> 
</template>

<script>
import globalMixin from '~/mixins/global';
import AccordeonPlus from '~/assets/img/accordeon-plus.svg?inline';
import AccordeonLess from '~/assets/img/accordeon-less.svg?inline';

export default {
  name: 'Offers',
  components: {
    AccordeonPlus,
    AccordeonLess,
  },
  mixins: [globalMixin],
  data() {
    return {
      theme: '',
      borderColor: '',
      colorText: '',
      offers: [],
    };
  },
  watch: {
    $route() {
      this.filledData();
      this.offers = this.filledOffers(this.content.offerstitle);
    },
  },
  created() {
    this.filledData();
    this.offers = this.filledOffers(this.content.offerstitle);
  },
  methods: {
    filledOffers(array) {
      if (!array.length) {
        return this.content.offersoptions.map((ops, o) => {
          return {
            ...ops,
            active: o === 0,
          };
        });
      }

      return array.map((item, i) => {
        const innerFiltered = this.content.offersoptions.filter(
          (ops) => ops.offersid === i
        );

        return [
          item.title,
          ...innerFiltered.map((o, y) => ({...o, active: i === 0 && y === 0})),
        ];
      });
    },
    filledData() {
      const themes = ['#FDEADD', '#E0F4EB', '#F8ECFD'];

      switch (this.$route.path) {
        case '/wedding/complete':
          this.theme = themes[0];
          this.borderColor = '#EDCDB8';
          this.colorText = '#3B2321';
          break;
        case '/wedding/partial':
          this.theme = themes[1];
          this.borderColor = '#AED7C5';
          this.colorText = '#2E332A';
          break;
        case '/wedding/dday':
          this.theme = themes[2];
          this.borderColor = '#DDC5E7';
          this.colorText = '#3C2A44';
          break;
        default:
          break;
      }
    },
    switchItemActive(index, childIndex) {
      this.offers = this.offers.map((offer, i) => {
        let newOffer = [...offer];

        newOffer = newOffer.map((o, y) => {
          if (typeof o === 'string') return o;
          const newO = {...o};

          if (y === childIndex && index === i) {
            newO.active = !newO.active;
            return newO;
          }

          newO.active = false;
          return newO;
        });

        return newOffer;
      })
    },
    switchActive(indexClicked) {
      this.offers = this.offers.map((item, i) => {
        const newItem = { ...item };

        if (i === indexClicked) {
          newItem.active = !newItem.active;
          return newItem;
        }

        newItem.active = false;
        return newItem;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.offers {
  background-color: $colorWhite;
}

.offers--wrapper {
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

  &--title,
  &--wrap {
    @media (min-width: 1100px) {
      margin: 0 auto;
      max-width: 85%;
    } 
  }

  &--title {
    @media (min-width: 350px) {
      text-align: left;
      margin-bottom: 5rem;
    }
  }

  &--wrap {
    &--items {
      display: flex;
      flex-direction: column;

      &--item--title {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding-bottom: 2rem;

        :hover {
          cursor: pointer;
        }

        h3 {
          @media (min-width: 350px) {
            max-width: 80%;
          }
        }

        div {
          align-items: center;
          display: flex;
          justify-content: center;
          border-radius: 50%;
          height: 26px;
          width: 26px;

          svg {
            height: 10px;
            width: 10px;
          }
        }
      }

      &--item--subtitle {
        @media (min-width: 350px) {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

        p {
          text-align: left;

          @media (min-width: 350px) {
            margin-top: 15px;
          }

          @media (min-width: 1100px) {
            max-width: 85%;
          }
        }
      }
    }

    :last-child {
      margin-bottom: 0;
    }

    &--title {
      padding-bottom: 2rem;
    }

    &--item {
      display: flex;
      flex-direction: column;

      @media (min-width: 350px) {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }

      &--header {
        align-items: center;
        display: flex;
        justify-content: space-between;

        :hover {
          cursor: pointer;
        }

        h3 {
          @media (min-width: 350px) {
            max-width: 80%;
          }
        }

        div {
          align-items: center;
          display: flex;
          justify-content: center;
          border-radius: 50%;
          height: 26px;
          width: 26px;

          svg {
            height: 10px;
            width: 10px;
          }
        }
      }

      &--subtitle {
        p {
          text-align: left;

          @media (min-width: 350px) {
            margin-top: 15px;
          }

          @media (min-width: 1100px) {
            max-width: 85%;
          }
        }
      }
    }
  }
}
</style>