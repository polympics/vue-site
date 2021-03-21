<template lang="pug">
main.main.main--full
    h1.name {{ team.name }}
    h3.member_count {{ team.memberCount }} members
    SearchBar(v-model='query', @input='updateSearch')
    ItemList(:paginator='members', :key='listKey')
        template(v-slot:default='data')
            td.item_list__row__image
                img(:src='data.item.avatarUrl + "?size=64"', alt='Pfp')
            td.item_list__row__main
                router-link(:to='`/account/${data.item.id}`')
                    | {{ data.item.name }}!{'#'}{{ data.item.discriminator }}
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import ItemList from "@/components/ItemList.vue";
import SearchBar from "@/components/SearchBar.vue";

@Component({ components: { ItemList, SearchBar } })
export default class Team extends BaseView {
    team = {
        name: "Loading...",
        memberCount: 0,
        id: 0
    };
    members = null;
    query = "";
    listKey = 0;

    created() {
        this.fetchTeam().then(this.updateSearch);
    }

    updateSearch() {
        this.members = this.client.listAccounts({
            search: this.query,
            team: this.team
        });
        this.listKey += 1;
    }

    async fetchTeam() {
        const id = this.$route.params.id;
        try {
            this.team = await this.client.getTeam(id);
        } catch (error) {
            if (error.code === 422) {
                this.$router.push({ path: "/404" });
            }
            return;
        }
    }
}
</script>

<style lang="sass" scoped>
.name, .member_count
    margin: 1rem 0
    text-align: center

.name
    font-size: 4rem

.member_count
    font-size: 1.5rem
</style>
