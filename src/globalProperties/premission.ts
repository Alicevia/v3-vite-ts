import useUserStore from 'store/user'
import type { App } from 'vue'
export default (app:App) => {
  const userStore = useUserStore()
  app.config.globalProperties.$permission = function (value) {
    const auth = computed(() => userStore.buttonAuth)
    return auth.value.includes(value)
  }
}
