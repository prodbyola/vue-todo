<template>
  <div class="create_task">
    <div class="create_task__form">
      <h2 class="form_title">Create New Task</h2>
      <InputField label="Title" v-model="newTask.title" placeholder="add a title..." />
      <InputField
        label="Description"
        v-model="newTask.description"
        placeholder="add a description..."
        type="textarea"
      />
      <div class="tag_list">
        <TodoCategory
          v-for="(cat, index) in categories"
          :key="index"
          :title="cat.title"
          :color="cat.color"
          class="task_tag"
          :class="{
            active: newTask.tags.includes(cat.title)
          }"
          @click="() => toggleTag(cat.title)"
        />
      </div>
      <AppButton @click="addTask" class="action_btn" text="Add Task" />
      <!-- <div class="action"></div> -->

      <div v-if="tasks.length" class="task_list">
        <div v-for="(task, index) in tasks" :key="index" class="task_card">
          <p>{{ task.title }}</p>
          <p @click="deleteTask(index)" class="del">Delete</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { TaskType } from '@/shared'
import { categories } from '@/shared'

import InputField from '@/components/common/InputField.vue'
import TodoCategory from '@/components/TodoCategory.vue'
import AppButton from '@/components/common/AppButton.vue'

const defaultTask: TaskType = {
  title: '',
  description: '',
  done: false,
  tags: []
}

let newTask = reactive(structuredClone(defaultTask))

const tasks = reactive<TaskType[]>([])

const isEmpty = (v: string) => v.length === 0

const addTask = () => {
  // validate input
  if (isEmpty(newTask.title) || isEmpty(newTask.description)) {
    return
  }

  tasks.splice(0, 0, newTask)
  newTask = reactive(structuredClone(defaultTask))
}

const deleteTask = (i: number) => tasks.splice(i, 1)

const toggleTag = (tag: string) => {
  const f = newTask.tags.find((t) => tag === t)
  if (f) {
    const i = newTask.tags.indexOf(f)
    newTask.tags.splice(i, 1)
  } else {
    newTask.tags.push(tag)
  }
}
</script>
<style lang="scss" scoped>
.create_task {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .create_task__form {
    width: 50%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    max-width: 440px;

    .form_title {
      font-weight: bold;
    }

    .tag_list {
      display: inline-flex;
      column-gap: 24px;

      .task_tag {
        padding: 4px 8px;
      }

      .task_tag.active {
        background-color: rgb(218, 218, 218);
        border-radius: 4px;
      }
    }

    .action_btn {
      margin-top: 36px;
      float: right;
      width: 180px;
    }

    .task_list {
      width: 100%;
      margin-top: 32px;

      .task_card {
        display: inline-flex;
        width: 100%;
        padding: 16px 12px;
        border-bottom: 1px solid rgb(201, 201, 201);
        justify-content: space-between;
        align-items: center;

        .del {
          color: red;
          font-size: 0.86rem;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
