import useUserStore from 'store/user'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import {
  baseRoutes,
  generateUserMenuFromRoutes,
  generateUserRouteByAuth,
  routes,
  setLayouts,
} from '@/router/routes'
import router from '@/router'

interface AppState {
  baseRoutes: RouteRecordRaw[]
  menuAuth: Array<number>
}

interface AppGetters {
  userRoutes: RouteRecordRaw[]
  userMenuList: MenuOption[]
}
interface AppActions {
  initRoutes: () => void
}
const useAppStore = defineStore<string, AppState, AppGetters, AppActions>({
  id: 'app',
  state() {
    return {
      baseRoutes: baseRoutes,
    }
  },
  getters: {
    userRoutes() {
      const { routesAuth } = useUserStore()
      return generateUserRouteByAuth(routes, routesAuth)
    },
    userMenuList() {
      return generateUserMenuFromRoutes(
        this.userRoutes as unknown as RouteRecordRaw[],
      )
    },
  },
  actions: {
    initRoutes() {
      console.log(this)
      const routes = setLayouts(this.userRoutes)
      routes.forEach((route: RouteRecordRaw) => {
        router.addRoute(route)
      })
      console.log(router.getRoutes())
    },
  },
})

export default useAppStore
