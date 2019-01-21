<template>
  <a class="button is-radiusless is-medium is-primary is-paddingless" @click="homeBtnClicked()">
    <span class="icon is-small is-marginless is-paddingless move-right">
      <font-awesome-icon icon="chevron-left"/>
    </span>
    <span class="icon is-small is-marginless is-paddingless move-left">
      <font-awesome-icon icon="home"/>
    </span>
  </a>
</template>

<script>
export default {
  methods: {
    homeBtnClicked() {
      this.$follower.stopFollowingRecipe();
      this.$follower.chronoLaunched = false;

      this.$follower.chronoAvailable = false;
    }
  }
};
</script>

<style scoped>
.move-right {
  position: relative;
  left: 2px;
  top: 1px;
  transform: scale(0.5);
}

.move-left {
  position: relative;
  right: 8px;
}
</style>