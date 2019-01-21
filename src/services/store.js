import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import coquillettes_au_beurre from './../assets/images/recipes/coquillettes_au_beurre.jpg';
import quiche_lorraine from './../assets/images/recipes/quiche.jpeg';

const store = new Vuex.Store({
    state: {
        recipes: [
            {
                id: 0,
                name: "Quiche lorraine",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: quiche_lorraine,
                ingredients : [
                    {
                        id: 0,
                        name: "Pâte brisée",
                        image:"https://s1.croquonslavie.fr/cdn/farfuture/oxgVBWP97W5tV6B5FT6hnF83sOhzIEFbPEkUxP7Q3yU/mtime:1533438158/sites/default/files/images/product/principal/4f6eb4c8-506f-4c29-95f5-7cb02623b77c.png",
                        quantity: 1,
                        unit: ""
                    },
                     {
                        id: 1,
                        name: "Lardon fumé",
                        image:"https://image.afcdn.com/recipe/20170607/67477_w300h300c1.jpg",
                        quantity: 200,
                        unit: "g"
                    },
                     {
                        id: 2,
                        name: "Jambon blanc",
                        image:"https://www.concept-epices.fr/I-Grande-2124-saumure-bouillon-1-kg.net.jpg",
                        quantity: 150,
                        unit: "g"
                    },
                     {
                        id: 3,
                        name: "Fromage rapé",
                        image:"https://fr.aldi.lu/images/emmental_rape_big_14969.jpg",
                        quantity: 200,
                        unit: "g"
                    },
                    {
                        id: 4,
                        name: "Oeuf",
                        image:"http://www.domisyl.com/137-large_default/oeuf-en-poudre.jpg",
                        quantity: 4,
                        unit: ""
                    },
                    {
                        id: 5,
                        name: "Crème liquide",
                        image:"http://www.primantilles.com/1850-large_default/creme-liquide-elle-vire-uht.jpg",
                        quantity: 40,
                        unit: "cl"
                    },
                    {
                        id: 6,
                        name: "Muscade",
                        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgXSgbHhxRiBMWN-ZEn_-TFKKRW71w3yvQBxPxExbyu2F5c8v",
                        quantity: 2,
                        unit: "pincées"
                    }
                ],
                steps: [
                    {
                        number: 0,
                        description: "Préchauffez votre four à 180°C (th.6).",
                        video: null,
                        chrono : null
                    },
                    {
                        number: 1,
                        description: "Étalez la pâte dans un moule à tarte.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep : 150
                        },
                        chrono : null
                    },
                    {
                        number: 2,
                        description: "Piquez la pâte avec une fourchette.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep : 160
                        },
                        chrono : null
                    },
                    {
                        number: 3,
                        description: "Cassez les oeufs dans un saladier et mélangez avec un fouet.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep : 170
                        },
                        chrono : null
                    },
                    {
                        number: 4,
                        description: "Ajoutez la crème fraîche.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep : 182
                        },
                        chrono : null
                    },
                    {
                        number: 5,
                        description: "Ajoutez sel et poivre et mélangez.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep : 192
                        },
                        chrono : null
                    },
                    {
                        number: 6,
                        description: "Disposez les lardons crus sur la pâte.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep : 225
                        },
                        chrono : null
                    },
                    {
                        number: 7,
                        description: "Ajoutez le gruyère sur la pâte.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep : 245
                        },
                        chrono : null
                    },
                    {
                        number: 8,
                        description: "Mettre au four pendant 30 min à 180°C. Lancez le chronomètre intégré pour plus de facilité :)",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep : 309
                        },
                        chrono : {
                            startTimeInSeconds: 30
                        }
                    },
                ]
            },
            {
                id: 1,
                name: "Pâtes au beurre 2",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                video: null
            },
            {
                id: 2,
                name: "Pâtes au beurre 3",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                video: null
            },
            {
                id: 3,
                name: "Pâtes au beurre 4",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                video: null
            },
            {
                id: 4,
                name: "Pâtes au beurre 5",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                video: null
            },
            {
                id: 5,
                name: "Pâtes au beurre 6",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                video: null
            },
            {
                id: 6,
                name: "Pâtes au beurre 7",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                video: null
            },
            {
                id: 7,
                name: "Pâtes au beurre 8",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                video: null
            },
            {
                id: 8,
                name: "Pâtes au beurre 9",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                video: null
            },
            {
                id: 9,
                name: "Pâtes au beurre 10",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: coquillettes_au_beurre,
                video: null
            }
        ]
        ,
        currentFollowedRecipe : null
    },
    getters: {
      getRecipeById: (state) => (id) => {
        const recipe = state.recipes.find(r => r.id == id);
        return recipe;
      },
      getRecipeStepOfRecipe: (state, getters) => (recipeId, stepId) => {
        const recipe = getters.getRecipeById(recipeId);
        var step = null;
        if(recipe.steps) step = recipe.steps.find(s => s.number == stepId);
        return step;
      },
      getIngredientsOfRecipe: (state, getters) => (id) => {
        const recipe = getters.getRecipeById(id);
        return recipe.ingredients;
      },
    }
})

export default store;