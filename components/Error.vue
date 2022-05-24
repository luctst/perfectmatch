<template>
  <section class="error--wrapper">
    <header-vue></header-vue>
    <section class="loop">
      <div class="is__container__img">
        <loop-footer></loop-footer>
      </div>
    </section>
    <main class="error container-fluid">
      <h1><span>Oups,</span> voila qui n'était pas prévu</h1>
      <div class="subtitle">
        La page est introuvable ou une erreur est survenu, nous nous excusons du dérangement et vous invitons à revenir ultérieurement ou à nous contacter si l'erreur persiste.
      </div>
      <button class="is__btn__secondary">
        <router-link to="/">
          Retour page d'accueil
        </router-link>
      </button>
    </main>
    <footer class="footer">
      <section class="footer--wrapper container-fluid">
        <div class="footer--wrapper--contact">
          <div class="footer--wrapper--contact--infos">
            <div>Coordonnées</div>
            <h6>Alexandra Sanchez</h6>
            <h6>+33 6 51 79 15 08</h6>
            <h6>contact@theperfectmatch.com</h6>
          </div>
          <div class="footer--wrapper--contact--social">
            <span>FB</span>
            <span>IG</span>
            <span>IN</span>
          </div>
        </div>
        <div class="footer--wrapper--legales">
          <div class="footer--wrapper--legales--first">
            <div>© 2022 The Perfect Match</div>
            <p>
              <router-link to="/legal">Mentions légales</router-link>
            </p>
            <p>
              <router-link to="/cgu">Politique de confidentialité</router-link>
            </p>
          </div>
          <div class="footer--wrapper--legales--thanks">
            <p>
              <a href="https://www.thomasboyergibaud.com/" target="_blank">Design by Thomas B.</a>
            </p>
            <p>
              <a href="https://lucastostee.com" target="_blank">Dev by Lucas T.</a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  </section>
</template>

<script>
import LoopFooter from '~/assets/img/loop-footer.svg?inline';

export default {
  name: 'Error',
  components: {
    LoopFooter,
  },
};
</script>

<style lang="scss" scoped>
.error--wrapper {
  display: flex;
  flex-direction: column;
  background-color: #F8ECFD;
  position: relative;
  min-height: 100vh;
  height: auto;
}

.loop {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;

  svg {
    height: 100vh;
  }
}

.error {
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media (min-width: 350px) {
    padding-top: 80px!important;
  }

  @media (min-width: 920px) {
    padding-top: 8rem!important;
  }

  .subtitle {
    width: 100%;
    margin-bottom: 4rem;

    @media (min-width: 920px) {
      max-width: 50%;
    }
  }
}

.footer {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: auto;

  &--wrapper {
    margin-left: 0;
    margin-right: 0;

    @media (min-width: 920px) {
      padding-bottom: 45px!important;
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
          margin: 0;
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
        p {
          margin: 0;
        }

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
        p {
          margin: 0;
        }

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
}
</style>