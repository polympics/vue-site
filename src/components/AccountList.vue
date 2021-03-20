<template lang="pug">
table.account_list
    tr.account_list__row(v-for='account in accounts')
        td.account_list__row__pfp
            img(:src='account.avatarUrl', alt='Pfp')
        td.account_list__row__name
            router-link(:to='"/account/" + account.id')
                | {{ account.name }}!{'#'}{{ account.discriminator }}
        td.account_list__row__team
            a(href='#', v-if='account.team') {{ account.team.name }}
            p(href='#', v-else) 🏳️‍🌈 No team
    tr.account_list_placeholder(v-if='!accounts.length')
        td There's nothing here!
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

Component.registerHooks(["beforeRouteEnter"]);

@Component
export default class AccountList extends Vue {
    accounts = [];
    finished = false;
    currentlyFetching = false;
    @Prop()
    accountPaginator;

    mounted() {
        this.fetchAccounts();
        window.addEventListener("scroll", this.fetchAccounts);
    }

    destroyed() {
        window.removeEventListener("scroll", this.fetchAccounts);
    }

    beforeRouteEnter(_to, _from, next) {
        next(vm => {
            vm.fetchAccounts();
        });
    }

    async fetchAccounts() {
        if (this.finished || this.currentlyFetching) return;
        this.currentlyFetching = true;
        const accounts = await this.accountPaginator.nextPage();
        if (!accounts.length) {
            this.finished = true;
            return;
        }
        this.currentlyFetching = false;
        this.accounts.push(...accounts);
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.account_list
    background: $bubble-bg
    width: calc(100% - 4rem)
    margin: 1rem 2rem
    padding: 1rem 2rem
    border-radius: 2rem
    border-collapse: separate
    border-spacing: 0 1rem
    a
        color: $body-link

.account_list_placeholder
    background: $bubble-bg
    width: calc(100% - 8rem)
    margin: 2rem
    padding: 2rem
    border-radius: 2rem
    font-weight: 800
    text-align: center

.account_list__row
    padding: 1rem 0

.account_list__row__pfp
    img
      width: 48px
      border-radius: 50%

.account_list__row__name
    width: 100%
    padding-left: 1rem

.account_list__row__team
    white-space: nowrap
</style>
