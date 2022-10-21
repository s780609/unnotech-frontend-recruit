import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import App from "./App.vue";
import HomePage from "./components/BookListPage.vue";
import AddPage from "./components/AddPage.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/add", name: "AddPage", component: AddPage },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);

app.use(BootstrapVue3);

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");
