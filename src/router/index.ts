import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes)
})

router.beforeEach((to) => {
  if (to.path == '/abc') {
    return '/'
  }
})

export default router
