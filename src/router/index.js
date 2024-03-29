import { createRouter, createWebHistory } from 'vue-router'
import GridView from '../views/GridView.vue'
import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'
import MenthorView1 from '../views/MenthorView1.vue'
import QRView from '../views/QRView.vue'
import InteractiveRating from '../views/InteractiveRating.vue'
import ResultSummary from '../views/ResultSummary.vue'


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
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/menthor1',
    name: 'MenthorView1',
    component: MenthorView1
  },
  {
    path: '/qr',
    name: 'QRView',
    component: QRView
  },
  {
    path: '/rating',
    name: 'IneractiveRating',
    component: InteractiveRating
  },
  {
    path: '/resultsummary',
    name: 'ResultSummaryView',
    component: ResultSummary
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
