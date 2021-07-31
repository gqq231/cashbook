<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit("fetchTagList");
  }
  //控制标签的点击变化
  toggle(tag: string) {
    //检查是否存在
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
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