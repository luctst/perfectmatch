<template>
  <section class="gettingmaried container-fluid">
    <div class="gettingmaried--title">
      <h3>Vous allez vous marier ?</h3>
      <h3>La demande tant attendue est arrivée ? </h3>
      <h3>Con-gra-tu-la-tion !</h3>
    </div>
    <div class="gettingmaried--infos">
      <div class="gettingmaried--infos--pog"></div>
      <div class="gettingmaried--infos--content">
        <p>Si vous êtes ici, c'est sûrement que vous vous posez quelques questions à propos de l l'organisation de votre grand jour. Alors vous êtes au bon endroit !</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeFirstSection',
  inheritAttrs: false,
  props: {
    content: {
      type: Object,
      required: true,
    },
  }, 
};
</script>

<style lang="scss" scoped>
.gettingmaried {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &--title {
    h3 {
      margin: 0;
    }
  }
}
</style>