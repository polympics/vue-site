<template lang="pug">
main.main
    form.page_content.create_team_form(@submit.prevent='createTeam')
        h1.page_intro__header Create a Team
        input.text_input#team_name_input(
            v-model='teamName', placeholder='Team name')
        input.create_button(
            type='submit',
            value='Create'
            :class='teamName ? "create_button--enabled" : "create_button--disabled"'
        )
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";

@Component()
export default class CreateTeam extends BaseView {
    teamName = "";

    created() {
        const canCreate =
            this.userAccount &&
            this.userAccount.permissions &
                polympics.PolympicsPermissions.manageTeams;
        if (!canCreate) {
            this.$router.push({ path: "/" });
        }
    }

    async createTeam() {
        if (!this.teamName) return;
        const team = await this.client.createTeam(this.teamName);
        this.$router.push({ path: `/team/${team.id}` });
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.page_intro__header
    margin: 0
    margin-bottom: 2rem

.create_team_form
    display: flex
    flex-direction: column
    margin: 2rem auto
    width: 80%
    background: $bubble-bg
    border-radius: 2rem
    padding: 2rem
    input
        margin: 0.4rem 0

.create_button
    border: 0
    font-family: inherit
    font-size: inherit
    font-weight: inherit
    color: inherit
    border-radius: 0.5rem
    padding: 1rem
    box-shadow: 2px 2px 10px 2px $body-shadow

.create_button--enabled
    background: $accent-gradient
    cursor: pointer
    transition: transform 50ms
    &:hover
        transform: scale(1.2)

.create_button--disabled
    background: $grey-accent-gradient
    cursor: default
</style>
