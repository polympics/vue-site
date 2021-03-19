import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Index from "../views/Index.vue";
import About from "../views/About.vue";
import Account from "../views/Account.vue";
import Accounts from "../views/Accounts.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Login from "../views/Login.vue";
import OAuth2Callback from "../views/OAuth2Callback.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    { path: "/", component: Index },
    { path: "/about", component: About },
    { path: "/accounts", component: Accounts },
    { path: "/account/:id", component: Account },
    { path: "/login", component: Login },
    { path: "/login/callback", component: OAuth2Callback },
    { path: "/logout", component: Logout },
    { path: "**", component: PageNotFound }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
