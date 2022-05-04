<template>
  <n-config-provider
    :theme="theme.myTheme"
    :theme-overrides="theme.themeOverrides"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <AppGlobalSetting></AppGlobalSetting>
            <router-view></router-view>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import AppGlobalSetting from '@/settings/AppGlobalSetting'
import useThemeStore from 'store/theme'
const theme = useThemeStore()
</script>
<script lang="ts">
export default {
  name: 'App',
}
</script>
