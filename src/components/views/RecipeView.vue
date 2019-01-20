<template>
    <div>
        <template v-if="recipe">
            <gest-wrapper-library/>
            <p>{{this.recipe.name}}</p>
            <a @click="linkToVideo()">Go to the video helper</a>
        </template>
        <template v-else>
            <p>The recipe you are searching for doesn't exist or is no longer available :(</p>
        </template>
    </div>
</template>

<script>

import GestWrapperLibrary from '../GestWrapperLibrary.vue'
import { serverBus } from '../../main';


export default {
    name: 'RecipeView',
    methods: {
        handleGestEvent(event) {
             if (event.toLowerCase().includes('down')) {
                this.$router.push('/recipeVideo/'+this.recipe.id);
             }
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
        this.recipe = this.$store.getters.getRecipeById(this.$route.params.id);
            serverBus.$on('gest-event', this.handleGestEvent)
    },
    components: {
        GestWrapperLibrary
    },

}
</script>

<style>

</style>
