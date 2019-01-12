import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        recipes: [
            {
                id: 0,
                name: "Pâtes au beurre 1",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 1,
                name: "Pâtes au beurre 2",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 2,
                name: "Pâtes au beurre 3",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 3,
                name: "Pâtes au beurre 4",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 4,
                name: "Pâtes au beurre 5",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 0,
                name: "Pâtes au beurre 6",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 1,
                name: "Pâtes au beurre 7",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 2,
                name: "Pâtes au beurre 8",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 3,
                name: "Pâtes au beurre 9",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 4,
                name: "Pâtes au beurre 10",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 0,
                name: "Pâtes au beurre 11",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 1,
                name: "Pâtes au beurre 12",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 2,
                name: "Pâtes au beurre 13",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 3,
                name: "Pâtes au beurre 14",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 4,
                name: "Pâtes au beurre 15",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 0,
                name: "Pâtes au beurre 16",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 1,
                name: "Pâtes au beurre 17",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 2,
                name: "Pâtes au beurre 18",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 3,
                name: "Pâtes au beurre 19",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            },
            {
                id: 4,
                name: "Pâtes au beurre 20",
                description: "La délicieuse recette secrète de ma maman qui m'en faisait quand j'étais pas bien...",
                image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg"
            }
        ]
    }
})

export default store;