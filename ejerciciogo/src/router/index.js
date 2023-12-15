import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Heroes from '../views/Heroes.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/heroes', component: Heroes },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  routes,
})

export default router
