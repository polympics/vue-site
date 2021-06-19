<template lang="pug">
router-link.award(:to='`/award/${award.id}`', :class='{ "award--big": big }')
    Tooltip(:text='award.title')
        img.award__icon(
            :src='award.imageUrl',
            :alt='`Award icon for ${award.title}`')
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import Tooltip from "./Tooltip";

@Component({ components: { Tooltip } })
export default class AwardIcon extends Vue {
    @Prop()
    award;
    @Prop({ default: false })
    big;
}
</script>

<style lang="sass" scoped>
.award
    margin: 0 0.2rem

.award__icon
    width: 1.5rem
    height: 1.5rem

.award--big
    margin: 0 0.5rem
    .award__icon
        width: 2rem
        height: 2rem
</style>
