<template lang="pug">
.discord_name_input
    input.text_input(
        placeholder='Wumpus', :value='username',
        @input='$emit("usernameInput", $event.target.value)')
    span.separator #
    input.text_input.discriminator_input(
        type='number', placeholder='0000', min='0', max='9999',
        v-model='paddedDiscriminator', @input='onDiscriminatorInput')
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component()
export default class EditableText extends Vue {
    @Prop()
    username;
    @Prop()
    discriminator;

    paddedDiscriminator = "0000";

    created() {
        this.paddedDiscriminator = this.discriminator.toString();
        this.padDiscriminator();
    }

    padDiscriminator() {
        this.paddedDiscriminator = this.paddedDiscriminator
            .toString()
            .padStart(4, "0")
            .slice(-4);
    }

    onDiscriminatorInput() {
        this.padDiscriminator();
        this.$emit("discriminatorInput", this.paddedDiscriminator);
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/form.sass"

.separator
    margin: 0 0.5rem

.discriminator_input
    width: 4ch
</style>
