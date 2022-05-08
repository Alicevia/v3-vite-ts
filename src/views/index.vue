<template>
  <n-result m-auto status="success" title="成功" description="我知道你渴望成功">
    <template #footer>
      <span :style="{ color: $themeVars.primaryColor }">
        {{ time }}-{{ $themeVars('primaryColor') }}
      </span>
    </template>
  </n-result>
</template>

<script setup lang="ts">
import useUserStore from 'store/user'
import { useWebWorker, useWebWorkerFn } from '@vueuse/core'
import useThemeStore from 'store/theme'
const time = ref(1)
setInterval(() => {
  time.value += 1
})
const themeStore = useThemeStore()
console.log(themeStore)
const route = useRoute()
const userStore = useUserStore()
const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn((dates) => {
  return 12
})
</script>
<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  title: 主页
  key: 1
  sort: 0
  icon: BalloonSharp
  keepAlive: false
</route>
