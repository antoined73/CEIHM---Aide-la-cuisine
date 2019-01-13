import Vue from 'vue'
import VueRouter from 'vue-router'

// Views components
import AccueilView from './../components/views/AccueilView.vue'
import RecipeView from './../components/views/RecipeView.vue'
import NotFoundView from './../components/views/NotFoundView.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: AccueilView },
    { path: '/recipe/:id', component: RecipeView },
    { path: '*', component: NotFoundView }
  ]
  
const router = new VueRouter({
    mode: "history",
    routes : routes
})

export default router;