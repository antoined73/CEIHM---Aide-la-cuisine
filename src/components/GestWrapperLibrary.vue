<template>
    <h1>{{msg}}</h1>
</template>

<script>

import { serverBus } from '../main';


export default {
  name: 'GestWrapperLibrary',
  props: {
    msg: String
  },
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