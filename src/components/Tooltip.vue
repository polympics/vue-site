<template lang="pug">
.tooltip(@mousemove='moveTooltip')
    slot
    .tooltip__text(ref='tooltip') {{ text }}
</template>

<script>
export default {
    props: ["text"],
    methods: {
        moveTooltip(event) {
            const tooltip = this.$refs["tooltip"];
            tooltip.style.left = event.offsetX + 10 + "px";
            tooltip.style.top = event.offsetY + 10 + "px";
        }
    }
};
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.tooltip
    position: relative
    display: inline-block

.tooltip__text
    position: absolute
    display: none
    background: $bubble-bg
    border: 1px solid $body-bg
    color: $body-text
    font-size: 1rem
    border-radius: 0.5rem
    padding: 0.5rem
    z-index: 9

.tooltip:hover > .tooltip__text
    display: block
</style>
