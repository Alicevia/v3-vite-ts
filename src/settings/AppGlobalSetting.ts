import { useDialog, useLoadingBar, useMessage } from 'naive-ui'
import { defineComponent } from 'vue'
const AppGlobalSetting = defineComponent({
  render: () => {
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
    return null
  },
})

export default AppGlobalSetting
