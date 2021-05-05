<template>
  <div>
    <div>当前页面不存在，请检查网址是否正确</div>
    <div>
      <router-link to="/" id="back">返回首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "nofound",
};
</script>

<style lang="scss" scoped>
#back {
  box-sizing: border-box;
  border: 1px solid red;
  text-decoration: none;
  color: red;
}
</style>