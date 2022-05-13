<template>
  <section class="speciality--wrapper">
    <section class="speciality container-fluid">
      <div class="speciality--title">
        <h3>Spécialisée dans <span>l'organisation d'événements privés</span>, je me chargerai pour vous de la recherche et de la <span>sélection des prestataires</span>, de la planification en amont et de la <span>coordination des intervenants</span> le jour de votre événement.</h3>
        <div class="subtitle">En passant par la célébration de votre anniversaire, de l'arrivée de votre enfant, d'une demande en mariage ou encore d'un fête religieuse, laissez librez court à vos envies et je m'occuperai de tout. </div>
      </div>
      <div class="speciality--img">
        <div class="is__container__img">
          <img src="~/assets/img/Rectangle 2.jpg"/>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Speciality',
};
</script>

<style lang="scss" scoped>
.speciality--wrapper {
  background-color: $colorWhite;
}

.speciality {
  position: relative;
  z-index: 3;
}
</style>