# An Easy and Comprehensive Guide to Vue3

[Vue.js](https://vuejs.org/) is a popular open-source JavaScript framework used for building user interfaces and single-page applications. If you already understood the basics of HTML, CSS and Javascript/Typescript, then using VueJS is going to be all familiar to you. In this tutorial, we'll learn how to build interactive web apps using Vue.

#### Technical Prerequisite

It is required that you have the following tools installed in order to follow this tutorial.

- Latest [VSCode](https://code.visualstudio.com/download) (or an IDE of your choice).
- Latest [NodeJS](https://nodejs.org/en/download).
- Latest [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) (or any other Javascript package manager).

#### Knowledge Prerequisite

A basic understanding of HTML, CSS and Javascript/Typescript is required for this tutorial.

#### Create Vue Project

The first thing we're going to do is create a new Vue project:

- Now open your VSCode, press `Ctrl + J` to open the terminal and type `yarn create vue@latest` into the terminal. Press `Enter` key.
- No answer the prompts as below. Use arrow keys to navigate left/right when selecting your answers:
  [img 1]
- When you're done, type `cd todo && yarn install` to install the project dependencies.
- Now type `yarn add sass` to add support for [SCSS](https://sass-lang.com/).
- Type `code .` to load the project in VSCode. Notice the . after "code".
- Once VSCode opens your new project, press `Ctrl + J` and type `yarn dev`. Your project will be launched on http://localhost:5173/.
- If all went well, then you should see a page like below in your page.
  [img 2]
- Press `Ctrl + C` from the terminal to close your project.

#### Project Structure

Before we go further, let me quckly introduce you to the `src` folder in your project.

- `App.vue` is the base Vue Single File Component(SFC) that holds your project together. Every component (or vue file) is an SFC. We'll talk about SFCs later but keep in mind that a Vue Component is a reusable and self-contained unit of Vue file that encapsulates a piece of UI functionality. For example, to create a custom reusable Button, you may create a simple Vue Component like `AppButton.vue` which will contain all the layout, styling and functionalities of the button.
- The `src/components` folder is where you'll keep your all your small units of UI (components).
- The `src/views` folder is where you'll keep your app pages.
- The `src/router` is where we configure the app navigation i.e, which route leads to which page.
- `src/stores` is where we write app's global states. You'll learn more about this later.
- `src/assets` is where we keep static assets like fonts, css and sometimes, images.

Technically, every box in the image is a vue component or SFC but we generally refer to `Component.vue` boxes as "components". In this structure, `App.vue` is the main app, `HomeView.vue` and `AboutView.vue` are different pages within the app and every `Component.vue` is a vue-styled UI component within each page. This is similar to how [HTML DOM tree](https://javascript.info/dom-nodes) is structured: parents, children, siblings...etc.

[img vuelearn]

#### Prepare to Build

Now let's take some steps to prepare our project for building:

- Go to `src/components` folder and delete all the files and folders inside as we won't be needing them.
- Now go to `src/views` folder and delete `AboutView.vue` file. We won't be needing that as well.
- Our app router (navigator) will try to locate `AboutView.vue` and we get an error because we've deleted the file. To fix this, go to `router/index.ts` and delete the lines as in the red box:
- Now go to `src/views/HomeView.vue` and replace the existing code with this:

```html
<template>
  <div></div>
</template>
```

- Go to `src/App.vue` and replace the existing code with this code:

```html
<template>
  <main>
    <RouterView />
  </main>
</template>
```

- We'll be using Google font [Poppins](https://fonts.google.com/specimen/Poppins) in our app. We can import this font from Google's CDN. Go to `src/assets/main.css` and paste this at the top of the file `@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');`. Then add this CSS code to the file (below all import statements):

```css
body {
  font-family: 'Poppins', sans-serif;
  color: rgb(100, 99, 99);
}
```

Now your project should be empty and you're ready to start building.

#### Create Your First SFC

It's time to create your First UI component an SFC. Vue's Single File Component allows you to define the HTML, CSS and Javascript sections of your UI in just one file. You define the HTML in `template>` tag, CSS in `style` tag and Javascript in `script` tag. Let's see how that works:

- Create a file `src/components/TodoCard.vue`;
- Put this HTML section in the file:

```html
<template>
  <div class="todo_card">
    <h3 class="task_title">Buy groceries</h3>
    <p class="task_details">
      I'll be visiting FoodCo this afternoon to stock more Milk, eggs, bread and fruits for this
      week. Don't forget to get Elubo and Garri😂
    </p>
    <div class="tdc_footer">
      <div class="task_cat"></div>
      <div class="task_done">
        <input type="checkbox" />
        <p>Done</p>
      </div>
    </div>
  </div>
</template>
```

- Now add this CSS section after the `template` tag:

```html
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
```

Notice the `scoped` attribute on the `style` tag? This tells Vue to apply the style to elements ONLY in this particular component. If you want the style to be applied globally, remove the `scoped` attribute. **Save your file**.

Now let's import our component and display it on `HomeView`.

- Go to `src/views/HomeView.vue` and add the typescript section to import `TodoCard.vue`:

```html
<script setup lang="ts">
  import TodoCard from '@/components/TodoCard.vue'
</script>
```

Did you notice the `setup` attribute on the `script` tag? This makes the `script` tag to use Vue's [Composition API](https://vuejs.org/api/composition-api-setup) which we'll use to interact with Vue's reactive APIs. More of this later.

Now use `TodoCard` component in the template of `HomeView`:

```html
<template>
  <div>
    <TodoCard />
  </div>
</template>
```

Save `HomeView` file and run `yarn dev` in the terminal to relaunch your app.
[img 4]

Now we can say `HomeView` is the _parent component_ of `TodoCard` because the former now hosts the latter.

#### Interpolation and Data Binding

It's time to share data between the HTML and Javascript sections of your component. The is known as [data interpolation or data binding](https://medium.com/@shriancodes/understanding-interpolation-and-data-binding-in-vue-js-6a719bdf2ea1). It means you can declare a variable in `script` tag and attach it to an HTML element in `template` tag for display. For example, let's create our task data as Javascript variables and render them in HTML. Go to `src/components/TodoCard.vue` and `script` tag below the `style` tag:

```html
<script setup lang="ts">
  const taskTitle = 'Buy groceries'
  const taskDetails =
    "I'll be visiting FoodCo this afternoon to stock more Milk, eggs, bread and fruits for this week. Don't forget to get Elubo and Garri😂"
</script>
```

Now replace the original data with in HTML with those Javascript variables this way:

```html
<template>
  <div class="todo_card">
    <h3 class="task_title">{{ taskTitle }}</h3>
    <p class="task_details">{{ taskDetails }}</p>
    <div class="tdc_footer">
      <div class="task_cat"></div>
      <div class="task_done">
        <input type="checkbox" />
        <p>Done</p>
      </div>
    </div>
  </div>
</template>
```

Save your file and you'll see your app is working. Notice how we surround the Javascript variable name with double curly brackers `{{  }}` to distinguish from literal HTML content. Of course we can combine this with raw HTML contents:

```html
<h3 class="task_title">Task title is {{ taskTitle }} for this task</h3>
```

We can also bind Javascript variable to HTML attributes. Ok, let's say our `h3` tag has an `id` attribute:

```html
<h3 id="task-title" class="task_title">{{ taskTitle }}</h3>
```

We can pass attribute value from Javascript to this tag using `v-bind` shorthand:

```html
<template>
  ...
  <h3 :id="taskId" class="task_title">{{ taskTitle }}</h3>
  ...
</template>

<script setup lang="ts">
  const taskId = "task-001"
  ...
</script>
```

With this, the `id` attribute of the `h3` tag will now be "task-001". Notice the `:` before the attribute. That's how we tell HTML that we're about to pass Javascript as the attribute's value. This can help us to manipulate HTML contents dynamically as we'll see soon.
