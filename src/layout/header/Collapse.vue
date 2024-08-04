<template>
  <el-icon color="#fff" class="no-inherit" size="30px" style="cursor: pointer" @click="setCollapse">
    <component :is="status ? Fold : Expand"></component>
  </el-icon>

</template>

<script lang="ts" setup>
import {computed} from "vue";
import { menuStore } from "@/store/menu";
import { Fold, Expand } from '@element-plus/icons-vue/global'

const store = menuStore();

const status = computed(() => {
  return !store.getCollapse
});

const setCollapse = () => {
  store.setCollapse(!store.getCollapse);
}

</script>

<style lang="scss" scoped>

</style>

