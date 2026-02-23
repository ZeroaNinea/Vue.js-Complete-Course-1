<script setup lang="ts">
import { ref, inject } from 'vue'

const luckyNumber = ref(0)

// const props = defineProps({
//   maxNumber: { type: Number, default: 10 },
// })

const maxNumber: { value: number } | undefined = inject('maxLuckyNumber')

function generateLuckyNumber() {
  luckyNumber.value = Math.floor(Math.random() * (maxNumber?.value ?? 10))
}
</script>

<template>
  <div class="float-end">
    <h3>Your Lucky Number: {{ luckyNumber }}</h3>
    <button class="btn btn-outline-danger" @click="generateLuckyNumber">Lucky Number</button>
  </div>
</template>
