<template>
    <a class="button is-radiusless is-medium is-primary is-paddingless" @click="homeBtnClicked()">
        <span class="icon is-small is-marginless is-paddingless move-right">
            <i class="fas fa-chevron-left"></i>
        </span>
        <span class="icon is-small is-marginless is-paddingless move-left">
            <i class="fas fa-home"></i>
        </span>
    </a>
</template>

<script>
export default {
    methods : {
        homeBtnClicked(){
            this.$router.push("/");
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