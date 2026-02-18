<script setup lang="ts">
import { ref } from 'vue'

const email = ref('hello@dotnetmastery.com')
</script>

<template>
  <div class="bg-info rounded p-4 m-2">
    <h1>Contact Us</h1>
    <p>Please send an email to {{ email }}</p>
  </div>
</template>
