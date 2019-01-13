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
    props : {
        recipe : Object
    },
    computed :{
        ingredients(){
            return [
                {
                    id: 0,
                    name: "Farine",
                    quantity: 400,
                    unit: "g"
                },
                 {
                    id: 1,
                    name: "Huile d'olive",
                    quantity: 2,
                    unit: "cuillères à soupe"
                },
                 {
                    id: 2,
                    name: "Coquillettes",
                    quantity: 250,
                    unit: "g"
                },
                 {
                    id: 3,
                    name: "Oignon",
                    quantity: 2,
                    unit: "unités"
                },
                 {
                    id: 4,
                    name: "Levure",
                    quantity: 1,
                    unit: "sachet"
                }
            ]
        }
    }
}
</script>