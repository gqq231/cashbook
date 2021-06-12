<template>
  <div>
    <label class="notes">
      <!-- {{ value }} -->
      <span class="name">备注</span>
      <!-- 自带的标签可以通过$event.target获取该值 -->
      <input type="text" placeholder="请在这里输入备注" v-model="value" />
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  value = "";
  // onInput(event: KeyboardEvent) {
  //   const input = event.target as HTMLInputElement;
  //   this.value = input.value;
  // }
}
</script>

<style lang="scss" scoped>
.notes {
  background: #f5f5f5;
  display: flex;
  font-size: 14px;
  padding-left: 16px;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 60px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>