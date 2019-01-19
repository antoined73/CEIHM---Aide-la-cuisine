<template>
    <section class="hero is-primary is-bold">
        <div class="hero-body little-header">
            <div class="container">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <figure class="image is-32x32 is-marginless is-paddingless is-hidden-desktop">
                                <img :src="appIcon">
                            </figure>
                            <figure class="image is-48x48 is-marginless is-paddingless is-hidden-touch">
                                <img :src="appIcon">
                            </figure>
                        </div>
                        <div class="level-item">
                            <h1 class="title is-size-5-touch is-marginless">
                                CookAid
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="container">
            <h1 class="title is-size-5-touch is-marginless">
                CookAid
            </h1>
            </div> -->
        </div>
    </section>
</template>

<script>
import app_icon from '../../../public/icons/chef_512_white.png';

export default {
    name: 'HomeHeader',
    data(){
        return{
            appIcon : app_icon
        }
    }
}
</script>