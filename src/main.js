import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'amfe-flexible'

// const app = createApp();
createApp(App).use(router).mount('#app')
