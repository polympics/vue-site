<template lang="pug">
main.main.main--full
    h1.name
        EditableText(
            placeholder='Team Name', :value='team.name', v-if='canEditName',
            @input='updateTeamName')
        span(v-else) {{ team.name }}
    h3.member_count {{ team.memberCount }} members
    SearchBar(v-model='query', @input='updateSearch')
    ItemList.member_list(:paginator='members', :key='listKey')
        template.test(v-slot:default='data')
            AccountRow(
                :account='data.item',
                :showPromoteButtons='canPromoteMembers',
                :showKickButtons='canKickMembers',
                :isOwnerCheck='isOwner'
                @demoteMember='demoteMember',
                @promoteMember='promoteMember',
                @kickMember='kickMember')
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import ItemList from "@/components/ItemList.vue";
import SearchBar from "@/components/SearchBar.vue";
import EditableText from "@/components/EditableText.vue";
import AccountRow from "@/components/AccountRow.vue";

@Component({ components: { ItemList, SearchBar, EditableText, AccountRow } })
export default class Team extends BaseView {
    team = {
        name: "Loading...",
        memberCount: 0,
        id: 0
    };
    members = null;
    query = "";
    listKey = 0;
    canEditName = false;
    canKickMembers = false;
    canPromoteMembers = false;

    created() {
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
                this.$router.push({ path: "/404" });
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
        this.canEditName = ownsTeam || userPerms & P.manageTeams;
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

    async updateTeamName(newName) {
        await this.client.updateTeam(this.team, { name: newName });
    }

    async kickMember(account) {
        await this.client.updateAccount(account, { team: null });
        this.update();
    }

    async promoteMember(account) {
        await this.client.updateAccount(account, {
            grantPermissions: polympics.PolympicsPermissions.manageOwnTeam
        });
        this.update();
    }

    async demoteMember(account) {
        await this.client.updateAccount(account, {
            revokePermissions: polympics.PolympicsPermissions.manageOwnTeam
        });
        this.update();
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.name, .member_count
    margin: 1rem 0
    text-align: center

.name
    font-size: 4rem

.member_count
    font-size: 1.5rem
</style>
