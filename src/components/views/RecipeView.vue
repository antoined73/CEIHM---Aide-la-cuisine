<template>
    <div>
        <RecipeHeader :recipe="this.recipe"/>

        <!-- If recipe exist -->
        <div v-if="recipe" class="section">
            <div class="columns is-mobile">
                <div class="column">
                    <a class="button is-large is-pulled-left">
                        <span class="icon is-medium">
                        <i class="fas fa-arrow-left fa-2x"></i>
                        </span>
                    </a>
                </div>
                <div class="column is-four-fifths has-text-centered">
                    <router-view/>
                </div>
                <div class="column">
                    <a class="button is-large is-pulled-right">
                        <span class="icon is-medium">
                        <i class="fas fa-arrow-right fa-2x"></i>
                        </span>
                    </a>
                </div>
            </div>
            
            
        </div>

        <!-- If recipe doesn't exist -->
        <div v-else class="section">
            <div class="notification has-text-centered">
                <p class="title is-size-4">La recette que tu cherches n'existe pas ou n'existe plus..</p>
                <a class="button is-large is-primary" @click="clickBackHomeButton()">Retourner à l'accueil</a>
            </div>
        </div>
    </div>
    
</template>

<script>
import RecipeHeader from '../headers/RecipeHeader.vue'

export default {
    name: 'RecipeView',
    components : {
        RecipeHeader
    },
    data(){
        return {
            recipe: Object
        }
    },
    created(){
        this.recipe = this.$store.getters.getRecipeById(this.$route.params.recipeID);
    },
    methods : {
        clickBackHomeButton(){
            this.$router.push("/");
        }
    }
}
</script>

<style>

</style>
