<template lang="pug">
footer.footer(v-emoji)
    | Polympics website, by Artemis.
    br
    br
    | This site is still in beta, so expect to see links that don't lead anywhere and placeholder content.
    br
    br
    a(href='https://discord.gg/HYnQQdJFeP') Join now on Discord!
</template>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.footer
    margin-top: 2rem
    background: $footer-bg
    padding: 3rem
    text-align: center

.footer a
    color: $footer-link
</style>
