<template>
  <div>
    <label class="fromitem">
      <!-- {{ value }} -->
      <span class="name">{{ this.filedName }}</span>
      <!-- 自带的标签可以通过$event.target获取该值 -->
      <!-- v-model的双向绑定 -->
      <input
        type="text"
        :placeholder="this.placeholder"
        :value="value"
        @input="onValueChanged($event.target.value)"
      />
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  @Prop({ default: "" }) value!: string;
  @Prop({ required: true }) filedName!: string;
  @Prop() placeholder?: string;
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.fromitem {
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