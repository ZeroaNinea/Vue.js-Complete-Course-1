<script setup lang="ts">
// import { ref } from 'vue'

// const email = ref('hello@dotnetmastery.com')
const props = defineProps({
  name: { type: String, required: true },
  phone: String,
  ownername: String,
  email: { type: String, default: '-n/a-' },
  isFavorite: { type: Boolean, required: false, default: false },
})

const catgirls = [...Array(10)]
catgirls.map(() => console.log('meow'))
</script>

<template>
  <div class="bg-info rounded p-4 m-2 text-white">
    <h3>{{ props.name }}</h3>
    <p>Please send an email to {{ email }}</p>
    <p>Phone: {{ props.phone }}</p>
    <p>Email: {{ email }}</p>
    <p>Favorite: {{ isFavorite ? 'Yes' : 'No' }}</p>
    <p class="float-end small text-secondary" v-if="ownername != ''">
      *this contact info belongs to {{ ownername }}
    </p>
  </div>
</template>
