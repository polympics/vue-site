<template lang="pug">
main.main.main--centered
  ProfileCard(:account='account')
    h3(v-if='canChangeTeam') Change Team
    Warning.section_warning(
            v-if='canChangeTeam && account.id === ownAccount.id')
        | Changing your team frequently is not allowed and may result in
        | a ban. Please chose a team and stick to it, preferably one that
        | matches your nationality.
    TeamSelector(
        :selectedTeam='account.team', @input='updateTeam',
        v-if='canChangeTeam')
    h3(v-if='canChangeDetails') Change Name
    DiscordNameInput(
        :username='account.name',
        :discriminator='account.discriminator',
        @usernameInput='updateUsername',
        @discriminatorInput='updateDiscriminator',
        v-if='canChangeDetails')
    h3(v-if='canChangeDetails') Change Avatar
    ImageUrlInput(
        :value='account.avatarUrl', @input='updateAvatarUrl',
        v-if='canChangeDetails')
    h3(v-if='canChangePermissions') Change Permissions
    Warning.section_warning(
            v-if='canChangePermissions && account.id === ownAccount.id')
        | If you revoke your own permissions you may not be able to get
        | them back.
    PermissionsInput(
        :value='account.permissions', @input='updatePermissions',
        :userPermissions='ownAccount.permissions' v-if='canChangePermissions')
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ProfileCard from "@/components/ProfileCard.vue";
import ImageUrlInput from "@/components/ImageUrlInput.vue";
import DiscordNameInput from "@/components/DiscordNameInput.vue";
import PermissionsInput from "@/components/PermissionsInput.vue";
import TeamSelector from "@/components/TeamSelector.vue";
import Warning from "@/components/Warning.vue";

const client = common.getClient(process.env.VUE_APP_API_URL);

@Component({
    components: {
        ProfileCard,
        ImageUrlInput,
        DiscordNameInput,
        PermissionsInput,
        TeamSelector,
        Warning
    }
})
export default class ManageAccount extends Vue {
    account = {
        name: "Loading...",
        discriminator: "0000",
        team: {
            name: "Loading..."
        }
    };
    canChangeTeam = false;
    canChangeDetails = false;
    canChangePermissions = false;
    ownAccount = {};

    async created() {
        if (!client.getSelf) {
            this.$router.push({ path: `/account/${this.$route.params.id}` });
            return;
        }
        this.ownAccount = await client.getSelf();
        const manageFlags = common.canManage(
            this.$route.params.id,
            this.ownAccount
        );
        if (!manageFlags) {
            this.$router.push({ path: `/account/${this.$route.params.id}` });
            return;
        }
        this.canChangeTeam = manageFlags & 1;
        this.canChangeDetails = manageFlags & (1 << 1);
        this.canChangePermissions = manageFlags & (1 << 2);
        this.fetchAccount();
    }

    async fetchAccount() {
        const id = this.$route.params.id;
        let account;
        try {
            account = await client.getAccount(id);
        } catch (error) {
            if (error.code === 422) {
                this.$router.push({ path: "/404" });
            }
            return;
        }
        this.account = account;
    }

    async updatePermissions({ grant, revoke }) {
        this.account = await client.updateAccount(this.account, {
            grantPermissions: grant,
            revokePermissions: revoke
        });
    }

    async updateUsername(newUsername) {
        this.account = await client.updateAccount(this.account, {
            name: newUsername
        });
    }

    async updateDiscriminator(newDiscriminator) {
        this.account = await client.updateAccount(this.account, {
            discriminator: newDiscriminator
        });
    }

    async updateAvatarUrl(newAvatarUrl) {
        this.account = await client.updateAccount(this.account, {
            avatarUrl: newAvatarUrl
        });
    }

    async updateTeam(newTeam) {
        this.account = await client.updateAccount(this.account, {
            team: newTeam
        });
    }
}
</script>

<style lang="sass" scoped>
.section_warning
    margin-bottom: 1rem
</style>
