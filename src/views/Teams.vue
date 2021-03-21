<template lang="pug">
main.main.main--full
    h1.main__title Teams
    SearchBar(v-model='query', @input='updateSearch')
    ItemList(:paginator='teams', :key='query')
        template(v-slot:default='data')
            td.item_list__row__main
                router-link(:to='"/team/" + data.item.id') {{ data.item.name }}
            td.item_list__row__extra {{ data.item.memberCount }} members
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import ItemList from "@/components/ItemList.vue";
import SearchBar from "@/components/SearchBar.vue";

@Component({ components: { ItemList, SearchBar } })
export default class Teams extends BaseView {
    teams = this.client.listTeams();
    query = "";

    updateSearch() {
        this.teams = this.client.listTeams({ search: this.query });
    }
}
</script>
