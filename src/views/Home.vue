<template>
    <canvas id="bg" ref="experience"></canvas>
    <h1>Home</h1>
    <counter />
  </template>
  
  <script setup>
    import counter from '@/components/Counter.vue'

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