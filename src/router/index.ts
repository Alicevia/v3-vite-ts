import { router } from '@/router'
import { ROUTE_KEY, ROUTE_NAME } from './../enums/ROUTE'
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
    if (to.meta.key !== ROUTE_KEY.LOGIN) {
      return next()
    }
  }

  if (isLogin) {
    if (to.meta.key === ROUTE_KEY.LOGIN) return next({ name: 'index' })
    return next()
  }
  if (token) {
    try {
      await fetchUserInfo()
      if (to.meta.key === ROUTE_KEY.LOGIN) return next({ name: 'index' })

      return next(to)
    } catch (e) {
      console.info(401, e)
    }
  }
  if (to.meta.key === ROUTE_KEY.LOGIN) return next()
  return next({ name: ROUTE_NAME.LOGIN })
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
