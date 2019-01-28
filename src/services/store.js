import Vue from 'vue'
import Vuex from 'vuex'
import coquillettes_au_beurre from './../assets/images/recipes/coquillettes_au_beurre.jpg';
import quiche_lorraine from './../assets/images/recipes/quiche.jpeg';
import maki_saumon from './../assets/images/recipes/maki_saumon.jpg';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        recipes: [
            {
                id: 0,
                name: "Quiche lorraine",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: quiche_lorraine,
                ingredients: [
                    {
                        id: 0,
                        name: "Pâte brisée",
                        image: "https://s1.croquonslavie.fr/cdn/farfuture/oxgVBWP97W5tV6B5FT6hnF83sOhzIEFbPEkUxP7Q3yU/mtime:1533438158/sites/default/files/images/product/principal/4f6eb4c8-506f-4c29-95f5-7cb02623b77c.png",
                        quantity: 1,
                        unit: ""
                    },
                    {
                        id: 1,
                        name: "Lardon fumé",
                        image: "https://image.afcdn.com/recipe/20170607/67477_w300h300c1.jpg",
                        quantity: 200,
                        unit: "g"
                    },
                    {
                        id: 2,
                        name: "Jambon blanc",
                        image: "https://www.concept-epices.fr/I-Grande-2124-saumure-bouillon-1-kg.net.jpg",
                        quantity: 150,
                        unit: "g"
                    },
                    {
                        id: 3,
                        name: "Fromage rapé",
                        image: "https://fr.aldi.lu/images/emmental_rape_big_14969.jpg",
                        quantity: 200,
                        unit: "g"
                    },
                    {
                        id: 4,
                        name: "Oeuf",
                        image: "http://www.domisyl.com/137-large_default/oeuf-en-poudre.jpg",
                        quantity: 4,
                        unit: ""
                    },
                    {
                        id: 5,
                        name: "Crème liquide",
                        image: "http://www.primantilles.com/1850-large_default/creme-liquide-elle-vire-uht.jpg",
                        quantity: 40,
                        unit: "cl"
                    },
                    {
                        id: 6,
                        name: "Muscade",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgXSgbHhxRiBMWN-ZEn_-TFKKRW71w3yvQBxPxExbyu2F5c8v",
                        quantity: 2,
                        unit: "pincées"
                    }
                ],
                steps: [
                    {
                        number: 0,
                        description: "Préchauffez votre four à 180°C (th.6).",
                        video: null,
                        chrono: null
                    },
                    {
                        number: 1,
                        description: "Étalez la pâte dans un moule à tarte.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep: 150
                        },
                        chrono: null
                    },
                    {
                        number: 2,
                        description: "Piquez la pâte avec une fourchette.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep: 160
                        },
                        chrono: null
                    },
                    {
                        number: 3,
                        description: "Cassez les oeufs dans un saladier et mélangez avec un fouet.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep: 170
                        },
                        chrono: null
                    },
                    {
                        number: 4,
                        description: "Ajoutez la crème fraîche.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep: 182
                        },
                        chrono: null
                    },
                    {
                        number: 5,
                        description: "Ajoutez sel et poivre et mélangez.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep: 192
                        },
                        chrono: null
                    },
                    {
                        number: 6,
                        description: "Disposez les lardons crus sur la pâte.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep: 225
                        },
                        chrono: null
                    },
                    {
                        number: 7,
                        description: "Ajoutez le gruyère sur la pâte.",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep: 245
                        },
                        chrono: null
                    },
                    {
                        number: 8,
                        description: "Mettre au four pendant 30 min à 180°C. Lancez le chronomètre intégré pour plus de facilité :)",
                        video: {
                            id: "Z5CXPs1r0fo",
                            timestampStep: 309
                        },
                        chrono: {
                            startTimeInSeconds: 30
                        }
                    },
                ]
            },
            {
                id: 1,
                name: "Maki saumon",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: maki_saumon,
                ingredients: [
                    {
                        id: 0,
                        name: "Riz à sushi",
                        image: "https://image.afcdn.com/recipe/20181108/83695_w100h100c1cx1594cy1594cxt0cyt0cxb3189cyb3189.png",
                        quantity: 4,
                        unit: "verres"
                    }, {
                        id: 1,
                        name: "Vinaigre de riz",
                        image: "https://image.afcdn.com/recipe/20170621/69188_w100h100c1cxt0cyt0cxb700cyb700.jpg",
                        quantity: 1,
                        unit: "petite tasse"
                    }, {
                        id: 2,
                        name: "Sucre",
                        image: "https://image.afcdn.com/recipe/20170607/67691_w100h100c1cx350cy350.jpg",
                        quantity: 2,
                        unit: "cuilllère à soupe"
                    }, {
                        id: 3,
                        name: "Sel",
                        image: "https://image.afcdn.com/recipe/20170607/67687_w100h100c1cx350cy350.jpg",
                        quantity: 1,
                        unit: "cuillière à soupe"
                    }, {
                        id: 4,
                        name: "Concombre",
                        image: "https://image.afcdn.com/recipe/20170607/67693_w100h100c1cx350cy350.jpg",
                        quantity: 1,
                        unit: ""
                    }, {
                        id: 5,
                        name: "Avocats",
                        image: "https://image.afcdn.com/recipe/20170607/67382_w100h100c1cx350cy350.jpg",
                        quantity: 2,
                        unit: "gros avocats"
                    }, {
                        id: 7,
                        name: "Saumon frais ou fumé",
                        image: "https://image.afcdn.com/recipe/20170607/67773_w100h100c1cx350cy350.jpg",
                        quantity: 200,
                        unit: "g"
                    }, {
                        id: 8,
                        name: "Feuille d'algue Nori",
                        image: "https://image.afcdn.com/recipe/20171110/74695_w100h100c1cx3000cy2000cxt0cyt0cxb6000cyb4000.jpg",
                        quantity: 1,
                        unit: ""
                    }, {
                        id: 9,
                        name: "Graines de sésame",
                        image: "https://image.afcdn.com/recipe/20170607/67391_w100h100c1cx350cy350.jpg",
                        quantity: 1,
                        unit: ""
                    }, {
                        id: 10,
                        name: "Persil haché",
                        image: "https://image.afcdn.com/recipe/20170607/67650_w100h100c1cx350cy350.jpg",
                        quantity: 1,
                        unit: ""
                    },
                ],
                steps: [
                    {
                        number: 0,
                        description: "Préparation riz (déjà fait). Il suffit de lancer un timer",
                        video: null,
                        chrono: {
                            startTimeInSeconds: 120
                        }
                    }, {
                        number: 1,
                        description: "Etalez une natte de bambou sur le plan de travail.",
                        video: null,
                        chrono: null
                    }, {
                        number: 2,
                        description: "Coupez en lamelles le saumon, le concombre, les avocats.",
                        video: null,
                        chrono: null
                    }, {
                        number: 3,
                        description: "Humidifiez vos mains (avec du vinaigre de riz par exemple).",
                        video: null,
                        chrono: null
                    }, {
                        number: 4,
                        description: "Posez la feuille d'algue dans le sens de la largeur, et recouvrez-la d'une" +
                            " couche de riz.\n" +
                            "Laissez un ou deux centimètres non recouvert sur la largeur supérieure afin de pouvoir ensuite refermer aisément le rouleau.",
                        video: {
                            id: "3Qmxkf3qwXY",
                            timestampStep: 98
                        },
                        chrono: null
                    }, {
                        number: 5,
                        description: "Placez dans le sens de la largeur une bande de saumon, une de concombre, une d'avocat.",
                        video: null,
                        chrono: null
                    }, {
                        number: 6,
                        description: "Saupoudrez de grains de sésame, et du persil haché.",
                        video: null,
                        chrono: null
                    }, {
                        number: 7,
                        description: "Enroulez l'algue en vous servant de la natte de bambou.",
                        video: {
                            id: "t52gsJSOF_E",
                            timestampStep: 380
                        },
                        chrono: null
                    }, {
                        number: 8,
                        description: "Humidifiez la bande laissée libre pour une fermeture plus facile.",
                        video: null,
                        chrono: null
                    }, {
                        number: 9,
                        description: "Placez au frais.",
                        video: null,
                        chrono: null
                    }
                ],
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
        currentFollowedRecipe: null
    },
    getters: {
        getRecipeById: (state) => (id) => {
            const recipe = state.recipes.find(r => r.id == id);
            return recipe;
        },
        getRecipeStepOfRecipe: (state, getters) => (recipeId, stepId) => {
            const recipe = getters.getRecipeById(recipeId);
            var step = null;
            if (recipe.steps) step = recipe.steps.find(s => s.number == stepId);
            return step;
        },
        getIngredientsOfRecipe: (state, getters) => (id) => {
            const recipe = getters.getRecipeById(id);
            return recipe.ingredients;
        },
    }
})

export default store;
