<template lang="pug">
main.main.main--centered
  ProfileCard(:account='account')
    router-link.button.button--discord.button--enabled.sync_button(
            to='/discord_sync')
        i.fab.fa-discord.button__icon
        | Sync with Discord
    h3(v-if='canChangeTeam') Change Team
    Warning.section_warning(v-if='canChangeTeam && isOwnAccount')
        | Changing your team frequently is not allowed and may result in
        | a ban. Please chose a team and stick to it, preferably one that
        | matches your nationality.
    TeamSelector(
        :selectedTeam='account.team', :client='client', @input='updateTeam',
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
    Warning.section_warning(v-if='canChangePermissions && isOwnAccount')
        | If you revoke your own permissions you may not be able to get
        | them back.
    PermissionsInput(
        :value='account.permissions', @input='updatePermissions',
        :userPermissions='userAccount.permissions' v-if='canChangePermissions')
    h3(v-if='canDeleteAccount') Danger Area
    button.button.button--danger.button--enabled(
        v-if='canDeleteAccount', @click='showAccountDeleteModal = true'
    ) Delete Account
    Modal(:show='showAccountDeleteModal').delete_modal
        h2 Delete account?
        p
            | You cannot undo this action. Make sure you're certain you want
            | to delete {{ accountPossesive }} account.
        button.button.button--black.button--enabled(@click='deleteAccount')
            | Delete
        button.button.button--black.button--enabled(
            @click='showAccountDeleteModal = false'
        ) Cancel
</template>

<script>
import debounce from "lodash.debounce";
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import ProfileCard from "@/components/ProfileCard.vue";
import ImageUrlInput from "@/components/ImageUrlInput.vue";
import DiscordNameInput from "@/components/DiscordNameInput.vue";
import PermissionsInput from "@/components/PermissionsInput.vue";
import TeamSelector from "@/components/TeamSelector.vue";
import Warning from "@/components/Warning.vue";
import Modal from "@/components/Modal.vue";
import { canManage, logout } from "@/js/common.js";

@Component({
    components: {
        ProfileCard,
        ImageUrlInput,
        DiscordNameInput,
        PermissionsInput,
        TeamSelector,
        Warning,
        Modal
    }
})
export default class ManageAccount extends BaseView {
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
    canDeleteAccount = false;
    isOwnAccount = false;
    showAccountDeleteModal = false;
    accountPossesive = "your";

    async created() {
        if (!this.userAccount) {
            this.$router.push({ path: `/account/${this.$route.params.id}` });
            return;
        }
        this.isOwnAccount = this.$route.params.id === this.userAccount.id;
        const manageFlags = canManage(this.$route.params.id, this.userAccount);
        if (!manageFlags) {
            this.$router.push({ path: `/account/${this.$route.params.id}` });
            return;
        }
        this.canChangeTeam = manageFlags & 1;
        this.canChangeDetails = manageFlags & (1 << 1);
        this.canChangePermissions = manageFlags & (1 << 2);
        this.canDeleteAccount = manageFlags & (1 << 3);
        this.fetchAccount();
    }

    async fetchAccount() {
        const id = this.$route.params.id;
        let account;
        try {
            account = await this.client.getAccount(id);
        } catch (error) {
            if (error.code === 422) {
                this.$router.push({ path: "/404" });
            }
            return;
        }
        this.accountPossesive = this.isOwnAccount
            ? "your"
            : `${account.name}'s`;
        this.account = account;
    }

    async updatePermissions({ grant, revoke }) {
        this.account = await this.client.updateAccount(this.account, {
            grantPermissions: grant,
            revokePermissions: revoke
        });
        if (this.isOwnAccount) this.$emit("newCredentials");
    }

    async _updateUsername(newUsername) {
        this.account = await this.client.updateAccount(this.account, {
            name: newUsername
        });
    }

    updateUsername = debounce(this._updateUsername, 250);

    async _updateDiscriminator(newDiscriminator) {
        this.account = await this.client.updateAccount(this.account, {
            discriminator: newDiscriminator
        });
    }

    updateDiscriminator = debounce(this._updateDiscriminator, 250);

    async _updateAvatarUrl(newAvatarUrl) {
        this.account = await this.client.updateAccount(this.account, {
            avatarUrl: newAvatarUrl
        });
    }

    updateAvatarUrl = debounce(this._updateAvatarUrl, 250);

    async updateTeam(newTeam) {
        this.account = await this.client.updateAccount(this.account, {
            team: newTeam
        });
        if (this.isOwnAccount) this.$emit("newCredentials");
    }

    async deleteAccount() {
        await this.client.deleteAccount(this.account);
        if (this.isOwnAccount) {
            logout();
            this.$emit("newCredentials");
        }
        this.$router.push({ path: "/" });
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/form.sass"

.sync_button
    margin: 1.5rem 0 0 1rem

.section_warning
    margin-bottom: 1rem

.delete_modal button
    margin-right: 1rem
</style>
