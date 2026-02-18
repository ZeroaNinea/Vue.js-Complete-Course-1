<script setup lang="ts">
import ContactUs from './components/ContactUs.vue'

const message = 'Hello World!'
</script>

<template>
  <h1>You did it!</h1>
  <h2>{{ message }}</h2>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <ContactUs></ContactUs>
  <button-counter></button-counter>
</template>

<style scoped></style>
