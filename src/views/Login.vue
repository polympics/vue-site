<template lang="pug">
Redirecting
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Redirecting from "@/components/Redirecting.vue";

@Component({ components: { Redirecting } })
export default class Login extends Vue {
    async mounted() {
        const client = common.getClient(process.env.VUE_APP_API_URL);
        if (client.getSelf) {
            const account = await client.getSelf();
            this.$router.push({ path: `/account/${account.id}` });
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
