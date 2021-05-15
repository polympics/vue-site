<template lang="pug">
.permissions_input
    label.permissions_input__flag(
            v-for='input in inputs', :key='input.id'
            :for='input.id',
            :class='{ "permissions_input__flag--disabled": !input.enabled }')
        input(
            type='checkbox', :id='input.id',
            @change='updateFlag(input.flag, $event.target.checked)'
            :disabled='!input.enabled', :checked='input.value')
        span {{ input.prettyName }}
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";

const flags = [
    "managePermissions",
    "manageAccountTeams",
    "manageAccountDetails",
    "manageTeams",
    "manageOwnTeam"
];

function prettifyCamelCase(camelCase) {
    const result = camelCase.replace(/([a-z])([A-Z])/gm, "$1 $2");
    return result.charAt(0).toUpperCase() + result.substr(1);
}

@Component()
export default class PermissionsInput extends Vue {
    @Prop()
    isOwnAccount;
    @Prop()
    value;
    @Prop()
    userPermissions;

    get inputs() {
        const inputs = [];
        for (const flagName of flags) {
            const flag = polympics.PolympicsPermissions[flagName];
            let enabled = this.userPermissions & flag;
            if (this.isOwnAccount) enabled = false;
            const id = `permissions__${flagName}`;
            const prettyName = prettifyCamelCase(flagName);
            if (!enabled && flagName === "manageOwnTeam") {
                if (
                    this.userPermissions &
                    polympics.PolympicsPermissions.manageTeams
                ) {
                    enabled = true;
                }
            }
            inputs.push({
                enabled: enabled,
                id: id,
                prettyName: prettyName,
                flag: flag,
                value: this.value & flag ? true : false
            });
        }
        return inputs;
    }

    updateFlag(flag, value) {
        const update = {};
        if (value) update.grant = flag;
        else update.revoke = flag;
        this.$emit("input", update);
    }
}
</script>

<style lang="sass" scoped>
@import "../sass/_variables.sass"

.permissions_input
    display: flex
    flex-direction: column

.permissions_input__flag
    cursor: pointer
    user-select: none
    input
        display: none
    span::before
        font-family: "Font Awesome 5 Free"
        font-weight: 900
        display: inline-block
        width: 1em
        text-align: center
        padding: 3px
        border-radius: 3px
        margin: 3px
        content: "\f00d"
        background: $red-no
    input:checked + span::before
        content: "\f00c"
        background: $green-yes

.permissions_input__flag--disabled
    cursor: default
    span
        color: $disabled-text
    span::before
        background: scale-color($red-no, $saturation: -50%)
    input:checked + span::before
        background: scale-color($green-yes, $saturation: -50%)
</style>
