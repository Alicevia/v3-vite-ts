<template>
  <div>
    <n-button @click="handleLogin">
      toHome
    </n-button>
    <n-button @click="toIndex">
      index
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_NAME } from '@/enums'

const router = useRouter()
const handleLogin = async () => {
  return router.push({ name: ROUTE_NAME.HOME })
}
const toIndex = () => {
  router.push({ path: '/' })
}
</script>
<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  key: 7
  title: test1
  icon: AccessibilitySharp
</route>
