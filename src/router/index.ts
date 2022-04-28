import { baseRoutes } from './routes'
import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from 'store/user'
import { WHITE_LIST } from '@/enums'

const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes,
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (WHITE_LIST.includes(to.meta.key)) return next()
  const { token } = useUserStore()
  if (token) {
    next()
  } else {
    next({ name: 'login' })
  }
})
export default router
