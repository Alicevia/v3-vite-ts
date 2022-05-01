import { PRIVATE_WHITE_LIST } from './../enums/ROUTE'
import { getUserInfo } from '@/api/test'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import useRouteStore from './route'
const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      token: useStorage('token', null),
      name: undefined,
      routesAuth: [],
      isLogin: false,
    }
  },
  actions: {
    async fetchUserInfo() {
      const { data, error } = await getUserInfo()
      if (error.value) {
        this.$reset()
        return Promise.reject(error.value)
      } else {
        const { token, name, routesAuth } = data.value.data
        const { initRoutes } = useRouteStore()
        this.token = token
        this.isLogin = true
        this.name = name
        this.routesAuth = Array.from(
          new Set(routesAuth.concat(PRIVATE_WHITE_LIST)),
        )
        initRoutes()
      }
    },
    fetchLogout() {
      const { clearRoutes } = useRouteStore()
      this.$reset()
      this.token = null
      clearRoutes()
    },
  },
})
export default useUserStore
