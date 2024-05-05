<template>
  <div class="app_field">
    <h3 class="field_label">{{ label }}</h3>
    <textarea v-if="type === 'textarea'" v-model="model" :placeholder="placeholder"></textarea>
    <input v-else :type="type" v-model="model" :placeholder="placeholder" />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string
  type?: string
  placeholder?: string
}>()

const model = defineModel({ type: String })
</script>
<style lang="scss" scoped>
.app_field {
  width: 100%;
  margin-bottom: 32px;

  .field_label {
    font-weight: 500;
    margin-bottom: 8px;
  }

  input {
    height: 42px;
  }

  textarea {
    height: 126px;
  }

  input,
  textarea {
    width: 100%;
    outline: none;
    border: none;
    background-color: rgb(241, 240, 240);
    border-radius: 8px;
    padding: 8px 16px;
  }
}
</style>
