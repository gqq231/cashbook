<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money" />
      记账
    </router-link>
    <router-link to="/label" class="item">
      <Icon name="label" />
      标签
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.55);
  > .item {
    padding: 2px 0;
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    .icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>