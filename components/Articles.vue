<template>
  <section class="articles--wrapper">
    <section class="articles container-fluid">
      <div class="articles--content">
        <div class="title--tag">Articles</div>
        <h2 data-line>En manque d'<div>inspiration</div><br>
        Envie d'un peu de lecture ?</h2>
      </div>
      <div class="articles--items--wrapper" data-rellax data-rellax-speed="0.2">
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
          class="is__container__img articles--items--wrapper--item--img" >
            <img :src="article.cover"/>
          </div>
          <div class="articles--items--wrapper--item--content">
            <h4>{{ article.title }}</h4>
            <p class="subtitle">{{ article.subTitle }}</p>
          </div>
        </router-link>
      </div>
      <div class="articles--actions">
        <button class="is__btn__primary">Voir plus</button>
      </div>
    </section>
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
  h4 {
    text-decoration: underline;
    text-decoration-color: #EDCDB8;
  }
}

.articles--wrapper {
  background-color: $colorWhite;
}

.articles {
  position: relative;
  z-index: 2;

  @media (min-width: 350px) {
    padding-top: 110px;
    padding-bottom: 80px;
  }

  @media (min-width: 920px) {
    padding-top: 160px;
    padding-bottom: 130px;
  }

  &--content {
    h2:last-of-type {
      @media (min-width: 920px) {
        margin-bottom: 100px;
      }
    }
  }

  &--items--wrapper {
    display: flex;

    &--item {
      display: inline-block;
      text-decoration: none;

      @media (min-width: 415px) {
        max-width: 335px;
      }

      @media (min-width: 600px) {
        max-width: 400px;
      }

      @media (min-width: 920px) {
        max-width: 240px;
      }

      @media (min-width: 950px) {
        max-width: 280px;
      }

      @media (min-width: 1025px) {
        max-width: 300px;
      }

      @media (min-width: 1100px) {
        max-width: 30vw;
      }

      &--content {
        h4 {
          margin-top: 20px;
        }

        p {
          text-align: left;
          margin-top: 15px;
        }
      }
    }

    @media (min-width: 350px) {
      align-items: center;
      flex-direction: column;
      margin-top: 50px;

      &--item:not(:first-child) {
        margin-top: 50px;
      }
    }

    @media (min-width: 920px) {
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

      &--item:nth-child(2) {
        margin-left: 10vw;
        margin-right: 6vw;
      }
    }

    @media (min-width: 1800px) {
      &--item:nth-child(2) {
        margin-left: 10vw;
        margin-right: 6vw;
      }
    }
  }

  &--actions {
    margin-top: 40px;

    @media (min-width: 350px) {
      display: none;
    }

    @media (min-width: 920px) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>