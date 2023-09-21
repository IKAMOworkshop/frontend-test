<template>
    <div>
        <div id="element">
            <header class="experience-header content-hidden">
                <h1 class="large-title">IN MY 8 YEARS OF DESIGN.</h1>
            </header>

            <button id="down-button" class="scroll-down-experience">
                <img src="@/assets/down-arrow.svg" alt="">
            </button>

            <section class="section-container">
                <h2 class="experience-subtitle content-hidden">My Learnings</h2>
                <div class="col-system content-hidden">
                    <learningTile />
                </div>
            </section>

            <section class="section-container">
                <h2 class="experience-subtitle content-hidden">My Experience</h2>
                <div class="row-system content-hidden">
                    <experienceTile />
                </div>
            </section>

            <section class="section-container">
                <h2 class="experience-subtitle content-hidden">Capability</h2>
                <div class="col-system content-hidden">
                    <capabilityTile />
                </div>
            </section>

            <section class="contact-section content-hidden">
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

            <projectFooter />
        </div>
    </div>
</template>

<script setup>
    import learningTile from '@/components/learningTile.vue'
    import experienceTile from '@/components/experienceTile.vue'
    import capabilityTile from '@/components/capabilityTile.vue'
    import projectFooter from '@/components/projectFooter.vue'
    import { onMounted } from 'vue';

    onMounted(() => {
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
</script>