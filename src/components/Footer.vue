<template lang="pug">
footer.footer(v-emoji)
    | Polympics website by Artemis with help from Legorooj. Wiki content by Espark, graphics by Vorce, Espark, THomez and Artemis.
    br
    br
    a(href='https://discord.gg/hw8ZxnCQfw?utm_source=polytopia.fun') Join now on Discord!
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
