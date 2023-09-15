<template>
    <cursor/>
    <main id="element">
        <header class="experience-header">
            <h1 class="experience-title">ARCANE</h1>
        </header>

        <projectFooter />
    </main>
</template>

<script setup>
    import cursor from '@/components/cursor.vue'
    import luxy from 'luxy.js';
    import { onMounted } from 'vue';
    
    onMounted(() => {
        luxy.init({
            wrapper: '#element',
        });
    });
</script>