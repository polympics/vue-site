<template lang="pug">
.navbar
    router-link.navbar__title(to='/')
        img.navbar__title__icon(
            src='/img/icons/icon-192.png'
            alt='Polympics Logo')
        .navbar__title__text Polympics
    .navbar__menus
        .navbar__menu(v-for='menu in links')
            .navbar__menu__title {{ menu.title }}
            .navbar__menu__list
                router-link.navbar__menu__item(
                    v-for='item in menu.links'
                    :key='item.path'
                    :to='item.path') {{ item.title }}
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
        this.mobile = window.matchMedia(
            "(hover: none), screen and (max-width: 576px)"
        ).matches;
        this.showNavbar = !this.mobile;
    }

    get teamLinks() {
        const links = [{ title: "All Teams", path: "/teams" }];
        if (this.account && this.account.team) {
            links.push({
                title: "My Team",
                path: `/team/${this.account.team.id}`
            });
        }
        if (
            this.account &&
            this.account.permissions &
                polympics.PolympicsPermissions.manageTeams
        ) {
            links.push({ title: "Create Team", path: "/teams/create" });
        }
        return links;
    }

    get memberLinks() {
        const links = [{ title: "All Members", path: "/accounts" }];
        if (this.account) {
            links.push({ title: "Me", path: `/account/${this.account.id}` });
            links.push({ title: "Logout", path: "/logout" });
        } else {
            links.push({ title: "Login or Signup", path: "/login" });
        }
        return links;
    }

    get wikiLinks() {
        const links = [];
        for (const file of this.wiki) {
            if (file.navbar) {
                links.push({ title: file.title, path: `/wiki/${file.path}` });
            }
        }
        return links;
    }

    get links() {
        return [
            { title: "Teams", links: this.teamLinks },
            { title: "Members", links: this.memberLinks },
            { title: "Wiki", links: this.wikiLinks }
        ];
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

.navbar
    font-weight: 900
    font-variant: small-caps
    text-transform: lowercase

.navbar__title
    display: flex
    align-items: center

.navbar__title__icon
    width: 3rem
    margin-right: 0.5rem

.navbar__menu__item, .navbar__title
    color: $body-text
    transition: color linear 0.1s
    &:hover
        color: $navbar-text-hover

/**
    Use a width check too because Chrome for Android (sometimes?)
    reports hover: hover.
@media only screen and (max-width: 576px), (hover: none)

@media screen and (min-width: 577px) and (hover: hover)
    .navbar
        margin: 1rem
        display: flex
        align-items: flex-start
        justify-content: space-between
        height: 3rem

    .navbar__menus
        display: flex
        align-items: flex-start
        justify-content: space-between

    .navbar__menu
        display: flex
        flex-direction: column
        align-items: center
        padding: 1rem
        border-radius: 1rem
        margin: 0 0.5rem
        transition: background linear 0.1s
        z-index: 8
        &:hover
            background: $bubble-bg
            .navbar__menu__list
                transform: scaleY(1)

    .navbar__menu__list
        display: flex
        flex-direction: column
        align-items: center
        transform: scaleY(0)
        transform-origin: 0 0
        transition: transform linear 0.1s
        &:hover
            transform: none

    .navbar__menu__item
        margin-top: 0.2rem
</style>
