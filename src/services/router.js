import Vue from 'vue';
import VueRouter from 'vue-router';
// Views components
import AccueilView from './../components/views/AccueilView.vue'
import RecipeView from './../components/views/RecipeView.vue'
import RecipeHomeView from './../components/views/RecipeHomeView.vue'
import RecipeStepView from './../components/views/RecipeStepView.vue'
import NotFoundView from './../components/views/NotFoundView.vue'
import VideoView from './../components/views/VideoView.vue';
import ChronoView from './../components/views/ChronoView.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: AccueilView },
    { path: '/recipe/:recipeID',
     component: RecipeView,
     children: [
        {
            path: '',
            component: RecipeHomeView
        },
        {
          path: 'step/:stepID',
          component: RecipeStepView,
          meta: {key: ':stepID' }
        }
      ]
    },
    {path: '/recipe/:recipeID/step/:stepID/video', component: VideoView},
    {path: '/recipe/:recipeID/step/:stepID/chrono', component: ChronoView},
    { path: '*', component: NotFoundView }
];

const router = new VueRouter({
    mode: "history",
    routes: routes
});

export default router;