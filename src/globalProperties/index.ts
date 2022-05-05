import useUserStore from 'store/user'
import { ref, computed } from 'vue'
export const setupGlobalProperties = (app) => {
  const userStore = useUserStore()
  app.config.globalProperties.permission = function (value) {
    const auth = computed(() => userStore.buttonAuth)
    return auth.value.includes(value)
  }
}
