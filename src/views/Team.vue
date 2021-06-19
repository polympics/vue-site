<template lang="pug">
main.main.main--full
    section.team_header
        h1.name
            EditableText(
                placeholder='Team Name', :value='team.name',
                v-if='canManageTeam', @input='updateTeamName')
            span(v-else) {{ team.name }}
        button.button.button--danger.button--enabled(
            v-if='canManageTeam', @click='showTeamDeleteModal = true'
        ) Delete Team
    .awards
        AwardIcon(
            :award='award',
            :big='true',
            :key='award.id',
            v-for='award in team.awards')
        router-link.awards__new(
                :to='`/team/${team.id}/create_award`',
                v-if='canCreateAward')
            Tooltip(text='Give Award')
                i.fas.fa-trophy.awards__new__trophy
                i.fas.fa-plus-square.awards__new__plus
    h3.member_count {{ team.memberCount }} members
    SearchBar(v-model='query', @input='update')
    ItemList.member_list(:paginator='members', :key='listKey')
        template(v-slot:default='data')
            AccountRow(
                :account='data.item',
                :showPromoteButtons='canPromoteMembers',
                :showKickButtons='canKickMembers',
                :isOwnerCheck='isOwner'
                @demoteMember='demoteMember',
                @promoteMember='promoteMember',
                @kickMember='kickMember')
    Modal(:show='showTeamDeleteModal').delete_modal
        h2 Delete team?
        p
            | You cannot undo this action. Make sure you're certain you want
            | to delete Team "{{ team.name }}".
        button.button.button--black.button--enabled(@click='deleteTeam')
            | Delete
        button.button.button--black.button--enabled(
            @click='showTeamDeleteModal = false'
        ) Cancel
</template>

<script>
import debounce from "lodash.debounce";
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import ItemList from "@/components/ItemList.vue";
import SearchBar from "@/components/SearchBar.vue";
import EditableText from "@/components/EditableText.vue";
import AccountRow from "@/components/AccountRow.vue";
import Modal from "@/components/Modal.vue";
import AwardIcon from "@/components/AwardIcon.vue";
import Tooltip from "@/components/Tooltip.vue";

@Component({
    components: {
        ItemList,
        SearchBar,
        EditableText,
        AccountRow,
        Modal,
        AwardIcon,
        Tooltip
    }
})
export default class Team extends BaseView {
    team = {
        name: "Loading...",
        memberCount: 0,
        id: 0
    };
    members = null;
    query = "";
    listKey = 0;
    canManageTeam = false;
    canKickMembers = false;
    canPromoteMembers = false;
    canCreateAward = false;
    showTeamDeleteModal = false;

    created() {
        this.canCreateAward =
            this.userAccount &&
            this.userAccount.permissions &
                polympics.PolympicsPermissions.manageAwards;
        this.update();
    }

    async update() {
        await this.fetchTeam();
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
                await this.$router.push({ path: "/404" });
            }
            return;
        }
        if (!this.userAccount) {
            // Not signed in, definitely can't edit anything.
            return;
        }
        const P = polympics.PolympicsPermissions;
        const userPerms = this.userAccount.permissions;
        const ownsTeam =
            this.userAccount.team &&
            this.userAccount.team.id.toString() === id &&
            userPerms & P.manageOwnTeam;
        this.canManageTeam = ownsTeam || userPerms & P.manageTeams;
        this.canKickMembers = ownsTeam || userPerms & P.manageAccountTeams;
        this.canPromoteMembers =
            ownsTeam ||
            (userPerms & P.managePermissions &&
                userPerms & (P.manageTeams | P.manageOwnTeam));
    }

    isOwner(member) {
        return (
            member.permissions & polympics.PolympicsPermissions.manageOwnTeam
        );
    }

    async _updateTeamName(newName) {
        await this.client.updateTeam(this.team, { name: newName });
        this.team.name = newName;
    }

    updateTeamName = debounce(this._updateTeamName, 250);

    async kickMember(account) {
        await this.client.updateAccount(account, { team: null });
        await this.update();
    }

    async promoteMember(account) {
        await this.client.updateAccount(account, {
            grantPermissions: polympics.PolympicsPermissions.manageOwnTeam
        });
        await this.update();
    }

    async demoteMember(account) {
        await this.client.updateAccount(account, {
            revokePermissions: polympics.PolympicsPermissions.manageOwnTeam
        });
        await this.update();
    }

    async deleteTeam() {
        const isOwnTeam =
            this.userAccount.team && this.userAccount.team.id === this.team.id;
        await this.client.deleteTeam(this.team);
        if (isOwnTeam) this.$emit("newCredentials");
        await this.$router.push({ path: "/teams" });
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"
@import "../sass/form.sass"

.team_header
    display: flex
    flex-direction: column
    align-items: center

.name, .member_count
    margin: 1rem 0
    text-align: center

.name
    font-size: 4rem

.awards__new
    color: $body-text
    transition: 200ms linear color
    &:hover
        color: $disabled-text

.member_count
    font-size: 1.5rem
    margin: 0 0 0.5rem 0

.delete_modal button
    margin-right: 1rem

.awards
    display: flex
    align-items: center
    justify-content: center
    margin: 1.5rem 0 0.8rem 0

.awards__new
    position: relative

.awards__new__trophy
    font-size: 1.5rem
    margin: 0 0.9rem 0 0.5rem

.awards__new__plus
    position: absolute
    right: 0.9rem
    bottom: 0
    font-size: 0.8rem
    text-shadow: -2px -2px 0 $body-bg, -2px 2px 0 $body-bg, 2px -2px 0 $body-bg
</style>
