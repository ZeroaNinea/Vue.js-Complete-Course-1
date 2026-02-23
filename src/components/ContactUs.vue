<script setup lang="ts">
// import { ref } from 'vue'

// const email = ref('hello@dotnetmastery.com')

import LuckyNumber from './LuckyNumber.vue'

const props = defineProps({
  name: { type: String, required: true },
  phone: String,
  ownername: String,
  email: { type: String, default: '-n/a-' },
  isFavorite: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const catgirls = [...Array(10)]
catgirls.map(() => console.log('meow'))

defineEmits(['toggle-favorite'])
</script>

<template>
  <div class="bg-info rounded p-4 m-2 text-white">
    <h3>{{ props.name }}</h3>
    <p>Please send an email to {{ props.email }}</p>
    <p>Phone: {{ props.phone }}</p>
    <LuckyNumber :maxNumber="10"></LuckyNumber>
    <p>Favorite: {{ props.isFavorite ? 'Yes' : 'No' }}</p>
    <button
      @click="$emit('toggle-favorite', props.isFavorite)"
      :class="[props.isFavorite ? 'btn btn-warning' : 'btn btn-success']"
    >
      {{ props.isFavorite ? 'Remove Favorite' : 'Add Favorite' }}
    </button>

    <p class="float-end small text-secondary" v-if="props.ownername != ''">
      *this contact info belongs to {{ props.ownername }}
    </p>
  </div>
</template>
