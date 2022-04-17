import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import flatRoutes from 'virtual:generated-pages'
import a from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
console.log('flatRoutes', a)
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

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
