<template lang="pug">
main.main.main--full
    h1.main__title Polympics Members
    SearchBar(v-model='query', @input='updateSearch')
    ItemList(:paginator='accounts', :key='query')
        template(v-slot:default='data')
            AccountRow(:account='data.item', :showTeams='true')
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import ItemList from "@/components/ItemList.vue";
import SearchBar from "@/components/SearchBar.vue";
import AccountRow from "@/components/AccountRow.vue";

@Component({ components: { ItemList, SearchBar, AccountRow } })
export default class Accounts extends BaseView {
    accounts = this.client.listAccounts();
    query = "";

    updateSearch() {
        this.accounts = this.client.listAccounts({ search: this.query });
    }
}
</script>
