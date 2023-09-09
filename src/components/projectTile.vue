<template>
    <section class="project-section" v-for="project in projects">
        <div class="project-image-container">
            <img class="project-image" :src="project.cover" alt="">
        </div>
        <div class="detail-container">
            <h2 class="project-title">{{ project.name }}</h2>
            <div class="project-detail">
                <strong class="project-description">{{ project.description }}</strong>
                <p class="project-tags">{{ project.tags }}</p>
            </div>
            <button class="project-button">
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
    import { RouterView } from 'vue-router'
</script>