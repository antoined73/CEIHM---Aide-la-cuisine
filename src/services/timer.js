class Timer {
    duration = 0;
    tick = null;
    end = null;


    setDuration(duration) {
        this.duration = duration;
    }

    setTick(callback) {
        this.tick = callback;
    }

    setEnd(callback) {
        this.end = callback;
    }

    isRunning() {
        return this.duration > 0;
    }

    start() {
        this.interval = setInterval(() => {
            this.duration -= 1;
            this.tick();
            if (this.duration === 0) {
                clearInterval(this.interval);
                this.end();
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval)
    }


    clear() {
        this.duration = 0;
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    resume() {
        this.start();
    }

    addTime(duration) {
        this.duration += duration;
    }

    removeTime(duration) {
        this.duration -= duration
    }

    getMinutes() {
        return Math.floor(this.duration / 60);
    }

    getSeconds() {
        return this.duration - (60 * this.getMinutes());
    }
}

export default new Timer();