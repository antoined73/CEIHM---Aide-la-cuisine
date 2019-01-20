<template>
    <div class="ontop">
        <div class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <div class="level-item interactable-item">
                    <a class="button is-inverted is-medium is-primary is-opacity-50" @click="clickLeftBtn()"
                       v-if="canGoLeft">
                    <span class="icon is-medium">
                    <font-awesome-icon icon="chevron-left" size="2x"/>
                    </span>
                    </a>
                </div>
            </div>

            <!-- Right side -->
            <div class="level-right">
                <div class="level-item interactable-item">
                    <a class="button is-inverted is-medium is-primary is-opacity-50" @click="clickRightBtn()"
                       v-if="canGoRight">
                    <span class="icon is-medium">
                    <font-awesome-icon icon="chevron-right" size="2x"/>
                    </span>
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
        }, created() {
            VocalRecognition.initContext({
                "précédent": () => {
                    this.$follower.goPreviousStep();
                }, "suivant": () => {
                    this.$follower.goNextStep();
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
            clickRightBtn() {
                this.$emit("OnClickRightBtn");
                this.$follower.goNextStep();
                this.updateFlags();
            },
            clickLeftBtn() {
                this.$emit("OnClickLeftBtn");
                this.$follower.goPreviousStep();
                this.updateFlags();
            },
            updateFlags() {
                this.canGoLeft = this.$follower.canGoPreviousStep();
                this.canGoRight = this.$follower.canGoNextStep();
            }
        },
        mounted() {
            this.$follower.updateRecipeAndStep();
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
