<template>
    <section class= "video-section">
        <Video v-bind:videoId="recipe.videoId"/>
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
            recipe: Object
        }
    },
    created(){
        this.recipe = this.$store.getters.getRecipeById(this.$route.params.id);
    }
}
</script>

<style>

</style>
