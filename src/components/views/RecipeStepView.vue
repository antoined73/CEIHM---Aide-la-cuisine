<template>
<div class="view-container">
    <!-- If step exist -->
    <div class="section section-little" v-if="this.recipeStep">
        <div class="notification has-text-centered">
            <p class="title is-size-4">Étape {{this.recipeStep.number}}</p>
            <p class="is-size-8">{{this.recipeStep.description}}</p>
            <br>
            <button class="button is-primary" v-if="this.recipeStep.video" @click="linkToVideo()">Voir la vidéo explicative</button>
        </div>
    </div>
    <!-- If step doesn't exist -->
    <div v-else class="section">
        <div  class="notification has-text-centered">
            <p class="title is-size-3">Ohoh ! :(</p>
            <p class="is-size-5">
                Cette étape de la recette 
                <strong>{{this.recipe.name}}</strong> 
                n'existe pas ou n'existe plus !
            </p>
            <br>
            <a class="button is-large is-primary" @click="this.clickBackHomeRecipeBtn()">Retourner au début de la recette</a>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    data(){
        return {
            recipe: Object,
            recipeStep : Object
        }
    },
    created(){
        this.recipe = this.$follower.currentRecipeFollowed;
        this.recipeStep = this.$follower.currentStep;

        this.$follower.subscribeCallbackOnStepChange((newStep) => {
            this.recipeStep = newStep;
        });
    },
    methods: {
        clickBackHomeRecipeBtn(){
            this.$follower.goToHomeRecipe();
        },
        linkToVideo(){
            this.$follower.goToVideo();
        }
    }
}
</script>

<style>

</style>
