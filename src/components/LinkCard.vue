<template lang="pug">
router-link.card_item(:to='link')
    .card_item__content_wrapper
        h2.card_item__header {{ title }}
        p.card_item__content
            slot
    i.fas.fa-arrow-right.card_item__arrow
</template>

<script>
export default {
    props: ["link", "title"]
};
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.card_item
    border-radius: 1rem
    background: $accent-gradient
    padding: 2rem
    margin: 1rem
    color: $body-text
    width: unquote("min(800px, calc(100vw - 10rem))")
    transition: transform 0.2s
    box-shadow: 0 0 20px $body-shadow
    text-decoration: none
    display: flex
    align-items: center
    &:hover
        transform: scale(1.01, 1.01)

.card_item__content_wrapper
    margin-right: 1rem

.card_item__header
    margin-top: 0
    margin-bottom: 1rem
    font-weight: 800

.card_item__content
    margin: 0
    font-weight: 600

.card_item__arrow
    float: right
    font-size: 3rem
    margin-left: auto
</style>
