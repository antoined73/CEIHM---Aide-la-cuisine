<template>
    <div>
        <gest-wrapper-library/>
        <Video :videoId="step.video.id" :videoTimestamp="step.video.timestampStep"/>    
    </div>
</template>

<script>

import Video from '../Video.vue'
import GestWrapperLibrary from '../GestWrapperLibrary.vue'

export default {
    name: 'VideoView',

    components: {
        Video,
        GestWrapperLibrary
    },

    data(){
        return {
            recipe: Object,
            step: Object
        }
    },
    created(){
        this.recipe = this.$store.getters.getRecipeById(this.$route.params.recipeID);
        this.step = this.$store.getters.getRecipeStepOfRecipe(this.$route.params.recipeID, this.$route.params.stepID)
    },
    mounted() {
        this.$events.on('gest-event', this.handleGestEvent)
    },
    methods: {
        handleGestEvent(event) {
             if (event.toLowerCase().includes('up')) {
                this.linkToRecipe()
             }
        },

        linkToRecipe() {
            this.$events.off('gest-event', this.handleGestEvent)
            this.$router.push('/recipe/' + this.$route.params.recipeID + '/step/' + this.step.number)
        }
    }
}
</script>

<style>

</style>
