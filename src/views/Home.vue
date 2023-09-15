<template>
    <cursor/>
    <main id="element">
        <div id="text" class="landing-hero">
            <div class="hero-row">
                <h1 class="hero-title">HELLO!</h1>
                <h1 class="hero-title over name">JEREMY</h1>
            </div>
            <div class="hero-row">
                <h1 class="hero-title">I</h1>
                <h1 class="hero-title over design">DESIGN</h1>
            </div>
            <div class="hero-row">
                <h1 class="hero-title over develop">DEVELOP</h1>
                <h1 class="hero-title">&</h1>
            </div>
            <div class="hero-row">
                <h1 class="hero-title">ENJOY</h1>
                <h1 class="hero-title over draw">DRAWING</h1>
            </div>
            <button class="scroll-down">
                <img src="@/assets/down-arrow.svg" alt="">
            </button>
            <div id="image-box" class="landing-image-container">
                <img id="name" src="@/assets/landing/Profile.webp" alt="" class="landing-image">
                <img id="design" src="@/assets/landing/design.png" alt="" class="landing-image">
                <img id="develop" src="@/assets/landing/develop.png" alt="" class="landing-image">
                <img id="draw" src="@/assets/landing/illustration.webp" alt="" class="landing-image">
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
    import cursor from '@/components/cursor.vue'
    import { onMounted } from 'vue';

    onMounted(() => {
        function imageHover(p1, p2){
            const text = document.querySelector(p1);
            const image = document.getElementById(p2);
            const imageBox = document.getElementById('image-box');

            document.addEventListener("mousemove", (event) => {
                const mousePosX = event.clientX;
                const mousePosY = event.clientY;
                
                imageBox.animate({
                    left: mousePosX +'px',
                    top: mousePosY + 'px'
                }, {duration: 300, fill: "forwards"});
            });
            
            if(text){
                text.addEventListener("mouseover", () => {
                    image.style.opacity = ".5";
                    image.style.transform = "scale(1)";
                });

                text.addEventListener("mouseout", () => {
                    image.style.opacity = "0";
                    image.style.transform = "scale(1.5)";
                });
            };
        };

        imageHover(".name", "name");
        imageHover(".design", "design");
        imageHover(".develop", "develop");
        imageHover(".draw", "draw");
    });
</script>