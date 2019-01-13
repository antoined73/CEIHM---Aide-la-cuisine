<template>

    <section class="video-player">
        <youtube :video-id="videoId" :player-vars="playerVars" :resize="true" :fitParent="true" ref="youtube" @ready="playVideo" ></youtube>
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
            }
        }
    },
    methods: {
        playVideo() {
            this.$refs.youtube.player.playVideo()
        }
    }

}
</script>

<style>

</style>