<template>
    <nav>
        <ul class="nav-group">
            <li><router-link :to="{name: 'home'}" class="router-link"><img src="@/assets/mock-logo.svg" alt=""></router-link></li>
            <div class="nav-link-group">
                <li><router-link :to="{name: 'about'}" class="router-link">About.</router-link></li>
                <li><router-link :to="{name: 'experience'}" class="router-link">Experience.</router-link></li>
            </div>
        </ul>
    </nav>
    <router-view></router-view>
</template>

<script setup>
    import { RouterView } from 'vue-router'
</script>