<template>
    <div>
        <cursor style="opacity: 0"/>
        <div id="element">
            <header class="project-header content-hidden">
                <h1 class="header-title">CHARM</h1>
                <div class="header-image charm">
                    <a href="https://jeremystudio.cc/#1" target="_blank" class="external-button"><img src="@/assets/right-up-arrow.svg" alt="" class="link-icon"></a>
                    <a href="https://github.com/IKAMOworkshop/jeremystudio.cc" target="_blank" class="external-button"><img src="@/assets/github-white.svg" alt=""></a>
                </div>
                <div class="project-infos">
                    <div class="project-subtitle-box">
                        <h2 class="project-subtitle">A web design and development project for the Spring 2023 ArtCenter Gradshow acting as a portfolio for visitors to browse and discuss design projects.</h2>
                    </div>
                    <div class="project-info">
                        <div class="col-half-sm text-gap">
                            <h4 class="detail-title">Technology.</h4>
                            <p class="detail-description">HTML, SCSS, JS, Netlify</p>
                        </div>
                        <div class="col-half-sm text-gap">
                            <h4 class="detail-title">Timeline.</h4>
                            <p class="detail-description">Jul 2023 - Aug 2023</p>
                        </div>
                    </div>
                </div>
            </header>

            <section class="section-container content-hidden">
                <div class="video-wrapper">
                    <!-- Video -->
                    <video class="content-video" autoplay muted loop>
                        <source src="@/assets/charm/landing.mp4" type="video/mp4">
                    </video>
                </div>
            </section>

            <section class="section-container content-hidden">
                <div class="project-infos">
                    <div class="col-title">
                        <h2 class="project-subtitle">Creating a multi-level experience with immersive and engaging media.</h2>
                    </div>
                    <div class="col-half">
                        <p class="left-description">To create a different level of engagement, I utilize the strength of scale to curate experiences for different type of browsing experience - first glance, quick digest, and deep dive.</p>
                    </div>
                </div>
            </section>

            <section class="section-container content-hidden">
                <div class="col-system mb-36">
                    <div class="col-half">
                        <div class="video-wrapper-sm">
                            <!-- Video -->
                            <video class="content-video" autoplay muted loop>
                                <source src="@/assets/charm/cursor_scroll.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="col-half">
                        <div class="video-wrapper-sm">
                            <!-- Video -->
                            <video class="content-video" autoplay muted loop>
                                <source src="@/assets/charm/navigation.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-container content-hidden">
                <h2 class="section-title">BUILDING MY OWN ROUTER TO BREAK THE LIMITS OF VANILLIA HREF ATTRIBUTE.</h2>
            </section>

            <section class="section-container">
                <div class="image-container">
                    <img src="@/assets/charm/router_code.png" alt="" class="content-image content-hidden">
                    <img src="@/assets/charm/navigation.png" alt="" class="content-image content-hidden">
                </div>
            </section>

            <section class="section-container content-hidden">
                <div class="project-infos">
                    <div class="col-title">
                        <h2 class="project-subtitle">Integrating a modular workflow to help organize the code.</h2>
                    </div>
                    <div class="col-half">
                        <p class="left-description">To help with the organization of the file structure, I utilized the import feature from SCSS and the ability to include multiple script tags in HTML to create a more modular workflow of only including the required files.</p>
                    </div>
                </div>
            </section>

            <section class="section-container content-hidden">
                <img src="@/assets/charm/modular_code.png" alt="" class="content-image">
            </section>

            <section class="section-container content-hidden">
                <h2 class="section-title">CONNECTING NETLIFY AND GITHUB TO DIRECTLY DEPLOY TO TEST AND PRODUCTION.</h2>
            </section>

            <section class="section-container content-hidden">
                <img src="@/assets/charm/netlify.png" alt="" class="content-image">
            </section>

            <section class="section-container">
                <h2 class="project-subtitle mb-36 content-hidden">Takeaways and learnings.</h2>
                <div class="col-system mb-36 content-hidden">
                    <div class="takeaway-box ">
                        <h4 class="detail-title">SCSS variable's is limited when coding responsive.</h4>
                        <p class="detail-description">Variables for SCSS won't be beneficial when coding responsive, but they are still good to include when coding a larger-scale project.</p>
                    </div>
                    <div class="takeaway-box">
                        <h4 class="detail-title">File pathing is crucial for a nice-looking URL.</h4>
                        <p class="detail-description">File pathing is important for slugs. If you want a nice-looking URL - create a folder of the respected page name and have an index file within it.</p>
                    </div>
                </div>
                <div class="col-system content-hidden">
                    <div class="takeaway-box">
                        <h4 class="detail-title">JS optimization is not only performance but readability.</h4>
                        <p class="detail-description">Optimizing JS may only sometimes be good in some situations. Think about readability, time usage, etc. - no need to over-complicate your code.</p>
                    </div>
                    <div class="takeaway-box">
                        <h4 class="detail-title">Write your CSS to be responsive-friendly.</h4>
                        <p class="detail-description">Use max and min for width and height to have an easier time during responsive. Moreover, percentage for width is also very helpful.</p>
                    </div>
                </div>
            </section>


            <router-link id="let-chat" class="contact-title-section content-hidden" to="/bright">
                <h2 id="chat-title" class="landing-section-title">NEXT UP!</h2>
                <div class="scroll-title-container">
                    <div class="scroll-row">
                        <div class="row-1">
                            <h3 class="scroll-title">NEXT PROJECT NEXT PROJECT</h3>
                        </div>
                        <div class="row-1">
                            <h3 class="scroll-title">NEXT PROJECT NEXT PROJECT</h3>
                        </div>
                    </div>
                    <div class="scroll-row">
                        <div class="row-2">
                            <h3 class="scroll-title">NEXT PROJECT NEXT PROJECT</h3>
                        </div>
                        <div class="row-2">
                            <h3 class="scroll-title">NEXT PROJECT NEXT PROJECT</h3>
                        </div>
                    </div>
                </div>
            </router-link>

            <projectFooter />
        </div>
    </div>
</template>

<script setup>
    import cursor from '@/components/cursor.vue';
    import projectFooter from '@/components/projectFooter.vue'
    import { onMounted } from 'vue';

    onMounted(() => {
        const contactButton = document.getElementById('let-chat');
        const contactText = document.getElementById('chat-title');

        contactButton.addEventListener('mouseover', () => {
            contactText.style.transform = "scale(1.2) rotate(5deg)";
        });

        contactButton.addEventListener('mouseout', () => {
            contactText.style.transform = "scale(1) rotate(0deg)"
        });

        const observer = new IntersectionObserver((entries) => {
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
        hiddenElements.forEach((el) => observer.observe(el));
    });
</script>