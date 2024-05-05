<template>
  <h3>Create Task Page</h3>
  <p>My state {{ count }}.</p>
  <button @click="increment">Increment</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let count = ref(0)
const increment = () => {
  count.value++
  console.log(count)
}
</script>
