<template lang="pug">
input.text_input(
    :placeholder='placeholder',
    v-model='editedValue',
    @input='$emit("input", $event.target.value)',
    @focusout='makeUnEditable'
    v-if='editable',
    ref='editableTextInput'
)
span.text_uneditable(@click='makeEditable', v-else, v-emoji)
    | {{ editedValue }}
    Tooltip(text='Edit')
        i.fas.fa-pencil-alt.text_uneditable__icon
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import Tooltip from "./Tooltip";

@Component({ components: { Tooltip } })
export default class EditableText extends Vue {
    @Prop()
    value;
    @Prop({ default: "Type something..." })
    placeholder;

    editable = false;
    editedValue = "";

    created() {
        this.editedValue = this.value;
    }

    makeEditable() {
        this.editable = true;
        this.$nextTick(() => {
            this.$refs.editableTextInput.focus();
        });
    }

    makeUnEditable() {
        this.editable = false;
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/form.sass"

.text_input
    font-size: inherit
    text-align: inherit
    font-weight: inherit

.text_uneditable
    display: inline-block
    padding-bottom: 7px
    cursor: text
    &:hover > .text_uneditable__icon
        animation: wiggle 0.5s

.text_uneditable__icon
    font-size: 0.4em
    vertical-align: middle
    margin-left: 0.5em
    cursor: pointer

@keyframes wiggle
    0%
        transform: rotate(0deg)
    10%
        transform: rotate(-5deg)
    30%
        transform: rotate(5deg)
    50%
        transform: rotate(-5deg)
    70%
        transform: rotate(5deg)
    80%
        transform: rotate(0deg)
</style>
