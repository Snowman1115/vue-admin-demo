<template>
  <el-tabs
      v-model="activeTab"
      type="card"
      class="demo-tabs"
      closable
      @tab-remove="removeTab"
      @tab-click="clickBtn"
  >
    <el-tab-pane
        v-for="item in tabsList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref, watch} from 'vue'
import { tabStore } from "@/store/tabs";
import { useRoute, useRouter } from "vue-router";
import { Tab } from "@/store/tabs";
import {TabsPaneContext} from "element-plus";

const store = tabStore()
const route = useRoute()
const router = useRouter()

const activeTab = ref('')
const tabsList = computed(() => {
  return store.getTab
})

const clickBtn = (pane: TabsPaneContext) => {
  const { props } = pane
  router.push({path:props.name as string})
}

const addTab = () => {
  const { path, meta } = route
  const tab: Tab = {
    path: path,
    title: meta.title as string
  }
  store.addTab(tab)
}

const removeTab = (targetName: string) => {
  const tabs = tabsList.value
  let activeName = activeTab.value
  if (activeName === targetName) {
    tabs.forEach((tab: Tab, index: number) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
  }
  activeTab.value = activeName
  store.tabList = tabs.filter((tab) => tab.path !== targetName)
  router.push({path:activeName})
}

watch(
    () => route.path,
    () => {
      setActiveTab(),
      addTab()
    }
)

const setActiveTab = () => {
  activeTab.value = route.path
}

onMounted(() => {
  setActiveTab()
  addTab()
})
</script>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
