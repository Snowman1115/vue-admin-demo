<template>
  <div class="header">
    <Collapse/>
    <Breadcrumb/>
  </div>
</template>

<script setup lang="ts">
import Collapse from "@/layout/header/Collapse.vue";
import Breadcrumb from "@/layout/header/Breadcrumb.vue";

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  .el-icon {
    margin-right: 14px;
  }
}
</style>
