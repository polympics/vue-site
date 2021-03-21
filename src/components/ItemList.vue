<template lang="pug">
table.item_list
    tr.item_list__row(v-for='item in items')
        slot(v-bind:item='item')
    tr.item_list_placeholder(v-if='!items.length')
        td There's nothing here!
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ItemList extends Vue {
    items = [];
    finished = false;
    currentlyFetching = false;
    @Prop()
    paginator;

    mounted() {
        this.fetchItems();
        window.addEventListener("scroll", this.fetchItems);
    }

    destroyed() {
        window.removeEventListener("scroll", this.fetchItems);
    }

    async fetchItems() {
        if (!this.paginator) return;
        if (this.finished || this.currentlyFetching) return;
        this.currentlyFetching = true;
        // FIXME: Only fetch if we're near the end.
        const items = await this.paginator.nextPage();
        if (!items.length) {
            this.finished = true;
            return;
        }
        this.currentlyFetching = false;
        this.items.push(...items);
    }
}
</script>

<style lang="sass">
@import "../sass/_variables.sass"

.item_list
    background: $bubble-bg
    width: calc(100% - 4rem)
    margin: 1rem 2rem
    padding: 1rem 2rem
    border-radius: 2rem
    border-collapse: separate
    border-spacing: 0 1rem
    a
        color: $body-link

.item_list_placeholder
    background: $bubble-bg
    width: calc(100% - 8rem)
    margin: 2rem
    padding: 2rem
    border-radius: 2rem
    font-weight: 800
    text-align: center

.item_list__row
    padding: 1rem 0

.item_list__row__main
    width: 100%
    padding-left: 1rem

.item_list__row__extra
    white-space: nowrap

.item_list__row__image > img
    width: 48px
    border-radius: 50%
</style>
