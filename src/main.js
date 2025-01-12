import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css';
import './assets/assets/css/vendor.min.css';
import './assets/assets/css/app.min.css';


const app = createApp(App)

// use router
app.use(router)
app.mount('#app')