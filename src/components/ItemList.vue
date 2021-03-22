<template lang="pug">
BubbleBox(:key='key')
    table.item_list
        tr.item_list__row(v-for='item in items')
            slot(v-bind:item='item')
        tr(v-if='!items.length')
            td.item_list_placeholder There's nothing here!
</template>

<script>
import debounce from "lodash.debounce";
import { Component, Prop, Vue } from "vue-property-decorator";
import BubbleBox from "./BubbleBox";

@Component({ components: { BubbleBox } })
export default class ItemList extends Vue {
    items = [];
    finished = false;
    currentlyFetching = false;
    key = 0;
    @Prop()
    paginator;

    mounted() {
        this.fetchItems();
        window.addEventListener("scroll", this.fetchItems);
    }

    destroyed() {
        window.removeEventListener("scroll", this.fetchItems);
    }

    async _fetchItems() {
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
        this.key += 1;
    }

    fetchItems = debounce(this._fetchItems, 250);
}
</script>

<style lang="sass">
@import "../sass/_variables.sass"

.item_list
    padding: 1rem 2rem
    border-collapse: separate
    border-spacing: 0 1rem
    width: 100%
    a
        color: $body-link

.item_list_placeholder
    font-weight: 800
    text-align: center

.item_list__row
    padding: 1rem 0

.item_list__row__main
    width: 100%
    padding-left: 1rem
    word-wrap: break-word
    max-width: 50vw

.item_list__row__extra
    white-space: nowrap

@media (max-width: 800px)
    .item_list
        padding: 0.5rem
</style>
