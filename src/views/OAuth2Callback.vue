<template lang="pug">
Redirecting
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Redirecting from "@/components/Redirecting.vue";

@Component({ components: { Redirecting } })
export default class OAuth2Callback extends Vue {
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
        const client = common.getClient(process.env.VUE_APP_API_URL);
        const session = await client.discordAuthenticate(token);
        common.login(session);
        const userClient = common.getClient(process.env.VUE_APP_API_URL);
        const account = await userClient.getSelf();
        this.$emit("reloadNavbar");
        this.$router.push({ path: `/account/${account.id}` });
    }
}
</script>
