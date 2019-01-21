<template>
<div class="view-container">
    <gest-wrapper-library/>

    <!-- If step exist -->
    <div class="section section-little" v-if="this.recipeStep">
        <div class="notification has-text-centered">
            <p class="title is-size-4">Étape {{this.recipeStep.number}}</p>
            <p class="is-size-8">{{this.recipeStep.description}}</p>
            <br>
            <!-- <button class="button is-primary" v-if="this.recipeStep.chrono" @click="linkToChrono()">Lancer le chrono</button> -->
            <!-- <button class="button is-primary" v-if="this.recipeStep.video" @click="linkToVideo()">Voir la vidéo explicative</button> -->
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

import GestWrapperLibrary from '../GestWrapperLibrary.vue'


export default {
    components:{
        GestWrapperLibrary
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
    mounted() {
        this.$events.on('gest-event', this.handleGestEvent)
    },
    methods: {
        handleGestEvent(event) {
            if (event == null || event == undefined) {
                return
            }
             if (event.toLowerCase().includes('down') && this.$follower.currentStep && this.$follower.currentStep.video) {
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
            this.$follower.goToHomeRecipe();
        },
        linkToVideo(){
            this.$events.off('gest-event')
            //this.$router.push(this.recipeStep.number+"/video");
            this.$follower.goToVideo();
        },
        linkToChrono(){
            this.$follower.goToChrono();
        }
    },
    beforeDestroy() {
        this.$events.off('gest-event')
    }
}
</script>