<template lang="pug">
main.main: BubbleBox.page_content
    form.create_team_form(@submit.prevent='createTeam')
        h1.page_intro__header Create a Team
        input.text_input#team_name_input(
            v-model='teamName', placeholder='Team name')
        input.button(
            type='submit', value='Create'
            :class='teamName ? "button--enabled" : "button--disabled"'
        )
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import BubbleBox from "@/components/BubbleBox.vue";

@Component({ components: { BubbleBox } })
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
    padding: 2rem
    input
        margin: 0.4rem 0
</style>
