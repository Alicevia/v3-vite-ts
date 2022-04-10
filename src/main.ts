import { getTestJson } from './api/test'
import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import './utils/request'
import './style/index.scss'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

getTestJson().then((res) => {
  console.log(res)
})
