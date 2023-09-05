<template>
    <canvas id="bg" ref="experience"></canvas>
    <header class="landing-hero">
        <div class="hero-row">
            <h1 class="hero-title">></h1>
            <h1 class="hero-title">HELLO THERE</h1>
        </div>
        <div class="hero-row">
            <h1 class="hero-title">I'M JEREMY</h1>
            <h1 class="hero-title">!</h1>
        </div>
        <div class="hero-row">
            <h1 class="hero-title">></h1>
            <h1 class="hero-title">I DESIGN</h1>
        </div>
        <div class="hero-row">
            <h1 class="hero-title">AND DEVELOP</h1>
            <h1 class="hero-title">.</h1>
        </div>
    </header>
    <main>
        <section class="work-title-section">
            <h2 class="landing-section-title">WORKS.</h2>
        </section>
        <section class="landing-project-section">
            <projectTile />
        </section>
    </main>
  </template>
  
  <script setup>
    import projectTile from '@/components/projectTile.vue'

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
    });
  </script>