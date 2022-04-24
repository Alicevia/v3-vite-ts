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
  return routes.reduce((pre, route) => {
    const { title, id, icon } = route.meta ?? {}
    let temp: MenuOption = {}
    if (id && route.name && title && icon) {
      temp = {
        label: renderLabel(route.name, title),
        key: route.name as string,
        icon: renderIcon(icon as string),
        id,
      }
    } else if (route.children) {
      const [a, ...rest] = generateOriginMenu(route.children)
      if (a) {
        temp = { ...a }
        temp.children = rest
      }
    } else {
      return pre
    }
    pre.push(temp)
    return pre
  }, [] as MenuOption[])
}
export default useAppStore
