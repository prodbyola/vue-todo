<template>
  <div class="app_category">
    <div class="cat_color"></div>
    <p class="cat_title" v-if="title">{{ title }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
  color: string
}>()
</script>

<style lang="scss" scoped>
.app_category {
  display: flex;
  column-gap: 16px;
  align-items: center;
  cursor: pointer;

  .cat_color {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: v-bind('color');
  }

  .cat_title {
    font-size: 0.86rem;
  }
}
</style>
