<template>
  <div class="nav-wrapper">
    <div class="content">
      <!-- vue提供了slot来接收需要插入在这个组件的内容 -->
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout",
};
</script>


<style lang="scss" scoped>
// scoped 解决为你需要添加样式的标签添加一个唯一属性 保证class不会重复
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
  height: 100vh;
}
</style>