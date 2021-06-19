<template lang="pug">
.account_selector
    .search_bar
        input.search_bar__input.text_input(
            placeholder='Start searching...',
            type='search',
            v-model='query',
            @input='fetchAccounts')
    table.account_list(v-if='accounts.length', :key='listKey')
        tr.account_list__account(
                v-for='account in accounts',
                @mouseup.prevent='selectAccount(account)')
            td
                label(:for='`account_${account.id}`', v-emoji)
                    input(type='radio', :id='`account_${account.id}`')
                    | {{ `${account.name}#${account.discriminator}` }}
            td(v-if='account.team') {{ account.team.name }}
            td(v-else) 🏳️‍🌈 No team
    p.account_selector__placeholder(v-else) There's nothing here!
</template>

<script>
import debounce from "lodash.debounce";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component()
export default class AccountSelector extends Vue {
    accounts = [];
    listKey = 0;
    query = "";

    @Prop()
    client;
    @Prop({ default: () => [] })
    exclude;

    mounted() {
        this.fetchAccounts();
    }

    async _fetchAccounts() {
        const paginator = this.client.listAccounts({ search: this.query });
        // Get the first 5 accounts that match.
        const accounts = (await paginator.getPage({ perPage: 20 })).data.filter(
            account => this.exclude.indexOf(account.id) === -1
        );
        accounts.length = Math.min(5, accounts.length);
        this.accounts = accounts;
        this.listKey += 1;
    }

    fetchAccounts = debounce(this._fetchAccounts, 250);

    selectAccount(account) {
        this.fetchAccounts();
        this.$emit("input", account);
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"
@import "../sass/form.sass"

.account_selector
    background: $body-bg
    border-radius: 0.5rem
    padding-bottom: 0.5rem
    width: 100%

.account_selector__placeholder
    margin: 1rem 1rem 0.5rem 2rem

.search_bar
    padding: 1rem 1rem
    border-bottom: 1px solid $separator-colour

.search_bar__input
    width: 100%
    padding: 0
    border: 0
    font-size: 0.9rem
    &:focus
        font-size: 1.1rem

.account_list
    width: 100%
    border-collapse: collapse
    input
        display: none

.account_list__account
    cursor: pointer
    &:hover
        background: $hover-bg
    td
        cursor: pointer
        padding: 0.5rem 1rem
    label
        cursor: pointer

@media (max-width: 1000px)
    .account_selector
        background: $bubble-bg
</style>
