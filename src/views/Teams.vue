<template lang="pug">
main.main.main--full
    h1.main__title Teams
    SearchBar(v-model='query', @input='updateSearch')
    ItemList(:paginator='teams', :key='query')
        template(v-slot:default='data')
            td.item_list__row__main
                .team_row__title_wrapper
                    router-link(:to='"/team/" + data.item.id', v-emoji)
                        | {{ data.item.name }}
                    AwardIcon(
                        :award='award',
                        :key='award.id',
                        v-for='award in data.item.awards')
            td.item_list__row__extra {{ data.item.memberCount }} members
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import AwardIcon from "@/components/AwardIcon.vue";
import ItemList from "@/components/ItemList.vue";
import SearchBar from "@/components/SearchBar.vue";

@Component({ components: { AwardIcon, ItemList, SearchBar } })
export default class Teams extends BaseView {
    teams = this.client.listTeams();
    query = "";

    updateSearch() {
        this.teams = this.client.listTeams({ search: this.query });
    }
}
</script>

<style lang="sass" scoped>
.team_row__title_wrapper
    display: flex
    align-items: center
</style>
