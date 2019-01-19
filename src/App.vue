<template>
  <div id="app" style="overflow: hidden;">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './src/styles/global.scss';
</style>
