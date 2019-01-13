<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <!-- If recipe exist -->
            <div v-if="recipe" class="container">
            <h1 class="title">
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
    name: 'HomeHeader',
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
