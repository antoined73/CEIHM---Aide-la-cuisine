<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <gest-wrapper-library/>
    <gest-p-o-c/>
  </div>
</template>

<script>
import GestWrapperLibrary from './components/GestWrapperLibrary.vue'
import GestPOC from './components/GestPOC.vue'

export default {
  name: 'app',
  props: {
    direction: {
      type: String,
      default: 'null'
    }
  },
  components: {
    GestWrapperLibrary,
    GestPOC
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
