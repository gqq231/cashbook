<template>
  <Layout>
    <div class="navBar">
      <icon name="left" class="leftIcon" @click.native="goBack" />
      <span>编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="from-wrapper">
      <Fromitem
        :value="tag.name"
        @update:value="update"
        filedName="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click.native="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Fromitem from "@/components/money/Fromitem.vue";
import { Component, Prop } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";

@Component({
  components: { Fromitem, Layout },
})
export default class EditLabel extends Vue {
  get tag() {
    return this.$store.state.currentTag;
  }
  //钩子函数
  created() {
    //首先获取到此时路径的id
    const id = this.$route.params.id;
    this.$store.commit("fetchTags");
    this.$store.commit("setCurrentTag", id);
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  update(name: string) {
    if (this.tag) {
      this.$store.commit("updateTag", { id: this.tag.id, name });
    }
  }
  remove() {
    if (this.tag) {
      this.$store.commit("removeTag", this.tag.id);
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
.from-wrapper {
  background: white;
  margin-top: 8px;
}
</style>