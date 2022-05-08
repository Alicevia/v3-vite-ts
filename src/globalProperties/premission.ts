import useUserStore from 'store/user'
export default (app) => {
  const userStore = useUserStore()
  app.config.globalProperties.$permission = function (value) {
    const auth = computed(() => userStore.buttonAuth)
    return auth.value.includes(value)
  }
}
