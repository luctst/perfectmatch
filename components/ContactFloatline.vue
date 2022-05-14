<template>
  <section class="floatline container-fluid">
    <div class="floatline--loop">
      <div class="is__container__img">
        <loop-contact></loop-contact>
      </div>
    </div>
    <div class="floatline--content">
      <section><h1>Vous avez <span>besoin d'aide</span></h1></section>
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
    height: calc(100vh - 8em);
    padding-top: 8em!important;
  }

  @media (min-width: 920px) {
    height: calc(100vh - 12em);
    padding-top: 12em!important;
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
    :nth-child(3) {
      margin-bottom: 3rem;
    }

    .subtitle {
      margin: 0;
    }
  }
}
</style>