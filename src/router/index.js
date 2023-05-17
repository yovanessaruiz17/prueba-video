import { createRouter, createWebHistory } from 'vue-router'
import PaginaTienda from '../views/PaginaTienda.vue'

const routes = [
  {
    path: '/',
    name: 'tiendita',
    component: PaginaTienda,
  },
  {
    path: '/car',
    name: 'carrito',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PaginaCarrito.vue')
  },
  {
    path: '/description',
    name: 'Descripcion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PaginaDescripcion.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
