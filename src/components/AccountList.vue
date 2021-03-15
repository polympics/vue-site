<template lang="pug">
table(class='account_list')
    tr(class='account_list__row', v-for='account in accounts')
        td(class='account_list__row__pfp')
            img(:src='account.avatarUrl', alt='Pfp')
        td(class='account_list__row__name')
            router-link(:to='"/account/" + account.id')
                | {{ account.name }}!{'#'}{{ account.discriminator }}
        td(class='account_list__row__team')
            a(href='#', v-if='account.team') {{ account.team.name }}
            p(href='#', v-else) 🏳️‍🌈 No team
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AccountList extends Vue {
    accounts: Array<Record<string, any>> = [];
    finished = false;
    // eslint-disable-next-line
    @Prop()
    accountPaginator: any;

    mounted() {
        this.fetchAccounts();
        window.addEventListener('scroll', this.fetchAccounts);
    }

    destroyed () {
        window.removeEventListener('scroll', this.fetchAccounts);
    }

    async fetchAccounts() {
        console.log('hiiii');
        console.log(document.body.scrollTop, document.body.offsetHeight);
        console.log(this.$el.clientHeight, this.$el.clientTop, this.$el.scrollTop, this.$el.scrollHeight)
        if (this.finished) return;
        const accounts = await this.accountPaginator.nextPage();
        if (!accounts.length) {
            this.finished = true;
            return;
        }
        console.log(this.finished, accounts);
        this.accounts.push(...accounts);
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.account_list
    background: $bubble-bg
    width: calc(100% - 4rem)
    margin: 2rem
    padding: 1rem 2rem
    border-radius: 2rem
    border-collapse: separate
    border-spacing: 0 1rem
    a
        color: $body-link

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