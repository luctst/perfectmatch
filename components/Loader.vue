<template>
  <section
  v-if="available"
  class="main">
    <div class="container-fluid">
      <div class="contain-loop">
        <svg class="loop" width="auto" height="100%" viewBox="0 0 647 811" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-217.746 988.299C19.5314 902.395 206.274 688.986 260.012 442.319C274.011 378.062 277.656 304.902 237.779 252.619C226.039 237.227 208.34 223.588 189.151 226.117C172.793 228.274 160.115 241.649 151.817 255.918C119.895 310.814 137.172 385.683 182.457 430.191C227.743 474.698 294.978 491.541 358.285 486.871C397.924 483.944 437.881 472.855 469.599 448.887C498.501 427.051 518.931 395.918 536.099 364.016C597.638 249.668 623.655 120.017 646.271 -7.86585" stroke="#EDCDB8" stroke-miterlimit="10" stroke-width="1"/>
        </svg>
      </div>
      <div class="logo">
        <div class="contain">
          <div class="the is__container__img">
            <the></the>
          </div>
          <div class="perfect is__container__img">
            <perfect></perfect>
          </div>
          <div class="match is__container__img">
            <match></match>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import The from '~/assets/img/the.svg?inline';
import Perfect from '~/assets/img/perfect.svg?inline';
import Match from '~/assets/img/match.svg?inline';

export default {
  name: 'Loader',
  components: {
    The,
    Perfect,
    Match,
  },
  data() {
    return {
      available: true,
    };
  },
  mounted() {
    document.querySelector('body').classList.add('is__overflow__hidden');
  },
  methods: {
    start() {
      this.available = true;
    },
    finish() {
      setTimeout(
        () => {
          document.querySelector('body').classList.remove('is__overflow__hidden');
          this.available = false;
        },
        3000
      );
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  background-color: #FDEADD;
  height: 100vh;
  position: relative;
  z-index: 20;
}

.logo {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-fluid {
  height: inherit;
}

.contain-loop {
  position: absolute;
  top: 0;
  z-index: 0;
  height: 100%;
}

.contain {
  display: flex;
  align-items: flex-start;
  z-index: 1;
}

.the {
  padding-right: 18px;
}

.perfect {
  padding-right: 25px;
}

.loop {
  stroke-dasharray: 2500;
  stroke-dashoffset: 2500;
  animation: dash 2.5s ease-out infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}

.contain > div {
  overflow: hidden;
}

.contain > div > svg {
  display: block;
  animation: fadeIn 500ms ease forwards;
  transform: translateY(100%);
}

.the > svg {
  animation-delay: 1000ms !important;
}

.perfect > svg {
  animation-delay: 1400ms !important;
}

.match > svg {
  animation-delay: 1600ms !important;
}
</style>