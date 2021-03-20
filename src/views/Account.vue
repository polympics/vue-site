<template lang="pug">
main.main.main--centered
  ProfileCard(:account='account')
    router-link.account__link(
        :to='`/account/${account.id}/manage`') Manage Account
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ProfileCard from "@/components/ProfileCard.vue";

const client = common.getClient(process.env.VUE_APP_API_URL);

@Component({ components: { ProfileCard } })
export default class Account extends Vue {
    account = {
        name: "Loading...",
        discriminator: "0000",
        team: {
            name: "Loading..."
        }
    };

    created() {
        this.fetchAccount();
    }

    async fetchAccount() {
        const id = this.$route.params.id;
        let account;
        try {
            account = await client.getAccount(id);
        } catch (error) {
            if (error.code === 422) {
                this.$router.push({ path: "/404" });
            }
            return;
        }
        this.account = account;
    }
}
</script>
