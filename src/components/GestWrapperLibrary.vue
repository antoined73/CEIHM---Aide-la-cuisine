<template>
    <div></div>
</template>

<script>


export default {
  name: 'GestWrapperLibrary',
  methods: {
      communicateDirection(event) {
          this.$events.fire('gest-event', event.direction)
          console.log(event.direction);
      }
  },
  mounted() {
      if (window.gestIsStarted != true) {
        window.gestIsStarted = true
        window.gest.start()
        window.gest.options.sensitivity(100)
        window.gest.options.subscribeWithCallback(this.communicateDirection)
      }
  }
}
</script> 