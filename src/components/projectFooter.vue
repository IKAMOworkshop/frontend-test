<template>
    <div class="footer-hidden">
        <div class="curve-top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
            </svg>
        </div>
        <footer class="footer">
            <button class="footer-up-arrow">
                <div id="up-button" class="footer-icon">
                    <img id="up-icon" src="@/assets/up-arrow.svg" alt="">
                </div>
            </button>
            <div class="footer-row">
                <div class="footer-text-container">
                    <button id="footer-email" class="footer-button">
                        <h3 class="footer-title">GET IN TOUCH</h3>
                        <p class="footer-text">my email.</p>
                        <div id="email-outline" class="footer-outline"></div>
                    </button>
                    <div id="copy-message-container" class="copy-message-container">
                        <p id="copied-success" class="copy-message">Email copied!</p>
                        <p class="copy-message">Oops, can't copy!</p>
                    </div>
                    <button id="footer-about" class="footer-button">
                        <router-link class="footer-button" to="/about">
                            <h3 class="footer-title">FIND OUT MORE</h3>
                            <p class="footer-text">about me.</p>
                            <div id="about-baseline" class="footer-outline"></div>
                        </router-link>
                    </button>
                </div>
                <div class="footer-text-container">
                    <div class="footer-copy-right">
                        <h3 class="footer-title">THANKS FOR STOPPING BY!</h3>
                        <p class="footer-description">©2023</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';

    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('footer-reveal');
                }
                else{
                    entry.target.classList.remove('footer-reveal');
                }
            })
        },
        {
            threshold: .1,
        });

        const hiddenFooter = document.querySelectorAll(".footer-hidden");
        hiddenFooter.forEach((el) => observer.observe(el));

        const emailButton = document.getElementById('footer-email');
        const aboutButton = document.getElementById('footer-about');
        const successMessage = document.getElementById('copied-success')
        const failedMessage = document.getElementById('copy-failed');

        function copyEmail() {
            navigator.clipboard.writeText("changjeremy0226@gmail.com").then(() => {
                console.log('Content copied to clipboard');
                successMessage.style.opacity = "1";
                setTimeout(() => {
                    successMessage.style.opacity = "0";
                }, 5000);
                /* Resolved - text copied to clipboard successfully */
            },() => {
                console.error('Failed to copy');
                failedMessage.style.opacity = "1";
                setTimeout(() => {
                    failedMessage.style.opacity = "0";
                }, 5000);
                /* Rejected - text failed to copy to the clipboard */
            });
        }

        emailButton.addEventListener('click', copyEmail);

        const emailOutline = document.getElementById('email-outline');
        const aboutOutline = document.getElementById('about-baseline');

        emailButton.addEventListener('mouseover', () => {
            emailOutline.style.transform = "scalex(1)";
        });

        emailButton.addEventListener('mouseout', () => {
            emailOutline.style.transform = "scalex(0)";
        });

        aboutButton.addEventListener('mouseover', () => {
            aboutOutline.style.transform = "scalex(1)";
        });

        aboutButton.addEventListener('mouseout', () => {
            aboutOutline.style.transform = "scalex(0)";
        });

        const upButton = document.getElementById('up-button');

        upButton.addEventListener('mouseover', () => {
            upButton.style.borderColor = "#181B1E";
        });

        upButton.addEventListener('mouseout', () => {
            upButton.style.borderColor = "#6FFFD4";
        })
    });
</script>