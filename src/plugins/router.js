import { createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/experience',
        name: 'experience',
        component: () => import('@/views/Experience.vue')
    },
    {
        path: '/charm',
        name: 'charm',
        component: () => import('@/views/Charm.vue')
    },
    {
        path: '/bright',
        name: 'bright',
        component: () => import('@/views/Bright.vue')
    },
    {
        path: '/arcane',
        name: 'arcane',
        component: () => import('@/views/Arcane.vue')
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || {top:0}
        return {top:null, left:null, behavior:null}
    }
});

export default router;