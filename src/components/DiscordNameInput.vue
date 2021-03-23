<template lang="pug">
.discord_name_input
    input.text_input(
        placeholder='Wumpus', :value='username',
        @input='$emit("usernameInput", $event.target.value)')
    span.separator #
    input.text_input.discriminator_input(
        type='number', placeholder='0000', min='0', max='9999',
        :value='discriminator',
        @input='$emit("discriminatorInput", $event.target.value)')
</template>

<script>
export default { props: ["username", "discriminator"] };
</script>

<style lang="sass" scoped>
@import "../sass/form.sass"

.separator
    margin: 0 0.5rem

.discriminator_input
    width: 4ch
</style>
