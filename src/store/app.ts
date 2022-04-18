import type { ResponseData } from './../../types/response.d'
import { useAxios } from '@vueuse/integrations/useAxios'
import { defineStore } from 'pinia'
import originRoutes from 'virtual:generated-pages'

const useAppStore = defineStore({
  id: 'app',
  state() {
    return {
      originRoutes: originRoutes.filter(
        (item) => !(item.meta && item.meta.isMenu === false),
      ),
      menuAuth: [] as string[],
    }
  },
  actions: {
    async getMenuAuth() {
      const { data, error } = await useAxios<ResponseData>('/public1/auth.json')
      if (error.value) {
        return Promise.reject(error.value)
      } else {
        this.menuAuth = data.value?.data
      }
    },
  },
})

export default useAppStore
