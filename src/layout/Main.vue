<template>
    <div class="main">
        <Nav/>
        <div class="max-w-2xl py-8 mx-auto">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav";
    export default {
        name: "Main",
        components: {
            Nav
        }
    }
</script>

<style scoped>

</style>
