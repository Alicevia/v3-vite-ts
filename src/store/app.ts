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
  menuAuth: Array<number>
  clearRoutesCbStack: () => void[]
}

interface AppGetters {
  userRoutes: RouteRecordRaw[]
  userMenuList: MenuOption[]
}
interface AppActions {
  initRoutes: () => void
  clearRoutes: () => void
}
const useAppStore = defineStore<string, AppState, AppGetters, AppActions>({
  id: 'app',
  state() {
    return {
      baseRoutes: baseRoutes,
      clearRoutesCbStack: [],
    }
  },
  getters: {
    userRoutes() {
      const { routesAuth } = useUserStore()
      return generateUserRouteByAuth(privateRoutes, routesAuth)
    },
    userMenuList() {
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

export default useAppStore
