import type { AxiosResponse } from 'axios'
import type { ResponseData } from './../../types/response.d'
import { useAxios } from '@vueuse/integrations/useAxios'
import { defineStore } from 'pinia'
import originRoutes from 'virtual:generated-pages'
import type { RouteRecordRaw } from 'vue-router'
interface RouteMap {
  [key: string]: RouteRecordRaw
}
interface AppState {
  originMenu: RouteRecordRaw[]
  routeMap: RouteMap
  menuAuth: Array<string>
}

interface AppGetters {
  [key: string]: any
}
interface AppActions {
  getMenuAuth: () => Promise
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
      originMenu: originRoutes.filter(
        (item) => !(item.meta && item.meta.isMenu === false),
      ),
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

export default useAppStore
