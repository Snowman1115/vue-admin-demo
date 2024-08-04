<template>
  <div class="logo">
    <img :src="MenuLogo">
    <span v-if="show" class="logo-title">{{ title }}</span>
  </div>
</template>

<script lang="ts" setup>
import MenuLogo from '@/assets/logo.png';
import { watch, ref } from 'vue';
import { menuStore } from "@/store/menu";

const title = ref("BMS System")

const store = menuStore()
// const show = computed(() => {
//  return !store.getCollapse
//})
const show = ref(true)
watch(
    () => store.getCollapse,
    (collapse: boolean) => {
      if (!collapse) {
        setTimeout(() => { show.value = !collapse },300)
      } else {
        show.value = !collapse
      }
    }
)

</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #eee;
  cursor: pointer;
  text-align: center;

  img {
    width: 25px;
    height: 25px;
  }

  .logo-title {
    color: black;
    font-weight: 700;
    font-size: 20px;
    margin-left: 10px;
  }
}

</style>
