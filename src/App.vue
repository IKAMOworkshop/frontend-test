<template>
    <nav>
        <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'about'}">About</router-link></li>
        </ul>
    </nav>
    <router-view></router-view>
</template>

<script setup>
    import { RouterView } from 'vue-router'
</script>