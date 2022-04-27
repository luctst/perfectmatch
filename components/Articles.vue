<template>
  <section class="articles container-fluid">
    <div class="articles--content">
      <div>Articles</div>
      <h4>En manque d'<span>inspiration</span></h4>
      <h4>Envie d'un peu de lecture ?</h4>
    </div>
    <div class="articles--items--wrapper">
      <router-link
       v-for="(article, index) in articles"
      :id="index"
      :key="index"
      :class="['articles--items--wrapper--item', article.active && 'active']"
      to="/"
      @mouseenter.native="article.active = true"
      @mouseleave.native="article.active = false">
        <div
        :style="`:hover { cursor: ${cursorUrl};}`"
        class="is__container__img articles--items--wrapper--item--img">
          <img :src="article.cover"/>
        </div>
        <div class="articles--items--wrapper--item--content">
          <h5>{{ article.title }}</h5>
          <p>{{ article.subTitle }}</p>
        </div>
      </router-link>
    </div>
    <div class="articles--actions">
      <button class="is__btn__primary">Voir plus</button>
    </div>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Articles',
  mixins: [globalMixin],
  data() {
    return {
      articles: [
        {
          active: false,
          cover: require('~/assets/img/Rectangle5.jpg'),
          title: 'Dream it yourself : la robe de mariée contemporaine à Montréal',
          subTitle: 'Que fait-on quand on est une future mariée qui rêve d’un mariage qui ne semble qu’exister sur Pinterest? Quand on a envie d’une robe...',
        },
        {
          active: false,
          cover: require('~/assets/img/Rectangle16.jpg'),
          title: '20 lieux intimes pour se marier à Montréal et dans les environs.',
          subTitle: 'On dit que tout vient à point à qui sait attendre. Je pense que l’année 2020 aura été celle de la patience.',
        },
        {
          active: false,
          cover: require('~/assets/img/i.jpg'),
          title: '10 questions à poser avant de louer une salle de réception.',
          subTitle: 'C’est un euphémisme de dire qu’il y a beaucoup de choix à faire quand on organise son mariage.',
        },
      ],
      cursorUrl: require('~/assets/img/cursor.png'),
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  h5 {
    text-decoration: underline;
    text-decoration-color: #EDCDB8;
  }
}

.articles {
  background-color: $colorWhite;
  position: relative;
  z-index: 2;

  @media (min-width: 350px) {
    padding-top: 80px;
  }

  @media (min-width: 800px) {
    padding-top: 160px;
    padding-bottom: 80px;
  }

  &--content {
    div,
    h4 {
      color: $textColor;
      margin: 0;
    }

    div {
      color: $textColor;
      font-family: $mainTypo;
      font-size: 12px;
      line-height: 13.8px;
      text-transform: uppercase;
      margin-bottom: 15px;
    }

    h4 {
      font-family: $secondTypo;

      span {
        font-family: $mainTypoNeueBold;
      }

      @media (min-width: 350px) {
        font-size: 2em;
      }

      @media (min-width: 500px) {
        font-size: 2.5em;
      }

      @media (min-width: 950px) {
        font-size: 3em;
      }
    }
  }

  &--items--wrapper {
    display: flex;

    &--item {
      display: inline-block;
      text-decoration: none;

      &--content {
        h5 {
          color: $textColor;
          font-family: $secondTypo;
          line-height: 30px;
          font-size: 1.5em;
          font-weight: 100;
          margin-top: 24px;
          margin-bottom: 15px;
        }

        p {
          color: $textColor;
          font-family: $mainTypo;
          line-height: 20px;
          font-size: 14px;
        }
      }

      @media (min-width: 415px) {
        max-width: 335px;
      }

      @media (min-width: 600px) {
        max-width: 400px;
      }

      @media (min-width: 800px) {
        max-width: 240px;
      }

      @media (min-width: 950px) {
        max-width: 280px;
      }

      @media (min-width: 1025px) {
        max-width: 300px;
      }

      @media (min-width: 1100px) {
        max-width: 335px;
      }
    }

    @media (min-width: 350px) {
      align-items: center;
      flex-direction: column;
      margin-top: 50px;

      &--item:not(:first-child) {
        margin-top: 36px;
      }
    }

    @media (min-width: 800px) {
      align-items: flex-start;
      flex-direction: row;
      justify-content: space-between;

      &--item:not(:first-child) {
        margin-top: 0;
      }

      &--item {
        &:last-child {
          transform: translateY(-20%);
        }
      }
    }
  }

  &--actions {
    margin-top: 40px;

    @media (min-width: 350px) {
      display: none;
    }

    @media (min-width: 800px) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>