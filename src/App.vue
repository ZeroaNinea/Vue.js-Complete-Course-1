<script setup lang="ts">
import ContactUs from './components/ContactUs.vue'

const message = 'Hello World!'
</script>

<template>
  <div class="container">
    <h1>You did it!</h1>
    <h2>{{ message }}</h2>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
    <ContactUs name="Bhrugen" phone="123123123" ownername="dotnetmastery"></ContactUs>
    <button-counter></button-counter>
  </div>
</template>

<style scoped></style>
