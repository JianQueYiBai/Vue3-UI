import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import test1 from "./components/test1.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", component: test1 }],
});


const app = createApp(App)
app.use(router)

app.mount("#app");
