<template>
    <div v-if="recipe">
        <p>{{this.recipe.name}}</p>
        <a @click="linkToVideo()">Go to the video helper</a>
    </div>
    <div v-else>
        <p>The recipe you are searching for doesn't exist or is no longer available :(</p>
    </div>
</template>

<script>
export default {
    name: 'RecipeView',
    methods: {
        linkToVideo(){
            this.$router.push('/recipeVideo/'+this.recipe.id);
        }
    },

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
