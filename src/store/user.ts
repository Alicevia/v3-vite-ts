import { getUserInfo } from '@/api/test'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      token: useStorage('token', null),
      name: useStorage('name', null),
      routesAuth: useStorage('routesAuth', []),
    }
  },
  actions: {
    async fetchUserInfo() {
      const { data, error } = await getUserInfo()
      if (error.value) {
        return Promise.reject(error.value)
      } else {
        const { token, name, routesAuth } = data.value.data
        this.token = token
        this.name = name
        this.routesAuth = routesAuth
      }
    },
  },
})
export default useUserStore
