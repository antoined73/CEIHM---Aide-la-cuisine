<template>
<div class="view-container">
    <RecipeHomeHeader :recipe="this.recipe"/>
    <div class="section has-text-centered has-background-white-bis section-little">
        <p class="title is-size-4">Je cuisine pour 4 personnes</p>
        <IngredientList :recipe="this.recipe"/>
    </div>
</div>
</template>

<script>
import RecipeHomeHeader from '../headers/RecipeHomeHeader.vue'
import IngredientList from '../ingredients/IngredientList.vue'

export default {
    components:{
        IngredientList,
        RecipeHomeHeader
    },
    data(){
        return {
            recipe : Object
        }
    },
    created(){
        this.recipe = this.$store.getters.getRecipeById(this.$route.params.recipeID);
    }
}
</script>

<style>
.section-little{
    padding: 0.8rem 0.8rem;
}
</style>
