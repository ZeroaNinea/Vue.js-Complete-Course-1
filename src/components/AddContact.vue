<script setup lang="ts">
import { reactive } from 'vue'

const contact = reactive({
  name: '',
  phone: '',
  email: '',
})

function addContact() {
  console.log('Adding contact', contact)
  contact.name = ''
  contact.phone = ''
  contact.email = ''
}
</script>

<template>
  <div class="container border rounded p-2">
    <div class="text-center text-primary my-2">Add New Contact</div>
    <form @submit.prevent="addContact">
      <div class="row">
        <div class="col-4">
          <input v-model="contact.name" placeholder="Name" type="text" class="form-control" />
        </div>
        <div class="col-4">
          <input v-model="contact.email" placeholder="Email" type="text" class="form-control" />
        </div>
        <div class="col-4">
          <input v-model="contact.phone" placeholder="phone" type="text" class="form-control" />
        </div>
        <div class="col-4 offset-4 my-2">
          <button type="submit" class="btn btn-secondary w-100">Add Contact</button>
        </div>
      </div>
    </form>
  </div>
</template>
