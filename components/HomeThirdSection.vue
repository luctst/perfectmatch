<template>
  <section class="formulasinfos--wrapper">
    <section class="formulasinfos container-fluid">
      <div class="formulasinfos--img">
        <div class="is__container__img formulasinfos--img--container" data-rellax data-rellax-speed="2">
          <img
          :src="content.image.data.attributes.url"
          :alt="content.image.data.attributes.alternativeText"
          />
        </div>
        <div
        v-html="parseMarkdown(content.imageSubtitle)"
        class="formulasinfos--img--content subtitle"></div>
      </div>
      <div class="formulasinfos--content" data-line>
        <p class="title--tag">Mariage</p>
        <h2 v-html="content.title"></h2>
      </div>
    </section>
  </section>
</template>

<script>
import GlobalMixin from '~/mixins/global';

export default {
  name: 'FormulaInfos',
  mixins: [GlobalMixin],
};
</script>

<style lang="scss" scoped>
.is__return__line {
  @media (min-width: 350px) {
    display: none;
  }

  @media (min-width: 550px) {
    display: block;
  }
}

.formulasinfos--wrapper {
  background-color: $colorWhite;
}

.formulasinfos {
  box-sizing: border-box;
  display: flex;
  position: relative;
  z-index: 3;
  padding-bottom: 10px;

  @media (min-width: 350px) {
    flex-direction: column;
    justify-content: space-between;
    padding-top: 80px;

    &--img {
      max-width: 335px;
      margin: 0 auto;
    }

    &--content {
      margin-top: 80px;
    }
  }

  @media (min-width: 662px) {
    &--content {
      h2 {
        margin-right: 13%;
      }
    }
  }

  @media (min-width: 920px) {
    margin-top: 0;
    align-items: flex-end;
    flex-direction: row-reverse;
    padding-top: 0;

    &--img {
      max-width: 324px;
      margin: 0;
    }

    &--content {
      p {
        text-align: left;
        margin-top: 0;
      }

      h2 {
        margin-right: 0;
      }
    }
  }

  @media (min-width: 1000px) {
    &--img {
      transform: translateY(-10%);
    }

    &--content {
      margin-bottom: 5.6%;
    }
  }

  @media (min-width: 1100px) {
    &--content {
      margin-bottom: 3.2%;
    }
  }

  &--img {
    &--container {
      width: inherit;
    }

    &--content {
      text-align: left;
    }
  }

  &--content {
    h2 {
      text-align: left;
    }
  }
}
</style>