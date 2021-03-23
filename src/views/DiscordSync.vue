<template lang="pug">
Redirecting
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import Redirecting from "@/components/Redirecting.vue";

@Component({ components: { Redirecting } })
export default class DiscordSync extends BaseView {
    async mounted() {
        window.location.href =
            "https://discord.com/api/oauth2/authorize?" +
            "response_type=token&scope=identify&client_id=" +
            process.env.VUE_APP_DISCORD_CLIENT_ID +
            "&redirect_uri=" +
            process.env.VUE_APP_BASE_URL +
            "/discord_sync/callback";
    }
}
</script>
