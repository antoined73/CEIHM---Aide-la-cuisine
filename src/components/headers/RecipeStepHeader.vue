<template>
    <section class="hero is-primary">
        <div class="hero-body" :class="{'is-paddingless' : this.recipe}">
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

                    <div class="level-right">
                        <div v-if="chronoAvailable || chronoLaunched" class="level-item">
                            <TimerMinimal/>
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
import ChronoButton from '../ChronoButton.vue'
import TimerMinimal from '../TimerMinimal.vue'

export default {
    name: 'RecipeStepHeader',
    components : {
        HomeButton,
        ChronoButton,
        TimerMinimal
    },
    props : {
        recipe : {
            type: Object,
            default: null
        }
    },
    data(){
        return {
            chronoLaunched : false,
            chronoAvailable : false
        }
    },
    created(){
        this.chronoLaunched = this.$follower.chronoLaunched;
        this.chronoAvailable = this.$follower.chronoAvailable;
        // eslint-disable-next-line
        this.$follower.subscribeOnStepChangeCallback((newStep) =>{
            this.chronoLaunched = this.$follower.chronoLaunched;
            this.chronoAvailable = this.$follower.chronoAvailable;
        })
    }
}
</script>
