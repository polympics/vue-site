<template lang="pug">
main(class='main main--centered')
  ProfileCard(:account='account')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProfileCard from "@/components/ProfileCard.vue";

// eslint-disable-next-line
declare const polympics: any;
const client = new polympics.UnauthenticatedClient();

@Component({
    components: {
        ProfileCard
    }
})
export default class Account extends Vue {
    account: Record<string, any> = {
        name: 'Loading...',
        discriminator: '0000',
        team: {
            name: 'Loading...'
        }
    };

    created() {
        this.fetchAccount();
    }

    async fetchAccount() {
        const id = this.$route.params.id;
        let account;
        try {
            account = await client.getAccount(id);
        } catch(error) {
            if (error.code === 422) {
                window.location.href = '/404';
            }
            return;
        }
        console.log(account);
        this.account = account;
    }
}
</script>
