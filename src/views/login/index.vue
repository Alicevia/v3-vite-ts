<template>
  <n-layout h-screen>
    <div>
      <n-button @click="handleLogin">
        login
      </n-button>
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import { ROUTE_NAME } from '@/enums'
import useUserStore from 'store/user'

const userStore = useUserStore()
const router = useRouter()
const handleLogin = async () => {
  await userStore.fetchUserInfo()
  return router.push({ name: ROUTE_NAME.INDEX })
}
</script>
<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  key: 6
  layout: false
  title: 登录
</route>
