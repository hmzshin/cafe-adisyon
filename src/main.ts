import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/router";
import ElementPlus from "element-plus";

import App from "./App.vue";
import "element-plus/dist/index.css";
import "./index.css";

const pinia = createPinia();
const app = createApp(App);

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount("#app");
