<template>
  <div>
    <n-button @click="handler">
      tologin
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_NAME } from '@/enums'

const router = useRouter()
const handler = () => {
  router.push({ name: ROUTE_NAME.LOGIN })
}
</script>
<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  key: 4
  title: 个人中心
  icon: Alarm
</route>
