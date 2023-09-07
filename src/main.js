import { createApp } from 'vue'
import '@/style/reset.css'
import '@/style/style.css'
import App from '@/App.vue'
import router from './plugins/router'
import CursorFx from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';


createApp(App).use(router, CursorFx).mount('#app');