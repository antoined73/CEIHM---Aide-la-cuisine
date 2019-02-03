<template>
    <div class="box box-margin" style="height:90%;">
        <div class="columns is-unselectable is-vcentered is-gapless">
            <div class="column is-one-third">      
                <figure class="image is-48x48">
                    <img :src="this.ingredient.image" alt="Placeholder image">
                </figure>
            </div>
            <div class="column text-align-left">
                    <div>
                    <strong class="breakable-text">{{this.ingredient.name}}</strong>
                    <p>{{this.ingredient.quantity}} {{this.ingredient.unit}}</p>
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
.breakable-text{
    word-break: break-word;
    overflow-wrap: break-word;
}
.box-margin{
    margin: 0.2rem;
}
.margin-right {
    margin-right: 2rem;
}
</style>
