class Timer {
  duration = 0;
  isRunning = false;
  isPaused = false;
  tickCallback = null;
  endCallback = null;

  setDuration(duration) {
    this.duration = duration;
  }

  setTickCallback(callback) {
    this.tickCallback = callback;
  }

  setEndCallback(callback) {
    this.endCallback = callback;
  }

  start(time) {
    if (!this.isRunning && !this.isPaused && this.duration === 0) {
      this.setDuration(time);
    }
    this.interval = setInterval(() => {
      if (this.duration === 0) {
        clearInterval(this.interval);
        this.isRunning = false;
        this.endCallback();
      } else {
        this.duration -= 1;
        this.tickCallback();
      }
    }, 1000);
    this.isRunning = true;
    this.isPaused = false;
  }

  stop() {
    clearInterval(this.interval);
    this.isRunning = false;
    this.isPaused = true;
  }

  clear() {
    this.duration = 0;
    clearInterval(this.interval);
    this.isRunning = false;
  }

  addTime(duration) {
    this.duration += duration;
  }

  removeTime(duration) {
    if (this.duration > duration) {
      this.duration -= duration;
    } else {
      this.duration = 0;
    }
  }

  getMinutes() {
    return Math.floor(this.duration / 60);
  }

  getSeconds() {
    return this.duration - 60 * this.getMinutes();
  }
}

export default new Timer();
