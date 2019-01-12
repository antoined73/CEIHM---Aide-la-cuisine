import Vue from 'vue'
import App from './App.vue'
import router from './services/router.js'
import store from './services/store.js'
import Buefy from 'buefy'

Vue.config.productionTip = false

// Buefy 
Vue.use(Buefy, { defaultIconPack: 'fa' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
