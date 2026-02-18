<script setup lang="ts">
import { ref } from 'vue'

const email = ref('hello@dotnetmastery.com')
const props = defineProps(['name', 'phone', 'ownername'])
</script>

<template>
  <div class="bg-info rounded p-4 m-2 text-white">
    <h3>{{ props.name }}</h3>
    <p>Please send an email to {{ email }}</p>
    <p>Phone: {{ props.phone }}</p>
    <p class="float-end small text-secondary" v-if="ownername != ''">
      *this contact info belongs to {{ ownername }}
    </p>
  </div>
</template>
