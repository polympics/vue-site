<template lang="pug">
input.text_input.long_text_input(
    type='url',
    pattern='https?://.*',
    placeholder='Image URL',
    :value='value',
    @input='$emit("input", $event.target.value)',
    onClick='this.select();'
)
</template>

<script>
export default { props: ["value"] };
</script>

<style lang="sass" scoped>
@import "../sass/form.sass"
</style>
