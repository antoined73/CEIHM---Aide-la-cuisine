<template>
    <div class="notification">
        <h1 class="title">Recettes</h1>
        <div class="columns is-mobile is-multiline">
            <div class="column is-full-mobile is-6-tablet is-4-desktop is-3-widescreen" 
            v-for="(r,i) in recipes" :key="i">
                <RecipeItem :recipe="r"/>
            </div>
        </div>
    </div>
</template>

<script>
import RecipeItem from './RecipeItem.vue'
export default {
    name: 'RecipeList',
    components: {
        RecipeItem
    },
    computed: {
        recipes(){
            return this.$store.state.recipes;
        }
    }
}
</script>

<style>
</style>
