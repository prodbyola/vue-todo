#### Layout

In the [first part](https://dev.to/prodbyola/an-easy-comprehensive-and-practical-guide-to-vue3-49h6) of this tutorial, our `App.vue` contains a `RouterView` component. We need to build a layout around this view. Layout components are components shared across multiple pages in our app.

###### App Header

First let's create an `AppHeader` component.

- Create a folder `src/components/common` and component `src/components/common/AppHeader.vue`.
- Add this code to `AppHeader.vue` file:

```html
<template>
  <header>
    <h3 class="app_title">todo</h3>
    <div class="add_icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
      </svg>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  $add_icon_size: 38px;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .app_title {
      font-weight: bold;
      font-size: 1.64rem;
    }

    .add_icon {
      svg {
        height: $add_icon_size;
        width: $add_icon_size;
        fill: rgb(100, 99, 99);
      }
    }

    .add_icon,
    .app_title {
      cursor: pointer;
    }
  }
</style>
```

- Now import and use `AppHeader` component in `App.vue`:

```html
<template>
  <AppHeader />
  <RouterView />
</template>
<script setup lang="ts">
  import AppHeader from './components/common/AppHeader.vue'
</script>
```

###### App Sidebar
