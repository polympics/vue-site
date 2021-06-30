<template lang="pug">
.alert
    i.fas.fa-times.alert__close(@click='$emit("closeAlert")')
    slot
</template>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.alert
    position: fixed
    bottom: 1rem
    right: 1rem
    padding: 1rem
    width: min(max(450px, 33vw), calc(100vw - 2rem))
    background: $bubble-bg
    border-image: $accent-gradient 5 5
    border-width: 5px
    border-style: solid

.alert__close
    float: right
    cursor: pointer
</style>
