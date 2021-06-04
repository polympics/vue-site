<template lang="pug">
Redirecting
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import Redirecting from "@/components/Redirecting.vue";

@Component({ components: { Redirecting } })
export default class Login extends BaseView {
    async mounted() {
        if (this.account) {
            await this.$router.push({ path: `/account/${this.account.id}` });
            return;
        }
        window.location.href =
            "https://discord.com/api/oauth2/authorize?" +
            "response_type=token&scope=identify&client_id=" +
            process.env.VUE_APP_DISCORD_CLIENT_ID +
            "&redirect_uri=" +
            process.env.VUE_APP_BASE_URL +
            "/login/callback";
    }
}
</script>
