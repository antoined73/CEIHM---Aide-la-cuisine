<template>
<div style="ontop">
        <Explanation v-if="chronoLaunched || chronoAvailable"  explanationClass="helper top" text='"Chronomètre"' handDirection="chevron-up" 
        @onClick="goChrono()"></Explanation>
            
        <Explanation v-if="videoAvailable" explanationClass="helper down" text='"Video"' handDirection="chevron-down" 
            @onClick="goVideo()"></Explanation>

        <Explanation  v-if="canGoLeft" explanationClass="helper left" text='"Précédent"' handDirection="chevron-left" @onClick="clickLeftBtn()"></Explanation>
        
        <Explanation v-if="canGoRight" explanationClass="helper right" text='"Suivant"' handDirection="chevron-right" @onClick="clickRightBtn()"></Explanation>
        <article v-if="showTooltip" class="message is-small goRight">
            <div class="message-header">
                <p>Comment ça marche ?</p>
                <button class="delete is-small" aria-label="delete" @click="disableTooltip()"></button>
            </div>
            <div class="message-body">
                Lorsque vous voyez cette icone <font-awesome-icon icon="hand-paper"/>, vous pouvez slidez dans la direction affichée.<br/>
                Vous pouvez également utiliser le mot clé à côté de <font-awesome-icon icon="microphone"/>
            </div>
        </article>
</div>
</template>

<script>
import VocalRecognition from '../services/vocal-recognition';
import Explanation from './Explanation.vue'

export default {
    props: {
        recipe: Object
    },
    components : {
        Explanation
    },
    created() {
        VocalRecognition.initContext({
            "précédent": () => {
                this.goPreviousStep();
            }, "suivant": () => {
                this.goNextStep();
            }, "video": () => {
                this.goVideo();
            }, "chronomètre" : () => {
                this.goChrono();
            }
        });

        // eslint-disable-next-line
        this.$follower.subscribeOnStepChangeCallback((newStep) =>{
            this.updateFlags();
        })
    },
    data() {
        return {
            canGoLeft: false,
            canGoRight: false,
            chronoLaunched : false,
            chronoAvailable : false,
            videoAvailable : false,
            showTooltip: this.$follower.showTooltip
        }
    },
    methods: {
        clickRightBtn(){
            this.goNextStep();
        },
        clickLeftBtn(){
            this.goPreviousStep();
        },
        goVideo(){
            this.$follower.goToVideo();
        },
        goChrono(){
            this.$follower.goToChrono();
        },
        disableTooltip() {
            this.showTooltip = false;
            this.$follower.disableTooltip();
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
            this.chronoLaunched = this.$follower.chronoLaunched;
            this.chronoAvailable = this.$follower.chronoAvailable;
            this.videoAvailable = this.$follower.currentStep && this.$follower.currentStep.video;
            this.canGoLeft = this.$follower.canGoPreviousStep();
            this.canGoRight = this.$follower.canGoNextStep();
        }        
    },
    mounted(){
        this.$events.on('update-navigation-flags', this.updateFlags)
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

    .goRight {
        position: absolute;
        top: 60%;
        right: 0;
    }
</style>
