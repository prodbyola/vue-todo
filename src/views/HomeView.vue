<template>
  <div>
    <TodoCard :title="task.title" :details="task.details" :done="task.done" />
  </div>
</template>
<script setup lang="ts">
import TodoCard from '@/components/TodoCard.vue'

const task = {
  title: 'Buy groceries',
  details:
    "I'll be visiting FoodCo this afternoon to stock more Milk, eggs, bread and fruits for this week. Don't forget to get Elubo and Garri😂",
  done: false
}
</script>
