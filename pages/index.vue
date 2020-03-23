<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        TreeDoctor
      </h1>
      <h2 class="subtitle">
        TreeDoctor Webiste Description
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head () {
    return {
      htmlAttrs: {
        class: 'htmlAttrs'
      },
      bodyAttrs: {
        class: 'bodyAttrs'
      }
    }
  }
}
</script>
