<template>
  <section class="offers--wrapper">
    <section class="offers container-fluid">
      <div class="offers--title" data-line>
        <h2 v-html="content.first_title"></h2>
        <h2 v-html="content.second_title"></h2>
      </div>
      <div
      v-for="(item, i) in offers"
      :key="i"
      class="offers--wrap">
        <template v-for="(innerItem, y) in item">
          <div
          v-if="typeof innerItem === 'string'"
          :key="y"
          class="offers--wrap--title">
            <h2 data-line class="is__h3"><span>{{ innerItem }}</span></h2>
          </div>
          <div
          v-else
          :key="y"
          class="offers--wrap--item"
          @click="switchItemActive(i, y)">
            <div class="offers--wrap--item--header">
              <h3 class="is__h4">{{ innerItem.title }}</h3>
              <div
              :style="`background-color:${innerItem.active ? '#EDCDB8' : 'transparent'};`"
              class="is__container__img">
                <accordeon-plus v-if="!innerItem.active"></accordeon-plus>
                <accordeon-less v-else></accordeon-less>
              </div>
            </div>
            <div
            v-if="innerItem.active"
            class="offers--wrap--item--subtitle">
              <p class="subtitle" v-html="innerItem.subtitle"></p>
            </div>
          </div>
        </template>
      </div>
    </section>
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
  created() {
    this.offers = this.filledOffers(this.content.itemtitle);
  },
  data() {
    return {
      offers: [], 
    }
  },
  methods: {
    filledOffers(array) {
      return array.map((item, i) => {
        if (i === 0) {
          return [
            item.title,
            ...this.content.itemsoptionsfirst,
          ];
        }

        return [
          item.title,
          ...this.content.itemsoptionssecond,
        ];
      });
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
    }
  },
};
</script>

<style lang="scss" scoped>
.offers--wrapper {
  background-color: $colorWhite;
}

.offers {
  background-color: $colorBeige;
  position: relative;
  z-index: 2;

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
      margin-bottom: 3rem;
    }
  }

  &--wrap:nth-child(2) {
    margin-bottom: 6rem;
  }

  &--wrap {
    :last-child {
      margin-bottom: 0;
    }

    &--title {
      border-bottom: 1px solid #EDCDB8;
      padding-bottom: 2rem;
    }

    &--item {
      border-bottom: 1px solid #EDCDB8;
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
          border: 1px solid #EDCDB8;
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