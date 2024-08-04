<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in tabs">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import {Ref, ref, watch} from "vue";
import { ArrowRight } from '@element-plus/icons-vue'
import { RouteLocationMatched, useRoute } from "vue-router";

const route = useRoute();
const tabs: Ref<RouteLocationMatched[]> = ref([])
const getBreadCrumb = () => {
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  const first = matched[0]
  if (first.path != '/dashboard') {
    matched = [{path:'/dashboard',meta:{title:'Dashboard'}} as any].concat(matched)
  }
  tabs.value = matched
}
getBreadCrumb()

watch(
    () => route.path,
    () => getBreadCrumb()
)
</script>

<style lang="scss" scoped>
</style>
