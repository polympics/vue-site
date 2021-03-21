<template lang="pug">
Redirecting
</template>

<script>
import { Component } from "vue-property-decorator";
import BaseView from "./BaseView";
import Redirecting from "@/components/Redirecting.vue";

@Component({ components: { Redirecting } })
export default class Logout extends BaseView {
    mounted() {
        common.logout();
        this.$emit("newCredentials");
        this.$router.push({ path: "/" });
    }
}
</script>
