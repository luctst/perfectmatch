<template>
<section class="forwho--wrapper">
  <section class="forwho container-fluid">
    <div class="forwho--title" data-line>
      <h2 v-html="content.first_title"></h2>
      <h2 v-html="content.second_title"></h2>
    </div>
    <div
    :class="['forwho--wrapper', items.length > 3 && 'is__wrapper__flex__wrap']">
      <div
      v-for="(item, i) in items"
      :key="i"
      :style="`border-color:${item.borderColor};`"
      class="forwho--wrapper--item">
        <div v-html="parseMarkdown(item.content)" class="subtitle2"></div>
        <div class="is__container__img p">
          <component :is="item.svg"></component>
        </div>
      </div>
    </div>
  </section>
</section>
</template>

<script>
import globalMixin from '~/mixins/global';
import ForWho1 from '~/assets/img/for-who-1.svg?inline';
import ForWho2 from '~/assets/img/for-who-2.svg?inline';
import ForWho3 from '~/assets/img/for-who-3.svg?inline';

export default {
  name: 'Forwho',
  components: {
    ForWho1,
    ForWho2,
    ForWho3,
  },
  mixins: [globalMixin],
  computed: {
    items() {
      let indexToUse = 0;
      const itemDefaultData = [
        {
          svg: ForWho1,
          borderColor: '#FDEADD',
        },
        {
          svg: ForWho2,
          borderColor: '#AED7C5',
        },
        {
          svg: ForWho3,
          borderColor: '#DDC5E7',
        },
      ];

      return this.content.items.map((it) => {
        const objToReturn = {
          ...it,
          ...itemDefaultData[indexToUse]
        }

        indexToUse += 1;

        if (indexToUse > 2) {
          indexToUse = 0;
        }

        return objToReturn;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.is__wrapper__flex__wrap {
  flex-wrap: wrap;
  justify-content: space-between!important;

  @media (min-width: 350px) {
    flex-direction: column;
  }

  @media (min-width: 920px) {
    flex-direction: row;
  }

  .forwho--wrapper--item:nth-child(2) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .forwho--wrapper--item {
    @media (min-width: 350px) {
      margin: 2rem 0;
    }
    
    @media (min-width: 930px) {
      margin-top: 0;
      margin-bottom: 1rem;
      flex: 0 0 40%;
    }
  }
}

.forwho--wrapper {
  background-color: $colorWhite;
}

.forwho {
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    padding-bottom: 120px;
  }

  @media (min-width: 920px) {
    padding-top: 140px;
  }

  @media (min-width: 1200px) {
    padding-bottom: 180px;
  }

  &--title {
    margin-bottom: 60px;

    h2 {
      text-align: center;
    }
  }

  &--wrapper {
    display: flex;

    :nth-child(2) {
      @media (min-width: 350px) {
        margin: 24px 0;
      }

      @media (min-width: 920px) {
        margin: 0 14px;
      }

      @media (min-width: 1400px) {
        margin: 0 2%;
      }
  }

    @media (min-width: 350px) {
      flex-direction: column;
      justify-content: center;
    }

    @media (min-width: 920px) {
      flex-direction: row;
    }

    &--item {
      border: 1px solid;
      position: relative;

      @media (min-width: 350px) {
        padding-right: 60px;
        align-items: flex-start;
        padding: 30px 60px 30px 30px;
      }

      @media (min-width: 920px) {
        width: 30%;
      }

      @media (min-width: 1200px) {
        display: flex;
      }

      .subtitle2 {
        text-align: left;
      }

      .p {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0;

        @media (min-width: 350px) {
          max-width: 10%;
        }

        @media (min-width: 1400px) {
          bottom: -32px;
          right: -14px;
          max-width: 15%;
        }
      }
    }
  }
}
</style>