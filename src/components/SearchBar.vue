<template lang="pug">
BubbleBox.search_bar
    input.text_input.search_bar__input(
        placeholder='Start searching...',
        type='search',
        :value='value',
        @input='$emit("input", $event.target.value)'
    )
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";
import BubbleBox from "./BubbleBox";

@Component({ components: { BubbleBox } })
export default class SearchBar extends Vue {
    @Prop()
    value;
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"
@import "../sass/form.sass"

.search_bar
    padding: 2rem

.search_bar__input
    width: 100%
    border-bottom: 1px solid $body-text
    font-size: 1.1rem
    padding-bottom: 5px
    transition: font-size 50ms
    outline: none
    &:focus
        font-size: 1.3rem
</style>
