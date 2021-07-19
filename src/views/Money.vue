<template>
  <div>
    <Layout class-prefix="layout">
      <!-- {{ recordList }} -->
      <number-pad :value.sync="record.amount" @submit="saveRecord" />
      <types :value.sync="record.type" />
      <notes @update:value="onUpdateValues" />
      <tags :data-source.sync="tags" :value.sync="record.tags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Notes from "./Notes.vue";
import NumberPad from "./NumberPad.vue";
import Tags from "./Tags.vue";
import Types from "./Types.vue";
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import model from "./model";

window.localStorage.setItem("version", "1.0.0");

//先声明类型
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createAt?: Date;
};

const recordList: RecordItem[] = model.fetch();

@Component({
  components: { NumberPad, Types, Tags, Notes },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: RecordItem[] = recordList;
  //在赋值
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateValues(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    const record2: RecordItem = model.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }
  @Watch("recordList")
  onRecordListChange() {
    model.Save(this.recordList);
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