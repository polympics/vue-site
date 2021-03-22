<template lang="pug">
.bubble(v-else)
    slot
</template>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.bubble
    margin: 1rem auto
    background: $bubble-bg
    border-radius: 2rem
    width: min(max(60%, 1000px), 100%)
    box-sizing: border-box
    &:first-of-type
        margin-top: 2rem

@media (max-width: 1000px)
    .bubble:not(.page_content)
        margin: 0
        border-radius: 0
        background: transparent
        border-width: 5px
        border-style: solid
        border-image: $h-accent-gradient 100% 5 100% 5
        &:not(:last-of-type)
            border-bottom-width: 2rem

@media (max-width: 600px)
    .bubble.page_content
        margin: 0
        border-radius: 0
        background: transparent
        border-width: 5px
        border-style: solid
        border-image: $h-accent-gradient 100% 5 100% 5
        &:not(:last-of-type)
            border-bottom-width: 2rem
</style>
