<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const isActive = ref(false)

const increment = () => {
  count.value++
  isActive.value = true

  setTimeout(() => {
    isActive.value = false
  }, 300)
}
</script>

<template>
  <button @click="increment" :class="'btn btn-outline-success' + (isActive ? ' active' : '')">
    Count is: {{ count }}
  </button>
</template>
