<template>
    <div>
        <cursor style="opacity: 0"/>
        <div id="element">
            <div id="text" class="landing-hero hero-hidden">
                <div class="hero-row first">
                    <h1 class="hero-title over hello">HELLO</h1>
                    <h1 class="hero-title hero-title-support"> YOU!</h1>
                </div>
                <div class="hero-row second">
                    <h1 class="hero-title hero-title-support">I'M</h1>
                    <h1 class="hero-title over name">JEREMY</h1>
                </div>
                <div class="hero-row third">
                    <h1 class="hero-title hero-title-support">A</h1>
                    <h1 class="hero-title over design">DESIGNER</h1>
                </div>
                <div class="hero-row fourth">
                    <h1 class="hero-title hero-title-support">THAT</h1>
                    <h1 class="hero-title over develop">BUILD</h1>
                </div>
                <div id="image-box" class="landing-image-container">
                    <img id="name" src="@/assets/landing/Profile.webp" alt="" class="landing-image">
                    <img id="design" src="@/assets/landing/design.png" alt="" class="landing-image">
                    <img id="develop" src="@/assets/landing/develop.png" alt="" class="landing-image">
                    <img id="hello" src="@/assets/landing/hello.jpg" alt="" class="landing-image">
                </div>
            </div>

            <button @click="$emit('scrollDown', 'project-section')" id="down-button" class="scroll-down hero-hidden">
                <img src="@/assets/down-arrow.svg" alt="">
            </button>

            <section class="work-title-section content-hidden">
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

            <section id="project-section" ref="targetRef" class="landing-project-section">
                <projectTile />
            </section>

            <section class="contact-subtitle-section content-hidden">
                <p class="contact-subtitle">
                    Saw something cool?
                    <br /> or
                    <br />Want to learn more?
                </p>
            </section>

            <section class="contact-title-section content-hidden">
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
        </div>
    </div>
</template>

<script setup>
    import cursor from '@/components/cursor.vue';
    import projectTile from '@/components/projectTile.vue'
    import projectFooter from '@/components/projectFooter.vue'
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
                }, {duration: 2000, fill: "forwards"});
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
        imageHover(".hello", "hello");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('hero-reveal');
                }
                else{
                    entry.target.classList.remove('hero-reveal');
                }
            })
        },
        {
            threshold: .1,
        });

        const hiddenHero = document.querySelectorAll(".hero-hidden");
        hiddenHero.forEach((el) => observer.observe(el));

        const contentObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('content-reveal');
                }
                else{
                    entry.target.classList.remove('content-reveal');
                }
            })
        },
        {
            threshold: .1,
        });

        const hiddenElements = document.querySelectorAll(".content-hidden");
        hiddenElements.forEach((el) => contentObserver.observe(el));
    });
</script>