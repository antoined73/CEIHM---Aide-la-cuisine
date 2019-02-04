<template>

<section class= "video-section">
    <section class="video-player">
        <youtube :video-id="videoId" :player-vars="playerVars" :resize="true" 
        :fitParent="true" ref="youtube" @ready="playVideo" @playing="playingVideo" 
        @paused="pausedVideo"></youtube>

        <Explanation explanationClass="helper top" text='"Retour"' handDirection="chevron-up" 
        @onClick="returnRecipe()"></Explanation>

        <Explanation explanationClass="helper down" text='"Pause"' handDirection="chevron-down" 
            @onClick="pause()" v-if="playing"></Explanation>
            
        <Explanation explanationClass="helper down" text='"Play"' handDirection="chevron-down" 
            @onClick="play()" v-if="!playing"></Explanation>

        <Explanation explanationClass="helper left" text='"Reculer"' handDirection="chevron-left" @onClick="backward()"></Explanation>
        
        <Explanation explanationClass="helper right" text='"Avancer"' handDirection="chevron-right" @onClick="forward()"></Explanation>
    </section>

</section>
    
</template>

<script>
    import VocalRecognition from '../services/vocal-recognition';

import Explanation from './Explanation.vue'

export default {
    name: 'Video',
    props: ['videoId', 'videoTimestamp'],
    data() {
        return {
            playerVars: {
                autoplay: 0,
                origin: "localhost:8080"
            },
            playing: false
        }
    },
    components: {
        Explanation
    },
    computed: {
        player() {
            return this.$refs.youtube.player;
        }
    },
    mounted() {
        this.$events.on('gest-event', this.handleGestEvent)
    },
    created() {
        VocalRecognition.initContext({
            "avancer": () => {
                this.player.getCurrentTime().then(value => {
                    this.player.seekTo(value + 10, true);
                });
            }, "reculer": () => {
                this.player.getCurrentTime().then(value => {
                    this.player.seekTo(value - 10, true);
                });
            },
            "pause": () => {
                this.player.pauseVideo();
            },
            "play": () => {
                this.player.playVideo();
            },
            "retour": () => {
                this.returnRecipe();
            }
        });
    },
    methods: {
        handleGestEvent(event) {
            if (event.toLowerCase().includes('up')) {
                this.returnRecipe()
            } else if (event.toLowerCase().includes('down')) {
                if (this.playing === true) {
                    this.play();
                } else {
                    this.pause();
                }
            } else if (event.toLowerCase().includes('right')) {
                this.forward();
            } else if (event.toLowerCase().includes('left')) {
                this.backward();
            }

        },
        playVideo() {
            this.player.seekTo(this.videoTimestamp, true);
            this.player.playVideo()
        },
        playingVideo() {
            this.playing = true;
        },
        pausedVideo() {
            this.playing = false;
        },
        play() {
            this.player.playVideo();
        },
        pause() {
            this.player.pauseVideo();
        },
        forward() {
            this.player.getCurrentTime().then(value => {
                this.player.seekTo(value + 10, true);
            });
        },
        backward() {
            this.player.getCurrentTime().then(value => {
                this.player.seekTo(value - 10, true);
            });
        },
    
        returnRecipe() {
            this.$router.go(-1);
        }
    },
    beforeDestroy() {
        this.$events.off('gest-event')
    }
}
</script>

<style>

</style>