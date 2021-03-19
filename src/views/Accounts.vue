<template lang="pug">
main.main.main--centered
  AccountList(:accountPaginator='accounts')
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AccountList from "@/components/AccountList.vue";

const client = common.getClient(process.env.VUE_APP_API_URL);

@Component({ components: { AccountList } })
export default class Accounts extends Vue {
    accounts = client.listAccounts();
}
</script>
