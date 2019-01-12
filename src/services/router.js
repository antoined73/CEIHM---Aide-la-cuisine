import Vue from 'vue'
import VueRouter from 'vue-router'

// Views components
import AccueilView from './../components/views/AccueilView.vue'
import NotFoundView from './../components/views/NotFoundView.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: AccueilView },
    { path: '/another_page', component: AccueilView },
    { path: '*', component: NotFoundView }
  ]
  
const router = new VueRouter({
    mode: "history",
    routes : routes
})

export default router;