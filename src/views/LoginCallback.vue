<template lang="pug">
Redirecting
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import Redirecting from "@/components/Redirecting.vue";
import { getClient, login } from "@/js/common.js";

@Component({ components: { Redirecting } })
export default class LoginCallback extends BaseView {
    mounted() {
        const callbackData = new URLSearchParams(
            window.location.hash.substr(1)
        );
        const scope = callbackData.get("scope") || "";
        if (scope.indexOf("identify") < 0) {
            this.failLogin();
            return;
        }
        this.loginWith(callbackData.get("access_token"));
    }

    async failLogin() {
        this.$router.push({ path: "/" });
    }

    async loginWith(token) {
        const session = await this.client.discordAuthenticate(token);
        login(session);
        const userClient = getClient();
        const account = await userClient.getSelf();
        this.$emit("newCredentials");
        this.$router.push({ path: `/account/${account.id}` });
    }
}
</script>
