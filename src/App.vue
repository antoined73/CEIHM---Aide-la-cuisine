<template>
  <div id="app" style="overflow: hidden;">
    <transition
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
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
