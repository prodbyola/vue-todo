<template>
  <div class="todo_card">
    <h3 class="task_title">{{ title }}</h3>
    <p class="task_details">{{ details }}</p>
    <div class="tdc_footer">
      <div class="task_cat"></div>
      <div class="task_done">
        <input type="checkbox" :checked="done" />
        <p>Done</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.todo_card {
  width: 370px;
  font-size: 0.92rem;
  background-color: rgba(255, 255, 0, 0.289);
  padding: 18px 28px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  .task_title {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .task_details {
    margin: 8px auto 24px auto;
    height: 70px;
  }

  .tdc_footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .task_cat {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(137, 43, 226, 0.308);
    }

    .task_done {
      display: inline-flex;
      align-items: center;
      column-gap: 8px;
      cursor: pointer;
    }
  }
}
</style>
<script setup lang="ts">
defineProps<{
  title: string
  details: string
  done: boolean
}>()
</script>
