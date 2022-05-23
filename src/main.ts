import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import setupNaive from "@/plugins/naive";

import "vfonts/IBMPlexMono.css";

const app = createApp(App);
app.use(createPinia());
// 注册全局常用的 naive-ui 组件
setupNaive(app);
app.use(router);

app.config.globalProperties.$message = 565567;
app.config.globalProperties.$loading = 3343;

app.mount("#app");
