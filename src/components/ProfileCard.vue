<template lang="pug">
BubbleBox.account(:key='account.id')
    img.account__pfp(
        :src='account.avatarUrl + "?size=256"',
        alt='Profile Picture')
    .account__details
        h1.account__name(v-emoji)
            span {{ account.name }}
            span.account__discrim !{'#'}{{ account.discriminator}}
        router-link.account__team(
                :to='`/team/${account.team.id}`', v-if='account.team', v-emoji)
            | {{ account.team.name }}
        span.account__team.account__team--none(v-else, v-emoji) 🏳️‍🌈 No team
        .account__award_case(v-if='account.awards.length')
            span.account__award_case__title Trophy Case
            .account__award_case__awards
                AwardIcon(
                    :award='award',
                    :big='true',
                    :key='award.id',
                    v-for='award in account.awards'
                )
        slot
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";
import BubbleBox from "./BubbleBox";
import AwardIcon from "./AwardIcon.vue";

@Component({ components: { AwardIcon, BubbleBox } })
export default class ProfileCard extends Vue {
    @Prop()
    account;
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.account
    display: flex
    flex-direction: row
    padding: 2rem

.account__pfp
    border-radius: 2rem
    height: 10rem
    width: 10rem
    margin-right: 1rem
    z-index: 1
    background: $accent-gradient

.account__details
    display: flex
    flex-grow: 999
    flex-direction: column
    align-items: flex-start

.account__name
    font-size: 4rem
    margin: 0

.account__discrim
    font-size: 2rem

.account__team
    font-size: 1.5rem
    margin: 0
    color: $body-link

.account__team--none
    color: $body-text

.account__award_case
    border: 1px solid $body-text
    border-radius: 1rem
    margin-top: 1.5rem
    padding: 1rem 1rem 0.7rem 0.5rem
    width: min-content
    min-width: 8rem
    position: relative

.account__award_case__title
    position: absolute
    top: -0.7rem
    left: 0.7rem
    background: $bubble-bg
    white-space: nowrap
    padding: 0 0.2rem

@media (max-width: 800px)
    .account
        flex-direction: column

    .account__name
        display: flex
        flex-wrap: wrap
        align-items: baseline
</style>
