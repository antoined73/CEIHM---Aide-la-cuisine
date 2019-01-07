<template>
    <div class='root-element'>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>

import { serverBus } from '../main';


export default {
  name: 'GestPOC',
  data: function() {
    return  {
        msg: 'Undefined'
    }
  },
  methods: {
      handleGestEvent(event) {
        this.msg = event
      }
  },
  created() {
    serverBus.$on('gest-event', this.handleGestEvent)
  }

}
</script>