<template>
<div class="ontop">
    <div class="level is-mobile">
        <!-- Left side -->
        <div class="level-left">
            <div class="level-item interactable-item">
                <a class="button is-inverted is-medium is-primary is-opacity-50" @click="clickLeftBtn()" v-if="canGoLeft">
                    <font-awesome-icon icon="chevron-left" size="2x" />
                </a>
            </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
            <div class="level-item interactable-item">
                <a class="button is-inverted is-medium is-primary is-opacity-50" @click="clickRightBtn()" v-if="canGoRight">     
                    <font-awesome-icon icon="chevron-right" size="2x" />
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VocalRecognition from '../services/vocal-recognition';

export default {
    props: {
        recipe: Object
    }, 
    created() {
        VocalRecognition.initContext({
            "précédent": () => {
                this.goPreviousStep();
            }, "suivant": () => {
                this.goNextStep();
            }, "video": () => {
                this.$follower.goToVideo();
            }, "chronomèetre" : () => {
                // this.$follower
                //TODO add go to chrono
                console.log("Chrono");
            }
        });
    },
    data() {
        return {
            canGoLeft: false,
            canGoRight: false
        }
    },
    methods: {
        clickRightBtn(){
            this.goNextStep();
        },
        clickLeftBtn(){
            this.goPreviousStep();
        },
        goNextStep(){
            this.$emit("OnClickRightBtn");
            this.$follower.goNextStep();
            this.updateFlags();
        },
        goPreviousStep(){
            this.$emit("OnClickLeftBtn");
            this.$follower.goPreviousStep();
            this.updateFlags();
        },
        updateFlags() {
            this.canGoLeft = this.$follower.canGoPreviousStep();
            this.canGoRight = this.$follower.canGoNextStep();
        }        
    },
    mounted(){
            //this.$follower.updateRecipeAndStep();
            this.updateFlags();
    }
}
</script>

<style>
    .ontop {
        z-index: 100;
        position: fixed;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
    }

    .is-opacity-50 {
        opacity: 0.5;
    }

    .interactable-item {
        pointer-events: all;
    }
</style>
