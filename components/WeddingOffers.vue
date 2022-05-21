<template>
  <section class="offers">
    <div
    :style="`background-color:${theme};`"
    class="offers--wrapper container-fluid">
      <div class="offers--wrapper--title" data-line>
        <h2><div>Qu'est-ce que comprend</div></h2>
        <h2>l'organisation compléte ?</h2>
      </div>
      <div class="offers--wrapper--items">
        <div
        v-for="(item, i) in items"
        :key="i"
        class="offers--wrapper--items--item"
        :style="`border-bottom:1px solid ${borderColor};`"
        @click="switchActive(i)">
          <div class="offers--wrapper--items--item--title">
            <h3>{{ item.title }}</h3>
            <div
            :style="`border:1px solid ${borderColor};background-color:${item.active ? borderColor : 'transparent'};`"
            class="is__container__img">
              <accordeon-plus v-if="!item.active"></accordeon-plus>
              <accordeon-less v-else></accordeon-less>
            </div>
          </div>
          <div
          v-if="item.active"
          class="offers--wrapper--items--item--subtitle">
            <p class="subtitle" v-html="item.subtitle"></p>
          </div>
        </div>
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
      items: [
        {
          active: true,
          title: 'Un rendez-vous découverte',
          subtitle: 'L\'idée de ce premier rendez-vous est <span>d\'échanger sur vos souhaits, volontés, exigences de votre mariage, mais aussi de faire un peu plus connaissance</span> et d\'établir une relation de confiance qui sera primordiale pour la suite de notre collaboration. Suite à cette rencontre mutuelle, je souhaiterai connaitre en détail TOUTES vos envies afin de bien cerner le mariage dont vous rêvez et ainsi établir un devis adapté. Chez nous, pas de devis tout prêt, chaque client et évènement est unique.',
        },
        {
          active: false,
          title: 'Réalisation du moodboard',
          subtitle: 'J\'aime les bisous au bout du pinche',
        },
        {
          active: false,
          title: 'L\'organisation précise point par point',
          subtitle: 'sjgdflkjgdlkjgdlfkgjd',
        },
        {
          active: false,
          title: 'Les prestataires',
          subtitle: 'xkjvlkjdkflgjdlkgjdf',
        },
        {
          active: false,
          title: 'Mon temps',
          subtitle: 'slkjdljgdlkjgd',
        },
        {
          active: false,
          title: 'Préparation du déroulé du jour j',
          subtitle: 'lkdfjdlfkghldfhkg',
        },
        {
          active: false,
          title: 'La coordination du jour j',
          subtitle: 'xldkjldkgjdlfkgjdfgd',
        },
      ],
    };
  },
  watch: {
    $route() {
      this.filledData();
    },
  },
  created() {
    this.filledData();
  },
  methods: {
    filledData() {
      const themes = ['#FDEADD', '#E0F4EB', '#F8ECFD'];

      switch (this.$route.path) {
        case '/wedding/complete':
          this.theme = themes[0];
          this.borderColor = '#EDCDB8';
          break;
        case '/wedding/partial':
          this.theme = themes[1];
          this.borderColor = '#AED7C5';
          break;
        case '/wedding/dday':
          this.theme = themes[2];
          this.borderColor = '#AED7C5';
          break;
        default:
          break;
      }
    },
    switchActive(indexClicked) {
      this.items = this.items.map((item, i) => {
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
  &--items {
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

  &--items {
    :last-child {
      margin-bottom: 0;
    }

    &--item {
      border-bottom: 1px solid #EDCDB8;
      display: flex;
      flex-direction: column;

      @media (min-width: 350px) {
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
      }

      &--title {
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