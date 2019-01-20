<template>
<div class="view-container">
    <div class="section has-text-centered section-little">
        <p class="title is-size-4">Je cuisine pour 4 personnes</p>
        <IngredientList :recipe="this.recipe"/>
    </div>
</div>
</template>

<script>
import IngredientList from '../ingredients/IngredientList.vue'

export default {
    components:{
        IngredientList
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
