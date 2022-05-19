<template>
  <section class="accord--wrapper">
    <section class="accord container-fluid">
      <div class="accord--picture">
        <div class="is__container__img">
          <img
          :src="content.image.data.attributes.url"
          :alt="content.image.data.attributes.alternativeText"/>
        </div>
      </div>
      <div class="accord--content">
        <div class="title--tag">{{ content.little_title }}</div>
        <h2 v-html="content.first_big_title"></h2>
        <h2 v-html="content.second_big_title"></h2>
        <p class="subtitle">{{ content.subtitle }}</p>
      </div>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Accord',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.accord--wrapper {
  background-color: $colorWhite;
}

.accord {
  display: flex;
  position: relative;
  z-index: 3;

  @media (min-width: 350px) {
    flex-direction: column;
    padding-top: 80px;
  }

  @media (min-width: 920px) {
    flex-direction: row;
    align-items: center;
    padding-top: 180px;
    padding-bottom: 180px;
  }

  &--picture {
    @media (min-width: 400px) {
      div {
        max-width: 350px;
      }

      margin: 0 auto;
    }

    @media (min-width: 920px) {
      div {
        max-width: none;
      }
    }
  }

  &--content {
    div {
      margin-bottom: 15px;
    }

    p {
      @media (min-width: 350px) {
        margin-top: 25px;
      }

      @media (min-width: 550px) {
        margin-left: 12%;
        margin-right: 12%;
      }

      @media (min-width: 920px) {
        text-align: left;
        margin-left: 0;
        margin-top: 40px;
      }
    }

    @media (min-width: 350px) {
      margin-top: 50px;
      margin-bottom: 80px;
      text-align: center;
    }

    @media (min-width: 920px) {
      text-align: left;
      margin-left: 6%;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}
</style>