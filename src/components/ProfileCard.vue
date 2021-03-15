<template lang="pug">
main(class='account')
  img(:src='account.avatarUrl', alt="Profile Picture", class='account__pfp')
  div(class='account__details')
    h1(class='account__name') {{ account.name }}
      span(class='account__discrim') !{'#'}{{ account.discriminator}}
    a(class='account__team', href="#", v-if='account.team')
      | {{ account.team.name }}
    span(class='account__team account__team--none', v-else) 🏳️‍🌈 No team
    a(class='account__link', href="#") Manage Account
</template>

<script lang="ts">
export default {
  props: ["account"]
};
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.account
  display: flex
  margin: 4rem auto
  max-width: 80%

.account__pfp
  border-radius: 2rem
  height: 10rem
  z-index: 1

.account__details
    display: flex
    flex-direction: column
    align-items: flex-start
    background: $bubble-bg
    border-radius: 2rem
    margin: 2rem 0 0 -3rem
    padding: 1rem 1rem 2rem 4rem
    width: 100vw

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