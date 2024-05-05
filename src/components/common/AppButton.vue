<template>
  <button>
    {{ text }}
  </button>
</template>
<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
<style lang="scss" scoped>
button {
  border: none;
  outline: none;
  color: white;
  background-color: rgb(100, 99, 99);
  height: 42px;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
}
</style>
