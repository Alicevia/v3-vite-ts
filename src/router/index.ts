import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import flatRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
const routes: RouteRecordRaw[] = []
flatRoutes.forEach((v) => {
  routes.push(v?.meta?.layout !== false ? setupLayouts([v])[0] : v)
})
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
