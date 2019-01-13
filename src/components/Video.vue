<template>

    <section class="video-player">
        <youtube :video-id="videoId" :player-vars="playerVars" fitParent="true"></youtube>
    </section>
    
</template>

<script>

export default {
    name: 'Video',
    props: ['videoId'],
    data() {
        return {
            playerVars: {
                autoplay: 1
            }
        }
    },
    methods: {

    }

}
</script>

<style>

</style>