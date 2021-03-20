<template lang="pug">
main.main.main--full
    h1.main__title Polympics Members
    SearchBar(v-model='query', @input='updateSearch')
    ItemList(:paginator='accounts', :key='query')
        template(v-slot:default='data')
            td.item_list__row__image
                img(:src='data.item.avatarUrl', alt='Pfp')
            td.item_list__row__main
                router-link(:to='"/account/" + data.item.id')
                    | {{ data.item.name }}!{'#'}{{ data.item.discriminator }}
            td.item_list__row__extra
                a(href='#', v-if='data.item.team') {{ data.item.team.name }}
                p(href='#', v-else) 🏳️‍🌈 No team
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ItemList from "@/components/ItemList.vue";
import SearchBar from "@/components/SearchBar.vue";

const client = common.getClient(process.env.VUE_APP_API_URL);

@Component({ components: { ItemList, SearchBar } })
export default class Accounts extends Vue {
    accounts = client.listAccounts();
    query = "";

    updateSearch() {
        this.accounts = client.listAccounts({ search: this.query });
    }
}
</script>
