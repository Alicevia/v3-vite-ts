import useThemeStore from 'store/theme'
import { useDialog, useLoadingBar, useMessage, useThemeVars } from 'naive-ui'

const AppGlobalSetting = defineComponent({
  setup: (props, { slots }) => {
    const themeStore = useThemeStore()
    themeStore.themeVars = useThemeVars()
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
    return () => slots.default()
  },
})

export default AppGlobalSetting
