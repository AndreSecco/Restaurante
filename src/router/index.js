import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/sobre-projeto',
    name: 'sobre-projeto',
    component: () => import( '../views/SobreProjeto.vue')
  },
  {
    path: '/sobre-autor',
    name: 'sobre-autor',
    component: () => import( '../views/SobreAutor.vue')
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import( '../views/pedidos/Pedidos.vue')
  },
  {
    path: '/como-fazer',
    name: 'como-fazer',
    component: () => import( '../views/pedidos/ComoFazer.vue')
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: () => import( '../views/relatorios/Clientes.vue')
  },
  {
    path: '/hamburguers',
    name: 'hamburguers',
    component: () => import( '../views/relatorios/Hamburguers.vue')
  },
  {
    path: '/Ingredientes',
    name: 'Ingredientes',
    component: () => import( '../views/relatorios/Ingredientes.vue')
  },
  {
    path: '/Painel',
    name: 'Painel',
    component: () => import( '../views/pedidos/Painel.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
