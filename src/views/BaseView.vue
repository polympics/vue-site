<template lang="pug"></template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class BaseView extends Vue {
    @Prop()
    userAccount;
    @Prop()
    client;
    @Prop()
    wikiIndex;
}
</script>
