<script setup lang="ts">
import { ref } from 'vue'

const email = ref('hello@dotnetmastery.com')
const props = defineProps(['isSilly'])
</script>

<template>
  <div class="bg-info rounded p-4 m-2">
    <h1>Contact Us</h1>
    <p>Please send an email to {{ email }}</p>
    <p>Is silly: {{ props.isSilly }}</p>
  </div>
</template>
