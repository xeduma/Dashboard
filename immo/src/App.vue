<template>


<navigation></navigation>
    <router-view></router-view>


</template>

<script>

import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {

    Navigation,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
