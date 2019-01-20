<template>
    <div><p>coucou</p></div>
</template>

<script>
import { serverBus } from '../main';
export default {
  name: 'GestWrapperLibrary',
  methods: {
      communicateDirection(event) {
          serverBus.$emit('gest-event', event.direction)
      }
  },
  mounted() {
    window.gest.start()
    window.gest.options.subscribeWithCallback(this.communicateDirection)
  },
}
</script> 