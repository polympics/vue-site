<template lang="pug">
Redirecting
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import Redirecting from "@/components/Redirecting.vue";

@Component({ components: { Redirecting } })
export default class DiscordSyncCallback extends BaseView {
    async mounted() {
        const account = await this.client.getSelf();
        const callbackData = new URLSearchParams(
            window.location.hash.substr(1)
        );
        const scope = callbackData.get("scope") || "";
        if (scope.indexOf("identify") < 0) {
            this.redirect(account);
            return;
        }
        const token = callbackData.get("access_token");
        await this.client.updateAccount(account, { discordToken: token });
        this.redirect(account);
    }

    redirect(account) {
        this.$router.push({ path: `/account/${account.id}/manage` });
    }
}
</script>
