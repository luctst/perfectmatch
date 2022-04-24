<template>
  <section class="offers container-fluid">
    <div class="offers--first offer" v-add-class-hover>
      <div class="is__container__img">
        <offers-first></offers-first>
      </div>
      <h4>Organisation Complète</h4>
      <p>On s’occupe de tout et il ne vous restera plus qu’à profiter de votre journée le plus sereinement possible.</p>
      <button>Découvrir</button>
    </div>
    <div class="offers--second" v-add-class-hover></div>
    <div class="offers--third" v-add-class-hover></div>
  </section>
</template>

<script>
import GlobalMixin from '~/mixins/global';
import OffersFirst from '~/assets/img/offers-first.svg?inline';

export default {
  name: 'Offers',
  mixins: [GlobalMixin],
  components: {
    OffersFirst,
  },
  directives: {
    'add-class-hover': {
      bind(el) {
        el.addEventListener('mouseenter', () => {
          if (el.classList.contains('active')) return false;
          el.classList.add('active');
        })
        el.addEventListener('mouseleave', () => {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          };

          if (el.classList.contains('inactive')) return false;
          el.classList.add('inactive');
        })
      },
      unbind(el) {
        el.removeEventListener('mouseenter', () => {})
        el.removeEventListener('mouseleave', () => {})
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.offers {
  display: flex;

  .offer {
    display: flex;
    flex-direction: column;

    h4,
    p {
      color: $textColor;
      margin: 0;
    }

    h4 {
      font-family: $secondTypo;
    }
  }
}
</style>