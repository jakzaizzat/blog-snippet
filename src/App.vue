<template>
  <div id="app" class="font-sans">
    <router-view></router-view>
    <portal-target name="modal"/>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
