<template lang="pug">
.search_bar
    input.search_bar__input(
        placeholder='Start searching...',
        :value='value',
        @input='$emit("input", $event.target.value)'
    )
</template>

<script>
export default { props: ["value"] };
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.search_bar
    background: $bubble-bg
    width: auto
    margin: 1rem 2rem
    padding: 2rem
    border-radius: 2rem

.search_bar__input
    border: 0
    background: transparent
    color: $body-text
    width: 100%
    border-bottom: 1px solid $body-text
    font-size: 1.1rem
    font-family: inherit
    padding-bottom: 5px
    transition: font-size 50ms
    outline: none
    &:focus
        font-size: 1.3rem
</style>
