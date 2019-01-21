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
      this.duration -= 1;
      if (this.duration === 0) {
        this.endCallback();
      } else {
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
    if (this.duration <= 0) {
      this.duration = 0;
      this.isPaused = 0;
    }
  }

  clear() {
    this.duration = 0;
    clearInterval(this.interval);
    this.isRunning = false;
  }

  addTime(duration) {
    if (this.duration >= 0) {
      this.duration += duration;
    } else {
      this.duration = duration;
    }
  }

  removeTime(duration) {
    if (this.duration > duration) {
      this.duration -= duration;
    } else if (this.duration > 0) {
      this.duration = 0;
    }
  }

  getMinutes() {
    return Math.floor(Math.abs(this.duration) / 60);
  }

  getSeconds() {
    return Math.abs(this.duration % 60);
  }
}

export default new Timer();
