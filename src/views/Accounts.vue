<template lang="pug">
main.main.main--full
  h1.main__title Polympics Members
  SearchBar(v-model='query', @input='updateSearch')
  AccountList(:accountPaginator='accounts', :key='query')
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AccountList from "@/components/AccountList.vue";
import SearchBar from "@/components/SearchBar.vue";

const client = common.getClient(process.env.VUE_APP_API_URL);

@Component({ components: { AccountList, SearchBar } })
export default class Accounts extends Vue {
    accounts = client.listAccounts();
    query = "";

    updateSearch() {
        this.accounts = client.listAccounts({ search: this.query });
    }
}
</script>
