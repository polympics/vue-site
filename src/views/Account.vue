<template lang="pug">
main.main.main--centered
  ProfileCard(:account='account')
    router-link.account__link(
        :to='`/account/${account.id}/manage`', v-if='canManageAccount'
    ) Manage Account
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import ProfileCard from "@/components/ProfileCard.vue";

@Component({ components: { ProfileCard } })
export default class Account extends BaseView {
    account = {
        name: "Loading...",
        discriminator: "0000",
        team: {
            name: "Loading..."
        }
    };
    canManageAccount = false;

    created() {
        this.fetchAccount();
    }

    async fetchAccount() {
        const id = this.$route.params.id;
        let account;
        try {
            account = await this.client.getAccount(id);
        } catch (error) {
            if (error.code === 422) {
                this.$router.push({ path: "/404" });
            }
            return;
        }
        if (this.userAccount) {
            this.canManageAccount = common.canManage(id, this.userAccount);
            this.isOwnAccount = this.userAccount && id === this.userAccount.id;
        }
        this.account = account;
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.account__link
    margin-top: 1rem
    color: $body-text
</style>
