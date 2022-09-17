import { createApp } from "vue";
import App from "./App.vue";
import "./tailwind.css";
import "../css/main.css";
import "./firebase/auth";
import "material-icons/iconfont/material-icons.css";
import router from "./router/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
