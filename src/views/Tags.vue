<template>
  <div class="tags">
    <div class="new">
      <button @click="newTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in dataSource"
        :key="tag"
        :class="{ selected: selectedTages.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined;
  @Prop() readonly value!: string[];
  selectedTages: string[] = this.value;
  //控制标签的点击变化
  toggle(tag: string) {
    //检查是否存在
    const index = this.selectedTages.indexOf(tag);
    if (index >= 0) {
      this.selectedTages.splice(index, 1);
    } else {
      this.selectedTages.push(tag);
    }
    this.$emit("update:value", this.selectedTages);
  }
  // 创建新标签
  newTag() {
    const tagName = window.prompt("请输入标签名");
    if (tagName === null) {
      return;
    }
    if (tagName === "") {
      window.alert("标签名不能为空");
    } else {
      if (this.dataSource) {
        this.$emit("update:dataSource", [...this.dataSource, tagName]);
        this.$emit("update:value", [...this.dataSource, tagName]);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  font-size: 14px;
  padding: 16px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 6px;
      margin-top: 4px;
      line-height: $h;
      &.selected {
        background: darken($color: $bg, $amount: 50%);
      }
    }
  }
  > .new {
    padding-top: 16px;
    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>