<template>
  <n-result m-auto status="success" title="成功" description="我知道你渴望成功">
    <template #footer> {{ time }} </template>
  </n-result>
</template>

<script setup lang="ts">
import useUserStore from 'store/user'
import { useWebWorker, useWebWorkerFn } from '@vueuse/core'
const time = ref(1)
setInterval(() => {
  time.value += 1
})
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
