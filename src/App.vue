<template>
  <div class="view-all">
    <MyNav />
    <router-view />
  </div>
</template>

<script setup>
import MyNav from "@/components/MyNav.vue";
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.view-all {
  background-color: #dfdfdf;
  min-height: 100vh;
}
</style>
