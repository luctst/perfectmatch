<template>
  <section class="certif--wrapper">
    <section class="certif container-fluid">
      <div class="certif--title" data-line>
        <div class="title--tag">{{ content.littleTitle }}</div>
        <h2 v-html="content.mainTitle"></h2>
      </div>
      <div class="certif--content">
        <div class="is__container__img">
          <img
          :src="content.image_certification.data.attributes.url"
          :alt="content.image_certification.data.attributes.alternativeText"/>
        </div>
        <p v-html="parseMarkdown(content.first_subtitle)" class="subtitle2"></p>
        <p v-html="parseMarkdown(content.second_subtitle)" class="subtitle2"></p>
      </div>
    </section>
  </section>
</template>

<script>
import globalMixin from '~/mixins/global';

export default {
  name: 'Certif',
  mixins: [globalMixin],
};
</script>

<style lang="scss" scoped>
.certif--wrapper {
  background-color: $colorWhite;
}

.certif {
  color: $textColor;
  position: relative;
  z-index: 3;

  &--title {
    @media (min-width: 350px) {
      text-align: center;
    }

    @media (min-width: 920px) {
      text-align: left;
    }

    div {
      margin-bottom: 15px;
    }
  }

  &--content {
    @media (min-width: 350px) {
      margin-top: 30px;
      padding-bottom: 70px;

      div {
        margin-bottom: 25px;

        img {
          object-fit: fill;
        }
      }

      p {
        margin: 0;
      }
    }

    @media (min-width: 450px) {
      div {
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
      }

      p {
        text-align: center;
        margin: 0 6%;
      }
    }

    @media (min-width: 920px) {
      display: flex;
      margin-top: 60px;
      padding-bottom: 180px;
      max-width: 80vw;

      div {
        flex: 0 0 30%;
        margin-bottom: 0;
        max-width: none;

        img {
          height: auto;
        }
      }

      p {
        text-align: left;
        margin-left: 0;
        margin-right: 0;
      }

      p:first-of-type {
        margin: 0 40px;
      }
    }

    @media (min-width: 1600px) {
      max-width: 65vw;
    }
  }
}
</style>