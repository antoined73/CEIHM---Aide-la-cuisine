import Vue from 'vue'
import App from './App.vue'
import router from './services/router.js'
import store from './services/store.js'
import Buefy from 'buefy'
import VueYoutube from 'vue-youtube'

export const serverBus = new Vue();


Vue.config.productionTip = false

// Buefy 
Vue.use(Buefy, { defaultIconPack: 'fa' })

Vue.use(VueYoutube)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
