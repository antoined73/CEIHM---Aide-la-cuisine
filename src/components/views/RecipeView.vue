<template>
    <div>
        <Navigation :recipe="recipe" @OnClickLeftBtn="clickLeftBtn" @OnClickRightBtn="clickRightBtn"/>
        <RecipeStepHeader :recipe="this.recipe"/>

        <!-- If recipe exist -->
        <transition
        :enter-active-class="'animated '+enterAnimationName"
        :leave-active-class="'animated '+leaveAnimationName"
        mode="out-in"> 
            <router-view v-if="recipe" :key="$route.path"/>
        </transition>

        <!-- If recipe doesn't exist -->
        <div v-if="!recipe" class="section">
            <div class="notification has-text-centered">
                <p class="title is-size-4">La recette que tu cherches n'existe pas ou n'existe plus..</p>
                <a class="button is-large is-primary" @click="clickBackHomeButton()">Retourner à l'accueil</a>
            </div>
        </div>
    </div>
    
</template>

<script>
import RecipeStepHeader from '../headers/RecipeStepHeader.vue'
import Navigation from '../Navigation.vue';


export default {
    name: 'RecipeView',
    methods: {
        linkToVideo(){
            this.$router.push('/recipeVideo/'+this.recipe.id);
        },
        
        clickBackHomeButton(){
            this.$follower.stopFollowingRecipe();
        },
        clickLeftBtn(){
            this.enterAnimationName = "slideInLeft";
            this.leaveAnimationName = "slideOutRight";
        },
        clickRightBtn(){
            this.enterAnimationName = "slideInRight";
            this.leaveAnimationName = "slideOutLeft";
        }
    },
    components: {
        Navigation,
        RecipeStepHeader
    },
    data(){
        return {
            recipe: Object,
            enterAnimationName : 'slideInRight',
            leaveAnimationName : 'slideOutLeft'
        }
    },
    created(){
        this.recipe = this.$follower.currentRecipeFollowed;
    },
}
</script>