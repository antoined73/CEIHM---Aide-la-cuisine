<template>
<div class="has-text-left">
    <h2 class="title is-size-3">Ingrédients</h2>
    <div class="notification">
        <IngredientItem v-for="(ingredient,index) in ingredients" :key="index" :ingredient="ingredient"/>
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