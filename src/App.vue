<template lang="pug">
div(class='body')
    NavBar(:account='userAccount', :wiki='wikiIndex')
    transition(name='slide_transition', mode='out-in')
        router-view(
            @newCredentials='getAccount', :key='$route.path',
            :client='client', :userAccount='userAccount',
            :wikiIndex='wikiIndex', v-if='client')
        main.main.main--centered(v-else)
          section.page_message
            i.fas.fa-spinner.fa-spin.fa-5x
    Footer
    Alert(@closeAlert='dismissJoinAlert', v-if='showJoinAlert')
        span Please make sure you've joined !{' '}
        a(href='https://discord.gg/hw8ZxnCQfw?utm_source=polytopia.fun')
            | the Discord server
        span !{' '} or you won't be able to take part.
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Alert from "@/components/Alert.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import {
    getCookie,
    setCookie,
    getClient,
    getWikiIndex,
    logout
} from "./js/common.js";

@Component({ components: { Alert, NavBar, Footer } })
export default class App extends Vue {
    client = null;
    userAccount = null;
    wikiIndex = [];
    showJoinAlert = false;

    mounted() {
        this.showJoinAlert = getCookie("showJoinAlert") !== "false";
        this.getData();
        // Re-fetch data every 5 minutes in case it changes elsewhere.
        window.setInterval(this.getData, 1000 * 60 * 5);
    }

    dismissJoinAlert() {
        this.showJoinAlert = false;
        setCookie("showJoinAlert", "false");
    }

    async getData() {
        await this.getAccount();
        this.wikiIndex = await getWikiIndex();
    }

    async getAccount() {
        let client = getClient();
        if (client.getSelf) {
            try {
                this.userAccount = await client.getSelf();
            } catch (error) {
                logout();
                client = getClient();
                this.userAccount = null;
            }
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
@import "./sass/_variables.sass"
@import "./sass/message.sass"

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
    width: 100%
    min-height: calc(100vh - 8.5rem)

.main--centered
    align-items: center

.main--full
    align-items: stretch

.main__title
    font-size: 3rem
    text-align: center

a, a:visited
    color: $body-link

.emoji
    height: 1em
    vertical-align: -12.5%
</style>
