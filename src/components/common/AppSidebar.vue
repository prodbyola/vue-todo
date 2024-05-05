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
import { categories } from '@/shared'
import TodoCategory from '../TodoCategory.vue'
</script>
<style>
.app_sidebar {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>
