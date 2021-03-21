<template lang="pug">
main.main.main--full
    h1.main__title Polympics Members
    SearchBar(v-model='query', @input='updateSearch')
    ItemList(:paginator='accounts', :key='query')
        template(v-slot:default='data')
            td.item_list__row__image
                img(:src='data.item.avatarUrl + "?size=64"', alt='Pfp')
            td.item_list__row__main
                router-link(:to='`/account/${data.item.id}`')
                    | {{ data.item.name }}!{'#'}{{ data.item.discriminator }}
            td.item_list__row__extra
                router-link(
                    :to='`/team/${data.item.team.id}`',
                    v-if='data.item.team') {{ data.item.team.name }}
                span(v-else) 🏳️‍🌈 No team
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import ItemList from "@/components/ItemList.vue";
import SearchBar from "@/components/SearchBar.vue";

@Component({ components: { ItemList, SearchBar } })
export default class Accounts extends BaseView {
    accounts = this.client.listAccounts();
    query = "";

    updateSearch() {
        this.accounts = this.client.listAccounts({ search: this.query });
    }
}
</script>
