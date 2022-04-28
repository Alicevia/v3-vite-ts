<template>
  <n-layout h-screen>
    <div>
      <n-button @click="handleLogin">login</n-button>
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import useUserStore from 'store/user'
import useAppStore from 'store/app'

const userStore = useUserStore()
const appStore = useAppStore()
const router = useRouter()
const handleLogin = async () => {
  await userStore.fetchUserInfo()
  appStore.initRoutes()
  router.push({ path: '/' })
}
</script>
<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  key: 6
  layout: false
  title: 登录
</route>
