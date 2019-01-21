<template>
  <div class="contain">
    <!-- <h2 id="timer-name">{{this.timerName}}</h2> -->
    
    <div id="timer" class="level-item has-text-centered">
      <span id="minutes" v-bind:style="[this.isFinished ? {color: 'red'} : {}]">{{this.minutes}}</span>
      <span id="middle" v-bind:style="[this.isFinished ? {color: 'red'} : {}]">:</span>
      <span id="seconds" v-bind:style="[this.isFinished ? {color: 'red'} : {}]">{{this.seconds}}</span>
    </div>
    <!-- <app-timer-widget></app-timer-widget> -->

    <Explanation explanationClass="helper down" text='"Retour"' handDirection="chevron-down" 
        @onClick="clickBack()"></Explanation>

    <Explanation explanationClass="helper top" text='"Pause"' handDirection="chevron-up" 
        @onClick="stopButtonClicked()" v-if="this.timer.isRunning"></Explanation>
        
    <Explanation explanationClass="helper top" text='"Démarrer"' handDirection="chevron-up" 
        @onClick="startButtonClicked()" v-if="!this.timer.isRunning"></Explanation>

    <Explanation explanationClass="helper left" text='"Enlever"' handDirection="chevron-left" @onClick="removeTimeButtonClicked()"></Explanation>
    
    <Explanation explanationClass="helper right" text='"Ajouter"' handDirection="chevron-right" @onClick="addTimeButtonClicked()"></Explanation>
    </div>
</template>

<script>
import Timer from "../services/timer.js";
import VocalRecognition from "../services/vocal-recognition.js";
import TimerMinimal from "./TimerMinimal.vue";
import Explanation from './Explanation.vue'

export default {
  name: "TimerView",
  props: {},
  components: {
    // /!\ For test purpose only
    'app-timer-widget': TimerMinimal,
    Explanation
  },
  data() {
    return {
      timer: Timer,
      isFinished: Boolean,
      timerName: "Timer name"
    };
  },
  computed: {
    minutes() {
      return this.padTime(this.timer.getMinutes());
    },
    seconds() {
      return this.padTime(this.timer.getSeconds());
    }
  },
  methods: {
    recipeClicked() {
      this.$router.push("recipe/" + this.recipe.id);
    },
    startButtonClicked() {
      this.timer.start(5);
      this.isFinished = false;
    },
    stopButtonClicked() {
      this.timer.stop();
    },
    addTimeButtonClicked() {
      this.timer.addTime(30);
    },
    removeTimeButtonClicked() {
      this.timer.removeTime(30);
    },
    padTime(time) {
      return (time < 10 ? "0" : "") + time;
    },
    clickBack(){
      this.$follower.quitChrono();
    },
  },
  created() {
    VocalRecognition.initContext({
      "démarrer": () => {
        Timer.start(5);
        this.isFinished = false;
      },
      "pause": () => {
        Timer.stop();
      },
      "recommencer": () => {
        Timer.clear();
      },
        "ajouter": () => {
          console.log("AJOUTER")
        this.addTimeButtonClicked();
        }, "enlever" : () => {
            console.log("ENLEVER")
          this.removeTimeButtonClicked();
       }
    });
    this.timer.setTickCallback(() => {});
    this.timer.setEndCallback(() => {
      this.isFinished = true;
    });
  }
};
</script>

<style lang="scss">

.contain {
  position: relative;
}

#timer {
  background-color: whitesmoke;
  font-size: 100px;
  line-height: 1;
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
}

#timer-name {
  text-align: center;
  margin-top: 20px;
}

#timer-buttons {
  text-align: center;
}
</style>
