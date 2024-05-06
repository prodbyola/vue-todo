<template>
  <div class="app_sidebar">
    <TodoCategory v-for="(tag, index) in tags" :key="index" :color="tag.color" :title="tag.title" />
  </div>
</template>
<script setup lang="ts">
import { tags } from '@/shared'
import TodoCategory from '../TodoCategory.vue'
</script>
<style>
.app_sidebar {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>
