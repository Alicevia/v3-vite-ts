import { getUserInfo } from '@/api/test'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import useAppStore from './app'
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
        const { initRoutes } = useAppStore()
        this.token = token
        this.isLogin = true
        this.name = name
        this.routesAuth = routesAuth
        initRoutes()
      }
    },
    fetchLogout() {
      const { clearRoutes } = useAppStore()
      this.$reset()
      this.token = null
      clearRoutes()
    },
  },
})
export default useUserStore
