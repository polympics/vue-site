<template lang="pug">
main(class='main main--centered')
  AccountList(:accountPaginator='accounts')
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AccountList from "@/components/AccountList.vue";

const client = new polympics.UnauthenticatedClient();

@Component({ components: { AccountList } })
export default class Accounts extends Vue {
    accounts = client.listAccounts();
}
</script>
