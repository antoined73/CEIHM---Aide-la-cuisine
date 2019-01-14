<template>
    <section class="hero is-primary">
        <div class="hero-body little-header">
            <!-- If recipe exist -->
            <div v-if="recipe" class="container">
            <h1 class="title is-size-5-touch">
                {{this.recipe.name}}
            </h1>
            </div>
            
            <!-- If recipe doesn't exist -->
            <div v-else class="container">
            <h1 class="title">
                Oh non ! :(
            </h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'RecipeHomeHeader',
    props : {
        recipe : {
            type: Object,
            default: null
        }
    }
}
</script>

<style>

</style>
