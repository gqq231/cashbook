<template>
  <div>
    <Layout class-prefix="layout">
      <!-- {{ recordList }} -->
      <number-pad :value.sync="record.amount" @submit="saveRecord" />
      <Tabs :dataSource="tagList" :value.sync="record.type" />
      <notes
        @update:value="onUpdateValues"
        filedName="备注"
        placeholder="请输入备注信息"
      />
      <tags />
    </Layout>
  </div>
</template>

<script lang="ts">
import Notes from "@/components/money/Fromitem.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Tabs from "@/components/Tabs.vue";
import Tags from "@/components/money/Tags.vue";
import tapList from "@/constant/tapList";
import Vue from "vue";
import { Component } from "vue-property-decorator";

window.localStorage.setItem("version", "1.0.0");

//先声明类型
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createAt?: Date;
};

@Component({
  components: { NumberPad, Tags, Tabs, Notes },
  computed: {
    recordList() {
      return this.$store.state.recordList;
    },
  },
})
export default class Money extends Vue {
  tagList = tapList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  created() {
    this.$store.commit("fetchRecordList");
  }
  onUpdateValues(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>