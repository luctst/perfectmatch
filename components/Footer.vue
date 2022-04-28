<template>
  <footer class="footer container-fluid">
    <div class="is__container__img footer--loop">
      <loop-footer></loop-footer>
    </div>
    <div class="footer--title">
      <h5>Prêts à rejoindre l'expérience The Perfect <span>Match</span> ?</h5>
      <button class="is__btn__secondary">Contactez-nous</button>
    </div>
    <div class="footer--contact">
      <div class="footer--contact--infos">
        <div>Coordonnées</div>
        <h6>Alexandra Sanchez</h6>
        <h6>+33 6 51 79 15 08</h6>
        <h6>contact@theperfectmatch.com</h6>
      </div>
      <div class="footer--contact--social">
        <span>FB</span>
        <span>IG</span>
        <span>IN</span>
      </div>
    </div>
    <div class="footer--legales">
      <div class="footer--legales--first">
        <div>© 2022 The Perfect Match</div>
        <p>
          <nuxt-link to="/">Mentions légales</nuxt-link>
        </p>
        <p>
          <nuxt-link to="/">Politique de confidentialité</nuxt-link>
        </p>
      </div>
      <div class="footer--legales--thanks">
        <p>
          <a href="/">Design by Thomas B.</a>
        </p>
        <p>
          <a href="/">Dev by Lucas T.</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import globalMixin from '~/mixins/global';
import LoopFooter from '~/assets/img/loop-footer.svg?inline';

export default {
  name: 'FooterVue',
  components: {
    LoopFooter,
  },
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
h5,
h6,
p,
div {
  color: $textColor;
  margin: 0;
}

.footer {
  background-color: $colorPurple;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  flex-direction: column;
  min-height: 100vh;
  position: sticky;
  inset: 0px;
  overflow: auto;
  z-index: 1;

  @media (min-width: 350px) {
    padding-top: 80px;
  }

  @media (min-width: 800px) {
    padding-top: 130px;
    justify-content: space-evenly;
  }

  @media (min-width: 1000px) {
    justify-content: flex-start;
  }

  &--loop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;

    svg {
      object-fit: cover;
      max-height: 100%;
      max-width: 100%;
    }
  }

  &--title {
    display: flex;
    flex-direction: column;

    h5 {
      font-family: $secondTypo;
      font-weight: 100;
      text-align: center;

      span {
        font-family: $mainTypoNeueBold;
      }

      @media (min-width: 350px) {
        font-size: 3em;
        max-width: 250px;
      }

      @media (min-width: 450px) {
        font-size: 3.5em;
        max-width: 281px;
      }

      @media (min-width: 550px) {
        font-size: 3.7em;
        max-width: 300px;
      }

      @media (min-width: 800px) {
        margin: 0 10%;
        max-width: 100%;
      }

      @media (min-width: 950px) {
        font-size: 4.3em;
      }

      @media (min-width: 1100px) {
        font-size: 5.3em;
        margin: 0 15%;
      }
    }

    button {
      @media (min-width: 350px) {
        margin-top: 40px;
      }
    }

    @media (min-width: 350px) {
      align-items: center;
    }
  }

  &--contact {
    @media (min-width: 350px) {
      margin-top: 75px;
    }

    @media (min-width: 800px) {
      align-items: flex-end;
      display: flex;
      justify-content: space-between;
    }

    @media (min-width: 1000px) {
      margin-top: auto;
    }

    &--infos {
      div {
        font-family: $mainTypo;
        font-size: 12px;
        text-transform: uppercase;
        line-height: 13.8px;
        margin-bottom: 12px;
      }
  
      h6 {
        font-family: $secondTypo;
        font-size: 28px;
        font-weight: 100;
        line-height: 33.6px;
      }

      @media (min-width: 350px) {
        margin-bottom: 30px;
      }

      @media (min-width: 800px) {
        margin-bottom: 0;
      }
    }

    &--social {
      &:nth-child(1) {
        margin: 0 10px;
      }

      span {
        background-color: $colorWhite;
        border-radius: 50%;
        font-family: $mainTypo;
        font-size: 12px;
        padding: 10px 8px 9px 9px;
        height: 33px;
        width: 33px;
      }
    }
  }

  &--legales {
    div {
      color: #3C2A44;
      opacity: .5;
      text-transform: uppercase;
    }

    p,
    div {
      font-family: $mainTypo;
      font-size: 12px;
      line-height: 13.8px;

      a {
        color: #3C2A44;
        text-decoration: none;
        text-transform: uppercase;
        opacity: 0.5;
      }

      @media (min-width: 800px) {
        font-size: 11px;
      }
    }

    &--first {
      @media (min-width: 350px) {
        p:first-of-type {
          margin: 15px 0;
        }

        margin-bottom: 30px;
      }

      @media (min-width: 800px) {
        display: flex;
        margin-bottom: 0;

        p:first-of-type {
          margin: 0 15px;
        }
      }
    }

    &--thanks {
      @media (min-width: 350px) {
        margin-bottom: 60px;

        p:first-child {
          margin-bottom: 15px;
        }
      }

      @media (min-width: 800px) {
        display: flex;
        margin-bottom: 0;

        p:first-of-type {
          margin-right: 15px;
          margin-bottom: 0;
        }
      }
    }

    @media (min-width: 350px) {
      margin-top: 60px;
    }

    @media (min-width: 800px) {
      display: flex;
      justify-content: space-between;
    }

    @media (min-width: 1000px) {
      margin-top: 30px;
    }
  }
}
</style>