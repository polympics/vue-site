import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/Index.vue";
import About from "../views/About.vue";
import Account from "../views/Account.vue";
import Accounts from "../views/Accounts.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", name: "Index", component: Index },
  { path: "/about", name: "About", component: About },
  { path: "/accounts", name: "Accounts", component: Accounts },
  { path: "/account/:id", name: "Account", component: Account },
  { path: "**", name: "PageNotFound", component: PageNotFound}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
