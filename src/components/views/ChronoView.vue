<template>
<div class="view-container">
    <!-- If step exist -->
    <div class="section section-little" v-if="this.recipeStep">
        <a class="button is-large is-primary" @click="clickBack">Fermer chrono</a>
        <div class="notification has-text-centered">
            <Timer/>
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
            <a class="button is-large is-primary" @click="clickBackHomeRecipeBtn()">Retourner au début de la recette</a>
        </div>
    </div>
    
</div>
</template>

<script>
import Timer from "../Timer.vue";

export default {
    components: {
        Timer
    },
    data(){
        return {
            recipe: Object,
            recipeStep : Object
        }
    },
    created(){
        this.recipe = this.$follower.currentRecipeFollowed;
        this.recipeStep = this.$follower.currentStep;

        this.$follower.subscribeOnStepChangeCallback((newStep) => {
            this.recipeStep = newStep;
        });
    },
    methods: {
        clickBackHomeRecipeBtn(){
            this.$follower.goToHomeRecipe();
        },
        clickBack(){
            this.$follower.quitChrono();
        },
        linkToVideo(){
            this.$follower.goToVideo();
        }
    }
}
</script>

<style>

</style>
