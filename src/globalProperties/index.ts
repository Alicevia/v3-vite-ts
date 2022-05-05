import useUserStore from 'store/user'
import { ref, computed } from 'vue'
export const setupGlobalProperties = (app) => {
  const userStore = useUserStore()
  app.config.globalProperties.auth = computed(() => userStore.token)
}
