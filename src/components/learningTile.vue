<template>
    <section class="learning-tile" v-for="learning in learnings">
        <img :src="learning.profile" alt="" class="profile-image">
        <div class="centered-text-container">
            <h1 class="centered-title">{{ learning.name }}</h1>
            <p class="centered-description">
                {{ learning.description1 }}
                <br />{{ learning.description2 }}
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Learning',
        data (){
            return {
            learnings: [
                {
                profile: './src/assets/experience/ArtCenter.png',
                name: 'ArtCenter College of Design',
                description1: 'BS in Science, Interaction Design',
                description2: 'Minor in Business',
                },
                {
                profile: './src/assets/experience/Odin.png',
                name: 'The Odin Project',
                description1: 'Foundation to Web Development',
                description2: 'Full Stack JavaScript (In Progress)',
                },
                {
                profile: './src/assets/experience/Codetime.png',
                name: 'Codetime.io',
                description1: 'Vue Fundamental',
                description2: 'Website Hosting',
                }
            ]
            }
        }
    }
</script>