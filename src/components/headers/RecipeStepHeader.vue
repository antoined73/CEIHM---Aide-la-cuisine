<template>
    <section class="hero is-primary">
        <div class="hero-body is-paddingless">
            <!-- If recipe exist -->
            <div v-if="recipe" class="container">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <HomeButton/>
                        </div>
                        <div class="level-item">
                            <h1 class="title is-size-5-touch">
                                {{this.recipe.name}}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- If recipe doesn't exist -->
            <div v-else class="container">
            <h1 class="title">
                Oh non ! :(
            </h1>
            </div>
        </div>
    </section>
</template>

<script>
import HomeButton from '../HomeButton.vue'

export default {
    name: 'RecipeStepHeader',
    components : {
        HomeButton
    },
    props : {
        recipe : {
            type: Object,
            default: null
        }
    }
}
</script>
