<template lang="pug">
nav.navbar
    router-link.navbar__home(to='/')
        img.navbar__home__icon(
            src='/img/icons/icon-192.png',
            alt='Polympics Logo'
        )
        span.navbar__home__text Polympics
    .navbar__wrapper
        .navbar__menu
            span.navbar__menu__title Teams
            router-link.navbar__menu__item(to='/teams') All Teams
            router-link.navbar__menu__item(
                v-if='account && account.team',
                :to='`/team/${account.team.id}`') My Team
            router-link.navbar__menu__item(
                v-if='canCreateTeam', to='/teams/create') Create Team
        .navbar__menu
            span.navbar__menu__title Members
            router-link.navbar__menu__item(to='/accounts') All Members
            router-link.navbar__menu__item(
                v-if='account', :to='`/account/${account.id}`') Me
            router-link.navbar__menu__item(to='/logout', v-if='account') Logout
            router-link.navbar__menu__item(to='/login', v-else) Login or Signup
        .navbar__menu
            span.navbar__menu__title About
            router-link.navbar__menu__item(to='/about') About
            a.navbar__menu__item(href="#") Events
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
    @Prop()
    account;

    get canCreateTeam() {
        return (
            this.account &&
            this.account.permissions &
                polympics.PolympicsPermissions.manageTeams
        );
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.navbar
    display: flex
    justify-content: flex-end
    flex-wrap: wrap

.navbar__wrapper
    display: flex
    justify-content: flex-end
    flex-wrap: wrap
    position: absolute

.navbar__menu
    margin: 1rem
    padding: 1rem
    text-decoration: none
    transition: color 0.5s
    text-transform: lowercase
    font-variant: small-caps
    font-weight: 900
    display: flex
    flex-direction: column
    align-items: center
    height: 1rem
    max-height: 1rem
    transition: max-height 2s linear
    overflow: hidden
    z-index: 1
    &:hover
        height: 100%
        max-height: 1000px
        background: $bubble-bg
        border-radius: 1rem
        .navbar__menu__item
            display: block

.navbar__menu__item
    color: $body-text
    margin-top: 0.5rem
    transition: color 0.2s
    &:hover
        color: $navbar-text-hover

.navbar__home
    margin: 2em
    color: $body-text
    text-decoration: none
    transition: color 0.5s
    text-transform: lowercase
    font-variant: small-caps
    font-weight: 900
    display: flex
    align-items: center
    text-transform: none
    font-variant: normal
    margin-right: auto
    font-weight: 800

.navbar__home__icon
    height: 2.5em
    margin-right: 0.5em

@media only screen and (max-width: 700px)
    .navbar__home
        margin-right: auto

@media only screen and (max-width: 470px)
    .navbar
        justify-content: center

    .navbar__home
        font-variant: small-caps
        font-weight: 900
        margin-right: 1.5em
        &::after
            content: "home"

    .navbar__home__text, .navbar__home__icon
        display: none

@media only screen and (max-width: 430px)
    .navbar__home
        margin-right: 1.5em
</style>
