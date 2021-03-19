<template lang="pug">
Redirecting
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Redirecting from "@/components/Redirecting.vue";

@Component({ components: { Redirecting } })
export default class Logout extends Vue {
    mounted() {
        common.logout();
        this.$emit("reloadNavbar");
        this.$router.push({ path: "/" });
    }
}
</script>
