<template>
  <section class="whoiam container-fluid">
    <div class="whoiam--title">
      <div class="title--tag">QUI SE CACHE DERRIÈRE ?</div>
      <h2><span>Je suis Alexandra</span>,</h2>
      <h2>bordelaise de naissance,</h2>
      <h2>parisienne d'adoption.</h2>
    </div>
    <div class="whoiam--chips">
      <div class="is__chips">Humaine</div>
      <div class="is__chips">Pétillante</div>
      <div class="is__chips">Attentive</div>
    </div>
    <div class="whoiam--content">
      <p class="subtitle2">Amoureuse de l'amour et grande fêtarde dans l'âme, les moments passés auprès de ma famille et de mes amis me sont chers. C'est pourquoi je ne me voyais</p>
      <p class="subtitle2">pas faire autre chose que célébrer l'amour et les événements qui réuniront vos proches pour des moments uniques et inoubliables.</p>
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
  position: relative;
  z-index: 3;
  max-height: 100vh;

  @media (min-width: 350px) {
    height: 60vh;
    padding-top: 240px;
  }

  @media (min-width: 920px) {
    padding-top: 160px;
    padding-bottom: 180px;
  }

  @media (min-width: 1000px) {
    height: auto;
    padding-top: 180px;
  }

  &--title {
    div {
      margin-bottom: 15px;
    }

    h2 {
      position: relative;
    }

    @media (min-width: 350px) {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 920px) {
      align-items: flex-start;

      :nth-child(2) {
        &::after {
          content: 'Humaines';
          display: inline-block;
          position: absolute;
          right: 0;
          top: -16px;
          color: $textColor;
          background-color: $colorGreen;
          border-radius: 80px;
          font-family: $mainTypo;
          font-size: 14px;
          line-height: 14px;
          padding: 12px 12px 12px;
          text-transform: uppercase;
          transform: rotate(20deg);
        }
      }

      :nth-child(3) {
        &::after {
          content: 'Pétillante';
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: -16px;
          color: $textColor;
          background-color: $colorGreen;
          border-radius: 80px;
          font-family: $mainTypo;
          font-size: 14px;
          line-height: 14px;
          padding: 12px 12px 12px;
          text-transform: uppercase;
          transform: rotate(-20deg);
        }
      }

      :nth-child(4) {
        &::after {
          content: 'Attentive';
          display: inline-block;
          position: absolute;
          bottom: -16px;
          left: 50%;
          color: $textColor;
          background-color: $colorGreen;
          border-radius: 80px;
          font-family: $mainTypo;
          font-size: 14px;
          line-height: 14px;
          padding: 12px 12px 12px;
          text-transform: uppercase;
          transform: rotate(20deg);
        }
      }
    }
  }

  &--chips {
    @media (min-width: 350px) {
      display: flex;
      justify-content: center;
      margin: 30px 0;

      div:nth-child(2) {
        margin: 0 8px;
      }
    }

    @media (min-width: 920px) {
      display: none;
    }
  }

  &--content {
    p {
      @media (min-width: 350px) {
        text-align: center;
      }

      @media (min-width: 500px) {
        margin: 0 12%;
      }

      @media (min-width: 920px) {
        flex: 0 0 80%;
        text-align: left;
        margin: 0;
      }
    }

    @media (min-width: 920px) {
      display: flex;
      justify-content: space-between;
      max-width: 450px;
      margin-top: 60px;

      p:first-of-type {
        margin-right: 40px;
      }
    }
  }
}
</style>