<template>
    <div>
        <transition name="fade">
        <ModalIdle v-if="isShow" @close="toggle"/>
        </transition>
            <button @click.prevent="toggle">Press</button>
    </div>
</template>

<script>
    import ModalIdle from "../components/ModalIdle";
    export default {
        name: "Animation",
        components: {
            ModalIdle
        },
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            toggle() {
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.25s ease-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
