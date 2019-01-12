<template>
    <div class="section">
        <RecipeList/>
    </div>
</template>

<script>
import RecipeList from '../RecipeList.vue'

export default {
  name: 'AccueilView',
  components: {
      RecipeList
  }
}
</script>

<style lang="scss">
$color: red;
.test{
    color: $color;
}
</style>
