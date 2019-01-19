import Vue from 'vue'
import App from './App.vue'
import router from './services/router.js'
import store from './services/store.js'
import Buefy from 'buefy'
import RecipeFollower from './services/recipe-follower.js'
import VueYoutube from 'vue-youtube'

Vue.config.productionTip = false

// Buefy 
Vue.use(Buefy, { defaultIconPack: 'fa' })

Vue.use(VueYoutube)

Vue.prototype.$follower = new RecipeFollower(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
