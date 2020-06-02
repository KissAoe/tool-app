import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue')
  }
]

// 加载其他子route
const viewsRoutes = require.context('../views/', true, /router\.ts$/)
viewsRoutes.keys().forEach((view) => {
  const route = viewsRoutes(view).default.route
  if (Array.isArray(route)) {
    routes.unshift(...route)
  } else {
    routes.unshift(route)
  }
})

console.debug(routes)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
