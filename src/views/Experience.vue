<template>
    <cursor/>
    <main id="element">
        <header class="experience-header">
            <h1 class="large-title">IN MY 8 YEARS OF DESIGN.</h1>
        </header>

        <section class="section-container">
            <h2 class="experience-subtitle">My Learnings</h2>
            <div class="col-system">
                <learningTile />
            </div>
        </section>

        <section class="section-container">
            <h2 class="experience-subtitle">My Experience</h2>
            <div class="row-system">
                <experienceTile />
            </div>
        </section>

        <section class="section-container">
            <h2 class="experience-subtitle">Capability</h2>
            <div class="col-system">
                <capabilityTile/>
            </div>
        </section>

        <section class="contact-section">
            <p class="contact-subtitle">
                Saw something cool?
                <br />Want to learn more?
                <br />Or any other cool things?
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

<script setup>
    import learningTile from '@/components/learningTile.vue'
    import experienceTile from '@/components/experienceTile.vue'
    import capabilityTile from '@/components/capabilityTile.vue'
    import projectFooter from '@/components/projectFooter.vue'
    import cursor from '@/components/cursor.vue'
    import { onMounted } from 'vue';
    import luxy from 'luxy.js';

    onMounted(() => {
        luxy.init({
            wrapper: '#element',
        });
    });
</script>