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
