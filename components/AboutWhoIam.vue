<template>
  <section class="whoiam--wrapper">
    <section class="whoiam container-fluid">
      <div class="whoiam--title" data-line>
        <div class="title--tag">{{ content.littleTitle }}</div>
        <h2 v-html="content.firstBigTitle"></h2>
        <h2 v-html="content.secondBigTitle"></h2>
        <h2 v-html="content.thirdBigTitle"></h2>
      </div>
      <div class="whoiam--chips">
        <div class="is__chips">{{ content.firstGreenContent }}</div>
        <div class="is__chips">{{ content.secondGreenContent }}</div>
        <div class="is__chips">{{ content.thirdGreenContent }}</div>
      </div>
      <div class="whoiam--content">
        <p v-html="parseMarkdown(content.subtitleLeft)" class="subtitle2"></p>
        <p v-html="parseMarkdown(content.subtitleRight)" class="subtitle2"></p>
      </div>
    </section>
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
.whoiam--wrapper {
  background-color: $colorWhite;
}

.whoiam {
  position: relative;
  z-index: 3;
  max-height: 100vh;

  @media (min-width: 350px) {
    height: auto;
    padding-top: 35rem;
    padding-bottom: 3rem;
  }

  @media (min-width: 810px) {
    padding-top: 40rem;
  }

  @media (min-width: 900px) {
    padding-top: 50rem;
  }

  @media (min-width: 920px) {
    padding-top: 12rem;
    padding-bottom: 180px;
  }

  @media (min-width: 1000px) {
    height: auto;
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

      @media (min-width: 920px) {
        flex: 0 0 80%;
        text-align: left;
        margin: 0;
      }
    }

    @media (min-width: 920px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 450px;
      margin-top: 60px;

      p:first-of-type {
        margin-right: 40px;
      }
    }

    @media (min-width: 1100px) {
      flex-direction: row;
    }
  }
}
</style>