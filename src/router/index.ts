import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import Label from '@/views/Label.vue'
import Statistics from '@/views/Statistics.vue'
import NoFound from '@/views/NoFound.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // 默认页面
  {
    path: "/",
    redirect: "/money"
  },
  {
    path: "/money",
    component: Money
  },
  {
    path: "/label",
    component: Label
  },
  {
    path: "/statistics",
    component: Statistics
  },
  {
    path: "*",
    component: NoFound
  }
]

const router = new VueRouter({
  routes
})

export default router
