<template>
    <section class="project-section" v-for="project in projects">
        <div class="project-image-container image-hidden">
            <img class="project-image" :src="project.cover" alt="">
        </div>
        <div class="detail-container">
            <h2 class="project-title title-hidden">{{ project.name }}</h2>
            <div class="project-detail">
                <strong class="project-description description-hidden">{{ project.description }}</strong>
                <p class="project-tags tags-hidden">{{ project.tags }}</p>
            </div>
            <button class="project-button button-hidden">
                <router-link :to="'/'+project.path">
                    <img src="@/assets/right-arrow.svg" alt="">
                </router-link>
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Project',
        data (){
            return {
            projects: [
                {
                cover: './src/assets/landing/charm.png',
                name: 'CHARM',
                description: 'My personal portfolio for Spring 2023 ArtCenter Gradshow.',
                tags: '#vanillia',
                path: 'charm'
                },
                {
                cover: './src/assets/landing/charm.png',
                name: 'BRIGHT',
                description: 'A personal log blog for documenting milestones in my life.',
                tags: '#astro #sanity-cms',
                path: 'bright'
                },
                {
                cover: './src/assets/landing/charm.png',
                name: 'ARCANE',
                description: 'A portfolio project dedicated to showcase my frontend projects.',
                tags: '#vite-vue #threejs',
                path: 'arcane'
                }
            ]
            }
        }
    }
</script>

<script setup>
    import { onMounted } from 'vue';
    
    onMounted(() => {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('image-reveal');
                }
                else{
                    entry.target.classList.remove('image-reveal');
                }
            })
        },
        {
            threshold: .1,
        });

        const hiddenImage = document.querySelectorAll(".image-hidden");
        hiddenImage.forEach((el) => imageObserver.observe(el));

        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('title-reveal');
                }
                else{
                    entry.target.classList.remove('title-reveal');
                }
            })
            },
            {
                threshold: .1,
            });

            const hiddenTitle = document.querySelectorAll(".title-hidden");
            hiddenTitle.forEach((el) => titleObserver.observe(el));

        const descriptionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('description-reveal');
                }
                else{
                    entry.target.classList.remove('description-reveal');
                }
            })
            },
            {
                threshold: .1,
            });

        const hiddenDescription = document.querySelectorAll(".description-hidden");
        hiddenDescription.forEach((el) => descriptionObserver.observe(el));

        const tagsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('tags-reveal');
                }
                else{
                    entry.target.classList.remove('tags-reveal');
                }
            })
            },
            {
                threshold: .1,
            });

        const hiddenTags = document.querySelectorAll(".tags-hidden");
        hiddenTags.forEach((el) => tagsObserver.observe(el));

        const buttonObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('button-reveal');
                }
                else{
                    entry.target.classList.remove('button-reveal');
                }
            })
            },
            {
                threshold: .1,
            });

        const hiddenButton = document.querySelectorAll(".button-hidden");
        hiddenButton.forEach((el) => buttonObserver.observe(el));
    });

</script>