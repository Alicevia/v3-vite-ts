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
      buttonAuth: [],
    }
  },
  getters: {},
  actions: {
    async fetchUserInfo() {
      const { data, error } = await getUserInfo()
      if (error.value) {
        this.clearUserInfo()
        return Promise.reject(error.value)
      }
      const { token, name, routesAuth, buttonAuth } = data.value.data
      const { initRoutes } = useRouteStore()
      this.token = token
      this.isLogin = true
      this.name = name
      this.routesAuth = Array.from(
        new Set(routesAuth.concat(PRIVATE_WHITE_LIST)),
      )
      this.buttonAuth = buttonAuth
      initRoutes()
    },
    clearUserInfo() {
      const { clearRoutes } = useRouteStore()
      this.$reset()
      this.token = null
      clearRoutes()
    },
  },
})
export default useUserStore
