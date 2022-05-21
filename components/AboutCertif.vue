<template>
  <section class="certif--wrapper">
    <section class="certif container-fluid">
      <div class="certif--title">
        <div class="title--tag">Mon parcours</div>
        <h2 data-line><div>Certifiée</div> organisateur de mariage</h2>
      </div>
      <div class="certif--content">
        <div class="is__container__img">
          <img src="~/assets/img/certif.png"/>
        </div>
        <p class="subtitle2">Après avoir travaillé en tant qu'agent immobilier pendant près de 4 ans sur la région bordelaise, je voulu me réorienté vers un métier plus en accord avec moi même.</p>
        <p class="subtitle2">C'est pourquoi j'ai suivi une formation d'organisatrice de mariage au sein de l'école **EFMM** (école de formation aux métiers du mariage).</p>
      </div>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Certif',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.certif--wrapper {
  background-color: $colorWhite;
}

.certif {
  color: $textColor;
  position: relative;
  z-index: 3;

  &--title {
    div {
      margin-bottom: 15px;
    }
  }

  &--content {
    @media (min-width: 350px) {
      margin-top: 30px;
      padding-bottom: 70px;

      div {
        margin-bottom: 25px;

        img {
          object-fit: fill;
        }
      }
    }

    @media (min-width: 450px) {
      div {
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
      }

      p {
        text-align: center;
        margin: 0 6%;
      }
    }

    @media (min-width: 920px) {
      display: flex;
      margin-top: 60px;
      padding-bottom: 180px;
      max-width: 80vw;

      div {
        flex: 0 0 30%;
        margin-bottom: 0;
        max-width: none;

        img {
          height: auto;
        }
      }

      p {
        text-align: left;
        margin-left: 0;
        margin-right: 0;
      }

      p:first-of-type {
        margin: 0 40px;
      }
    }

    @media (min-width: 1600px) {
      max-width: 65vw;
    }
  }
}
</style>