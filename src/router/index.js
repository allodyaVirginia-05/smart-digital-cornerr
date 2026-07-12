import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeSection.vue'
import Product from '../views/ProductSection.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import GallerySection from '../views/GallerySection.vue'
import Contact from '../views/ContactSection.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/product',
      component: Product,
    },

    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetailView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GallerySection,
    },
    {
      path: '/contact',
      component: Contact,
    },
  ],
})

export default router
