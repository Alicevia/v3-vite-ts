import { baseRoutes } from './routes'
import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from 'store/user'
import { WHITE_LIST } from '@/enums'
import { useTitle } from '@vueuse/core'
const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes,
})
router.beforeEach(async (to, from, next) => {
  $loadingBar?.start()
  const { token, isLogin, fetchUserInfo } = useUserStore()
  if (WHITE_LIST.includes(to.meta.key)) {
    if (to.meta.key === 6 && (isLogin || token)) return next({ name: 'index' })
    return next()
  }
  if (isLogin) {
    if (to.meta.key === 6) return next({ name: 'index' })
    return next()
  }
  if (token) {
    try {
      await fetchUserInfo()
      return next(to)
    } catch {
      console.dir(401)
    }
  }
  return next({ name: 'login' })
})

const docTitle = useTitle()

router.afterEach((to) => {
  $loadingBar?.finish()
  const { title } = to.meta || {}
  if (title) {
    docTitle.value = title
  }
})
export default router
