<script setup lang="ts"></script>

<script lang="ts">
export default {
  setup() {
    const message = 'Hello World!'

    return {
      message,
    }
  },
}
</script>

<template>
  <h1>You did it!</h1>
  <h2>{{ message }}</h2>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
