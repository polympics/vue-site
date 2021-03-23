<template lang="pug">
main.main.main--centered
    section.page_message
        i.fas.fa-search.page_message__icon
        h1.page_message__header 404 Error
        p.page_message__description Couldn't find that page.
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";

@Component
export default class PageNotFound extends BaseView {}
</script>

<style lang="sass" scoped>
@import "../sass/message.sass"
</style>
