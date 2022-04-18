import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import flatRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
const routes: RouteRecordRaw[] = flatRoutes.reduce(
  (pre: RouteRecordRaw[], v: RouteRecordRaw) => {
    if (v.meta && v.meta.layout === false) {
      pre.push(v)
    } else {
      const item = setupLayouts([v])[0]

      const extendLayout = v.meta?.extendLayout
      if (extendLayout) {
        const layoutRoute = flatRoutes.find(
          (item) => item.name === extendLayout,
        )
        item.children = [
          {
            path: '',
            component: layoutRoute?.component,
            children: item.children,
          } as RouteRecordRaw,
        ]
      }
      pre.push(item)
    }
    return pre
  },
  [],
)

console.log({ flatRoutes, routes })
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
