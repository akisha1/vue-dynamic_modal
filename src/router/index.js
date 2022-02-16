import Vue from 'vue'
import VueRouter from 'vue-router'
import ModalParent from '../views/ModalParent.vue'
import AnotherModalParent from '../views/AnotherModalParent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ModalParent',
    component: ModalParent
  },
  {
    path: '/AnotherModalParent',
    name: 'AnotherModalParent',
    component: AnotherModalParent
  },
]

const router = new VueRouter({
  routes
})

export default router
