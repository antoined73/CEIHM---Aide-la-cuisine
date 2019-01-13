<template>
    <div class="notification">
        <p class="title is-size-4">Je cuisine pour 4 personnes</p>
        <IngredientList :recipe="this.recipe"/>
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

</style>
