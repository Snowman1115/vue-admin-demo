<template>
  <el-container class="layout">
    <el-aside width="auto" class="aside"><MenuBar/></el-aside>
    <el-container>
      <el-header class="header"><Header/></el-header>
      <el-main class="main">
        <Tabs/>
        <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import MenuBar from '@/layout/menu/MenuBar.vue';
import Header from '@/layout/header/Header.vue'
import Tabs from "@/layout/tabs/Tabs.vue";
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  .aside {
    background-color: #eee;
  }
  .header {
    background: #50c8ca;
    display: flex;
    align-items: center;
  }
  .main {
    background: #dce1dc;
  }
}
</style>
