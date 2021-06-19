<template lang="pug">
main.main: BubbleBox.page_content
    form.create_award_form(@submit.prevent='createAward')
        h1.page_content__header Give {{ team.name }} an Award
        input.text_input#title_input(
            v-model='title', placeholder='Award title')
        ImageUrlInput#image_url_input(v-model='imageUrl')
        input.button(
            type='submit', value='Create'
            :class='{ "button--enabled": title && imageUrl, "button--disabled": !(title && imageUrl) }'
        )
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import ImageUrlInput from "@/components/ImageUrlInput.vue";
import BubbleBox from "@/components/BubbleBox.vue";

@Component({ components: { BubbleBox, ImageUrlInput } })
export default class CreateAward extends BaseView {
    team = {
        name: "Loading..."
    };
    title = "";
    imageUrl = "";

    async created() {
        const canCreate =
            this.userAccount &&
            this.userAccount.permissions &
                polympics.PolympicsPermissions.manageAwards;
        if (!canCreate) {
            this.$router.push({ path: `/team/${this.$route.params.id}` });
        }
        await this.fetchTeam();
    }

    async fetchTeam() {
        const id = this.$route.params.id;
        let team;
        try {
            team = await this.client.getTeam(id);
        } catch (error) {
            if (error.code === 422) {
                await this.$router.push({ path: "/404" });
            }
            return;
        }
        this.team = team;
    }

    async createAward() {
        if (!(title && imageUrl)) return;
        const award = await this.client.createAward({
            team: this.team,
            title: this.title,
            imageUrl: this.imageUrl
        });
        await this.$router.push({ path: `/award/${award.id}` });
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"
@import "../sass/form.sass"

.page_content
    max-width: 600px

.page_content__header
    padding-bottom: 5px
    border-bottom: 3px solid
    border-image: linear-gradient(to right, $accent-1, $accent-2) 1
    display: inline-block
    margin: 0 0 2rem

.create_award_form
    display: flex
    flex-direction: column
    padding: 2rem
    input
        margin: 0.4rem 0
</style>
