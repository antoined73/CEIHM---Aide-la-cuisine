<template>
    <div class="notification">
        <p class="title is-size-4">Étape {{this.recipeStep.number}}</p>
        <p class="is-size-8">{{this.recipeStep.description}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            recipeStep : Object
        }
    },
    created(){
        this.recipeStep = this.$store.getters.getRecipeStepOfRecipe(this.$route.params.recipeID, this.$route.params.stepID);
    }
}
</script>

<style>

</style>
