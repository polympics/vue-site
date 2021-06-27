<template lang="pug">
main.main
    article(v-html='content', v-emoji)
</template>

<script>
import { getWikiPage } from "@/js/common";
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";

@Component
export default class WikiPage extends BaseView {
    content = "";

    async created() {
        const path = (this.$route.params.wikiPath || "index").toLowerCase();
        for (const file of this.wikiIndex) {
            if (file.path === path) {
                this.content = await getWikiPage(file);
                return;
            }
        }
        await this.$router.push({ path: "/404" });
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/article.sass"
</style>
