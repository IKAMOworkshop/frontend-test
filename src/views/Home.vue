<template>
    <main id="element">
        <div class="landing-hero">
            <div class="hero-row">
                <h1 class="hero-title">HELLO!</h1>
                <h1 class="hero-title">I'M JEREMY</h1>
            </div>
            <div class="hero-row">
                <h1 class="hero-title">I</h1>
                <h1 class="hero-title">DESIGN</h1>
            </div>
            <div class="hero-row">
                <h1 class="hero-title">DEVELOP</h1>
                <h1 class="hero-title">&</h1>
            </div>
            <div class="hero-row">
                <h1 class="hero-title">ENJOY</h1>
                <h1 class="hero-title">DRAWING</h1>
            </div>
            <div class="scroll-down">
                <img src="@/assets/down-arrow.svg" alt="">
            </div>
            <div class="project-image-container">
                <img src="" alt="" class="project-image">
            </div>
        </div>

        <section class="work-title-section">
            <h2 class="landing-section-title">WORKS.</h2>
            <div class="scroll-title-container">
                <div class="scroll-row">
                    <div class="row-1">
                        <h3 class="scroll-title"> CASE STUDIES CASE STUDIES</h3>
                    </div>
                    <div class="row-1">
                        <h3 class="scroll-title"> CASE STUDIES CASE STUDIES</h3>
                    </div>
                </div>
                <div class="scroll-row">
                    <div class="row-2">
                        <h3 class="scroll-title"> CASE STUDIES CASE STUDIES</h3>
                    </div>
                    <div class="row-2">
                        <h3 class="scroll-title"> CASE STUDIES CASE STUDIES</h3>
                    </div>
                </div>
            </div>
        </section>
        <section class="landing-project-section">
            <projectTile />
        </section>
        <section class="contact-subtitle-section">
            <p class="contact-subtitle">
                Saw something cool?
                <br /> or
                <br />Want to learn more?
            </p>
        </section>
        <section class="contact-title-section">
            <h2 class="landing-section-title">LET'S CHAT!</h2>
            <div class="scroll-title-container">
                <div class="scroll-row">
                    <div class="row-1">
                        <h3 class="scroll-title">CONTACT ME CONTACT ME</h3>
                    </div>
                    <div class="row-1">
                        <h3 class="scroll-title">CONTACT ME CONTACT ME</h3>
                    </div>
                </div>
                <div class="scroll-row">
                    <div class="row-2">
                        <h3 class="scroll-title">CONTACT ME CONTACT ME</h3>
                    </div>
                    <div class="row-2">
                        <h3 class="scroll-title">CONTACT ME CONTACT ME</h3>
                    </div>
                </div>
            </div>
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
                wrapperSpeed: 0.08,
            });
        }
    };
</script>

<script setup>
    import projectTile from '@/components/projectTile.vue'
    import projectFooter from '@/components/projectFooter.vue'
</script>