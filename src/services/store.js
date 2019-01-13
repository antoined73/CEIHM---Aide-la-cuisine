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
                ingredients : [
                    {
                        id: 0,
                        name: "Farine",
                        quantity: 400,
                        unit: "g"
                    },
                     {
                        id: 1,
                        name: "Huile d'olive",
                        quantity: 2,
                        unit: "cuillères à soupe"
                    },
                     {
                        id: 2,
                        name: "Coquillettes",
                        quantity: 250,
                        unit: "g"
                    },
                     {
                        id: 3,
                        name: "Oignon",
                        quantity: 2,
                        unit: "unités"
                    },
                     {
                        id: 4,
                        name: "Levure",
                        quantity: 1,
                        unit: "sachet"
                    }
                ],
                steps: [
                    {
                        number: 0,
                        description: "Ajoutez les pâtes au plat."
                    },
                    {
                        number: 1,
                        description: "Ajoutez les pâtes au plat encore une fois."
                    },
                    {
                        number: 2,
                        description: "Ajoutez les pâtes au plat. Aller du nerf !"
                    }
                ]
            },
            {
                id: 1,
                name: "Pâtes au beurre 2",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre
            },
            {
                id: 2,
                name: "Pâtes au beurre 3",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre
            },
            {
                id: 3,
                name: "Pâtes au beurre 4",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre
            },
            {
                id: 4,
                name: "Pâtes au beurre 5",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre
            },
            {
                id: 5,
                name: "Pâtes au beurre 6",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre
            },
            {
                id: 6,
                name: "Pâtes au beurre 7",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre
            },
            {
                id: 7,
                name: "Pâtes au beurre 8",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre
            },
            {
                id: 8,
                name: "Pâtes au beurre 9",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre
            },
            {
                id: 9,
                name: "Pâtes au beurre 10",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre
            }
        ]
    },
    getters: {
      getRecipeById: (state) => (id) => {
        const recipe = state.recipes.find(r => r.id == id);
        return recipe;
      },
      getRecipeStepOfRecipe: (state, getters) => (recipeId, stepId) => {
        const recipe = getters.getRecipeById(recipeId);
        const step = recipe.steps.find(s => s.number == stepId);
        return step;
      },
      getIngredientsOfRecipe: (state, getters) => (id) => {
        const recipe = getters.getRecipeById(id);
        return recipe.ingredients;
      },
    }
})

export default store;