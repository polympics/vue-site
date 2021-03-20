<template lang="pug">
main.account
  img.account__pfp(
      :src='account.avatarUrl + "?size=256"',
      alt='Profile Picture')
  .account__details
    h1.account__name {{ account.name }}
      span.account__discrim !{'#'}{{ account.discriminator}}
    a.account__team(href='#', v-if='account.team')
      | {{ account.team.name }}
    span.account__team.account__team--none(v-else) 🏳️‍🌈 No team
    slot
</template>

<script>
export default {
    props: ["account"]
};
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.account
    display: flex
    flex-direction: row
    margin: 2rem auto
    width: 80%
    background: $bubble-bg
    border-radius: 2rem
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

.account__link
    margin-top: 1rem
    color: $body-text
</style>
