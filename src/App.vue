<template>
  <n-config-provider>
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
<script setup>
import AppGlobalSetting from '@/settings/AppGlobalSetting'
</script>
<script>
export default {
  name: 'App',
}
</script>
