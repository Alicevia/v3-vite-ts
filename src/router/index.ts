import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import flatRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
const routes: RouteRecordRaw[] = []
console.log(flatRoutes)
flatRoutes.forEach((v) => {
  routes.push(v?.meta?.layout !== false ? setupLayouts([v])[0] : v)
})
console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
