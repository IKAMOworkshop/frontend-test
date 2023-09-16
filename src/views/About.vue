<template>
    <div>
        <cursor/>
        <div id="element">
            <header class="about-hero content-hidden">
                <div class="about-hero-col-1">
                    <div class="absolute">
                        <h1 class="about-title">
                            HELLO THERE!
                            <br />  I AM JEREMY
                        </h1>
                        <p class="about-description">I’m a designer who love to explore and pull from multiple fields to craft the unexpected.</p>
                    </div>
                </div>
                <div class="about-hero-col-2">
                    
                </div>
            </header>

            <section class="section-container content-hidden">
                <div class="col-system reverse">
                    <div class="col-main">
                        <h2 class="about-subtitle">I LOVE TO BUILD OUT THE THINGS I'VE DESIGNED.</h2>
                    </div>
                    <div class="col-sub">
                    </div>
                </div>
            </section>

            <section class="section-container content-hidden">
                <div class="col-system">
                    <div class="col-half">
                        <div class="image-container" style="height: 800px;">
                            <img src="@/assets/about/desk.png" alt="" class="about-image">
                        </div>
                        <div class="image-container" style="height: 600px;">
                            <img src="@/assets/about/prototype.png" alt="" class="about-image">
                        </div>
                    </div>
                    <div class="col-half" style="margin-top: 200px;">
                        <div class="image-container" style="height: 800px;">
                            <img src="@/assets/about/robot_model.png" alt="" class="about-image">
                        </div>
                        <div class="image-container" style="height: 600px;">
                            <img src="@/assets/about/gradshow_building.png" alt="" class="about-image">
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-container content-hidden">
                <div class="col-system">
                    <div class="col-main">
                        <h2 class="about-subtitle">
                            IT'S A FUN PROCESS, AND IT ALLOWS ME TO EXPLORE AND LEARN.
                            <br />
                            <br />OUTSIDE OF BUILDING THINGS, I ENJOYS...
                        </h2>
                    </div>
                    <div class="col-sub">
                    </div>
                </div>
            </section>

            <section class="section-container content-hidden">
                <div class="col-system ">
                    <div class="col-half" style="margin-top: 200px;">
                        <div class="model-container" style="height: 1200px;">

                        </div>
                        <div class="model-container" style="height: 600px;">

                        </div>
                    </div>
                    <div class="col-half">
                        <div class="model-container" style="height: 800px;">

                        </div>
                        <div class="model-container" style="height: 800px;">

                        </div>
                    </div>
                </div>
            </section>

            <section class="section-container content-hidden">
                <div class="col-system reverse">
                    <div class="col-main">
                        <h2 class="about-subtitle">IT HAS BEEN A WHILE SINCE COVICE, BUT I SPEND A LOT OF TIME TRAVELLING TO JAPAN.</h2>
                    </div>
                    <div class="col-sub">
                    </div>
                </div>
            </section>

            <section class="section-container content-hidden">
                <div class="col-system">
                    <div class="col-half">
                        <div class="image-container" style="height: 1400px;">
                            <img src="@/assets/about/japan_1.png" alt="" class="about-image">
                        </div>
                        <div class="image-container" style="height: 800px;">
                            <img src="@/assets/about/japan_2.png" alt="" class="about-image">
                        </div>
                    </div>
                    <div class="col-half" style="margin-top: 200px;">
                        <div class="image-container" style="height: 800px;">
                            <img src="@/assets/about/japan_3.png" alt="" class="about-image">
                        </div>
                        <div class="image-container" style="height: 600px;">
                            <img src="@/assets/about/japan_4.png" alt="" class="about-image">
                        </div>
                        <div class="image-container" style="height: 800px;">
                            <img src="@/assets/about/japan_5.png" alt="" class="about-image">
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-container content-hidden">
                <p class="contact-subtitle">
                    Saw something cool?
                    <br />Want to learn more?
                    <br />Or any other cool things?
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

            <projectFooter class="content-hidden"/>
        </div>
    </div>
</template>

<script setup>
    import projectFooter from '@/components/projectFooter.vue'
    import cursor from '@/components/cursor.vue'
    import { onMounted, onBeforeUpdate, onUpdated } from 'vue';
    import luxy from 'luxy.js';
    
    onMounted(() => {
        luxy.init({
            wrapper: '#element',
            wrapperSpeed: 0.06,
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
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
        hiddenElements.forEach((el) => observer.observe(el));
    });

    onBeforeUpdate(() => {
        luxy.init({
            wrapper: '#element',
            wrapperSpeed: 0.06,
        });
    });

    onUpdated(() => {
        luxy.init({
            wrapper: '#element',
            wrapperSpeed: 0.06,
        });
    });
</script>