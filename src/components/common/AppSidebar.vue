<template>
  <div class="app_sidebar">
    <TodoCategory
      v-for="(cat, index) in categories"
      :key="index"
      :color="cat.color"
      :title="cat.title"
    />
  </div>
</template>
<script setup lang="ts">
import TodoCategory from '../TodoCategory.vue'

const categories = [
  { title: 'work', color: 'rgba(137, 43, 226, 0.308)' },
  { title: 'study', color: 'rgb(117, 242, 250)' },
  { title: 'entertainment', color: 'rgb(247, 147, 148)' },
  { title: 'family', color: 'rgb(184, 255, 179)' }
]
</script>
<style>
.app_sidebar {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>
