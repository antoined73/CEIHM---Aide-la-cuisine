<template>
<div class="view-container">
    <gest-wrapper-library/>

    <RecipeStepHeader :recipe="this.recipe"/>
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
            <a class="button is-large is-primary" @click="clickBackHomeRecipeBtn()">Retourner au début de la recette</a>
        </div>
    </div>
    
</div>
</template>

<script>

import RecipeStepHeader from '../headers/RecipeStepHeader.vue'
import GestWrapperLibrary from '../GestWrapperLibrary.vue'


export default {
    components:{
        RecipeStepHeader,
        GestWrapperLibrary
    },
    data(){
        return {
            recipe: Object,
        }
    },
    created(){
        this.recipe = this.$store.getters.getRecipeById(this.$route.params.recipeID);
    },
    mounted() {
        this.$events.on('gest-event', this.handleGestEvent)
    },
    computed:{
        recipeStep(){
            return this.$store.getters.getRecipeStepOfRecipe(this.$route.params.recipeID, this.$route.params.stepID);
        }
    },
    methods: {
        handleGestEvent(event) {
            if (event == null || event == undefined) {
                return
            }
             if (event.toLowerCase().includes('down') && this.$follower.canGoPreviousStep()) {
                this.linkToVideo()
             } else if (event.toLowerCase().includes('left') && this.$follower.canGoPreviousStep()) {
                 this.$follower.goPreviousStep();
                 this.$events.fire('update-navigation-flags')
             } else if (event.toLowerCase().includes('right') && this.$follower.canGoNextStep()) {
                 this.$follower.goNextStep();
                 this.$events.fire('update-navigation-flags')
             }
        },
        clickBackHomeRecipeBtn(){
            this.$router.push("/recipe/"+this.$route.params.recipeID);
        },
        linkToVideo(){
            this.$events.off('gest-event')
            this.$router.push(this.recipeStep.number+"/video");
        }
    },
    beforeDestroy() {
        this.$events.off('gest-event')
    }
}
</script>

<style>

</style>
