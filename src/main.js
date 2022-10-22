import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import App from "./App.vue";
import BookListPage from "./pages/BookListPage.vue";
import AddPage from "./pages/AddPage.vue";
import BookDetailPage from "./pages/BookDetailPage.vue";
import BookEditPage from "./pages/BookEditPage.vue";

const routes = [
  { path: "/", name: "BookListPage", component: BookListPage },
  { path: "/add", name: "AddPage", component: AddPage },
  { path: "/detail/:id", name: "BookDetailPage", component: BookDetailPage },
  { path: "/edit/:id", name: "BookEditPage", component: BookEditPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});

const app = createApp(App);

app.use(BootstrapVue3);
app.use(router);

app.mount("#app");
