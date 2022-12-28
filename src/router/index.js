import { createRouter, createWebHistory } from 'vue-router'
import GridView from '../views/GridView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/grid',
    name: 'GridView',
    component: GridView
  },
  {
    path: '/product',
    name: 'ProdcuctView',
    component: ProductView
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
