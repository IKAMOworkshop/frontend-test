import { createApp } from 'vue'
import '@/style/reset.css'
import '@/style/style.css'
import App from '@/App.vue'
import router from './plugins/router'
import luxy from 'luxy.js';


createApp(App).use(router, luxy).mount('#app');