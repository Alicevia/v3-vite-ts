import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import flatRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = flatRoutes.reduce(
  (pre: RouteRecordRaw[], route: RouteRecordRaw) => {
    if (route.meta && route.meta.layout === false) {
      pre.push(route)
    } else {
      pre.push(...setupLayouts([route]))
    }
    return pre
  },
  [],
)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
