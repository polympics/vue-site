<template lang="pug">
.nav_very_outer
    .navbar_button(v-if='!showNavbar', @click='showNavbar = true')
        i.fas.fa-bars
    transition(name='navbar_mob_transition')
        .navbar__outer_wrapper(v-if='showNavbar', @click='navbarClick')
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
                        router-link.navbar__menu__item(
                            to='/logout', v-if='account') Logout
                        router-link.navbar__menu__item(
                            to='/login', v-else) Login or Signup
                    .navbar__menu
                        span.navbar__menu__title Wiki
                        router-link.navbar__menu__item(
                            v-for='file in wiki',
                            v-if='file.navbar',
                            :key='file.path',
                            :to='`/wiki/${file.path}`') {{ file.title}}
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
    @Prop()
    account;
    @Prop()
    wiki;
    mobile = false;
    showNavbar = true;

    created() {
        this.mobile = window.matchMedia("(hover: none)").matches;
        this.showNavbar = !this.mobile;
    }

    get canCreateTeam() {
        return (
            this.account &&
            this.account.permissions &
                polympics.PolympicsPermissions.manageTeams
        );
    }

    navbarClick() {
        if (this.mobile) {
            this.showNavbar = false;
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.navbar__home
    color: $body-text
    text-decoration: none
    display: flex
    align-items: center
    text-transform: none
    font-variant: normal
    font-weight: 800

.navbar__home__icon
    height: 2.5em
    margin-right: 0.5em

.navbar__menu__item
    color: $body-text

.navbar__menu
    display: flex
    flex-direction: column
    text-decoration: none
    text-transform: lowercase
    font-variant: small-caps
    font-weight: 900

@media (hover: hover)
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
        align-items: center
        height: 1rem
        max-height: 1rem
        transition: max-height 2s linear
        overflow: hidden
        z-index: 1
        margin: 1rem
        padding: 1rem
        &:hover
            height: 100%
            max-height: 1000px
            background: $bubble-bg
            border-radius: 1rem
            .navbar__menu__item
                display: block

    .navbar__menu__item
        margin-top: 0.5rem
        transition: color 0.2s
        &:hover
            color: $navbar-text-hover

    .navbar__home
        transition: color 0.5s
        margin: 2em auto 2em 2em

@media (hover: none), screen and (max-width: 576px)
    .navbar_mob_transition-leave-to.navbar__outer_wrapper,
    .navbar_mob_transition-enter.navbar__outer_wrapper
        background: transparent
        .navbar
            transform: translateX(-100vw)
            transform-origin: 0 50%

    .navbar_mob_transition-leave-active.navbar__outer_wrapper,
    .navbar_mob_transition-enter-active.navbar__outer_wrapper
        transition: background 500ms
        .navbar
            transition: transform 500ms

    .navbar_button
        position: fixed
        left: 10px
        bottom: 10px
        background: $accent-gradient
        width: 6rem
        height: 6rem
        border-radius: 50%
        z-index: 8
        display: flex
        align-items: center
        justify-content: center
        font-size: 3rem

    .navbar__outer_wrapper
        position: fixed
        top: 0
        left: 0
        width: 100%
        // Using height 120% avoids issues when the address bar hides/unhides
        height: 120%
        z-index: 9
        background: $modal-mask

    .navbar
        width: 75%
        height: 100%
        z-index: 9
        background: $bubble-bg
        display: flex
        flex-direction: column
        overflow-y: scroll

    .navbar__home, .navbar__menu__title, .navbar__menu__item
        border-width: 1px
        border-style: solid
        border-image: $accent-gradient 0 1 100% 1

    .navbar__home
        padding: 1rem

    .navbar__wrapper
        display: flex
        flex-direction: column

    .navbar__menu
        margin: 0.75rem 0

    .navbar__menu__title
        padding: 0.75rem 0 0.75rem 1rem

    .navbar__menu__item
        padding: 0.75rem 0 0.75rem 2rem
</style>
