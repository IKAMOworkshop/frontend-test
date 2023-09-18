<template>
    <div>
        <nav>
            <ul class="nav-group">
                <li><button><router-link to="/" class="router-link"><img src="@/assets/logo.svg" alt="" class="landing-home"></router-link></button></li>
                <div class="nav-link-group">
                    <li id="about-link" class="router-list-item">
                        <button><router-link to="/about" class="router-link" id="about-text">About.</router-link></button>
                        <div id="about-outline" class="nav-outline"></div>
                    </li>
                    <li id="experience-link" class="router-list-item">
                        <button><router-link to="/experience" class="router-link" id="experience-text">Experience.</router-link></button>
                        <div id="experience-outline" class="nav-outline"></div>
                    </li>
                    <li id="contact-link" class="router-list-item">
                        <button><router-link to="/contact" class="router-link" id="contact-text">Contact.</router-link></button>
                        <div id="contact-outline" class="nav-outline"></div>
                    </li>
                    <ul class="social-link-group">
                        <li class="email-container">
                            <button id="nav-email"><img src="@/assets/mail.svg" alt="" class="social-link"></button>
                            <div id="copy-message-container" class="copy-message-container">
                                <p id="copied-success" class="copy-message">Email copied!</p>
                                <p class="copy-message">Oops, can't copy!</p>
                            </div>
                        </li>
                        <li><a href="https://github.com/IKAMOworkshop" target="_blank"><img src="@/assets/github.svg" alt="" class="social-link"></a></li>
                        <li><a href="https://www.linkedin.com/in/jeremystudio/" target="_blank"><img src="@/assets/linkedin.svg" alt="" class="social-link"></a></li>
                    </ul>
                </div>
            </ul>
        </nav>

        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>



    <canvas id="bg" ref="experience"></canvas>
</template>

<script setup>
    import { RouterView } from 'vue-router'

    // Three JS
    import * as THREE from 'three';
    import { onMounted } from 'vue';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000,);
    camera.position.set(0,5,20);
    camera.rotation.set(0,0,0);

    const box = new THREE.Mesh(
        new THREE.BoxGeometry(8,8,8),
        new THREE.MeshStandardMaterial({color: 0x008080}),
    );

    const directionLight = new THREE.DirectionalLight(0xffffff,1);
    directionLight.rotation.set(0,45,-45);

    scene.add(camera, box, directionLight);

    onMounted(() => {
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
            antialias: true,
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x181B1E,1)

        window.addEventListener('resize', function(){
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        function animate(){
            requestAnimationFrame(animate);
            box.rotation.x += 0.01;
            box.rotation.y += 0.005;
            box.rotation.z += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        const aboutLink = document.getElementById('about-link');
        const aboutOutline = document.getElementById('about-outline');
        const aboutText = document.getElementById('about-text');
        const experienceLink = document.getElementById('experience-link');
        const experienceOutline = document.getElementById('experience-outline');
        const experienceText = document.getElementById('experience-text');
        const contactLink = document.getElementById('contact-link');
        const contactOutline = document.getElementById('contact-outline');
        const contactText = document.getElementById('contact-text');

        aboutLink.addEventListener('mouseover', function(){
            aboutOutline.style.transform = "scalex(1)";
            aboutText.animate({
                color: 'rgb(255,255,255)',
            }, {duration: 500, fill: "forwards"});
        });
        
        aboutLink.addEventListener('mouseout', function(){
            aboutOutline.style.transform = "scalex(0)";
            aboutText.animate({
                color: 'rgb(112,126,139)',
            }, {duration: 500, fill: "forwards"});
        });

        experienceLink.addEventListener('mouseover', function(){
            experienceOutline.style.transform = "scalex(1)";
            experienceText.animate({
                color: 'rgb(255,255,255)',
            }, {duration: 500, fill: "forwards"});
        });
        
        experienceLink.addEventListener('mouseout', function(){
            experienceOutline.style.transform = "scalex(0)";
            experienceText.animate({
                color: 'rgb(112,126,139)',
            }, {duration: 500, fill: "forwards"});
        });

        contactLink.addEventListener('mouseover', function(){
            contactOutline.style.transform = "scalex(1)";
            contactText.animate({
                color: 'rgb(255,255,255)',
            }, {duration: 500, fill: "forwards"});
        });
        
        contactLink.addEventListener('mouseout', function(){
            contactOutline.style.transform = "scalex(0)";
            contactText.animate({
                color: 'rgb(112,126,139)',
            }, {duration: 500, fill: "forwards"});
        });

        const copyMessage = document.getElementById('copy-message-container');

        document.addEventListener("mousemove", (event) => {
            const mousePosX = event.clientX;
            const mousePosY = event.clientY;
            
        copyMessage.animate({
            left: mousePosX +'px',
            top: mousePosY + 'px'
        }, {duration: 300, fill: "forwards"});
        });

        const emailButton = document.getElementById('nav-email');
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
    });
</script>

<style>
    .fade-enter-from, .fade-leave-to{
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active{
        transition: all .5s ease-out;
    }
</style>