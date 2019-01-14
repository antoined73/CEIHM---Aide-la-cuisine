<template>
    <div class="box box-margin">
        <div class="level is-mobile is-unselectable">
            <!-- Left side -->
                <div class="level-item">
                    <figure class="image is-48x48">
                        <img :src="this.ingredient.image" alt="Placeholder image">
                    </figure>
                </div>

            <!-- Right side -->
                <div class="level-item">
                    <div class="columns">
                        <div class="column has-text-left">
                            <strong>{{this.ingredient.name}}</strong>
                            <p>{{this.ingredient.quantity}} {{this.ingredient.unit}}</p>                    
                        </div>
                    </div>
                    
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        ingredient : Object
    }
}
</script>

<style scoped>
.box-margin{
    margin: 0.2rem;
}
</style>
