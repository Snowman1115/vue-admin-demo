import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from "@/router";

import ElementPLus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);
app.use(router)
app.use(ElementPLus)
app.use(pinia)
app.mount('#app')


// Load Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
