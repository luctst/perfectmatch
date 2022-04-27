<template>
  <section class="gettingmaried container-fluid">
    <div class="gettingmaried--title">
      <h3>Vous allez vous marier ?</h3>
      <h3>La demande tant attendue est arrivée ? </h3>
      <h3>Con-gra-tu-la-tion !</h3>
    </div>
    <div class="gettingmaried--infos">
      <div class="gettingmaried--infos--pog">
        <div ref="pogitem" class="gettingmaried--infos--pog--firstitem">
          {{ content.contentInPink }}
        </div>
        <div class="is__container__img gettingmaried--infos--pog--icon">
          <icon></icon>
        </div>
        <div ref="pogseconditem" class="gettingmaried--infos--pog--seconditem">
          {{ content.contentInPink.split("").reverse().join("") }}
        </div>
      </div>
      <div class="gettingmaried--infos--content">
        <p>Si vous êtes ici, c'est sûrement que vous vous posez quelques questions à propos de l l'organisation de votre grand jour. Alors vous êtes au bon endroit !</p>
      </div>
    </div>
  </section>
</template>

<script>
import CircleType from 'circletype';
import GlobalMixin from '~/mixins/global';
import Icon from '~/assets/img/icon.svg?inline';

export default {
  name: 'HomeFirstSection',
  components: {
    Icon,
  },
  mixins: [GlobalMixin],
  mounted() {
    new CircleType(this.$refs.pogitem)
      .radius(100);
    
    new CircleType(this.$refs.pogseconditem)
      .dir(-1)
      .radius(100);
  },
};
</script>

<style lang="scss" scoped>
.gettingmaried {
  background-color: $colorWhite;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (min-width: 350px) {
    padding-top: 120px;
    height: 70vh;
  }

  @media (min-width: 800px) {
    padding-top: 170px;
  }

  @media (min-width: 840px) {
    height: 80vh;
    padding-top: 200px;
  }

  &--title {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 350px) {
      h3 {
        font-size: 1.9em;
        font-weight: 400;
        line-height: 40px;
      }
    }

    @media (min-width: 800px) {
      h3 {
        font-size: 2.7em;
        line-height: 56px;
      }
    }

    @media (min-width: 840px) {
      h3 {
        font-size: 3em;
      }
    }

    @media (min-width: 1100px) {
      h3 {
        font-size: 4em;
        line-height: 70px;
      }
    }

    h3 {
      color: $textColor;
      font-family: $secondTypo;
      margin: 0;
      text-align: center;
    }
  }

  &--infos {
    display: flex;

    @media (min-width: 350px) {
      align-items: center;
      flex-direction: column;

      &--pog {
        margin-top: 80px;
        order: 2;
        width: 236px;

        &--firstitem,
        &--seconditem {
          font-size: 20px;
        }
      }
      &--content {
        margin-top: 25px;
        order: 1;

        p {
          font-size: 14px;
          margin: 0 9%;
        }
      }
    }

    @media (min-width: 800px) {
      &--content {
        p {
          margin: 0 25%;
        }
      }
    }

    @media (min-width: 840px) {
      align-items: flex-start;
      flex-direction: row;
      margin-top: 70px;

      &--pog {
        margin-top: 0;
        order: 1;
        width: 270px;
      }

      &--content {
        display: flex;
        margin-top: 0;
        max-width: inherit;
        order: 2;
        width: 100%;

        p {
          margin: 0;
          margin-left: 18%;
          max-width: 300px;
        }
      }
    }

    @media (min-width: 1100px) {
      &--content {
        p {
          margin-left: 28%;
        }
      }
    }

    &--pog {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 50%;
      background-color: $colorPurple;
      height: 236px;
      position: relative;

      &--firstitem {
        color: $textColor!important;
        font-family: $secondTypo!important;
        margin-top: 14px;
      }

      &--seconditem {
        color: $textColor!important;
        font-family: $secondTypo!important;
        margin-bottom: 14px;
      }

      &--icon {
        position: absolute;
        top: 47%;
        left: 44%;
      }
    }

    &--content {
      p {
        color: $textColor;
        font-family: $mainTypo;
        text-align: center;
        line-height: 20px;
      }
    }
  }
}
</style>