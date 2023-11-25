import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// 引入 Bootstrap 的 CSS 樣式表
import './assets/main.scss' //初始化工作環境
import "bootstrap"

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')