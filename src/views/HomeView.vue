<template>
  <div class="task_list">
    <TodoCard
      v-for="(task, index) in tasks"
      :key="index"
      :title="task.title"
      :details="task.details"
      :done="task.done"
    />
  </div>
</template>
<script setup lang="ts">
import TodoCard from '@/components/TodoCard.vue'

const tasks = [
  {
    title: 'Buy groceries',
    details:
      "I'll be visiting FoodCo this afternoon to stock more Milk, eggs, bread and fruits for this week. Don't forget to get Elubo and Garri😂",
    done: false
  },
  {
    title: 'Finish homework',
    details: 'Math assignment and essay due tomorrow. I have to complete them tonight.',
    done: true
  },
  {
    title: 'Call mom',
    details: "Wish her a happy birthday and remind her to get dad's pair of glasses.",
    done: false
  }
]
</script>
<style lang="scss" scoped>
.task_list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 16px;
  width: 100%;
}
</style>
