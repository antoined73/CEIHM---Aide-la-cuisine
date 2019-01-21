<template>
    <div>
        <div id="timer">
            <span id="minutes">{{timer.getMinutes()}}</span>
            <span id="middle">:</span>
            <span id="seconds">{{timer.getSeconds()}}</span>
        </div>
        <div id="buttons">
            <!--  START BUTTON    -->
            <button
                    class="button is-dark is-large"
                    id="start"
                    @click="start">
                <i class="far fa-play-circle"></i>
            </button>
            <!--   PAUSE BUTTON   -->
            <button
                    class="button is-dark is-large"
                    id="stop"
                    @click="stop">
                <i class="far fa-pause-circle"></i>
            </button>
            <!--RESET BUTTON   -->
            <button
                    class="button is-dark is-large"
                    id="reset"
                    @click="reset">
                <i class="fas fa-undo"></i>
            </button>
        </div>
    </div>
</template>

<script>
    import Timer from '../services/timer.js';
    import VocalRecognition from '../services/vocal-recognition.js';

    VocalRecognition.initContext({
        'Démarer': () => {
            start();
        },
        'Stop': () => {
            Timer.stop();
        },
        'Recommencer': () => {
            Timer.clear();
        }
    });

    Timer.setTick(() => {

    });

    Timer.setEnd(() => {

    });

    function start() {
        if (Timer.isRunning()) {
            Timer.resume()
        } else {
            Timer.setDuration(50);
            Timer.start();
        }
    }


    export default {
        name: 'TimerView',
        props: {},

        data() {
            return {
                minutes: Timer.getMinutes(),
                seconds: Timer.getSeconds(),
                timer: Timer
            }
        },
        methods: {

            recipeClicked() {
                this.$router.push('recipe/' + this.recipe.id);
            }, start() {
                start();
            },

            stop() {
                Timer.stop();
            },
            reset() {
                Timer.clear();
            }
        }
    }
</script>

<style>
</style>
