<script setup lang="ts">
import { reactive } from 'vue'

const contact = reactive({
  name: '',
  phone: '',
  email: '',
})

function addContact() {
  console.log(contact)
  contact.name = ''
  contact.phone = ''
  contact.email = ''
}
</script>

<template>
  <div class="container border rounded p-2">
    <div class="text-center text-white">Add New Contact</div>
    <form @submit.prevent="addContact">
      <div class="row">
        <div class="col-4">
          <input v-model="contact.name" placeholder="Enter Name" type="text" class="form-control" />
        </div>
      </div>
    </form>
  </div>
</template>
