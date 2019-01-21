<template>
    <div>
        <Navigation :recipe="recipe" ref="navigation"/>

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
    methods: {
        clickBackHomeButton(){
            this.$router.push("/");
        },

        linkToVideo(){
            this.$router.push('/recipeVideo/'+this.recipe.id);
        }
    },
    data(){
        return {
            recipe: Object,
        }
    },
    created(){
        this.recipe = this.$store.getters.getRecipeById(this.$route.params.recipeID)
    },
    components: {
        Navigation,
    }
}
</script>