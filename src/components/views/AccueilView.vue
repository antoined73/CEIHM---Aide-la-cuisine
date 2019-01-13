<template>
    <div>
        <HomeHeader/>
        <div class="section">
            <RecipeList/>
        </div>
    </div>
</template>

<script>
import HomeHeader from '../headers/HomeHeader.vue'
import RecipeList from '../RecipeList.vue'

export default {
  name: 'AccueilView',
  components: {
      RecipeList,
      HomeHeader
  }
}
</script>

<style lang="scss">
$color: red;
.test{
    color: $color;
}
</style>
