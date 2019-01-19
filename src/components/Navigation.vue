<template>
<div class="ontop">
    <div class="level is-mobile">
        <!-- Left side -->
        <div class="level-left">
            <div class="level-item">
                    <a class="button is-inverted is-medium is-primary is-opacity-50" @click="clickLeftBtn()" v-if="canGoLeft">
                    <span class="icon is-medium">
                    <i class="fas fa-chevron-left fa-2x"></i>
                    </span>
                </a>
            </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
            <div class="level-item">
                    <a class="button is-inverted is-medium is-primary is-opacity-50" @click="clickRightBtn()" v-if="canGoRight">
                    <span class="icon is-medium">
                    <i class="fas fa-chevron-right fa-2x"></i>
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    props : {
        recipe : Object
    },
    data() {
        return {
            canGoLeft : false,
            canGoRight : false
        }
    },
    watch : {
        recipe(){
            this.$follower.startRecipe(this.recipe);
        }
    },
    methods : {
        clickRightBtn(){
            this.$follower.goNextStep();
            this.updateFlags();
        },
        clickLeftBtn(){
            this.$follower.goPreviousStep();
            this.updateFlags();
        },
        updateFlags(){
            this.canGoLeft = this.$follower.canGoPreviousStep();
            this.canGoRight = this.$follower.canGoNextStep();
        }
    },
    mounted(){
        this.$follower.updateRecipeAndStep();
        this.updateFlags();
    }
}
</script>

<style>
.ontop{
    z-index: 100;
    position: fixed;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}

.is-opacity-50{
    opacity: 0.5;
}
</style>
