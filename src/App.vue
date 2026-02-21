<script setup lang="ts">
import { reactive } from 'vue'
import ContactUs from './components/ContactUs.vue'

const message = 'Hello World!'
const contacts = reactive([
  {
    name: 'Bhrugen',
    phone: '123123123',
    ownername: 'dotnetmastery',
    isFavorite: true,
  },
  {
    name: 'Bella',
    phone: '6436576768',
    ownername: 'dotnetmastery',
    isFavorite: false,
  },
  {
    name: 'Lily',
    phone: '123123123',
    ownername: 'dotnetmastery',
    isFavorite: true,
  },
  {
    name: 'Chloe',
    phone: '123123123',
    ownername: 'dotnetmastery',
    isFavorite: false,
  },
])
</script>

<template>
  <div class="container">
    <h1>You did it!</h1>
    <h2>{{ message }}</h2>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
    <!-- <ContactUs name="Bhrugen" phone="123123123" ownername="dotnetmastery"></ContactUs> -->
    <ContactUs v-for="contact in contacts" :key="contact.name" v-bind="contact"></ContactUs>
    <button-counter></button-counter>
  </div>
</template>

<style scoped></style>
