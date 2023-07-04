import * as bootstrap from 'bootstrap'
import './styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Dashboard
    }
  ]
})
const instance = createApp(App)

instance.use(router)
instance.mount('#app')
