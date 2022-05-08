import useThemeStore from 'store/theme'
export default (app) => {
  const themeStore = useThemeStore()
  app.config.globalProperties.$themeVars = function (key) {
    return themeStore.themeVars[key]
  }
}
