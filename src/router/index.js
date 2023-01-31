import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    name: "LaragigsList",
    path: "laragigs",
    component: () => import('./../views/LaragigsListView.vue')
  },
  {
    name: "Battery",
    path: "laragigs",
    component: () => import('./../views/BatteryView.vue')
  },
  {
    name: "SlideBattery",
    path: "laragigs",
    component: () => import('./../views/SlideBatteryView.vue')
  },
  {
    name: "Model",
    path: "models",
    component: () => import('./../views/ModelView.vue')
  },
  {
    name: "StopTimer",
    path: "stop-timer",
    component: () => import('./../views/StopTimerView.vue')
  }, 
  {
    name: "Job",
    path: "job",
    component: () => import('./../views/JobView.vue')
  },
  {
    name: "Worker", 
    path: "worker",
    component: () => import('./../views/WorkerView.vue')

  },
  {
    name: "UploadImage",
    path: "upload",
    component: () => import('./../views/UploadView.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
