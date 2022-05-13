<template>
<section class="forwho--wrapper">
  <section class="forwho container-fluid">
    <div class="forwho--title">
      <h2><span>À qui s'adresse</span></h2>
      <h2>L'organisation compléte ?</h2>
    </div>
    <div class="forwho--wrapper">
      <div
      v-for="(item, i) in items"
      :key="i"
      :style="`border-color:${item.borderColor};`"
      class="forwho--wrapper--item">
        <div class="subtitle2">{{ item.content }}</div>
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
  data() {
    return {
      items: [
        {
          content: 'À tous les couples qui veulent que les préparatifs de leur mariage soient un plaisir et ne deviennent pas une corvée.',
          svg: ForWho1,
          borderColor: '#FDEADD',
        },
        {
          content: 'À tous les couples qui n\'ont pas le temps et qui souhaitent déléguer.',
          svg: ForWho2,
          borderColor: '#AED7C5',
        },
        {
          content: 'À tous les couples qui ne savent pas par où commencer, ni où donner de la tête.',
          svg: ForWho3,
          borderColor: '#DDC5E7',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.forwho--wrapper {
  background-color: $colorWhite;
}

.forwho {
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    padding-bottom: 120px;
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
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    @media (min-width: 920px) {
      flex-direction: row;
    }

    &--item {
      border: 1px solid;
      padding: 30px;
      position: relative;

      @media (min-width: 350px) {
        padding-right: 60px;
      }

      @media (min-width: 550px) {
        padding-right: 70px;
      }

      @media (min-width: 800px) {
        padding-right: 140px;
      }

      @media (min-width: 920px) {
        padding-right: 80px;
        max-height: 200px;
        height: 200px;
      }

      @media (min-width: 1200px) {
        align-items: center;
        display: flex;
        padding-right: 55px;
        padding-top: 0;
      }

      .subtitle2 {
        text-align: left;
      }

      .p {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0;

        @media (min-width: 1400px) {
          bottom: -32px;
          right: -14px;
        }
      }
    }
  }
}
</style>