<script setup lang="ts">
import { reactive, ref, provide } from 'vue'
import ContactUs from './components/ContactUs.vue'
import AddContact from './components/AddContact.vue'

const message = 'Hello World!'
const ownername = ref('dotnetmastery')
const maxNumber = ref(100)

provide('maxLuckyNumber', maxNumber)

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

function onAddContact(contact: {
  name: string
  phone: string
  email: string
  isFavorite: boolean
  ownername: string
}) {
  contact.isFavorite = false
  contact.ownername = ownername.value
  contacts.push(contact)
}
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
    <AddContact @add-contact="onAddContact"></AddContact>
    <!-- <ContactUs name="Bhrugen" phone="123123123" ownername="dotnetmastery"></ContactUs> -->
    <ContactUs
      v-for="contact in contacts"
      :key="contact.name"
      v-bind="contact"
      @toggle-favorite="contact.isFavorite = !contact.isFavorite"
    ></ContactUs>
    <button-counter></button-counter>
  </div>
</template>

<style scoped></style>
