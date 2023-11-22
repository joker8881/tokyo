import './assets/main.scss'

import { createApp } from 'vue'
//Pinia 1
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
//Pinia 2
const pinia = createPinia()

app.use(router)
//Pinia3
app.use(pinia)

app.mount('#app')
