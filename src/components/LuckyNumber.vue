<script setup lang="ts">
import { ref } from 'vue'

const luckyNumber = ref(0)

const props = defineProps({
  maxNumber: { type: Number, default: 100 },
})

function generateLuckyNumber() {
  luckyNumber.value = Math.floor(Math.random() * props.maxNumber)
}
</script>

<template>
  <div class="float-end">
    <h3>Your Lucky Number: {{ luckyNumber }}</h3>
    <button class="btn btn-outline-danger" @click="generateLuckyNumber">Lucky Number</button>
  </div>
</template>
