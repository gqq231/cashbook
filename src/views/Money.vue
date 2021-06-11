<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad />
      <types :propA="333" />
      <notes />
      <tags />
    </Layout>
  </div>
</template>

<script lang="ts">
import Notes from "./Notes.vue";
import NumberPad from "./NumberPad.vue";
import Tags from "./Tags.vue";
import Types from "./Types.vue";
export default {
  name: "money",
  components: { NumberPad, Types, Tags, Notes },
};
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