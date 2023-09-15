<template>
    <div>
        <cursor/>
        <div id="element">
            <header class="experience-header">
                <h1 class="experience-title">ARCANE</h1>
            </header>

            <projectFooter />
        </div>
    </div>
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