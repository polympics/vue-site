<template lang="pug">
main.main.main--centered(v-emoji)
    section.page_message
        img.page_message__icon(
            src='/img/logo.png', alt='PolyChampions Logo')
        h1.page_message__header Polympics
        p.page_message__slogan A worldwide event to bring the Polytopia community together for a summer of fun!
    LinkCard(link='/login', title='Sign up')
        | Put your name down to represent your country, city or state in a summer of competetive Polytopia fun!
    LinkCard(link='/about', title='Read all about it')
        | Read and understand the nitty-gritty details behind the event.
    LinkCard(link='/discord', title='Join the community')
        | Join our Discord server, where you can connect with other players and ask all the questions you need to about the event.
    LinkCard(link='/events', title='See the events')
        | We have an event to suit everyone and the Polympics. View the full list here.
</template>

<script>
import { Component, Prop } from "vue-property-decorator";
import BaseView from "./BaseView";
import LinkCard from "@/components/LinkCard.vue";

@Component({ components: { LinkCard } })
export default class Index extends BaseView {
    @Prop()
    userAccount;
}
</script>

<style lang="sass" scoped>
@import "../sass/message.sass"
</style>
