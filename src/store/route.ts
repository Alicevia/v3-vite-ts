import useUserStore from 'store/user'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import {
  baseRoutes,
  generateUserMenuFromRoutes,
  generateUserRouteByAuth,
  privateRoutes,
  setLayouts,
} from '@/router/routes'
import router from '@/router'

interface AppState {
  baseRoutes: RouteRecordRaw[]
  clearRoutesCbStack: (() => void)[]
}

const useRouteStore = defineStore({
  id: 'route',
  state(): AppState {
    return {
      baseRoutes: baseRoutes,
      clearRoutesCbStack: [],
    }
  },
  getters: {
    userRoutes(): RouteRecordRaw[] {
      const { routesAuth } = useUserStore()
      return generateUserRouteByAuth(privateRoutes, routesAuth)
    },
    userMenuList(): MenuOption[] {
      return generateUserMenuFromRoutes(
        this.userRoutes as unknown as RouteRecordRaw[],
      )
    },
  },
  actions: {
    initRoutes() {
      const routes = setLayouts(this.userRoutes)
      routes.forEach((route: RouteRecordRaw) => {
        this.clearRoutesCbStack.push(router.addRoute(route))
      })
    },
    clearRoutes() {
      this.clearRoutesCbStack.forEach((removeRoute) => removeRoute())
      this.clearRoutesCbStack = []
    },
  },
})

export default useRouteStore
