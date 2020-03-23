<template>
  <div class="container">
    <h1>Определител: {{ name }}</h1>
    <hr>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  asyncData () {
    return new Promise((resolve) => {
      resolve({ name: 'Parent' })
    })
  }
}
</script>

<style scoped>
  h1{display: block}
</style>
