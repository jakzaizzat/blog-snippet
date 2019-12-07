<template>
    <div class="max-w-2xl mx-auto py-16">
        <p>Is it Idle? - <span class="font-bold">{{isIdle}}</span></p>
        <ModalIdle v-if="isIdle"/>
    </div>
</template>

<script>
    import ModalIdle from "@/components/ModalIdle";
    export default {
        components: {
            ModalIdle
        },
        computed: {
            isIdle() {
                return this.$store.state.idleVue.isIdle
            }
        }
    }
</script>

<style scoped>

</style>
