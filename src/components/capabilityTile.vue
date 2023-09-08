<template>
    <section class="capability-tile" v-for="learning in learnings">
        <h1 class="left-title">{{ learning.name }}</h1>
        <div class="col-system">
            <div class="col-half-sm">
                <ul>
                    <li class="left-description">{{ learning.list1 }}</li>
                    <li class="left-description">{{ learning.list2 }}</li>
                    <li class="left-description">{{ learning.list3 }}</li>
                    <li class="left-description">{{ learning.list4 }}</li>
                    <li class="left-description">{{ learning.list5 }}</li>
                    <li class="left-description">{{ learning.list6 }}</li>
                </ul>
            </div>
            <div class="col-half">
                <ul>
                    <li class="left-description">{{ learning.list7 }}</li>
                    <li class="left-description">{{ learning.list8 }}</li>
                    <li class="left-description">{{ learning.list9 }}</li>
                    <li class="left-description">{{ learning.list10 }}</li>
                    <li class="left-description">{{ learning.list11 }}</li>
                    <li class="left-description">{{ learning.list12 }}</li>
                </ul>
            </div>
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
                name: 'Design Skills',
                list1: 'User Experience Design (UX)',
                list2: 'U Interface Design (UI)',
                list3: 'Web Design',
                list4: 'Wireframing',
                list5: 'Information Architecture',
                list6: 'Brand Development',
                list7: 'Responsive Design',
                list8: 'Digital Product Design',
                list9: 'VR/ XR Experience Design',
                list10: 'Rapid Prototyping',
                list11: 'Design Research',
                list12: 'Market Research',
                },
                {
                name: 'Frontedn Skills',
                list1: 'HTML',
                list2: 'CSS',
                list3: 'JavaScript',
                list4: 'Tailwind CSS',
                list5: 'SASS',
                list6: 'Webflow',
                list7: 'Vue',
                list8: 'Astro',
                list9: 'Vite',
                list10: 'Three JS',
                list11: 'Git',
                list12: 'Node',
                }
            ]
            }
        }
    }
</script>