<template>
    <div v-if="recipe">
        <p>{{this.recipe.name}}</p>
    </div>
    <div v-else>
        <p>The recipe you are searching for doesn't exist or is no longer available :(</p>
    </div>
</template>

<script>
export default {
    name: 'RecipeView',
    data(){
        return {
            recipe: Object
        }
    },
    created(){
        this.recipe = this.$store.getters.getRecipeById(this.$route.params.id);
    }
}
</script>

<style>

</style>
