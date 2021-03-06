import Vue from 'vue'
import App from './App.vue'
import router from './services/router.js'
import store from './services/store.js'
import Buefy from 'buefy'
import RecipeFollower from './services/recipe-follower.js'
import VueYoutube from 'vue-youtube'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueEvents from 'vue-event-handler'
import { faHome, faChevronRight, faChevronLeft, faMicrophone, faHandPaper, faChevronUp, faChevronDown, faStopwatch, faPlayCircle, faPauseCircle, faUndo  } from '@fortawesome/free-solid-svg-icons'
import GestService from './services/gest.js'

window.gestIsStarted = false;

Vue.config.productionTip = false;

// Buefy 
Vue.use(Buefy, { defaultIconPack: 'fa' });

// Font Awesome
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.use(VueYoutube);
Vue.use(VueEvents);

library.add(
  faHome,
  faChevronLeft,
  faChevronRight,
  faMicrophone,
  faHandPaper,
  faChevronUp,
  faChevronDown,
  faPlayCircle,
  faPauseCircle,
  faUndo,
  faStopwatch
);

Vue.prototype.$follower = new RecipeFollower(store, router);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


GestService.initGest(app);