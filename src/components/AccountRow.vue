<template lang="pug">
div(v-transparent)
    td.item_list__row__image
        img(:src='account.avatarUrl + "?size=64"', alt='Pfp')
    td.item_list__row__main
        router-link(:to='`/account/${account.id}`', v-emoji)
            | {{ account.name }}!{'#'}{{ account.discriminator }}
    td.item_list__row__extra(v-if='showTeams')
        router-link(
                :to='`/team/${account.team.id}`', v-if='account.team', v-emoji)
            | {{ account.team.name }}
        span(v-else, v-emoji) 🏳️‍🌈 No team
    td.item_list__row__extra(v-if='showPromoteButtons')
        i.fas.fa-crown.user_icon.user_icon--demote(
            @click='$emit("demoteMember", account)',
            v-if='isOwnerCheck(account)')
        i.fas.fa-crown.user_icon.user_icon--promote(
            @click='$emit("promoteMember", account)', v-else)
    td.item_list__row__extra(v-if='showKickButtons')
        i.fas.fa-user-slash.user_icon.user_icon--kick(
            @click='$emit("kickMember", account)')
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AccountRow extends Vue {
    @Prop()
    account;
    @Prop({ default: false })
    showTeams;
    @Prop({ default: false })
    showPromoteButtons;
    @Prop({ default: false })
    showKickButtons;
    @Prop({ default: null })
    isOwnerCheck;
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.item_list__row__image > img
    width: 48px
    border-radius: 50%

.user_icon
    cursor: pointer
    font-size: 1.2rem
    transition: all 20ms
    margin: 0 0.7rem
    &:hover
        transform: scale(1.5)

.user_icon--kick
    color: $red-no

.user_icon--demote
    color: $crown-yellow

.user_icon--promote
    opacity: 0.4
    color: $crown-yellow
    transition: opacity 100ms
    &:hover
        opacity: 1
</style>
