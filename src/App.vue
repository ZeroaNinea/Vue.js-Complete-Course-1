<script setup lang="ts">
import { reactive, ref } from 'vue'
import ContactUs from './components/ContactUs.vue'

const message = 'Hello World!'
const ownername = ref('dotnetmastery')
const contacts = reactive([
  {
    name: 'Bhrugen',
    phone: '123123123',
    ownername,
    isFavorite: true,
  },
  {
    name: 'Bella',
    phone: '6436576768',
    ownername,
    isFavorite: false,
  },
  {
    name: 'Lily',
    phone: '123123123',
    ownername,
    isFavorite: true,
  },
  {
    name: 'Chloe',
    phone: '123123123',
    ownername,
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
    <p>Contact Owner Name:</p>
    <input v-model="ownername" />
    <!-- <ContactUs name="Bhrugen" phone="123123123" ownername="dotnetmastery"></ContactUs> -->
    <ContactUs v-for="contact in contacts" :key="contact.name" v-bind="contact"></ContactUs>
    <button-counter></button-counter>
  </div>
</template>

<style scoped></style>
