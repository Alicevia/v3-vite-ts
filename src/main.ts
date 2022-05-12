import { setupGlobalProperties } from './globalProperties/index'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './utils/request'
import './style/index.scss'
import 'uno.css'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
setupGlobalProperties(app)
