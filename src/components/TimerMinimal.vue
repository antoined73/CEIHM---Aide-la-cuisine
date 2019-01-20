<template>
  <div class="container">
    <div class="timer" v-bind:class="[this.timer.getSeconds() < 10 && this.timer.getSeconds() > 0 ? 'blinking' : '']">
      <span>{{this.minutes}}</span>
      <span>:</span>
      <span>{{this.seconds}}</span>
    </div>
  </div>
</template>

<script>
import Timer from "../services/timer";
// import VocalRecognition from "../services/vocal-regognition";

export default {
  name: "TimerView",
  props: {},
  data() {
    return {
      timer: Timer,
      isFinished: Boolean
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
    padTime(time) {
      return (time < 10 ? "0" : "") + time;
    }
  },
  created() {
    // VocalRecognition.initContext({
    //   Démarer: () => {
    //     start();
    //   },
    //   Stop: () => {
    //     Timer.stop();
    //   },
    //   Recommencer: () => {
    //     Timer.clear();
    //   }
    // });

    this.timer.setTickCallback(() => {});

    this.timer.setEndCallback(() => {
      this.isFinished = true;
    });
  }
};
</script>

<style lang="scss">
@keyframes blinking {
  from {background: rgba(0, 174, 255, 0);}
  to {background: rgba(0, 174, 255, 1);}
}

.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  line-height: 1;
  background: rgba(0, 174, 255, 1);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: black;
}

.blinking {
  animation-name: blinking;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
