<template>
    <section class="experience-tile" v-for="experience in experiences">
        <div class="experience-profile">
            <img :src="experience.profile" alt="" class="profile-image">
            <div class="left-text-container">
                <h1 class="left-title">{{ experience.name }}</h1>
                <p class="left-description">
                    {{ experience.roleDescription1 }}
                    <br />{{ experience.roleDescription2 }}
                </p>
            </div>
        </div>
        <div class="separator"></div>
        <div class="experience-description">
            <p class="left-description">
                <ul class="experience-list">
                    <li class="left-description">{{ experience.description1 }}</li>
                    <li class="left-description">{{ experience.description2 }}</li>
                    <li class="left-description">{{ experience.description3 }}</li>
                </ul>
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Learning',
        data (){
            return {
            experiences: [
                {
                profile: './src/assets/experience/Neuron.png',
                name: 'Neuron UX',
                roleDescription1: 'UX Designer (Part-time)',
                roleDescription2: 'July 2023 - Present',
                description1: 'Collaborated with fellow designers and project leads on client projects.',
                description2: 'Designed and strategized interface mostly for SAAS products.',
                description3: 'Participates in client meetings to present weekly progress and design variations.',
                },
                {
                profile: './src/assets/experience/Neuron.png',
                name: 'Neuron UX',
                roleDescription1: 'UX Design Intern',
                roleDescription2: 'Mar 2022 - Aug 2022',
                description1: 'Collaborated with fellow designers and project leads on four client projects.',
                description2: 'Designed and strategized digital products, including marketing sites, web apps, and SAAS.',
                description3: 'Created marketing collaterals that are still live, including a project case study, a blog post, and a presentation for an in-person company event.',
                },
                {
                profile: './src/assets/experience/Munative.png',
                name: 'Munative',
                roleDescription1: 'UIUX Designer',
                roleDescription2: 'Jan 2020 - Mar 2022',
                description1: 'Collaborated with developers to design and build a web app that creates paperless meetings.',
                description2: 'Participating in developing the brand, design system, and final interface.',
                description3: 'Partnered with 20 conferences and achieved 3.2k active users and 720k page views.',
                },
                {
                profile: './src/assets/experience/ArtCenter.png',
                name: 'ArtCenter',
                roleDescription1: 'Teaching Assistant',
                roleDescription2: 'Across various terms',
                description1: 'Aided instructor with setting up physical and online class sessions.',
                description2: 'Supported 15-20 students with HTML, CSS, JavaScript, Vue JS, and project critique and hosted personal office hours.',
                description3: 'Received recommendations for future positions.',
                }
            ]
            }
        }
    }
</script>