<template>
  <section class="events container-fluid">
    <div class="events--loop">
      <loop-event></loop-event>
    </div>
    <div class="events--content">
      <div>évènements</div>
      <h4>Vous souhaitez fêter un évènement qui vous <span>tient à coeur ?</span></h4>
      <p><span>The Perfect Match s’engage à ne faire que du sur-mesure !</span>
      Parce-que chaque client est unique et chaque évènement aussi, en passant par la demande en mariage, l’organisation de vos fiançailles, une baby shower, une fête religieuse, ou encore votre anniversaire, on s’occupe de tout.</p>
      <button class="is__btn__secondary">Découvrir</button>
    </div>
    <div class="events--slidermobile">
      <div class="is__container__img events--slidermobile--first">
        <img src="~/assets/img/Groupe21.jpg"/>
      </div>
      <div class="is__container__img events--slidermobile--second">
        <div class="events--slidermobile--second--overlay">
          <img src="~/assets/img/Groupe13.jpg"/>
        </div>
      </div>
    </div>
    <div class="events--sliderdesktop">
      <div class="is__container__img events--sliderdesktop--first">
        <img src="~/assets/img/Groupe21.jpg"/>
      </div>
      <div class="is__container__img events--sliderdesktop--second">
        <div class="events--sliderdesktop--second--overlay">
          <img src="~/assets/img/Groupe13.jpg"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';
import LoopEvent from '~/assets/img/loop-event.svg?inline';

export default {
  name: 'Events',
  mixins: [globalMixin],
  components: {
    LoopEvent,
  },
};
</script>

<style lang="scss" scoped>
.events {
  background-color: $colorGreen;
  position: relative;

  &--loop {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
  }

  &--content,
  &--slidermobile,
  &--sliderdesktop {
    z-index: 2;
  }

  &--content {
    display: flex;
    flex-direction: column;
    position: relative;
  }
}
</style>