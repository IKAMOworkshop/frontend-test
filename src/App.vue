<template>
    <cursor/>
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
        <div  id="element">
            <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
        </div>
    </div>

    <canvas id="bg" ref="experience"></canvas>
</template>

<script setup>
    import { RouterView } from 'vue-router'
    import luxy from 'luxy.js';
    import cursor from '@/components/cursor.vue'

    // Three JS
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import gsap from 'gsap';
    import { onMounted } from 'vue';

    // Scene
    const scene = new THREE.Scene();

    // Create our shpere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
    color: '#00ffff',
    roughness: 0.5,
    });
    const mesh = new THREE.Mesh(geometry, material);

    // Sizes
    const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;
    scene.add(camera);

    // Light
    const light = new THREE.PointLight(0xffffff, 10, 100);
    light.position.set(3, 3, 5);

    const ambientLight = new THREE.AmbientLight(0x404040);

    // Add to Scene
    scene.add(camera, mesh, light, ambientLight);

    onMounted(() => {
        luxy.init({
            wrapper: '#element',
            wrapperSpeed: 0.09,
        });

        // Renderer
        const canvas = document.querySelector('#bg');
        const renderer = new THREE.WebGLRenderer({canvas});

        // Define how big the canvas and where to render it
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(2);
        renderer.setClearColor( 0x000000, 0 );
        renderer.render(scene, camera);

        // Controls
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 5;

        // Resize
        window.addEventListener('resize', () => {
            // Update Size
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            // Update Camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
        });

        // Loop Function
        const loop = () => {
            controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(loop);
        };

        loop();

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