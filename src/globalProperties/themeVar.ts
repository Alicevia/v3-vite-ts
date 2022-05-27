import useThemeStore from 'store/theme'
import type { App } from 'vue'
export default (app:App) => {
  const themeStore = useThemeStore()
  console.log('themeStore', themeStore.themeVars)
  app.config.globalProperties.$themeVars = function (key) {
    return themeStore.themeVars[key]
  }
}
