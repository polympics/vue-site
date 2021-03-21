<template lang="pug">
div(class='body')
    NavBar(:account='userAccount')
    transition(name='slide_transition', mode='out-in')
        router-view(
            @newCredentials='getAccount', :key='$route.path',
            :client='client', :userAccount='userAccount', v-if='client')
        main.main.main--centered(v-else)
          section.page_intro.page_intro--centered
            i.fas.fa-spinner.fa-spin.fa-5x
    Footer
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

@Component({ components: { NavBar, Footer } })
export default class App extends Vue {
    client = null;
    userAccount = null;

    mounted() {
        this.getAccount();
        // Re-fetch the account every 5 minutes in case it changes elsewhere.
        window.setInterval(this.getAccount, 1000 * 60 * 5);
    }

    async getAccount() {
        const client = common.getClient(process.env.VUE_APP_API_URL);
        if (client.getSelf) {
            this.userAccount = await client.getSelf();
        } else {
            this.userAccount = null;
        }
        // Assign client after assigned userAccount since the view gets
        // reloaded when we assign client.
        this.client = client;
    }
}
</script>

<style lang="sass">
@import './sass/_variables.sass'

.slide_transition-leave
    left: 0
    position: absolute

.slide_transition-leave-active
    transition: left 0.25s

.slide_transition-leave-to
    position: absolute
    left: 100vw

.slide_transition-enter
    left: -100vw
    position: absolute

.slide_transition-enter-active
    transition: left 0.25s

.slide_transition-enter-to
    position: absolute
    left: 0

body
    background: $body-bg
    color: $body-text
    margin: 0
    font-family: $theme-font
    overflow-x: hidden

.main
    display: flex
    flex-direction: column
    align-items: flex-start
    position: relative
    width: calc(100vw - 20px)
    min-height: calc(100vh - 8.5rem)

.page_intro
    display: flex
    flex-direction: column
    align-items: flex-start
    margin: 2rem

.main--centered
    align-items: center

.main--full
    align-items: stretch

.main__title
    font-size: 3rem
    text-align: center

.page_intro--centered
    align-items: center
    margin-top: 7rem

    .page_intro__header
        border: 0

@media only screen and (max-width: 470px)
    .page_intro--centered
        margin-top: 2rem

.page_intro__icon, .page_intro__icon::before
    height: 6rem
    font-size: 6rem

.page_intro__header
    margin: 2rem 0 0 0
    font-size: 3rem
    font-weight: 900

.page_intro__subheader
    margin: 1.7rem 0
    font-size: 2rem
    font-weight: 900

.page_intro__description
    margin: 0
    text-align: center
    font-size: 1.2rem
    font-weight: 800

.page_intro__header, .page_intro__subheader, .page_content__header
    padding-bottom: 5px
    margin-bottom: 10px
    border-bottom: 3px solid
    border-image: linear-gradient(to right, $accent-1, $accent-2) 1
    display: inline-block

@media only screen and (max-width: 420px)
    .page_intro__header
        font-size: 2.5rem

.page_intro__slogan
    margin: 0
    text-transform: lowercase
    font-variant: small-caps
    text-align: center
    font-weight: 800

.page_content
    margin: 0 1rem 1rem 2rem
    font-weight: 600
    max-width: unquote("max(50vw, 600px)")

.page_content__p
    margin: 0
    margin-bottom: 1rem
    a, a:visited
        color: $body-link

.page_image
    width: unquote("calc(max(50vw, 360px) - 4rem)")
    margin: 2rem

@media only screen and (min-width: 750px)
    .page_image
        float: right
        position: absolute
        right: 2rem
        top: 2rem
        width: 20vw

.text_input
    -moz-appearance: textfield
    margin: 0
    border: 0
    background: transparent
    font-family: inherit
    font-size: inherit
    outline: none
    color: $body-text
    border-bottom: 1px solid $body-text
    font-size: 1.1rem
    padding-bottom: 5px
    transition: font-size 50ms
    &:focus
        font-size: 1.3rem

.input::-webkit-outer-spin-button, input::-webkit-inner-spin-button
    -webkit-appearance: none

.long_text_input
    width: 100%

.button
    border: 0
    font-family: inherit
    font-size: inherit
    font-weight: inherit
    color: inherit
    border-radius: 0.5rem
    padding: 1rem
    box-shadow: 2px 2px 10px 2px $body-shadow

.button--enabled
    background: $accent-gradient
    cursor: pointer
    transition: transform 50ms
    &:hover
        transform: scale(1.2)

.button--disabled
    background: $grey-accent-gradient
    cursor: default

.button--danger
    background: $red-no

.button--danger--disabled
    background: scale-color($red-no, $saturation: -50%)
</style>
