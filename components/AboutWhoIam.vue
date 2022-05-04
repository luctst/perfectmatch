<template>
  <section class="whoiam container-fluid">
    <div class="whoiam--title">
      <div>QUI SE CACHE DERRIÈRE ?</div>
      <h2><span>Je suis Alexandra</span>, bordelaise de naissance, parisienne d'adoption.</h2>
    </div>
    <div class="whoiam--chips">
      <div class="is__chips">Humaine</div>
      <div class="is__chips">Pétillante</div>
      <div class="is__chips">Attentive</div>
    </div>
    <div class="whoiam--content">
      <p>Amoureuse de l'amour et grande fêtarde dans l'âme, les moments passés auprès de ma famille et de mes amis me sont chers. C'est pourquoi je ne me voyais</p>
      <p>pas faire autre chose que célébrer l'amour et les événements qui réuniront vos proches pour des moments uniques et inoubliables.</p>
    </div>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'WhoIam',
  mixins: [globalMixin],
}
</script>

<style lang="scss" scoped>
.whoiam {
  background-color: $colorWhite;
  height: 100vh;
  position: relative;
  z-index: 3;
  max-height: 100vh;
}
</style>