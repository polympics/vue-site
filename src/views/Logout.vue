<template lang="pug">
Redirecting
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import Redirecting from "@/components/Redirecting.vue";
import { logout } from "@/js/common.js";

@Component({ components: { Redirecting } })
export default class Logout extends BaseView {
    mounted() {
        logout();
        this.$emit("newCredentials");
        this.$router.push({ path: "/" });
    }
}
</script>
