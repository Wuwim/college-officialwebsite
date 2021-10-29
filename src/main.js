import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'amfe-flexible'


import { Swipe, SwipeItem } from 'vant';

import { Toast } from 'vant';
const app = createApp();
app.use(Swipe);
app.use(SwipeItem);
app.use(Toast);
createApp(App).use(router).mount('#app')
