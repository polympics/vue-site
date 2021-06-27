import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./views/Index.vue";
import ManageAccount from "./views/ManageAccount.vue";
import Account from "./views/Account.vue";
import Accounts from "./views/Accounts.vue";
import PageNotFound from "./views/PageNotFound.vue";
import Login from "./views/Login.vue";
import LoginCallback from "./views/LoginCallback.vue";
import DiscordSync from "./views/DiscordSync.vue";
import DiscordSyncCallback from "./views/DiscordSyncCallback.vue";
import Logout from "./views/Logout.vue";
import Teams from "./views/Teams.vue";
import Team from "./views/Team.vue";
import CreateTeam from "./views/CreateTeam.vue";
import Award from "./views/Award.vue";
import CreateAward from "./views/CreateAward.vue";
import WikiPage from "./views/WikiPage.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Index },
    { path: "/accounts", component: Accounts },
    { path: "/account/:id", component: Account },
    { path: "/account/:id/manage", component: ManageAccount },
    { path: "/teams", component: Teams },
    { path: "/teams/create", component: CreateTeam },
    { path: "/team/:id", component: Team },
    { path: "/team/:id/create_award", component: CreateAward },
    { path: "/award/:id", component: Award },
    { path: "/login", component: Login },
    { path: "/login/callback", component: LoginCallback },
    { path: "/discord_sync", component: DiscordSync },
    { path: "/discord_sync/callback", component: DiscordSyncCallback },
    { path: "/logout", component: Logout },
    { path: "/wiki/:wikiPath*", component: WikiPage },
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
