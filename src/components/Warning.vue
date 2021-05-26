<template lang="pug">
div.warning
    h4.warning__title Warning
    slot(v-emoji)
</template>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.warning
    border-radius: 5px
    padding: 1rem
    border-left: 5px solid $red-no
    background: transparentize($red-no, 0.8%)
    max-width: 80%

.warning__title
    margin: 0 0 0.5rem
</style>
