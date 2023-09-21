<template>
    <div>
        <cursor/>
        <div id="element">
            <header class="contact-header mb-160">
                <h1 class="large-title">CONTACT!</h1>
            </header>

            <section class="contact-section-container">
                <div class="contact-text-container">
                    <button id="email-button" class="footer-button">
                        <h3 class="contact-title">GET IN TOUCH</h3>
                        <p class="contact-text">my email.</p>
                        <div id="email-outline" class="contact-outline"></div>
                    </button>
                    <div id="copy-message-container" class="copy-message-container">
                        <p id="copied-success" class="copy-message">Email copied!</p>
                        <p class="copy-message">Oops, can't copy!</p>
                    </div>
                    <a href="https://www.linkedin.com/in/jeremystudio/" target="_blank" id="linkedin-button" class="footer-button">
                        <h3 class="contact-title">CONNECT WITH ME</h3>
                        <p class="contact-text">my linkedin.</p>
                        <div id="linkedin-outline" class="contact-outline"></div>
                    </a>
                    <a href="https://github.com/IKAMOworkshop" target="_blank" id="github-button" class="footer-button">
                        <h3 class="contact-title">REVIEW MY CODE</h3>
                        <p class="contact-text">my github.</p>
                        <div id="github-outline" class="contact-outline"></div>
                    </a>
                </div>
            </section>
        </div>
        <div class="accent-circle"></div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import cursor from '@/components/cursor.vue'
    
    onMounted(() => {
        const emailButton = document.getElementById('email-button');
        const linkedinButton = document.getElementById('linkedin-button');
        const githubButton = document.getElementById('github-button');
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
        const linkedinOutline = document.getElementById('linkedin-outline');
        const githubOutline = document.getElementById('github-outline');

        emailButton.addEventListener('mouseover', () => {
            emailOutline.style.transform = "scalex(1)";
        });

        emailButton.addEventListener('mouseout', () => {
            emailOutline.style.transform = "scalex(0)";
        });

        linkedinButton.addEventListener('mouseover', () => {
            linkedinOutline.style.transform = "scalex(1)";
        });

        linkedinButton.addEventListener('mouseout', () => {
            linkedinOutline.style.transform = "scalex(0)";
        });

        githubButton.addEventListener('mouseover', () => {
            githubOutline.style.transform = "scalex(1)";
        });

        githubButton.addEventListener('mouseout', () => {
            githubOutline.style.transform = "scalex(0)";
        });
    });
</script>