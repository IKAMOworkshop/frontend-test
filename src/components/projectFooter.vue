<template>
    <div class="footer-hidden">
        <div class="curve-top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
            </svg>
        </div>
        <footer class="footer">
            <button class="footer-up-arrow">
                <img src="@/assets/up-arrow.svg" alt="" class="footer-icon">
            </button>
            <div class="footer-row">
                <div class="footer-text-container">
                    <button class="footer-button">
                        <h3 class="footer-title">GET IN TOUCH</h3>
                        <p class="footer-text">my email.</p>
                    </button>
                    <button class="footer-button">
                        <h3 class="footer-title">GET IN TOUCH</h3>
                        <p class="footer-text">my email.</p>
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
    });
</script>