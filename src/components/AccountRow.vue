<template lang="pug">
div(v-transparent)
    td.item_list__row__image
        img(:src='account.avatarUrl + "?size=64"', alt='Pfp')
    td.item_list__row__main
        .name_awards_wrapper
            router-link(:to='`/account/${account.id}`', v-emoji)
                | {{ account.name }}!{'#'}{{ account.discriminator }}
            AwardIcon(
                :award='award',
                :key='account.id',
                v-for='award in account.awards')
    td.item_list__row__extra(v-if='showTeams')
        router-link(
                :to='`/team/${account.team.id}`', v-if='account.team', v-emoji)
            | {{ account.team.name }}
        span(v-else, v-emoji) 🏳️‍🌈 No team
    td.item_list__row__extra(v-if='showPromoteButtons')
        Tooltip(text='Remove', v-if='isOwnerCheck(account)')
            i.fas.fa-crown.user_icon.user_icon--demote(
                @click='$emit("demoteMember", account)')
        Tooltip(text='Promote', v-else)
            i.fas.fa-crown.user_icon.user_icon--promote(
                @click='$emit("promoteMember", account)')
    td.item_list__row__extra(v-if='showKickButtons')
        Tooltip(text='Kick')
            i.fas.fa-user-slash.user_icon.user_icon--kick(
                @click='$emit("kickMember", account)')
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import AwardIcon from "./AwardIcon.vue";
import Tooltip from "./Tooltip.vue";

@Component({ components: { AwardIcon, Tooltip } })
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

.name_awards_wrapper
    display: flex
    align-items: center
</style>
