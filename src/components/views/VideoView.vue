<template>
    <section class= "video-section">
        <Video :videoId="step.video.id" :videoTimestamp="step.video.timestampStep"/>
    </section>
    
</template>

<script>

import Video from '../Video.vue'

export default {
    name: 'VideoView',
    methods: {
    },
    components: {
        Video
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
    }
}
</script>

<style>

</style>
