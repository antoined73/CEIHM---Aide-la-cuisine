import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import coquillettes_au_beurre from './../assets/images/recipes/coquillettes_au_beurre.jpg';

const store = new Vuex.Store({
    state: {
        recipes: [
            {
                id: 0,
                name: "Pâtes au beurre 1",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            },
            {
                id: 1,
                name: "Pâtes au beurre 2",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            },
            {
                id: 2,
                name: "Pâtes au beurre 3",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            },
            {
                id: 3,
                name: "Pâtes au beurre 4",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            },
            {
                id: 4,
                name: "Pâtes au beurre 5",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            },
            {
                id: 5,
                name: "Pâtes au beurre 6",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            },
            {
                id: 6,
                name: "Pâtes au beurre 7",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            },
            {
                id: 7,
                name: "Pâtes au beurre 8",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            },
            {
                id: 8,
                name: "Pâtes au beurre 9",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            },
            {
                id: 9,
                name: "Pâtes au beurre 10",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                videoId:"9_5wHw6l11o",
                currentStep: 0,
                maxStep: 5
            }
        ]
    },
    getters: {
      getRecipeById: (state) => (id) => {
        const recipe = state.recipes.find(r => r.id == id);
        return recipe;
      }
    }
})

export default store;