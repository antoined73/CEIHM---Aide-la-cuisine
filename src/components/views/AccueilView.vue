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
import RecipeList from '../recipes/RecipeList.vue'

export default {
  name: 'AccueilView',
  components: {
      RecipeList,
      HomeHeader
  }
}
</script>