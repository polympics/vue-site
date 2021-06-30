<template lang="pug">
main.main.main--full
    BubbleBox.award
        img.award__icon(:src='award.imageUrl', alt='Award icon')
        h1
            EditableText(
                placeholder='Award Title', :value='award.title',
                v-if='canManageAward', @input='updateTitle')
            span(v-else) {{ award.title }}
        .award__icon_edit_wrapper
            span.award__icon_edit_title Icon URL:
            ImageUrlInput(
                :value='award.imageUrl', @input='updateImageUrl',
                v-if='canManageAward')
        h2 Assign to Accounts
        AccountSelector(
            :client='client',
            :exclude='award.awardees.map(account => account.id)',
            :key='listKey',
            @input='giveToAccount',
            v-if='canManageAward')
        button.button.button--danger.button--enabled.award__delete_button(
            v-if='canManageAward',
            @click='showDeleteModal = true') Delete Award
    ItemList.awardee_list(
            :data='award.awardees',
            :key='listKey',
            title='Awardees')
        template(v-slot:default='data')
            AccountRow(
                :account='data.item',
                :showTeams='true',
                :showKickButtons='canManageAward',
                @kickMember='takeFromAccount')
    Modal(:show='showDeleteModal').delete_modal
        h2 Delete award?
        p
            | You cannot undo this action. Make sure you're certain you want
            | to delete award "{{ award.title }}".
        button.button.button--danger.button--enabled(@click='deleteAward')
            | Delete
        button.button.button--enabled(
            @click='showDeleteModal = false'
        ) Cancel
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import AccountRow from "@/components/AccountRow.vue";
import BubbleBox from "@/components/BubbleBox.vue";
import EditableText from "@/components/EditableText.vue";
import ImageUrlInput from "@/components/ImageUrlInput.vue";
import ItemList from "@/components/ItemList.vue";
import Modal from "@/components/Modal.vue";
import AccountSelector from "@/components/AccountSelector.vue";

@Component({
    components: {
        AccountRow,
        BubbleBox,
        EditableText,
        ImageUrlInput,
        ItemList,
        Modal,
        AccountSelector
    }
})
export default class Award extends BaseView {
    award = {
        title: "Loading...",
        imageUrl: null,
        awardees: [],
        team: {
            name: "Loading..."
        }
    };
    canManageAward = false;
    showDeleteModal = false;
    listKey = 0;

    created() {
        this.fetchAward();
    }

    async fetchAward() {
        const id = this.$route.params.id;
        try {
            this.award = await this.client.getAward(id);
        } catch (error) {
            if (error.code === 422) {
                await this.$router.push({ path: "/404" });
            }
            return;
        }
        if (this.userAccount) {
            this.canManageAward =
                this.userAccount.permissions &
                polympics.PolympicsPermissions.manageAwards;
        }
        this.listKey += 1;
    }

    async updateTitle(newTitle) {
        await this.client.updateAward(this.award, { title: newTitle });
        this.award.title = newTitle;
    }

    async updateImageUrl(newUrl) {
        await this.client.updateAward(this.award, { imageUrl: newUrl });
        this.award.imageUrl = newUrl;
    }

    async deleteAward() {
        await this.client.deleteAward(this.award);
        await this.$router.push({ path: `/team/${this.award.team.id}` });
    }

    async takeFromAccount(account) {
        await this.client.takeAward(this.award, account);
        await this.fetchAward();
    }

    async giveToAccount(account) {
        await this.client.giveAward(this.award, account);
        await this.fetchAward();
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/form.sass"

.award
    padding: 2rem

.award__icon
    height: 10rem

.award__icon_edit_wrapper
    display: flex
    align-items: center

.award__icon_edit_title
    white-space: nowrap
    margin-right: 0.5rem

.award__delete_button
    margin-top: 2rem
</style>
