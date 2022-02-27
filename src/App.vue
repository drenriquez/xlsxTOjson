<template>
  <div id="app">
    <img alt="from Xlsx to JSON" src="./assets/logo.png">
    <First/>
  </div>
</template>

<script>
import First from './components/First.vue'

export default {
  name: 'App',
  components: {
    First
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(187, 189, 184);
}
*{
  background-color: rgb(187, 189, 184);
}
</style>
