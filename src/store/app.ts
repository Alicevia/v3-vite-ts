import { renderIcon } from 'hooks/components/icon'
import type { AxiosResponse } from 'axios'
import type { ResponseData } from './../../types/response.d'
import { useAxios } from '@vueuse/integrations/useAxios'
import { defineStore } from 'pinia'
import originRoutes from 'virtual:generated-pages'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { renderLabel } from 'hooks/components/menu'

interface RouteMap {
  [key: string]: RouteRecordRaw
}

interface AppState {
  originMenu: MenuOption[]
  routeMap: RouteMap
  menuAuth: Array<string>
}

interface AppGetters {
  [key: string]: any
}
interface AppActions {
  getMenuAuth: () => Promise<MenuOption[]>
}
const useAppStore = defineStore<string, AppState, AppGetters, AppActions>({
  id: 'app',
  state() {
    return {
      routeMap: originRoutes.reduce((pre, route) => {
        const key: string = route.meta?.key as string
        if (key) pre[key] = route
        return pre
      }, {} as RouteMap),
      originMenu: generateOriginMenu(originRoutes),
      menuAuth: [],
    }
  },
  getters: {
    userMenuList() {
      const userRoute = this.menuAuth.reduce((pre, item) => {
        const route = this.routeMap[item]
        if (route) pre.push(route)
        return pre
      }, [])
    },
  },
  actions: {
    async getMenuAuth() {
      const { data, error } = await useAxios<ResponseData>('/public/auth.json')
      if (error.value) {
        return Promise.reject(error.value)
      } else {
        this.menuAuth = data.value?.data
      }
    },
  },
})
function generateOriginMenu(routes: RouteRecordRaw[]): MenuOption[] {
  return routes.reduce((pre, route: RouteRecordRaw) => {
    const { title, key, icon } = route.meta ?? {}
    let temp: MenuOption = {}
    if (key && route.name && title && icon) {
      temp = {
        label: route.path ? renderLabel(route.name, title) : title,
        key,
        icon: renderIcon(icon),
      }
      if (route.children) {
        temp.children = generateOriginMenu(route.children)
      }
    } else {
      return pre
    }
    pre.push(temp)
    return pre
  }, [] as MenuOption[])
}
export default useAppStore
