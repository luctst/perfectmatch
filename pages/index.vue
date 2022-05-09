<template>
<section class="home">
  <header-vue></header-vue>
  <home-float-line :content="content.floatline"></home-float-line>
  <home-first-section :content="content.section1"></home-first-section>
  <home-second-section :content="{}"></home-second-section>
  <home-third-section :content="{}"></home-third-section>
  <offers :content="{}"></offers>
  <events :content="{}"></events>
  <articles :content="{}"></articles>
  <footer-vue :content="{}"></footer-vue>
</section>
</template>

<script>
export default {
  layout: 'default',
  props: {
    content: {
      type: [Boolean, Object],
      required: true,
    },
    baseApiUrl: {
      type: String,
      required: true,
    },
  },
}
</script>
