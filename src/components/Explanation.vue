<template>
    <div :class="explanationClass">
        <div class="column-center" @click=onClick()>
            <div class="line-space">
                <font-awesome-icon class="child1" icon="hand-paper"/>
                <font-awesome-icon class="child2" :icon="handDirection"/>
            </div>
            <div class="line-space">
                <font-awesome-icon class="child1" icon="microphone"/>
                <p class="child2">{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Explanation',
    props: ['explanationClass', 'text', 'handDirection'],
    methods: {
        onClick() {
            this.$emit("onClick")
        }
    }
}
</script>

<style>

</style>