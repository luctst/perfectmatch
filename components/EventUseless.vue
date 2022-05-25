<template>
  <section class="useless--wrapper">
    <section class="useless container-fluid">
      <div class="useless--img">
        <div class="is__container__img useless--img--wrapper">
          <div class="useless--img--wrapper--overlay"
          data-parallaxUp
          >
            <img 
            src="~/assets/img/Groupe13.jpg">
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Useless',
};
</script>

<style lang="scss" scoped>
.useless--wrapper {
  background-color: $colorWhite;

  @media (min-width: 350px) {
    display: none;
  }

  @media (min-width: 920px) {
    display: block;
  }
}

.useless {
  position: relative;
  z-index: 3;

  &--img {
    display: flex;
    justify-content: flex-end;

    &--wrapper {
      @media (min-width: 920px) {
        margin-right: 5rem;
        max-width: 16%;
      }

      &--overlay {
        height: 100%;
        padding-top: 0px; 
        text-align: center; 
        overflow: hidden;

        img {
          border-top-left-radius: 300px 300px;
          border-top-right-radius: 300px 300px;
          display: block;
        }
      }
    }
  }
}
</style>