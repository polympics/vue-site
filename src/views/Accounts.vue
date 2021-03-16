<template lang="pug">
main(class='main main--centered')
  AccountList(:accountPaginator='accounts')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountList from "@/components/AccountList.vue";

// eslint-disable-next-line
declare const polympics: any;
const client = new polympics.UnauthenticatedClient();

@Component({ components: { AccountList } })
export default class Accounts extends Vue {
  accounts = client.listAccounts();
}
</script>
