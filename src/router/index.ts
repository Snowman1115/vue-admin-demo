import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Layout from '@/layout/Index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        component:Layout,
        redirect:"/dashboard",
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: ()=> import("@/views/dashboard/Index.vue"),
                meta: {
                    title: "Home",
                    icon: "HomeFilled",
                }
            }
        ]
    },
    {
        path: "/system",
        name: "System",
        component: Layout,
        meta: {
            title: "System Management",
            icon: "Setting",
            roles: ["system:manager"]
        },
        children: [
            {
                path: "/userList",
                name: "UserList",
                component: ()=> import("@/views/system/user/UserList.vue"),
                meta: {
                    title: "User Management",
                    icon: "User",
                    roles: ["system:user"]
                }
            },
            {
                path: "/roleList",
                name: "RoleList",
                component: ()=> import("@/views/system/role/RoleList.vue"),
                meta: {
                    title: "Role Management",
                    icon: "Avatar",
                    roles: ["system:role"]
                }
            },
            {
                path: "/menuList",
                name: "MenuList",
                component: ()=> import("@/views/system/menu/MenuList.vue"),
                meta: {
                    title: "Menu Management",
                    icon: "Menu",
                    roles: ["system:menu"]
                }
            }
        ]
    },
    {
        path:"/",
        component: Layout,
        redirect:"/files",
        children: [
            {
                path: "/files",
                name: "Files",
                component: ()=> import("@/views/dashboard/Index.vue"),
                meta: {
                    title: "Files Management",
                    icon: "Files",
                    roles: ["system:files"]
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
