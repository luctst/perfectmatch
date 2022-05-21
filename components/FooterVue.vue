<template>
  <footer class="footer container-fluid" >
    <div class="is__container__img footer--loop">
      <loop-footer></loop-footer>
    </div>
    <div class="footer--title">
      <h2 class="is__h1" data-line>Prêts à rejoindre l'expérience<br/> The Perfect <span>Match</span> ?</h2>
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
          <nuxt-link to="/legal">Mentions légales</nuxt-link>
        </p>
        <p>
          <nuxt-link to="/cgu">Politique de confidentialité</nuxt-link>
        </p>
      </div>
      <div class="footer--legales--thanks">
        <p>
          <a href="https://www.thomasboyergibaud.com/" target="_blank">Design by Thomas B.</a>
        </p>
        <p>
          <a href="https://lucastostee.com" target="_blank">Dev by Lucas T.</a>
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
h6,
p,
div {
  color: $textColor;
  margin: 0;
}

.footer {
  background-color: #F8ECFD;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: 350px) {
    height: auto;
    padding-top: 80px;
  }

  @media (min-width: 920px) {
    min-height: 100vh;
    position: fixed;
    bottom: 0;
    width: 100vw;
    max-width: 100%;
    z-index: -1;
    padding-bottom: 45px!important;
    justify-content: space-evenly;
  }

  @media (min-width: 1000px) {
    justify-content: flex-start;
  }

  @media (min-width: 1800px) {
    padding-top: 25vh;
  }

  &--loop {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  &--title {
    display: flex;
    flex-direction: column;

    button {
      @media (min-width: 350px) {
        margin-top: 40px;
      }
    }

    @media (min-width: 350px) {
      align-items: center;
    }

    @media (min-width: 1100px) {
      margin-top: 5rem;
    }
  }

  &--contact {
    @media (min-width: 350px) {
      margin-top: 75px;
    }

    @media (min-width: 920px) {
      align-items: flex-end;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
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

      @media (min-width: 920px) {
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

      @media (min-width: 920px) {
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

      @media (min-width: 920px) {
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

      @media (min-width: 920px) {
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

    @media (min-width: 920px) {
      display: flex;
      justify-content: space-between;
    }

    @media (min-width: 1000px) {
      margin-top: 30px;
    }
  }
}
</style>