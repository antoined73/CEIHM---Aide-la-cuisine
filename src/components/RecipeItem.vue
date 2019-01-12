<template>
    <div class="box is-paddingless clickable grow">
        <figure class="image is-4by3">
            <img :src="recipe.image" alt="Placeholder image">
        </figure>
        <div class="box">
            <div class="media-content">
                <p class="title is-4">{{recipe.name}}</p>
                <p class="subtitle is-6">{{recipe.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeItem',
    props: {
        recipe : Object
    }
}
</script>