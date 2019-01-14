<template>

    <section class="video-player">
        <youtube :video-id="videoId" :player-vars="playerVars" :resize="true" :fitParent="true" ref="youtube" @ready="playVideo" @playing="playingVideo" @paused="pausedVideo"></youtube>
        <div class="flex-column">
            <a class="button is-primary" @click="play()" v-if="!playing">Play</a>
            <a class="button is-primary" @click="pause()" v-if="playing">Pause</a>
            <a class="button is-secondary" @click="forward()">Avancer</a>
            <a class="button is-secondary" @click="backward()">Reculer</a>
        </div>
        
    </section>
    
</template>

<script>

export default {
    name: 'Video',
    props: ['videoId'],
    data() {
        return {
            playerVars: {
                autoplay: 0,
                origin: "localhost:8080"
            },
            playing: false
        }
    },
    methods: {
        playVideo() {
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
            this.player.getCurrentTime().then( value => {
                this.player.seekTo(value + 10, true);
            });
        },
        backward() {
            this.player.getCurrentTime().then( value => {
                this.player.seekTo(value - 10, true);
            });
        }
    },
    computed: {
        player() {
            return this.$refs.youtube.player
        }
    }

}
</script>

<style>

</style>