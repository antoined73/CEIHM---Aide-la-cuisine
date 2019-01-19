<template>
    <div>
        <Navigation :recipe="recipe"/>

        <!-- If recipe exist -->
        <router-view v-if="recipe"/>

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
import Navigation from '../Navigation.vue';

export default {
    name: 'RecipeView',
    components: {
        Navigation
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