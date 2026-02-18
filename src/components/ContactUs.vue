<script setup lang="ts">
import { ref } from 'vue'

const email = ref('hello@dotnetmastery.com')
</script>

<template>
  <div>
    <h1>Contact Us</h1>
    <p>Please send an email to {{ email }}</p>
  </div>
</template>
