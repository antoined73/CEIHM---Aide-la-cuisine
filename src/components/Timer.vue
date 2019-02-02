<template>
  <div class="contain">
    <!-- <h2 id="timer-name">{{this.timerName}}</h2> -->
    <div
      id="timer"
      class="level-item has-text-centered"
      v-bind:style="[this.timer.duration < 0 ? {color: 'red'} : {}]"
    >
      <span>{{this.isNegative() + this.minutes}}</span>
      <span>:</span>
      <span>{{this.seconds}}</span>
    </div>

    <Explanation
      explanationClass="helper down"
      text="Retour"
      handDirection="chevron-down"
      @onClick="clickBack()"
    ></Explanation>

    <Explanation
      explanationClass="helper top"
      text="Pause"
      handDirection="chevron-up"
      @onClick="stopButtonClicked()"
      v-if="this.timer.isRunning"
    ></Explanation>

    <Explanation
      explanationClass="helper top"
      text="Démarrer"
      handDirection="chevron-up"
      @onClick="startButtonClicked()"
      v-if="!this.timer.isRunning"
    ></Explanation>

    <Explanation
      explanationClass="helper left"
      text="Enlever"
      handDirection="chevron-left"
      @onClick="removeTimeButtonClicked()"
    ></Explanation>

    <Explanation
      explanationClass="helper right"
      text="Ajouter"
      handDirection="chevron-right"
      @onClick="addTimeButtonClicked()"
    ></Explanation>
  </div>
</template>

<script>
import Timer from "../services/timer.js";
import VocalRecognition from "../services/vocal-recognition.js";
import Explanation from "./Explanation.vue";

export default {
  name: "TimerView",
  props: ["initialValue"],
  components: {
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
      this.timer.start(this.initialValue);
      this.isFinished = false;
      this.$follower.chronoLaunched = true;
    },
    stopButtonClicked() {
      if (this.timer.duration <= 0) {
        this.$follower.chronoLaunched = false;
      }
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
    isNegative() {
      return this.timer.duration < 0 ? "-" : "";
    },
    clickBack() {
      this.$follower.quitChrono();
    }
  },
  created() {
    if (this.timer.duration === 0) {
      this.timer.duration = this.initialValue;
    }
    VocalRecognition.initContext({
      démarrer: () => {
        this.startButtonClicked();
      },
      pause: () => {
        this.stopButtonClicked();
      },
      ajouter: () => {
        this.addTimeButtonClicked();
      },
      enlever: () => {
        this.removeTimeButtonClicked();
      },
      retour: () => {
        this.clickBack();
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
