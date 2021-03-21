import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./views/Index.vue";
import About from "./views/About.vue";
import ManageAccount from "./views/ManageAccount.vue";
import Account from "./views/Account.vue";
import Accounts from "./views/Accounts.vue";
import PageNotFound from "./views/PageNotFound.vue";
import Login from "./views/Login.vue";
import OAuth2Callback from "./views/OAuth2Callback.vue";
import Logout from "./views/Logout.vue";
import Teams from "./views/Teams.vue";
import Team from "./views/Team.vue";
import CreateTeam from "./views/CreateTeam.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Index },
    { path: "/about", component: About },
    { path: "/accounts", component: Accounts },
    { path: "/account/:id", component: Account },
    { path: "/account/:id/manage", component: ManageAccount },
    { path: "/teams", component: Teams },
    { path: "/teams/create", component: CreateTeam },
    { path: "/team/:id", component: Team },
    { path: "/login", component: Login },
    { path: "/login/callback", component: OAuth2Callback },
    { path: "/logout", component: Logout },
    { path: "**", component: PageNotFound }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { x: 0, y: 0 };
    },
    routes
});

export default router;
