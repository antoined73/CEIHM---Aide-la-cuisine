<template>
  <div class="container">
    <h2 id="timer-name">{{this.timerName}}</h2>
    <div class="level">
      <div class="level-item has-text-centered">
        <!-- REMOVE 5 MINUTES BUTTON   -->
        <button class="button is-dark is-large" id="removeTime" @click="removeTimeButtonClicked">-5</button>
      </div>
      <div id="timer" class="level-item has-text-centered">
        <span id="minutes" v-bind:style="[this.isFinished ? {color: 'red'} : {}]">{{this.minutes}}</span>
        <span id="middle" v-bind:style="[this.isFinished ? {color: 'red'} : {}]">:</span>
        <span id="seconds" v-bind:style="[this.isFinished ? {color: 'red'} : {}]">{{this.seconds}}</span>
      </div>
      <div class="level-item has-text-centered">
        <!-- ADD 5 MINUTES BUTTON   -->
        <button class="button is-dark is-large" id="addTime" @click="addTimeButtonClicked">+5</button>
      </div>
    </div>

    <div id="timer-buttons">
      <!--  START BUTTON    -->
      <button
        class="button is-dark is-large"
        id="start"
        v-if="!this.timer.isRunning || this.timer.isPaused"
        @click="startButtonClicked"
      >
        <font-awesome-icon icon="play-circle"/>
      </button>

      <!--   PAUSE BUTTON   -->
      <button
        class="button is-dark is-large"
        id="stop"
        v-if="this.timer.isRunning"
        @click="stopButtonClicked"
      >
        <font-awesome-icon icon="pause-circle"/>
      </button>
    </div>
    <app-timer-widget></app-timer-widget>
  </div>
</template>

<script>
import Timer from "../services/timer.js";
import VocalRecognition from "../services/vocal-recognition.js";
import TimerMinimal from "./TimerMinimal.vue";

export default {
  name: "TimerView",
  props: {},
  components: {
    // /!\ For test purpose only
    'app-timer-widget': TimerMinimal
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
      this.timer.addTime(5);
    },
    removeTimeButtonClicked() {
      this.timer.removeTime(5);
    },
    padTime(time) {
      return (time < 10 ? "0" : "") + time;
    }
  },
  created() {
    VocalRecognition.initContext({
      "démarrer": () => {
        Timer.start(5);
        this.isFinished = false;
      },
      "stop": () => {
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

#timer {
  font-size: 100px;
  line-height: 1;
  margin-bottom: 20px;
}

#timer-name {
  text-align: center;
  margin-top: 20px;
}

#timer-buttons {
  text-align: center;
}
</style>
