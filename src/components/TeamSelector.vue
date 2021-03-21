<template lang="pug">
.team_selector
    .search_bar
        input.search_bar__input.text_input(
            placeholder='Start searching...',
            type='search',
            @input='fetchTeams($event.target.value)'
        )
    table.teams_list(v-if='teams.length')
        tr.teams_list__team(
                v-for='team in teams', @mouseup.prevent='selectTeam(team)',
                :class='teamSelected(team) ? "teams_list__team--selected" : ""'
            )
            td
                label(:for='`team_${team.id}`')
                    input(type='radio', name='team', :id='`team_${team.id}`')
                    | {{ team.name }}
            td(v-if='!team.isPlaceholder') {{ team.memberCount }} Members
            td(v-else)
    p.team_selector__placeholder(v-else) There's nothing here!
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";

const placeholderTeam = {
    name: "🏳️‍🌈 No team",
    id: 0,
    isPlaceholder: true,
    memberCount: 0
};

@Component()
export default class TeamSelector extends Vue {
    teams = [];
    @Prop()
    selectedTeam;
    @Prop()
    client;

    mounted() {
        this.fetchTeams("");
    }

    getSelectedTeam() {
        return this.selectedTeam || placeholderTeam;
    }

    async fetchTeams(query) {
        const paginator = this.client.listTeams({ search: query });
        // Just get the first 5 matching teams.
        this.teams = (await paginator.getPage({ perPage: 5 })).data;
        const selectedTeam = this.getSelectedTeam();
        // Make sure the selected team is always displayed.
        const selectedTeamDisplayed = this.teams.some(team => {
            return team.id === selectedTeam.id;
        });
        if (!selectedTeamDisplayed) this.teams.unshift(selectedTeam);
        if (selectedTeam !== placeholderTeam) {
            this.teams.unshift(placeholderTeam);
        }
    }

    selectTeam(team) {
        if (this.teamSelected(team)) return;
        for (const displayedTeam of this.teams) {
            if (this.teamSelected(displayedTeam)) {
                displayedTeam.memberCount -= 1;
            }
        }
        team.memberCount += 1;
        if (team === placeholderTeam) this.$emit("input", null);
        else this.$emit("input", team);
    }

    teamSelected(team) {
        return team.id === this.getSelectedTeam().id;
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.team_selector
    background: $body-bg
    border-radius: 0.5rem
    padding-bottom: 0.5rem
    width: 100%

.team_selector__placeholder
    margin: 1rem 1rem 0.5rem 2rem

.search_bar
    padding: 1rem 1rem
    border-bottom: 1px solid $separator-colour

.search_bar__input
    width: 100%
    padding: 0
    border: 0
    font-size: 0.9rem
    &:focus
        font-size: 1.1rem

.teams_list
    width: 100%
    border-collapse: collapse
    input
        display: none

.teams_list__team
    cursor: pointer
    &:hover
        background: $hover-bg
    td
        cursor: pointer
        padding: 0.5rem 1rem
    label
        cursor: pointer

.teams_list__team--selected
    background: $hover-bg
</style>
