<template lang="pug">
BubbleBox.account(:key='account.id')
    img.account__pfp(
        :src='account.avatarUrl + "?size=256"',
        alt='Profile Picture')
    .account__details
        h1.account__name(v-emoji)
            span {{ account.name }}
            span.account__discrim !{'#'}{{ account.discriminator}}
        .account__awards
            AwardIcon(
                :award='award',
                :key='award.id',
                v-for='award in account.awards'
            )
        router-link.account__team(
                :to='`/team/${account.team.id}`', v-if='account.team', v-emoji)
            | {{ account.team.name }}
        span.account__team.account__team--none(v-else, v-emoji) 🏳️‍🌈 No team
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

@media (max-width: 800px)
    .account
        flex-direction: column

    .account__name
        display: flex
        flex-wrap: wrap
        align-items: baseline
</style>
