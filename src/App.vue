<template>
    <nav>
        <ul class="nav-group">
            <li><router-link :to="{name: 'home'}" class="router-link"><img src="@/assets/mock-logo.svg" alt=""></router-link></li>
            <div class="nav-link-group">
                <li class="router-list-item"><router-link :to="{name: 'about'}" class="router-link">About.</router-link></li>
                <li class="router-list-item"><router-link :to="{name: 'experience'}" class="router-link">Experience.</router-link></li>
                <ul class="social-link-group">
                    <li><button><img src="@/assets/mail.svg" alt="" class="social-link"></button></li>
                    <li><a href="https://github.com/IKAMOworkshop" target="_blank"><img src="@/assets/github.svg" alt="" class="social-link"></a></li>
                    <li><a href="https://www.linkedin.com/in/jeremystudio/" target="_blank"><img src="@/assets/linkedin.svg" alt="" class="social-link"></a></li>
                </ul>
            </div>
        </ul>
    </nav>
    <router-view></router-view>
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
    });
</script>