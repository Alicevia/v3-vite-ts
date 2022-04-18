<template>
  <n-config-provider :theme="darkTheme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <AppGlobalSetting></AppGlobalSetting>
            <slot></slot>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script setup>
import { darkTheme } from 'naive-ui'
import AppGlobalSetting from './AppGlobalSetting'
const theme = ref(null)
theme.value = darkTheme
</script>
<script>
export default {
  name: 'AppProvider',
}
</script>
