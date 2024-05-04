<template>
  <AppHeader />
  <main class="app_main">
    <AppSidebar class="app_sidebar" />
    <div class="app_content">
      <RouterView />
    </div>
  </main>
</template>
<script setup lang="ts">
import AppHeader from './components/common/AppHeader.vue'
import AppSidebar from './components/common/AppSidebar.vue'
</script>
<style lang="scss" scoped>
.app_main {
  display: flex;

  .app_sidebar {
    width: 20%;
  }

  .app_content {
    flex: 1;
  }
}
</style>
