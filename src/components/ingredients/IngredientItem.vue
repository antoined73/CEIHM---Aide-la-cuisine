<template>
    <div class="box">
        {{this.ingredient.name}} - {{this.ingredient.quantity}} {{this.ingredient.unit}}
    </div>
</template>

<script>
export default {
    props : {
        ingredient : Object
    }
}
</script>

<style>

</style>
