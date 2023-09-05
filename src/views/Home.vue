<template>
    <main id="element">
        <div class="landing-hero">
            <div class="hero-row">
                <h1 class="hero-title">></h1>
                <h1 class="hero-title">HELLO THERE</h1>
            </div>
            <div class="hero-row">
                <h1 class="hero-title">I'M JEREMY</h1>
                <h1 class="hero-title">!</h1>
            </div>
            <div class="hero-row">
                <h1 class="hero-title">></h1>
                <h1 class="hero-title">I DESIGN</h1>
            </div>
            <div class="hero-row">
                <h1 class="hero-title">AND DEVELOP</h1>
                <h1 class="hero-title">.</h1>
            </div>
        </div>

        <section class="work-title-section">
            <h2 class="landing-section-title">WORKS.</h2>
        </section>
        <section class="landing-project-section">
            <projectTile />
        </section>
        <projectFooter />
    </main>
</template>

<script>
    import luxy from 'luxy.js';

    export default {
        name: 'App',
        mounted() {
            luxy.init({
                wrapper: '#element',
                wrapperSpeed: 0.050,
            });
    }
    };
</script>

<script setup>
import projectTile from '@/components/projectTile.vue'
import projectFooter from '@/components/projectFooter.vue'
</script>