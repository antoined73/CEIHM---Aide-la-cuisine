<template>
<div class="has-text-left">
    <div class="notification">
        <h2 class="title is-size-5-touch is-size-4-desktop">Ingrédients</h2>
        <div class="columns is-multiline is-centered is-gapless">
            <div class="column is-full-mobile is-4-tablet is-3-desktop" v-for="(ingredient,index) in ingredients" :key="index" >
                <IngredientItem :ingredient="ingredient"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import IngredientItem from './IngredientItem.vue'

export default {
    components: {
        IngredientItem
    },
    data(){
        return {
            ingredients : Array
        }
    },
    props : {
        recipe : Object
    },
    created(){
        this.ingredients = this.$store.getters.getIngredientsOfRecipe(this.recipe.id);
    }
}
</script>