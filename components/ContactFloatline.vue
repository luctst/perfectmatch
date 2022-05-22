<template>
  <section class="floatline container-fluid">
    <div class="floatline--loop">
      <div class="is__container__img">
        <loop-contact></loop-contact>
      </div>
    </div>
    <div class="floatline--content" data-line>
      <section><h1>Vous avez <div>besoin d'aide</div></h1></section>
      <section><h1>dans l'organisation de</h1></section>
      <section><h1>votre évènement ?</h1></section>
      <div class="subtitle">Vous souhaitez des informations complémentaires ?</div>
      <div class="subtitle"><span>Je vous invite à remplir ce formulaire ou me contacter directement.</span></div>
    </div>
  </section>
</template>

<script>
import LoopContact from '~/assets/img/loop-contact.svg?inline';

export default {
  name: 'Floatline',
  components: {
    LoopContact,
  },
  mounted() {
    document.querySelector('body');
  },
};
</script>

<style lang="scss" scoped>
.floatline {
  box-sizing: content-box;

  @media (min-width: 350px) {
    height: auto;
    padding-top: 8em!important;
    margin-bottom: 6rem!important;
  }

  @media (min-width: 920px) {
    height: calc(100vh - 12em);
    padding-top: 12em!important;
  }

  @media (min-width: 1100px) {
    margin-bottom: 4rem!important;
  } 

  &--loop {
    position: absolute;
    z-index: 1;
    top: 0;

    div {
      height: 100vh;
    }
  }

  &--content {
    section {
      @media (min-width: 350px) {
        margin-bottom: 1rem;
      }

      h1 {
        @media (min-width: 350px) {
          font-size: 3.9rem;
        }

        @media (min-width: 500px) {
          font-size: 76px;
        }

        @media (min-width: 920px) {
          font-size: 7em;
          line-height: 1em;
        }

        @media (min-width: 1600px) {
          font-size: 9em;
        }
      }
    }

    :nth-child(3) {
      margin-bottom: 3rem;
    }

    .subtitle {
      margin: 0;
    }
  }
}
</style>