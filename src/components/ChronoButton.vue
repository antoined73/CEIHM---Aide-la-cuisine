<template>
    <a class="button is-radiusless is-medium is-primary is-paddingless" @click="clockBtnClicked()">
        <span class="icon is-small is-marginless is-paddingless move-right">
            <font-awesome-icon icon="chevron-up" />
        </span>
        <span class="icon is-small is-marginless is-paddingless move-left">
            <font-awesome-icon icon="stopwatch" />
        </span>
    </a>
</template>

<script>
export default {
    methods : {
        clockBtnClicked(){
            this.$follower.goToChrono();
        }
    }
}
</script>

<style scoped>
.move-right{
    position: relative;
    left: 2px;
    top: 1px;
    transform: scale(0.5);
}

.move-left{
    position: relative;
    right: 8px;
}
</style>