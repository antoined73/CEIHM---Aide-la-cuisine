<template>
    <div class="notification">
        <h1 class="title">Recettes</h1>
        <div class="columns">
            <div class="column" v-for="n in columnsNumber" :key="n">
                <RecipeItem v-for="(r,i) in recipesPerColumn[n-1]" :key="i" :recipe="r"/>
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
    data() {
        return {
            columnsNumber : 5
        }
    },
    computed: {
        recipes(){
            return this.$store.state.recipes;
        },
        recipesPerColumn(){ //generate the list of recipes to display on each column
            var rpc = [];
            for(var _=0; _< this.columnsNumber; _++){ // initializing the columns
                rpc.push([]);
            }

            var i=0;
            this.recipes.forEach(r => { // filling them with the recipes
                rpc[i].push(r)
                if(i+1 >= this.columnsNumber){
                    i=0;
                }else{
                    i++;
                }
            });

            return rpc;
        } 
    }
}
</script>

<style>

</style>
