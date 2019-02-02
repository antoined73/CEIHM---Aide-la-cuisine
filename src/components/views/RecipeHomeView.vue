<template>
<div class="view-container">
    <div class="section has-text-centered section-little">
        <article v-if="showTooltip" class="message is-small">
            <div class="message-header">
                <p>Comment ça marche ?</p>
                <button class="delete is-small" aria-label="delete" @click="disableTooltip()"></button>
            </div>
            <div class="message-body">
                Lorsque vous voyez cette icone <font-awesome-icon icon="hand-paper"/>, vous pouvez slidez dans la direction affichée.<br/>
                Vous pouvez également utiliser le mot clé à côté de <font-awesome-icon icon="microphone"/>
            </div>
        </article>
        <p class="title is-size-4">Je cuisine pour 4 personnes</p>
        <IngredientList :recipe="this.recipe"/>
    </div>
</div>
</template>

<script>
import IngredientList from '../ingredients/IngredientList.vue'

export default {
    components:{
        IngredientList
    },
    data(){
        return {
            recipe : Object, 
            showTooltip : this.$follower.showTooltip
        }
    },
    methods : {
        disableTooltip() {
            this.showTooltip = false;
            this.$follower.showTooltip = false;
        }
    },
    created(){
        this.recipe = this.$store.getters.getRecipeById(this.$route.params.recipeID);
    }
}
</script>

<style>
.section-little{
    padding: 0.8rem 0.8rem;
}
</style>
