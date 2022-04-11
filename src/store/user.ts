import { defineStore } from 'pinia'

const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      token: '123',
    }
  },
  actions: {},
})
export default useUserStore
