<template>
  <MenuLogo/>
  <el-menu :default-active="defaultActive"
           class="el-menu-vertical-demo"
           unique-opened background-color="#eee"
           :collapse="isCollapse"
           @open="handleOpen"
           @close="handleClose"
           router
  >
    <MenuItem :menuList = "menuList" />
  </el-menu>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";

import MenuLogo from "@/layout/menu/MenuLogo.vue";
import MenuItem from "@/layout/menu/MenuItem.vue";
import { useRoute } from "vue-router";

import { menuStore } from '@/store/menu/index'
import Layout from "@/layout/Index.vue";


const route = useRoute();
const defaultActive = computed(()=> {
  const { path } = route;
  console.log("path ====>" + path);
  return path;
})


const store = menuStore();
// const isCollapse = ref(false);
const isCollapse = computed(()=> {
  return store.getCollapse
})

const handleOpen = (key : string, keyPath: string[]) => {
  console.log(key, keyPath);
}
const handleClose = (key : string, keyPath: string[]) => {
  console.log(key, keyPath);
}

interface MenuMeta {
  title: string;
  icon: string;
  roles: string[];
}

interface Children {
  path: string;
  name: string;
  component: string;
  meta: MenuMeta;
}

interface MenuList {
  path: string;
  name: string;
  component: string;
  meta: MenuMeta;
  children?: Children[];
}

let menuList = reactive<MenuList[]>([
  {
    path: "/system",
    name: "System",
    component: "Layout",
    meta: {
      title: "System Management",
      icon: "Setting",
      roles: ["system:manager"]
    },
    children: [
      {
        path: "/userList",
        name: "UserList",
        component: "/system/user/UserList",
        meta: {
          title: "User Management",
          icon: "User",
          roles: ["system:user"]
        }
      },
      {
        path: "/roleList",
        name: "RoleList",
        component: "/system/role/RoleList",
        meta: {
          title: "Role Management",
          icon: "Avatar",
          roles: ["system:role"]
        }
      },
      {
        path: "/menuList",
        name: "MenuList",
        component: "/system/menu/MenuList",
        meta: {
          title: "Menu Management",
          icon: "Menu",
          roles: ["system:menu"]
        }
      }
    ]
  }/*,
  {
    path: "/",
    component: "Layout",
    children: [
      {
        path: "/files",
        name: "Files",
        component: "/system/menu/MenuList",
        meta: {
          title: "Files Management",
          icon: "Files",
          roles: ["system:files"]
        }
      }
    ]
  }*/
]);

</script>

<style lang="scss" scoped>


</style>
