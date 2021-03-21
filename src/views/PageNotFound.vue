<template lang="pug">
main.main.main--centered
    section.page_intro.page_intro--centered
        i.fas.fa-search.page_intro__icon
        h1.page_intro__header 404 Error
        p.page_intro__description Couldn't find that page.
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";

@Component
export default class PageNotFound extends BaseView {}
</script>
