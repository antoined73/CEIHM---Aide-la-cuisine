<template>
    <div class="box is-paddingless clickable grow" @click="recipeClicked()">
        <figure class="image is-4by3">
            <img :src="recipe.image" alt="Placeholder image">
        </figure>
        <div class="box">
            <div class="media-content is-clipped is-unselectable">
                <p class="title is-size-4 is-size-6-touch">{{recipe.name}}</p>
                <p class="subtitle is-size-6-desktop is-size-7-touch">{{recipe.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeItem',
    props: {
        recipe : Object
    },
    methods: {
        recipeClicked(){
            this.$follower.startRecipe(this.recipe);
        }
    }
}
</script>