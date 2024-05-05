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

[img 1]

###### App Sidebar

It's time to add Sidebar to our app layout. The sidebar will display a list of available categories for our tasks. So let's create a `TodoCategory` component:

- Create `src/components/TodoCategory.vue` and add the following code:

```html
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
```

Notice how we pass data from our component's props to our CSS section using `v-bind`? This is an interesting vue feature. You can directly pass data from Javascript to CSS without losing the naturality of your component structure!

- Create the sidebar component in `src/components/common/AppSidebar.vue` and add this code:

```html
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
  import TodoCategory from '../TodoCategory.vue'

  const categories = [
    { title: 'work', color: 'rgba(137, 43, 226, 0.308)' },
    { title: 'study', color: 'rgb(117, 242, 250)' },
    { title: 'entertainment', color: 'rgb(247, 147, 148)' },
    { title: 'family', color: 'rgb(184, 255, 179)' }
  ]
</script>

<style>
  .app_sidebar {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
</style>
```

With this code, we create a list of categories and iteratively display them using `TodoCategory` component.

- Now let's update our `App.vue` component to adjust our layout and import `AppSidebar`:

```html
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
```

[img 2]

Our dynamic page contents will be handled and displayed by `RouterView` while `AppHeader` and `AppSidebar` will remain static throughout the app. Let's proceed to the next section to see how this works.

#### Navigation

VueJs use [vue-router](https://router.vuejs.org/) to manage navigation within our apps. Let's create another page and programatically navigate between two pages.

- Create a new file component we'll use for adding new tasks `src/views/CreateTaskView.vue` and add the following code. We'll update the code later but let's take this as a new page.

```html
<template>
  <h3>Create Task Page</h3>
  <p>This page will be used to create new tasks.</p>
</template>
```

- Now update your `src/router/index.ts` file to import `CreateTaskView` and map it to a router path:

```ts
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateTaskView from '@/views/CreateTaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-task',
      name: 'create-task',
      component: CreateTaskView
    }
  ]
})

export default router
```

- Now go to `src/components/common/AppHeader`, create a `script` section and update your `template` code:

```html
<template>
  <header>
    <h3 @click="goToRoute('home')" class="app_title">todo</h3>
    <div @click="goToRoute('create-task')" class="add_icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
      </svg>
    </div>
  </header>
</template>

<script setup lang="ts">
  import router from '@/router'

  const goToRoute = (name: string) => router.push({ name })
</script>
```

Firstly, in the `script` tag, we created a new function `goToRoute` that accepts the destination route's name as parameter. If you go back and check `src/router/index.ts`, you would notice we have a `name` property on each defined route. You can pass a name as part of the options for `router.push()` and vue will take you to the destination.  
Secondly, we added [Click Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) to both `app_title` and `add_icon` elements which respectively call `goToRoute` and supply the destination route names.  
Now save your project, click on `add_icon` and you'll see this takes you to `CreateTaskView`. Click on `app_title` and it will take you back to the `HomeView`.

[img 3]

#### Local State Management

Before we build out the form for creating a new task, let's do a quick introduction to state management in VueJs. Think of a `state` as a piece of data which when updated, its changes is reflected in the UI.

###### Ref API

As an example, let's update our `CreateTaskView` with this code:

```html
<template>
  <h3>Create Task Page</h3>
  <p>My state {{ count }}.</p>
  <button @click="increment">Increment</button>
</template>

<script setup lang="ts">
  let count = 0
  const increment = () => {
    counter++
    console.log(counter)
  }
</script>
```

We create a variable `count` and function `increment` for incrementing `count` variable. We also log the current value of `count`. In the template, we display the value of `count` and add a `button` which calls `increment` everytime it's clicked.  
Navigate to http://localhost:5173/create-task (if you're not there already) and click on the `Increment` button. Nothing seems to be happening right? If you open your browser's inspection tool and check the console tab however, you'll notice the value of `count` is continuously updated as you click on the button. The changes is not reflected on the UI because you didn't "mark" the count value as a `state`.

Now let's update the `script` section of our code:

```html
<script setup lang="ts">
  import { ref } from 'vue'

  let count = ref(0)
  const increment = () => {
    count.value++
    console.log(count)
  }
</script>
```

Now we wrapped the value of count in vue's `ref` function. This marks `count` as a state whose changes should reflect on the UI. To access the actual value of `count` **within our Javascript code**, we need to get the `value` property this way `count.value`. This is because `ref(data)` returns a `Ref<T>` object where `T` is the type of `data`. To access or update the actual data value, you need to get the `value` property. Now click the `Increment` button again and you'll see your changes reflecting.  
**Notice that calling the `value` property is not required within the template**.
