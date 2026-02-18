<script setup lang="ts"></script>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('hello@dotnetmastery.com')

    return {
      email,
    }
  },
}
</script>

<template>
  <div>
    <h1>Contact Us</h1>
    <p>Please send an email to {{ email }}</p>
  </div>
</template>
