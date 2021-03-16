<template lang="pug">
main(class='main main--centered')
  section(class='page_intro page_intro--centered')
    i(class='fas fa-search page_intro__icon')
    h1(class='page_intro__header') 404 Error
    p(class='page_intro__description') Couldn't find that page.
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageNotFound extends Vue {}
</script>
